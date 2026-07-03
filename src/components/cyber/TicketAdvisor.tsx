
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { BrainCircuit, Copy, Loader2, Sparkles } from 'lucide-react';
import { ticketAdvisorRecommendation } from '@/ai/flows/ticket-advisor-recommendation-flow';
import { useToast } from '@/hooks/use-toast';
import { saveAttempt } from '@/lib/persistence';

export function TicketAdvisor({ prefilledType }: { prefilledType?: string }) {
  const [loading, setLoading] = useState(false);
  const [banMessage, setBanMessage] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConsult = async () => {
    if (!banMessage.trim()) {
      toast({ title: 'Atenção', description: 'Insira a mensagem de banimento.', variant: 'destructive' });
      return;
    }

    setLoading(true);
    try {
      const result = await ticketAdvisorRecommendation({
        banType: (prefilledType || 'Automático') as any,
        banMessage,
        selectedTicketCategory: 'Quero recuperar a conta do Free Fire (não se aplica à Suspensões)'
      });
      setRecommendation(result);
      saveAttempt({
        type: (prefilledType || 'Automático') as any,
        status: 'Pendente',
        ticketSent: result
      });
      toast({ title: 'Sucesso', description: 'Protocolo gerado com sucesso.' });
    } catch (error) {
      toast({ title: 'Falha no Sistema', description: 'Não foi possível acessar o motor de IA.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (recommendation) {
      navigator.clipboard.writeText(recommendation);
      toast({ title: 'Copiado', description: 'Template pronto para uso.' });
    }
  };

  return (
    <div className="space-y-4 py-2">
      {!recommendation ? (
        <>
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Cole o texto da notificação de banimento</label>
            <Textarea 
              placeholder="Ex: Sua conta foi suspensa permanentemente por uso de softwares..." 
              className="bg-background/50 border-accent/20 focus:border-accent font-code text-xs min-h-[100px]"
              value={banMessage}
              onChange={(e) => setBanMessage(e.target.value)}
            />
          </div>
          <Button 
            className="w-full bg-accent hover:bg-accent/80 text-white font-headline uppercase tracking-widest text-[10px] py-5"
            onClick={handleConsult}
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Gerar Protocolo Estratégico
          </Button>
        </>
      ) : (
        <div className="space-y-3 animate-in fade-in duration-500">
          <div className="p-3 bg-background border border-accent/30 rounded font-code text-[10px] leading-relaxed text-accent/90 whitespace-pre-wrap relative group">
            {recommendation}
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute top-1 right-1 h-8 w-8 text-accent"
              onClick={copyToClipboard}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <Button 
            variant="outline" 
            className="w-full border-accent/20 text-accent hover:bg-accent hover:text-white uppercase tracking-widest text-[9px] h-8"
            onClick={() => setRecommendation(null)}
          >
            Reiniciar Processo
          </Button>
        </div>
      )}
    </div>
  );
}
