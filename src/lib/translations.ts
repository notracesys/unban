
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
          { id: '2.5', title: 'Aula 2.5 - Checklist Final', content: 'Revise tudo. A estratégia termina no envio. Silêncio operacional é obrigatório após clicar em enviar.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'PREENCHIMENTO PASSO A PASSO',
        description: 'Protocolo detalhado de preenchimento.',
        lessons: [
          { id: '3.1', title: '3.1 - Opção de Seleção', content: 'Escolha "Quero recuperar a conta do Free Fire" por ser a mais neutra.' },
          { id: '3.2', title: '3.2 - Campo Requester', content: 'Apenas seu e-mail de contato válido.' },
          { id: '3.3', title: '3.3 - Assunto Estratégico', content: 'Ex: "Solicitação de verificação referente ao acesso da conta".' },
          { id: '3.4', title: '3.4 - Precisão do Nick', content: 'Exatamente como está no jogo.' },
          { id: '3.5', title: '3.5 - ID da Conta', content: 'O dado mais importante. Sem erros.' },
          { id: '3.6', title: '3.6 - Status de Suspensão', content: 'Seja fiel à mensagem exibida pela plataforma.' },
          { id: '3.7', title: '3.7 - Data e Coerência', content: 'Informe a data mais aproximada possível.' },
          { id: '3.8', title: '3.8 - Descrição do Ticket', content: 'Use os modelos do próximo módulo para garantir o tom correto.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'MODELOS PRONTOS',
        description: 'Templates estratégicos de alta conversão.',
        lessons: [
          { id: 'm4-1', title: 'Modelo 1 - Diagnóstico Técnico', template: 'Prezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.' },
          { id: 'm4-2', title: 'Modelo 2 - Suspeita de Falha', template: 'À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'APÓS ENVIAR O TICKET',
        description: 'Gestão de silêncio e janelas de resposta.',
        lessons: [
          { id: '5.1', title: '5.1 - Silêncio Operacional', content: 'Aguarde de 7 a 10 dias. Jamais envie tickets de reforço.' },
          { id: '5.2', title: '5.2 - Erros Fatais', content: 'Abrir múltiplos tickets ou discutir com o suporte cancela sua chance.' },
          { id: '5.3', title: '5.3 - Nova Tentativa', content: 'Apenas após 7 dias de silêncio total. Mude o modelo se for tentar novamente.' },
          { id: '5.4', title: '5.4 - Saber Parar', content: 'Após 3 tentativas sem sucesso, respeite a decisão para não banir o dispositivo.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALISANDO A RESPOSTA',
        description: 'Decodificação de feedback do suporte.',
        lessons: [
          { id: '6.1', title: '6.1 - Resposta de Bot', content: 'Texto genérico, frio e sem dados da conta.' },
          { id: '6.2', title: '6.2 - Resposta Humana', content: 'Menciona seu caso específico ou pede logs.' },
          { id: '6.3', title: '6.3 - Ação p/ Bot', content: 'Não responda. Aguarde 7 dias e mude a estratégia.' },
          { id: '6.4', title: '6.4 - Ação p/ Humano', content: 'Responda apenas o solicitado, sem excessos.' }
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
          { id: '1.2', title: '1.2 - Manual Ban', content: 'Decision made after report and review by a human analyst from the support team.' },
          { id: '1.3', title: '1.3 - Recidivist Ban', content: 'When the account already has previous punishment records. System tolerance is much lower.' },
          { id: '1.4', title: '1.4 - Quick Summary', content: '- Automatic Ban: Generic and fast messages (Chance: High)\n- Manual Ban: Specific messages (Chance: Low)\n- Recidivist: Previous history (Chance: Very low)' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MODULE 2',
        title: 'TICKET PREPARATION',
        description: 'Logistics and pre-send strategy.',
        lessons: [
          { id: '2.1', title: '2.1 - Official Channels', content: 'Requests must be sent exclusively through official support. Do not use social media.\n\nOfficial Link: https://ffsuporte.garena.com/support/tickets/new' },
          { id: '2.2', title: '2.2 - Right Category', content: 'Select neutral categories that allow for review. Avoid options that already confirm the penalty.' },
          { id: '2.3', title: '2.3 - Technical Data', content: 'Fill ID and Nickname with absolute precision. Tech fields should contain only tech data.' },
          { id: '2.4', title: '2.4 - Message Rules', content: 'Use formal and organized language. Avoid caps lock, emojis, or threats.' },
          { id: '2.5', title: '2.5 - Final Checklist', content: 'Review everything. Strategy ends at sending. Operational silence is mandatory after clicking send.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MODULE 3',
        title: 'STEP BY STEP',
        description: 'Detailed filling protocol.',
        lessons: [
          { id: '3.1', title: '3.1 - Selection Option', content: 'Choose "I want to recover my account" as it is the most neutral.' },
          { id: '3.2', title: '3.2 - Requester Field', content: 'Only your valid contact email.' },
          { id: '3.3', title: '3.3 - Strategic Subject', content: 'Ex: "Account access verification request".' },
          { id: '3.4', title: '3.4 - Nick Precision', content: 'Exactly as it is in-game.' },
          { id: '3.5', title: '3.5 - Account ID', content: 'The most important data. No errors.' },
          { id: '3.6', title: '3.6 - Suspension Status', content: 'Be true to the message displayed by the platform.' },
          { id: '3.7', title: '3.7 - Date and Coherence', content: 'Report the closest date possible.' },
          { id: '3.8', title: '3.8 - Ticket Description', content: 'Use templates from the next module to ensure the correct tone.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MODULE 4',
        title: 'READY TEMPLATES',
        description: 'High conversion strategic templates.',
        lessons: [
          { id: 'm4-1', title: 'Model 1 - Technical Diagnosis', template: 'Dear team, I am writing to request a technical diagnosis regarding a sudden inability to access my account. When trying to connect, I encounter an unexpected restriction that I cannot resolve. I believe it might be a systemic anomaly, as I am aware that my activities have always been in compliance with the Terms of Service. I kindly request a manual verification of my account status and clarification on the nature of this restriction. I remain at your disposal to assist in the investigation.' },
          { id: 'm4-2', title: 'Model 2 - Suspected Failure', template: 'To the technical team, I am reporting an irregularity that prevents my access to the platform. My account became inaccessible without prior notice, and I suspect a failure or an error in some automatic monitoring process. I would like to reiterate that I strictly follow the community guidelines. Therefore, I formally ask an analyst to investigate what happened and provide me with an opinion on the cause of the access problem. I remain available to provide logs or other information.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MODULE 5',
        title: 'AFTER SENDING',
        description: 'Management of silence and response windows.',
        lessons: [
          { id: '5.1', title: '5.1 - Operational Silence', content: 'Wait 7 to 10 days. Never send follow-up tickets.' },
          { id: '5.2', title: '5.2 - Fatal Errors', content: 'Opening multiple tickets or arguing with support cancels your chance.' },
          { id: '5.3', title: '5.3 - New Attempt', content: 'Only after 7 days of total silence. Change the template if trying again.' },
          { id: '5.4', title: '5.4 - When to Stop', content: 'After 3 unsuccessful attempts, respect the decision to avoid device banning.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MODULE 6',
        title: 'ANALYZING RESPONSE',
        description: 'Decoding support feedback.',
        lessons: [
          { id: '6.1', title: '6.1 - Bot Response', content: 'Generic, cold text without account data.' },
          { id: '6.2', title: '6.2 - Human Response', content: 'Mentions your specific case or asks for logs.' },
          { id: '6.3', title: '6.3 - Action for Bot', content: 'Do not reply. Wait 7 days and change strategy.' },
          { id: '6.4', title: '6.4 - Action for Human', content: 'Reply only to what was requested, no excesses.' }
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
      description: 'Consejos y estrategias exclusivas para recuperar su cuenta.',
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
          { id: '1.1', title: '1.1 - Ban Automático', content: 'Detección por software sin intervención humana.' },
          { id: '1.2', title: '1.2 - Ban Manual', content: 'Decisión tras revisión humana.' },
          { id: '1.3', title: '1.3 - Reincidente', content: 'Cuando ya existen sanciones previas. Menos tolerancia.' },
          { id: '1.4', title: '1.4 - Resumen', content: '- Auto: Rápido y genérico (Mayor)\n- Manual: Específico (Baja)\n- Reincidente: Historial (Muy baja)' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MÓDULO 2',
        title: 'PREPARACIÓN',
        description: 'Logística y estrategia.',
        lessons: [
          { id: '2.1', title: '2.1 - Canales Oficiales', content: 'Solo soporte oficial. No use redes sociales.\n\nLink: https://ffsuporte.garena.com/support/tickets/new' },
          { id: '2.2', title: '2.2 - Categoría', content: 'Use categorías neutras para evitar cierre automático.' },
          { id: '2.3', title: '2.3 - Datos Técnicos', content: 'ID y Nick con precisión absoluta.' },
          { id: '2.4', title: '2.4 - Reglas Mensaje', content: 'Formal, objetivo, sin emojis ni amenazas.' },
          { id: '2.5', title: '2.5 - Checklist', content: 'Revise todo. El silencio es obligatorio tras el envío.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'PASO A PASO',
        description: 'Protocolo de llenado.',
        lessons: [
          { id: '3.1', title: '3.1 - Opción', content: 'Seleccione "Quiero recuperar mi cuenta".' },
          { id: '3.2', title: '3.2 - Requester', content: 'Solo su email válido.' },
          { id: '3.3', title: '3.3 - Asunto', content: 'Técnico. Ej: "Solicitud de verificación de acceso".' },
          { id: '3.4', title: '3.4 - Nick', content: 'Exactamente como en el juego.' },
          { id: '3.5', title: '3.5 - ID', content: 'El dato más importante.' },
          { id: '3.6', title: '3.6 - Status', content: 'Fiel al mensaje de la plataforma.' },
          { id: '3.7', title: '3.7 - Fecha', content: 'Lo más aproximada posible.' },
          { id: '3.8', title: '3.8 - Descripción', content: 'Use las plantillas del siguiente módulo.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'PLANTILLAS',
        description: 'Templates de alta conversión.',
        lessons: [
          { id: 'm4-1', title: 'Modelo 1 - Diagnóstico', template: 'Estimados, escribo para solicitar un diagnóstico técnico respecto a una súbita imposibilidad de acceder a mi cuenta. Al intentar conectar, encuentro una restricción inesperada que no puedo resolver. Creo que se trata de una anomalía sistémica, ya que soy consciente de que mis actividades siempre han estado en conformidad con los Términos de Servicio. Solicito amablemente una verificación manual del estado de mi cuenta y una aclaración sobre la naturaleza de esta restricción. Quedo a su disposición para ayudar en la investigación.' },
          { id: 'm4-2', title: 'Modelo 2 - Falla', template: 'Al equipo técnico, vengo a reportar una irregularidad que impide mi acceso a la plataforma. Mi cuenta se volvió inaccesible sin previo aviso, y sospecho de una falla o un error en algún proceso de monitoreo automático. Quisiera reiterar que sigo estrictamente las directrices de la comunidad. Por lo tanto, pido formalmente que un analista investigue lo ocurrido y me brinde un parecer sobre la causa del problema de acceso. Permanezco disponible para proporcionar logs u otra información.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'POST-ENVÍO',
        description: 'Gestión del silencio.',
        lessons: [
          { id: '5.1', title: '5.1 - Silencio', content: 'Espere de 7 a 10 días. No insista.' },
          { id: '5.2', title: '5.2 - Errores', content: 'Abrir varios tickets cancela su oportunidad.' },
          { id: '5.3', title: '5.3 - Reintento', content: 'Solo tras 7 días de silencio total.' },
          { id: '5.4', title: '5.4 - Saber Parar', content: 'Tras 3 intentos, respete la decisión.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANÁLISIS',
        description: 'Decodificación.',
        lessons: [
          { id: '6.1', title: '6.1 - Bot', content: 'Texto genérico sin datos.' },
          { id: '6.2', title: '6.2 - Humano', content: 'Menciona datos o pide logs.' },
          { id: '6.3', title: '6.3 - Acción Bot', content: 'No responda. Espere 7 días.' },
          { id: '6.4', title: '6.4 - Acción Humano', content: 'Responda solo lo solicitado.' }
        ]
      }
    ]
  }
};
