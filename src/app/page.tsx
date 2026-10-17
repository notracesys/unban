
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShieldAlert, 
  ChevronRight, 
  LayoutGrid, 
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
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { translations, type Language } from '@/lib/translations';
import { SupportWidget } from '@/components/cyber/SupportWidget';
import { RecoveryForm } from '@/components/cyber/RecoveryForm';

const onboardingSteps = {
  pt: [
    {
      title: "1. Preenchimento de Dados Reais",
      description: "Comece fornecendo seu e-mail, Nickname EXATO e ID. Sem esses dados corretos, não conseguimos localizar sua conta nos registros internos.",
      icon: LayoutGrid,
      tag: "DADOS TÉCNICOS",
      targetId: "recovery-tool"
    },
    {
      title: "2. Relato 100% Verdadeiro",
      description: "Diga exatamente como o banimento aconteceu. A equipe do Gaspar analisa a veracidade do seu relato para construir a estratégia de defesa.",
      icon: Sparkles,
      tag: "O RELATO",
      targetId: "recovery-tool"
    },
    {
      title: "3. Envio para Equipe do Gaspar",
      description: "Ao finalizar, seu relatório será criptografado e enviado diretamente para nossos analistas. Aguarde o retorno via e-mail.",
      icon: Zap,
      tag: "ENVIO FINAL",
      targetId: "recovery-tool"
    }
  ],
  en: [
    {
      title: "1. Filling in Real Data",
      description: "Start by providing your email, EXACT Nickname, and ID. Without these correct data, we cannot locate your account in the internal records.",
      icon: LayoutGrid,
      tag: "TECHNICAL DATA",
      targetId: "recovery-tool"
    },
    {
      title: "2. 100% True Story",
      description: "Tell exactly how the ban happened. Gaspar's team analyzes the truth of your story to build the defense strategy.",
      icon: Sparkles,
      tag: "THE STORY",
      targetId: "recovery-tool"
    },
    {
      title: "3. Send to Gaspar's Team",
      description: "Upon completion, your report will be encrypted and sent directly to our analysts. Wait for the return via email.",
      icon: Zap,
      tag: "FINAL SUBMISSION",
      targetId: "recovery-tool"
    }
  ],
  es: [
    {
      title: "1. Llenado de Datos Reales",
      description: "Comience proporcionando su correo electrónico, Nickname EXACTO e ID. Sin estos datos correctos, no podemos localizar su cuenta en los registros internos.",
      icon: LayoutGrid,
      tag: "DATOS TÉCNICOS",
      targetId: "recovery-tool"
    },
    {
      title: "2. Relato 100% Verdadero",
      description: "Diga exactamente cómo sucedió el baneo. El equipo de Gaspar analiza la veracidad de su relato para construir la estrategia de defensa.",
      icon: Sparkles,
      tag: "EL RELATO",
      targetId: "recovery-tool"
    },
    {
      title: "3. Envío para Equipo de Gaspar",
      description: "Al finalizar, su informe será cifrado y enviado directamente a nuestros analistas. Espere el retorno por correo electrónico.",
      icon: Zap,
      tag: "ENVÍO FINAL",
      targetId: "recovery-tool"
    }
  ]
};

