'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShieldAlert, 
  ChevronRight, 
  Activity,
  ArrowDown,
  Info,
  Lock
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
      <div className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center p-6 overflow-hidden cyber-grid">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-md w-full space-y-12 text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center relative blue-glow overflow-hidden backdrop-blur-xl animate-float">
              <Image 
                src="/gaspar.png" 
                alt="Gaspar Logo" 
                fill
                className="object-cover p-4"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 px-4">
            <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic text-glow">
              Selecione o Idioma
            </h2>
            <div className="flex items-center justify-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.5em] opacity-80">
              <Activity className="w-3 h-3" />
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
                <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all text-primary" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center selection:bg-primary/30 overflow-x-hidden cyber-grid">
      <div className="scanline" />
      
      {/* Header Imersivo */}
      <header className="w-full flex flex-col items-center text-center relative pt-20 pb-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-60" />
        
        <div className="relative z-10 px-6 space-y-8">
          <div className="flex justify-center mb-8">
             <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center relative blue-glow overflow-hidden backdrop-blur-xl animate-float">
              <Image 
                src="/gaspar.png" 
                alt="Gaspar Logo" 
                fill
                className="object-cover p-4"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.8] text-glow">
              {t.hero.title}<br />
              <span className="text-primary">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium opacity-80">
              {t.hero.description}
            </p>
          </div>
          
          <div className="pt-8 flex flex-col items-center gap-3">
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full flex items-center gap-2">
              <Lock className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Acesso Seguro Criptografado</span>
            </div>
            <ArrowDown className="w-6 h-6 text-primary animate-bounce mt-4" />
          </div>
        </div>
      </header>

      {/* Guia de Preenchimento Rápido */}
      <section className="w-full max-w-2xl px-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="glass-card rounded-3xl p-8 space-y-6 border-white/5">
          <div className="flex items-center gap-3 text-primary">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Info className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black uppercase tracking-wider italic">Protocolo de Preenchimento</h3>
          </div>
          <div className="grid gap-4">
            {[
              "1. Insira um e-mail válido para receber a resposta.",
              "2. Nickname EXATO da conta conforme o jogo.",
              "3. ID Numérico da conta conforme consta no perfil.",
              "4. Relato REAL: Diga exatamente o que aconteceu, sem omissões."
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 items-start">
                <span className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-black text-xs shrink-0">{idx + 1}</span>
                <p className="text-xs text-muted-foreground font-medium leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário Único Vertical */}
      <section className="w-full max-w-4xl px-4 pb-24 relative z-10">
        <RecoveryForm lang={language} />
      </section>

      {/* Footer / Security */}
      <div className="w-full max-w-2xl px-6 pb-24 text-center">
        <div className="relative group p-10 rounded-[2.5rem] glass-card border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-center gap-3 text-primary">
              <ShieldAlert className="w-8 h-8" />
              <h3 className="text-xl font-black uppercase tracking-wider italic">{t.ui.securityGuidelines}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed font-medium max-w-md mx-auto">
              {t.ui.safetyText}
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-2xl text-primary font-black text-xs uppercase tracking-[0.2em] blue-glow">
              <Activity className="w-4 h-4" />
              {t.ui.waitDays}
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-white/5 py-16 flex flex-col items-center opacity-30">
        <span className="text-[10px] text-muted-foreground tracking-[0.5em] font-black uppercase px-6 text-center">
          © 2024 ZEPHYRUS GLOBAL SYSTEMS // SECURED PROTOCOL
        </span>
      </footer>
      
      <SupportWidget lang={language} />
    </main>
  );
}
