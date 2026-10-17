
export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    selectLanguage: 'Selecione o Idioma',
    protocolInitialization: 'Inicialização de Protocolo // Selecione a Região',
    hero: {
      title: 'RELATÓRIO DE',
      titleAccent: 'RECUPERAÇÃO',
      description: 'Ferramenta estratégica para gerar seu relatório oficial de recuperação. Siga o passo a passo e envie os dados exatos para análise.',
    },
    form: {
      step1: '1. Identificação de Contato',
      step1Desc: 'Insira um e-mail válido que você tenha acesso imediato.',
      step2: '2. Dados da Conta',
      step2Desc: 'O Nickname deve ser EXATAMENTE igual ao da conta (letras, símbolos, espaços).',
      step3: '3. Identificador Único',
      step3Desc: 'O ID da conta é o dado mais crítico. Revise antes de prosseguir.',
      step4: '4. Relato Real do Ocorrido',
      step4Desc: 'Conte exatamente como aconteceu o banimento. Seja 100% honesto e detalhista.',
      emailLabel: 'E-mail para Retorno',
      nickLabel: 'Nickname (Exato)',
      idLabel: 'ID da Conta',
      reasonLabel: 'Relato do Banimento (Conte a verdade)',
      submitButton: 'GERAR E ENVIAR RELATÓRIO',
      submitting: 'CRIPTOGRAFANDO DADOS...',
      successTitle: 'RELATÓRIO ENVIADO',
      successDesc: 'Seu relatório já foi enviado com sucesso para a equipe do Gaspar. Aguarde o prazo de análise técnica no seu e-mail.',
      successAction: 'VOLTAR AO INÍCIO'
    },
    support: {
      widgetTitle: 'SUPORTE OPERACIONAL',
      widgetDesc: 'Fale diretamente com um analista via Telegram para dúvidas específicas.',
      widgetButton: 'ABRIR CHAT TELEGRAM',
      refundButton: 'SOLICITAR REEMBOLSO'
    },
    ui: {
      securityGuidelines: 'Diretrizes de Segurança',
      criticalAttention: 'Atenção Crítica',
      safetyText: 'O sucesso depende da veracidade absoluta dos dados. Informações falsas resultam no descarte imediato do relatório.',
      systemActive: 'SISTEMA DE ENVIO ATIVO',
      waitDays: 'APÓS O ENVIO, AGUARDE OBRIGATORIAMENTE O PRAZO DE 7 A 10 DIAS PARA RESPOSTA.',
      officialChannel: 'Acessar Canal Oficial',
      premiumSupportTrigger: 'CENTRAL DE SUPORTE PREMIUM (VIP & BYPASS)'
    }
  },
  en: {
    selectLanguage: 'Select Language',
    protocolInitialization: 'Protocol Initialization // Select Region',
    hero: {
      title: 'RECOVERY',
      titleAccent: 'REPORT',
      description: 'Strategic tool to generate your official recovery report. Follow the steps and provide exact data for analysis.',
    },
    form: {
      step1: '1. Contact Identification',
      step1Desc: 'Enter a valid email address that you have immediate access to.',
      step2: '2. Account Data',
      step2Desc: 'The Nickname must be EXACTLY the same as the account (letters, symbols, spaces).',
      step3: '3. Unique Identifier',
      step3Desc: 'The account ID is the most critical data. Review before proceeding.',
      step4: '4. Real Account of the Occurrence',
      step4Desc: 'Tell exactly how the ban happened. Be 100% honest and detailed.',
      emailLabel: 'Return Email',
      nickLabel: 'Nickname (Exact)',
      idLabel: 'Account ID',
      reasonLabel: 'Ban Account (Tell the truth)',
      submitButton: 'GENERATE AND SEND REPORT',
      submitting: 'ENCRYPTING DATA...',
      successTitle: 'REPORT SENT',
      successDesc: 'Your report has been successfully sent to Gaspar\'s team. Wait for the technical analysis period in your email.',
      successAction: 'BACK TO START'
    },
    support: {
      widgetTitle: 'OPERATIONAL SUPPORT',
      widgetDesc: 'Talk directly with an analyst via Telegram for specific questions.',
      widgetButton: 'OPEN TELEGRAM CHAT',
      refundButton: 'REQUEST REFUND'
    },
    ui: {
      securityGuidelines: 'Security Guidelines',
      criticalAttention: 'Critical Attention',
      safetyText: 'Success depends on the absolute veracity of the data. False information results in the immediate dismissal of the report.',
      systemActive: 'SUBMISSION SYSTEM ACTIVE',
      waitDays: 'AFTER SENDING, MANDATORY WAIT 7 TO 10 DAYS FOR RESPONSE.',
      officialChannel: 'Access Official Channel',
      premiumSupportTrigger: 'PREMIUM SUPPORT CENTER (VIP & BYPASS)'
    }
  },
  es: {
    selectLanguage: 'Seleccionar Idioma',
    protocolInitialization: 'Inicialización de Protocolo // Seleccione la Región',
    hero: {
      title: 'INFORME DE',
      titleAccent: 'RECUPERACIÓN',
      description: 'Herramienta estratégica para generar su informe oficial de recuperación. Siga los pasos y proporcione datos exactos para el análisis.',
    },
    form: {
      step1: '1. Identificación de Contacto',
      step1Desc: 'Ingrese un correo electrónico válido al que tenga acceso inmediato.',
      step2: '2. Datos de la Cuenta',
      step2Desc: 'El Nickname debe ser EXACTAMENTE igual al de la cuenta (letras, símbolos, espacios).',
      step3: '3. Identificador Único',
      step3Desc: 'El ID de la cuenta é o dato mais crítico. Revise antes de proseguir.',
      step4: '4. Relato Real de lo Sucedido',
      step4Desc: 'Cuente exactamente cómo ocurrió el baneo. Sea 100% honesto y detallista.',
      emailLabel: 'Correo de Retorno',
      nickLabel: 'Nickname (Exacto)',
      idLabel: 'ID de la Cuenta',
      reasonLabel: 'Relato del Baneo (Diga la verdad)',
      submitButton: 'GENERAR Y ENVIAR INFORME',
      submitting: 'CIFRANDO DATOS...',
      successTitle: 'INFORME ENVIADO',
      successDesc: 'Su informe ha sido enviado con éxito al equipo de Gaspar. Espere el plazo de análisis técnico en su correo electrónico.',
      successAction: 'VOLVER AL INICIO'
    },
    support: {
      widgetTitle: 'SOPORTE OPERACIONAL',
      widgetDesc: 'Hable directamente con un analista vía Telegram para dudas específicas.',
      widgetButton: 'ABRIR CHAT TELEGRAM',
      refundButton: 'SOLICITAR REEMBOLSO'
    },
    ui: {
      securityGuidelines: 'Directrices de Seguridad',
      criticalAttention: 'Atención Crítica',
      safetyText: 'El éxito depende de la veracidad absoluta de los datos. La información falsa resulta en el descarte inmediato del informe.',
      systemActive: 'SISTEMA DE ENVÍO ACTIVO',
      waitDays: 'TRAS EL ENVÍO, ESPERE OBLIGATORIAMENTE DE 7 A 10 DÍAS PARA RESPUESTA.',
      officialChannel: 'Acceder al Canal Oficial',
      premiumSupportTrigger: 'CENTRO DE SOPORTE PREMIUM (VIP & BYPASS)'
    }
  }
};
