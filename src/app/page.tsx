
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { DecisionTree } from '@/components/cyber/DecisionTree';
import { TicketAdvisor } from '@/components/cyber/TicketAdvisor';
import { DelayTimer } from '@/components/cyber/DelayTimer';
import { ResponseDecoder } from '@/components/cyber/ResponseDecoder';
import { AttemptLog } from '@/components/cyber/AttemptLog';
import { Separator } from '@/components/ui/separator';
import { ShieldAlert, ChevronRight, Crown, LayoutGrid, Lock, PlayCircle, FileText } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Home() {
  const [diagnosis, setDiagnosis] = useState<string | undefined>();
  const [isModule1Read, setIsModule1Read] = useState(false);

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const LessonItem = ({ title }: { title: string }) => (
    <div className="flex items-center gap-3 py-2 px-3 hover:bg-white/5 rounded-sm transition-colors group cursor-pointer border-l-2 border-transparent hover:border-primary">
      <PlayCircle className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100" />
      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground group-hover:text-white transition-colors">
        {title}
      </span>
    </div>
  );

  const modules = [
    {
      id: 'module-1',
      tag: 'MÓDULO 1',
      title: 'ENTENDA SEU BANIMENTO',
      description: 'Identificação técnica da restrição aplicada.',
      image: PlaceHolderImages.find(img => img.id === 'module-1')?.imageUrl,
      content: (
        <div className="space-y-6">
          <div className="grid gap-1">
            <LessonItem title="Aula 1.1 - O que é banimento automático" />
            <LessonItem title="Aula 1.2 - O que é banimento manual" />
            <LessonItem title="Aula 1.3 - O que é banimento reincidente" />
            <LessonItem title="Aula 1.4 - Como identificar qual é o seu caso" />
          </div>
          <Separator className="bg-white/5" />
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Diagnóstico de Campo</p>
            <DecisionTree onDiagnosed={(type) => {
              setDiagnosis(type);
              setIsModule1Read(true);
            }} />
          </div>
        </div>
      )
    },
    {
      id: 'module-2',
      tag: 'MÓDULO 2',
      title: 'PREPARAÇÃO DO TICKET',
      description: 'Logística e estratégia pré-envio.',
      image: PlaceHolderImages.find(img => img.id === 'module-2')?.imageUrl,
      content: (
        <div className="grid gap-1">
          <LessonItem title="Aula 2.1 - Onde enviar o ticket" />
          <LessonItem title="Aula 2.2 - Escolhendo a categoria correta" />
          <LessonItem title="Aula 2.3 - Como preencher os dados" />
          <LessonItem title="Aula 2.4 - Revisão antes do envio" />
          <LessonItem title="Aula 2.5 - O erro de enviar vários tickets" />
        </div>
      )
    },
    {
      id: 'module-3',
      tag: 'MÓDULO 3',
      title: 'PREENCHIMENTO PASSO A PASSO',
      description: 'Protocolo detalhado de preenchimento.',
      image: PlaceHolderImages.find(img => img.id === 'module-3')?.imageUrl,
      content: (
        <div className="grid gap-1">
          <LessonItem title="Aula 3.1 - Qual opção selecionar" />
          <LessonItem title="Aula 3.2 - Campo Requester" />
          <LessonItem title="Aula 3.3 - Campo Assunto" />
          <LessonItem title="Aula 3.4 - Nick do jogo" />
          <LessonItem title="Aula 3.5 - ID da conta" />
          <LessonItem title="Aula 3.6 - Tempo de suspensão" />
          <LessonItem title="Aula 3.7 - Data do ocorrido" />
          <LessonItem title="Aula 3.8 - Descrição do ticket" />
        </div>
      )
    },
    {
      id: 'module-4',
      tag: 'MÓDULO 4',
      title: 'MODELOS PRONTOS',
      description: 'Templates estratégicos de alta conversão.',
      image: PlaceHolderImages.find(img => img.id === 'module-4')?.imageUrl,
      content: (
        <div className="space-y-6">
          <div className="grid gap-2">
             {[1,2,3,4,5,6].map(n => (
               <div key={n} className="flex items-center gap-3 py-2 px-3 bg-white/5 rounded-sm">
                 <FileText className="w-4 h-4 text-accent opacity-70" />
                 <span className="text-[11px] font-bold text-muted-foreground uppercase">Ticket Modelo {n}</span>
               </div>
             ))}
          </div>
          <Separator className="bg-white/5" />
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Sintetizador de Modelos (IA)</p>
            <TicketAdvisor prefilledType={diagnosis} />
          </div>
        </div>
      )
    },
    {
      id: 'module-5',
      tag: 'MÓDULO 5',
      title: 'APÓS ENVIAR O TICKET',
      description: 'Gestão de silêncio e janelas de resposta.',
      image: PlaceHolderImages.find(img => img.id === 'module-5')?.imageUrl,
      content: (
        <div className="space-y-6">
          <div className="grid gap-1">
            <LessonItem title="Aula 5.1 - Quanto tempo esperar" />
            <LessonItem title="Aula 5.2 - O que nunca fazer" />
            <LessonItem title="Aula 5.3 - Quando enviar novo ticket" />
            <LessonItem title="Aula 5.4 - Quando parar" />
          </div>
          <Separator className="bg-white/5" />
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Controle de Cooldown</p>
            <DelayTimer />
          </div>
        </div>
      )
    },
    {
      id: 'module-6',
      tag: 'MÓDULO 6',
      title: 'ANALISANDO A RESPOSTA',
      description: 'Decodificação de feedback do suporte.',
      image: PlaceHolderImages.find(img => img.id === 'module-6')?.imageUrl,
      content: (
        <div className="space-y-6">
          <div className="grid gap-1">
            <LessonItem title="Aula 6.1 - Como identificar resposta automática" />
            <LessonItem title="Aula 6.2 - Como identificar resposta humana" />
            <LessonItem title="Aula 6.3 - O que fazer em cada caso" />
            <LessonItem title="Aula 6.4 - Erros que destroem a tentativa" />
          </div>
          <Separator className="bg-white/5" />
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Decodificador de Resposta</p>
            <ResponseDecoder />
          </div>
        </div>
      )
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
              priority
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
          {modules.map((module, index) => {
            const isLocked = index > 0 && !isModule1Read;

            return (
              <AccordionItem 
                key={module.id} 
                value={module.id} 
                className="border-none group overflow-hidden"
                disabled={isLocked}
              >
                <AccordionTrigger className={cn(
                  "hover:no-underline p-0 flex flex-col items-start text-left data-[state=open]:mb-6 transition-all relative",
                  isLocked && "cursor-not-allowed"
                )}>
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/5 transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      {module.image && (
                        <Image 
                          src={module.image} 
                          alt={module.title} 
                          fill 
                          className={cn(
                            "object-cover grayscale transition-all duration-700 brightness-75",
                            !isLocked && "group-hover:grayscale-0 group-hover:brightness-100"
                          )}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      {!isLocked && <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end gap-1">
                      <span className="text-[10px] font-headline font-bold text-primary tracking-[0.3em] mb-2">
                        {module.tag}
                      </span>
                      <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                        {module.title}
                      </h3>
                      
                      {isLocked ? (
                        <div className="mt-4 flex items-center gap-2 p-3 bg-black/60 border border-white/10 rounded-sm backdrop-blur-md">
                          <Lock className="w-3 h-3 text-primary" />
                          <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">
                            Bloqueado - Conclua o Módulo 1
                          </p>
                        </div>
                      ) : (
                        <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mt-2">
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                            Acessar Módulo <ChevronRight className="w-3 h-3 text-primary" />
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="bg-card border border-white/10 rounded-lg p-6 animate-in slide-in-from-top-4 duration-300 shadow-inner">
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-white/5">
                      <h4 className="font-headline text-lg font-bold text-white mb-2 uppercase tracking-tight">{module.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{module.description}</p>
                    </div>
                    {module.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
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
          <span>UNBANSTRATEGY_SYSTEM_V.6.0</span>
          <span className="text-primary font-bold">// PROTOCOLO ATIVO</span>
        </div>
      </footer>
    </main>
  );
}
