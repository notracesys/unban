
export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    selectLanguage: 'Selecione o Idioma',
    protocolInitialization: 'Inicialização de Protocolo // Selecione a Região',
    hero: {
      title: 'UNBAN',
      titleAccent: 'STRATEGY',
      description: 'Macetes e estratégias exclusivas para auxiliar no seu processo de recuperação de contas.',
    },
    ui: {
      locked: 'Bloqueado - Conclua o módulo anterior',
      accessModule: 'Acessar Módulo',
      completeModule: 'Concluir Módulo e Liberar Próximo',
      moduleCompleted: 'Módulo Concluído',
      copyToClipboard: 'Copiado para a área de transferência',
      copyDescription: 'O template está pronto para ser colado no suporte.',
      dataStream: 'Data Stream // Acesso Concedido',
      decrypting: 'Arquivo em processo de descriptografia...',
      securityGuidelines: 'Diretrizes de Segurança',
      criticalAttention: 'Atenção Crítica',
      safetyText: 'O sucesso depende do silêncio operacional pós-envio. Contatos duplicados resultam em encerramento definitivo do caso.',
      systemActive: 'PROTOCOLO ATIVO',
      waitDays: 'SE A TENTATIVA NÃO PRODUZIU RESULTADO, AGUARDE OBRIGATORIAMENTE +7 DIAS ANTES DE NOVO CICLO.',
      officialChannel: 'Acessar Canal Oficial',
      copyTemplate: 'Copiar Modelo'
    },
    modules: [
      {
        id: 'module-1',
        tag: 'MÓDULO 1',
        title: 'ENTENDA SEU BANIMENTO',
        description: 'Identificação técnica da restrição aplicada.',
        lessons: [
          { id: '1.1', title: 'Aula 1.1 - O que é banimento automático', content: 'Identificação de padrões sistêmicos detectados por software de monitoramento sem intervenção humana.' },
          { id: '1.2', title: 'Aula 1.2 - O que é banimento manual', content: 'Decisão tomada após denúncia e revisão por um analista humano da equipe de suporte.' },
          { 
            id: '1.3', 
            title: 'Aula 1.3 - O que é banimento reincidente', 
            content: `### Quando existe histórico anterior de punições
O banimento reincidente acontece quando a conta já possui registros anteriores de punições, advertências ou suspensões.
Plataformas normalmente aplicam níveis de tolerância progressivamente menores para contas reincidentes.

**Características:**
- Respostas mais rápidas;
- Menor abertura para revisão;
- Análises mais rígidas;
- Baixíssima tolerância a novos recursos.

**O erro mais comum**
Muitas pessoas acreditam que enviar dezenas de tickets aumenta as chances de sucesso. Na prática, isso geralmente produz o efeito contrário.
Quando existe reincidência, insistência excessiva pode:
- Confirmar decisões anteriores;
- Encerrar possibilidades de análise futura;
- Classificar o caso como tentativa repetitiva.`
          },
          { 
            id: '1.4', 
            title: 'Aula 1.4 - Como identificar qual é o seu caso',
            content: `### A etapa mais importante antes de enviar qualquer ticket
Antes de escrever qualquer mensagem para o suporte, faça estas perguntas:

1. **A mensagem recebida é genérica?** Se sim, há grandes chances de ser um banimento automático.
2. **A mensagem apresenta detalhes específicos?** Se sim, pode indicar uma análise manual.
3. **A conta já recebeu punições anteriormente?** Se a resposta for positiva, você provavelmente está diante de um caso reincidente.

**Resumo rápido**
- **Banimento automático:** Mensagens genéricas e rápidas (Chance: Maior)
- **Banimento manual:** Mensagens específicas (Chance: Baixa)
- **Banimento reincidente:** Histórico anterior (Chance: Muito baixa)`
          },
        ]
      },
      {
        id: 'module-2',
        tag: 'MÓDULO 2',
        title: 'PREPARAÇÃO DO TICKET',
        description: 'Logística e estratégia pré-envio.',
        lessons: [
          { 
            id: '2.1', 
            title: 'Aula 2.1 - Onde enviar o ticket',
            content: `### Utilizando apenas canais oficiais
Antes de pensar no texto, entenda: um ticket enviado no local errado já nasce sem chance.
Canais que **NÃO** funcionam: Instagram, Facebook, Discord, E-mails genéricos.

**O procedimento correto**
A solicitação deve ser enviada exclusivamente através do suporte oficial.
O primeiro erro que elimina tentativas é enviar para diversos canais simultaneamente.

**Canal Oficial Garena:**
[https://ffsuporte.garena.com/support/tickets/new](https://ffsuporte.garena.com/support/tickets/new)`
          },
          { 
            id: '2.2', 
            title: 'Aula 2.2 - Escolhendo a categoria correta',
            content: `### A decisão mais importante antes da mensagem
A categoria influencia diretamente o processamento interno.

**O que evitar:** Categorias acusatórias ou definitivas.
**O que procurar:** Selecione categorias neutras que permitam análise.
**Regra prática:** "Esta categoria parece abrir uma análise ou apenas confirmar uma decisão?"`
          },
          { 
            id: '2.3', 
            title: 'Aula 2.3 - Como preencher os dados',
            content: `### Menos informação significa menos problemas
Os campos técnicos existem apenas para identificação.
Preencha somente: ID correto, nickname exato e e-mail solicitado.
**Nunca faça:** Adicionar explicações extras nos campos técnicos. Sistemas automatizados analisam padrões de preenchimento.`
          },
          { 
            id: '2.4', 
            title: 'Aula 2.4 - Regras do Campo Mensagem',
            content: `### O único lugar onde a estratégia realmente importa
**Nunca faça:** Caixa alta, emojis, ameaças ou textos emocionais.
**O que fazer:** Linguagem formal, objetividade e organização.
Solicite análise, não exija resultado.`
          },
          { 
            id: '2.5', 
            title: 'Aula 2.5 - Revisão e Checklist',
            content: `### O ticket é único
Revise ID, Nickname e o Tom da mensagem antes de enviar.
**Após o envio:** A estratégia termina no momento do envio. Silêncio operacional é obrigatório.`
          },
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'PREENCHIMENTO PASSO A PASSO',
        description: 'Protocolo detalhado de preenchimento.',
        lessons: [
          { id: '3.1', title: 'Aula 3.1 - Qual opção selecionar', content: 'Prefira categorias neutras como "Quero recuperar minha conta". Evite categorias que já admitem o uso de softwares.' },
          { id: '3.2', title: 'Aula 3.2 - Campo Requester', content: 'Insira apenas seu e-mail de contato válido. Sem IDs ou textos extras aqui.' },
          { id: '3.3', title: 'Aula 3.3 - Campo Assunto', content: 'Seja técnico. Ex: "Solicitação de verificação referente ao acesso da conta". Evite palavras como "Banido".' },
          { id: '3.4', title: 'Aula 3.4 - Nick do jogo', content: 'Exatamente como está no jogo, respeitando símbolos e letras.' },
          { id: '3.5', title: 'Aula 3.5 - ID da conta', content: 'O dado mais importante. Sem erros.' },
          { id: '3.6', title: 'Aula 3.6 - Tempo de suspensão', content: 'Informe a verdade conforme exibido na mensagem de banimento.' },
          { id: '3.7', title: 'Aula 3.7 - Data do ocorrido', content: 'Seja coerente e preciso.' },
          { id: '3.8', title: 'Aula 3.8 - Descrição do ticket', content: 'Onde o método acontece. Use os modelos do próximo módulo.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'MODELOS PRONTOS',
        description: 'Templates estratégicos de alta conversão.',
        lessons: [
          { 
            id: 'm4-1', 
            title: 'Modelo 1 - Diagnóstico Técnico',
            template: 'Prezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.'
          },
          { 
            id: 'm4-2', 
            title: 'Modelo 2 - Suspeita de Falha',
            template: 'À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.'
          },
          { 
            id: 'm4-3', 
            title: 'Modelo 3 - Falso Positivo',
            template: 'Dirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde recentemente, não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a crer em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.'
          },
          { 
            id: 'm4-4', 
            title: 'Modelo 4 - Auditoria Humana',
            template: 'Saudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.'
          },
          { 
            id: 'm4-5', 
            title: 'Modelo 5 - Avaliação Incorreta',
            template: 'Prezados, minha conta encontra-se inacessível e busco entender o motivo. Acredito que esta situação possa ter sido causada por uma avaliação incorreta de um processo automatizado, visto que sempre zelei por seguir as regras da plataforma. Para resolvermos esta questão, solicito que um especialista de suporte revise o caso manualmente e me comunique os detalhes técnicos que levaram à atual restrição. Agradeço e aguardo um posicionamento.'
          },
          { 
            id: 'm4-6', 
            title: 'Modelo 6 - Verificação Anômala',
            template: 'À equipe de Suporte, submeto este pedido para verificação de uma alteração anômala de privilégios em minha conta, resultando na impossibilidade de login. O ocorrido não condiz com meu padrão de uso, que é totalmente aderente aos Termos de Serviço. Peço, formalmente, a intervenção de um analista para um diagnóstico preciso e o restabelecimento do meu acesso. Estou à disposição para cooperar com o processo de análise.'
          }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'APÓS ENVIAR O TICKET',
        description: 'Gestão de silêncio e janelas de resposta.',
        lessons: [
          { id: '5.1', title: 'Aula 5.1 - Silêncio Pós-Envio', content: 'Aguarde de 7 a 10 dias. Jamais envie tickets de reforço. Insistência mata a credibilidade.' },
          { id: '5.2', title: 'Aula 5.2 - Como destruir sua tentativa', content: 'Abrir múltiplos tickets, usar e-mails diferentes ou discutir com o suporte interpretam comportamento inadequado.' },
          { id: '5.3', title: 'Aula 5.3 - O momento de uma nova tentativa', content: 'Apenas após 7 dias de silêncio total ou resposta automática clara. Mude o modelo e o assunto.' },
          { id: '5.4', title: 'Aula 5.4 - Saber parar', content: 'Se após 3 tentativas bem espaçadas não houver avanço, interrompa o ciclo para não queimar a conta definitivamente.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALISANDO A RESPOSTA',
        description: 'Decodificação de feedback do suporte.',
        lessons: [
          { id: '6.1', title: 'Aula 6.1 - Identificar resposta automática', content: 'Texto genérico, frio, sem mencionar dados da conta ou detalhes do seu caso.' },
          { id: '6.2', title: 'Aula 6.2 - Identificar resposta humana', content: 'Menciona seu ID, pede logs ou usa linguagem menos padronizada.' },
          { id: '6.3', title: 'Aula 6.3 - Reação à resposta automática', content: 'Não discuta. Aguarde 7 dias e reinicie com outro foco.' },
          { id: '6.4', title: 'Aula 6.4 - Reação à resposta humana', content: 'Menos é mais. Responda estritamente o que foi solicitado.' }
        ]
      }
    ]
  },
  en: {
    selectLanguage: 'Select Language',
    protocolInitialization: 'Protocol Initialization // Select Region',
    hero: {
      title: 'UNBAN',
      titleAccent: 'STRATEGY',
      description: 'Exclusive tips and strategies to assist in your account recovery process.',
    },
    ui: {
      locked: 'Locked - Complete previous module',
      accessModule: 'Access Module',
      completeModule: 'Complete and Unlock Next',
      moduleCompleted: 'Module Completed',
      copyToClipboard: 'Copied to clipboard',
      copyDescription: 'Template is ready to paste.',
      dataStream: 'Data Stream // Access Granted',
      decrypting: 'File decrypting...',
      securityGuidelines: 'Security Guidelines',
      criticalAttention: 'Critical Attention',
      safetyText: 'Success depends on silence. Duplicate contacts lead to permanent closure.',
      systemActive: 'PROTOCOL ACTIVE',
      waitDays: 'IF ATTEMPT FAILED, WAIT +7 DAYS MANDATORY.',
      officialChannel: 'Official Channel',
      copyTemplate: 'Copy Template'
    },
    modules: [
      {
        id: 'module-1',
        tag: 'MODULE 1',
        title: 'UNDERSTAND YOUR BAN',
        description: 'Technical identification of the restriction.',
        lessons: [
          { id: '1.1', title: '1.1 - Automatic Ban', content: 'Software detection without human oversight.' },
          { id: '1.2', title: '1.2 - Manual Ban', content: 'Decision after human review.' },
          { id: '1.3', title: '1.3 - Recidivist Ban', content: 'When there is a history of previous punishments.' },
          { id: '1.4', title: '1.4 - Case Identification', content: 'Questions to identify which case applies to you.' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MODULE 2',
        title: 'TICKET PREPARATION',
        description: 'Logistics and strategy.',
        lessons: [
          { id: '2.1', title: '2.1 - Where to send', content: 'Official channels only. Avoid social media.' },
          { id: '2.2', title: '2.2 - Right Category', content: 'Neutral categories prevent auto-closure.' },
          { id: '2.3', title: '2.3 - Filling Data', content: 'ID and Nickname only. No stories in tech fields.' },
          { id: '2.4', title: '2.4 - Message Rules', content: 'Formal, objective, no caps, no emojis.' },
          { id: '2.5', title: '2.5 - Post-send silence', content: 'Once sent, wait. Do not insist.' }
        ]
      },
      { id: 'module-3', tag: 'MODULE 3', title: 'STEP BY STEP', description: 'Filling protocol.', lessons: [] },
      { id: 'module-4', tag: 'MODULE 4', title: 'TEMPLATES', description: 'High conversion templates.', lessons: [] },
      { id: 'module-5', tag: 'MODULE 5', title: 'AFTER SENDING', description: 'Management of silence.', lessons: [] },
      { id: 'module-6', tag: 'MODULE 6', title: 'ANALYSIS', description: 'Decoding feedback.', lessons: [] }
    ]
  },
  es: {
    selectLanguage: 'Seleccionar Idioma',
    protocolInitialization: 'Inicialización // Seleccione Región',
    hero: {
      title: 'UNBAN',
      titleAccent: 'STRATEGY',
      description: 'Consejos exclusivos para recuperar su cuenta.',
    },
    ui: {
      locked: 'Bloqueado - Complete anterior',
      accessModule: 'Acceder',
      completeModule: 'Completar y Desbloquear',
      moduleCompleted: 'Completado',
      copyToClipboard: 'Copiado',
      copyDescription: 'Listo para pegar.',
      dataStream: 'Data Stream // Acceso',
      decrypting: 'Descifrando...',
      securityGuidelines: 'Seguridad',
      criticalAttention: 'Atención Crítica',
      safetyText: 'El éxito depende del silencio. Contactos duplicados cierran el caso.',
      systemActive: 'ACTIVO',
      waitDays: 'ESPERE +7 DÍAS SI FALLÓ.',
      officialChannel: 'Canal Oficial',
      copyTemplate: 'Copiar'
    },
    modules: [
      { id: 'module-1', tag: 'MÓDULO 1', title: 'ENTIENDA SU BAN', description: 'Identificación técnica.', lessons: [] },
      { id: 'module-2', tag: 'MÓDULO 2', title: 'PREPARACIÓN', description: 'Logística y estrategia.', lessons: [] },
      { id: 'module-3', tag: 'MÓDULO 3', title: 'PASO A PASO', description: 'Protocolo de llenado.', lessons: [] },
      { id: 'module-4', tag: 'MÓDULO 4', title: 'PLANTILLAS', description: 'Alta conversión.', lessons: [] },
      { id: 'module-5', tag: 'MÓDULO 5', title: 'POST-ENVÍO', description: 'Gestión del silencio.', lessons: [] },
      { id: 'module-6', tag: 'MÓDULO-6', title: 'ANÁLISIS', description: 'Decodificación.', lessons: [] }
    ]
  }
};
