
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BrainCircuit, Copy, Loader2, Sparkles } from 'lucide-react';
import { ticketAdvisorRecommendation } from '@/ai/flows/ticket-advisor-recommendation-flow';
import { useToast } from '@/hooks/use-toast';
import { GlitchText } from './GlitchText';
import { saveAttempt } from '@/lib/persistence';

export function TicketAdvisor({ prefilledType }: { prefilledType?: string }) {
  const [loading, setLoading] = useState(false);
  const [banMessage, setBanMessage] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConsult = async () => {
    if (!banMessage.trim()) {
      toast({ title: 'Error', description: 'Enter the ban message.', variant: 'destructive' });
      return;
    }

    setLoading(true);
    try {
      const result = await ticketAdvisorRecommendation({
        banType: (prefilledType || 'Automatic') as any,
        banMessage,
        selectedTicketCategory: 'Quero recuperar a conta do Free Fire (não se aplica à Suspensões)'
      });
      setRecommendation(result);
      saveAttempt({
        type: (prefilledType || 'Automatic') as any,
        status: 'Pending',
        ticketSent: result
      });
    } catch (error) {
      toast({ title: 'System Failure', description: 'Failed to access recommendation engine.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (recommendation) {
      navigator.clipboard.writeText(recommendation);
      toast({ title: 'Copied', description: 'Template ready for deployment.' });
    }
  };

  return (
    <Card className="bg-card border-accent/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
      <CardHeader>
        <CardTitle className="font-headline text-xl tracking-wider flex items-center gap-2">
          <BrainCircuit className="w-5 h-5 text-accent" />
          <GlitchText text="ADVISOR_ENGINE" className="text-accent" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!recommendation ? (
          <>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Input Ban Notification Text</label>
              <Textarea 
                placeholder="Paste the exact message from the platform..." 
                className="bg-background/50 border-accent/10 focus:border-accent font-code text-sm"
                value={banMessage}
                onChange={(e) => setBanMessage(e.target.value)}
              />
            </div>
            <Button 
              className="w-full bg-accent hover:bg-accent/80 text-white font-headline uppercase tracking-widest text-xs py-6"
              onClick={handleConsult}
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
              Generate Strategic Protocol
            </Button>
          </>
        ) : (
          <div className="space-y-4 animate-in fade-in">
            <div className="p-4 bg-background border border-accent/20 rounded font-code text-xs leading-relaxed text-accent/90 whitespace-pre-wrap relative group">
              {recommendation}
              <Button 
                size="icon" 
                variant="ghost" 
                className="absolute top-2 right-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={copyToClipboard}
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-accent/20 text-accent hover:bg-accent hover:text-white uppercase tracking-widest text-xs"
              onClick={() => setRecommendation(null)}
            >
              Reset Protocol
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
