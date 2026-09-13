
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
    <div className="fixed bottom-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            size="icon" 
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(255,20,147,0.5)] border-2 border-white/20 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20 border border-white/50"></span>
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 bg-card border-primary/30 p-0 overflow-hidden shadow-[0_0_50px_-10px_rgba(255,20,147,0.3)] mb-4 mr-0" align="end">
          <div className="bg-primary/10 border-b border-primary/20 p-4">
            <div className="flex items-center gap-2 text-primary mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{t.widgetTitle}</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              {t.widgetDesc}
            </p>
          </div>
          <div className="p-4 space-y-2">
            <Button 
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-[10px] py-6 shadow-xl"
            >
              <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> {t.widgetButton}
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="w-full border-primary/30 hover:bg-primary/5 text-primary font-black uppercase tracking-widest text-[10px] py-6"
            >
              <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                <Banknote className="w-4 h-4 mr-2" /> {t.refundButton}
              </a>
            </Button>
          </div>
          <div className="bg-black/40 px-4 py-2 text-center border-t border-white/5">
            <span className="text-[8px] font-code tracking-[0.3em] text-muted-foreground/50 uppercase">Security Encrypted // v6.0</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
