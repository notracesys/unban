
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  User, 
  Hash, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { translations, type Language } from '@/lib/translations';
import { cn } from '@/lib/utils';

interface RecoveryFormProps {
  lang: Language;
}

export function RecoveryForm({ lang }: RecoveryFormProps) {
  const t = translations[lang].form;
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    id: '',
    reason: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="w-full py-16 px-6 text-center animate-in zoom-in-95 duration-500 bg-white/[0.02] border border-white/10 rounded-[2.5rem] shadow-2xl">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center text-green-500 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
            <CheckCircle2 className="w-10 h-10" />
          </div>
        </div>
        <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4">
          {t.successTitle}
        </h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-xs mx-auto leading-relaxed">
          {t.successDesc}
        </p>
        <Button 
          onClick={() => window.location.reload()}
          className="h-14 px-10 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all"
        >
          {t.successAction}
        </Button>
      </div>
    );
  }

  return (
    <div className="relative glass-card rounded-[2.5rem] overflow-hidden border border-white/10 p-6 sm:p-12 shadow-2xl">
      <div className="flex items-center justify-between mb-10">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div 
              key={s} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                s === step ? "w-8 bg-primary shadow-[0_0_15px_rgba(236,72,153,0.5)]" : 
                s < step ? "w-4 bg-green-500/50" : "w-4 bg-white/10"
              )} 
            />
          ))}
        </div>
        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
          Passo 0{step}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {step === 1 && (
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" /> {t.step1}
              </h3>
              <p className="text-[10px] text-muted-foreground font-medium">{t.step1Desc}</p>
            </div>
            <Input 
              required
              type="email"
              placeholder="exemplo@email.com"
              className="h-16 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-2xl px-6 text-base transition-all"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-3">
                <User className="w-5 h-5 text-primary" /> {t.step2}
              </h3>
              <p className="text-[10px] text-muted-foreground font-medium">{t.step2Desc}</p>
            </div>
            <Input 
              required
              placeholder="Nickname Exato"
              className="h-16 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-2xl px-6 text-base transition-all font-mono"
              value={formData.nickname}
              onChange={e => setFormData({...formData, nickname: e.target.value})}
            />
            <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[9px] text-amber-500 uppercase font-black tracking-wider leading-tight text-left">
                Atenção: Caracteres especiais importam.
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-3">
                <Hash className="w-5 h-5 text-primary" /> {t.step3}
              </h3>
              <p className="text-[10px] text-muted-foreground font-medium">{t.step3Desc}</p>
            </div>
            <Input 
              required
              placeholder="ID da Conta"
              className="h-16 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-2xl px-6 text-base transition-all font-mono"
              value={formData.id}
              onChange={e => setFormData({...formData, id: e.target.value})}
            />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-500">
            <div className="space-y-2 text-left">
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" /> {t.step4}
              </h3>
              <p className="text-[10px] text-muted-foreground font-medium">{t.step4Desc}</p>
            </div>
            <Textarea 
              required
              placeholder="Conte exatamente como foi banido, 100% real..."
              className="min-h-[180px] bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-2xl p-6 text-sm leading-relaxed transition-all"
              value={formData.reason}
              onChange={e => setFormData({...formData, reason: e.target.value})}
            />
            <div className="flex items-start gap-3 p-4 bg-primary/10 border border-primary/20 rounded-xl text-left">
              <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-[9px] text-primary uppercase font-black tracking-wider leading-tight">
                Seu relato será enviado diretamente para os analistas do Gaspar.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-white/5 flex gap-3">
          {step > 1 && (
            <Button 
              type="button"
              variant="outline"
              onClick={prevStep}
              className="h-14 px-6 border-white/10 hover:bg-white/5 text-white font-black uppercase tracking-widest rounded-2xl flex-1 transition-all"
            >
              Voltar
            </Button>
          )}
          
          {step < 4 ? (
            <Button 
              type="button"
              onClick={nextStep}
              disabled={
                (step === 1 && !formData.email) || 
                (step === 2 && !formData.nickname) || 
                (step === 3 && !formData.id)
              }
              className="h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-2xl flex-[2] transition-all flex items-center justify-center gap-2 group"
            >
              Próximo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          ) : (
            <Button 
              type="submit"
              disabled={loading || !formData.reason}
              className="h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-2xl flex-[2] transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <> <Loader2 className="w-5 h-5 animate-spin" /> {t.submitting} </>
              ) : (
                <> <Send className="w-4 h-4" /> {t.submitButton} </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
