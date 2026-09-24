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
  Activity,
  X,
  ArrowDown
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

const onboardingSteps = {
  pt: [
    {
      title: "1. Conhecimento Base Obrigatório",
      description: "Este é o seu primeiro passo! Você deve ler cada um dos módulos abaixo para entender perfeitamente como construir um ticket de respeito que o suporte humano realmente vai analisar. Os módulos são liberados em ordem conforme você os conclui.",
      icon: LayoutGrid,
      tag: "PASSO 1 OBRIGATÓRIO",
      targetId: "modulos-estrategicos"
    },
    {
      title: "2. Suporte Premium VIP & Bypass",
      description: "Após entender a lógica e estruturar sua estratégia através dos módulos, você poderá utilizar os canais de apoio especializados no topo para planos VIP/Bypass ou o Widget de comunicação no canto inferior.",
      icon: Zap,
      tag: "PASSO 2 CANAIS EXTRA",
      targetId: "premium-support-nav"
    }
  ],
  en: [
    {
      title: "1. Mandatory Core Knowledge",
      description: "This is your first step! You must read each of the modules below to perfectly understand how to construct a high-level ticket that human support will actually review. Modules unlock in order as you complete them.",
      icon: LayoutGrid,
      tag: "MANDATORY STEP 1",
      targetId: "modulos-estrategicos"
    },
    {
      title: "2. Premium VIP & Bypass Support",
      description: "After understanding the logic and configuring your strategy via the modules, you can access the specialized premium support options at the top or use the active widget in the bottom corner.",
      icon: Zap,
      tag: "STEP 2 CHANNELS",
      targetId: "premium-support-nav"
    }
  ],
  es: [
    {
      title: "1. Conocimiento Base Obligatorio",
      description: "¡Este es su primer paso! Debe leer cada uno de los módulos a continuación para comprender perfectamente cómo construir un ticket de respeto que el soporte humano realmente analizará. Los módulos se desbloquean en orden a medida que los completa.",
      icon: LayoutGrid,
      tag: "PASO 1 OBRIGATORIO",
      targetId: "modulos-estrategicos"
    },
    {
      title: "2. Soporte Premium VIP y Bypass",
      description: "Después de comprender la lógica y estructurar su estrategia a través de los módulos, podrá utilizar los canales de apoyo especializados en la parte superior para planos VIP/Bypass.",
      icon: Zap,
      tag: "PASO 2 SOPORTE EXTRA",
      targetId: "premium-support-nav"
    }
  ]
};

