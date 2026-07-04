'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TicketAdvisor } from '@/components/cyber/TicketAdvisor';
import { DelayTimer } from '@/components/cyber/DelayTimer';
import { ResponseDecoder } from '@/components/cyber/ResponseDecoder';
import { Separator } from '@/components/ui/separator';
import { ShieldAlert, ChevronRight, Crown, LayoutGrid, Lock, PlayCircle, FileText, CheckCircle2, Terminal, ExternalLink } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Lesson {
  id: string;
  title: string;
  content?: React.ReactNode;
}

export default function Home() {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [viewedLessons, setViewedLessons] = useState<string[]>([]);

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const markAsCompleted = (id: string) => {
    if (!completedModules.includes(id)) {
      setCompletedModules(prev => [...prev, id]);
    }
  };

  const markLessonAsViewed = (id: string) => {
    if (!viewedLessons.includes(id)) {
      setViewedLessons(prev => [...prev, id]);
    }
  };

  const LessonItem = ({ lesson }: { lesson: Lesson }) => {
    const isViewed = viewedLessons.includes(lesson.id);

    return (
      <Dialog onOpenChange={(open) => { if (open) markLessonAsViewed(lesson.id); }}>
        <DialogTrigger asChild>
          <div 
            className={cn(
              "flex items-center gap-3 py-2 px-3 hover:bg-white/5 rounded-sm transition-all group cursor-pointer border-l-2",
              isViewed 
                ? "border-green-500 bg-green-500/5" 
                : "border-transparent hover:border-primary"
            )}
          >
            <PlayCircle className={cn(
              "w-4 h-4 transition-colors",
              isViewed ? "text-green-500" : "text-primary opacity-50 group-hover:opacity-100"
            )} />
            <span className={cn(
              "text-[11px] font-medium uppercase tracking-wider transition-colors",
              isViewed ? "text-green-500" : "text-muted-foreground group-hover:text-white"
            )}>
              {lesson.title}
            </span>
          </div>
        </DialogTrigger>
        {lesson.content ? (
          <DialogContent className="bg-card border-primary/30 max-w-2xl max-h-[80vh] overflow-y-auto custom-scrollbar">
            <DialogHeader className="border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Terminal className="w-4 h-4" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Data Stream // Access Granted</span>
              </div>
              <DialogTitle className="text-2xl font-headline font-black uppercase tracking-tighter text-white">
                {lesson.title}
              </DialogTitle>
            </DialogHeader>
            <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-4">
              {lesson.content}
            </div>
          </DialogContent>
        ) : (
          <DialogContent className="bg-card border-primary/30">
            <DialogHeader>
              <DialogTitle className="text-white uppercase tracking-tighter">Conteúdo em Breve</DialogTitle>
            </DialogHeader>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Este arquivo está sendo descriptografado.</p>
          </DialogContent>
        )}
      </Dialog>
    );
  };

  const modules = [
    {
      id: 'module-1',
      tag: 'MÓDULO 1',
      title: 'ENTENDA SEU BANIMENTO',
      description: 'Identificação técnica da restrição aplicada.',
      image: PlaceHolderImages.find(img => img.id === 'module-1')?.imageUrl,
      lessons: [
        { 
          id: '1.1', 
          title: 'Aula 1.1 - O que é banimento automático',
          content: (
            <div className="space-y-6 text-[13px] uppercase tracking-tight">
              <p className="text-primary font-bold border-l-2 border-primary pl-4">
                Entendendo o funcionamento dos banimentos automáticos
              </p>
              
              <p>Antes de tentar recuperar sua conta, você precisa entender um fato importante: nem todos os banimentos são aplicados da mesma forma.</p>
              
              <p>O banimento automático ocorre quando sistemas internos identificam comportamentos considerados suspeitos sem que necessariamente exista uma análise humana inicial. Esses sistemas funcionam por padrões, detecções automatizadas e verificações internas.</p>

              <div className="bg-white/5 p-4 rounded-sm border border-white/10 space-y-3">
                <p className="text-white font-bold text-[11px]">As principais características de um banimento automático são:</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Mensagem genérica;</li>
                  <li>Ausência de detalhes específicos;</li>
                  <li>Respostas rápidas e padronizadas;</li>
                  <li>Falta de referência direta ao comportamento do usuário;</li>
                  <li>Encerramento automático do atendimento.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">Exemplos comuns:</p>
                <div className="grid gap-2 italic text-accent/80">
                  <p>"Detectamos atividades irregulares."</p>
                  <p>"Sua conta violou nossos termos de serviço."</p>
                  <p>"A suspensão foi aplicada corretamente."</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">Por que isso é importante?</p>
                <p>Because os banimentos automáticos representam os casos em que ainda existe alguma possibilidade de solicitar uma reavaliação estratégica.</p>
                <p>O objetivo deste método não é discutir com o sistema, mas sim tentar fazer com que sua solicitação ultrapasse a primeira camada automática de análise.</p>
              </div>

              <div className="bg-primary/10 p-4 border border-primary/30 text-primary">
                <p className="font-black mb-1">Lembre-se:</p>
                <p>Quanto mais emocional for sua mensagem, maior a chance de permanecer preso no processo automático.</p>
              </div>
            </div>
          )
        },
        { 
          id: '1.2', 
          title: 'Aula 1.2 - O que é banimento manual',
          content: (
            <div className="space-y-6 text-[13px] uppercase tracking-tight">
              <p className="text-primary font-bold border-l-2 border-primary pl-4">
                Quando existe participação humana na decisão
              </p>
              
              <p>O banimento manual ocorre quando existe uma análise direta ou validação interna realizada por membros da equipe responsável.</p>
              
              <p>Nesses casos, normalmente existem elementos mais específicos relacionados ao motivo da punição.</p>

              <div className="bg-white/5 p-4 rounded-sm border border-white/10 space-y-3">
                <p className="text-white font-bold text-[11px]">Características comuns:</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Mensagens mais detalhadas;</li>
                  <li>Referência direta a regras ou comportamentos;</li>
                  <li>Respostas objetivas e firmes;</li>
                  <li>Menor flexibilidade para reavaliação.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">Exemplos:</p>
                <div className="grid gap-2 italic text-accent/80">
                  <p>"Citação direta dos Termos de Serviço;"</p>
                  <p>"Informação sobre comportamento específico;"</p>
                  <p>"Confirmação explícita da violação."</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">O que isso significa?</p>
                <p>Significa que a possibilidade de reversão tende a ser significativamente menor.</p>
                <p>Isso não quer dizer que você deva agir por impulso ou desistir imediatamente. Significa apenas que a estratégia precisa ser ainda mais cuidadosa.</p>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">Neste cenário, o principal objetivo deixa de ser "convencer" e passa a ser:</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Não piorar a situação;</li>
                  <li>Evitar encerramentos adicionais;</li>
                  <li>Manter uma postura técnica e organizada.</li>
                </ul>
              </div>
            </div>
          )
        },
        { 
          id: '1.3', 
          title: 'Aula 1.3 - O que é banimento reincidente',
          content: (
            <div className="space-y-6 text-[13px] uppercase tracking-tight">
              <p className="text-primary font-bold border-l-2 border-primary pl-4">
                Quando existe histórico anterior de punições
              </p>
              
              <p>O banimento reincidente acontece quando a conta já possui registros anteriores de punições, advertências ou suspensões.</p>
              
              <p>Plataformas normalmente aplicam níveis de tolerância progressivamente menores para contas reincidentes.</p>

              <div className="bg-white/5 p-4 rounded-sm border border-white/10 space-y-3">
                <p className="text-white font-bold text-[11px]">Características:</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Respostas mais rápidas;</li>
                  <li>Menor abertura para revisão;</li>
                  <li>Análises mais rígidas;</li>
                  <li>Baixíssima tolerância a novos recursos.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">O erro mais comum:</p>
                <p>Muitas pessoas acreditam que enviar dezenas de tickets aumenta as chances de sucesso. Na prática, isso geralmente produz o efeito contrário.</p>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">Quando existe reincidência, insistência excessiva pode:</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Confirmar decisões anteriores;</li>
                  <li>Encerrar possibilidades de análise futura;</li>
                  <li>Classificar o caso como tentativa repetitiva.</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 border border-primary/30 text-primary">
                <p className="font-black">Lembre-se:</p>
                <p>O método trabalha com controle, organização e estratégia, nunca com insistência impulsiva.</p>
              </div>
            </div>
          )
        },
        { 
          id: '1.4', 
          title: 'Aula 1.4 - Como identificar qual é o seu caso',
          content: (
            <div className="space-y-6 text-[13px] uppercase tracking-tight">
              <p className="text-primary font-bold border-l-2 border-primary pl-4">
                A etapa mais importante antes de enviar qualquer ticket
              </p>
              
              <p>Antes de escrever qualquer mensagem para o suporte, faça estas perguntas:</p>

              <div className="bg-white/5 p-4 rounded-sm border border-white/10 space-y-4">
                <div className="space-y-1">
                  <p className="text-white font-bold text-[11px]">1. A mensagem recebida é genérica?</p>
                  <p className="text-muted-foreground">Se sim, há grandes chances de ser um banimento automático.</p>
                </div>
                
                <div className="space-y-1">
                  <p className="text-white font-bold text-[11px]">2. A mensagem apresenta detalhes específicos?</p>
                  <p className="text-muted-foreground">Se sim, pode indicar uma análise manual.</p>
                </div>

                <div className="space-y-1">
                  <p className="text-white font-bold text-[11px]">3. A conta já recebeu punições anteriormente?</p>
                  <p className="text-muted-foreground">Se a resposta for positiva, você provavelmente está diante de um caso reincidente.</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">Resumo rápido</p>
                <div className="border border-white/10 rounded-sm overflow-hidden">
                  <table className="w-full text-left text-[10px]">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="p-2 border-b border-white/10">TIPO</th>
                        <th className="p-2 border-b border-white/10">CARACTERÍSTICAS</th>
                        <th className="p-2 border-b border-white/10">CHANCE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border-b border-white/10 text-primary">AUTOMÁTICO</td>
                        <td className="p-2 border-b border-white/10 text-muted-foreground">MENSAGENS GENÉRICAS</td>
                        <td className="p-2 border-b border-white/10 text-accent">MAIOR</td>
                      </tr>
                      <tr>
                        <td className="p-2 border-b border-white/10 text-primary">MANUAL</td>
                        <td className="p-2 border-b border-white/10 text-muted-foreground">MENSAGENS ESPECÍFICAS</td>
                        <td className="p-2 border-b border-white/10 text-accent">BAIXA</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-primary">REINCIDENTE</td>
                        <td className="p-2 text-muted-foreground">HISTÓRICO ANTERIOR</td>
                        <td className="p-2 text-accent">MUITO BAIXA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        },
      ],
      content: (id: string) => (
        <div className="space-y-6">
          <div className="grid gap-1">
            {modules[0].lessons.map(lesson => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
          </div>
          <div className="pt-4">
            {!completedModules.includes(id) ? (
              <Button 
                onClick={() => markAsCompleted(id)}
                className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/50 text-[10px] uppercase font-bold tracking-widest py-6"
              >
                Concluir Módulo e Liberar Próximo
              </Button>
            ) : (
              <div className="flex items-center justify-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest p-4 bg-primary/5 rounded-sm border border-primary/20">
                <CheckCircle2 className="w-4 h-4" />
                Módulo Concluído
              </div>
            )}
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
      lessons: [
        { 
          id: '2.1', 
          title: 'Aula 2.1 - Onde enviar o ticket',
          content: (
            <div className="space-y-6 text-[13px] uppercase tracking-tight">
              <p className="text-primary font-bold border-l-2 border-primary pl-4">
                Utilizando apenas canais oficiais
              </p>
              
              <p>Antes de pensar no texto que será enviado, você precisa entender uma regra fundamental:</p>
              
              <div className="bg-primary/10 p-4 border border-primary/30 text-primary">
                <p className="font-black">Um ticket enviado no local errado já nasce sem chance de análise.</p>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">Muitas pessoas tentam contato através de canais ineficazes:</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Instagram / Facebook;</li>
                  <li>Discord;</li>
                  <li>E-mails genéricos;</li>
                  <li>Comentários em redes sociais;</li>
                  <li>Formulários não oficiais.</li>
                </ul>
                <p className="text-[10px] text-muted-foreground italic">Esses canais não realizam análise individual de contas e não possuem poder para alterar decisões internas.</p>
              </div>

              <div className="bg-white/5 p-4 rounded-sm border border-white/10 space-y-3">
                <p className="text-white font-bold text-[11px]">O procedimento correto:</p>
                <p>A solicitação deve ser enviada exclusivamente através do suporte oficial disponibilizado pela plataforma.</p>
                
                <div className="pt-2">
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary/90 text-white border-none text-[10px] font-bold uppercase tracking-widest py-5"
                  >
                    <a href="https://ffsuporte.garena.com/support/tickets/new" target="_blank" rel="noopener noreferrer">
                      Acessar Canal Oficial <ExternalLink className="ml-2 w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">O objetivo do método é simples:</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Entrar no fluxo correto de atendimento;</li>
                  <li>Evitar encaminhamentos automáticos desnecessários;</li>
                  <li>Maximizar a possibilidade de análise.</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 border border-primary/30 text-primary">
                <p className="font-black">Lembre-se:</p>
                <p>Uma tentativa organizada vale mais do que dez tentativas desesperadas.</p>
              </div>
            </div>
          )
        },
        { 
          id: '2.2', 
          title: 'Aula 2.2 - Escolhendo a categoria correta',
          content: (
            <div className="space-y-6 text-[13px] uppercase tracking-tight">
              <p className="text-primary font-bold border-l-2 border-primary pl-4">
                A decisão mais importante antes da mensagem
              </p>
              
              <p>Ao abrir um ticket, você precisará selecionar uma categoria.</p>
              <p>A maioria das pessoas trata essa etapa como um detalhe. <span className="text-primary font-black">Não é.</span></p>
              <p>A categoria escolhida influencia diretamente a forma como sua solicitação será processada internamente.</p>

              <div className="bg-white/5 p-4 rounded-sm border border-white/10 space-y-3">
                <p className="text-white font-bold text-[11px]">O que evitar:</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Extremamente acusatórias;</li>
                  <li>Definitivas;</li>
                  <li>Relacionadas diretamente à confirmação da punição.</li>
                </ul>
                <p className="text-[10px] italic">Categorias muito específicas podem fazer sua solicitação ser encaminhada diretamente para respostas padronizadas.</p>
              </div>

              <div className="space-y-3">
                <p className="text-white font-bold text-[11px]">O que procurar:</p>
                <p>A estratégia consiste em selecionar categorias que:</p>
                <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                  <li>Permitam análise;</li>
                  <li>Sejam mais neutras;</li>
                  <li>Não antecipem conclusões.</li>
                </ul>
              </div>

              <p>O objetivo não é esconder informações. O objetivo é evitar que sua tentativa seja encerrada antes mesmo da leitura.</p>

              <div className="bg-primary/10 p-4 border border-primary/30 text-primary">
                <p className="font-black mb-1">Regra prática:</p>
                <p>Pergunte a si mesmo: "Esta categoria parece abrir uma análise ou apenas confirmar uma decisão?"</p>
                <p className="mt-2">Se parecer confirmar uma decisão, escolha outra opção disponível mais neutra.</p>
              </div>
            </div>
          )
        },
        { id: '2.3', title: 'Aula 2.3 - Como preencher os dados' },
        { id: '2.4', title: 'Aula 2.4 - Revisão antes do envio' },
        { id: '2.5', title: 'Aula 2.5 - O erro de enviar vários tickets' },
      ],
      content: (id: string) => (
        <div className="space-y-6">
          <div className="grid gap-1">
            {modules[1].lessons.map(lesson => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
          </div>
          <div className="pt-4">
            {!completedModules.includes(id) ? (
              <Button 
                onClick={() => markAsCompleted(id)}
                className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/50 text-[10px] uppercase font-bold tracking-widest py-6"
              >
                Concluir Módulo e Liberar Próximo
              </Button>
            ) : (
              <div className="flex items-center justify-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest p-4 bg-primary/5 rounded-sm border border-primary/20">
                <CheckCircle2 className="w-4 h-4" />
                Módulo Concluído
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      id: 'module-3',
      tag: 'MÓDULO 3',
      title: 'PREENCHIMENTO PASSO A PASSO',
      description: 'Protocolo detalhado de preenchimento.',
      image: PlaceHolderImages.find(img => img.id === 'module-3')?.imageUrl,
      lessons: [
        { id: '3.1', title: 'Aula 3.1 - Qual opção selecionar' },
        { id: '3.2', title: 'Aula 3.2 - Campo Requester' },
        { id: '3.3', title: 'Aula 3.3 - Campo Assunto' },
        { id: '3.4', title: 'Aula 3.4 - Nick do jogo' },
        { id: '3.5', title: 'Aula 3.5 - ID da conta' },
        { id: '3.6', title: 'Aula 3.6 - Tempo de suspensão' },
        { id: '3.7', title: 'Aula 3.7 - Data do ocorrido' },
        { id: '3.8', title: 'Aula 3.8 - Descrição do ticket' },
      ],
      content: (id: string) => (
        <div className="space-y-6">
          <div className="grid gap-1">
            {modules[2].lessons.map(lesson => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
          </div>
          <div className="pt-4">
            {!completedModules.includes(id) ? (
              <Button 
                onClick={() => markAsCompleted(id)}
                className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/50 text-[10px] uppercase font-bold tracking-widest py-6"
              >
                Concluir Módulo e Liberar Próximo
              </Button>
            ) : (
              <div className="flex items-center justify-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest p-4 bg-primary/5 rounded-sm border border-primary/20">
                <CheckCircle2 className="w-4 h-4" />
                Módulo Concluído
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      id: 'module-4',
      tag: 'MÓDULO 4',
      title: 'MODELOS PRONTOS',
      description: 'Templates estratégicos de alta conversão.',
      image: PlaceHolderImages.find(img => img.id === 'module-4')?.imageUrl,
      lessons: [
        { id: 'm4-1', title: 'Ticket Modelo 1' },
        { id: 'm4-2', title: 'Ticket Modelo 2' },
        { id: 'm4-3', title: 'Ticket Modelo 3' },
        { id: 'm4-4', title: 'Ticket Modelo 4' },
        { id: 'm4-5', title: 'Ticket Modelo 5' },
        { id: 'm4-6', title: 'Ticket Modelo 6' },
      ],
      content: (id: string) => (
        <div className="space-y-6">
          <div className="grid gap-2">
             {modules[3].lessons.map(lesson => (
               <LessonItem key={lesson.id} lesson={lesson} />
             ))}
          </div>
          <Separator className="bg-white/5" />
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Sintetizador de Modelos (IA)</p>
            <TicketAdvisor />
          </div>
          <div className="pt-4">
            {!completedModules.includes(id) ? (
              <Button 
                onClick={() => markAsCompleted(id)}
                className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/50 text-[10px] uppercase font-bold tracking-widest py-6"
              >
                Concluir Módulo e Liberar Próximo
              </Button>
            ) : (
              <div className="flex items-center justify-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest p-4 bg-primary/5 rounded-sm border border-primary/20">
                <CheckCircle2 className="w-4 h-4" />
                Módulo Concluído
              </div>
            )}
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
      lessons: [
        { id: '5.1', title: 'Aula 5.1 - Quanto tempo esperar' },
        { id: '5.2', title: 'Aula 5.2 - O que nunca fazer' },
        { id: '5.3', title: 'Aula 5.3 - Quando enviar novo ticket' },
        { id: '5.4', title: 'Aula 5.4 - Quando parar' },
      ],
      content: (id: string) => (
        <div className="space-y-6">
          <div className="grid gap-1">
            {modules[4].lessons.map(lesson => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
          </div>
          <Separator className="bg-white/5" />
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Controle de Cooldown</p>
            <DelayTimer />
          </div>
          <div className="pt-4">
            {!completedModules.includes(id) ? (
              <Button 
                onClick={() => markAsCompleted(id)}
                className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/50 text-[10px] uppercase font-bold tracking-widest py-6"
              >
                Concluir Módulo e Liberar Próximo
              </Button>
            ) : (
              <div className="flex items-center justify-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest p-4 bg-primary/5 rounded-sm border border-primary/20">
                <CheckCircle2 className="w-4 h-4" />
                Módulo Concluído
              </div>
            )}
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
      lessons: [
        { id: '6.1', title: 'Aula 6.1 - Como identificar resposta automática' },
        { id: '6.2', title: 'Aula 6.2 - Como identificar resposta humana' },
        { id: '6.3', title: 'Aula 6.3 - O que fazer em cada caso' },
        { id: '6.4', title: 'Aula 6.4 - Erros que destroem a tentativa' },
      ],
      content: (id: string) => (
        <div className="space-y-6">
          <div className="grid gap-1">
            {modules[5].lessons.map(lesson => (
              <LessonItem key={lesson.id} lesson={lesson} />
            ))}
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
              className="object-cover opacity-60"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 space-y-4 w-full">
          <div className="flex items-center gap-2 text-primary">
            <Crown className="w-5 h-5" />
            <span className="font-headline text-[10px] font-bold tracking-[0.4em] uppercase">zephyrus</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-[0.85] break-words">
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
            const isLocked = index > 0 && !completedModules.includes(modules[index - 1].id);

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
                    <div className="absolute inset-0">
                      {module.image && (
                        <Image 
                          src={module.image} 
                          alt={module.title} 
                          fill 
                          className="object-cover transition-all duration-700 brightness-90 group-hover:brightness-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>

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
                            Bloqueado - Conclua o módulo anterior
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
                    {module.content(module.id)}
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