export default function Home() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
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
    setShowOnboarding(true);
    setOnboardingIndex(0);
    setTimeout(() => {
      scrollToSection("recovery-tool");
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
    }
  };

  const finishOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('unban_onboarding_completed', 'true');
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
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] flex items-center justify-center relative shadow-[0_0_50px_rgba(236,72,153,0.1)] overflow-hidden backdrop-blur-xl animate-float">
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
      
      {showOnboarding && steps && steps[onboardingIndex] && (
        <div className="fixed bottom-4 left-4 right-4 z-[150] bg-card/95 backdrop-blur-2xl border-2 border-primary/40 rounded-3xl p-5 shadow-[0_20px_50px_rgba(236,72,153,0.3)] animate-in slide-in-from-bottom-8 duration-500">
          <div className="flex items-center justify-between mb-2">
            <span className="px-2.5 py-0.5 bg-primary/20 border border-primary/30 text-primary text-[9px] font-black uppercase tracking-widest rounded-full">
              {steps[onboardingIndex].tag}
            </span>
            <button onClick={finishOnboarding} className="text-muted-foreground hover:text-white p-1">
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
                <div key={idx} className={cn("h-1 rounded-full transition-all", idx === onboardingIndex ? "w-4 bg-primary" : "w-1.5 bg-white/10")} />
              ))}
            </div>
            <Button size="sm" onClick={nextStep} className="bg-primary hover:bg-primary/90 text-white font-black text-[10px] uppercase tracking-wider rounded-xl h-9 px-4 shrink-0">
              {onboardingIndex === steps.length - 1 ? "Entendido, Começar" : "Próximo Passo"}
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </Button>
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
            <AccordionContent className="pb-6 sm:pb-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative group overflow-hidden p-6 sm:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col gap-4 hover:bg-amber-500/10 transition-all text-left">
                  <h4 className="text-amber-500 font-black text-[10px] uppercase tracking-[0.3em]">{translations[language].orderBump.title}</h4>
                  <p className="text-[10px] text-amber-500/70 font-medium">{translations[language].orderBump.description}</p>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-widest rounded-xl h-12 text-[10px]">
                    <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                      <Zap className="w-4 h-4 mr-2" /> {translations[language].orderBump.button}
                    </a>
                  </Button>
                </div>
                <div className="relative group overflow-hidden p-6 sm:p-8 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex flex-col gap-4 hover:bg-amber-500/10 transition-all text-left">
                  <h4 className="text-amber-500 font-black text-[10px] uppercase tracking-[0.3em]">{translations[language].bypass.title}</h4>
                  <p className="text-[10px] text-amber-500/70 font-medium">{translations[language].bypass.description}</p>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-black uppercase tracking-widest rounded-xl h-12 text-[10px]">
                    <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">
                      <Sparkles className="w-4 h-4 mr-2" /> {translations[language].bypass.button}
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
        
        <div className="w-full relative h-[180px] sm:h-[260px] overflow-hidden group border-b border-white/5 shadow-2xl">
          <Image 
            src="/banner.png" 
            alt="Strategic Banner" 
            fill 
            className="object-cover transition-transform duration-[3s] group-hover:scale-105 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="max-w-6xl px-6 pt-10 pb-10 flex flex-col items-center space-y-6 relative z-10">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl sm:text-7xl font-black tracking-tighter text-white leading-[0.9] uppercase italic">
              {t.hero.title}<br />
              <span className="text-primary">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-xl font-medium tracking-tight px-4">
              {t.hero.description}
            </p>
          </div>
        </div>
      </header>

      <section id="recovery-tool" className="w-full max-w-6xl px-4 sm:px-6 py-10 relative scroll-mt-20">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <div className="flex items-center gap-3 text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-4">
            <Command className="w-3.5 h-3.5" />
            Ferramenta Operacional // Gaspar Team
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase italic mb-4">
            Gerador de Relatórios
          </h2>
          {showOnboarding && onboardingIndex === 0 && (
            <div className="animate-bounce mt-4">
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>
          )}
        </div>

        <RecoveryForm lang={language} />
      </section>

      <div className="w-full max-w-4xl px-4 sm:px-6 pb-20">
        <div className="relative group p-6 sm:p-12 rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />
          
          <div className="relative z-10 space-y-6 text-left">
            <div className="flex items-center gap-3 text-primary">
              <div className="p-2.5 bg-primary/10 rounded-xl">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider italic">{t.ui.securityGuidelines}</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="w-1.5 h-5 bg-primary rounded-full" />
                <span className="text-lg font-black tracking-tight uppercase italic">{t.ui.criticalAttention}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                {t.ui.safetyText}
              </p>
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary font-black text-[10px] sm:text-xs text-center uppercase tracking-wider">
                {t.ui.waitDays}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-white/[0.01] border-t border-white/5 py-12 flex flex-col items-center">
        <div className="max-w-6xl w-full px-6 flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative grayscale">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase italic">Unban Strategy</span>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-primary tracking-widest uppercase italic">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
            {t.ui.systemActive}
          </div>
          <span className="text-[8px] text-muted-foreground/30 tracking-widest font-black uppercase">
            © 2024 ZEPHYRUS GLOBAL SYSTEMS // ALL RIGHTS RESERVED
          </span>
        </div>
      </footer>
      
      <SupportWidget lang={language || 'pt'} />
    </main>
  );
}
