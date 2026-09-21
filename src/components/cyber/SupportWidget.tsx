
'use client';

import { MessageCircle, ExternalLink, ShieldCheck, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { translations, type Language } from '@/lib/translations';

export function SupportWidget({ lang }: { lang: Language }) {
  const t = translations[lang].support;
  
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            size="icon" 
            className="w-16 h-16 rounded-3xl bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 border-2 border-white/10 transition-all hover:scale-105 active:scale-95 group"
          >
            <MessageCircle className="w-7 h-7 text-white" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20 border border-white/50"></span>
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-card/80 backdrop-blur-2xl border-white/10 p-0 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] mb-4 mr-0 rounded-3xl" align="end">
          <div className="bg-primary/10 p-6">
            <div className="flex items-center gap-2 text-primary mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest uppercase">{t.widgetTitle}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.widgetDesc}
            </p>
          </div>
          <div className="p-6 space-y-3">
            <Button 
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl h-14"
            >
              <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> {t.widgetButton}
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="w-full border-white/10 hover:bg-white/5 text-primary font-bold rounded-2xl h-14"
            >
              <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                <Banknote className="w-4 h-4 mr-2" /> {t.refundButton}
              </a>
            </Button>
          </div>
          <div className="bg-white/5 px-6 py-3 text-center border-t border-white/5">
            <span className="text-[10px] font-bold tracking-widest text-muted-foreground/30 uppercase">Secure Communication Port</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
