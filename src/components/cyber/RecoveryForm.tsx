
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
  Sparkles
} from 'lucide-react';
import { translations, type Language } from '@/lib/translations';
import { cn } from '@/lib/utils';

interface RecoveryFormProps {
  lang: Language;
}

export function RecoveryForm({ lang }: RecoveryFormProps) {
  const t = translations[lang].form;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    id: '',
    reason: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de processamento
    await new Promise(resolve => setTimeout(resolve, 3000));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="w-full py-16 px-6 text-center animate-in zoom-in-95 duration-500 bg-white/[0.02] border border-white/10 rounded-[2.5rem] shadow-2xl">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary shadow-[0_0_40px_rgba(236,72,153,0.2)]">
            <CheckCircle2 className="w-10 h-10" />
          </div>
        </div>
        <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4 text-gradient">
          {t.successTitle}
        </h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-xs mx-auto leading-relaxed font-medium">
          Seu relatório já foi enviado para a equipe do Gaspar. Aguarde o retorno via e-mail.
        </p>
        <Button 
          onClick={() => window.location.reload()}
          className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-2xl transition-all shadow-lg shadow-primary/25"
        >
          {t.successAction}
        </Button>
      </div>
    );
  }

  return (
    <div className="relative glass-card rounded-[2.5rem] overflow-hidden border border-white/10 p-6 sm:p-12 shadow-2xl">
      <div className="mb-10 text-center">
        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
          Formulário de Auditoria Técnica
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        
        {/* Campo 1: Email */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <div className="space-y-1 text-left">
            <h3 className="text-sm font-black text-white uppercase italic tracking-tight flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" /> {t.step1}
            </h3>
            <p className="text-[10px] text-muted-foreground font-medium">{t.step1Desc}</p>
          </div>
          <Input 
            required
            type="email"
            placeholder="Seu melhor e-mail..."
            className="h-14 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-xl px-6 text-sm transition-all"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Campo 2: Nickname */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="space-y-1 text-left">
            <h3 className="text-sm font-black text-white uppercase italic tracking-tight flex items-center gap-3">
              <User className="w-4 h-4 text-primary" /> {t.step2}
            </h3>
            <p className="text-[10px] text-muted-foreground font-medium">{t.step2Desc}</p>
          </div>
          <Input 
            required
            placeholder="Nickname EXATO da conta..."
            className="h-14 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-xl px-6 text-sm transition-all font-mono"
            value={formData.nickname}
            onChange={e => setFormData({...formData, nickname: e.target.value})}
          />
          <div className="flex items-start gap-3 p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg">
            <AlertCircle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-[9px] text-amber-500 uppercase font-black tracking-wider leading-tight text-left">
              Caracteres especiais e espaços importam.
            </p>
          </div>
        </div>

        {/* Campo 3: ID */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="space-y-1 text-left">
            <h3 className="text-sm font-black text-white uppercase italic tracking-tight flex items-center gap-3">
              <Hash className="w-4 h-4 text-primary" /> {t.step3}
            </h3>
            <p className="text-[10px] text-muted-foreground font-medium">{t.step3Desc}</p>
          </div>
          <Input 
            required
            placeholder="ID Numérico da Conta..."
            className="h-14 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-xl px-6 text-sm transition-all font-mono"
            value={formData.id}
            onChange={e => setFormData({...formData, id: e.target.value})}
          />
        </div>

        {/* Campo 4: Relato Real */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <div className="space-y-1 text-left">
            <h3 className="text-sm font-black text-white uppercase italic tracking-tight flex items-center gap-3">
              <FileText className="w-4 h-4 text-primary" /> {t.step4}
            </h3>
            <p className="text-[10px] text-muted-foreground font-medium">{t.step4Desc}</p>
          </div>
          <Textarea 
            required
            placeholder="Conte exatamente como foi banido, 100% real. Não omita nada..."
            className="min-h-[160px] bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-xl p-6 text-xs leading-relaxed transition-all"
            value={formData.reason}
            onChange={e => setFormData({...formData, reason: e.target.value})}
          />
          <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/10 rounded-xl text-left">
            <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-[9px] text-primary uppercase font-black tracking-wider leading-tight">
              Este relato será a base da análise humana conduzida pela equipe técnica.
            </p>
          </div>
        </div>

        {/* Botão de Envio (Rosa) */}
        <div className="pt-8 border-t border-white/5">
          <Button 
            type="submit"
            disabled={loading || !formData.email || !formData.nickname || !formData.id || !formData.reason}
            className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {loading ? (
              <> <Loader2 className="w-5 h-5 animate-spin" /> {t.submitting} </>
            ) : (
              <> <Send className="w-4 h-4" /> {t.submitButton} </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
