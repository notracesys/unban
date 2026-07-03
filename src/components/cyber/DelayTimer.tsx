
'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle } from 'lucide-react';

export function DelayTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  const COOLDOWN = 604800; // 7 dias

  useEffect(() => {
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const startTimer = () => {
    setSeconds(COOLDOWN);
    setIsActive(true);
  };

  const formatTime = (totalSeconds: number) => {
    const d = Math.floor(totalSeconds / (3600 * 24));
    const h = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  return (
    <div className="space-y-4 py-2">
      {isActive ? (
        <div className="space-y-4">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[9px] uppercase tracking-widest text-muted-foreground">Silêncio Operacional Exigido</span>
            <span className="font-code text-primary text-sm font-bold">{formatTime(seconds)}</span>
          </div>
          <Progress value={((COOLDOWN - seconds) / COOLDOWN) * 100} className="h-1 bg-primary/10" />
          <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/10 rounded">
            <AlertTriangle className="w-3 h-3 text-primary shrink-0 mt-0.5" />
            <p className="text-[9px] text-primary/80 leading-tight uppercase">
              Aviso: Qualquer contato antes do fim do cronômetro aumenta drasticamente a chance de banimento permanente.
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-2 space-y-3">
          <p className="text-[11px] text-muted-foreground italic">Nenhum protocolo de silêncio ativo.</p>
          <button 
            onClick={startTimer}
            className="w-full py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-[10px] uppercase tracking-tighter font-headline font-bold"
          >
            Iniciar Silêncio Pós-Ticket
          </button>
        </div>
      )}
    </div>
  );
}
