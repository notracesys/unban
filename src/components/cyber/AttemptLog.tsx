
'use client';

import { useEffect, useState } from 'react';
import { getAttempts, UnbanAttempt, clearAttempts } from '@/lib/persistence';
import { Trash2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AttemptLog() {
  const [attempts, setAttempts] = useState<UnbanAttempt[]>([]);

  useEffect(() => {
    setAttempts(getAttempts());
  }, []);

  const handleClear = () => {
    clearAttempts();
    setAttempts([]);
  };

  return (
    <div className="py-2">
      {attempts.length > 0 && (
        <div className="flex justify-end mb-2">
          <Button variant="ghost" size="sm" onClick={handleClear} className="h-6 text-[9px] text-destructive hover:bg-destructive/10 uppercase font-bold">
            <Trash2 className="w-3 h-3 mr-1" /> Limpar Logs
          </Button>
        </div>
      )}
      {attempts.length === 0 ? (
        <p className="text-center text-[10px] text-muted-foreground font-code opacity-50 py-4 uppercase">NENHUM LOG ENCONTRADO</p>
      ) : (
        <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1 custom-scrollbar">
          {attempts.map((att) => (
            <div key={att.id} className="p-3 bg-muted/5 border border-muted/20 rounded flex items-center justify-between group">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${att.type === 'Automático' ? 'bg-primary' : att.type === 'Manual' ? 'bg-accent' : 'bg-destructive'}`} />
                  <span className="text-[9px] font-bold uppercase tracking-tighter">INICIATIVA {att.type}</span>
                </div>
                <div className="flex items-center gap-2 text-[8px] text-muted-foreground font-code">
                  <Clock className="w-2.5 h-2.5" />
                  {new Date(att.timestamp).toLocaleString('pt-BR')}
                </div>
              </div>
              <div className="text-[8px] font-code text-muted-foreground/50">
                STATUS: {att.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
