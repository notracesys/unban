
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
            title: 'AULA 1.1 - O que é banimento automático', 
            content: 'Entendendo o funcionamento dos banimentos automáticos\n\nAntes de tentar recuperar sua conta, você precisa entender um fato importante: nem todos os banimentos são aplicados da mesma forma.\n\nO banimento automático ocorre quando sistemas internos identificam comportamentos considerados suspeitos sem que necessariamente exista uma análise humana inicial. Esses sistemas funcionam por padrões, detecções automatizadas e verificações internas.\n\nAs principais características de um banimento automático são:\n\n- Mensagem genérica;\n- Ausência de detalhes específicos;\n- Respostas rápidas e padronizadas;\n- Falta de referência direta ao comportamento do usuário;\n- Encerramento automático do atendimento.\n\nExemplos comuns:\n"Detectamos atividades irregulares."\n"Sua conta violou nossos termos de serviço."\n"A suspensão foi aplicada corretamente."\n\nPor que isso é importante?\nPorque os banimentos automáticos representam os casos em que ainda existe alguma possibilidade de solicitar uma reavaliação estratégica. O objetivo deste método não é discutir com o sistema, mas sim tentar fazer com que sua solicitação ultrapasse a primeira camada automática de análise.\n\nLembre-se:\nQuanto mais emocional for sua mensagem, maior a chance de permanecer preso no processo automático.' 
          },
          { 
            id: '1.2', 
            title: 'AULA 1.2 - O que é banimento manual', 
            content: 'Quando existe participação humana na decisão\n\nO banimento manual ocorre quando existe uma análise direta ou validação interna realizada por membros da equipe responsável. Nesses casos, normalmente existem elementos mais específicos relacionados ao motivo da punição.\n\nCaracterísticas comuns:\n- Mensagens mais detalhadas;\n- Referência direta a regras ou comportamentos;\n- Respostas objetivas e firmes;\n- Menor flexibilidade para reavaliação.\n\nExemplos:\n- Citação direta dos Termos de Serviço;\n- Informação sobre comportamento específico;\n- Confirmação explícita da violação.\n\nO que isso significa?\nSignifica que a possibilidade de reversão tende a ser significativamente menor. Isso não quer dizer que você deva agir por impulso ou desistir imediatamente. Significa apenas que a estratégia precisa ser ainda mais cuidadosa.\n\nNeste cenário, o principal objetivo deixa de ser "convencer" e passa a ser:\n- Não piorar a situação;\n- Evitar encerramentos adicionais;\n- Manter uma postura técnica e organizada.' 
          },
          { 
            id: '1.3', 
            title: 'AULA 1.3 - O que é banimento reincidente', 
            content: 'Quando existe histórico anterior de punições\n\nO banimento reincidente acontece quando a conta já possui registros anteriores de punições, advertências ou suspensões. Plataformas normalmente aplicam níveis de tolerância progressivamente menores para contas reincidentes.\n\nCaracterísticas:\n- Respostas mais rápidas;\n- Menor abertura para revisão;\n- Análises mais rígidas;\n- Baixíssima tolerância a novos recursos.\n\nO erro mais comum:\nMuitas pessoas acreditam que enviar dezenas de tickets aumenta as chances de sucesso. Na prática, isso geralmente produz o efeito contrário.\n\nQuando existe reincidência, insistência excessiva pode:\n- Confirmar decisões anteriores;\n- Encerrar possibilidades de análise futura;\n- Classificar o caso como tentativa repetitiva.\n\nPor isso, o método trabalha com controle, organização e estratégia, nunca com insistência impulsiva.' 
          },
          { 
            id: '1.4', 
            title: 'AULA 1.4 - Identificação de Caso', 
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
            title: 'AULA 2.1 - Onde enviar o ticket', 
            content: 'Utilizando apenas canais oficiais\n\nAntes de pensar no texto que será enviado, você precisa entender uma regra fundamental: um ticket enviado no local errado já nasce sem chance de análise. Muitas pessoas tentam entrar em contato através de:\n\n- Instagram;\n- Facebook;\n- Discord;\n- E-mails genéricos;\n- Comentários em redes sociais;\n- Formulários não oficiais.\n\nEsses canais não realizam análise individual de contas e não possuem poder para alterar decisões internas.\n\nA solicitação deve ser enviada exclusivamente através do suporte oficial. O objetivo é entrar no fluxo correto, evitar encaminhamentos automáticos e maximizar a análise.\n\nLembre-se:\nUma tentativa organizada vale mais do que dez tentativas desesperadas.' 
          },
          { 
            id: '2.2', 
            title: 'AULA 2.2 - Escolhendo a categoria correta', 
            content: 'A decisão mais importante antes da mensagem\n\nAo abrir um ticket, você precisará selecionar uma categoria. A categoria escolhida influencia diretamente a forma como sua solicitação será processada.\n\nO que evitar:\nEvite categorias extremamente acusatórias, definitivas ou que já confirmem a punição. Categorias muito específicas podem fazer sua solicitação ser encaminhada diretamente para respostas padronizadas.\n\nO que procurar:\nSelecione categorias neutras que permitam análise e não antecipem conclusões. Pergunte a si mesmo: "Esta categoria parece abrir uma análise ou apenas confirmar uma decisão?" Se parecer confirmar, escolha outra opção mais neutra.' 
          },
          { 
            id: '2.3', 
            title: 'AULA 2.3 - Preenchendo os dados da conta', 
            content: 'Menos informação significa menos problemas\n\nOs campos técnicos existem apenas para identificação. Preencha somente:\n\n- ID correto da conta;\n- Nickname exato;\n- E-mail solicitado;\n- Informações obrigatórias.\n\nNunca faça isto:\n❌ Adicionar explicações extras;\n❌ Contar sua história nos campos técnicos;\n❌ Inserir justificativas.\n\nPor quê?\nPorque sistemas automatizados analisam padrões de preenchimento. Quanto mais organizado o formulário, maior a chance de ele ser tratado como uma solicitação legítima.' 
          },
          { 
            id: '2.4', 
            title: 'AULA 2.4 - O campo de mensagem', 
            content: 'O único lugar onde a estratégia realmente importa\n\nO campo de mensagem é o único espaço onde existe possibilidade de influência humana. Por isso, existem regras fundamentais.\n\nNunca faça:\n❌ Escrever em caixa alta;\n❌ Utilizar emojis;\n❌ Fazer ameaças;\n❌ Copiar textos emocionais.\n\nO que fazer:\n✅ Utilizar linguagem formal;\n✅ Ser objetivo;\n✅ Demonstrar organização;\n✅ Solicitar análise, não exigir resultado.\n\nClareza vale mais do que quantidade.' 
          },
          { 
            id: '2.5', 
            title: 'AULA 2.5 - Revisão final antes de enviar', 
            content: 'O ticket é único\n\nAntes de clicar em enviar, faça a checklist:\n\n1. Categoria: Está correta? É neutra?\n2. Dados: O ID foi digitado corretamente? O nickname está exato?\n3. Mensagem: Está objetiva, técnica e organizada?\n4. Tom geral: Isto parece ter sido escrito por alguém calmo e racional?\n\nApós o envio:\n❌ Não envie outro imediatamente;\n❌ Não tente complementar informações;\n❌ Não abra múltiplas solicitações.' 
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
            title: 'AULA 3.1 - Qual opção selecionar', 
            content: 'A primeira decisão que pode definir todo o processo\n\nEvite opções como:\n❌ "Detectamos o uso de softwares não autorizados"\n❌ "O sistema Anti-Trapaça detectou irregularidades"\n❌ "Esta conta foi suspensa permanentemente"\n\nA estratégia correta:\nSempre que possível, escolha opções mais neutras, relacionadas à recuperação ou verificação da conta. Exemplo:\n✅ "Quero recuperar minha conta"\n\nEssa abordagem não antecipa conclusões e mantém a solicitação em categorias mais amplas de análise.' 
          },
          { 
            id: '3.2', 
            title: 'AULA 3.2 - O campo Requester', 
            content: 'O campo "Requester" identifica o solicitante. Sua função é exclusivamente administrativa.\n\nO que inserir:\n- E-mail para contato (válido e acessível).\n\nO que NÃO fazer:\n❌ Escrever o ID da conta;\n❌ Inserir explicações;\n❌ Adicionar observações.\n\nO e-mail não precisa ser o mesmo da conta do jogo.' 
          },
          { 
            id: '3.3', 
            title: 'AULA 3.3 - O campo Assunto', 
            content: 'O assunto pode ativar respostas automáticas. Nunca utilize termos emocionais.\n\nNunca utilize:\n❌ "Fui banido injustamente"\n❌ "Desbanimento urgente"\n❌ "Quero meu desbanimento"\n\nO objetivo do assunto:\nDeve parecer técnico, ser curto e indicar necessidade de análise. Exemplo correto:\n✅ "Solicitação de verificação referente ao acesso da conta."' 
          },
          { 
            id: '3.4', 
            title: 'AULA 3.4 - Nickname da conta', 
            content: 'Não existe margem para criatividade. O nickname deve ser preenchido exatamente como aparece no jogo.\n\nRegras:\n✅ Respeite maiúsculas, minúsculas e símbolos especiais.\n✅ Copie exatamente o nome registrado.' 
          },
          { 
            id: '3.5', 
            title: 'AULA 3.5 - O número de ID', 
            content: 'O dado mais importante do formulário. O ID da conta é o principal identificador interno.\n\n- Copie da fonte oficial;\n- Revise mais de uma vez;\n- Não insira comentários ou justificativas.' 
          },
          { 
            id: '3.6', 
            title: 'AULA 3.6 - Tempo de suspensão', 
            content: 'Nunca invente informações. Se for permanente, marque permanente. Se houver prazo, use o prazo correto.\n\nInformações inconsistentes reduzem a credibilidade da solicitação.' 
          },
          { 
            id: '3.7', 
            title: 'AULA 3.7 - Data do ocorrido', 
            content: 'Informe a data exata se souber ou uma aproximação razoável. Evite "não lembro" ou datas impossíveis.\n\nA coerência demonstra organização e boa-fé.' 
          },
          { 
            id: '3.8', 
            title: 'AULA 3.8 - O campo de descrição', 
            content: 'O único lugar para diferenciação. O que NÃO fazer:\n❌ Acusar, confessar, implorar, ameaçar ou ser emocional.\n\nA descrição deve parecer escrita por alguém calmo, demonstrar organização e solicitar análise. A recomendação deste método é utilizar os modelos prontos do próximo módulo.' 
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
            title: 'AULA 4.1 - Modelo de Ticket nº 1', 
            content: 'Quando utilizar este modelo:\nIndicado para situações em que a conta se tornou inacessível de forma inesperada e não existem informações claras. Apresenta como possível inconsistência técnica.\n\nQuando usar:\n✅ Banimentos automáticos;\n✅ Mensagens genéricas;\n✅ Falta de explicação clara.',
            template: 'Prezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.'
          },
          { 
            id: '4.2', 
            title: 'AULA 4.2 - Modelo de Ticket nº 2', 
            content: 'Quando utilizar este modelo:\nEnfatiza a possibilidade de falha em sistemas automáticos de monitoramento, mantendo uma postura técnica e colaborativa.\n\nQuando usar:\n✅ Suspensões inesperadas;\n✅ Casos sem histórico anterior;\n✅ Primeira tentativa de recuperação.',
            template: 'À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.'
          },
          { 
            id: '4.3', 
            title: 'AULA 4.3 - Modelo de Ticket nº 3', 
            content: 'Quando utilizar este modelo:\nTrabalha com a hipótese de falso positivo e solicita uma análise de integridade da conta.\n\nQuando usar:\n✅ Quando você souber aproximadamente a data do ocorrido;\n✅ Possíveis falsos positivos;\n✅ Contas sem histórico de punições.',
            template: 'Dirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde [data], não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a crer em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.'
          },
          { 
            id: '4.4', 
            title: 'AULA 4.4 - Modelo de Ticket nº 4', 
            content: 'Quando utilizar este modelo:\nEnfatiza a ausência de justificativa apresentada pela plataforma e solicita uma auditoria humana.\n\nQuando usar:\n✅ Quando não houver explicação clara;\n✅ Casos de bloqueio súbito;\n✅ Situações sem aviso prévio.',
            template: 'Saudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.'
          },
          { 
            id: '4.5', 
            title: 'AULA 4.5 - Modelo de Ticket nº 5', 
            content: 'Quando utilizar este modelo:\nApresenta o problema como resultado de uma avaliação automatizada incorreta.\n\nQuando usar:\n✅ Casos aparentemente automáticos;\n✅ Quando houver suspeita de falso positivo;\n✅ Situações de suspensão permanente.',
            template: 'Prezados, minha conta encontra-se inacessível e busco entender o motivo. Acredito que esta situação possa ter sido causada por uma avaliação incorreta de um processo automatizado, visto que sempre zelei por seguir as regras da plataforma. Para resolvermos esta questão, solicito que um especialista de suporte revise o caso manualmente e me comunique os detalhes técnicos que levaram à atual restrição. Agradeço e aguardo um posicionamento.'
          },
          { 
            id: '4.6', 
            title: 'AULA 4.6 - Modelo de Ticket nº 6', 
            content: 'Quando utilizar este modelo:\nAbordagem mais técnica e formal, indicado para tentativas posteriores.\n\nQuando usar:\n✅ Segunda tentativa;\n✅ Casos mais complexos;\n✅ Situações em que o primeiro ticket não obteve análise satisfatória.',
            template: 'À equipe de Suporte, submeto este pedido para verificação de uma alteração anômala de privilégios em minha conta, resultando na impossibilidade de login. O ocorrido não condiz com meu padrão de uso, que é totalmente aderente aos Termos de Serviço. Peço, formalmente, a intervenção de um analista para um diagnóstico preciso e o restabelecimento do meu acesso. Estou à disposição para cooperar com o processo de análise.'
          },
          { 
            id: 'm4-rules', 
            title: '⚠️ AULA EXTRA - Regras Obrigatórias', 
            content: 'Antes de utilizar qualquer modelo, entenda as regras fundamentais:\n\nFaça:\n✅ Utilize apenas um modelo por tentativa;\n✅ Mantenha exatamente o tom do texto;\n✅ Aguarde o prazo correto após o envio.\n\nNunca faça:\n❌ Misturar dois modelos;\n❌ Adicionar emoção ou fazer ameaças;\n❌ Inserir acusações;\n❌ Copiar o mesmo texto diversas vezes.\n\nOs modelos aumentam a possibilidade de leitura humana, mas não garantem a recuperação. O objetivo é evitar os erros que fazem a maioria das tentativas ser encerrada automaticamente.' 
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
            title: 'AULA 5.1 - O tempo de espera correto', 
            content: 'O erro mais comum acontece depois do envio. Excesso de ação produz efeito contrário.\n\nAguarde pelo menos 72 horas. O ideal é entre 7 e 10 dias. Evite qualquer tentativa de reforço antes disso.\n\n❌ Não envie outro ticket no mesmo dia ou abra múltiplas solicitações. Depois de enviar, sua melhor estratégia é esperar.' 
          },
          { 
            id: '5.2', 
            title: 'AULA 5.2 - O que não fazer de jeito nenhum', 
            content: 'Comportamentos que destroem sua tentativa:\n❌ Vários tickets simultâneos;\n❌ Utilizar diversos e-mails diferentes;\n❌ Alterar categorias apenas para "testar";\n❌ Discutir com o suporte ou fazer ameaças.\n\nSistemas internos interpretam insistência excessiva como comportamento inadequado ou tentativa repetitiva.' 
          },
          { 
            id: '5.3', 
            title: 'AULA 5.3 - Quando enviar um novo ticket', 
            content: 'O momento correto para uma nova tentativa é apenas se:\n✅ Passaram pelo menos 7 dias;\n✅ Não houve resposta ou a resposta foi claramente automática.\n\nAo tentar novamente: use outro modelo, altere levemente o assunto e mantenha o tom técnico. ❌ Nunca copie o anterior ou demonstre frustração.' 
          },
          { 
            id: '5.4', 
            title: 'AULA 5.4 - Quando parar', 
            content: 'Interrompa as tentativas quando:\n- Receber resposta final clara e repetida;\n- Plataforma informar que não haverá nova análise;\n- Três tentativas bem espaçadas falharem.\n\nInsistir além disso não gera benefícios e pode dificultar futuras análises ou revisões. Qualidade vale mais que quantidade.' 
          },
          { 
            id: '5.5', 
            title: 'AULA 5.5 - A mentalidade correta', 
            content: 'O método não é força bruta. É sobre evitar filtros automáticos e aumentar chance de análise humana.\n\nO que é: Organização, Controle, Estratégia e Paciência. O que NÃO é: Spam, Pressão, Manipulação ou Discussão.\n\nDepois que o ticket é enviado, a maior ameaça é agir por impulso enviando dezenas de mensagens para "garantir", o que é estatisticamente desastroso.' 
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
            title: 'AULA 6.1 - Como identificar uma resposta automática', 
            content: 'Nem toda resposta significa que alguém realmente leu seu caso. Características de resposta automática:\n✅ Texto extremamente genérico e padronizado.\n✅ Ausência de detalhes específicos ou menção ao ID.\n✅ Encerramento imediato do caso.\n\nExemplos: "Após análise, confirmamos que a penalidade foi aplicada corretamente.", "Não é possível reverter esta decisão.". Se a resposta não menciona dados ou eventos específicos, há grande probabilidade de ser automatizada.' 
          },
          { 
            id: '6.2', 
            title: 'AULA 6.2 - Como identificar uma resposta humana', 
            content: 'Sinais de leitura real:\n✅ Menção ao histórico da conta.\n✅ Referência a informações fornecidas no ticket.\n✅ Solicitação de documentos ou dados adicionais.\n✅ Encaminhamento para análise interna.\n\nSignifica que você ultrapassou a barreira automática. Neste cenário, o maior erro é começar a escrever textos enormes. O objetivo agora é não atrapalhar a análise.' 
          },
          { 
            id: '6.3', 
            title: 'AULA 6.3 - O que fazer se a resposta for automática', 
            content: 'A pior reação é responder imediatamente. Se a resposta foi automática:\n✅ Não responda imediatamente nem discuta.\n✅ Não envie justificativas adicionais ou ameaças.\n✅ Aguarde pelo menos 7 dias.\n\nApós esse período: considere utilizar outro modelo de ticket ou reformular a abordagem. Você está tentando sair do ciclo automático, não discutir com ele.' 
          },
          { 
            id: '6.4', 
            title: 'AULA 6.4 - O que fazer se a resposta for humana', 
            content: 'Quando existe leitura humana, menos é mais.\n✅ Aguarde o prazo informado;\n✅ Responda apenas o que foi solicitado de forma objetiva;\n✅ Mantenha linguagem técnica.\n\n❌ Nunca escreva textos emocionais, reconte toda a história ou faça acusações. Responda apenas a pergunta feita.' 
          },
          { 
            id: '6.5', 
            title: 'AULA 6.5 - O pior erro de todos', 
            content: 'O impulso destrói mais tentativas do que o próprio sistema. Responder emocionalmente com frases como "Mas eu não fiz nada", "Isso é injusto" ou fazer ameaças não produz benefícios.\n\nElas podem encerrar definitivamente a análise e transformar uma possibilidade em uma negativa final. O objetivo sempre foi evitar filtros, aumentar chance de leitura humana e impedir que o usuário prejudique a própria tentativa.' 
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
      completeModule: 'Complete Module and Unlock Next',
      moduleCompleted: 'Module Completed',
      copyToClipboard: 'Copied to clipboard',
      copyDescription: 'The template is ready to be pasted into support.',
      dataStream: 'Data Stream // Access Granted',
      decrypting: 'File decrypting...',
      securityGuidelines: 'Security Guidelines',
      criticalAttention: 'Critical Attention',
      safetyText: 'Success depends on post-send operational silence. Duplicate contacts result in permanent case closure.',
      systemActive: 'PROTOCOL ACTIVE',
      waitDays: 'IF THE ATTEMPT PRODUCED NO RESULT, WAIT MANDATORY +7 DAYS BEFORE NEW CYCLE.',
      officialChannel: 'Access Official Channel',
      copyTemplate: 'Copy Template'
    },
    modules: [
      {
        id: 'module-1',
        tag: 'MODULE 1',
        title: 'UNDERSTAND YOUR BAN',
        description: 'Technical identification of the restriction applied.',
        lessons: [
          { 
            id: '1.1', 
            title: 'LESSON 1.1 - What is an automatic ban', 
            content: 'Understanding how automatic bans work\n\nBefore trying to recover your account, you need to understand an important fact: not all bans are applied the same way.\n\nAn automatic ban occurs when internal systems identify behaviors considered suspicious without necessarily having an initial human analysis. These systems work by patterns, automated detections, and internal checks.\n\nThe main characteristics of an automatic ban are:\n\n- Generic message;\n- Absence of specific details;\n- Fast and standardized responses;\n- Lack of direct reference to user behavior;\n- Automatic closure of the service.\n\nCommon examples:\n"We detected irregular activities."\n"Your account violated our terms of service."\n"The suspension was applied correctly."\n\nWhy is this important?\nBecause automatic bans represent cases where there is still some possibility of requesting a strategic reassessment. The goal of this method is not to argue with the system, but rather to try to get your request past the first automatic layer of analysis.\n\nRemember:\nThe more emotional your message is, the greater the chance of staying trapped in the automatic process.' 
          },
          { 
            id: '1.2', 
            title: 'LESSON 1.2 - What is a manual ban', 
            content: 'When there is human participation in the decision\n\nA manual ban occurs when there is a direct analysis or internal validation carried out by members of the responsible team. In these cases, there are usually more specific elements related to the reason for the punishment.\n\nCommon characteristics:\n- More detailed messages;\n- Direct reference to rules or behaviors;\n- Objective and firm responses;\n- Less flexibility for reassessment.\n\nExamples:\n- Direct quote from the Terms of Service;\n- Information about specific behavior;\n- Explicit confirmation of the violation.\n\nWhat does this mean?\nIt means that the possibility of reversal tends to be significantly lower. This does not mean that you should act on impulse or give up immediately. It just means that the strategy needs to be even more careful.\n\nIn this scenario, the main goal is no longer to "convince" and becomes:\n- Do not make the situation worse;\n- Avoid additional closures;\n- Maintain a technical and organized posture.' 
          },
          { 
            id: '1.3', 
            title: 'LESSON 1.3 - What is a recidivist ban', 
            content: 'When there is a previous history of punishments\n\nA recidivist ban happens when the account already has previous records of punishments, warnings, or suspensions. Platforms normally apply progressively lower tolerance levels for recidivist accounts.\n\nCharacteristics:\n- Faster responses;\n- Less openness for review;\n- Stricter analyses;\n- Extremely low tolerance for new appeals.\n\nThe most common error:\nMany people believe that sending dozens of tickets increases the chances of success. In practice, this usually produces the opposite effect.\n\nWhen there is recidivism, excessive persistence can:\n- Confirm previous decisions;\n- End possibilities for future analysis;\n- Classify the case as a repetitive attempt.\n\nTherefore, the method works with control, organization, and strategy, never with impulsive insistence.' 
          },
          { 
            id: '1.4', 
            title: 'LESSON 1.4 - Case Identification', 
            content: 'The most important step before sending any ticket\n\nBefore writing any message to support, ask these questions:\n\n1. Is the received message generic?\nIf yes, there is a high chance it is an automatic ban.\n\n2. Does the message present specific details?\nIf yes, it may indicate a manual analysis.\n\n3. Has the account received punishments before?\nIf the answer is positive, you are probably facing a recidivist case.\n\nQuick summary:\n- Automatic ban: Generic and fast messages (Chance: Higher)\n- Manual ban: Specific messages (Chance: Low)\n- Recidivist ban: Previous history (Chance: Very low)\n\nWhat you need to understand before continuing:\nAt Garena, there is normally no room for prolonged debate. You send a request and receive a decision. This means your first attempt needs to be:\n✅ Organized\n✅ Technical\n✅ Objective\n✅ Strategic' 
          }
        ]
      },
      {
        id: 'module-2',
        tag: 'MODULE 2',
        title: 'TICKET PREPARATION',
        description: 'Logistics and pre-send strategy.',
        lessons: [
          { 
            id: '2.1', 
            title: 'LESSON 2.1 - Where to send the ticket', 
            content: 'Using only official channels\n\nBefore thinking about the text that will be sent, you need to understand a fundamental rule: a ticket sent in the wrong place is born without a chance of analysis. Many people try to contact via:\n\n- Instagram;\n- Facebook;\n- Discord;\n- Generic emails;\n- Comments on social networks;\n- Unofficial forms.\n\nThese channels do not carry out individual account analysis and do not have the power to change internal decisions.\n\nThe request must be sent exclusively through official support. The goal is to enter the correct flow, avoid unnecessary automatic referrals, and maximize analysis.\n\nRemember:\nAn organized attempt is worth more than ten desperate attempts.' 
          },
          { 
            id: '2.2', 
            title: 'LESSON 2.2 - Choosing the correct category', 
            content: 'The most important decision before the message\n\nWhen opening a ticket, you will need to select a category. The chosen category directly influences how your request will be processed internally.\n\nWhat to avoid:\nAvoid extremely accusatory, definitive categories or those directly related to the confirmation of the punishment. Very specific categories can cause your request to be forwarded directly to standardized responses.\n\nWhat to look for:\nSelect neutral categories that allow analysis and do not anticipate conclusions. Ask yourself: "Does this category seem to open an analysis or just confirm a decision?" If it seems to confirm, choose another more neutral option.' 
          },
          { 
            id: '2.3', 
            title: 'LESSON 2.3 - Filling in the account data', 
            content: 'Less information means fewer problems\n\nThe technical fields exist only for identification. Fill in only:\n\n- Correct account ID;\n- Exact nickname;\n- Requested email;\n- Mandatory information.\n\nNever do this:\n❌ Add extra explanations;\n❌ Tell your story in technical fields;\n❌ Insert justifications.\n\nWhy?\nBecause automated systems analyze filling patterns. The more organized the form, the greater the chance of it being treated as a legitimate request.' 
          },
          { 
            id: '2.4', 
            title: 'LESSON 2.4 - The message field', 
            content: 'The only place where strategy really matters\n\nThe message field is the only space where there is the possibility of human influence. Therefore, there are fundamental rules.\n\nNever do:\n❌ Write in all caps;\n❌ Use emojis;\n❌ Make threats;\n❌ Copy emotional texts.\n\nWhat to do:\n✅ Use formal language;\n✅ Be objective;\n✅ Demonstrate organization;\n✅ Request analysis, do not demand result.\n\nClarity is worth more than quantity.' 
          },
          { 
            id: '2.5', 
            title: 'LESSON 2.5 - Final review before sending', 
            content: 'The ticket is unique\n\nBefore clicking send, go through the checklist:\n\n1. Category: Is it correct? Is it neutral?\n2. Data: Was the ID typed correctly? Is the nickname exact?\n3. Message: Is it objective, technical, and organized?\n4. General tone: Does this seem to have been written by someone calm and rational?\n\nAfter sending:\n❌ Do not send another immediately;\n❌ Do not try to supplement information;\n❌ Do not open multiple requests.' 
          }
        ]
      },
      {
        id: 'module-3',
        tag: 'MODULE 3',
        title: 'STEP BY STEP FILLING',
        description: 'Detailed filling protocol.',
        lessons: [
          { 
            id: '3.1', 
            title: 'LESSON 3.1 - Which option to select', 
            content: 'The first decision that can define the entire process\n\nAvoid options like:\n❌ "We detected the use of unauthorized software"\n❌ "The Anti-Cheat system detected irregularities"\n❌ "This account has been permanently suspended"\n\nThe correct strategy:\nWhenever possible, choose more neutral options related to account recovery or verification. Example:\n✅ "I want to recover my account"\n\nThis approach does not anticipate conclusions and keeps the request in broader analysis categories.' 
          },
          { 
            id: '3.2', 
            title: 'LESSON 3.2 - The Requester field', 
            content: 'The "Requester" field identifies the applicant. Its function is exclusively administrative.\n\nWhat to insert:\n- Contact email (valid and accessible).\n\nWhat NOT to do:\n❌ Write the account ID;\n❌ Insert explanations;\n❌ Add observations.\n\nThe email does not need to be the same as the game account.' 
          },
          { 
            id: '3.3', 
            title: 'LESSON 3.3 - The Subject field', 
            content: 'The subject can trigger automatic responses. Never use emotional terms.\n\nNever use:\n❌ "I was unfairly banned"\n❌ "Urgent unban"\n❌ "I want my unban"\n\nThe goal of the subject:\nIt should look technical, be short, and indicate a need for analysis. Correct example:\n✅ "Verification request regarding account access."' 
          },
          { 
            id: '3.4', 
            title: 'LESSON 3.4 - Account nickname', 
            content: 'There is no room for creativity. The nickname must be filled in exactly as it appears in the game.\n\nRules:\n✅ Respect upper and lower case and special symbols.\n✅ Copy exactly the registered name.' 
          },
          { 
            id: '3.5', 
            title: 'LESSON 3.5 - The ID number', 
            content: 'The most important data on the form. The account ID is the main internal identifier.\n\n- Copy from the official source;\n- Review more than once;\n- Do not insert comments or justifications.' 
          },
          { 
            id: '3.6', 
            title: 'LESSON 3.6 - Suspension time', 
            content: 'Never invent information. If it is permanent, mark permanent. If there is a deadline, use the correct deadline.\n\nInconsistent information reduces the credibility of the request.' 
          },
          { 
            id: '3.7', 
            title: 'LESSON 3.7 - Date of occurrence', 
            content: 'Provide the exact date if you know or a reasonable approximation. Avoid "I don\'t remember" or impossible dates.\n\nCoherence demonstrates organization and good faith.' 
          },
          { 
            id: '3.8', 
            title: 'LESSON 3.8 - The description field', 
            content: 'The only place for differentiation. What NOT to do:\n❌ Accuse, confess, implore, threaten, or be emotional.\n\nThe description should seem written by someone calm, demonstrate organization, and request analysis. The recommendation of this method is to use the ready-made models from the next module.' 
          }
        ]
      },
      {
        id: 'module-4',
        tag: 'MODULE 4',
        title: 'READY MODELS',
        description: 'High conversion strategic templates.',
        lessons: [
          { 
            id: '4.1', 
            title: 'LESSON 4.1 - Ticket Template #1', 
            content: 'When to use this model:\nIndicated for situations where the account became unexpectedly inaccessible and there is no clear information. Presents as possible technical inconsistency.\n\nWhen to use:\n✅ Automatic bans;\n✅ Generic messages;\n✅ Lack of clear explanation.',
            template: 'Dear support, I am writing to request a technical diagnosis regarding a sudden inability to access my account. Upon trying to connect, I encounter an unexpected restriction that I cannot resolve. I believe it might be a systemic anomaly as I am aware that my activities have always been in compliance with the Terms of Service. I kindly request a manual verification of my account status and clarification on the nature of this restriction. I am available to assist in the investigation.'
          },
          { 
            id: '4.2', 
            title: 'LESSON 4.2 - Ticket Template #2', 
            content: 'When to use this model:\nEmphasizes the possibility of failure in automatic monitoring systems, maintaining a technical and collaborative posture.\n\nWhen to use:\n✅ Unexpected suspensions;\n✅ Cases without previous history;\n✅ First recovery attempt.',
            template: 'To the technical team, I am reporting an irregularity preventing my access to the platform. My account became inaccessible without prior notice, and I suspect a failure or error in an automatic monitoring process. I would like to reiterate that I strictly follow community guidelines. Therefore, I formally request that an analyst investigate the occurrence and provide me with an opinion on the cause of the access problem. I remain available to provide logs or other information.'
          },
          { 
            id: '4.3', 
            title: 'LESSON 4.3 - Ticket Template #3', 
            content: 'When to use this model:\nWorks with the hypothesis of a false positive and requests an account integrity analysis.\n\nWhen to use:\n✅ When you approximately know the date of occurrence;\n✅ Possible false positives;\n✅ Accounts without history of punishments.',
            template: 'I am addressing you to request support regarding an access problem to my account. Since [date], I can no longer use the services. Considering that my history of use is guided by compliance with the rules, the situation leads me to believe in a technical error or a false positive of some system. I request that an account integrity analysis be conducted by a team member to identify the source of this anomaly. I await a return and thank you for your attention.'
          },
          { 
            id: '4.4', 
            title: 'LESSON 4.4 - Ticket Template #4', 
            content: 'When to use this model:\nEmphasizes the lack of justification presented by the platform and requests a human audit.\n\nWhen to use:\n✅ When there is no clear explanation;\n✅ Cases of sudden blockage;\n✅ Situations without prior notice.',
            template: 'Greetings. I am contacting the support team to obtain assistance with a failure that is blocking access to my account. I did not receive any notification justifying such an impediment, which suggests a possible inconsistency in the validation systems. I have full conviction of my compliance with game policies. I request a human audit in my account activity record to clarify this incident. I am at your disposal for whatever is needed.'
          },
          { 
            id: '4.5', 
            title: 'LESSON 4.5 - Ticket Template #5', 
            content: 'When to use this model:\nSeeks to present the problem as a result of an incorrect automated evaluation.\n\nWhen to use:\n✅ Apparently automatic cases;\n✅ When there is suspicion of a false positive;\n✅ Permanent suspension situations.',
            template: 'Dear support, my account is inaccessible and I seek to understand the reason. I believe this situation may have been caused by an incorrect evaluation of an automated process, as I have always taken care to follow the rules of the platform. To resolve this issue, I request that a support specialist manually review the case and communicate the technical details that led to the current restriction. Thank you and I await a position.'
          },
          { 
            id: '4.6', 
            title: 'LESSON 4.6 - Ticket Template #6', 
            content: 'When to use this model:\nMore technical and formal approach, indicated for later attempts.\n\nWhen to use:\n✅ Second attempt;\n✅ More complex cases;\n✅ Situations in which the first ticket did not obtain satisfactory analysis.',
            template: 'To the Support team, I submit this request for verification of an anomalous change of privileges in my account, resulting in the inability to log in. The occurrence does not match my pattern of use, which is fully compliant with the Terms of Service. I formally request the intervention of an analyst for a precise diagnosis and the restoration of my access. I am available to cooperate with the analysis process.'
          },
          { 
            id: 'm4-rules', 
            title: '⚠️ EXTRA LESSON - Mandatory Rules', 
            content: 'Before using any model, understand the fundamental rules:\n\nDo:\n✅ Use only one model per attempt;\n✅ Keep the tone of the text exactly;\n✅ Wait for the correct period after sending.\n\nNever do:\n❌ Mix two models;\n❌ Add emotion or make threats;\n❌ Insert accusations;\n❌ Copy the same text multiple times.\n\nThe models increase the possibility of human reading, but do not guarantee recovery. The goal is to avoid errors that cause most attempts to be closed automatically.' 
          }
        ]
      },
      {
        id: 'module-5',
        tag: 'MODULE 5',
        title: 'AFTER SENDING THE TICKET',
        description: 'Management of silence and response windows.',
        lessons: [
          { 
            id: '5.1', 
            title: 'LESSON 5.1 - The correct waiting time', 
            content: 'The most common error happens after sending. Excess action produces the opposite effect.\n\nWait at least 72 hours. The ideal is between 7 and 10 days. Avoid any reinforcement attempt before that.\n\n❌ Do not send another ticket on the same day or open multiple requests. After sending, your best strategy is to wait.' 
          },
          { 
            id: '5.2', 
            title: 'LESSON 5.2 - What NOT to do at all', 
            content: 'Behaviors that destroy your attempt:\n❌ Several simultaneous tickets;\n❌ Using several different emails;\n❌ Changing categories just to "test";\n❌ Arguing with support or making threats.\n\nInternal systems interpret excessive insistence as inappropriate behavior or repetitive attempt.' 
          },
          { 
            id: '5.3', 
            title: 'LESSON 5.3 - When to send a new ticket', 
            content: 'The correct time for a new attempt is only if:\n✅ At least 7 days have passed;\n✅ There was no response or the response was clearly automatic.\n\nWhen trying again: use another model, slightly alter the subject and keep the technical tone. ❌ Never copy the previous one or demonstrate frustration.' 
          },
          { 
            id: '5.4', 
            title: 'LESSON 5.4 - When to stop', 
            content: 'Interrupt attempts when:\n- Receive clear and repeated final response;\n- Platform explicitly informs that there will be no new analysis;\n- Three well-spaced attempts fail.\n\nInsisting beyond that does not generate additional benefits and can make future analyses or reviews difficult. Quality is worth more than quantity.' 
          },
          { 
            id: '5.5', 
            title: 'LESSON 5.5 - The correct mentality', 
            content: 'The method is not brute force. It is about avoiding automatic filters and increasing the chance of human analysis.\n\nWhat it is: Organization, Control, Strategy, and Patience. What it is NOT: Spam, Pressure, Manipulation, or Argument.\n\nAfter the ticket is sent, the biggest threat is acting on impulse by sending dozens of messages to "ensure", which is statistically disastrous.' 
          }
        ]
      },
      {
        id: 'module-6',
        tag: 'MODULE 6',
        title: 'ANALYZING THE RESPONSE',
        description: 'Decoding feedback from support.',
        lessons: [
          { 
            id: '6.1', 
            title: 'LESSON 6.1 - How to identify an automatic response', 
            content: 'Not every response means that someone actually read your case. Characteristics of automatic response:\n✅ Extremely generic and standardized text.\n✅ Absence of specific details or mention of ID.\n✅ Immediate closure of the case.\n\nExamples: "After analysis, we confirm that the penalty was applied correctly.", "It is not possible to reverse this decision.". If the response does not mention specific data or events, there is a high probability of it being automated.' 
          },
          { 
            id: '6.2', 
            title: 'LESSON 6.2 - How to identify a human response', 
            content: 'Signs of real reading:\n✅ Mention of account history.\n✅ Reference to information provided in the ticket.\n✅ Request for additional documents or data.\n✅ Referral for internal analysis.\n\nIt means that you have surpassed the automatic barrier. In this scenario, the biggest error is to start writing huge texts. The goal now is not to get in the way of the analysis.' 
          },
          { 
            id: '6.3', 
            title: 'LESSON 6.3 - What to do if the response is automatic', 
            content: 'The worst reaction is to respond immediately. If the response was automatic:\n✅ Do not respond immediately or argue.\n✅ Do not send additional justifications or threats.\n✅ Wait at least 7 days.\n\nAfter this period: consider using another ticket model or reformulating the approach. You are trying to escape the automatic cycle, not argue with it.' 
          },
          { 
            id: '6.4', 
            title: 'LESSON 6.4 - What to do if the response is human', 
            content: 'When there is human reading, less is more.\n✅ Wait for the informed period;\n✅ Respond only to what was requested in an objective way;\n✅ Maintain technical language.\n\n❌ Never write emotional texts, retell the entire story, or make accusations. Only answer the question asked.' 
          },
          { 
            id: '6.5', 
            title: 'LESSON 6.5 - The worst error of all', 
            content: 'Impulse destroys more attempts than the system itself. Responding emotionally with phrases like "But I didn\'t do anything", "This is unfair" or making threats does not produce benefits.\n\nThey can definitively end the analysis and transform a possibility into a final denial. The goal has always been to avoid filters, increase the chance of human reading, and prevent the user from harming their own attempt.' 
          }
        ]
      }
    ]
  },
  es: {
    selectLanguage: 'Seleccionar Idioma',
    protocolInitialization: 'Inicialización de Protocolo // Seleccione la Región',
    hero: {
      title: 'UNBAN',
      titleAccent: 'STRATEGY',
      description: 'Trucos y estrategias exclusivas para ayudar en su proceso de recuperación de cuentas.',
    },
    ui: {
      locked: 'Bloqueado - Complete el módulo anterior',
      accessModule: 'Acceder al Módulo',
      completeModule: 'Completar Módulo y Desbloquear Próximo',
      moduleCompleted: 'Módulo Completado',
      copyToClipboard: 'Copiado al portapapeles',
      copyDescription: 'La plantilla está lista para ser pegada en el soporte.',
      dataStream: 'Data Stream // Acceso Concedido',
      decrypting: 'Archivo en proceso de descifrado...',
      securityGuidelines: 'Directrices de Seguridad',
      criticalAttention: 'Atención Crítica',
      safetyText: 'El éxito depende del silencio operativo posterior al envío. Los contactos duplicados resultan en el cierre definitivo del caso.',
      systemActive: 'PROTOCOLO ACTIVO',
      waitDays: 'SI EL INTENTO NO PRODUJO RESULTADO, ESPERE OBLIGATORIAMENTE +7 DÍAS ANTES DE UN NUEVO CICLO.',
      officialChannel: 'Acceder al Canal Oficial',
      copyTemplate: 'Copiar Plantilla'
    },
    modules: [
      {
        id: 'module-1',
        tag: 'MÓDULO 1',
        title: 'ENTIENDA SU BANEO',
        description: 'Identificación técnica de la restricción aplicada.',
        lessons: [
          { 
            id: '1.1', 
            title: 'AULA 1.1 - Qué es el baneo automático', 
            content: 'Entendiendo el funcionamiento de los baneos automáticos\n\nAntes de intentar recuperar su cuenta, debe entender un hecho importante: no todos los baneos se aplican de la misma forma.\n\nEl baneo automático ocurre cuando los sistemas internos identifican comportamientos considerados sospechosos sin que necesariamente exista un análisis humano inicial. Estos sistemas funcionan por patrones, detecciones automatizadas y verificaciones internas.\n\nLas principales características de un baneo automático son:\n\n- Mensaje genérico;\n- Ausencia de detalles específicos;\n- Respuestas rápidas y estandarizadas;\n- Falta de referencia directa al comportamiento del usuario;\n- Cierre automático de la atención.\n\nEjemplos comunes:\n"Detectamos actividades irregulares."\n"Su cuenta violó nuestros términos de servicio."\n"La suspensión se aplicó correctamente."\n\n¿Por qué es esto importante?\nPorque los baneos automáticos representan los casos en los que todavía existe alguna posibilidad de solicitar una reevaluación estratégica. El objetivo de este método no es discutir con el sistema, sino intentar que su solicitud supere la primera capa automática de análisis.\n\nRecuerde:\nCuanto más emocional sea su mensaje, mayor será la posibilidad de permanecer atrapado en el proceso automático.' 
          },
          { 
            id: '1.2', 
            title: 'AULA 1.2 - Qué es el baneo manual', 
            content: 'Cuando hay participación humana en la decisión\n\nEl baneo manual ocurre cuando existe un análisis directo o validación interna realizada por miembros del equipo responsable. En estos casos, normalmente existen elementos más específicos relacionados con el motivo de la sanción.\n\nCaracterísticas comunes:\n- Mensajes más detallados;\n- Referencia directa a reglas o comportamientos;\n- Respuestas objetivas y firmes;\n- Menor flexibilidad para la reevaluación.\n\nEjemplos:\n- Cita directa de los Términos de Servicio;\n- Información sobre comportamiento específico;\n- Confirmación explícita de la violación.\n\n¿Qué significa esto?\nSignifica que la posibilidad de reversión tiende a ser significativamente menor. Esto no quiere decir que deba actuar por impulso o rendirse de inmediato. Significa simplemente que la estrategia debe ser aún más cuidadosa.\n\nEn este escenario, el objetivo principal deja de ser "convencer" y pasa a ser:\n- No empeorar la situación;\n- Evitar cierres adicionales;\n- Mantener una postura técnica y organizada.' 
          },
          { 
            id: '1.3', 
            title: 'AULA 1.3 - Qué es el baneo reincidente', 
            content: 'Cuando existe un historial previo de sanciones\n\nEl baneo reincidente ocurre cuando la cuenta ya tiene registros previos de sanciones, advertencias o suspensiones. Las plataformas normalmente aplican niveles de tolerancia progresivamente menores para cuentas reincidentes.\n\nCaracterísticas:\n- Respuestas más rápidas;\n- Menor apertura para revisión;\n- Análisis más estrictos;\n- Bajísima tolerancia a nuevas apelaciones.\n\nEl error más común:\nMuchas personas creen que enviar docenas de tickets aumenta las posibilidades de éxito. En la práctica, esto generalmente produce el efecto contrario.\n\nCuando hay reincidencia, la insistencia excesiva puede:\n- Confirmar decisiones anteriores;\n- Cerrar posibilidades de análisis futuro;\n- Clasificar el caso como intento repetitivo.\n\nPor lo tanto, el método trabaja con control, organización y estrategia, nunca con insistencia impulsiva.' 
          },
          { 
            id: '1.4', 
            title: 'AULA 1.4 - Identificación de Caso', 
            content: 'El paso más importante antes de enviar cualquier ticket\n\nAntes de escribir cualquier mensaje al soporte, hágase estas preguntas:\n\n1. ¿El mensaje recibido es genérico?\nSi es así, hay grandes posibilidades de que sea un baneo automático.\n\n2. ¿El mensaje presenta detalles específicos?\nSi es así, puede indicar un análisis manual.\n\n3. ¿La cuenta ya ha recibido sanciones anteriormente?\nSi la respuesta es positiva, probablemente se enfrente a un caso reincidente.\n\nResumen rápido:\n- Baneo automático: Mensajes genéricos y rápidos (Probabilidad: Mayor)\n- Baneo manual: Mensajes específicos (Probabilidad: Baja)\n- Baneo reincidente: Historial previo (Probabilidad: Muy baja)\n\nLo que debe entender antes de continuar:\nEn Garena, normalmente no hay espacio para un debate prolongado. Envía una solicitud y recibe una decisión. Esto significa que su primer intento debe ser:\n✅ Organizado\n✅ Técnico\n✅ Objetivo\n✅ Estratégico' 
          }
        ]
      },
      {
        id: 'module-2',
        tag: 'MÓDULO 2',
        title: 'PREPARACIÓN DEL TICKET',
        description: 'Logística y estrategia previa al envío.',
        lessons: [
          { 
            id: '2.1', 
            title: 'AULA 2.1 - Dónde enviar el ticket', 
            content: 'Utilizando solo canales oficiales\n\nAntes de pensar en el texto que se enviará, debe entender una regla fundamental: un ticket enviado en el lugar equivocado nace sin posibilidad de análisis. Muchas personas intentan contactar a través de:\n\n- Instagram;\n- Facebook;\n- Discord;\n- Correos electrónicos genéricos;\n- Comentarios en redes sociales;\n- Formularios no oficiales.\n\nEstos canales no realizan análisis individual de cuentas y no tienen poder para alterar decisiones internas.\n\nLa solicitud debe enviarse exclusivamente a través del soporte oficial. El objetivo es entrar en el flujo correcto, evitar redireccionamientos automáticos innecesarios y maximizar el análisis.\n\nRecuerde:\nUn intento organizado vale más que diez intentos desesperados.' 
          },
          { 
            id: '2.2', 
            title: 'AULA 2.2 - Eligiendo la categoría correcta', 
            content: 'La decisión más importante antes del mensaje\n\nAl abrir un ticket, deberá seleccionar una categoría. La categoría elegida influye directamente en la forma en que su solicitud se procesará internamente.\n\nQué evitar:\nEvite categorías extremadamente acusatorias, definitivas o que ya confirmen la sanción. Las categorías muy específicas pueden hacer que su solicitud se redirija directamente a respuestas estandarizadas.\n\nQué buscar:\nSeleccione categorías neutras que permitan el análisis y no anticipen conclusiones. Pregúntese: "¿Esta categoría parece abrir un análisis o solo confirmar una decisión?" Si parece confirmar, elija otra opción más neutra.' 
          },
          { 
            id: '2.3', 
            title: 'AULA 2.3 - Completando los datos de la cuenta', 
            content: 'Menos información significa menos problemas\n\nLos campos técnicos existen solo para la identificación. Complete solo:\n\n- ID correcto de la cuenta;\n- Nickname exacto;\n- Correo electrónico solicitado;\n- Información obligatoria.\n\nNunca haga esto:\n❌ Añadir explicaciones extra;\n❌ Contar su historia en campos técnicos;\n❌ Insertar justificaciones.\n\n¿Por qué?\nPorque os sistemas automatizados analizan patrones de llenado. Cuanto más organizado esté el formulario, mayor será la posibilidad de que sea tratado como una solicitud legítima.' 
          },
          { 
            id: '2.4', 
            title: 'AULA 2.4 - El campo de mensaje', 
            content: 'El único lugar donde la estrategia realmente importa\n\nEl campo de mensaje es el único espacio donde existe la posibilidad de influencia humana. Por lo tanto, existen reglas fundamentales.\n\nNunca haga:\n❌ Escribir en mayúsculas;\n❌ Utilizar emojis;\n❌ Hacer amenazas;\n❌ Copiar textos emocionales.\n\nQué hacer:\n✅ Utilizar lenguaje formal;\n✅ Ser objetivo;\n✅ Demostrar organización;\n✅ Solicitar análisis, no exigir resultado.\n\nLa claridad vale más que la cantidad.' 
          },
          { 
            id: '2.5', 
            title: 'AULA 2.5 - Revisión final antes de enviar', 
            content: 'El ticket es único\n\nAntes de hacer clic en enviar, pase por la lista de verificación:\n\n1. Categoría: ¿Es correcta? ¿Es neutra?\n2. Datos: ¿El ID se escribió correctamente? ¿El nickname es exacto?\n3. Mensaje: ¿Es objetivo, técnico y está organizado?\n4. Tono general: ¿Parece haber sido escrito por alguien tranquilo y racional?\n\nDespués del envío:\n❌ No envíe otro de inmediato;\n❌ No intente complementar información;\n❌ No abra múltiples solicitudes.' 
          }
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'LLENADO PASO A PASO',
        description: 'Protocolo detallado de llenado.',
        lessons: [
          { 
            id: '3.1', 
            title: 'AULA 3.1 - Qué opción seleccionar', 
            content: 'La primera decisión que puede definir todo el proceso\n\nEvite opciones como:\n❌ "Detectamos el uso de software no autorizado"\n❌ "El sistema Anti-Cheat detectó irregularidades"\n❌ "Esta cuenta ha sido suspendida permanentemente"\n\nLa estrategia correcta:\nSiempre que sea posible, elija opciones más neutras relacionadas con la recuperación o verificación de la cuenta. Ejemplo:\n✅ "Quiero recuperar mi cuenta"\n\nEste enfoque no anticipa conclusiones y mantiene la solicitud en categorías más amplias de análisis.' 
          },
          { 
            id: '3.2', 
            title: 'AULA 3.2 - El campo Requester', 
            content: 'El campo "Requester" identifica al solicitante. Su función es exclusivamente administrativa.\n\nQué insertar:\n- Correo electrónico de contacto (válido y accesible).\n\nQué NO hacer:\n❌ Escribir el ID de la cuenta;\n❌ Insertar explicaciones;\n❌ Añadir observaciones.\n\nEl correo electrónico no necesita ser el mismo que el de la cuenta del juego.' 
          },
          { 
            id: '3.3', 
            title: 'AULA 3.3 - El campo Asunto', 
            content: 'El asunto puede activar respuestas automáticas. Nunca utilice términos emocionales.\n\nNunca utilice:\n❌ "Fui baneado injustamente"\n❌ "Desbaneo urgente"\n❌ "Quiero mi desbaneo"\n\nEl objetivo del asunto:\nDebe parecer técnico, ser corto e indicar necesidad de análisis. Ejemplo correcto:\n✅ "Solicitud de verificación referente al acceso de la cuenta."' 
          },
          { 
            id: '3.4', 
            title: 'AULA 3.4 - Nickname de la cuenta', 
            content: 'No hay margen para la creatividad. El nickname debe completarse exactamente como aparece en el juego.\n\nReglas:\n✅ Respete mayúsculas, minúsculas y símbolos especiales.\n✅ Copie exactamente el nombre registrado.' 
          },
          { 
            id: '3.5', 
            title: 'AULA 3.5 - El número de ID', 
            content: 'El dato más importante del formulario. El ID de la cuenta es el principal identificador interno.\n\n- Copie de la fuente oficial;\n- Revise más de una vez;\n- No inserte comentarios ni justificaciones.' 
          },
          { 
            id: '3.6', 
            title: 'AULA 3.6 - Tiempo de suspensión', 
            content: 'Nunca invente información. Si es permanente, marque permanente. Si hay un plazo, use el plazo correcto.\n\nLa información inconsistente reduce la credibilidad de la solicitud.' 
          },
          { 
            id: '3.7', 
            title: 'AULA 3.7 - Fecha del suceso', 
            content: 'Proporcione la fecha exacta si la conoce o una aproximación razonable. Evite "no recuerdo" o fechas imposibles.\n\nLa coherencia demuestra organización y buena fe.' 
          },
          { 
            id: '3.8', 
            title: 'AULA 3.8 - El campo de descripción', 
            content: 'El único lugar para la diferenciación. Qué NO hacer:\n❌ Acusar, confesar, implorar, amenazar o ser emocional.\n\nLa descripción debe parecer escrita por alguien tranquilo, demostrar organización y solicitar análisis. La recomendación de este método es utilizar los modelos listos del próximo módulo.' 
          }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'MODELOS LISTOS',
        description: 'Plantillas estratégicas de alta conversión.',
        lessons: [
          { 
            id: '4.1', 
            title: 'AULA 4.1 - Modelo de Ticket nº 1', 
            content: 'Cuándo utilizar este modelo:\nIndicado para situaciones en las que la cuenta se volvió inaccesible de forma inesperada y no hay información clara. Se presenta como posible inconsistencia técnica.\n\nCuándo usar:\n✅ Baneos automáticos;\n✅ Mensajes genéricos;\n✅ Falta de explicación clara.',
            template: 'Estimados, escribo para solicitar un diagnóstico técnico referente a una súbita imposibilidad de acceder a mi cuenta. Al intentar conectar, encuentro una restricción inesperada que no puedo resolver. Creo que podría tratarse de una anomalía sistémica, ya que soy consciente de que mis actividades siempre han estado en conformidad con los Términos de Servicio. Solicito, por favor, una verificación manual del estado de mi cuenta y una aclaración sobre la naturaleza de esta restricción. Quedo a su disposición para ayudar en la investigación.'
          },
          { 
            id: '4.2', 
            title: 'AULA 4.2 - Modelo de Ticket nº 2', 
            content: 'Cuándo utilizar este modelo:\nEnfatiza la posibilidad de falla en los sistemas automáticos de monitoreo, manteniendo una postura técnica y colaborativa.\n\nCuándo usar:\n✅ Suspensiones inesperadas;\n✅ Casos sin historial previo;\n✅ Primer intento de recuperación.',
            template: 'Al equipo técnico, vengo a reportar una irregularidad que impide mi acceso a la plataforma. Mi cuenta se volvió inaccesible sin previo aviso, y sospecho de una falla o un error en algún proceso de monitoreo automático. Me gustaría reiterar que sigo estrictamente las directrices de la comunidad. Por lo tanto, pido formalmente que un analista investigue lo ocurrido y me proporcione un dictamen sobre la causa del problema de acceso. Sigo disponible para proporcionar logs u otra información.'
          },
          { 
            id: '4.3', 
            title: 'AULA 4.3 - Modelo de Ticket nº 3', 
            content: 'Cuándo utilizar este modelo:\nTrabaja con la hipótesis de falso positivo y solicita un análisis de integridad de la cuenta.\n\nCuándo usar:\n✅ Cuando sepa aproximadamente la fecha del suceso;\n✅ Posibles falsos positivos;\n✅ Cuentas sin historial de sanciones.',
            template: 'Me dirijo a ustedes para solicitar soporte con respecto a un problema de acceso a mi cuenta. Desde [fecha], ya no puedo utilizar los servicios. Considerando que mi historial de uso se guía por el cumplimiento de las reglas, la situación me lleva a creer en un error técnico o un falso positivo de algún sistema. Pido que se realice un análisis de integridad de la cuenta por parte de un miembro del equipo para identificar el origen de esta anomalía. Espero una respuesta y agradezco su atención.'
          },
          { 
            id: '4.4', 
            title: 'AULA 4.4 - Modelo de Ticket nº 4', 
            content: 'Cuándo utilizar este modelo:\nEnfatiza la falta de justificación presentada por la plataforma y solicita una auditoría humana.\n\nCuándo usar:\n✅ Cuando no haya una explicación clara;\n✅ Casos de bloqueo súbito;\n✅ Situaciones sin previo aviso.',
            template: 'Saludos. Contacto al equipo de soporte para obtener asistencia con una falla que está bloqueando el acceso a mi cuenta. No recibí ninguna notificación que justificara tal impedimento, lo que sugiere una posible inconsistencia en los sistemas de validación. Tengo plena convicción de mi cumplimiento con las políticas del juego. Solicito una auditoría humana en el registro de actividades de mi cuenta para aclarar este incidente. Me pongo a su disposición para lo que sea necesario.'
          },
          { 
            id: '4.5', 
            title: 'AULA 4.5 - Modelo de Ticket nº 5', 
            content: 'Cuándo utilizar este modelo:\nBusca presentar el problema como resultado de una evaluación automatizada incorrecta.\n\nCuándo usar:\n✅ Casos aparentemente automáticos;\n✅ Cuando haya sospecha de falso positivo;\n✅ Situaciones de suspensión permanente.',
            template: 'Estimados, mi cuenta se encuentra inaccesible y busco entender el motivo. Creo que esta situación puede haber sido causada por una evaluación incorrecta de un proceso automatizado, ya que siempre me he preocupado por seguir las reglas de la plataforma. Para resolver esta cuestión, solicito que un especialista de soporte revise el caso manualmente y me comunique los detalles técnicos que llevaron a la restricción actual. Gracias y espero una posición.'
          },
          { 
            id: '4.6', 
            title: 'AULA 4.6 - Modelo de Ticket nº 6', 
            content: 'Cuándo utilizar este modelo:\nEnfoque más técnico y formal, indicado para intentos posteriores.\n\nCuándo usar:\n✅ Segundo intento;\n✅ Casos más complejos;\n✅ Situaciones en las que o primeiro ticket no obtuvo un análisis satisfactorio.',
            template: 'Al equipo de Soporte, presento este pedido de verificación de una alteración anómala de privilegios en mi cuenta, resultando en la imposibilidad de iniciar sesión. Lo ocurrido no coincide con mi patrón de uso, que es totalmente adherente a los Términos de Servicio. Pido, formalmente, la intervención de un analista para un diagnóstico preciso y el restablecimiento de mi acceso. Estoy a su disposición para cooperar con el proceso de análisis.'
          },
          { 
            id: 'm4-rules', 
            title: '⚠️ AULA EXTRA - Reglas Obligatorias', 
            content: 'Antes de utilizar cualquier modelo, entienda las reglas fundamentales:\n\nHaga:\n✅ Utilice solo un modelo por intento;\n✅ Mantenga exactamente el tono del texto;\n✅ Espere el plazo correcto después del envío.\n\nNunca haga:\n❌ Mezclar dos modelos;\n❌ Añadir emoción o hacer amenazas;\n❌ Insertar acusaciones;\n❌ Copiar el mismo texto varias veces.\n\nLos modelos aumentan la posibilidad de lectura humana, pero no garanten la recuperación. El objetivo es evitar los errores que hacen que la mayoría de los intentos se cierren automáticamente.' 
          }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'DESPUÉS DE ENVIAR EL TICKET',
        description: 'Gestión de silencio y ventanas de respuesta.',
        lessons: [
          { 
            id: '5.1', 
            title: 'AULA 5.1 - El tiempo de espera correcto', 
            content: 'El error más común ocurre después del envío. El exceso de acción produce o efecto contrario.\n\nEspere al menos 72 horas. Lo ideal es entre 7 y 10 días. Evite cualquier intento de refuerzo antes de ese plazo.\n\n❌ No envíe otro ticket el mismo día ni abra múltiples solicitudes. Después de enviar, su mejor estrategia es esperar.' 
          },
          { 
            id: '5.2', 
            title: 'AULA 5.2 - Qué no hacer bajo ninguna circunstancia', 
            content: 'Comportamientos que destruyen su intento:\n❌ Varios tickets simultáneos;\n❌ Utilizar varios correos electrónicos diferentes;\n❌ Cambiar categorías solo para "probar";\n❌ Discutir con el soporte o hacer amenazas.\n\nLos sistemas internos interpretan la insistencia excesiva como comportamiento inadecuado o intento repetitivo.' 
          },
          { 
            id: '5.3', 
            title: 'AULA 5.3 - Cuándo enviar un nuevo ticket', 
            content: 'El momento correcto para un nuevo intento es solo si:\n✅ Han pasado al menos 7 días;\n✅ No hubo respuesta o la respuesta fue claramente automática.\n\nAl intentar de nuevo: use otro modelo, altere ligeramente el asunto y mantenga el tono técnico. ❌ Nunca copie o anterior ni demuestre frustración.' 
          },
          { 
            id: '5.4', 
            title: 'AULA 5.4 - Cuándo parar', 
            content: 'Interrumpa los intentos cuando:\n- Reciba una respuesta final clara y repetida;\n- La plataforma informe explícitamente que no habrá un nuevo análisis;\n- Tres intentos bien espaciados fallen.\n\nInsistir más allá de eso no genera beneficios adicionales y puede dificultar futuros análisis o revisiones. La calidad vale más que la cantidad.' 
          },
          { 
            id: '5.5', 
            title: 'AULA 5.5 - La mentalidad correcta', 
            content: 'El método no es fuerza bruta. Se trata de evitar filtros automáticos y aumentar la posibilidad de análisis humano.\n\nQué es: Organización, Control, Estrategia y Paciencia. Qué NO es: Spam, Presión, Manipulación o Discusión.\n\nDespués de enviar el ticket, la mayor amenaza es actuar por impulso enviando docenas de mensajes para "asegurar", lo cual es estadísticamente desastroso.' 
          }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALIZANDO LA RESPUESTA',
        description: 'Decodificación de feedback del soporte.',
        lessons: [
          { 
            id: '6.1', 
            title: 'AULA 6.1 - Cómo identificar una respuesta automática', 
            content: 'No toda respuesta significa que alguien realmente haya leído su caso. Características de una respuesta automática:\n✅ Texto extremadamente genérico y estandarizado.\n✅ Ausencia de detalles específicos o mención del ID.\n✅ Cierre inmediato del caso.\n\nEjemplos: "Tras el análisis, confirmamos que la penalización se aplicó correctamente.", "No es posible revertir esta decisión.". Si la respuesta no menciona datos o eventos específicos, hay una gran probabilidad de que sea automatizada.' 
          },
          { 
            id: '6.2', 
            title: 'AULA 6.2 - Cómo identificar una respuesta humana', 
            content: 'Señales de lectura real:\n✅ Mención al historial de la cuenta.\n✅ Referencia a la información proporcionada en el ticket.\n✅ Solicitud de documentos o datos adicionales.\n✅ Derivación para análisis interno.\n\nSignifica que ha superado la barrera automática. En este escenario, el mayor error es empezar a escribir textos enormes. El objetivo ahora es no entorpecer el análisis.' 
          },
          { 
            id: '6.3', 
            title: 'AULA 6.3 - Qué hacer si la respuesta es automática', 
            content: 'La peor reacción es responder de inmediato. Si la respuesta fue automática:\n✅ No responda de inmediato ni discuta.\n✅ No envíe justificaciones adicionales ni amenazas.\n✅ Espere al menos 7 dias.\n\nDespués de este período: considere utilizar otro modelo de ticket o reformular el enfoque. Está intentando salir del ciclo automático, no discutir con él.' 
          },
          { 
            id: '6.4', 
            title: 'AULA 6.4 - Qué hacer si la respuesta es humana', 
            content: 'Cuando hay lectura humana, menos es más.\n✅ Espere el plazo informado;\n✅ Responda solo lo solicitado de forma objetiva;\n✅ Mantenga el lenguaje técnico.\n\n❌ Nunca escriba textos emocionales, vuelva a contar toda la historia ni haga acusaciones. Responda solo la pregunta realizada.' 
          },
          { 
            id: '6.5', 
            title: 'AULA 6.5 - El peor error de todos', 
            content: 'El impulso destruye más intentos que el propio sistema. Responder emocionalmente con frases como "Pero yo no hice nada", "Esto es injusto" o hacer amenazas no produce beneficios.\n\nEstas respuestas pueden cerrar definitivamente el análisis y transformar una posibilidad en una negativa final. El objetivo siempre fue evitar filtros, aumentar la posibilidad de lectura humana e impedir que el usuario perjudique su propio intento.' 
          }
        ]
      }
    ]
  }
};
