'use client';

import { useState } from 'react';
import { GlitchText } from '@/components/cyber/GlitchText';
import { DecisionTree } from '@/components/cyber/DecisionTree';
import { TicketAdvisor } from '@/components/cyber/TicketAdvisor';
import { DelayTimer } from '@/components/cyber/DelayTimer';
import { ResponseDecoder } from '@/components/cyber/ResponseDecoder';
import { AttemptLog } from '@/components/cyber/AttemptLog';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShieldAlert, Lock, Info, ChevronRight, Briefcase } from 'lucide-react';

export default function Home() {
  const [diagnosis, setDiagnosis] = useState<string | undefined>();

  return (
    <main className="min-h-screen pb-20 pt-10 px-4 md:px-8 max-w-6xl mx-auto flex flex-col gap-12">
      {/* Header Briefing */}
      <header className="flex flex-col items-center text-center space-y-4 pt-10">
        <div className="relative mb-4">
          <div className="w-16 h-16 border-2 border-primary rotate-45 flex items-center justify-center animate-pulse">
            <ShieldAlert className="w-8 h-8 text-primary -rotate-45" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-primary/20 animate-spin" style={{ animationDuration: '10s' }} />
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase">
          Shadow<span className="text-primary">Protocol</span>
        </h1>
        <p className="text-xs md:text-sm font-code text-muted-foreground tracking-[0.2em] uppercase max-w-2xl">
          High-Security Engagement Method for Critical Account Restoration
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Briefing Content */}
        <section className="lg:col-span-4 space-y-8 order-2 lg:order-1">
          <div className="p-6 bg-card/50 border border-primary/20 rounded relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <Lock className="w-4 h-4" />
            </div>
            <h2 className="font-headline text-lg uppercase mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Executive Briefing
            </h2>
            <div className="font-body text-xs text-muted-foreground leading-relaxed space-y-4">
              <p>
                If you are reading this, your account has been neutralized. Your objective is simple: recovery.
              </p>
              <p>
                This method was forged for those who refuse to accept silence. It is not for the curious, but for the strategic.
              </p>
              <p>
                Most fail by engaging support emotionaly. Using the wrong tone triggers automated filtration systems instantly.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary/60 border-b border-primary/20 pb-2">Mission Objectives</h3>
            <ul className="space-y-3">
              {[
                'Evade automated filter triggers',
                'Synthesize human-readable requests',
                'Analyze platform response patterns',
                'Maintain operational silence'
              ].map((obj, i) => (
                <li key={i} className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-tight text-muted-foreground">
                  <ChevronRight className="w-3 h-3 text-primary" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <AttemptLog />
        </section>

        {/* Center/Right: Tools Dashboard */}
        <section className="lg:col-span-8 space-y-8 order-1 lg:order-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DecisionTree onDiagnosed={setDiagnosis} />
            <DelayTimer />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <TicketAdvisor prefilledType={diagnosis} />
            </div>
            <div className="md:col-span-4">
              <ResponseDecoder />
            </div>
          </div>

          {/* Strategic Context */}
          <Card className="bg-card border-muted/10 relative">
            <CardHeader>
              <CardTitle className="font-headline text-sm uppercase tracking-widest flex items-center gap-2">
                <Info className="w-4 h-4 text-muted-foreground" />
                Structural Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body text-[10px] text-muted-foreground uppercase leading-tight">
              <div className="space-y-2 p-3 bg-muted/5 rounded">
                <span className="text-primary font-bold">Protocol A-1: Category Selection</span>
                <p>Never select "Detected Cheating". Always use "Account Recovery (Generic)". It avoids immediate closed-case scripting.</p>
              </div>
              <div className="space-y-2 p-3 bg-muted/5 rounded">
                <span className="text-accent font-bold">Protocol B-7: Subject Lines</span>
                <p>Use functional subjects like "Access Irregularity Diagnosis" instead of "Unban Me". The goal is to appear as a technical anomaly.</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer Branding */}
      <footer className="mt-auto pt-10 flex flex-col items-center justify-center space-y-4 opacity-50">
        <Separator className="bg-primary/20 w-32" />
        <div className="flex gap-4 text-[10px] font-code tracking-widest">
          <span>SHADOWPROTOCOL_V.4.2</span>
          <span>//</span>
          <span>NO_GUARANTEES_ONLY_STRATEGY</span>
        </div>
      </footer>
    </main>
  );
}
