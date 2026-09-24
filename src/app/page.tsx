'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShieldAlert, 
  ChevronRight, 
  LayoutGrid, 
  Lock, 
  PlayCircle, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Globe, 
  Zap, 
  Star,
  ArrowRight,
  Sparkles,
  Command,
  Activity
} from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { translations, type Language } from '@/lib/translations';
import { SupportWidget } from '@/components/cyber/SupportWidget';

const FormattedLessonContent = ({ content }: { content: string }) => {
  const lines = content.split('\n');
  
  return (
    <div className="space-y-4">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return <div key={index} className="h-2" />;

        const isTitle = trimmedLine.endsWith(':') || 
                       (trimmedLine.length < 60 && trimmedLine === trimmedLine.toUpperCase() && trimmedLine.length > 3) ||
                       trimmedLine.startsWith('AULA') ||
                       trimmedLine.includes('?');
        
        const isListItem = trimmedLine.startsWith('✅') || 
                          trimmedLine.startsWith('❌') || 
                          trimmedLine.startsWith('-') || 
                          /^\d+[\.\)]/.test(trimmedLine) ||
                          trimmedLine.endsWith(';') ||
                          trimmedLine.startsWith('•');

        if (isTitle) {
          return (
            <h4 key={index} className="text-white font-bold text-lg mt-8 mb-4 flex items-center gap-2 group">
              <div className="w-1.5 h-6 bg-primary rounded-full group-hover:scale-y-125 transition-transform origin-center" />
              {trimmedLine}
            </h4>
          );
        }

        if (isListItem) {
          return (
            <div key={index} className="flex items-start gap-4 py-3 group bg-white/[0.02] hover:bg-white/[0.04] p-5 rounded-2xl border border-white/5 transition-all">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {trimmedLine}
              </p>
            </div>
          );
        }

        return (
          <p key={index} className="text-sm text-muted-foreground/80 leading-relaxed pl-3 border-l border-white/10 ml-1">
            {trimmedLine}
          </p>
        );
      })}
    </div>
  );
};

