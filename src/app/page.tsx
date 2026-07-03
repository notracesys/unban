
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
      <header className="w-full relative h-[60vh] flex flex-col justify-end p-6 overflow-hidden">
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

        <div className="relative z-10 space-y-4 max-w-md w-full mx-auto">
          <div className="flex items-center gap-2 text-primary">
            <Crown className="w-5 h-5" />
            <span className="font-headline text-xs font-bold tracking-[0.3em] uppercase">MÉTODO EXCLUSIVO</span>
          </div>
          <h1 className="text-5xl font-headline font-black tracking-tighter uppercase leading-[0.9]">
            Unban <br />
            <span className="text-primary">Strategy</span>
          </h1>
          <p className="text-sm text-muted-foreground font-body max-w-[280px] leading-relaxed">
            Engenharia social e técnica para restauração de contas de alto valor.
          </p>
          <button className="bg-primary text-white font-headline text-[10px] uppercase font-bold tracking-widest px-8 py-4 rounded-sm hover:brightness-110 transition-all">
            Iniciar Protocolo
          </button>
        </div>
      </header>

      {/* Grid de Módulos */}
      <section className="w-full max-w-md px-6 py-12 space-y-8">
        <div className="flex items-center gap-2 opacity-50">
          <LayoutGrid className="w-4 h-4" />
          <h2 className="text-[10px] font-headline font-bold uppercase tracking-widest">Sistemas de Recuperação</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {modules.map((module) => (
            <AccordionItem 
              key={module.id} 
              value={module.id} 
              className="border-none group overflow-hidden"
            >
              <AccordionTrigger className="hover:no-underline p-0 flex flex-col items-start text-left data-[state=open]:mb-4 transition-all">
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/5 transition-transform duration-500 group-hover:scale-[1.02]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    {module.image && (
                      <Image 
                        src={module.image} 
                        alt={module.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        data-ai-hint={module.hint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end gap-1">
                    <span className="text-[10px] font-headline font-bold text-primary tracking-[0.2em]">
                      {module.tag}
                    </span>
                    <h3 className="text-2xl font-headline font-bold text-white uppercase tracking-tight leading-none group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2 line-clamp-1 opacity-0 group-hover:opacity-100 transition-all">
                      Acessar Módulo <ChevronRight className="inline-block w-3 h-3 ml-1" />
                    </p>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="bg-card border border-white/5 rounded-lg p-6 animate-in slide-in-from-top-4 duration-300">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-white/5">
                    <h4 className="font-headline text-lg font-bold text-white mb-2">{module.title}</h4>
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
        <div className="bg-card border border-primary/20 p-6 rounded-lg space-y-4">
          <h3 className="font-headline text-[10px] uppercase tracking-widest flex items-center gap-2 font-bold text-primary">
            <ShieldAlert className="w-4 h-4" />
            Diretrizes de Segurança
          </h3>
          <div className="grid gap-4 font-body text-[10px] text-muted-foreground uppercase leading-tight">
            <div className="space-y-1">
              <span className="text-white font-bold block">Importante</span>
              <p>O sucesso depende do silêncio operacional pós-envio. Evite contatos duplicados.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <footer className="w-full max-w-md px-6 py-10 flex flex-col items-center justify-center space-y-4 opacity-40">
        <Separator className="bg-white/10 w-24" />
        <div className="flex gap-3 text-[8px] font-code tracking-widest">
          <span>UNBANSTRATEGY_SYSTEM_V.5.0</span>
          <span>//</span>
          <span>SÓ ESTRATÉGIA</span>
        </div>
      </footer>
    </main>
  );
}
