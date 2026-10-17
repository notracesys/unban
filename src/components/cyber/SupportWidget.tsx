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
            className="w-16 h-16 rounded-[1.5rem] bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/40 border-2 border-white/10 transition-all hover:scale-110 active:scale-90 group"
          >
            <MessageCircle className="w-8 h-8 text-white" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20 border border-white/50"></span>
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-card/90 backdrop-blur-3xl border-white/10 p-0 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] mb-4 mr-0 rounded-[2rem]" align="end">
          <div className="bg-primary/10 p-8">
            <div className="flex items-center gap-3 text-primary mb-3">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-xs font-black tracking-widest uppercase">{t.widgetTitle}</span>
            </div>
            <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">
              {t.widgetDesc}
            </p>
          </div>
          <div className="p-8 space-y-4">
            <Button 
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white font-black rounded-xl h-14 uppercase tracking-widest text-xs"
            >
              <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> {t.widgetButton}
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="w-full border-white/10 hover:bg-white/5 text-primary font-black rounded-xl h-14 uppercase tracking-widest text-xs"
            >
              <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                <Banknote className="w-4 h-4 mr-2" /> {t.refundButton}
              </a>
            </Button>
          </div>
          <div className="bg-white/5 px-8 py-4 text-center border-t border-white/5">
            <span className="text-[9px] font-black tracking-[0.3em] text-muted-foreground/40 uppercase">Secure Communication Node</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}