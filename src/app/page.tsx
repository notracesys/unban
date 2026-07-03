'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DecisionTree } from '@/components/cyber/DecisionTree';
import { TicketAdvisor } from '@/components/cyber/TicketAdvisor';
import { DelayTimer } from '@/components/cyber/DelayTimer';
import { ResponseDecoder } from '@/components/cyber/ResponseDecoder';
import { AttemptLog } from '@/components/cyber/AttemptLog';
import { Separator } from '@/components/ui/separator';
import { ShieldAlert, ChevronRight, Crown, LayoutGrid } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [diagnosis, setDiagnosis] = useState<string | undefined>();

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const modules = [
    {
      id: 'diagnostic',
      tag: 'MÓDULO 1',
      title: 'Diagnóstico de Restrição',
      description: 'Identifique o tipo de bloqueio aplicado à sua conta.',
      image: PlaceHolderImages.find(img => img.id === 'module-diagnostic')?.imageUrl,
      hint: PlaceHolderImages.find(img => img.id === 'module-diagnostic')?.imageHint,
      component: <DecisionTree onDiagnosed={setDiagnosis} />
    },
    {
      id: 'advisor',
      tag: 'MÓDULO 2',
      title: 'Gerador de Protocolos',
      description: 'Sintetize tickets estratégicos para suporte humano.',
      image: PlaceHolderImages.find(img => img.id === 'module-advisor')?.imageUrl,
      hint: PlaceHolderImages.find(img => img.id === 'module-advisor')?.imageHint,
      component: <TicketAdvisor prefilledType={diagnosis} />
    },
    {
      id: 'cooldown',
      tag: 'MÓDULO 3',
      title: 'Silêncio Operacional',
      description: 'Cronômetro de cooldown para evitar banimento permanente.',
      image: PlaceHolderImages.find(img => img.id === 'module-timer')?.imageUrl,
      hint: PlaceHolderImages.find(img => img.id === 'module-timer')?.imageHint,
      component: <DelayTimer />
    },
    {
      id: 'decoder',
      tag: 'MÓDULO 4',
      title: 'Análise de Resposta',
      description: 'Decodifique se a resposta foi de um bot ou humano.',
      image: PlaceHolderImages.find(img => img.id === 'module-decoder')?.imageUrl,
      hint: PlaceHolderImages.find(img => img.id === 'module-decoder')?.imageHint,
      component: <ResponseDecoder />
    },
    {
      id: 'logs',
      tag: 'MÓDULO 5',
      title: 'Histórico de Missão',
      description: 'Logs detalhados de todas as operações realizadas.',
      image: PlaceHolderImages.find(img => img.id === 'module-logs')?.imageUrl,
      hint: PlaceHolderImages.find(img => img.id === 'module-logs')?.imageHint,
      component: <AttemptLog />
    }
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      {/* Hero Section */}
      <header className="w-full relative h-[65vh] flex flex-col justify-end p-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage?.imageUrl && (
            <Image 
              src={heroImage.imageUrl} 
              alt="Hero Background" 
              fill 
              className="object-cover opacity-40"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative z-10 space-y-4 w-full">
          <div className="flex items-center gap-2 text-primary">
            <Crown className="w-5 h-5" />
            <span className="font-headline text-[10px] font-bold tracking-[0.4em] uppercase">zephyrus</span>
          </div>
          <h1 className="text-7xl font-headline font-black tracking-tighter uppercase leading-[0.85] break-words max-w-[90%]">
            UNBAN <span className="text-primary">STRATEGY</span>
          </h1>
          <p className="text-xs text-muted-foreground font-body max-w-[280px] leading-relaxed uppercase tracking-widest opacity-80">
            Macetes e estratégias exclusivas para auxiliar no seu processo de recuperação de contas.
          </p>
        </div>
      </header>

      {/* Grid de Módulos */}
      <section className="w-full max-w-md px-6 py-12 space-y-8">
        <div className="flex items-center gap-2 opacity-50">
          <LayoutGrid className="w-4 h-4" />
          <h2 className="text-[10px] font-headline font-bold uppercase tracking-widest">Sistemas de Recuperação</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-8">
          {modules.map((module) => (
            <AccordionItem 
              key={module.id} 
              value={module.id} 
              className="border-none group overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline p-0 flex flex-col items-start text-left data-[state=open]:mb-6 transition-all">
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/5 transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {module.image && (
                      <Image 
                        src={module.image} 
                        alt={module.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100"
                        data-ai-hint={module.hint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end gap-1">
                    <span className="text-[10px] font-headline font-bold text-primary tracking-[0.3em] mb-2">
                      {module.tag}
                    </span>
                    <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mt-2">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                        Acessar Módulo <ChevronRight className="w-3 h-3 text-primary" />
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="bg-card border border-white/10 rounded-lg p-6 animate-in slide-in-from-top-4 duration-300 shadow-inner">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-white/5">
                    <h4 className="font-headline text-lg font-bold text-white mb-2 uppercase tracking-tight">{module.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{module.description}</p>
                  </div>
                  {module.component}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Strategic Context */}
      <div className="w-full max-w-md px-6 mb-20">
        <div className="bg-card border border-primary/30 p-8 rounded-lg space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl" />
          <h3 className="font-headline text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 font-black text-primary">
            <ShieldAlert className="w-4 h-4" />
            Diretrizes de Segurança
          </h3>
          <div className="grid gap-4 font-body text-[10px] text-muted-foreground uppercase leading-tight">
            <div className="space-y-1">
              <span className="text-white font-bold block">Atenção Crítica</span>
              <p>O sucesso depende do silêncio operacional pós-envio. Contatos duplicados resultam em encerramento definitivo do caso.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <footer className="w-full max-w-md px-6 py-16 flex flex-col items-center justify-center space-y-6 opacity-30">
        <Separator className="bg-white/10 w-32" />
        <div className="flex flex-col items-center gap-2 text-[8px] font-code tracking-[0.4em] text-center">
          <span>UNBANSTRATEGY_SYSTEM_V.5.0</span>
          <span className="text-primary font-bold">// PROTOCOLO ATIVO</span>
        </div>
      </footer>
    </main>
  );
}
