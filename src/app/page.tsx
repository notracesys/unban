'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldAlert, ChevronRight, Crown, LayoutGrid, Lock, PlayCircle, Terminal, ExternalLink, CheckCircle2, Copy, Globe, Fingerprint, Zap } from 'lucide-react';
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
        <div className="absolute inset-0 bg-primary/5 opacity-20 pointer-events-none" />
        
        <div className="max-w-md w-full space-y-12 text-center animate-in fade-in zoom-in duration-1000">
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="w-24 h-24 bg-black border-2 border-primary/50 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_50px_-12px_rgba(255,46,46,0.5)]">
              <Globe className="text-primary w-12 h-12 animate-pulse" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary/60 mb-2">
              <Fingerprint className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase">Identity Check</span>
            </div>
            <h2 className="text-5xl font-headline font-black uppercase tracking-tighter text-white">
              {translations.pt.selectLanguage}
            </h2>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-medium opacity-60">
              {translations.pt.protocolInitialization}
            </p>
          </div>

          <div className="grid gap-4 pt-8">
            {[
              { id: 'pt', label: 'Português (BR)', flag: '🇧🇷' },
              { id: 'en', label: 'English (US)', flag: '🇺🇸' },
              { id: 'es', label: 'Español (ES)', flag: '🇪🇸' }
            ].map((lang) => (
              <Button 
                key={lang.id}
                onClick={() => selectLanguage(lang.id as Language)} 
                className="group relative w-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 text-xs font-bold py-8 uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center justify-between w-full px-4">
                  <span className="text-2xl mr-4">{lang.flag}</span>
                  <span>{lang.label}</span>
                  <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all" />
                </span>
              </Button>
            ))}
          </div>
          
          <div className="pt-12 opacity-20">
            <p className="text-[8px] font-code tracking-[0.5em] text-muted-foreground">SYSTEM_INITIALIZATION_V6.0 // ACCESS_KEY: RESTRICTED</p>
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
              "flex items-center gap-3 py-3 px-4 hover:bg-white/5 rounded-sm transition-all group cursor-pointer border-l-2 mb-1",
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
        <DialogContent className="bg-card border-primary/30 max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar shadow-[0_0_100px_-20px_rgba(255,46,46,0.3)]">
          <DialogHeader className="border-b border-white/5 pb-6 mb-6">
            <div className="flex items-center gap-2 text-primary mb-3">
              <Terminal className="w-5 h-5" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">{t.ui.dataStream}</span>
            </div>
            <DialogTitle className="text-3xl font-headline font-black uppercase tracking-tighter text-white">
              {lesson.title}
            </DialogTitle>
          </DialogHeader>
          <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-6">
            {lesson.content ? (
              <div className="prose prose-invert prose-sm max-w-none">
                <div className="whitespace-pre-wrap font-body">
                  {lesson.content}
                </div>
              </div>
            ) : lesson.template ? (
              <div className="space-y-4">
                <div className="p-5 bg-black/40 border border-primary/20 rounded-lg font-code text-xs leading-relaxed text-primary/80 relative group">
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => copyToClipboard(lesson.template)}
                      className="h-8 text-[10px] uppercase font-bold"
                    >
                      <Copy className="w-3 h-3 mr-2" /> {t.ui.copyTemplate}
                    </Button>
                  </div>
                  {lesson.template}
                </div>
              </div>
            ) : (
              <div className="py-12 text-center opacity-40 italic">
                <p className="text-xs uppercase tracking-[0.2em]">{t.ui.decrypting}</p>
              </div>
            )}

            {lesson.id === '2.1' && (
              <div className="pt-6">
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-[10px] py-6 shadow-xl"
                >
                  <a href="https://ffsuporte.garena.com/support/tickets/new" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" /> {t.ui.officialChannel}
                  </a>
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center">
      <header className="w-full relative h-[70vh] flex flex-col justify-end p-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImage?.imageUrl && (
            <Image 
              src={heroImage.imageUrl} 
              alt="Hero Background" 
              fill 
              className="object-cover opacity-80"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        </div>
        <div className="relative z-10 space-y-6 w-full max-w-6xl mx-auto">
          <div className="flex items-center gap-3 text-primary">
            <div className="p-1 bg-primary/10 border border-primary/20 rounded">
              <Crown className="w-5 h-5" />
            </div>
            <span className="font-headline text-[10px] font-bold tracking-[0.5em] uppercase">unban strategy 1.0</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-[0.8] break-words drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            {t.hero.title} <span className="text-primary">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-sm text-muted-foreground font-body max-w-md leading-relaxed uppercase tracking-[0.2em] opacity-90 border-l-2 border-primary/30 pl-4">
            {t.hero.description}
          </p>
          <div className="pt-8 flex items-center gap-6">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                localStorage.removeItem('unban_strategy_lang');
                window.location.reload();
              }}
              className="bg-black/40 border-white/10 hover:border-primary text-[10px] uppercase tracking-widest transition-all h-10 px-6 rounded-none"
            >
              <Globe className="w-4 h-4 mr-2" /> Language Settings
            </Button>
            <div className="flex items-center gap-2 text-[10px] font-code text-primary/40 tracking-widest uppercase">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Connection: Stable
            </div>
          </div>
        </div>
      </header>

      <section className="w-full max-w-2xl px-8 py-20 space-y-12">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <LayoutGrid className="w-5 h-5 text-primary" />
            <h2 className="text-[12px] font-headline font-black uppercase tracking-[0.3em]">Protocol Systems</h2>
          </div>
          <span className="text-[10px] font-code text-muted-foreground/30">V.6.0_STABLE</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.modules.map((module: any, index: number) => {
            const isLocked = index > 0 && !completedModules.includes(t.modules[index - 1].id);
            const moduleImage = PlaceHolderImages.find(img => img.id === module.id)?.imageUrl;

            return (
              <Accordion key={module.id} type="single" collapsible className="w-full">
                <AccordionItem value={module.id} className="border-none group overflow-visible" disabled={isLocked}>
                  <AccordionTrigger className={cn("hover:no-underline p-0 flex flex-col items-start text-left data-[state=open]:mb-8 transition-all relative", isLocked && "opacity-60 cursor-not-allowed")}>
                    <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-primary/50 group-hover:shadow-[0_0_50px_-20px_rgba(255,46,46,0.4)]">
                      <div className="absolute inset-0">
                        {moduleImage && (
                          <Image src={moduleImage} alt={module.title} fill className="object-cover transition-all duration-1000 brightness-[0.6] group-hover:brightness-[0.8] group-hover:scale-105" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      </div>
                      <div className="absolute inset-0 p-8 flex flex-col justify-end gap-2">
                        <span className="text-[10px] font-headline font-bold text-primary tracking-[0.4em] mb-2">{module.tag}</span>
                        <h3 className="text-3xl font-headline font-black text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">{module.title}</h3>
                        {isLocked ? (
                          <div className="mt-4 flex items-center gap-3 p-3 bg-black/80 border border-white/10 rounded-none backdrop-blur-xl w-fit">
                            <Lock className="w-3 h-3 text-primary" />
                            <p className="text-[9px] text-muted-foreground uppercase font-black tracking-widest">{t.ui.locked}</p>
                          </div>
                        ) : (
                          <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold">
                            {t.ui.accessModule} <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-2 transition-transform" />
                          </div>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-card border border-white/10 rounded-sm p-8 animate-in slide-in-from-top-4 duration-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                    <div className="space-y-8">
                      <div className="pb-6 border-b border-white/5">
                        <h4 className="font-headline text-xl font-black text-white mb-3 uppercase tracking-tight">{module.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-widest opacity-70">{module.description}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="grid gap-1">
                          {module.lessons.map((lesson: any) => (
                            <LessonItem key={lesson.id} lesson={lesson} />
                          ))}
                        </div>
                        <div className="pt-6">
                          {!completedModules.includes(module.id) ? (
                            <Button 
                              onClick={() => markAsCompleted(module.id)}
                              className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/30 text-[10px] uppercase font-black tracking-[0.3em] py-8 rounded-none transition-all duration-500"
                            >
                              {t.ui.completeModule}
                            </Button>
                          ) : (
                            <div className="flex items-center justify-center gap-3 text-primary font-black text-[11px] uppercase tracking-[0.4em] p-6 bg-primary/5 rounded-none border border-primary/20">
                              <CheckCircle2 className="w-5 h-5" />
                              {t.ui.moduleCompleted}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </section>

      <div className="w-full max-w-2xl px-8 mb-32">
        <div className="bg-card border border-primary/30 p-12 rounded-sm space-y-6 relative overflow-hidden shadow-[0_0_80px_-20px_rgba(255,46,46,0.1)]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-[100px]" />
          <h3 className="font-headline text-[12px] uppercase tracking-[0.4em] flex items-center gap-3 font-black text-primary">
            <ShieldAlert className="w-5 h-5" />
            {t.ui.securityGuidelines}
          </h3>
          <div className="grid gap-6 font-body text-[11px] text-muted-foreground uppercase leading-relaxed tracking-wider">
            <div className="space-y-3">
              <span className="text-white font-black block border-l-2 border-primary pl-4">{t.ui.criticalAttention}</span>
              <p className="opacity-80">{t.ui.safetyText}</p>
              <div className="p-4 bg-primary/10 border border-primary/20 text-primary font-black text-[10px] tracking-widest">
                {t.ui.waitDays}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full max-w-2xl px-8 py-24 flex flex-col items-center justify-center space-y-10 opacity-20 border-t border-white/5">
        <div className="flex items-center gap-12">
          <Crown className="w-8 h-8" />
          <Globe className="w-8 h-8" />
          <ShieldAlert className="w-8 h-8" />
        </div>
        <div className="flex flex-col items-center gap-3 text-[9px] font-code tracking-[0.6em] text-center">
          <span className="font-black text-white">UNBANSTRATEGY_PROTOCOL_ENCRYPTED</span>
          <span className="text-primary font-black">// {t.ui.systemActive}</span>
          <span className="mt-4 opacity-50">© 2024 ZEPHYRUS_GLOBAL_SYSTEMS</span>
        </div>
      </footer>
    </main>
  );
}
