
'use client';

import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Timer, AlertTriangle } from 'lucide-react';
import { GlitchText } from './GlitchText';

export function DelayTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  // 7 days in seconds: 604800
  const COOLDOWN = 604800;

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
    <Card className="bg-card border-primary/20 relative overflow-hidden">
      <CardHeader>
        <CardTitle className="font-headline text-xl tracking-wider flex items-center gap-2">
          <Timer className="w-5 h-5 text-primary" />
          <GlitchText text="COOLDOWN_TRACKER" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isActive ? (
          <div className="space-y-4">
            <div className="flex justify-between items-end mb-1">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Operational Silence Required</span>
              <span className="font-code text-primary text-xl font-bold">{formatTime(seconds)}</span>
            </div>
            <Progress value={((COOLDOWN - seconds) / COOLDOWN) * 100} className="h-1 bg-primary/10" />
            <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/10 rounded">
              <AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-[10px] text-primary/80 leading-relaxed uppercase">
                Warning: Any contact before the timer expires increases the probability of permanent account flagging.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <p className="text-sm text-muted-foreground italic">No active cooldown protocol.</p>
            <button 
              onClick={startTimer}
              className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-xs uppercase tracking-tighter font-headline"
            >
              Initiate Post-Ticket Silence
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
