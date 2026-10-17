
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShieldAlert, 
  ChevronRight, 
  LayoutGrid, 
  Zap, 
  Sparkles,
  Command,
  Activity,
  X,
  ArrowDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { translations, type Language } from '@/lib/translations';
import { SupportWidget } from '@/components/cyber/SupportWidget';
import { RecoveryForm } from '@/components/cyber/RecoveryForm';

const onboardingSteps = {
  pt: [
    {
      title: "1. Identificação Técnica",
      description: "Forneça seu e-mail e o Nickname EXATO da conta. Espaços e símbolos importam.",
      icon: LayoutGrid,
      tag: "DADOS DA CONTA",
      targetId: "recovery-form-section"
    },
    {
      title: "2. O Identificador Único",
      description: "O ID da conta é essencial para localizarmos seu registro nos servidores.",
      icon: Sparkles,
      tag: "O ID",
      targetId: "recovery-form-section"
    },
    {
      title: "3. O Relato Real",
      description: "Diga exatamente como o banimento aconteceu. A verdade é a base da sua defesa.",
      icon: Zap,
      tag: "RELATO FINAL",
      targetId: "recovery-form-section"
    }
  ],
  en: [
    {
      title: "1. Technical Identification",
      description: "Provide your email and the EXACT Nickname of the account. Spaces and symbols matter.",
      icon: LayoutGrid,
      tag: "ACCOUNT DATA",
      targetId: "recovery-form-section"
    },
    {
      title: "2. The Unique Identifier",
      description: "The account ID is essential to locate your record on the servers.",
      icon: Sparkles,
      tag: "THE ID",
      targetId: "recovery-form-section"
    },
    {
      title: "3. The Real Story",
      description: "Tell exactly how the ban happened. The truth is the basis of your defense.",
      icon: Zap,
      tag: "FINAL STORY",
      targetId: "recovery-form-section"
    }
  ],
  es: [
    {
      title: "1. Identificación Técnica",
      description: "Proporcione su correo electrónico y el Nickname EXACTO de la cuenta. Los espacios y símbolos importan.",
      icon: LayoutGrid,
      tag: "DATOS DE LA CUENTA",
      targetId: "recovery-form-section"
    },
    {
      title: "2. El Identificador Único",
      description: "El ID de la cuenta es esencial para localizar su registro en los servidores.",
      icon: Sparkles,
      tag: "EL ID",
      targetId: "recovery-form-section"
    },
    {
      title: "3. El Relato Real",
      description: "Diga exactamente cómo sucedió el baneo. La verdad es la base de su defensa.",
      icon: Zap,
      tag: "RELATO FINAL",
      targetId: "recovery-form-section"
    }
  ]
};

export default function Home() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingIndex, setOnboardingIndex] = useState(0);

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
  };

  const nextStep = () => {
    if (onboardingIndex < steps.length - 1) {
      setOnboardingIndex(onboardingIndex + 1);
    } else {
      setShowOnboarding(false);
    }
  };

  const finishOnboarding = () => {
    setShowOnboarding(false);
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
            <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center relative shadow-[0_0_50px_rgba(236,72,153,0.1)] overflow-hidden backdrop-blur-xl animate-float">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                fill
                className="object-cover p-4"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 px-4">
            <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic">
              Selecione o Idioma
            </h2>
            <div className="flex items-center justify-center gap-3 text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] opacity-60">
              <Activity className="w-3 h-3 text-primary" />
              INICIALIZAÇÃO DE PROTOCOLO
            </div>
          </div>

          <div className="grid gap-4 pt-4 px-4">
            {[
              { id: 'pt', label: 'Português (BR)', flag: '🇧🇷' },
              { id: 'en', label: 'English (US)', flag: '🇺🇸' },
              { id: 'es', label: 'Español (ES)', flag: '🇪🇸' }
            ].map((lang) => (
              <Button 
                key={lang.id}
                onClick={() => selectLanguage(lang.id as Language)} 
                className="h-16 w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/50 text-white font-bold rounded-2xl transition-all flex items-center justify-between px-8 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="tracking-widest uppercase text-xs">{lang.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
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
            </Button>
          </div>
        </div>
      )}

      <header className="w-full flex flex-col items-center text-center relative pt-16 pb-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-50" />
        
        <div className="relative z-10 px-6 space-y-6">
          <div className="flex justify-center mb-6">
             <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative shadow-2xl overflow-hidden backdrop-blur-xl">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                fill
                className="object-cover p-3"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white uppercase italic leading-[0.9]">
            {t.hero.title}<br />
            <span className="text-primary">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium">
            {t.hero.description}
          </p>
          {showOnboarding && <div className="animate-bounce pt-4 flex justify-center"><ArrowDown className="w-6 h-6 text-primary" /></div>}
        </div>
      </header>

      <section id="recovery-form-section" className="w-full max-w-3xl px-4 pb-20 relative z-10">
        <RecoveryForm lang={language} />
      </section>

      <div className="w-full max-w-xl px-6 pb-20 text-center">
        <div className="relative group p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-center gap-3 text-primary">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="text-lg font-black uppercase tracking-wider italic">{t.ui.securityGuidelines}</h3>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">
              {t.ui.safetyText}
            </p>
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-primary font-black text-[10px] uppercase tracking-wider">
              {t.ui.waitDays}
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-white/5 py-12 flex flex-col items-center opacity-50">
        <span className="text-[8px] text-muted-foreground tracking-widest font-black uppercase">
          © 2024 ZEPHYRUS GLOBAL SYSTEMS // ALL RIGHTS RESERVED
        </span>
      </footer>
      
      <SupportWidget lang={language} />
    </main>
  );
}
