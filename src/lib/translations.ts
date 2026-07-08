
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
          { id: '1.3', title: 'Aula 1.3 - O que é banimento reincidente', content: 'Quando a conta já possui registros anteriores de punições. A tolerância do sistema é muito menor nestes casos.' },
          { id: '1.4', title: 'Aula 1.4 - Identificação de Caso', content: 'Resumo rápido:\n\n- Banimento automático: Mensagens genéricas e rápidas (Chance: Maior)\n- Banimento manual: Mensagens específicas (Chance: Baixa)\n- Banimento reincidente: Histórico anterior (Chance: Muito baixa)' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MÓDULO 2',
        title: 'PREPARAÇÃO DO TICKET',
        description: 'Logística e estratégia pré-envio.',
        lessons: [
          { id: '2.1', title: 'Aula 2.1 - Canais Oficiais', content: 'A solicitação deve ser enviada exclusivamente através do suporte oficial. Não use redes sociais.\n\nLink Oficial: https://ffsuporte.garena.com/support/tickets/new' },
          { id: '2.2', title: 'Aula 2.2 - Categoria Correta', content: 'Selecione categorias neutras que permitam análise. Evite opções que já confirmem a punição.' },
          { id: '2.3', title: 'Aula 2.3 - Dados Técnicos', content: 'Preencha ID e Nickname com precisão absoluta. Campos técnicos devem conter apenas dados técnicos.' },
          { id: '2.4', title: 'Aula 2.4 - Regras de Mensagem', content: 'Use linguagem formal e organizada. Evite caixa alta, emojis ou ameaças.' },
          { id: '2.5', title: 'Aula 2.5 - Checklist Final', content: 'O ticket é único.\n\nAntes de clicar em enviar, pare por alguns minutos e revise tudo.\n\nFaça a seguinte checklist:\n\nCATEGORIA:\n- Está correta?\n- É a opção mais neutra disponível?\n\nDADOS:\n- O ID foi digitado corretamente?\n- O nickname está exato?\n\nMENSAGEM:\n- Está objetiva?\n- Está técnica?\n- Está organizada?\n\nTOM GERAL:\nPergunte: "Isto parece ter sido escrito por alguém calmo e racional?"\nSe a resposta for "não", não envie ainda.\n\nAPÓS O ENVIO:\nDepois que o ticket for enviado:\n❌ Não envie outro imediatamente;\n❌ Não tente complementar informações;\n❌ Não abra múltiplas solicitações;\n❌ Não tente reforçar o pedido.\n\nA estratégia termina no momento do envio. A partir daí, insistência excessiva normalmente produz o efeito contrário ao desejado.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'PREENCHIMENTO PASSO A PASSO',
        description: 'Protocolo detalhado de preenchimento.',
        lessons: [
          { id: '3.1', title: '3.1 - Opção de Seleção', content: 'A primeira decisão que pode definir todo o processo.\n\nAo abrir o formulário de suporte, você encontrará diversas opções relacionadas ao problema da conta. A maioria das pessoas comete o primeiro erro justamente aqui: escolhe a opção mais óbvia.\n\nO problema é que algumas categorias funcionam praticamente como classificações automáticas de encerramento.\n\nEvite opções como:\n❌ "Detectamos o uso de softwares não autorizados"\n❌ "O sistema Anti-Trapaça detectou irregularidades"\n❌ "Esta conta foi suspensa permanentemente"\nEssas categorias costumam encaminhar a solicitação diretamente para respostas padronizadas.\n\nA ESTRATÉGIA CORRETA:\nSempre que possível, escolha opções mais neutras. Por exemplo:\n✅ "Quero recuperar a conta do Free Fire (não se aplica à Suspensões)"\nEssa abordagem não antecipa conclusões, não confirma acusações e mantém a solicitação em categorias mais amplas de análise.\n\nO PRINCÍPIO ESTRATÉGICO:\nVocê não está tentando provar nada nesta etapa. Você está apenas tentando evitar que sua solicitação seja descartada antes de ser analisada.' },
          { id: '3.2', title: '3.2 - Campo Requester', content: 'O campo mais simples e, ainda assim, frequentemente preenchido errado.\n\nO campo "Requester" identifica o solicitante do ticket. Sua função é exclusivamente administrativa.\n\nO QUE INSERIR:\n- o e-mail utilizado para contato;\n- um endereço válido;\n- um e-mail que você tenha acesso.\n\nO QUE NÃO FAZER:\n❌ Escrever o ID da conta;\n❌ Inserir explicações;\n❌ Adicionar observações;\n❌ Utilizar múltiplos e-mails.\n\nIMPORTANTE:\nO e-mail do ticket não necessariamente precisa ser o mesmo utilizado na conta do jogo. Ele serve apenas para que o suporte consiga retornar sua solicitação.' },
          { id: '3.3', title: '3.3 - Assunto Estratégico', content: 'O campo que mais ativa respostas automáticas.\n\nO assunto do ticket é uma das primeiras informações analisadas pelo sistema. Por isso, utilizar termos emocionais ou acusatórios pode prejudicar a tentativa.\n\nNUNCA UTILIZE:\n❌ "Fui banido injustamente"\n❌ "Desbanimento urgente"\n❌ "Minha conta foi roubada"\n❌ "Quero meu desbanimento"\n\nO OBJETIVO DO ASSUNTO:\nO assunto deve parecer técnico, ser curto, indicar necessidade de análise e evitar conclusões.\n\nEXEMPLO DA LÓGICA CORRETA:\n"Solicitação de verificação referente ao acesso da conta."' },
          { id: '3.4', title: '3.4 - Precisão do Nick', content: 'Não existe margem para criatividade.\n\nO nickname deve ser preenchido exatamente como aparece dentro do jogo.\n\nREGRAS:\n✅ Utilize letras maiúsculas e minúsculas corretamente;\n✅ Respeite símbolos especiais;\n✅ Copie exatamente o nome registrado.\n\nNUNCA FAÇA:\n❌ Utilizar apelidos alternativos;\n❌ Utilizar abreviações;\n❌ Inserir nomes antigos da conta.\n\nUm nickname incorreto pode fazer com que sua solicitação seja considerada inválida.' },
          { id: '3.5', title: '3.5 - ID da Conta', content: 'O dado mais importante do formulário.\n\nO ID da conta é o principal identificador interno. Por isso:\n- copie diretamente da fonte oficial;\n- revise mais de uma vez;\n- confirme todos os números.\n\nNÃO FAÇA:\n❌ Inserir comentários;\n❌ Adicionar justificativas;\n❌ Escrever textos complementares.\n\nO campo de ID existe apenas para identificar a conta. Nada além disso.' },
          { id: '3.6', title: '3.6 - Status de Suspensão', content: 'Nunca invente informações.\n\nSe o sistema informar suspensão permanente, informe exatamente isso.\n\nREGRAS:\n✅ Se for permanente, marque permanente;\n✅ Se houver prazo definido, utilize o prazo correto;\n✅ Se não souber exatamente, utilize a informação mais próxima possível.\n\nNUNCA FAÇA:\n❌ Inventar períodos;\n❌ Chutar datas;\n❌ Fazer estimativas aleatórias.\n\nInformações inconsistentes reduzem a credibilidade da solicitação.' },
          { id: '3.7', title: '3.7 - Data e Coerência', content: 'Datas importam mais do que parecem.\n\nO sistema pode utilizar a data informada para cruzamento interno de informações. Por isso:\n- informe a data exata, se souber;\n- utilize uma aproximação razoável, caso não tenha certeza.\n\nEVITE:\n❌ "Não lembro";\n❌ Datas impossíveis;\n❌ Datas muito distantes do ocorrido.\n\nA coerência das informações ajuda a demonstrar organização e boa-fé.' },
          { id: '3.8', title: '3.8 - Descrição do Ticket', content: 'O único campo onde o método realmente acontece.\n\nTodos os campos anteriores servem para classificação. A descrição é o único espaço onde existe possibilidade de diferenciação.\n\nO QUE NÃO FAZER:\n❌ Acusar, confessar, implorar, escrever textos emocionais ou fazer ameaças.\n\nO OBJETIVO DA DESCRIÇÃO:\n✅ parecer escrita por alguém calmo;\n✅ demonstrar organização;\n✅ solicitar análise;\n✅ evitar palavras que acionem respostas automáticas.\n\nRECOMENDAÇÃO MAIS IMPORTANTE:\nEmbora seja possível escrever sua própria descrição, isso aumenta a chance de erros. A recomendação deste método é utilizar um dos modelos prontos disponibilizados no próximo módulo.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'MODELOS PRONTOS',
        description: 'Templates estratégicos de alta conversão.',
        lessons: [
          { id: 'm4-1', title: 'Modelo 1 - Diagnóstico Técnico', template: 'Prezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.' },
          { id: 'm4-2', title: 'Modelo 2 - Suspeita de Falha', template: 'À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.' },
          { id: 'm4-3', title: 'Modelo 3 - Falso Positivo', template: 'Dirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde recentemente, não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a cre em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.' },
          { id: 'm4-4', title: 'Modelo 4 - Auditoria Humana', template: 'Saudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.' },
          { id: 'm4-5', title: 'Modelo 5 - Avaliação Incorreta', template: 'Prezados, minha conta encontra-se inacessível e busco entender o motivo. Acredito que esta situação possa ter sido causada por uma avaliação incorreta de um processo automatizado, visto que sempre zelei por seguir as regras da plataforma. Para resolvermos esta questão, solicito que um especialista de suporte revise o caso manualmente e me comunique os detalhes técnicos que levaram à atual restrição. Agradeço e aguardo um posicionamento.' },
          { id: 'm4-6', title: 'Modelo 6 - Abordagem Técnica', template: 'À equipe de Suporte, submeto este pedido para verificação de uma alteração anômala de privilégios em minha conta, resultando na impossibilidade de login. O ocorrido não condiz com meu padrão de uso, que é totalmente aderente aos Termos de Serviço. Peço, formalmente, a intervenção de um analista para um diagnóstico preciso e o restabelecimento do meu acesso. Estou à disposição para cooperar com o processo de análise.' },
          { id: 'm4-rules', title: 'Regras Fundamentais', content: 'Antes de utilizar qualquer modelo, você precisa entender algumas regras fundamentais:\n\nFAÇA:\n✅ Utilize apenas um modelo por tentativa;\n✅ Mantenha exatamente o tom do texto;\n✅ Escolha o modelo mais compatível com sua situação;\n✅ Aguarde o prazo correto após o envio.\n\nNUNCA FAÇA:\n❌ Misturar dois modelos;\n❌ Adicionar emoção ou fazer ameaças;\n❌ Alterar completamente a estrutura;\n❌ Inserir acusações;\n❌ Copiar o mesmo texto diversas vezes.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'APÓS ENVIAR O TICKET',
        description: 'Gestão de silêncio e janelas de resposta.',
        lessons: [
          { id: '5.1', title: '5.1 - Silêncio Operacional', content: 'O erro mais comum acontece depois do envio.\n\nDepois de enviar o ticket, muitas pessoas acreditam que precisam continuar agindo. Na prática, o excesso de ação produz o efeito contrário.\n\nAPÓS O ENVIO:\n- aguarde pelo menos 72 horas;\n- o período ideal é entre 7 e 10 dias;\n- evite qualquer tentativa de reforço antes desse prazo.\n\nNÃO FAÇA ISSO:\n❌ Enviar outro ticket no mesmo dia ou criar novas solicitações após algumas horas.\n❌ Reenviar o mesmo texto diversas vezes.\n\nREGRA PRINCIPAL:\nDepois de enviar o ticket, sua melhor estratégia passa a ser esperar.' },
          { id: '5.2', title: '5.2 - Erros Fatais', content: 'Como destruir sua própria tentativa em poucos minutos.\n\nApós o envio, existem alguns comportamentos que aumentam significativamente a probabilidade de respostas automáticas.\n\nNUNCA FAÇA:\n❌ Abrir vários tickets simultaneamente ou utilizar e-mails diferentes.\n❌ Alterar categorias apenas para "testar".\n❌ Enviar mensagens emocionais, discutir com o suporte ou fazer ameaças.\n\nO objetivo do método não é chamar atenção. O objetivo é parecer uma solicitação legítima que merece análise.' },
          { id: '5.3', title: '5.3 - Nova Tentativa', content: 'O momento correto para uma nova tentativa.\n\nExiste apenas uma situação em que uma nova tentativa pode ser considerada:\n✅ Passaram pelo menos 7 dias e não houve resposta;\nOU\n✅ A resposta recebida foi claramente automática.\n\nSE DECIDIR TENTAR NOVAMENTE:\n- utilize outro modelo de ticket;\n- altere levemente o assunto;\n- não reutilize exatamente o mesmo texto.\n\nO QUE NUNCA FAZER:\n❌ Copiar e colar o ticket anterior ou demonstrar frustração.' },
          { id: '5.4', title: '5.4 - Saber Parar', content: 'Saber parar também faz parte da estratégia.\n\nVocê deve considerar interromper as tentativas quando:\n- receber uma resposta final clara e repetida;\n- a plataforma informar que não haverá nova análise;\n- três tentativas bem espaçadas não produzirem qualquer avanço.\n\nPOR QUE PARAR?\nPorque continuar insistindo após esse ponto não gera benefícios. O objetivo deste método não busca quantidade, busca qualidade na tentativa.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALISANDO A RESPOSTA',
        description: 'Decodificação de feedback do suporte.',
        lessons: [
          { id: '6.1', title: '6.1 - Resposta de Bot', content: 'Nem toda resposta significa que alguém realmente leu seu caso.\n\nCARACTERÍSTICAS DE RESPOSTA AUTOMÁTICA:\n✅ Texto extremamente genérico e linguagem padronizada.\n✅ Ausência de detalhes específicos.\n✅ Repetição das informações exibidas no banimento.\n✅ Encerramento imediato do caso.\n\nEXEMPLOS:\n"Após análise, confirmamos que a penalidade foi aplicada corretamente."\n"O sistema detectou violação dos Termos de Serviço."\n\nSE A RESPOSTA NÃO MENCIONA SEU ID OU DATAS, é grande a probabilidade de ser um bot.' },
          { id: '6.2', title: '6.2 - Resposta Humana', content: 'Os sinais de que alguém realmente analisou sua solicitação.\n\nCARACTERÍSTICAS COMUNS:\n✅ Menção ao histórico da conta.\n✅ Referência a informações fornecidas no ticket.\n✅ Solicitação de documentos ou dados adicionais.\n✅ Linguagem menos padronizada.\n\nO QUE ISSO SIGNIFICA?\nSignifica que sua solicitação ultrapassou a triagem automática. Agora, o objetivo é não atrapalhá-la com textos enormes ou emoção.' },
          { id: '6.3', title: '6.3 - Ação p/ Bot', content: 'A pior reação possível é responder imediatamente.\n\nSE A RESPOSTA FOI AUTOMÁTICA:\n✅ Não responda imediatamente nem tente discutir.\n✅ Aguarde pelo menos 7 dias.\n\nAPÓS ESSE PERÍODO:\nVocê pode considerar iniciar uma nova tentativa organizada com outro modelo. Você está tentando sair do ciclo automático, não discutir com ele.' },
          { id: '6.4', title: '6.4 - Ação p/ Humano', content: 'Quando existe leitura humana, menos é mais.\n\nFAÇA:\n✅ Aguarde o prazo informado e responda apenas o solicitado.\n✅ Utilize respostas objetivas e linguagem técnica.\n\nNÃO FAÇA:\n❌ Recontar toda a história ou escrever textos emocionais.\n❌ Pressionar por velocidade ou adicionar informações desnecessárias.\n\nREGRA PRINCIPAL: Responda apenas a pergunta feita.' }
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
      description: 'Exclusive tricks and strategies to assist in your account recovery process.',
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
      safetyText: 'Success depends on operational silence. Duplicate contacts result in permanent case closure.',
      systemActive: 'PROTOCOL ACTIVE',
      waitDays: 'IF ATTEMPT FAILED, WAIT +7 DAYS MANDATORY BEFORE NEW CYCLE.',
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
          { id: '1.1', title: '1.1 - Automatic Ban', content: 'Identification of systemic patterns detected by monitoring software without human intervention.' },
          { id: '1.2', title: '1.2 - Manual Ban', content: 'Decision made after report and review by a human analyst.' },
          { id: '1.3', title: '1.3 - Recidivist Ban', content: 'When the account already has previous records. System tolerance is much lower.' },
          { id: '1.4', title: '1.4 - Quick Summary', content: '- Automatic Ban: Generic messages (High chance)\n- Manual Ban: Specific messages (Low chance)\n- Recidivist: Previous history (Very low chance)' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MODULE 2',
        title: 'TICKET PREPARATION',
        description: 'Logistics and pre-send strategy.',
        lessons: [
          { id: '2.1', title: '2.1 - Official Channels', content: 'Requests must be sent exclusively through official support. Link: https://ffsuporte.garena.com/support/tickets/new' },
          { id: '2.2', title: '2.2 - Right Category', content: 'Select neutral categories to avoid automatic closing.' },
          { id: '2.3', title: '2.3 - Technical Data', content: 'Fill ID and Nickname with absolute precision.' },
          { id: '2.4', title: '2.4 - Message Rules', content: 'Use formal language. Avoid caps lock, emojis, or threats.' },
          { id: '2.5', title: '2.5 - Final Checklist', content: 'The ticket is unique. Before sending, review everything. Strategy ends at sending. Operational silence is mandatory.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MODULE 3',
        title: 'STEP BY STEP',
        description: 'Detailed filling protocol.',
        lessons: [
          { id: '3.1', title: '3.1 - Selection Option', content: 'The first decision that defines the process. Avoid categories like "unauthorized software". Choose "Recover account" instead.' },
          { id: '3.2', title: '3.2 - Requester Field', content: 'Identification of the requester. Use a valid email you have access to.' },
          { id: '3.3', title: '3.3 - Strategic Subject', content: 'Avoid emotional terms. Use technical subjects like "Account access verification request".' },
          { id: '3.4', title: '3.4 - Nick Precision', content: 'Must be exactly as it appears in-game. No nicknames or abbreviations.' },
          { id: '3.5', title: '3.5 - Account ID', content: 'The most important data. Copy from official source. No errors allowed.' },
          { id: '3.6', title: '3.6 - Suspension Status', content: 'Never invent info. If it is permanent, mark permanent.' },
          { id: '3.7', title: '3.7 - Date and Coherence', content: 'System crosses dates. Use exact or reasonable approximation.' },
          { id: '3.8', title: '3.8 - Ticket Description', content: 'The field where the method happens. Use the provided templates to ensure the correct tone.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MODULE 4',
        title: 'READY TEMPLATES',
        description: 'High conversion strategic templates.',
        lessons: [
          { id: 'm4-1', title: 'Model 1 - Technical Diagnosis', template: 'Dear team, I am writing to request a technical diagnosis regarding a sudden inability to access my account. When trying to connect, I encounter an unexpected restriction that I cannot resolve. I believe it might be a systemic anomaly, as I am aware that my activities have always been in compliance with the Terms of Service. I kindly request a manual verification of my account status and clarification on the nature of this restriction. I remain at your disposal to assist in the investigation.' },
          { id: 'm4-2', title: 'Model 2 - Suspected Failure', template: 'To the technical team, I am reporting an irregularity that prevents my access to the platform. My account became inaccessible without prior notice, and I suspect a failure or an error in some automatic monitoring process. I would like to reiterate that I strictly follow the community guidelines. Therefore, I formally ask an analyst to investigate what happened and provide me with an opinion on the cause of the access problem. I remain available to provide logs or other information.' },
          { id: 'm4-3', title: 'Model 3 - False Positive', template: 'Dear support, I am writing regarding an access issue. I believe this is a technical error or a false positive. I request an integrity check by a team member.' },
          { id: 'm4-4', title: 'Model 4 - Human Audit', template: 'Greetings. I need assistance with a failure blocking my access. I request a human audit of my account activity.' },
          { id: 'm4-5', title: 'Model 5 - Incorrect Evaluation', template: 'Dear team, my account is inaccessible. I believe this was caused by an incorrect automated evaluation. Please review manually.' },
          { id: 'm4-6', title: 'Model 6 - Technical Approach', template: 'To Support, I submit this request for verification of an anomalous change in privileges. Please diagnose and restore access.' },
          { id: 'm4-rules', title: 'Golden Rules', content: 'Use only one model per attempt. Keep the tone. Wait the correct period. Never mix models or add emotion.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MODULE 5',
        title: 'AFTER SENDING',
        description: 'Management of silence.',
        lessons: [
          { id: '5.1', title: '5.1 - Operational Silence', content: 'The most common error happens after sending. Wait at least 72 hours. Ideal is 7-10 days. No follow-ups.' },
          { id: '5.2', title: '5.2 - Fatal Errors', content: 'Opening multiple tickets or using different emails. Argument with support or threats destroy your chance.' },
          { id: '5.3', title: '5.3 - New Attempt', content: 'Only after 7 days without response or if the response was clearly automatic. Use another template.' },
          { id: '5.4', title: '5.4 - When to Stop', content: 'Stop after 3 unsuccessful well-spaced attempts or if final decision is explicitly stated.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MODULE 6',
        title: 'ANALYZING RESPONSE',
        description: 'Decoding support feedback.',
        lessons: [
          { id: '6.1', title: '6.1 - Bot Response', content: 'Generic text without specific details or account data. Probability of bot is high if no ID mentioned.' },
          { id: '6.2', title: '6.2 - Human Response', content: 'Mentions account history or asks for additional data. Means you passed the automated screen.' },
          { id: '6.3', title: '6.3 - Action for Bot', content: 'Do not reply immediately. Wait at least 7 days and try a different approach.' },
          { id: '6.4', title: '6.4 - Action for Human', content: 'When there is human reading, less is more. Reply only to what was asked. No excesses.' }
        ]
      }
    ]
  },
  es: {
    selectLanguage: 'Seleccionar Idioma',
    protocolInitialization: 'Inicialización // Seleccione Región',
    hero: {
      title: 'UNBAN',
      titleAccent: 'STRATEGY',
      description: 'Consejos e estrategias exclusivas para recuperar su cuenta.',
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
      safetyText: 'El éxito depende del silencio operacional. Contactos duplicados resultan en el cierre definitivo.',
      systemActive: 'ACTIVO',
      waitDays: 'SI FALLÓ, ESPERE +7 DÍAS ANTES DE INTENTAR DE NUEVO.',
      officialChannel: 'Canal Oficial',
      copyTemplate: 'Copiar'
    },
    modules: [
      {
        id: 'module-1',
        tag: 'MÓDULO 1',
        title: 'ENTIENDA SU BAN',
        description: 'Identificación técnica de la restricción.',
        lessons: [
          { id: '1.1', title: '1.1 - Ban Automático', content: 'Patrones detectados por software sin intervención humana.' },
          { id: '1.2', title: '1.2 - Ban Manual', content: 'Decisión tras revisión humana.' },
          { id: '1.3', title: '1.3 - Reincidente', content: 'Cuando ya existen sanciones previas. Menos tolerancia.' },
          { id: '1.4', title: '1.4 - Resumen', content: '- Auto: Rápido (Alta)\n- Manual: Específico (Baja)\n- Reincidente: Historial (Muy baja)' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MÓDULO 2',
        title: 'PREPARACIÓN',
        description: 'Logística y estrategia.',
        lessons: [
          { id: '2.1', title: '2.1 - Canales Oficiales', content: 'Solo soporte oficial. Link: https://ffsuporte.garena.com/support/tickets/new' },
          { id: '2.2', title: '2.2 - Categoría', content: 'Use categorías neutras para evitar cierre automático.' },
          { id: '2.3', title: '2.3 - Datos Técnicos', content: 'ID y Nick con precisión absoluta.' },
          { id: '2.4', title: '2.4 - Reglas Mensaje', content: 'Formal, objetivo, sin emojis ni amenazas.' },
          { id: '2.5', title: '2.5 - Checklist', content: 'El ticket es único. Revise todo antes de enviar. El silencio es obligatorio.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'PASO A PASO',
        description: 'Protocolo de llenado.',
        lessons: [
          { id: '3.1', title: '3.1 - Opción', content: 'Evite categorías de "software no autorizado". Elija opciones neutras.' },
          { id: '3.2', title: '3.2 - Requester', content: 'Email válido para contacto.' },
          { id: '3.3', title: '3.3 - Asunto', content: 'Técnico. Ej: "Solicitud de verificación de acceso".' },
          { id: '3.4', title: '3.4 - Nick', content: 'Exactamente como en el juego.' },
          { id: '3.5', title: '3.5 - ID', content: 'El dato más importante. Sin errores.' },
          { id: '3.6', title: '3.6 - Status', content: 'Fiel al mensaje de la plataforma.' },
          { id: '3.7', title: '3.7 - Fecha', content: 'Precisa o aproximación razonable.' },
          { id: '3.8', title: '3.8 - Descripción', content: 'Use las plantillas estratégicas del siguiente módulo.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'PLANTILLAS',
        description: 'Templates de alta conversión.',
        lessons: [
          { id: 'm4-1', title: 'Modelo 1 - Diagnóstico', template: 'Estimados, escribo para solicitar un diagnóstico técnico respecto a una súbita imposibilidad de acceder a mi cuenta. Al intentar conectar, encuentro una restricción inesperada que no puedo resolver. Creo que se trata de una anomalía sistémica, ya que soy consciente de que mis actividades siempre han estado en conformidad con los Términos de Servicio. Solicito amablemente una verificación manual del estado de mi cuenta y una aclaración sobre la naturaleza de esta restricción. Quedo a su disposición para ayudar en la investigación.' },
          { id: 'm4-2', title: 'Modelo 2 - Falla', template: 'Al equipo técnico, vengo a reportar una irregularidad que impide mi acceso a la plataforma. Mi cuenta se volvió inaccesible sin previo aviso, y sospecho de una falla o un error en algún proceso de monitoreo automático. Quisiera reiterar que sigo estrictamente las directrices de la comunidad. Por lo tanto, pido formalmente que un analista investigue lo ocurrido y me brinde un parecer sobre la causa del problema de acceso. Permanezco disponible para proporcionar logs u otra información.' },
          { id: 'm4-3', title: 'Modelo 3 - Falso Positivo', template: 'Estimados, solicito soporte por problema de acceso. Creo que es un error técnico. Pido revisión de integridad.' },
          { id: 'm4-4', title: 'Modelo 4 - Auditoría', template: 'Saludos. Necesito asistencia por bloqueo de cuenta. Solicito auditoría humana.' },
          { id: 'm4-5', title: 'Modelo 5 - Evaluación Incorrecta', template: 'Estimados, mi cuenta es inaccesible. Creo que es un error de evaluación automática. Por favor revisen manualmente.' },
          { id: 'm4-6', title: 'Modelo 6 - Técnico', template: 'Al equipo, someto este pedido para verificación de alteración de privilegios. Pido diagnóstico preciso.' },
          { id: 'm4-rules', title: 'Reglas de Oro', content: 'Use un solo modelo. Mantenga el tono. Espere el plazo. No mezcle modelos.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'POST-ENVÍO',
        description: 'Gestión del silencio.',
        lessons: [
          { id: '5.1', title: '5.1 - Silencio', content: 'Espere de 7 a 10 días. No insista.' },
          { id: '5.2', title: '5.2 - Errores', content: 'Abrir varios tickets cancela su oportunidad. No discuta.' },
          { id: '5.3', title: '5.3 - Reintento', content: 'Solo tras 7 días de silencio total. Cambie el modelo.' },
          { id: '5.4', title: '5.4 - Saber Parar', content: 'Tras 3 intentos fallidos, respete la decisión.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANÁLISIS',
        description: 'Decodificación.',
        lessons: [
          { id: '6.1', title: '6.1 - Bot', content: 'Texto genérico sin datos. Alta probabilidad si no hay ID.' },
          { id: '6.2', title: '6.2 - Humano', content: 'Menciona datos o pide logs. Significa que pasó el filtro.' },
          { id: '6.3', title: '6.3 - Acción Bot', content: 'No responda. Espere 7 días.' },
          { id: '6.4', title: '6.4 - Acción Humano', content: 'Responda solo lo solicitado. Menos es más.' }
        ]
      }
    ]
  }
};
