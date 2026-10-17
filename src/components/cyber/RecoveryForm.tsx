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
  Lock
} from 'lucide-react';
import { translations, type Language } from '@/lib/translations';

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
      <div className="w-full py-24 px-8 text-center animate-in zoom-in-95 duration-500 glass-card rounded-[3rem] shadow-[0_0_100px_rgba(59,130,246,0.1)] border-primary/20">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary blue-glow">
            <CheckCircle2 className="w-12 h-12" />
          </div>
        </div>
        <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-6 text-glow">
          {t.successTitle}
        </h2>
        <p className="text-muted-foreground text-base mb-12 max-w-sm mx-auto leading-relaxed font-medium">
          Seu relatório já foi enviado para a equipe do Gaspar. Aguarde o retorno via e-mail.
        </p>
        <Button 
          onClick={() => window.location.reload()}
          className="h-16 px-12 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-primary/25 active:scale-95"
        >
          {t.successAction}
        </Button>
      </div>
    );
  }

  return (
    <div className="relative glass-card rounded-[3rem] overflow-hidden border-white/10 p-8 sm:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
      <div className="absolute top-0 right-0 p-8 opacity-20">
        <Lock className="w-12 h-12 text-primary" />
      </div>

      <div className="mb-16 space-y-2">
        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] block text-glow">
          TERMINAL DE AUDITORIA
        </span>
        <h2 className="text-2xl font-black text-white uppercase italic tracking-tight">Inserção de Dados Técnicos</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-16">
        
        {/* Campo 1: Email */}
        <div className="space-y-6 group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white uppercase italic tracking-tight">{t.step1}</h3>
              <p className="text-[11px] text-muted-foreground font-medium opacity-60">{t.step1Desc}</p>
            </div>
          </div>
          <Input 
            required
            type="email"
            placeholder="Seu melhor e-mail para resposta..."
            className="h-16 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-2xl px-8 text-sm transition-all shadow-inner font-medium placeholder:text-muted-foreground/30"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Campo 2: Nickname */}
        <div className="space-y-6 group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-all">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white uppercase italic tracking-tight">{t.step2}</h3>
              <p className="text-[11px] text-muted-foreground font-medium opacity-60">{t.step2Desc}</p>
            </div>
          </div>
          <Input 
            required
            placeholder="Nickname EXATO da conta..."
            className="h-16 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-2xl px-8 text-sm transition-all font-mono shadow-inner placeholder:text-muted-foreground/30"
            value={formData.nickname}
            onChange={e => setFormData({...formData, nickname: e.target.value})}
          />
          <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/10 rounded-2xl">
            <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-[10px] text-primary uppercase font-black tracking-widest leading-tight text-left">
              Importante: Caracteres especiais e espaços devem ser idênticos.
            </p>
          </div>
        </div>

        {/* Campo 3: ID */}
        <div className="space-y-6 group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-all">
              <Hash className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white uppercase italic tracking-tight">{t.step3}</h3>
              <p className="text-[11px] text-muted-foreground font-medium opacity-60">{t.step3Desc}</p>
            </div>
          </div>
          <Input 
            required
            placeholder="ID Numérico da Conta..."
            className="h-16 bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-2xl px-8 text-sm transition-all font-mono shadow-inner placeholder:text-muted-foreground/30"
            value={formData.id}
            onChange={e => setFormData({...formData, id: e.target.value})}
          />
        </div>

        {/* Campo 4: Relato Real */}
        <div className="space-y-6 group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-all">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white uppercase italic tracking-tight">{t.step4}</h3>
              <p className="text-[11px] text-muted-foreground font-medium opacity-60">{t.step4Desc}</p>
            </div>
          </div>
          <Textarea 
            required
            placeholder="Descreva exatamente o que aconteceu no momento do banimento. 100% real. Não omita detalhes técnicos ou ações realizadas..."
            className="min-h-[200px] bg-white/[0.02] border-white/10 focus:border-primary/50 text-white rounded-2xl p-8 text-sm leading-relaxed transition-all shadow-inner placeholder:text-muted-foreground/30 resize-none"
            value={formData.reason}
            onChange={e => setFormData({...formData, reason: e.target.value})}
          />
          <div className="flex items-center gap-4 p-5 bg-primary/5 border border-primary/20 rounded-2xl text-left">
            <Sparkles className="w-6 h-6 text-primary shrink-0" />
            <p className="text-[11px] text-primary uppercase font-black tracking-[0.1em] leading-tight">
              Análise de Veracidade: Este relato será auditado manualmente pela nossa equipe técnica para validação do protocolo.
            </p>
          </div>
        </div>

        {/* Botão de Envio (Azul) */}
        <div className="pt-12 border-t border-white/5">
          <Button 
            type="submit"
            disabled={loading || !formData.email || !formData.nickname || !formData.id || !formData.reason}
            className="w-full h-20 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.3em] rounded-[1.5rem] shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-all active:scale-[0.97] disabled:opacity-30 flex items-center justify-center gap-4 text-sm"
          >
            {loading ? (
              <> <Loader2 className="w-6 h-6 animate-spin" /> {t.submitting} </>
            ) : (
              <> <Send className="w-5 h-5" /> {t.submitButton} </>
            )}
          </Button>
          <p className="mt-6 text-[9px] text-muted-foreground/40 font-bold uppercase tracking-widest text-center">
            Encrypted Data Transmission Protected by Zephyrus Guard
          </p>
        </div>
      </form>
    </div>
  );
}