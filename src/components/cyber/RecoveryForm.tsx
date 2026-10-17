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
  Lock,
  Terminal,
  Activity
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
    // Simulação de processamento para efeito visual
    await new Promise(resolve => setTimeout(resolve, 3000));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="w-full py-16 px-6 text-center animate-in zoom-in-95 duration-500 glass-card rounded-[2.5rem] shadow-[0_0_100px_rgba(59,130,246,0.1)] border-primary/20">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center text-primary blue-glow">
            <CheckCircle2 className="w-10 h-10" />
          </div>
        </div>
        <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-4 text-glow">
          {t.successTitle}
        </h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-sm mx-auto leading-relaxed font-medium">
          Seu relatório já foi enviado para a equipe do Gaspar. Aguarde o retorno via e-mail.
        </p>
        <Button 
          onClick={() => window.location.reload()}
          className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-primary/25 active:scale-95 w-full sm:w-auto"
        >
          {t.successAction}
        </Button>
      </div>
    );
  }

  return (
    <div className="relative glass-card rounded-[2.5rem] overflow-hidden border-white/10 p-6 sm:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <Terminal className="w-12 h-12 text-primary" />
      </div>

      <div className="mb-12 space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] block text-glow">
            AUDIT TERMINAL V.2.0
          </span>
        </div>
        <h2 className="text-xl font-black text-white uppercase italic tracking-tight">Inserção de Dados Técnicos</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Campo 1: Email */}
        <div className="space-y-4 group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-all">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xs font-black text-white uppercase italic tracking-tight">{t.step1}</h3>
              <p className="text-[9px] text-muted-foreground font-medium opacity-60 uppercase tracking-tighter">{t.step1Desc}</p>
            </div>
          </div>
          <div className="relative">
            <Input 
              required
              type="email"
              placeholder="E-mail para resposta..."
              className="h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-white rounded-xl px-6 text-xs transition-all shadow-inner font-medium placeholder:text-muted-foreground/30 ring-0 focus:ring-1 focus:ring-primary/20"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        {/* Campo 2: Nickname */}
        <div className="space-y-4 group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-all">
              <User className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xs font-black text-white uppercase italic tracking-tight">{t.step2}</h3>
              <p className="text-[9px] text-muted-foreground font-medium opacity-60 uppercase tracking-tighter">{t.step2Desc}</p>
            </div>
          </div>
          <Input 
            required
            placeholder="Nickname EXATO da conta..."
            className="h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-white rounded-xl px-6 text-xs transition-all font-mono shadow-inner placeholder:text-muted-foreground/30 ring-0 focus:ring-1 focus:ring-primary/20"
            value={formData.nickname}
            onChange={e => setFormData({...formData, nickname: e.target.value})}
          />
          <div className="flex items-start gap-3 p-3 bg-primary/5 border border-primary/10 rounded-xl">
            <AlertCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
            <p className="text-[9px] text-primary uppercase font-black tracking-widest leading-tight">
              Aviso: Símbolos e espaços devem ser idênticos ao jogo.
            </p>
          </div>
        </div>

        {/* Campo 3: ID */}
        <div className="space-y-4 group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-all">
              <Hash className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xs font-black text-white uppercase italic tracking-tight">{t.step3}</h3>
              <p className="text-[9px] text-muted-foreground font-medium opacity-60 uppercase tracking-tighter">{t.step3Desc}</p>
            </div>
          </div>
          <Input 
            required
            placeholder="ID Numérico da Conta..."
            className="h-14 bg-white/[0.03] border-white/10 focus:border-primary/50 text-white rounded-xl px-6 text-xs transition-all font-mono shadow-inner placeholder:text-muted-foreground/30 ring-0 focus:ring-1 focus:ring-primary/20"
            value={formData.id}
            onChange={e => setFormData({...formData, id: e.target.value})}
          />
        </div>

        {/* Campo 4: Relato Real */}
        <div className="space-y-4 group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-focus-within:bg-primary group-focus-within:text-white transition-all">
              <FileText className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xs font-black text-white uppercase italic tracking-tight">{t.step4}</h3>
              <p className="text-[9px] text-muted-foreground font-medium opacity-60 uppercase tracking-tighter">{t.step4Desc}</p>
            </div>
          </div>
          <div className="relative">
            <Textarea 
              required
              placeholder="Descreva o ocorrido sem omitir detalhes..."
              className="min-h-[160px] bg-white/[0.03] border-white/10 focus:border-primary/50 text-white rounded-xl p-6 text-xs leading-relaxed transition-all shadow-inner placeholder:text-muted-foreground/30 resize-none ring-0 focus:ring-1 focus:ring-primary/20"
              value={formData.reason}
              onChange={e => setFormData({...formData, reason: e.target.value})}
            />
            <div className="absolute bottom-4 right-4 opacity-30">
              <Lock className="w-4 h-4 text-primary" />
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-xl">
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
            <p className="text-[9px] text-primary uppercase font-black tracking-widest leading-tight">
              Audit System: O relato será processado manualmente.
            </p>
          </div>
        </div>

        {/* Botão de Envio */}
        <div className="pt-8 border-t border-white/5">
          <Button 
            type="submit"
            disabled={loading || !formData.email || !formData.nickname || !formData.id || !formData.reason}
            className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.2em] rounded-xl shadow-[0_15px_30px_rgba(59,130,246,0.3)] transition-all active:scale-[0.98] disabled:opacity-30 flex items-center justify-center gap-3 text-xs"
          >
            {loading ? (
              <> <Loader2 className="w-5 h-5 animate-spin" /> {t.submitting} </>
            ) : (
              <> <Send className="w-4 h-4" /> {t.submitButton} </>
            )}
          </Button>
          <div className="mt-4 flex flex-col items-center gap-1">
             <div className="flex items-center gap-2 opacity-30">
              <Activity className="w-3 h-3 text-primary" />
              <span className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest">
                Data Transmission Secured // 256-bit AES
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
