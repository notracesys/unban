
'use client';

import { useEffect, useState } from 'react';
import { getAttempts, UnbanAttempt, clearAttempts } from '@/lib/persistence';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity, Trash2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlitchText } from './GlitchText';

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
    <Card className="bg-card border-muted/20 relative overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-headline text-xl tracking-wider flex items-center gap-2">
          <Activity className="w-5 h-5 text-muted-foreground" />
          <GlitchText text="MISSION_LOGS" className="text-muted-foreground" />
        </CardTitle>
        {attempts.length > 0 && (
          <Button variant="ghost" size="sm" onClick={handleClear} className="h-6 w-6 p-0 text-destructive hover:bg-destructive/10">
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {attempts.length === 0 ? (
          <p className="text-center text-xs text-muted-foreground font-code opacity-50 py-4">NO PREVIOUS LOGS FOUND</p>
        ) : (
          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {attempts.map((att) => (
              <div key={att.id} className="p-3 bg-muted/5 border border-muted/10 rounded flex items-center justify-between group">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${att.type === 'Automatic' ? 'bg-primary' : att.type === 'Manual' ? 'bg-accent' : 'bg-destructive'}`} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{att.type} INITIATIVE</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] text-muted-foreground font-code">
                    <Clock className="w-2.5 h-2.5" />
                    {new Date(att.timestamp).toLocaleString()}
                  </div>
                </div>
                <div className="text-[10px] font-code text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  ID: {att.id}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
