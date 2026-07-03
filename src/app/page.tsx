
'use client';

import { useState } from 'react';
import { GlitchText } from '@/components/cyber/GlitchText';
import { DecisionTree } from '@/components/cyber/DecisionTree';
import { TicketAdvisor } from '@/components/cyber/TicketAdvisor';
import { DelayTimer } from '@/components/cyber/DelayTimer';
import { ResponseDecoder } from '@/components/cyber/ResponseDecoder';
import { AttemptLog } from '@/components/cyber/AttemptLog';
import { Separator } from '@/components/ui/separator';
import { ShieldAlert, Lock, Info, ChevronRight, Briefcase, Terminal, Activity, BrainCircuit, SearchCode, Timer } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function Home() {
  const [diagnosis, setDiagnosis] = useState<string | undefined>();

  return (
    <main className="min-h-screen pb-20 pt-6 px-4 max-w-md mx-auto flex flex-col gap-8">
      {/* Header Briefing */}
      <header className="flex flex-col items-center text-center space-y-2 py-6">
        <div className="relative mb-2">
          <div className="w-12 h-12 border-2 border-primary rotate-45 flex items-center justify-center animate-pulse">
            <ShieldAlert className="w-6 h-6 text-primary -rotate-45" />
          </div>
        </div>
        <h1 className="text-4xl font-headline font-black tracking-tighter uppercase">
          Unban<span className="text-primary"> Strategy</span>
        </h1>
        <p className="text-[10px] font-code text-muted-foreground tracking-[0.2em] uppercase">
          Método de Recuperação de Contas de Alto Nível
        </p>
      </header>

      <section className="space-y-4">
        <Accordion type="single" collapsible className="w-full space-y-4 border-none">
          
          {/* Tópico 1: Briefing Executivo */}
          <AccordionItem value="briefing" className="bg-card/50 border border-primary/20 rounded px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="font-headline text-sm uppercase font-bold tracking-wider">Instruções Críticas</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-body text-xs text-muted-foreground leading-relaxed space-y-4 pt-2">
                <p>
                  Sua conta foi neutralizada. Seu objetivo é a restauração estratégica.
                </p>
                <p>
                  Este método é focado em evitar filtros automáticos e engajar suporte humano de forma técnica e calma.
                </p>
                <ul className="space-y-2 mt-4">
                  {[
                    'Evadir gatilhos de filtros automáticos',
                    'Sintetizar solicitações legíveis por humanos',
                    'Analisar padrões de resposta da plataforma',
                    'Manter silêncio operacional pós-envio'
                  ].map((obj, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] uppercase font-medium">
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Tópico 2: Diagnóstico */}
          <AccordionItem value="diagnostic" className="bg-card/50 border border-primary/20 rounded px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-headline text-sm uppercase font-bold tracking-wider">Protocolo de Diagnóstico</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <DecisionTree onDiagnosed={setDiagnosis} />
            </AccordionContent>
          </AccordionItem>

          {/* Tópico 3: Gerador de Tickets */}
          <AccordionItem value="advisor" className="bg-card/50 border border-accent/20 rounded px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <BrainCircuit className="w-5 h-5 text-accent" />
                <span className="font-headline text-sm uppercase font-bold tracking-wider text-accent">Gerador de Protocolo</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <TicketAdvisor prefilledType={diagnosis} />
            </AccordionContent>
          </AccordionItem>

          {/* Tópico 4: Cooldown e Silêncio */}
          <AccordionItem value="cooldown" className="bg-card/50 border border-primary/20 rounded px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Timer className="w-5 h-5 text-primary" />
                <span className="font-headline text-sm uppercase font-bold tracking-wider">Rastreador de Silêncio</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <DelayTimer />
            </AccordionContent>
          </AccordionItem>

          {/* Tópico 5: Decodificador de Respostas */}
          <AccordionItem value="decoder" className="bg-card/50 border border-accent/20 rounded px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <SearchCode className="w-5 h-5 text-accent" />
                <span className="font-headline text-sm uppercase font-bold tracking-wider text-accent">Decodificar Resposta</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <ResponseDecoder />
            </AccordionContent>
          </AccordionItem>

          {/* Tópico 6: Logs de Missão */}
          <AccordionItem value="logs" className="bg-card/50 border border-muted/20 rounded px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-muted-foreground" />
                <span className="font-headline text-sm uppercase font-bold tracking-wider text-muted-foreground">Histórico de Operações</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <AttemptLog />
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </section>

      {/* Strategic Context */}
      <div className="bg-card border border-muted/10 p-4 rounded-lg space-y-4">
        <h3 className="font-headline text-[10px] uppercase tracking-widest flex items-center gap-2 font-bold">
          <Info className="w-3 h-3 text-muted-foreground" />
          Diretrizes Estruturais
        </h3>
        <div className="grid gap-4 font-body text-[10px] text-muted-foreground uppercase leading-tight">
          <div className="space-y-1">
            <span className="text-primary font-bold block">Protocolo A-1: Categoria</span>
            <p>Nunca selecione "Uso de Hacks". Use "Recuperação de Conta". Evita fechamento automático.</p>
          </div>
          <div className="space-y-1">
            <span className="text-accent font-bold block">Protocolo B-7: Assuntos</span>
            <p>Use "Irregularidade Técnica no Acesso" em vez de "Fui Banido". Pareça uma anomalia do sistema.</p>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <footer className="mt-auto pt-6 flex flex-col items-center justify-center space-y-3 opacity-50">
        <Separator className="bg-primary/20 w-24" />
        <div className="flex gap-3 text-[8px] font-code tracking-widest">
          <span>UNBANSTRATEGY_V.5.0</span>
          <span>//</span>
          <span>SÓ ESTRATÉGIA</span>
        </div>
      </footer>
    </main>
  );
}
