
'use server';
/**
 * @fileOverview Uma IA que recomenda o modelo de ticket mais estratégico
 * com base nos detalhes de restrição da conta do usuário.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TicketAdvisorRecommendationInputSchema = z.object({
  banType: z
    .enum(['Automático', 'Manual', 'Reincidente'])
    .describe('O tipo de banimento identificado.'),
  banMessage: z
    .string()
    .describe(
      'A mensagem exata recebida da plataforma ao tentar acessar a conta.'
    ),
  selectedTicketCategory: z
    .string()
    .optional()
    .describe(
      "A categoria escolhida (ex: 'Quero recuperar a conta')."
    ),
  accountID: z
    .string()
    .optional()
    .describe("ID da conta do jogo."),
});
export type TicketAdvisorRecommendationInput = z.infer<
  typeof TicketAdvisorRecommendationInputSchema
>;

const TicketAdvisorRecommendationOutputSchema = z
  .string()
  .describe('O template de ticket estratégico recomendado.');
export type TicketAdvisorRecommendationOutput = z.infer<
  typeof TicketAdvisorRecommendationOutputSchema
>;

export async function ticketAdvisorRecommendation(
  input: TicketAdvisorRecommendationInput
): Promise<TicketAdvisorRecommendationOutput> {
  return ticketAdvisorRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ticketAdvisorRecommendationPrompt',
  input: { schema: TicketAdvisorRecommendationInputSchema },
  output: { schema: TicketAdvisorRecommendationOutputSchema },
  prompt: `Você é um assistente especialista em ajudar usuários a apelar banimentos de contas de jogos, seguindo um método estratégico.
Seu objetivo é recomendar o modelo de ticket mais adequado com base na mensagem de banimento e no tipo de banimento.

Diretrizes:
- O tom deve ser calmo, técnico, organizado e solicitar ANÁLISE, não resolução imediata.
- Evite termos que ativem filtros automáticos (como "hack", "banido injustamente", etc).
- O objetivo é parecer digno de uma revisão humana.
- Apenas forneça o texto do template escolhido, sem explicações extras.

Modelos Disponíveis (Templates):

Template 1:
Prezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.

Template 2:
À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.

Template 3:
Dirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde recentemente, não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a crer em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.

Template 4:
Saudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.

Escolha o melhor modelo para os detalhes abaixo:

Tipo de Banimento: {{{banType}}}
Mensagem de Banimento: {{{banMessage}}}
`,
});

const ticketAdvisorRecommendationFlow = ai.defineFlow(
  {
    name: 'ticketAdvisorRecommendationFlow',
    inputSchema: TicketAdvisorRecommendationInputSchema,
    outputSchema: TicketAdvisorRecommendationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Falha ao gerar recomendação.');
    }
    return output;
  }
);
