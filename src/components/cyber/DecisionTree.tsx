
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldAlert, Terminal, UserSearch, RotateCcw } from 'lucide-react';
import { GlitchText } from './GlitchText';

const STEPS = [
  {
    id: 'start',
    question: 'Como é a mensagem de banimento?',
    options: [
      { label: 'Genérica, sem detalhes específicos', next: 'automatic' },
      { label: 'Menciona regras específicas ou investigação', next: 'manual' },
      { label: 'Já tive avisos ou banimentos anteriores', next: 'reincident' }
    ]
  },
  {
    id: 'automatic',
    result: 'Banimento Automático',
    description: 'Sistema identificou padrões suspeitos. Alta chance de recuperação estratégica.',
    icon: Terminal,
    type: 'Automático'
  },
  {
    id: 'manual',
    result: 'Banimento Manual',
    description: 'Análise humana confirmou a violação. Probabilidade de recuperação reduzida.',
    icon: UserSearch,
    type: 'Manual'
  },
  {
    id: 'reincident',
    result: 'Banimento Reincidente',
    description: 'Múltiplas ocorrências encontradas. Estratégia é não piorar o status da conta.',
    icon: ShieldAlert,
    type: 'Reincidente'
  }
];

export function DecisionTree({ onDiagnosed }: { onDiagnosed: (type: string) => void }) {
  const [currentStepId, setCurrentStepId] = useState('start');

  const currentStep = STEPS.find(s => s.id === currentStepId);

  const reset = () => setCurrentStepId('start');

  if (!currentStep) return null;

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {currentStep.id === 'start' ? (
        <div className="space-y-4">
          <p className="text-muted-foreground font-medium uppercase text-[10px] tracking-widest">Selecione o indicador:</p>
          <div className="grid gap-2">
            {currentStep.options?.map((opt, i) => (
              <Button 
                key={i} 
                variant="outline" 
                className="justify-start border-primary/20 hover:bg-primary/5 hover:border-primary text-left h-auto py-3 px-4 font-body text-xs"
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
        <div className="space-y-4 text-center py-2">
          <div className="flex justify-center">
            {currentStep.icon && <currentStep.icon className="w-12 h-12 text-primary animate-pulse" />}
          </div>
          <div>
            <h3 className="text-lg font-headline font-bold text-primary mb-1 uppercase tracking-tighter">
              {currentStep.result}
            </h3>
            <p className="text-muted-foreground text-[11px] leading-tight">
              {currentStep.description}
            </p>
          </div>
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary-foreground hover:bg-primary text-[9px] uppercase tracking-widest h-8"
            onClick={reset}
          >
            <RotateCcw className="w-3 h-3 mr-2" />
            Reiniciar Diagnóstico
          </Button>
        </div>
      )}
    </div>
  );
}