const FormattedLessonContent = ({ content }: { content: string }) => {
  const lines = content.split('\n');
  
  return (
    <div className="space-y-4 text-left">
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
            <h4 key={index} className="text-white font-bold text-base sm:text-lg mt-6 sm:mt-8 mb-3 sm:mb-4 flex items-center gap-2 group">
              <div className="w-1.5 h-5 sm:h-6 bg-primary rounded-full group-hover:scale-y-125 transition-transform origin-center" />
              {trimmedLine}
            </h4>
          );
        }

        if (isListItem) {
          return (
            <div key={index} className="flex items-start gap-3 py-2.5 group bg-white/[0.02] hover:bg-white/[0.04] p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/5 transition-all">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {trimmedLine}
              </p>
            </div>
          );
        }

        return (
          <p key={index} className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed pl-3 border-l border-l-primary/30 ml-1">
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
            "flex items-center justify-between p-4 sm:p-5 rounded-xl sm:rounded-2xl transition-all cursor-pointer border mb-2 sm:mb-3 group",
            isViewed 
              ? "bg-green-500/5 border-green-500/20" 
              : "bg-white/[0.02] border-white/5 hover:border-primary/50 hover:bg-white/[0.04]"
          )}
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={cn(
              "w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all",
              isViewed ? "bg-green-500 text-white" : "bg-white/5 text-muted-foreground group-hover:bg-primary group-hover:text-white"
            )}>
              <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className={cn(
                "text-xs sm:text-sm font-bold transition-colors line-clamp-1",
                isViewed ? "text-green-500" : "text-white group-hover:text-primary"
              )}>
                {lesson.title}
              </span>
              <span className="text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5">Descriptografar</span>
            </div>
          </div>
          <ChevronRight className={cn("w-4 h-4 transition-all opacity-50 group-hover:opacity-100 group-hover:translate-x-1", isViewed ? "text-green-500 opacity-100" : "text-primary")} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-card/95 backdrop-blur-3xl border-none w-full h-[100dvh] overflow-y-auto custom-scrollbar p-0 sm:rounded-[2.5rem] shadow-none focus:outline-none max-w-none sm:max-w-4xl sm:h-auto sm:max-h-[90vh]">
        <div className="p-6 sm:p-12 pb-24 sm:pb-12">
          <DialogHeader className="pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-white/5 text-left">
            <div className="flex items-center gap-2 text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] mb-3 sm:mb-4">
              <Command className="w-3.5 h-3.5 animate-pulse" />
              {t.ui.dataStream}
            </div>
            <DialogTitle className="text-2xl sm:text-5xl font-black text-white tracking-tighter leading-tight max-w-2xl text-left">
              {lesson.title}
            </DialogTitle>
            <DialogDescription className="text-left text-xs text-muted-foreground">
              Conteúdo detalhado da aula técnica sobre recuperação estratégica.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-8 sm:space-y-12">
            {lesson.content && (
              <div className="max-w-none prose prose-invert">
                <FormattedLessonContent content={lesson.content} />
              </div>
            )}
            
            {lesson.template && (
              <div className="relative group/template">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-10 group-hover/template:opacity-20 transition duration-1000"></div>
                <div className="relative space-y-4 p-5 sm:p-8 bg-black/40 border border-white/10 rounded-2xl overflow-hidden text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 text-primary font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em]">
                      <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                      {t.ui.copyTemplate}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 bg-white/[0.02] border border-white/5 rounded-xl font-mono text-[11px] sm:text-sm leading-relaxed text-muted-foreground/80 italic select-all break-words">
                    "{lesson.template}"
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => copyToClipboard(lesson.template)}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
                  >
                    <Copy className="w-3.5 h-3.5 mr-2" /> {t.ui.copyTemplate}
                  </Button>
                </div>
              </div>
            )}

            {lesson.id === '2.1' && (
              <div className="pt-2">
                <Button 
                  asChild 
                  className="w-full h-16 sm:h-20 bg-primary hover:bg-primary/90 text-white font-black text-base sm:text-lg uppercase tracking-[0.2em] rounded-xl shadow-2xl shadow-primary/30 group/official transition-all"
                >
                  <a href="https://ffsuporte.garena.com/support/tickets/new" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 mr-3 group-hover/official:rotate-12 transition-transform" /> {t.ui.officialChannel}
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
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingIndex, setOnboardingIndex] = useState(0);
  const { toast } = useToast();

  const t = language ? translations[language] : null;
  const steps = language ? onboardingSteps[language] : [];

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
    
    // Inicia automaticamente o passo a passo com foco visual
    setShowOnboarding(true);
    setOnboardingIndex(0);
    setTimeout(() => {
      scrollToSection("modulos-estrategicos");
    }, 300);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const nextStep = () => {
    if (onboardingIndex < steps.length - 1) {
      const nextIdx = onboardingIndex + 1;
      setOnboardingIndex(nextIdx);
      if (steps[nextIdx].targetId) {
        scrollToSection(steps[nextIdx].targetId);
      }
    } else {
      setShowOnboarding(false);
      localStorage.setItem('unban_onboarding_completed', 'true');
      toast({
        title: language === 'pt' ? 'Guia Concluído' : language === 'es' ? 'Guía Completada' : 'Guide Completed',
        description: language === 'pt' ? 'Você já sabe por onde começar. Estude o primeiro módulo para liberar os próximos.' : 'Study the first module to unlock the next segments.',
      });
    }
  };

  const finishOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('unban_onboarding_completed', 'true');
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
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center relative shadow-[0_0_50px_rgba(225,29,72,0.1)] overflow-hidden backdrop-blur-xl animate-float">
              <Image 
                src="/logo.png" 
                alt="Product Logo" 
                fill
                className="object-cover p-3 sm:p-4"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          <div className="space-y-4 px-4">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase italic">
              {translations.pt.selectLanguage}
            </h2>
            <div className="flex items-center justify-center gap-3 text-[9px] sm:text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] opacity-60">
              <Activity className="w-3 h-3 text-primary" />
              {translations.pt.protocolInitialization}
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4 pt-4 px-4">
            {[
              { id: 'pt', label: 'Português (BR)', flag: '🇧🇷' },
              { id: 'en', label: 'English (US)', flag: '🇺🇸' },
              { id: 'es', label: 'Español (ES)', flag: '🇪🇸' }
            ].map((lang, idx) => (
              <Button 
                key={lang.id}
                onClick={() => selectLanguage(lang.id as Language)} 
                className="h-16 sm:h-20 w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/50 text-white font-bold rounded-xl sm:rounded-[1.5rem] transition-all flex items-center justify-between px-6 sm:px-8 group shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <span className="text-2xl sm:text-3xl filter grayscale group-hover:grayscale-0 transition-all scale-100 group-hover:scale-110">{lang.flag}</span>
                  <span className="tracking-widest uppercase text-xs sm:text-sm">{lang.label}</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-white" />
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center selection:bg-primary/30 overflow-x-hidden">
      
      {/* FLOATING MOBILE-OPTIMIZED INTERACTIVE WIZARD CONTROL */}
      {showOnboarding && steps && steps[onboardingIndex] && (
        <div className="fixed bottom-4 left-4 right-4 z-[150] bg-card/95 backdrop-blur-2xl border-2 border-primary/40 rounded-3xl p-5 shadow-[0_20px_50px_rgba(236,72,153,0.3)] animate-in slide-in-from-bottom-8 duration-500">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 bg-primary/20 border border-primary/30 text-primary text-[9px] font-black uppercase tracking-widest rounded-full">
              {steps[onboardingIndex].tag}
            </span>
            <button 
              onClick={finishOnboarding}
              className="text-muted-foreground hover:text-white p-1 text-xs uppercase font-bold"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2 text-left">
            <h4 className="text-sm font-black text-white uppercase italic flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              {steps[onboardingIndex].title}
            </h4>
            <p className="text-xs text-muted-foreground/90 leading-relaxed font-medium">
              {steps[onboardingIndex].description}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-3">
            <div className="flex gap-1">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={cn("h-1 rounded-full transition-all", idx === onboardingIndex ? "w-4 bg-primary" : "w-1.5 bg-white/10")} 
                />
              ))}
            </div>
            <Button 
              size="sm"
              onClick={nextStep}
              className="bg-primary hover:bg-primary/90 text-white font-black text-[10px] uppercase tracking-wider rounded-xl h-9 px-4 shrink-0"
            >
              {onboardingIndex === steps.length - 1 ? "Entendido, Começar" : "Próximo Passo"}
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Button>
          </div>
        </div>
      )}

      <div id="premium-support-nav" className="w-full bg-amber-500/5 border-b border-white/5 backdrop-blur-2xl sticky top-0 z-50">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="premium-support" className="border-none">
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/[0.02] transition-colors">
              <div className="max-w-6xl mx-auto w-full flex items-center justify-center gap-3 sm:gap-4">
                <Star className="w-3.5 h-3.5 sm:w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-amber-500 truncate">
                  {t.ui.premiumSupportTrigger}
                </span>
                <Star className="w-3.5 h-3.5 sm:w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 sm:pb-8 animate-in fade-in zoom-in-95 duration-500">
              <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative group overflow-hidden p-6 sm:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col gap-5 sm:gap-6 hover:bg-amber-500/10 transition-all text-left">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
                  <div>
                    <h4 className="text-amber-500 font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 sm:mb-3">{t.orderBump.title}</h4>
                    <p className="text-[10px] sm:text-xs text-amber-500/70 leading-relaxed font-medium">{t.orderBump.description}</p>
                  </div>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-widest rounded-xl h-12 sm:h-14 text-[10px] sm:text-xs shadow-xl shadow-amber-500/20 active:scale-95 transition-all">
                    <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                      <Zap className="w-3.5 h-3.5 sm:w-4 h-4 mr-2" /> {t.orderBump.button}
                    </a>
                  </Button>
                </div>
                <div className="relative group overflow-hidden p-6 sm:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col gap-5 sm:gap-6 hover:bg-amber-500/10 transition-all text-left">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full" />
                  <div>
                    <h4 className="text-amber-500 font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 sm:mb-3">{t.bypass.title}</h4>
                    <p className="text-[10px] sm:text-xs text-amber-500/70 leading-relaxed font-medium">{t.bypass.description}</p>
                  </div>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-widest rounded-xl h-12 sm:h-14 text-[10px] sm:text-xs shadow-xl shadow-amber-500/20 active:scale-95 transition-all">
                    <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 h-4 mr-2" /> {t.bypass.button}
                    </a>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <header className="w-full flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] sm:h-[500px] bg-primary/10 blur-[80px] sm:blur-[120px] rounded-full mask-radial pointer-events-none opacity-50" />
        
        <div className="w-full relative h-[180px] sm:h-[260px] overflow-hidden group border-b border-white/5 shadow-2xl">
          <Image 
            src="/banner.png" 
            alt="Strategic Banner" 
            fill 
            className="object-cover transition-transform duration-[3s] group-hover:scale-105 ease-out"
            priority
            data-ai-hint="tech banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-transparent" />
        </div>

        <div className="max-w-6xl px-6 pt-10 pb-10 flex flex-col items-center space-y-6 relative z-10">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-5xl sm:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase italic">
              {t.hero.title}<br />
              <span className="text-primary">{t.hero.titleAccent}</span>
            </h1>
            
            <p className="text-sm sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-medium tracking-tight px-4">
              {t.hero.description}
            </p>
          </div>
        </div>
      </header>

      {/* SEÇÃO DOS MÓDULOS - PONTO FOCAL DE REDIRECIONAMENTO COM SETAS DEDICADAS */}
      <section id="modulos-estrategicos" className="w-full max-w-6xl px-4 sm:px-6 py-10 relative scroll-mt-20">
        
        {/* INDICADOR VISUAL DIRECIONAL PARA O LEAD */}
        {showOnboarding && onboardingIndex === 0 && (
          <div className="flex flex-col items-center justify-center mb-6 animate-bounce">
            <span className="text-[10px] font-black uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 tracking-[0.2em]">
              ⚠️ LEIA AQUI PRIMEIRO
            </span>
            <ArrowDown className="w-5 h-5 text-primary mt-1 animate-pulse" />
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2 px-2 relative">
            <div className="flex items-center gap-3 text-primary text-[9px] font-black uppercase tracking-[0.4em]">
              <Command className="w-3.5 h-3.5" />
              Passo Obrigatorio // Conteúdo Prático
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase italic">Recuperação Estratégica</h2>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide opacity-80">
              Você deve entender como funciona um ticket de respeito antes de qualquer envio.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.modules.map((module: any, index: number) => {
            const isLocked = index > 0 && !completedModules.includes(t.modules[index - 1].id);
            const moduleImage = PlaceHolderImages.find(img => img.id === module.id)?.imageUrl;

            return (
              <div 
                key={module.id} 
                className={cn(
                  "group/card transition-all duration-500 relative",
                  showOnboarding && onboardingIndex === 0 && index === 0 ? "ring-2 ring-primary ring-offset-4 ring-offset-background rounded-[2rem]" : ""
                )}
              >
                {/* SETA DIRECIONAL E COMPORTAMENTO VISUAL DE FLUXO */}
                {showOnboarding && onboardingIndex === 0 && index === 0 && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-0.5 bg-primary text-white font-black text-[9px] tracking-widest px-3 py-1 rounded-md uppercase">
                    <span>COMECE POR AQUI</span>
                    <ArrowDown className="w-3 h-3" />
                  </div>
                )}

                <div className={cn(
                  "flex flex-col h-full rounded-[2rem] overflow-hidden border transition-all duration-500 relative",
                  isLocked 
                    ? "bg-white/[0.01] border-white/[0.05] opacity-35 grayscale" 
                    : "bg-white/[0.03] border-white/[0.08] hover:border-primary/40 hover:bg-white/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                )}>
                  
                  <div className="relative aspect-[4/5] w-full overflow-hidden shrink-0">
                    {moduleImage && (
                      <Image 
                        src={moduleImage} 
                        alt={module.title} 
                        fill 
                        className={cn(
                          "object-cover transition-all duration-700",
                          !isLocked ? "brightness-[0.6] group-hover/card:scale-105" : "brightness-[0.25]"
                        )} 
                        sizes="(max-w-768px) 100vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[9px] font-black text-primary tracking-widest uppercase">
                        {module.tag}
                      </div>
                    </div>
                    {isLocked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                          <Lock className="w-5 h-5 text-white/40" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1 gap-4 text-left justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-white tracking-tighter group-hover/card:text-primary transition-colors uppercase italic leading-tight">
                        {module.title}
                      </h3>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed font-medium line-clamp-3">
                        {module.description}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col gap-3">
                      {isLocked ? (
                        <div className="flex items-center gap-2.5 p-3.5 bg-white/[0.01] border border-white/5 rounded-xl opacity-50">
                          <Lock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-[9px] font-black text-muted-foreground tracking-wider uppercase">{t.ui.locked}</span>
                        </div>
                      ) : (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full h-13 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-primary/20 group/btn transition-all active:scale-95">
                              {t.ui.accessModule} 
                              <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1.5 transition-all" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-card w-full h-[100dvh] overflow-y-auto custom-scrollbar p-0 overflow-hidden shadow-none focus:outline-none sm:max-w-3xl sm:h-auto sm:max-h-[85vh] sm:rounded-3xl border-none">
                            <DialogHeader className="sr-only text-left">
                              <DialogTitle>{module.title}</DialogTitle>
                              <DialogDescription>{module.description}</DialogDescription>
                            </DialogHeader>
                            <div className="h-40 sm:h-56 relative w-full overflow-hidden shrink-0">
                              {moduleImage && <Image src={moduleImage} alt={module.title} fill className="object-cover brightness-[0.35]" />}
                              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                              <div className="absolute bottom-5 left-5 pr-6 max-w-2xl text-left">
                                <span className="text-primary text-[9px] font-black tracking-widest uppercase mb-1 block">{module.tag}</span>
                                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tighter uppercase italic leading-tight">{module.title}</h3>
                              </div>
                            </div>
                            <div className="p-5 sm:p-8 space-y-6 pb-24">
                              <div className="grid gap-2.5">
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
                              <div className="pt-4 border-t border-white/5">
                                {!completedModules.includes(module.id) ? (
                                  <Button 
                                    onClick={() => markAsCompleted(module.id)}
                                    className="w-full bg-white/[0.02] hover:bg-primary text-white border border-white/10 hover:border-primary h-14 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-[0.98]"
                                  >
                                    {t.ui.completeModule}
                                  </Button>
                                ) : (
                                  <div className="flex items-center justify-center gap-2.5 text-green-500 font-black text-xs uppercase tracking-wider p-4 bg-green-500/5 rounded-xl border border-green-500/20">
                                    <CheckCircle2 className="w-5 h-5" />
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

      <div className="w-full max-w-4xl px-4 sm:px-6 pb-20">
        <div className="relative group p-6 sm:p-12 rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />
          
          <div className="relative z-10 space-y-6 text-left">
            <div className="flex items-center gap-3 text-primary">
              <div className="p-2.5 bg-primary/10 rounded-xl">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider italic leading-tight">{t.ui.securityGuidelines}</h3>
            </div>
            
            <div className="grid gap-6 font-medium">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-1.5 h-5 bg-primary rounded-full" />
                  <span className="text-lg font-black tracking-tight uppercase italic">{t.ui.criticalAttention}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                  {t.ui.safetyText}
                </p>
                <div className="relative overflow-hidden p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary font-black text-[10px] sm:text-xs text-center uppercase tracking-wider shadow-inner">
                  {t.ui.waitDays}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-white/[0.01] border-t border-white/5 py-12 flex flex-col items-center relative overflow-hidden">
        <div className="max-w-6xl w-full px-6 flex flex-col items-center gap-8 relative z-10">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 relative grayscale">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <span className="font-black text-xl tracking-tighter uppercase italic">Unban Strategy</span>
              </div>
              <p className="text-[8px] text-muted-foreground uppercase tracking-[0.3em] font-black opacity-50">
                Strategic Recovery Protocols // Verified Authority
              </p>
            </div>
            
            <div className="flex gap-6 text-muted-foreground">
              <ShieldAlert className="w-5 h-5 hover:text-primary transition-all cursor-pointer opacity-50 hover:opacity-100" />
              <Globe className="w-5 h-5 hover:text-primary transition-all cursor-pointer opacity-50 hover:opacity-100" />
              <Zap className="w-5 h-5 hover:text-primary transition-all cursor-pointer opacity-50 hover:opacity-100" />
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-primary tracking-widest uppercase italic">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
              {t.ui.systemActive}
            </div>
            <span className="text-[8px] text-muted-foreground/30 tracking-widest font-black uppercase text-center">
              © 2024 ZEPHYRUS GLOBAL SYSTEMS // ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </footer>
      
      <SupportWidget lang={language || 'pt'} />
    </main>
  );
}
