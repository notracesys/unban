
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
    },
    modules: [
      {
        id: 'module-1',
        tag: 'MÓDULO 1',
        title: 'ENTENDA SEU BANIMENTO',
        description: 'Identificação técnica da restrição aplicada.',
        lessons: [
          { id: '1.1', title: 'Aula 1.1 - O que é banimento automático' },
          { id: '1.2', title: 'Aula 1.2 - O que é banimento manual' },
          { id: '1.3', title: 'Aula 1.3 - O que é banimento reincidente' },
          { id: '1.4', title: 'Aula 1.4 - Como identificar qual é o seu caso' },
        ]
      },
      {
        id: 'module-2',
        tag: 'MÓDULO 2',
        title: 'PREPARAÇÃO DO TICKET',
        description: 'Logística e estratégia pré-envio.',
        lessons: [
          { id: '2.1', title: 'Aula 2.1 - Onde enviar o ticket' },
          { id: '2.2', title: 'Aula 2.2 - Escolhendo a categoria correta' },
          { id: '2.3', title: 'Aula 2.3 - Como preencher os dados' },
          { id: '2.4', title: 'Aula 2.4 - Revisão antes do envio' },
          { id: '2.5', title: 'Aula 2.5 - O erro de enviar vários tickets' },
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'PREENCHIMENTO PASSO A PASSO',
        description: 'Protocolo detalhado de preenchimento.',
        lessons: [
          { id: '3.1', title: 'Aula 3.1 - Qual opção selecionar' },
          { id: '3.2', title: 'Aula 3.2 - Campo Requester' },
          { id: '3.3', title: 'Aula 3.3 - Campo Assunto' },
          { id: '3.4', title: 'Aula 3.4 - Nick do jogo' },
          { id: '3.5', title: 'Aula 3.5 - ID da conta' },
          { id: '3.6', title: 'Aula 3.6 - Tempo de suspensão' },
          { id: '3.7', title: 'Aula 3.7 - Data do ocorrido' },
          { id: '3.8', title: 'Aula 3.8 - Descrição do ticket' },
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'MODELOS PRONTOS',
        description: 'Templates estratégicos de alta conversão.',
        lessons: [
          { id: 'm4-rules', title: 'Regras de Ouro - Leia antes de copiar' },
          { id: 'm4-1', title: 'Ticket Modelo 1 - Diagnóstico Técnico' },
          { id: 'm4-2', title: 'Ticket Modelo 2 - Suspeita de Falha' },
          { id: 'm4-3', title: 'Ticket Modelo 3 - Falso Positivo' },
          { id: 'm4-4', title: 'Ticket Modelo 4 - Auditoria Humana' },
          { id: 'm4-5', title: 'Ticket Modelo 5 - Avaliação Incorreta' },
          { id: 'm4-6', title: 'Ticket Modelo 6 - Verificação Anômala' },
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'APÓS ENVIAR O TICKET',
        description: 'Gestão de silêncio e janelas de resposta.',
        lessons: [
          { id: '5.1', title: 'Aula 5.1 - O erro mais comum após o envio' },
          { id: '5.2', title: 'Aula 5.2 - Como destruir sua própria tentativa' },
          { id: '5.3', title: 'Aula 5.3 - O momento correto para novo ticket' },
          { id: '5.4', title: 'Aula 5.4 - Saber parar faz parte da estratégia' },
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALISANDO A RESPOSTA',
        description: 'Decodificação de feedback do suporte.',
        lessons: [
          { id: '6.1', title: 'Aula 6.1 - Como identificar resposta automática' },
          { id: '6.2', title: 'Aula 6.2 - Como identificar resposta humana' },
          { id: '6.3', title: 'Aula 6.3 - O que fazer em cada caso' },
          { id: '6.4', title: 'Aula 6.4 - Erros que destroem a tentativa' },
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
      completeModule: 'Complete Module and Unlock Next',
      moduleCompleted: 'Module Completed',
      copyToClipboard: 'Copied to clipboard',
      copyDescription: 'The template is ready to be pasted into support.',
      dataStream: 'Data Stream // Access Granted',
      decrypting: 'File decrypting process...',
      securityGuidelines: 'Security Guidelines',
      criticalAttention: 'Critical Attention',
      safetyText: 'Success depends on operational silence post-submission. Duplicate contacts result in permanent case closure.',
      systemActive: 'PROTOCOL ACTIVE',
      waitDays: 'IF THE ATTEMPT PRODUCED NO RESULT, MANDATORY WAIT +7 DAYS BEFORE NEW CYCLE.',
    },
    modules: [
      {
        id: 'module-1',
        tag: 'MODULE 1',
        title: 'UNDERSTAND YOUR BAN',
        description: 'Technical identification of the applied restriction.',
        lessons: [
          { id: '1.1', title: 'Lesson 1.1 - What is an automatic ban' },
          { id: '1.2', title: 'Lesson 1.2 - What is a manual ban' },
          { id: '1.3', title: 'Lesson 1.3 - What is a recidivist ban' },
          { id: '1.4', title: 'Lesson 1.4 - How to identify your case' },
        ]
      },
      {
        id: 'module-2',
        tag: 'MODULE 2',
        title: 'TICKET PREPARATION',
        description: 'Pre-submission logistics and strategy.',
        lessons: [
          { id: '2.1', title: 'Lesson 2.1 - Where to send the ticket' },
          { id: '2.2', title: 'Lesson 2.2 - Choosing the right category' },
          { id: '2.3', title: 'Lesson 2.3 - How to fill in the data' },
          { id: '2.4', title: 'Lesson 2.4 - Review before sending' },
          { id: '2.5', title: 'Lesson 2.5 - The error of multiple tickets' },
        ]
      },
      {
        id: 'module-3',
        tag: 'MODULE 3',
        title: 'STEP-BY-STEP FILLING',
        description: 'Detailed filling protocol.',
        lessons: [
          { id: '3.1', title: 'Lesson 3.1 - Which option to select' },
          { id: '3.2', title: 'Lesson 3.2 - Requester field' },
          { id: '3.3', title: 'Lesson 3.3 - Subject field' },
          { id: '3.4', title: 'Lesson 3.4 - Game Nickname' },
          { id: '3.5', title: 'Lesson 3.5 - Account ID' },
          { id: '3.6', title: 'Lesson 3.6 - Suspension Time' },
          { id: '3.7', title: 'Lesson 3.7 - Event Date' },
          { id: '3.8', title: 'Lesson 3.8 - Ticket Description' },
        ]
      },
      {
        id: 'module-4',
        tag: 'MODULE 4',
        title: 'READY TEMPLATES',
        description: 'High-conversion strategic templates.',
        lessons: [
          { id: 'm4-rules', title: 'Golden Rules - Read before copying' },
          { id: 'm4-1', title: 'Template 1 - Technical Diagnosis' },
          { id: 'm4-2', title: 'Template 2 - Suspected Failure' },
          { id: 'm4-3', title: 'Template 3 - False Positive' },
          { id: 'm4-4', title: 'Template 4 - Human Audit' },
          { id: 'm4-5', title: 'Template 5 - Incorrect Evaluation' },
          { id: 'm4-6', title: 'Template 6 - Anomalous Verification' },
        ]
      },
      {
        id: 'module-5',
        tag: 'MODULE 5',
        title: 'AFTER SENDING TICKET',
        description: 'Silence management and response windows.',
        lessons: [
          { id: '5.1', title: 'Lesson 5.1 - Common error after sending' },
          { id: '5.2', title: 'Lesson 5.2 - How to destroy your attempt' },
          { id: '5.3', title: 'Lesson 5.3 - Right time for new ticket' },
          { id: '5.4', title: 'Lesson 5.4 - Knowing when to stop' },
        ]
      },
      {
        id: 'module-6',
        tag: 'MODULE 6',
        title: 'ANALYZING THE RESPONSE',
        description: 'Support feedback decoding.',
        lessons: [
          { id: '6.1', title: 'Lesson 6.1 - Identifying auto-replies' },
          { id: '6.2', title: 'Lesson 6.2 - Identifying human replies' },
          { id: '6.3', title: 'Lesson 6.3 - What to do in each case' },
          { id: '6.4', title: 'Lesson 6.4 - Errors that kill the attempt' },
        ]
      }
    ]
  },
  es: {
    selectLanguage: 'Seleccionar Idioma',
    protocolInitialization: 'Inicialización del Protocolo // Seleccione Región',
    hero: {
      title: 'UNBAN',
      titleAccent: 'STRATEGY',
      description: 'Consejos y estrategias exclusivas para ayudar en su proceso de recuperación de cuentas.',
    },
    ui: {
      locked: 'Bloqueado - Complete el módulo anterior',
      accessModule: 'Acceder al Módulo',
      completeModule: 'Completar Módulo y Desbloquear Siguiente',
      moduleCompleted: 'Módulo Completado',
      copyToClipboard: 'Copiado al portapapeles',
      copyDescription: 'La plantilla está lista para ser pegada en el soporte.',
      dataStream: 'Data Stream // Acceso Concedido',
      decrypting: 'Archivo en proceso de descifrado...',
      securityGuidelines: 'Pautas de Seguridad',
      criticalAttention: 'Atención Crítica',
      safetyText: 'El éxito depende del silencio operativo post-envío. Contactos duplicados resultan en el cierre permanente del caso.',
      systemActive: 'PROTOCOLO ACTIVO',
      waitDays: 'SI EL INTENTO NO PRODUJO RESULTADO, ESPERA OBLIGATORIA +7 DÍAS ANTES DE NUEVO CICLO.',
    },
    modules: [
      {
        id: 'module-1',
        tag: 'MÓDULO 1',
        title: 'ENTIENDA SU BANEO',
        description: 'Identificación técnica de la restricción aplicada.',
        lessons: [
          { id: '1.1', title: 'Clase 1.1 - Qué es baneo automático' },
          { id: '1.2', title: 'Clase 1.2 - Qué es baneo manual' },
          { id: '1.3', title: 'Clase 1.3 - Qué es baneo reincidente' },
          { id: '1.4', title: 'Clase 1.4 - Cómo identificar su caso' },
        ]
      },
      {
        id: 'module-2',
        tag: 'MÓDULO 2',
        title: 'PREPARACIÓN DEL TICKET',
        description: 'Logística y estrategia pre-envío.',
        lessons: [
          { id: '2.1', title: 'Clase 2.1 - Dónde enviar el ticket' },
          { id: '2.2', title: 'Clase 2.2 - Elección de categoría' },
          { id: '2.3', title: 'Clase 2.3 - Cómo completar los datos' },
          { id: '2.4', title: 'Clase 2.4 - Revisión antes del envío' },
          { id: '2.5', title: 'Clase 2.5 - Error de múltiples tickets' },
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'COMPLETADO PASO A PASO',
        description: 'Protocolo detallado de llenado.',
        lessons: [
          { id: '3.1', title: 'Clase 3.1 - Qué opción seleccionar' },
          { id: '3.2', title: 'Clase 3.2 - Campo Requester' },
          { id: '3.3', title: 'Clase 3.3 - Campo Asunto' },
          { id: '3.4', title: 'Clase 3.4 - Nick del juego' },
          { id: '3.5', title: 'Clase 3.5 - ID de la cuenta' },
          { id: '3.6', title: 'Clase 3.6 - Tiempo de suspensión' },
          { id: '3.7', title: 'Clase 3.7 - Fecha del suceso' },
          { id: '3.8', title: 'Clase 3.8 - Descripción del ticket' },
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'PLANTILLAS LISTAS',
        description: 'Plantillas estratégicas de alta conversión.',
        lessons: [
          { id: 'm4-rules', title: 'Reglas de Oro - Leer antes de copiar' },
          { id: 'm4-1', title: 'Modelo 1 - Diagnóstico Técnico' },
          { id: 'm4-2', title: 'Modelo 2 - Sospecha de Fallo' },
          { id: 'm4-3', title: 'Modelo 3 - Falso Positivo' },
          { id: 'm4-4', title: 'Modelo 4 - Auditoría Humana' },
          { id: 'm4-5', title: 'Modelo 5 - Evaluación Incorrecta' },
          { id: 'm4-6', title: 'Modelo 6 - Verificación Anómala' },
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'POST-ENVÍO DEL TICKET',
        description: 'Gestión del silencio y respuesta.',
        lessons: [
          { id: '5.1', title: 'Clase 5.1 - Error común tras el envío' },
          { id: '5.2', title: 'Clase 5.2 - Cómo destruir su intento' },
          { id: '5.3', title: 'Clase 5.3 - Momento para nuevo ticket' },
          { id: '5.4', title: 'Clase 5.4 - Saber cuándo parar' },
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALIZANDO LA RESPUESTA',
        description: 'Decodificación del feedback del soporte.',
        lessons: [
          { id: '6.1', title: 'Clase 6.1 - Identificar respuesta automática' },
          { id: '6.2', title: 'Clase 6.2 - Identificar respuesta humana' },
          { id: '6.3', title: 'Clase 6.3 - Qué hacer en cada caso' },
          { id: '6.4', title: 'Clase 6.4 - Errores que matan el intento' },
        ]
      }
    ]
  }
};
