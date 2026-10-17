
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShieldAlert, 
  ChevronRight, 
  Sparkles,
  Activity,
  ArrowDown,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { translations, type Language } from '@/lib/translations';
import { SupportWidget } from '@/components/cyber/SupportWidget';
import { RecoveryForm } from '@/components/cyber/RecoveryForm';

export default function Home() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [hasChecked, setHasChecked] = useState(false);

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
      
      {/* Header Imersivo */}
      <header className="w-full flex flex-col items-center text-center relative pt-16 pb-12">
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
          <div className="animate-bounce pt-8 flex flex-col items-center gap-2">
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Preencha Abaixo</span>
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </header>

      {/* Guia de Preenchimento Rápido */}
      <section className="w-full max-w-2xl px-6 mb-8">
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3 text-primary">
            <Info className="w-5 h-5" />
            <h3 className="text-sm font-black uppercase tracking-wider italic">Guia de Preenchimento</h3>
          </div>
          <ul className="space-y-3">
            {[
              "1. Insira um e-mail válido para receber a resposta.",
              "2. Nickname EXATO (maiúsculas, símbolos e espaços contam).",
              "3. ID Numérico da conta conforme consta no perfil.",
              "4. Relato REAL: Diga exatamente o que aconteceu, 100% verídico."
            ].map((step, idx) => (
              <li key={idx} className="text-[11px] text-muted-foreground font-medium flex gap-3">
                <span className="text-primary font-black">{idx + 1}.</span>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formulário Único Vertical */}
      <section className="w-full max-w-3xl px-4 pb-20 relative z-10">
        <RecoveryForm lang={language} />
      </section>

      {/* Footer / Security */}
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
