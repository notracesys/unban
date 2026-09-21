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
  BookOpen,
  ArrowRight,
  Info
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
            <h4 key={index} className="text-white font-bold text-lg mt-8 mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full" />
              {trimmedLine}
            </h4>
          );
        }

        if (isListItem) {
          return (
            <div key={index} className="flex items-start gap-3 py-1 group bg-white/5 p-4 rounded-lg border border-white/5">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {trimmedLine}
              </p>
            </div>
          );
        }

        return (
          <p key={index} className="text-sm text-muted-foreground/80 leading-relaxed pl-3">
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
            "flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer border mb-2 group",
            isViewed 
              ? "bg-green-500/5 border-green-500/20" 
              : "bg-white/[0.02] border-white/5 hover:border-primary/50 hover:bg-white/[0.04]"
          )}
        >
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
              isViewed ? "bg-green-500 text-white" : "bg-white/10 text-muted-foreground group-hover:bg-primary group-hover:text-white"
            )}>
              <PlayCircle className="w-4 h-4" />
            </div>
            <span className={cn(
              "text-sm font-medium transition-colors",
              isViewed ? "text-green-500" : "text-muted-foreground group-hover:text-white"
            )}>
              {lesson.title}
            </span>
          </div>
          <ChevronRight className={cn("w-4 h-4 transition-all opacity-0 group-hover:opacity-100", isViewed ? "text-green-500 opacity-100" : "text-primary")} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-card border-white/10 w-[95vw] md:max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar p-6 md:p-10 rounded-2xl shadow-2xl">
        <DialogHeader className="pb-6 mb-6 border-b border-white/5">
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-2">
            <BookOpen className="w-4 h-4" />
            {t.ui.dataStream}
          </div>
          <DialogTitle className="text-2xl md:text-4xl font-bold text-white tracking-tight">
            {lesson.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {lesson.content && (
            <div className="max-w-none">
              <FormattedLessonContent content={lesson.content} />
            </div>
          )}
          
          {lesson.template && (
            <div className="space-y-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  <Terminal className="w-4 h-4" />
                  {t.ui.copyTemplate}
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => copyToClipboard(lesson.template)}
                  className="h-8 text-xs font-bold hover:bg-primary hover:text-white rounded-full px-4"
                >
                  <Copy className="w-3 h-3 mr-2" /> {t.ui.copyTemplate}
                </Button>
              </div>
              <div className="p-5 bg-black/50 border border-white/5 rounded-xl font-mono text-sm leading-relaxed text-muted-foreground italic">
                "{lesson.template}"
              </div>
            </div>
          )}

          {lesson.id === '2.1' && (
            <div className="pt-6">
              <Button 
                asChild 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-xl shadow-lg shadow-primary/20"
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
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-md w-full space-y-10 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center relative shadow-2xl overflow-hidden backdrop-blur-xl animate-float">
              <Image 
                src="/logo.png" 
                alt="Product Logo" 
                fill
                className="object-cover p-2"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              {translations.pt.selectLanguage}
            </h2>
            <p className="text-sm text-muted-foreground font-medium opacity-60">
              {translations.pt.protocolInitialization}
            </p>
          </div>

          <div className="grid gap-3 pt-4">
            {[
              { id: 'pt', label: 'Português (BR)', flag: '🇧🇷' },
              { id: 'en', label: 'English (US)', flag: '🇺🇸' },
              { id: 'es', label: 'Español (ES)', flag: '🇪🇸' }
            ].map((lang) => (
              <Button 
                key={lang.id}
                onClick={() => selectLanguage(lang.id as Language)} 
                className="h-16 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-2xl transition-all flex items-center justify-between px-6 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{lang.flag}</span>
                  <span>{lang.label}</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center">
      {/* Premium Support - Clean Design */}
      <div className="w-full bg-amber-500/5 border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="premium-support" className="border-none">
            <AccordionTrigger className="px-6 md:px-8 py-3 hover:no-underline hover:bg-white/5 transition-colors">
              <div className="max-w-6xl mx-auto w-full flex items-center justify-center gap-3">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500">
                  {t.ui.premiumSupportTrigger}
                </span>
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col gap-4">
                  <div>
                    <h4 className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-1">{t.orderBump.title}</h4>
                    <p className="text-xs text-amber-500/70 leading-relaxed">{t.orderBump.description}</p>
                  </div>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-xl h-11">
                    <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">{t.orderBump.button}</a>
                  </Button>
                </div>
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col gap-4">
                  <div>
                    <h4 className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-1">{t.bypass.title}</h4>
                    <p className="text-xs text-amber-500/70 leading-relaxed">{t.bypass.description}</p>
                  </div>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-xl h-11">
                    <a href="https://t.me/unbanstrategy" target="_blank" rel="noopener noreferrer">{t.bypass.button}</a>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Hero Section - Full Width Banner */}
      <header className="w-full flex flex-col items-center text-center">
        {/* Main Banner - Preenchendo as laterais */}
        <div className="w-full relative aspect-[21/9] md:aspect-[4/1] overflow-hidden shadow-2xl group border-b border-white/10">
          <Image 
            src="/banner.png" 
            alt="Strategic Banner" 
            fill 
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
            data-ai-hint="tech banner"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="max-w-6xl px-6 md:px-8 pt-12 pb-16 flex flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-3 p-2 px-4 bg-primary/10 border border-primary/20 rounded-full">
              <Image src="/logo.png" alt="Logo" width={20} height={20} className="object-contain" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Unban Strategy V2.0</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              {t.hero.title} <span className="text-primary">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed font-medium">
              {t.hero.description}
            </p>
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => {
                  localStorage.removeItem('unban_strategy_lang');
                  window.location.reload();
                }}
                className="h-12 px-8 rounded-full border-white/10 hover:bg-white/5 font-semibold text-sm"
              >
                <Globe className="w-4 h-4 mr-2" /> Language
              </Button>
              <div className="flex items-center gap-2 px-6 h-12 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                System Secure
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modules Grid - Dashboard Style */}
      <section className="w-full max-w-6xl px-6 md:px-8 py-20 border-t border-white/5">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-white tracking-tight">Recuperação Estratégica</h2>
            <p className="text-sm text-muted-foreground font-medium">Siga a trilha de conhecimento para o sucesso.</p>
          </div>
          <LayoutGrid className="w-6 h-6 text-primary opacity-50" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.modules.map((module: any, index: number) => {
            const isLocked = index > 0 && !completedModules.includes(t.modules[index - 1].id);
            const moduleImage = PlaceHolderImages.find(img => img.id === module.id)?.imageUrl;

            return (
              <div key={module.id} className="relative group">
                <div className={cn(
                  "flex flex-col h-full rounded-3xl overflow-hidden border transition-all duration-500",
                  isLocked 
                    ? "bg-white/[0.01] border-white/[0.05] opacity-50" 
                    : "bg-white/[0.03] border-white/[0.05] hover:border-primary/30 hover:bg-white/[0.05] hover:-translate-y-2 shadow-2xl shadow-black/40"
                )}>
                  {/* Aspect Ratio updated to 4:5 as requested */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    {moduleImage && (
                      <Image 
                        src={moduleImage} 
                        alt={module.title} 
                        fill 
                        className={cn(
                          "object-cover transition-all duration-700",
                          !isLocked && "group-hover:scale-110 brightness-75 group-hover:brightness-90"
                        )} 
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">
                        {module.tag}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1 gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">{module.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{module.description}</p>
                    </div>

                    <div className="mt-auto pt-4 flex flex-col gap-4">
                      {isLocked ? (
                        <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl">
                          <Lock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs font-bold text-muted-foreground tracking-wide">{t.ui.locked}</span>
                        </div>
                      ) : (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl group/btn">
                              {t.ui.accessModule} 
                              <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-all" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-card border-white/10 w-[95vw] md:max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar p-0 rounded-3xl overflow-hidden">
                            <div className="h-48 relative w-full">
                              {moduleImage && <Image src={moduleImage} alt={module.title} fill className="object-cover brightness-50" />}
                              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                              <div className="absolute bottom-6 left-8">
                                <span className="text-primary text-xs font-black tracking-widest uppercase mb-2 block">{module.tag}</span>
                                <h3 className="text-3xl font-bold text-white tracking-tight">{module.title}</h3>
                              </div>
                            </div>
                            <div className="p-8 space-y-8">
                              <div className="space-y-3">
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
                                    className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 h-16 rounded-2xl font-bold text-sm transition-all"
                                  >
                                    {t.ui.completeModule}
                                  </Button>
                                ) : (
                                  <div className="flex items-center justify-center gap-3 text-green-500 font-bold text-sm p-5 bg-green-500/5 rounded-2xl border border-green-500/20">
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

      {/* Security Info Card - Modernized */}
      <div className="w-full max-w-4xl px-6 md:px-8 pb-32">
        <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
          <div className="flex items-center gap-4 text-primary">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest">{t.ui.securityGuidelines}</h3>
          </div>
          <div className="grid gap-8 font-medium">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <Info className="w-5 h-5 text-primary" />
                <span className="text-lg font-bold">{t.ui.criticalAttention}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t.ui.safetyText}</p>
              <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl text-primary font-bold text-sm leading-relaxed text-center">
                {t.ui.waitDays}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="w-full bg-white/[0.02] border-t border-white/5 py-20 flex flex-col items-center">
        <div className="max-w-6xl w-full px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image src="/logo.png" alt="Logo" width={32} height={32} />
              <span className="font-bold text-xl tracking-tight">Unban Strategy</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs mx-auto md:mx-0">
              Método estratégico para análise e recuperação de contas baseado em protocolos oficiais.
            </p>
          </div>
          <div className="flex justify-center gap-8 text-muted-foreground">
            <ShieldAlert className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <Globe className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
            <Zap className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
          </div>
          <div className="text-center md:text-right space-y-2">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase block">{t.ui.systemActive}</span>
            <span className="text-[10px] text-muted-foreground/50 tracking-widest uppercase block">© 2024 ZEPHYRUS GLOBAL SYSTEMS</span>
          </div>
        </div>
      </footer>
      
      <SupportWidget lang={language} />
    </main>
  );
}
