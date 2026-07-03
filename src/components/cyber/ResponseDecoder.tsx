
'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SearchCode, Bot, User, AlertCircle } from 'lucide-react';
import { GlitchText } from './GlitchText';

export function ResponseDecoder() {
  return (
    <Card className="bg-card border-accent/20 relative overflow-hidden">
      <CardHeader>
        <CardTitle className="font-headline text-xl tracking-wider flex items-center gap-2">
          <SearchCode className="w-5 h-5 text-accent" />
          <GlitchText text="RESPONSE_DECODER" className="text-accent" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="bot" className="border-accent/10">
            <AccordionTrigger className="hover:no-underline hover:text-accent font-headline uppercase text-xs tracking-widest">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4" />
                Bot Pattern Detected
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-body leading-relaxed space-y-2">
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li>Generic, cold, and rigid text.</li>
                <li>No specific account data mentioned (ID, Date).</li>
                <li>Instant reply with standard rejection phrases.</li>
              </ul>
              <div className="bg-accent/5 p-2 rounded text-[10px] border border-accent/10">
                <span className="text-accent font-bold">PROTOCOL:</span> Do not reply. Wait 7 full days and re-engage with a different subject focus.
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="human" className="border-accent/10">
            <AccordionTrigger className="hover:no-underline hover:text-accent font-headline uppercase text-xs tracking-widest">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Human Analyst Signals
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-body leading-relaxed space-y-2">
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li>Mentions unique details of your case.</li>
                <li>Less rigid language structure.</li>
                <li>Asks for specific logs or additional information.</li>
              </ul>
              <div className="bg-primary/5 p-2 rounded text-[10px] border border-primary/10 text-primary">
                <span className="font-bold">STATUS:</span> Critical Window. Maintain technical tone. Do not over-explain.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
