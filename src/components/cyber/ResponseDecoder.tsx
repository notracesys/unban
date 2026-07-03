
'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Bot, User } from 'lucide-react';

export function ResponseDecoder() {
  return (
    <div className="py-2">
      <Accordion type="single" collapsible className="w-full space-y-2 border-none">
        <AccordionItem value="bot" className="border-accent/20 bg-accent/5 px-3 rounded">
          <AccordionTrigger className="hover:no-underline hover:text-accent font-headline uppercase text-[10px] tracking-widest py-3">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Padrão de Robô (Bot)
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground font-body leading-relaxed space-y-2 pt-1 pb-3">
            <ul className="list-disc pl-4 space-y-1 text-[10px]">
              <li>Texto genérico, frio e rígido.</li>
              <li>Não menciona dados da sua conta (ID, Data).</li>
              <li>Resposta instantânea com frases padrão.</li>
            </ul>
            <div className="bg-accent/10 p-2 rounded text-[9px] border border-accent/20 text-accent font-bold">
              PROTOCOLO: Não responda. Aguarde 7 dias e tente outro foco de assunto.
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="human" className="border-primary/20 bg-primary/5 px-3 rounded">
          <AccordionTrigger className="hover:no-underline hover:text-primary font-headline uppercase text-[10px] tracking-widest py-3">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Sinais de Analista Humano
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground font-body leading-relaxed space-y-2 pt-1 pb-3">
            <ul className="list-disc pl-4 space-y-1 text-[10px]">
              <li>Menciona detalhes únicos do seu caso.</li>
              <li>Linguagem menos rígida e robótica.</li>
              <li>Pede logs específicos ou mais informações.</li>
            </ul>
            <div className="bg-primary/10 p-2 rounded text-[9px] border border-primary/20 text-primary font-bold">
              STATUS: Janela Crítica. Mantenha tom técnico. Não explique demais.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
