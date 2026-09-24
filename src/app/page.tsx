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
  ArrowLeft,
  X
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
      title: "1. Conhecimento Base (Módulos)",
      description: "O primeiro passo do seu guia é rolar a página até a seção de Recuperação Estratégica. Você é obrigado a ler e entender como funciona um ticket de respeito antes de enviar qualquer mensagem. Sem essa base, sua conta não sairá do bloqueio.",
      icon: LayoutGrid,
      tag: "PASSO OBRIGATÓRIO"
    },
    {
      title: "2. Suporte Premium e Silêncio",
      description: "Por fim, o guia apresenta os canais de apoio: a Central de Suporte Premium no topo para planos VIP/Bypass e o Widget do Telegram no canto inferior. Lembre-se, este passo a passo serve apenas para mapear sua jornada. O sucesso real está na execução correta!",
      icon: Zap,
      tag: "ALTA CONVERSÃO"
    }
  ],
  en: [
    {
      title: "1. Core Knowledge (Modules)",
      description: "The first step of your guide is to scroll down to the Strategic Recovery section. You must read and understand how a respectful, professional ticket works before sending any message. Without this foundation, your account stays locked.",
      icon: LayoutGrid,
      tag: "MANDATORY STEP"
    },
    {
      title: "2. Premium Support & Silence",
      description: "Finally, the guide presents the active help channels: the Premium Support Center at the top for VIP/Bypass plans and the Telegram Widget in the bottom corner. Remember, this step-by-step is just to map your journey. Real success lies in proper execution!",
      icon: Zap,
      tag: "HIGH CONVERSION"
    }
  ],
  es: [
    {
      title: "1. Conocimiento Base (Módulos)",
      description: "El primer paso de su guía é desplazarse hasta la sección de Recuperación Estratégica. Está obligado a leer y comprender cómo funciona un ticket de respeto antes de enviar cualquier mensaje. Sin esta base, su cuenta seguirá bloqueada.",
      icon: LayoutGrid,
      tag: "PASO OBRIGATORIO"
    },
    {
      title: "2. Soporte Premium y Silencio",
      description: "Por último, la guía presents los canales de ayuda: el Centro de Soporte Premium en la parte superior para planes VIP/Bypass y el Widget de Telegram en la esquina inferior. Recuerde, este paso a paso es solo para mapear su viaje. ¡El éxito real está en la ejecución correcta!",
      icon: Zap,
      tag: "ALTA CONVERSIÓN"
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
    
    const onboardingSeen = localStorage.getItem('unban_onboarding_completed');
    if (!onboardingSeen) {
      setShowOnboarding(true);
      setOnboardingIndex(0);
    }
  };

  const finishOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('unban_onboarding_completed', 'true');
    toast({
      title: language === 'pt' ? 'Guia Concluído' : language === 'es' ? 'Guía Completada' : 'Guide Completed',
      description: language === 'pt' ? 'Você entendeu o caminho. Agora execute o passo a passo na ordem sugerida.' : 'You understand the path. Now execute the steps in order.',
    });
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
      
      {/* ONBOARDING DIALOG - REDIRECIONAMENTO E MAPEAMENTO DE LEADS */}
      {showOnboarding && steps && steps[onboardingIndex] && (
        <div className="fixed inset-0 z-[300] bg-background/95 backdrop-blur-3xl flex flex-col justify-between p-6 animate-in fade-in duration-500 h-[100dvh]">
          <div className="w-full flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em]">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
              {steps[onboardingIndex].tag}
            </div>
            <button 
              onClick={finishOnboarding}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-auto space-y-6 sm:space-y-8 max-w-lg mx-auto w-full text-center">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_50px_rgba(236,72,153,0.1)]">
                {(() => {
                  const CurrentIcon = steps[onboardingIndex].icon;
                  return <CurrentIcon className="w-10 h-10" />;
                })()}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase italic">
                {steps[onboardingIndex].title}
              </h2>
              <p className="text-sm text-muted-foreground/90 leading-relaxed font-medium">
                {steps[onboardingIndex].description}
              </p>
              <p className="text-[10px] text-primary/60 uppercase font-black tracking-widest pt-2">
                * Este é apenas o guia de orientação geral do sistema *
              </p>
            </div>

            {/* PROGRESSO DO PASSO A PASSO */}
            <div className="flex justify-center gap-2 pt-2">
              {steps.map((_, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    idx === onboardingIndex ? "w-8 bg-primary" : "w-2 bg-white/10"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="w-full space-y-3 pb-4 max-w-lg mx-auto">
            <Button
              onClick={() => {
                if (onboardingIndex < steps.length - 1) {
                  setOnboardingIndex(prev => prev + 1);
                } else {
                  finishOnboarding();
                }
              }}
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs rounded-xl shadow-xl shadow-primary/20"
            >
              {onboardingIndex === steps.length - 1 
                ? (language === 'pt' ? 'PROSSEGUIR PARA O SITE' : language === 'es' ? 'CONTINUAR AL SITIO' : 'PROCEED TO SITE')
                : (language === 'pt' ? 'PRÓXIMO PASSO DO GUIA' : language === 'es' ? 'SIGUIENTE PASO GUÍA' : 'NEXT GUIDE STEP')}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>

            {onboardingIndex > 0 && (
              <button
                onClick={() => setOnboardingIndex(prev => prev - 1)}
                className="w-full py-2 text-center text-muted-foreground hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> {language === 'pt' ? 'Voltar' : language === 'es' ? 'Volver' : 'Back'}
              </button>
            )}
          </div>
        </div>
      )}

      <div className="w-full bg-amber-500/5 border-b border-white/5 backdrop-blur-2xl sticky top-0 z-50">
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
        
        <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[4/1] overflow-hidden group border-b border-white/5 shadow-2xl">
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

        <div className="max-w-6xl px-6 pt-12 sm:pt-20 pb-16 sm:pb-24 flex flex-col items-center space-y-6 sm:space-y-10 relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="flex flex-col items-center space-y-4 sm:space-y-8">
            <h1 className="text-4xl sm:text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.9] text-gradient uppercase italic">
              {t.hero.title}<br />
              <span className="text-primary">{t.hero.titleAccent}</span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-medium tracking-tight px-4">
              {t.hero.description}
            </p>

            <Button
              onClick={() => {
                setOnboardingIndex(0);
                setShowOnboarding(true);
              }}
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 font-black uppercase text-xs tracking-wider rounded-xl h-11 px-6 active:scale-95 transition-all animate-pulse-glow"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {language === 'pt' ? 'Ver Passo a Passo do Guia' : language === 'es' ? 'Ver Guía Paso a Paso' : 'View Step-by-Step Guide'}
            </Button>
          </div>
        </div>
      </header>

      {/* SEÇÃO DOS MÓDULOS - FOCO PRINCIPAL DO PASSO A PASSO */}
      <section id="modulos-estrategicos" className="w-full max-w-6xl px-4 sm:px-8 py-12 sm:py-24 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="space-y-2 sm:space-y-3 px-2 text-left">
            <div className="flex items-center gap-3 text-primary text-[8px] sm:text-[10px] font-black uppercase tracking-[0.5em]">
              <Command className="w-3.5 h-3.5" />
              Passo 1 Obrigatório // Conteúdo Prático
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">Recuperação Estratégica</h2>
            <p className="text-[10px] sm:text-sm text-muted-foreground font-medium uppercase tracking-widest opacity-60">Leia para entender como criar um ticket de respeito.</p>
          </div>
          <div className="hidden sm:block p-4 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md group hover:border-primary/30 transition-all cursor-crosshair">
            <LayoutGrid className="w-6 h-6 text-primary opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.modules.map((module: any, index: number) => {
            const isLocked = index > 0 && !completedModules.includes(t.modules[index - 1].id);
            const moduleImage = PlaceHolderImages.find(img => img.id === module.id)?.imageUrl;

            return (
              <div key={module.id} className="group/card animate-in fade-in slide-in-from-bottom-12 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
                <div className={cn(
                  "flex flex-col h-full rounded-[2rem] overflow-hidden border transition-all duration-700 relative",
                  isLocked 
                    ? "bg-white/[0.01] border-white/[0.05] opacity-40 grayscale" 
                    : "bg-white/[0.03] border-white/[0.08] hover:border-primary/40 hover:bg-white/[0.06] sm:hover:-translate-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover/card:shadow-primary/10"
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
                    <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
                      <div className="px-3 py-1 sm:px-4 sm:py-1.5 bg-primary/20 backdrop-blur-2xl border border-primary/30 rounded-full text-[8px] sm:text-[10px] font-black text-primary tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                        {module.tag}
                      </div>
                    </div>
                    {isLocked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                          <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white/40" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 sm:p-10 flex flex-col flex-1 gap-5 sm:gap-6 relative z-10 text-left">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tighter group-hover/card:text-primary transition-colors uppercase italic leading-none">{module.title}</h3>
                      <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3 opacity-80">{module.description}</p>
                    </div>

                    <div className="mt-auto pt-4 sm:pt-6 flex flex-col gap-4">
                      {isLocked ? (
                        <div className="flex items-center gap-3 p-4 sm:p-5 bg-white/[0.02] border border-white/5 rounded-xl opacity-60">
                          <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                          <span className="text-[9px] sm:text-[10px] font-black text-muted-foreground tracking-[0.2em] uppercase">{t.ui.locked}</span>
                        </div>
                      ) : (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full h-14 sm:h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-primary/20 group/btn transition-all active:scale-95">
                              {t.ui.accessModule} 
                              <ChevronRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-all" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-card/98 backdrop-blur-3xl border-none w-full h-[100dvh] overflow-y-auto custom-scrollbar p-0 overflow-hidden shadow-none focus:outline-none max-w-none sm:max-w-4xl sm:h-auto sm:max-h-[90vh]">
                            <DialogHeader className="sr-only text-left">
                              <DialogTitle>{module.title}</DialogTitle>
                              <DialogDescription>{module.description}</DialogDescription>
                            </DialogHeader>
                            <div className="h-48 sm:h-64 relative w-full overflow-hidden shrink-0">
                              {moduleImage && <Image src={moduleImage} alt={module.title} fill className="object-cover brightness-[0.4] scale-105" />}
                              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                              <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-12 pr-6 max-w-2xl animate-in slide-in-from-left-8 duration-700 text-left">
                                <span className="text-primary text-[8px] sm:text-[10px] font-black tracking-[0.4em] sm:tracking-[0.6em] uppercase mb-2 sm:mb-4 block">{module.tag}</span>
                                <h3 className="text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-tight sm:leading-none">{module.title}</h3>
                              </div>
                            </div>
                            <div className="p-6 sm:p-10 md:p-14 space-y-8 sm:space-y-12 pb-24 sm:pb-14">
                              <div className="grid gap-3 sm:gap-4">
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
                              <div className="pt-6 sm:pt-8 border-t border-white/5">
                                {!completedModules.includes(module.id) ? (
                                  <Button 
                                    onClick={() => markAsCompleted(module.id)}
                                    className="w-full bg-white/[0.03] hover:bg-primary text-white border border-white/10 hover:border-primary h-16 sm:h-20 rounded-xl font-black text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all active:scale-[0.98] shadow-2xl"
                                  >
                                    {t.ui.completeModule}
                                  </Button>
                                ) : (
                                  <div className="flex items-center justify-center gap-3 sm:gap-4 text-green-500 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] p-6 sm:p-8 bg-green-500/5 rounded-xl border border-green-500/20 shadow-inner">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
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

      <div className="w-full max-w-4xl px-4 sm:px-8 pb-24 sm:pb-40">
        <div className="relative group p-8 sm:p-16 rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-in zoom-in-95 duration-1000">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-all duration-1000" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 space-y-8 sm:space-y-10 text-left">
            <div className="flex items-center gap-4 sm:gap-5 text-primary">
              <div className="p-3 sm:p-4 bg-primary/10 rounded-xl shadow-lg shadow-primary/10">
                <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] italic leading-tight">{t.ui.securityGuidelines}</h3>
            </div>
            
            <div className="grid gap-6 sm:gap-10 font-medium">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 text-white">
                  <div className="w-1.5 h-5 sm:h-6 bg-primary rounded-full" />
                  <span className="text-xl sm:text-2xl font-black tracking-tight uppercase italic">{t.ui.criticalAttention}</span>
                </div>
                <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium tracking-tight px-2">
                  {t.ui.safetyText}
                </p>
                <div className="relative overflow-hidden p-6 sm:p-8 bg-primary/10 border border-primary/20 rounded-xl text-primary font-black text-[10px] sm:text-sm tenderness-relaxed text-center uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-inner">
                  <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-20" />
                  {t.ui.waitDays}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-white/[0.01] border-t border-white/5 py-16 sm:py-24 flex flex-col items-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-primary/5 blur-[100px] rounded-full mask-radial pointer-events-none" />
        
        <div className="max-w-6xl w-full px-6 flex flex-col items-center gap-12 sm:gap-16 relative z-10">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4 sm:gap-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 relative grayscale group hover:grayscale-0 transition-all">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <span className="font-black text-xl sm:text-2xl tracking-tighter uppercase italic">Unban Strategy</span>
              </div>
              <p className="text-[8px] sm:text-[10px] text-muted-foreground uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black opacity-50 leading-relaxed max-w-[250px]">
                Strategic Recovery Protocols // Verified Authority
              </p>
            </div>
            
            <div className="flex gap-8 sm:gap-10 text-muted-foreground">
              <ShieldAlert className="w-6 h-6 sm:w-8 sm:h-8 hover:text-primary hover:scale-125 transition-all cursor-pointer opacity-40 hover:opacity-100" />
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 hover:text-primary hover:scale-125 transition-all cursor-pointer opacity-40 hover:opacity-100" />
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 hover:text-primary hover:scale-125 transition-all cursor-pointer opacity-40 hover:opacity-100" />
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="flex flex-col items-center gap-4 px-4">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 shadow-inner">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
              <span className="text-[8px] sm:text-[10px] font-black text-primary tracking-[0.3em] sm:tracking-[0.5em] uppercase italic">{t.ui.systemActive}</span>
            </div>
            <span className="text-[8px] sm:text-[10px] text-muted-foreground/30 tracking-[0.4em] sm:tracking-[0.8em] font-black uppercase text-center leading-loose">
              © 2024 ZEPHYRUS GLOBAL SYSTEMS // ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </footer>
      
      <SupportWidget lang={language || 'pt'} />
    </main>
  );
}