const LessonItem = ({ lesson, viewedLessons, markLessonAsViewed, copyToClipboard, t }: { lesson: any; viewedLessons: string[]; markLessonAsViewed: (id: string) => void; copyToClipboard: (text: string) => void; t: any }) => {
  const isViewed = viewedLessons.includes(lesson.id);

  return (
    <Dialog onOpenChange={(open) => { if (open) markLessonAsViewed(lesson.id); }}>
      <DialogTrigger asChild>
        <div 
          className={cn(
            "flex items-center justify-between p-5 rounded-2xl transition-all cursor-pointer border mb-3 group",
            isViewed 
              ? "bg-green-500/5 border-green-500/20" 
              : "bg-white/[0.02] border-white/5 hover:border-primary/50 hover:bg-white/[0.04] hover:translate-x-1"
          )}
        >
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
              isViewed ? "bg-green-500 text-white shadow-lg shadow-green-500/20" : "bg-white/5 text-muted-foreground group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20"
            )}>
              <PlayCircle className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-sm font-bold transition-colors",
                isViewed ? "text-green-500" : "text-white group-hover:text-primary"
              )}>
                {lesson.title}
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">Clique para descriptografar</span>
            </div>
          </div>
          <ChevronRight className={cn("w-4 h-4 transition-all opacity-0 group-hover:opacity-100", isViewed ? "text-green-500 opacity-100" : "text-primary")} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-card/95 backdrop-blur-3xl border-white/10 w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar p-0 rounded-[2.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)]">
        <div className="p-8 md:p-12">
          <DialogHeader className="pb-8 mb-8 border-b border-white/5">
            <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
              <Command className="w-4 h-4 animate-pulse" />
              {t.ui.dataStream}
            </div>
            <DialogTitle className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight max-w-2xl">
              {lesson.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Conteúdo detalhado da aula técnica sobre recuperação estratégica.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-12">
            {lesson.content && (
              <div className="max-w-none prose prose-invert prose-p:text-muted-foreground prose-h4:text-white">
                <FormattedLessonContent content={lesson.content} />
              </div>
            )}
            
            {lesson.template && (
              <div className="relative group/template">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur opacity-10 group-hover/template:opacity-20 transition duration-1000"></div>
                <div className="relative space-y-4 p-8 bg-black/40 border border-white/10 rounded-[2rem] overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.3em]">
                      <Terminal className="w-5 h-5" />
                      {t.ui.copyTemplate}
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => copyToClipboard(lesson.template)}
                      className="h-10 px-6 bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95"
                    >
                      <Copy className="w-3.5 h-3.5 mr-2" /> {t.ui.copyTemplate}
                    </Button>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl font-mono text-sm leading-relaxed text-muted-foreground/80 italic select-all">
                    "{lesson.template}"
                  </div>
                </div>
              </div>
            )}

            {lesson.id === '2.1' && (
              <div className="pt-4">
                <Button 
                  asChild 
                  className="w-full h-20 bg-primary hover:bg-primary/90 text-white font-black text-lg uppercase tracking-[0.2em] rounded-[1.5rem] shadow-2xl shadow-primary/30 group/official transition-all"
                >
                  <a href="https://ffsuporte.garena.com/support/tickets/new" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-6 h-6 mr-3 group-hover/official:rotate-12 transition-transform" /> {t.ui.officialChannel}
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function Home() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const [viewedLessons, setViewedLessons] = useState<string[]>([]);
  const { toast } = useToast();

  const t = language ? translations[language] : null;

  useEffect(() => {
    const savedLang = localStorage.getItem('unban_strategy_lang') as Language;
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
    setHasChecked(true);
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

  if (!hasChecked) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!language || !t) {
    return (
      <div className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-md w-full space-y-12 text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-white/5 border border-white/10 rounded-[2.5rem] flex items-center justify-center relative shadow-[0_0_50px_rgba(225,29,72,0.1)] overflow-hidden backdrop-blur-xl animate-float">
              <Image 
                src="/logo.png" 
                alt="Product Logo" 
                fill
                className="object-cover p-3"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
              {translations.pt.selectLanguage}
            </h2>
            <div className="flex items-center justify-center gap-3 text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] opacity-60">
              <Activity className="w-3 h-3 text-primary" />
              {translations.pt.protocolInitialization}
            </div>
          </div>

          <div className="grid gap-4 pt-4">
            {[
              { id: 'pt', label: 'Português (BR)', flag: '🇧🇷' },
              { id: 'en', label: 'English (US)', flag: '🇺🇸' },
              { id: 'es', label: 'Español (ES)', flag: '🇪🇸' }
            ].map((lang, idx) => (
              <Button 
                key={lang.id}
                onClick={() => selectLanguage(lang.id as Language)} 
                className="h-20 w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/50 text-white font-bold rounded-[1.5rem] transition-all flex items-center justify-between px-8 group shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center gap-5">
                  <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all scale-100 group-hover:scale-110">{lang.flag}</span>
                  <span className="tracking-widest uppercase text-sm">{lang.label}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all">
                  <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-white" />
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <div className="w-full bg-amber-500/5 border-b border-white/5 backdrop-blur-2xl sticky top-0 z-50">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="premium-support" className="border-none">
            <AccordionTrigger className="px-6 md:px-8 py-4 hover:no-underline hover:bg-white/[0.02] transition-colors">
              <div className="max-w-6xl mx-auto w-full flex items-center justify-center gap-4">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-amber-500">
                  {t.ui.premiumSupportTrigger}
                </span>
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-8 animate-in fade-in zoom-in-95 duration-500">
              <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group overflow-hidden p-8 rounded-[2rem] bg-amber-500/5 border border-amber-500/20 flex flex-col gap-6 hover:bg-amber-500/10 transition-all">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
                  <div>
                    <h4 className="text-amber-500 font-black text-xs uppercase tracking-[0.3em] mb-3">{t.orderBump.title}</h4>
                    <p className="text-xs text-amber-500/70 leading-relaxed font-medium">{t.orderBump.description}</p>
                  </div>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-widest rounded-2xl h-14 text-xs shadow-xl shadow-amber-500/20 active:scale-95 transition-all">
                    <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                      <Zap className="w-4 h-4 mr-2" /> {t.orderBump.button}
                    </a>
                  </Button>
                </div>
                <div className="relative group overflow-hidden p-8 rounded-[2rem] bg-amber-500/5 border border-amber-500/20 flex flex-col gap-6 hover:bg-amber-500/10 transition-all">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
                  <div>
                    <h4 className="text-amber-500 font-black text-xs uppercase tracking-[0.3em] mb-3">{t.bypass.title}</h4>
                    <p className="text-xs text-amber-500/70 leading-relaxed font-medium">{t.bypass.description}</p>
                  </div>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-widest rounded-2xl h-14 text-xs shadow-xl shadow-amber-500/20 active:scale-95 transition-all">
                    <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                      <Sparkles className="w-4 h-4 mr-2" /> {t.bypass.button}
                    </a>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <header className="w-full flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full mask-radial pointer-events-none opacity-50" />
        
        <div className="w-full relative aspect-[21/9] md:aspect-[4/1] overflow-hidden group border-b border-white/5 shadow-2xl">
          <Image 
            src="/banner.png" 
            alt="Strategic Banner" 
            fill 
            className="object-cover transition-transform duration-[3s] group-hover:scale-110 ease-out"
            priority
            data-ai-hint="tech banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent" />
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </div>

        <div className="max-w-6xl px-6 md:px-8 pt-20 pb-24 flex flex-col items-center space-y-10 relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="flex flex-col items-center space-y-8">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] text-gradient">
              {t.hero.title}<br />
              <span className="text-primary italic">{t.hero.titleAccent}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium tracking-tight">
              {t.hero.description}
            </p>
          </div>
        </div>
      </header>

      <section className="w-full max-w-6xl px-6 md:px-8 py-24 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.5em]">
              <Command className="w-4 h-4" />
              Operational Trilha
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">Recuperação Estratégica</h2>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest opacity-60">Descriptografe os módulos para acessar os protocolos.</p>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md group hover:border-primary/30 transition-all cursor-crosshair">
            <LayoutGrid className="w-6 h-6 text-primary opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.modules.map((module: any, index: number) => {
            const isLocked = index > 0 && !completedModules.includes(t.modules[index - 1].id);
            const moduleImage = PlaceHolderImages.find(img => img.id === module.id)?.imageUrl;

            return (
              <div key={module.id} className="group/card perspective-1000 animate-in fade-in slide-in-from-bottom-12 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <div className={cn(
                  "flex flex-col h-full rounded-[2.5rem] overflow-hidden border transition-all duration-700 relative",
                  isLocked 
                    ? "bg-white/[0.01] border-white/[0.05] opacity-40 grayscale" 
                    : "bg-white/[0.03] border-white/[0.08] hover:border-primary/40 hover:bg-white/[0.06] hover:-translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover/card:shadow-primary/10"
                )}>
                  {!isLocked && <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-20" />}
                  
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    {moduleImage && (
                      <Image 
                        src={moduleImage} 
                        alt={module.title} 
                        fill 
                        className={cn(
                          "object-cover transition-all duration-[2s] group-hover/card:scale-110",
                          !isLocked ? "brightness-[0.6] group-hover/card:brightness-[0.8]" : "brightness-[0.3]"
                        )} 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-1.5 bg-primary/20 backdrop-blur-2xl border border-primary/30 rounded-full text-[10px] font-black text-primary tracking-[0.3em] uppercase animate-pulse">
                        {module.tag}
                      </div>
                    </div>
                    {isLocked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                          <Lock className="w-6 h-6 text-white/40" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-10 flex flex-col flex-1 gap-6 relative z-10">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-white tracking-tighter group-hover/card:text-primary transition-colors uppercase italic leading-none">{module.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3 opacity-80">{module.description}</p>
                    </div>

                    <div className="mt-auto pt-6 flex flex-col gap-4">
                      {isLocked ? (
                        <div className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-[1.5rem] opacity-60">
                          <Lock className="w-5 h-5 text-muted-foreground" />
                          <span className="text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">{t.ui.locked}</span>
                        </div>
                      ) : (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.2em] rounded-[1.5rem] shadow-xl shadow-primary/20 group/btn transition-all active:scale-95">
                              {t.ui.accessModule} 
                              <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-all" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-card/98 backdrop-blur-3xl border-white/10 w-[95vw] md:max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar p-0 rounded-[3rem] overflow-hidden shadow-[0_0_150px_rgba(225,29,72,0.15)]">
                            <DialogHeader className="sr-only">
                              <DialogTitle>{module.title}</DialogTitle>
                              <DialogDescription>{module.description}</DialogDescription>
                            </DialogHeader>
                            <div className="h-64 relative w-full overflow-hidden">
                              {moduleImage && <Image src={moduleImage} alt={module.title} fill className="object-cover brightness-[0.4] scale-105" />}
                              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                              <div className="absolute bottom-10 left-12 max-w-2xl animate-in slide-in-from-left-8 duration-700">
                                <span className="text-primary text-[10px] font-black tracking-[0.6em] uppercase mb-4 block">{module.tag}</span>
                                <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">{module.title}</h3>
                              </div>
                            </div>
                            <div className="p-10 md:p-14 space-y-12">
                              <div className="grid gap-4">
                                {module.lessons.map((lesson: any) => (
                                  <LessonItem 
                                    key={lesson.id} 
                                    lesson={lesson} 
                                    viewedLessons={viewedLessons}
                                    markLessonAsViewed={markLessonAsViewed}
                                    copyToClipboard={copyToClipboard}
                                    t={t}
                                  />
                                ))}
                              </div>
                              <div className="pt-8 border-t border-white/5">
                                {!completedModules.includes(module.id) ? (
                                  <Button 
                                    onClick={() => markAsCompleted(module.id)}
                                    className="w-full bg-white/[0.03] hover:bg-primary text-white border border-white/10 hover:border-primary h-20 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] transition-all active:scale-[0.98] shadow-2xl"
                                  >
                                    {t.ui.completeModule}
                                  </Button>
                                ) : (
                                  <div className="flex items-center justify-center gap-4 text-green-500 font-black text-xs uppercase tracking-[0.3em] p-8 bg-green-500/5 rounded-[2rem] border border-green-500/20 shadow-inner">
                                    <CheckCircle2 className="w-6 h-6 animate-bounce" />
                                    {t.ui.moduleCompleted}
                                  </div>
                                )}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="w-full max-w-4xl px-6 md:px-8 pb-40">
        <div className="relative group p-10 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] animate-in zoom-in-95 duration-1000">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-all duration-1000" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 space-y-10">
            <div className="flex items-center gap-5 text-primary">
              <div className="p-4 bg-primary/10 rounded-2xl shadow-lg shadow-primary/10">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-[0.3em] italic">{t.ui.securityGuidelines}</h3>
            </div>
            
            <div className="grid gap-10 font-medium">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-1.5 h-6 bg-primary rounded-full" />
                  <span className="text-2xl font-black tracking-tight uppercase italic">{t.ui.criticalAttention}</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium tracking-tight">
                  {t.ui.safetyText}
                </p>
                <div className="relative overflow-hidden p-8 bg-primary/10 border border-primary/20 rounded-[2rem] text-primary font-black text-sm leading-relaxed text-center uppercase tracking-[0.2em] shadow-inner">
                  <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-20" />
                  {t.ui.waitDays}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-white/[0.01] border-t border-white/5 py-24 flex flex-col items-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-primary/5 blur-[100px] rounded-full mask-radial pointer-events-none" />
        
        <div className="max-w-6xl w-full px-6 md:px-8 flex flex-col items-center gap-16 relative z-10">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col items-center md:items-start gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative grayscale group hover:grayscale-0 transition-all">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <span className="font-black text-2xl tracking-tighter uppercase italic">Unban Strategy</span>
              </div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-black opacity-50 text-center md:text-left leading-relaxed max-w-[200px]">
                Strategic Recovery Protocols // Verified Authority
              </p>
            </div>
            
            <div className="flex gap-10 text-muted-foreground">
              <ShieldAlert className="w-8 h-8 hover:text-primary hover:scale-125 hover:rotate-12 transition-all cursor-pointer opacity-40 hover:opacity-100" />
              <Globe className="w-8 h-8 hover:text-primary hover:scale-125 transition-all cursor-pointer opacity-40 hover:opacity-100" />
              <Zap className="w-8 h-8 hover:text-primary hover:scale-125 hover:-rotate-12 transition-all cursor-pointer opacity-40 hover:opacity-100" />
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 shadow-inner">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
              <span className="text-[10px] font-black text-primary tracking-[0.5em] uppercase italic">{t.ui.systemActive}</span>
            </div>
            <span className="text-[10px] text-muted-foreground/30 tracking-[0.8em] font-black uppercase text-center">
              © 2024 ZEPHYRUS GLOBAL SYSTEMS // ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </footer>
      
      <SupportWidget lang={language} />
    </main>
  );
}