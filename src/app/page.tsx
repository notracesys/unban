
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { ShieldAlert, ChevronRight, Crown, LayoutGrid, Lock, PlayCircle, Terminal, ExternalLink, CheckCircle2, Copy, Clock, Globe } from 'lucide-react';
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
import { useToast } from '@/hooks/use-toast';
import { translations, type Language } from '@/lib/translations';

export default function Home() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [viewedLessons, setViewedLessons] = useState<string[]>([]);
  const { toast } = useToast();

  const t = language ? translations[language] : null;

  useEffect(() => {
    const savedLang = localStorage.getItem('unban_strategy_lang') as Language;
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('unban_strategy_lang', lang);
  };

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

  const copyToClipboard = (text: string) => {
    if (!t) return;
    navigator.clipboard.writeText(text);
    toast({
      title: t.ui.copyToClipboard,
      description: t.ui.copyDescription,
    });
  };

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  if (!language || !t) {
    return (
      <div className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center p-6 cyber-grid overflow-hidden">
        <div className="scan-line" />
        <div className="max-w-xs w-full space-y-8 text-center animate-in fade-in zoom-in duration-700">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center animate-pulse">
              <Globe className="text-primary w-8 h-8" />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-headline font-black uppercase tracking-tighter text-white">
              {translations.pt.selectLanguage}
            </h2>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium opacity-60">
              {translations.pt.protocolInitialization}
            </p>
          </div>
          <div className="grid gap-3 pt-4">
            <Button 
              onClick={() => selectLanguage('pt')} 
              className="w-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 text-xs font-bold py-6 uppercase tracking-widest transition-all duration-300"
            >
              Português (BR)
            </Button>
            <Button 
              onClick={() => selectLanguage('en')} 
              className="w-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 text-xs font-bold py-6 uppercase tracking-widest transition-all duration-300"
            >
              English (US)
            </Button>
            <Button 
              onClick={() => selectLanguage('es')} 
              className="w-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 text-xs font-bold py-6 uppercase tracking-widest transition-all duration-300"
            >
              Español (ES)
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const LessonItem = ({ lesson }: { lesson: any }) => {
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
        <DialogContent className="bg-card border-primary/30 max-w-2xl max-h-[80vh] overflow-y-auto custom-scrollbar">
          <DialogHeader className="border-b border-white/5 pb-4 mb-4">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Terminal className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t.ui.dataStream}</span>
            </div>
            <DialogTitle className="text-2xl font-headline font-black uppercase tracking-tighter text-white">
              {lesson.title}
            </DialogTitle>
          </DialogHeader>
          <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-4">
            <div className="py-8 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground italic">{t.ui.decrypting}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <header className="w-full relative h-[65vh] flex flex-col justify-end p-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage?.imageUrl && (
            <Image 
              src={heroImage.imageUrl} 
              alt="Hero Background" 
              fill 
              className="object-cover"
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
            {t.hero.title} <span className="text-primary">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-xs text-muted-foreground font-body max-w-[280px] leading-relaxed uppercase tracking-widest opacity-80">
            {t.hero.description}
          </p>
          <div className="pt-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                localStorage.removeItem('unban_strategy_lang');
                window.location.reload();
              }}
              className="text-[9px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors h-auto p-0"
            >
              <Globe className="w-3 h-3 mr-1" /> Language / Idioma
            </Button>
          </div>
        </div>
      </header>

      <section className="w-full max-w-md px-6 py-12 space-y-8">
        <div className="flex items-center gap-2 opacity-50">
          <LayoutGrid className="w-4 h-4" />
          <h2 className="text-[10px] font-headline font-bold uppercase tracking-widest">Protocol Systems</h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-8">
          {t.modules.map((module: any, index: number) => {
            const isLocked = index > 0 && !completedModules.includes(t.modules[index - 1].id);
            const moduleImage = PlaceHolderImages.find(img => img.id === module.id)?.imageUrl;

            return (
              <AccordionItem key={module.id} value={module.id} className="border-none group overflow-hidden" disabled={isLocked}>
                <AccordionTrigger className={cn("hover:no-underline p-0 flex flex-col items-start text-left data-[state=open]:mb-6 transition-all relative", isLocked && "cursor-not-allowed")}>
                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/5 transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl">
                    <div className="absolute inset-0">
                      {moduleImage && (
                        <Image src={moduleImage} alt={module.title} fill className="object-cover transition-all duration-700 brightness-90 group-hover:brightness-110" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end gap-1">
                      <span className="text-[10px] font-headline font-bold text-primary tracking-[0.3em] mb-2">{module.tag}</span>
                      <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">{module.title}</h3>
                      {isLocked ? (
                        <div className="mt-4 flex items-center gap-2 p-3 bg-black/60 border border-white/10 rounded-sm backdrop-blur-md">
                          <Lock className="w-3 h-3 text-primary" />
                          <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">{t.ui.locked}</p>
                        </div>
                      ) : (
                        <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mt-2">
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest flex items-center gap-1">{t.ui.accessModule} <ChevronRight className="w-3 h-3 text-primary" /></p>
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
                    <div className="space-y-6">
                      <div className="grid gap-1">
                        {module.lessons.map((lesson: any) => (
                          <LessonItem key={lesson.id} lesson={lesson} />
                        ))}
                      </div>
                      <div className="pt-4">
                        {!completedModules.includes(module.id) ? (
                          <Button 
                            onClick={() => markAsCompleted(module.id)}
                            className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/50 text-[10px] uppercase font-bold tracking-widest py-6"
                          >
                            {t.ui.completeModule}
                          </Button>
                        ) : (
                          <div className="flex items-center justify-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest p-4 bg-primary/5 rounded-sm border border-primary/20">
                            <CheckCircle2 className="w-4 h-4" />
                            {t.ui.moduleCompleted}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>

      <div className="w-full max-w-md px-6 mb-20">
        <div className="bg-card border border-primary/30 p-8 rounded-lg space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl" />
          <h3 className="font-headline text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 font-black text-primary"><ShieldAlert className="w-4 h-4" />{t.ui.securityGuidelines}</h3>
          <div className="grid gap-4 font-body text-[10px] text-muted-foreground uppercase leading-tight">
            <div className="space-y-1">
              <span className="text-white font-bold block">{t.ui.criticalAttention}</span>
              <p>{t.ui.safetyText}</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full max-w-md px-6 py-16 flex flex-col items-center justify-center space-y-6 opacity-30">
        <Separator className="bg-white/10 w-32" />
        <div className="flex flex-col items-center gap-2 text-[8px] font-code tracking-[0.4em] text-center">
          <span>UNBANSTRATEGY_SYSTEM_V.6.0</span>
          <span className="text-primary font-bold">// {t.ui.systemActive}</span>
        </div>
      </footer>
    </main>
  );
}
