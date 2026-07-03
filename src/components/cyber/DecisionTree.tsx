
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ShieldAlert, Terminal, UserSearch, RotateCcw } from 'lucide-react';
import { GlitchText } from './GlitchText';

const STEPS = [
  {
    id: 'start',
    question: 'How does the ban message look?',
    options: [
      { label: 'Generic, no specific details mentioned', next: 'automatic' },
      { label: 'Mentions specific rules or human investigation', next: 'manual' },
      { label: 'I have had previous warnings or bans', next: 'reincident' }
    ]
  },
  {
    id: 'automatic',
    result: 'Automatic Ban',
    description: 'System-identified suspicious patterns. High chance for strategic recovery.',
    icon: Terminal,
    type: 'Automatic'
  },
  {
    id: 'manual',
    result: 'Manual Ban',
    description: 'Human analysis confirmed the violation. Low recovery probability.',
    icon: UserSearch,
    type: 'Manual'
  },
  {
    id: 'reincident',
    result: 'Reincident Ban',
    description: 'Multiple occurrences found. Extremely low chance; strategy is to not worsen the status.',
    icon: ShieldAlert,
    type: 'Reincident'
  }
];

export function DecisionTree({ onDiagnosed }: { onDiagnosed: (type: string) => void }) {
  const [currentStepId, setCurrentStepId] = useState('start');

  const currentStep = STEPS.find(s => s.id === currentStepId);

  const reset = () => setCurrentStepId('start');

  if (!currentStep) return null;

  return (
    <Card className="bg-card border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
      <CardHeader>
        <CardTitle className="font-headline text-xl tracking-wider flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <GlitchText text="DIAGNOSTIC_PROTOCOL" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {currentStep.id === 'start' ? (
          <div className="space-y-4">
            <p className="text-muted-foreground font-medium uppercase text-xs tracking-widest">Select relevant indicator:</p>
            <div className="grid gap-2">
              {currentStep.options?.map((opt, i) => (
                <Button 
                  key={i} 
                  variant="outline" 
                  className="justify-start border-primary/10 hover:bg-primary/5 hover:border-primary text-left h-auto py-3 px-4 font-body"
                  onClick={() => {
                    setCurrentStepId(opt.next);
                    if (opt.next !== 'start') {
                      const res = STEPS.find(s => s.id === opt.next);
                      if (res?.type) onDiagnosed(res.type);
                    }
                  }}
                >
                  <span className="text-primary mr-3 opacity-50 font-code">0{i+1}</span>
                  {opt.label}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center animate-in fade-in slide-in-from-bottom-2">
            <div className="flex justify-center">
              {currentStep.icon && <currentStep.icon className="w-16 h-16 text-primary animate-pulse" />}
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-2 uppercase tracking-tighter">
                {currentStep.result}
              </h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                {currentStep.description}
              </p>
            </div>
            <Button 
              variant="ghost" 
              className="text-primary hover:text-primary-foreground hover:bg-primary text-xs uppercase tracking-widest"
              onClick={reset}
            >
              <RotateCcw className="w-3 h-3 mr-2" />
              Restart Diagnostic
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
