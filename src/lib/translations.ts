
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
          { 
            id: '1.1', 
            title: 'Aula 1.1 - O que é banimento automático', 
            content: 'Entendendo o funcionamento dos banimentos automáticos\n\nAntes de tentar recuperar sua conta, você precisa entender um fato importante: nem todos os banimentos são aplicados da mesma forma.\n\nO banimento automático ocorre quando sistemas internos identificam comportamentos considerados suspeitos sem que necessariamente exista uma análise humana inicial. Esses sistemas funcionam por padrões, detecções automatizadas e verificações internas.\n\nAs principais características de um banimento automático são:\n\n- Mensagem genérica;\n- Ausência de detalhes específicos;\n- Respostas rápidas e padronizadas;\n- Falta de referência direta ao comportamento do usuário;\n- Encerramento automático do atendimento.\n\nExemplos comuns:\n"Detectamos atividades irregulares."\n"Sua conta violou nossos termos de serviço."\n"A suspensão foi aplicada corretamente."\n\nPor que isso é importante?\nPorque os banimentos automáticos representam os casos em que ainda existe alguma possibilidade de solicitar uma reavaliação estratégica. O objetivo deste método não é discutir com o sistema, mas sim tentar fazer com que sua solicitação ultrapasse a primeira camada automática de análise.\n\nLembre-se:\nQuanto mais emocional for sua mensagem, maior a chance de permanecer preso no processo automático.' 
          },
          { 
            id: '1.2', 
            title: 'Aula 1.2 - O que é banimento manual', 
            content: 'Quando existe participação humana na decisão\n\nO banimento manual ocorre quando existe uma análise direta ou validação interna realizada por membros da equipe responsável.\n\nNesses casos, normalmente existem elementos mais específicos relacionados ao motivo da punição.\n\nCaracterísticas comuns:\n- Mensagens mais detalhadas;\n- Referência direta a regras ou comportamentos;\n- Respostas objetivas e firmes;\n- Menor flexibilidade para reavaliação.\n\nExemplos:\n- Citação direta dos Termos de Serviço;\n- Informação sobre comportamento específico;\n- Confirmação explícita da violação.\n\nO que isso significa?\nSignifica que a possibilidade de reversão tende a ser significativamente menor. Isso não quer dizer que você deva agir por impulso ou desistir imediatamente. Significa apenas que a estratégia precisa ser ainda mais cuidadosa.\n\nNeste cenário, o principal objetivo deixa de ser "convencer" e passa a ser:\n✅ Não piorar a situação;\n✅ Evitar encerramentos adicionais;\n✅ Manter uma postura técnica e organizada.' 
          },
          { 
            id: '1.3', 
            title: 'Aula 1.3 - O que é banimento reincidente', 
            content: 'Quando existe histórico anterior de punições\n\nO banimento reincidente acontece quando a conta já possui registros anteriores de punições, advertências ou suspensões. Plataformas normalmente aplicam níveis de tolerância progressivamente menores para contas reincidentes.\n\nCaracterísticas:\n- Respostas mais rápidas;\n- Menor abertura para revisão;\n- Análises mais rígidas;\n- Baixíssima tolerância a novos recursos.\n\nO erro mais comum:\nMuitas pessoas acreditam que enviar dezenas de tickets aumenta as chances de sucesso. Na prática, isso geralmente produz o efeito contrário.\n\nQuando existe reincidência, insistência excessiva pode:\n- Confirmar decisões anteriores;\n- Encerrar possibilidades de análise futura;\n- Classificar o caso como tentativa repetitiva.\n\nPor isso, o método trabalha com controle, organização e estratégia, nunca com insistência impulsiva.' 
          },
          { 
            id: '1.4', 
            title: 'Aula 1.4 - Identificação de Caso', 
            content: 'A etapa mais importante antes de enviar qualquer ticket\n\nAntes de escrever qualquer mensagem para o suporte, faça estas perguntas:\n\n1. A mensagem recebida é genérica?\nSe sim, há grandes chances de ser um banimento automático.\n\n2. A mensagem apresenta detalhes específicos?\nSe sim, pode indicar uma análise manual.\n\n3. A conta já recebeu punições anteriormente?\nSe a resposta for positiva, você provavelmente está diante de um caso reincidente.\n\nResumo rápido:\n- Banimento automático: Mensagens genéricas e rápidas (Chance: Maior)\n- Banimento manual: Mensagens específicas (Chance: Baixa)\n- Banimento reincidente: Histórico anterior (Chance: Muito baixa)\n\nO que você precisa entender antes de continuar:\nNa Garena, normalmente não existe espaço para debate prolongado. Você envia uma solicitação e recebe uma decisão. Isso significa que sua primeira tentativa precisa ser:\n✅ Organizada\n✅ Técnica\n✅ Objetiva\n✅ Estratégica' 
          }
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
            content: 'Utilizando apenas canais oficiais\n\nAntes de pensar no texto que será enviado, você precisa entender uma regra fundamental: um ticket enviado no local errado já nasce sem chance de análise.\n\nMuitas pessoas tentam entrar em contato através de:\n❌ Instagram, Facebook, Discord, E-mails genéricos, Comentários em redes sociais.\n\nEsses canais não realizam análise individual de contas. A solicitação deve ser enviada exclusivamente através do suporte oficial.\n\nO objetivo do método é simples:\n- entrar no fluxo correto de atendimento;\n- evitar encaminhamentos automáticos desnecessários;\n- maximizar a possibilidade de análise.\n\nLembre-se:\nUma tentativa organizada vale mais do que dez tentativas desesperadas.' 
          },
          { 
            id: '2.2', 
            title: 'Aula 2.2 - Escolhendo a categoria correta', 
            content: 'A decisão mais importante antes da mensagem\n\nAo abrir um ticket, você precisará selecionar uma categoria. A categoria escolhida influencia diretamente a forma como sua solicitação será processada internamente.\n\nO que evitar:\nEvite categorias extremamente acusatórias ou que já confirmem a punição (ex: "Sua conta foi suspensa permanentemente").\n\nO que procurar:\nSelecione categorias neutras que permitam análise e não antecipem conclusões. O objetivo é evitar que sua tentativa seja encerrada antes mesmo da leitura.\n\nRegra prática:\nPergunte a si mesmo: "Esta categoria parece abrir uma análise ou apenas confirmar uma decisão?" Se parecer confirmar, escolha outra opção mais neutra.' 
          },
          { 
            id: '2.3', 
            title: 'Aula 2.3 - Preenchendo os dados da conta', 
            content: 'Menos informação significa menos problemas\n\nOs campos técnicos existem apenas para identificação. Preencha somente:\n- ID correto da conta;\n- Nickname exato;\n- E-mail solicitado;\n- Informações obrigatórias do formulário.\n\nNunca faça isto:\n❌ Adicionar explicações extras;\n❌ Contar sua história nos campos técnicos;\n❌ Inserir justificativas.\n\nPor quê?\nPorque sistemas automatizados analisam padrões de preenchimento. Quanto mais organizado o formulário, maior a chance de ele ser tratado como uma solicitação legítima.' 
          },
          { 
            id: '2.4', 
            title: 'Aula 2.4 - O campo de mensagem', 
            content: 'O único lugar onde a estratégia realmente importa\n\nO campo de mensagem é o único espaço onde existe possibilidade de influência humana.\n\nNunca faça:\n❌ Escrever em caixa alta;\n❌ Utilizar emojis;\n❌ Fazer ameaças;\n❌ Copiar textos emocionais.\n\nO que fazer:\n✅ Utilizar linguagem formal;\n✅ Ser objetivo;\n✅ Demonstrar organização;\n✅ Solicitar análise, não exigir resultado.\n\nO suporte procura solicitações que mereçam ser analisadas. Clareza vale mais do que quantidade.' 
          },
          { 
            id: '2.5', 
            title: 'Aula 2.5 - Revisão final antes de enviar', 
            content: 'O ticket é único\n\nAntes de clicar em enviar, faça a checklist:\n\n1. Categoria: Está correta? É neutra?\n2. Dados: O ID foi digitado corretamente? O nickname está exato?\n3. Mensagem: Está objetiva, técnica e organizada?\n4. Tom geral: Isto parece ter sido escrito por alguém calmo e racional?\n\nApós o envio:\n❌ Não envie outro imediatamente;\n❌ Não abra múltiplas solicitações;\n❌ Não tente reforçar o pedido.\n\nA estratégia termina no momento do envio. Insistência excessiva produz o efeito contrário.' 
          }
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'PREENCHIMENTO PASSO A PASSO',
        description: 'Protocolo detalhado de preenchimento.',
        lessons: [
          { 
            id: '3.1', 
            title: 'Aula 3.1 - Qual opção selecionar', 
            content: 'A primeira decisão que pode definir todo o processo\n\nEvite opções como:\n❌ "Detectamos o uso de softwares não autorizados"\n❌ "O sistema Anti-Trapaça detectou irregularidades"\n❌ "Esta conta foi suspensa permanentemente"\n\nA estratégia correta:\nEscolha opções neutras relacionadas à recuperação. Exemplo:\n✅ "Quero recuperar minha conta"\n\nEssa abordagem não antecipa conclusões e mantém a solicitação em categorias mais amplas de análise.' 
          },
          { 
            id: '3.2', 
            title: 'Aula 3.2 - O campo Requester', 
            content: 'O campo "Requester" identifica o solicitante. Sua função é exclusivamente administrativa.\n\nO que inserir:\n- E-mail para contato (válido e acessível).\n\nO que NÃO fazer:\n❌ Escrever o ID;\n❌ Inserir explicações;\n❌ Utilizar múltiplos e-mails.\n\nO e-mail não precisa ser o mesmo da conta do jogo, serve apenas para o suporte retornar.' 
          },
          { 
            id: '3.3', 
            title: 'Aula 3.3 - O campo Assunto', 
            content: 'O assunto pode ativar respostas automáticas. Nunca utilize termos emocionais como "Fui banido injustamente".\n\nO objetivo do assunto:\nDeve parecer técnico, ser curto e indicar necessidade de análise. Exemplo correto:\n✅ "Solicitação de verificação referente ao acesso da conta."\n\nO assunto serve para abrir uma porta, não para ganhar uma discussão.' 
          },
          { 
            id: '3.4', 
            title: 'Aula 3.4 - Nickname da conta', 
            content: 'Preencha exatamente como aparece no jogo.\n\nRegras:\n✅ Respeite maiúsculas, minúsculas e símbolos especiais.\n✅ Copie exatamente o nome registrado.\n\n❌ Não use apelidos ou abreviações.' 
          },
          { 
            id: '3.5', 
            title: 'Aula 3.5 - O número de ID', 
            content: 'O dado mais importante. Copie da fonte oficial e revise mais de uma vez.\n\n❌ Não insira comentários ou justificativas neste campo. Serve apenas para identificação.' 
          },
          { 
            id: '3.6', 
            title: 'Aula 3.6 - Tempo de suspensão', 
            content: 'Nunca invente informações. Se for permanente, marque permanente. Se houver prazo, use o prazo correto.\n\nInformações inconsistentes reduzem a credibilidade da solicitação.' 
          },
          { 
            id: '3.7', 
            title: 'Aula 3.7 - Data do ocorrido', 
            content: 'Informe a data exata se souber ou uma aproximação razoável. Evite "não lembro" ou datas impossíveis.\n\nA coerência demonstra organização e boa-fé.' 
          },
          { 
            id: '3.8', 
            title: 'Aula 3.8 - O campo de descrição', 
            content: 'O único lugar para diferenciação. O que NÃO fazer:\n❌ Acusar, confessar, implorar ou ameaçar.\n\nA descrição deve parecer escrita por alguém calmo, demonstrar organização e solicitar análise.\n\nA recomendação deste método é utilizar os modelos prontos no próximo módulo para evitar erros de tom e ativação de respostas automáticas.' 
          }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'MODELOS PRONTOS',
        description: 'Templates estratégicos de alta conversão.',
        lessons: [
          { 
            id: '4.1', 
            title: 'Aula 4.1 - Modelo de Ticket nº 1', 
            content: 'Quando utilizar este modelo:\nIndicado para situações em que a conta se tornou inacessível de forma inesperada e não existem informações claras. Apresenta como possível inconsistência técnica.\n\nQuando usar:\n✅ Banimentos automáticos;\n✅ Mensagens genéricas;\n✅ Falta de explicação clara.',
            template: 'Prezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.'
          },
          { 
            id: '4.2', 
            title: 'Aula 4.2 - Modelo de Ticket nº 2', 
            content: 'Quando utilizar este modelo:\nEnfatiza a possibilidade de falha em sistemas automáticos, mantendo postura técnica.\n\nQuando usar:\n✅ Suspensões inesperadas;\n✅ Casos sem histórico anterior;\n✅ Primeira tentativa de recuperação.',
            template: 'À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.'
          },
          { 
            id: '4.3', 
            title: 'Aula 4.3 - Modelo de Ticket nº 3', 
            content: 'Quando utilizar este modelo:\nTrabalha com a hipótese de falso positivo e solicita análise de integridade.\n\nQuando usar:\n✅ Quando souber a data aproximada;\n✅ Possíveis falsos positivos;\n✅ Contas sem histórico.',
            template: 'Dirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde [data], não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a crer em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.'
          },
          { 
            id: '4.4', 
            title: 'Aula 4.4 - Modelo de Ticket nº 4', 
            content: 'Quando utilizar este modelo:\nEnfatiza ausência de justificativa e solicita auditoria humana.\n\nQuando usar:\n✅ Sem explicação clara;\n✅ Bloqueio súbito;\n✅ Sem aviso prévio.',
            template: 'Saudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.'
          },
          { 
            id: '4.5', 
            title: 'Aula 4.5 - Modelo de Ticket nº 5', 
            content: 'Quando utilizar este modelo:\nApresenta o problema como resultado de avaliação automatizada incorreta.\n\nQuando usar:\n✅ Casos aparentemente automáticos;\n✅ Suspeita de falso positivo;\n✅ Suspensão permanente.',
            template: 'Prezados, minha conta encontra-se inacessível e busco entender o motivo. Acredito que esta situação possa ter sido causada por uma avaliação incorreta de um processo automatizado, visto que sempre zelei por seguir as regras da plataforma. Para resolvermos esta questão, solicito que um especialista de suporte revise o caso manualmente e me comunique os detalhes técnicos que levaram à atual restrição. Agradeço e aguardo um posicionamento.'
          },
          { 
            id: '4.6', 
            title: 'Aula 4.6 - Modelo de Ticket nº 6', 
            content: 'Quando utilizar este modelo:\nAbordagem mais técnica e formal, indicado para tentativas posteriores.\n\nQuando usar:\n✅ Segunda tentativa;\n✅ Casos complexos;\n✅ Quando o primeiro ticket falhou.',
            template: 'À equipe de Suporte, submeto este pedido para verificação de uma alteração anômala de privilégios em minha conta, resultando na impossibilidade de login. O ocorrido não condiz com meu padrão de uso, que é totalmente aderente aos Termos de Serviço. Peço, formalmente, a intervenção de um analista para um diagnóstico preciso e o restabelecimento do meu acesso. Estou à disposição para cooperar com o processo de análise.'
          },
          { 
            id: 'm4-rules', 
            title: '⚠️ Aula Extra - Regras Obrigatórias', 
            content: 'Antes de utilizar os modelos:\n\nFaça:\n✅ Apenas um modelo por tentativa.\n✅ Mantenha exatamente o tom.\n✅ Aguarde o prazo pós-envio.\n\nNunca faça:\n❌ Misturar modelos.\n❌ Adicionar emoção ou ameaças.\n❌ Inserir acusações.\n❌ Copiar o mesmo texto várias vezes.\n\nOs modelos aumentam a chance de leitura humana, mas não garantem a recuperação. O objetivo é evitar erros que encerram o ticket automaticamente.' 
          }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'APÓS ENVIAR O TICKET',
        description: 'Gestão de silêncio e janelas de resposta.',
        lessons: [
          { 
            id: '5.1', 
            title: 'Aula 5.1 - O tempo de espera correto', 
            content: 'O erro mais comum acontece depois do envio. Excesso de ação produz efeito contrário.\n\nAguarde pelo menos 72 horas. O ideal é entre 7 e 10 dias. Evite qualquer reforço antes disso.\n\n❌ Não envie outro no mesmo dia ou abra múltiplas solicitações. Depois de enviar, sua melhor estratégia é esperar.' 
          },
          { 
            id: '5.2', 
            title: 'Aula 5.2 - O que não fazer de jeito nenhum', 
            content: 'Comportamentos que destroem sua tentativa:\n❌ Vários tickets simultâneos.\n❌ Diversos e-mails.\n❌ Discutir com o suporte ou fazer ameaças.\n\nSistemas interpretam isso como comportamento inadequado. O objetivo é parecer uma solicitação legítima que merece análise.' 
          },
          { 
            id: '5.3', 
            title: 'Aula 5.3 - Quando enviar um novo ticket', 
            content: 'Apenas se:\n✅ Passaram 7 dias sem resposta.\n✅ Resposta foi claramente automática.\n\nAo tentar novamente: use outro modelo, altere levemente o assunto e mantenha o tom técnico. ❌ Nunca copie o anterior ou demonstre frustração.' 
          },
          { 
            id: '5.4', 
            title: 'Aula 5.4 - Quando parar', 
            content: 'Interrompa as tentativas quando:\n- Receber resposta final clara.\n- Plataforma informar que não haverá nova análise.\n- Três tentativas espaçadas falharem.\n\nInsistir além disso não gera benefícios e pode dificultar revisões futuras. Qualidade vale mais que quantidade.' 
          },
          { 
            id: '5.5', 
            title: 'Aula 5.5 - A mentalidade correta', 
            content: 'O método não é força bruta. É sobre evitar filtros automáticos e aumentar chance de análise humana.\n\nO que é: Organização, Controle, Estratégia e Paciência.\n\nDepois que o ticket é enviado, a maior ameaça é agir por impulso enviando dezenas de mensagens para "garantir", o que é estatisticamente desastroso.' 
          }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALIZANDO A RESPOSTA',
        description: 'Decodificação de feedback do suporte.',
        lessons: [
          { 
            id: '6.1', 
            title: 'Aula 6.1 - Como identificar uma resposta automática', 
            content: 'Características de resposta automática:\n✅ Texto genérico e padronizado.\n✅ Sem detalhes específicos ou menção ao ID.\n✅ Encerramento imediato.\n\nExemplos: "Confirmamos a penalidade", "Não é possível reverter". Isso significa que seu caso pode não ter passado pela triagem inicial.' 
          },
          { 
            id: '6.2', 
            title: 'Aula 6.2 - Como identificar uma resposta humana', 
            content: 'Sinais de leitura real:\n✅ Menção ao histórico da conta.\n✅ Pedido de documentos ou dados adicionais.\n✅ Encaminhamento para análise complementar.\n\nSignifica que você ultrapassou a barreira automática. Não atrapalhe a análise agora com textos enormes.' 
          },
          { 
            id: '6.3', 
            title: 'Aula 6.3 - O que fazer se a resposta for automática', 
            content: '❌ Não responda imediatamente nem discuta.\n✅ Aguarde pelo menos 7 dias.\n\nDepois, tente novamente com outro modelo e assunto reformulado. O objetivo é sair do ciclo automático.' 
          },
          { 
            id: '6.4', 
            title: 'Aula 6.4 - O que fazer se a resposta for humana', 
            content: 'Quando há leitura humana, menos é mais.\n✅ Aguarde o prazo informado.\n✅ Responda apenas o solicitado de forma objetiva.\n❌ Não reconte a história nem pressione por velocidade.' 
          },
          { 
            id: '6.5', 
            title: 'Aula 6.5 - O pior erro de todos', 
            content: 'Responder emocionalmente com frases como "Isso é injusto" ou "Vou denunciar". Isso encerra definitivamente a análise e transforma uma possibilidade em negativa final.\n\nO princípio final: O objetivo sempre foi evitar filtros, aumentar chance de leitura humana e não permitir que o próprio usuário prejudique a tentativa.' 
          }
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
          { id: '1.1', title: '1.1 - Automatic Ban', content: 'Understanding Automatic Bans\n\nAutomatic bans occur when internal systems identify suspicious behavior without initial human intervention. These systems work through patterns and automated detections.\n\nCharacteristics:\n- Generic message\n- Absence of specific details\n- Fast, standardized responses\n- Automatic ticket closure.' },
          { id: '1.2', title: '1.2 - Manual Ban', content: 'Human Participation in Decisions\n\nManual bans occur when there is direct analysis by support team members. These cases usually have more specific elements regarding the punishment.\n\nCharacteristics:\n- Detailed messages\n- Reference to rules\n- Firm responses\n- Lower flexibility.' },
          { id: '1.3', title: '1.3 - Recidivist Ban', content: 'Previous Punishment History\n\nRecidivist bans happen when the account already has prior records of warnings or suspensions. Tolerance is much lower.\n\nExcessive persistence here can confirm previous decisions and block future analysis.' },
          { id: '1.4', title: '1.4 - Case Identification', content: 'Crucial steps before sending a ticket:\n\n1. Is the message generic? (Likely automatic)\n2. Does it have specific details? (Likely manual)\n3. Previous punishments? (Recidivist)\n\nIn Garena, there is usually no room for debate. Your first attempt must be organized, technical, and strategic.' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MODULE 2',
        title: 'TICKET PREPARATION',
        description: 'Logistics and pre-send strategy.',
        lessons: [
          { id: '2.1', title: '2.1 - Where to send the ticket', content: 'Use only official channels. A ticket sent to the wrong place has no chance of analysis. Avoid social media or generic emails. Use only official support.' },
          { id: '2.2', title: '2.2 - Right Category', content: 'The category influences how the ticket is processed. Avoid accusatory categories. Choose neutral options that allow analysis rather than just confirming the punishment.' },
          { id: '2.3', title: '2.3 - Account Data', content: 'Technical fields are for identification only. Fill only ID, Nickname, and required emails. Avoid adding stories or justifications in these fields.' },
          { id: '2.4', title: '2.4 - Message Field', content: 'The only place for human influence. Use formal language, be objective, and request analysis instead of demanding results. Clarity is better than quantity.' },
          { id: '2.5', title: '2.5 - Final Review', content: 'Review category, data precision, and tone. Is it written by someone calm? After sending: do not send another immediately, do not open multiple requests.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MODULE 3',
        title: 'STEP BY STEP',
        description: 'Detailed filling protocol.',
        lessons: [
          { id: '3.1', title: '3.1 - Option Selection', content: 'Avoid categories like "unauthorized software". Choose neutral options like "Recover my account". This keeps the request in broader analysis categories.' },
          { id: '3.2', title: '3.2 - Requester Field', content: 'Use a valid and accessible email. It doesn\'t have to be the game account email, it\'s just for communication.' },
          { id: '3.3', title: '3.3 - Subject Field', content: 'Avoid emotional terms like "Unfairly banned". Use technical subjects like "Account access verification request".' },
          { id: '3.4', title: '3.4 - Account Nickname', content: 'Fill exactly as it appears in-game, respecting cases and special symbols.' },
          { id: '3.5', title: '3.5 - ID Number', content: 'The most important data. Copy from official source. Do not add comments here.' },
          { id: '3.6', title: '3.6 - Suspension Time', content: 'Never invent info. If permanent, mark permanent. Inconsistent info reduces credibility.' },
          { id: '3.7', title: '3.7 - Date of Event', content: 'Provide exact or reasonable approximation. Coherence demonstrates good faith.' },
          { id: '3.8', title: '3.8 - Description Field', content: 'The place for differentiation. Do not accuse or implore. Use the provided templates to avoid tone errors.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MODULE 4',
        title: 'READY TEMPLATES',
        description: 'High conversion strategic templates.',
        lessons: [
          { id: '4.1', title: '4.1 - Template 1', template: 'Dear support, I am writing to request a technical diagnosis regarding a sudden inability to access my account. I believe this might be a systemic anomaly as my activities are in compliance with the Terms of Service. I request a manual verification of my account status.' },
          { id: '4.2', title: '4.2 - Template 2', template: 'To the technical team, I am reporting an irregularity preventing access. I suspect a failure in automatic monitoring systems. I request an investigation by an analyst to clarify the cause.' },
          { id: '4.3', title: '4.3 - Template 3', template: 'I am writing regarding access issues since [date]. Considering my history, I believe this is a technical error or false positive. I request an integrity analysis of the account.' },
          { id: '4.4', title: '4.4 - Template 4', template: 'Greetings. I need assistance with a failure blocking access. No notification was received, suggesting inconsistency in validation systems. I request a human audit.' },
          { id: '4.5', title: '4.5 - Template 5', template: 'My account is inaccessible and I seek to understand why. I believe this was caused by an incorrect automated evaluation. Please review manually.' },
          { id: '4.6', title: '4.6 - Template 6', template: 'To Support, I submit this request for verification of an anomalous change in privileges. Please intervene with a precise diagnosis.' },
          { id: 'm4-rules', title: '⚠️ Mandatory Rules', content: 'Use only one model. Keep the tone. Wait the period. Never mix models or add emotion.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MODULE 5',
        title: 'AFTER SENDING',
        description: 'Management of silence.',
        lessons: [
          { id: '5.1', title: '5.1 - Correct Wait Time', content: 'Wait at least 72 hours. Ideal is 7-10 days. Do not send another ticket on the same day. Your best strategy is waiting.' },
          { id: '5.2', title: '5.2 - What NOT to do', content: 'Avoid multiple tickets or different emails. Do not argue or threaten support. Systems interpret high frequency as inappropriate behavior.' },
          { id: '5.3', title: '5.3 - New Attempt', content: 'Only after 7 days without response or if the response was clearly automatic. Use another template and change the subject slightly.' },
          { id: '5.4', title: '5.4 - When to Stop', content: 'Stop after 3 failed well-spaced attempts or if a final decision is clearly stated. Quality over quantity.' },
          { id: '5.5', title: '5.5 - Correct Mindset', content: 'It\'s about avoiding automatic filters, not brute force. Patience is your best ally.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MODULE 6',
        title: 'ANALYZING RESPONSE',
        description: 'Decoding feedback.',
        lessons: [
          { id: '6.1', title: '6.1 - Automatic Response', content: 'Generic text, no specific details. Usually means you didn\'t pass the initial screening.' },
          { id: '6.2', title: '6.2 - Human Response', content: 'Mentions account history or asks for additional data. This means you passed the first barrier.' },
          { id: '6.3', title: '6.3 - Action for Automatic', content: 'Do not reply immediately. Wait 7 days and try again with a different approach.' },
          { id: '6.4', title: '6.4 - Action for Human', content: 'Less is more. Reply only to what was asked. Keep it technical.' },
          { id: '6.5', title: '6.5 - Worst Error', content: 'Emotional responses like "This is unfair" or "I will report you" will likely lead to final closure of the case.' }
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
          { id: '1.1', title: '1.1 - Ban Automático', content: 'Funcionamiento de Bans Automáticos\n\nOcurren cuando sistemas identifican comportamientos sospechosos sin intervención humana inicial. Trabajan por patrones.\n\nCaracterísticas:\n- Mensaje genérico\n- Sin detalles específicos\n- Respuestas rápidas\n- Cierre automático.' },
          { id: '1.2', title: '1.2 - Ban Manual', content: 'Participación Humana en la Decisión\n\nOcurre tras análisis directo por el equipo de soporte. Suele tener elementos más específicos.\n\nCaracterísticas:\n- Mensajes detallados\n- Referencia a reglas\n- Respuestas firmes.' },
          { id: '1.3', title: '1.3 - Ban Reincidente', content: 'Historial de Sanciones Previas\n\nSucede cuando la cuenta ya tiene registros anteriores. La tolerancia es mucho menor. La insistencia excesiva aquí es contraproducente.' },
          { id: '1.4', title: '1.4 - Identificación', content: 'Preguntas clave:\n1. ¿Mensaje genérico? (Automático)\n2. ¿Detalles específicos? (Manual)\n3. ¿Historial previo? (Reincidente)\n\nEn Garena no hay mucho espacio para debate. Tu primer intento debe ser organizado y técnico.' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MÓDULO 2',
        title: 'PREPARACIÓN',
        description: 'Logística y estrategia.',
        lessons: [
          { id: '2.1', title: '2.1 - Dónde enviar el ticket', content: 'Use solo canales oficiales. Un ticket en el lugar equivocado no tiene oportunidad. Evite redes sociales y use solo el soporte oficial.' },
          { id: '2.2', title: '2.2 - Categoría Correcta', content: 'La categoría influye en el proceso. Evite opciones acusatorias. Elija opciones neutras que permitan análisis.' },
          { id: '2.3', title: '2.3 - Datos de la Cuenta', content: 'Solo campos técnicos para identificación. Complete ID, Nickname y email sin añadir historias personales en estos campos.' },
          { id: '2.4', title: '2.4 - Campo de Mensaje', content: 'Lugar para influencia humana. Use lenguaje formal, sea objetivo y solicite análisis en lugar de exigir resultados.' },
          { id: '2.5', title: '2.5 - Revisión Final', content: 'Revise categoría, datos y tono. Después de enviar: no envíe otro inmediatamente ni abra múltiples solicitudes.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'PASO A PASO',
        description: 'Protocolo de llenado.',
        lessons: [
          { id: '3.1', title: '3.1 - Selección de Opción', content: 'Evite "software no autorizado". Elija opciones neutras como "Quiero recuperar mi cuenta".' },
          { id: '3.2', title: '3.2 - Campo Requester', content: 'Email válido y accesible para contacto administrativo.' },
          { id: '3.3', title: '3.3 - Campo Asunto', content: 'Evite términos emocionales. Use asuntos técnicos como "Solicitud de verificación de acceso".' },
          { id: '3.4', title: '3.4 - Nickname', content: 'Exactamente como en el juego, respetando símbolos y mayúsculas.' },
          { id: '3.5', title: '3.5 - Número de ID', content: 'El dato más importante. Copie de la fuente oficial y no añada comentarios.' },
          { id: '3.6', title: '3.6 - Tiempo de Suspensión', content: 'No invente. Si es permanente, marque permanente.' },
          { id: '3.7', title: '3.7 - Fecha del Suceso', content: 'Fecha exacta o aproximación razonable. La coherencia demuestra buena fe.' },
          { id: '3.8', title: '3.8 - Descripción', content: 'Único lugar para diferenciación. Use las plantillas del siguiente módulo para evitar errores de tono.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'PLANTILLAS',
        description: 'Templates de alta conversión.',
        lessons: [
          { id: '4.1', title: '4.1 - Plantilla 1', template: 'Estimados, escribo para solicitar un diagnóstico técnico por una súbita imposibilidad de acceder. Creo que es una anomalía sistémica. Solicito verificación manual.' },
          { id: '4.2', title: '4.2 - Plantilla 2', template: 'Al equipo técnico, reporto irregularidad de acceso. Sospecho de falla en monitoreo automático. Solicito investigación de un analista.' },
          { id: '4.3', title: '4.3 - Plantilla 3', template: 'Escribo por problemas de acceso desde [fecha]. Creo que es un error técnico o falso positivo. Solicito análisis de integridad.' },
          { id: '4.4', title: '4.4 - Plantilla 4', template: 'Saludos. Necesito asistencia por falla de bloqueo. Solicito auditoría humana de la actividad de mi cuenta.' },
          { id: '4.5', title: '4.5 - Plantilla 5', template: 'Mi cuenta es inaccesible. Creo que es una evaluación automatizada incorrecta. Por favor revisen manualmente.' },
          { id: '4.6', title: '4.6 - Plantilla 6', template: 'Al Soporte, someto este pedido para verificación de alteración de privilegios. Pido diagnóstico preciso.' },
          { id: 'm4-rules', title: '⚠️ Reglas de Oro', content: 'Solo un modelo por intento. Mantenga el tono. Espere el plazo. No mezcle modelos ni añada emoción.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'POST-ENVÍO',
        description: 'Gestión del silencio.',
        lessons: [
          { id: '5.1', title: '5.1 - Tiempo de Espera', content: 'Espere al menos 72 horas. Lo ideal es 7-10 días. No envíe otro ticket el mismo día. Su mejor estrategia es esperar.' },
          { id: '5.2', title: '5.2 - Qué NO hacer', content: 'Evite tickets simultáneos o varios emails. No discuta ni amenace. Los sistemas ven la insistencia como conducta inadecuada.' },
          { id: '5.3', title: '5.3 - Nuevo Intento', content: 'Solo tras 7 días de silencio o si la respuesta fue automática. Use otra plantilla.' },
          { id: '5.4', title: '5.4 - Cuándo Parar', content: 'Pare tras 3 intentos fallidos o si hay decisión final explícita. Calidad sobre cantidad.' },
          { id: '5.5', title: '5.5 - Mentalidad', content: 'Se trata de evitar filtros automáticos, no fuerza bruta. La paciencia es clave.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANÁLISIS',
        description: 'Decodificación.',
        lessons: [
          { id: '6.1', title: '6.1 - Respuesta Bot', content: 'Texto genérico sin detalles. Probablemente no pasó el filtro inicial.' },
          { id: '6.2', title: '6.2 - Respuesta Humana', content: 'Menciona historial o pide datos adicionales. Significa que pasó la primera barrera.' },
          { id: '6.3', title: '6.3 - Acción para Bot', content: 'No responda inmediatamente. Espere 7 días e intente otro enfoque.' },
          { id: '6.4', title: '6.4 - Acción para Humano', content: 'Menos es más. Responda solo lo solicitado de forma técnica.' },
          { id: '6.5', title: '6.5 - Peor Error', content: 'Respuestas emocionales como "Es injusto" o amenazas llevarán al cierre final del caso.' }
        ]
      }
    ]
  }
};
