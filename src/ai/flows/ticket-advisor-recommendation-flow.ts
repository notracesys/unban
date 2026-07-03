'use server';
/**
 * @fileOverview A GenAI tool that recommends the most strategic ticket model
 * based on the user's specific account restriction details for appealing a ban.
 *
 * - ticketAdvisorRecommendation - A function that handles the ticket template recommendation process.
 * - TicketAdvisorRecommendationInput - The input type for the ticketAdvisorRecommendation function.
 * - TicketAdvisorRecommendationOutput - The return type for the ticketAdvisorRecommendation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const TicketAdvisorRecommendationInputSchema = z.object({
  banType: z
    .enum(['Automatic', 'Manual', 'Reincident'])
    .describe('The identified type of ban: Automatic, Manual, or Reincident.'),
  banMessage: z
    .string()
    .describe(
      'The exact message received from the platform when attempting to access the banned account.'
    ),
  selectedTicketCategory: z
    .string()
    .optional()
    .describe(
      "The category chosen when submitting the ticket (e.g., 'Quero recuperar a conta do Free Fire (não se aplica à Suspensões)')."
    ),
  userEmail: z
    .string()
    .optional()
    .describe(
      "The user's email for the ticket, not directly used for recommendation but for context."
    ),
  accountID: z
    .string()
    .optional()
    .describe(
      "The game account ID, not directly used for recommendation but for context."
    ),
  nickInGame: z
    .string()
    .optional()
    .describe(
      "The player's in-game nickname, not directly used for recommendation but for context."
    ),
});
export type TicketAdvisorRecommendationInput = z.infer<
  typeof TicketAdvisorRecommendationInputSchema
>;

const TicketAdvisorRecommendationOutputSchema = z
  .string()
  .describe('The recommended strategic ticket template.');
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
  prompt: `You are an expert AI assistant specializing in helping users appeal account bans on gaming platforms, strictly following a strategic method.
Your goal is to recommend the single most strategic ticket template from the provided options based on the user's ban message, ban type, and the strategic guidelines from the 'Method'.

When recommending a template, adhere to these key strategic guidelines:
- The description must sound calm, organized, avoid accusatory or emotional language, and request analysis, not immediate resolution.
- It should avoid terms that activate automated filters or suggest guilt.
- The most strategic option for ticket categories is generally one that is less accusatory and more generic, such as "Quero recuperar a conta do Free Fire (não se aplica à Suspensões)".
- The primary goal of the message is to appear worthy of human analysis, not to argue or demand.
- Do not include any extra conversational text, greetings, or explanations. Only output the raw text of the chosen template.

Here are the available ticket templates, labeled for your reference:

---
Template 1:
Prezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.

---
Template 2:
À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.

---
Template 3:
Dirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde [data], não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a crer em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.

---
Template 4:
Saudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.

---
Template 5:
Prezados, minha conta encontra-se inacessível e busco entender o motivo. Acredito que esta situação possa ter sido causada por uma avaliação incorreta de um processo automatizado, visto que sempre zelei por seguir as regras da plataforma. Para resolvermos esta questão, solicito que um especialista de suporte revise o caso manualmente e me comunique os detalhes técnicos que levaram à atual restrição. Agradeço e aguardo um posicionamento.

---
Template 6:
À equipe de Suporte, submeto este pedido para verificação de uma alteração anômala de privilégios em minha conta, resultando na impossibilidade de login. O ocorrido não condiz com meu padrão de uso, que é totalmente aderente aos Termos de Serviço. Peço, formalmente, a intervenção de um analista para um diagnóstico preciso e o restabelecimento do meu acesso. Estou à disposição para cooperar com o processo de análise.
---

Based on the following ban details, which ticket template should be used?

Ban Type: {{{banType}}}
Ban Message: {{{banMessage}}}
Selected Ticket Category: {{{selectedTicketCategory}}}
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
      throw new Error('Failed to get a ticket template recommendation.');
    }
    return output;
  }
);
