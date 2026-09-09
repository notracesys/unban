
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
    orderBump: {
      title: 'PACK VIP 100%',
      description: 'Caso tenha comprado junto com o PACK de suporte 100% com minha ajuda, clique no botão abaixo.',
      button: 'ACESSAR SUPORTE VIP'
    },
    bypass: {
      title: 'PACK BYPASS 100%',
      description: 'Caso tenha comprado junto com o PACK de BYPASS com minha ajuda, clique no botão abaixo.',
      button: 'ACESSAR SUPORTE BYPASS'
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
            title: 'AULA 1.1 - O QUE É BANIMENTO AUTOMÁTICO', 
            content: 'Entendendo o funcionamento dos banimentos automáticos\n\nAntes de tentar recuperar sua conta, você precisa entender um fato importante: nem todos os banimentos são aplicados da mesma forma.\n\nO banimento automático ocorre quando sistemas internos identificam comportamentos considerados suspeitos sem que necessariamente exista uma análise humana inicial. Esses sistemas funcionam por padrões, detecções automatizadas e verificações internas.\n\nAs principais características de um banimento automático são:\n\nMensagem genérica;\nAusência de detalhes específicos;\nRespostas rápidas e padronizadas;\nFalta de referência direta ao comportamento do usuário;\nEncerramento automático do atendimento.\n\nExemplos comuns:\n\n"Detectamos atividades irregulares."\n"Sua conta violou nossos termos de serviço."\n"A suspensão foi aplicada corretamente."\nPor que isso é importante?\n\nPorque os banimentos automáticos representam os casos em que ainda existe alguma possibilidade de solicitar uma reavaliação estratégica.\n\nO objetivo deste método não é discutir com o sistema, mas sim tentar fazer com que sua solicitação ultrapasse a primeira camada automática de análise.\n\nLembre-se:\n\nQuanto mais emocional for sua mensagem, maior a chance de permanecer preso no processo automático.' 
          },
          { 
            id: '1.2', 
            title: 'AULA 1.2 - O QUE É BANIMENTO MANUAL', 
            content: 'Quando existe participação humana na decisão\n\nO banimento manual ocorre quando existe uma análise direta ou validação interna realizada por membros da equipe responsável.\n\nNesses casos, normalmente existem elementos mais específicos relacionados ao motivo da punição.\n\nCaracterísticas comuns:\n\nMensagens mais detalhadas;\nReferência direta a regras ou comportamentos;\nRespostas objetivas e firmes;\nMenor flexibilidade para reavaliação.\n\nExemplos:\n\nCitação direta dos Termos de Serviço;\nInformação sobre comportamento específico;\nConfirmação explícita da violação. \n\nO que isso significa?\n\nSignifica que a possibilidade de reversão tende a ser significativamente menor.\n\nIsso não quer dizer que você deva agir por impulso ou desistir imediatamente. Significa apenas que a estratégia precisa ser ainda mais cuidadosa.\n\nNeste cenário, o principal objetivo deixa de ser "convencer" e passa a ser:\n\nNão piorar a situação;\nEvitar encerramentos adicionais;\nManter uma postura técnica e organizada.' 
          },
          { 
            id: '1.3', 
            title: 'AULA 1.3 - O QUE É BANIMENTO REINCIDENTE', 
            content: 'Quando existe histórico anterior de punições\n\nO banimento reincidente acontece quando a conta já possui registros anteriores de punições, advertências ou suspensões.\n\nPlataformas normalmente aplicam níveis de tolerância progressivamente menores para contas reincidentes.\n\nCaracterísticas:\n\nRespostas mais rápidas;\nMenor abertura para revisão;\nAnálises mais rígidas;\nBaixíssima tolerância a novos recursos.\n\nO erro mais comum\n\nMuitas pessoas acreditam que enviar dezenas de tickets aumenta as chances de sucesso.\n\nNa prática, isso geralmente produz o efeito contrário.\n\nQuando existe reincidência, instência excessiva pode:\n\nConfirmar decisões anteriores;\nEncerrar possibilidades de análise futuro;\nClassificar o caso como tentativa repetitiva.\n\nPor isso, o método trabalha com controle, organização e estratégia, nunca com insistência impulsiva.' 
          },
          { 
            id: '1.4', 
            title: 'AULA 1.4 - COMO IDENTIFICAR QUAL É O SEU CASO', 
            content: 'A etapa mais importante antes de enviar qualquer ticket\n\nAntes de escrever qualquer mensagem para o suporte, faça estas perguntas:\n\nA mensagem recebida é genérica?\n\nSe sim, há grandes chances de ser um banimento automático.\n\nA mensagem apresenta detalhes específicos?\n\nSe sim, pode indicar uma análise manual.\n\nA conta já recebeu punições anteriormente?\n\nSe a resposta for positiva, você provavelmente está diante de um caso reincidente.\n\nResumo rápido\nTipo\tCaracterísticas\tChance de tentativa\nBanimento automático\tMensagens genéricas e rápidas\tMaior\nBanimento manual\tMensagens específicas\tBaixa\nBanimento reincidente\tHistórico anterior\tMuito baixa\n\nO que você precisa entender antes de continuar\n\nNa Garena, normalmente não existe espaço para debate prolongado.\n\nVocê envia uma solicitação e recebe uma decisão.\n\nIsso significa que sua primeira tentativa precisa ser:\n\n✅ Organizada\n✅ Técnica\n✅ Objetiva\n✅ Estratégica' 
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
            title: 'AULA 2.1 - ONDE ENVIAR O TICKET', 
            content: 'Utilizando apenas canais oficiais\n\nAntes de pensar no texto que será enviado, você precisa entender uma regra fundamental:\n\nUm ticket enviado no local errado já nasce sem chance de análise.\n\nMuitas pessoas, após perderem o acesso à conta, tentam entrar em contato através de:\n\nInstagram;\nFacebook;\nDiscord;\nE-mails genéricos;\nComentários em redes sociais;\nFormulários não oficiais.\n\nEsses canais não realizam análise individual de contas e, na maioria dos casos, não possuem qualquer poder para alterar decisões internas.\n\nO procedimento correto\n\nA solicitação deve ser enviada exclusivamente através do suporte oficial disponibilizado pela plataforma.\n\nO objetivo do método é simples:\n\nentrar no fluxo correto de atendimento;\nevitar encaminhamentos automáticos desnecessários;\nmaximizar a possibilidade de análise.\n\nO primeiro erro que elimina tentativas\n\nMuitas pessoas enviam mensagens para diversos canais simultaneamente.\n\nIsso não aumenta as chances.\n\nNa prática, apenas cria registros redundantes e pode prejudicar a consistência do caso.\n\nLembre-se:\n\nUma tentativa organizada vale mais do que dez tentativas desesperadas.' 
          },
          { 
            id: '2.2', 
            title: 'AULA 2.2 - ESCOLHENDO A CATEGORIA CORRETA', 
            content: 'A decisão mais importante antes da mensagem\n\nAo abrir um ticket, você precisará selecionar uma categoria.\n\nA maioria das pessoas trata essa etapa como um detalhe.\n\nNão é.\n\nA categoria escolhida influencia diretamente a forma como sua solicitação será processada internamente.\n\nO que evitar\n\nEvite categorias:\n\nextremamente acusatórias;\ndefinitivas;\nrelacionadas diretamente à confirmação da punição.\n\nCategorias muito específicas podem fazer sua solicitação ser encaminhada diretamente para respostas padronizadas.\n\nO que procurar\n\nA estratégia consiste em selecionar categorias que:\n\npermitam análise;\nsejam mais neutras;\nnão antecipem conclusões.\n\nO objetivo não é esconder informações.\n\nO objetivo é evitar que sua tentativa seja encerrada antes mesmo da leitura.\n\nRegra prática\n\nPergunte a si mesmo:\n\nEsta categoria parece abrir uma análise ou apenas confirmar uma decisão?\n\nSe parecer confirmar uma decisão, escolha outra opção disponível mais neutra.' 
          },
          { 
            id: '2.3', 
            title: 'AULA 2.3 - PREENCHENDO OS DADOS DA CONTA', 
            content: 'Menos informação significa menos problemas\n\nUma das maiores causas de falha ocorre quando o usuário tenta explicar toda a situação em campos que não foram feitos para isso.\n\nOs campos técnicos existem apenas para identificação.\n\nPreencha somente:\n\nID correto da conta;\nnickname exato;\ne-mail solicitado;\ninformações obrigatórias do formulário.\n\nNunca faça isto:\n\n❌ Adicionar explicações extras;\n\n❌ Contar sua história nos campos técnicos;\n\n❌ Inserir justificativas;\n\n❌ Repetir informações.\n\nPor quê?\n\nPorque sistemas automatizados analisam padrões de preenchimento.\n\nCampos técnicos devem conter apenas dados técnicos.\n\nQuanto mais organizado o formulário, maior a chance de ele ser tratado como uma solicitação legítima.' 
          },
          { 
            id: '2.4', 
            title: 'AULA 2.4 - O CAMPO DE MENSAGEM', 
            content: 'O único lugar onde a estratégia realmente importa\n\nTodo o restante do formulário serve apenas para classificação.\n\nO campo de mensagem é o único espaço onde existe possibilidade de influência humana.\n\nPor isso, existem algumas regras fundamentais.\n\nNunca faça:\n\n❌ Escrever em caixa alta;\n\n❌ Utilizar emojis;\n\n❌ Fazer ameaças;\n\n❌ Copiar textos emocionais;\n\n❌ Escrever como se estivesse discutindo em rede social.\n\nO que fazer:\n\n✅ Utilizar linguagem formal;\n\n✅ Ser objetivo;\n\n✅ Demonstrar organização;\n\n✅ Solicitar análise, não exigir resultado.\n\nO suporte não está procurando quem está mais revoltado.\n\nEle está procurando solicitações que mereçam ser analisadas.\n\nRegra principal\n\nClareza vale mais do que quantidade.\n\nUm texto curto e organizado costuma funcionar melhor do que uma página inteira de desabafo.' 
          },
          { 
            id: '2.5', 
            title: 'AULA 2.5 - REVISÃO FINAL ANTES DE ENVIAR', 
            content: 'O ticket é único\n\nAntes de clicar em enviar, pare por alguns minutos e revise tudo.\n\nFaça a seguinte checklist:\n\nCategoria\nEstá correta?\nÉ a opção mais neutra disponível?\nDados\nO ID foi digitado corretamente?\nO nickname está exato?\nMensagem\nEstá objetiva?\nEstá técnica?\nEstá organizada?\nTom geral\n\nPergunte:\n\nIsto parece ter sido escrito por alguém calmo e racional?\n\nSe a resposta for "no", não envie ainda.\n\nApós o envio\n\nDepois que o ticket for enviado:\n\n❌ Não envie outro imediatamente;\n\n❌ Não tente complementar informações;\n\n❌ Não abra múltiplas solicitações;\n\n❌ Não tente reforçar o pedido.\n\nA estratégia termina no momento do envio.\n\nA partir daí, instência excessiva normalmente produz o efeito contrário ao desejado.' 
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
            title: 'AULA 3.1 - QUAL OPÇÃO SELECIONAR', 
            content: 'A primeira decisão que pode definir todo o processo\n\nAo abrir o formulário de suporte, você encontrará diversas opções relacionadas ao problema da conta.\n\nA maioria das pessoas comete o primeiro erro justamente aqui: escolhe a opção mais óbvia.\n\nO problema é que algumas categorias funcionam praticamente como classificações automáticas de encerramento.\n\nEvite opções como:\n\n❌ "Detectamos o uso de softwares não autorizados"\n\n❌ "O sistema Anti-Trapaça detectou irregularidades"\n\n❌ "Esta conta foi suspensa permanentemente"\n\nEssas categorias costumam encaminhar a solicitação diretamente para respostas padronizadas.\n\nA estratégia correta\n\nSempre que possível, escolha opções mais neutras, relacionadas à recuperação ou verificação da conta.\n\nPor exemplo:\n\n✅ "Quero recuperar minha conta"\n\nEssa abordagem:\n\nnão antecipa conclusões;\nnão confirma acusações;\nmantém a solicitação em categorias mais amplas de análise.\n\nO princípio estratégico\n\nVocê não está tentando provar nada nesta etapa.\n\nVocê está apenas tentando evitar que sua solicitação seja descartada antes de ser analisada.' 
          },
          { 
            id: '3.2', 
            title: 'AULA 3.2 - O CAMPO REQUESTER', 
            content: 'O campo mais simples e, ainda assim, frequentemente preenchido errado\n\nO campo "Requester" identifica o solicitante do ticket.\n\nSua função é exclusivamente administrativa.\n\nO que inserir:\no e-mail utilizado para contato;\num endereço válido;\num e-mail que você tenha acesso.\n\nO que NÃO fazer:\n\n❌ Escrever o ID da conta;\n\n❌ Inserir explicações;\n\n❌ Adicionar observações;\n\n❌ Utilizar múltiplos e-mails.\n\nImportante\n\nO e-mail do ticket não necessariamente precisa ser o mesmo utilizado na conta do jogo.\n\nEle serve apenas para que o suporte consiga retornar sua solicitação.\n\nQuanto mais limpo e objetivo for o preenchimento, melhor.' 
          },
          { 
            id: '3.3', 
            title: 'AULA 3.3 - O CAMPO ASUNTO', 
            content: 'O campo que mais ativa respostas automáticas\n\nO assunto do ticket é uma das primeiras informações analisadas pelo sistema.\n\nPor isso, utilizar termos emocionais ou acusatórios pode prejudicar a tentativa.\n\nNunca utilize:\n\n❌ "Fui banido injustamente"\n\n❌ "Desbanimento urgente"\n\n❌ "Minha conta foi roubada"\n\n❌ "Quero meu desbanimento"\n\nO objetivo do assunto\n\nO assunto deve:\n\nparecer técnico;\nser curto;\nindicar necessidade de análise;\nevitar conclusões.\n\nExemplo da lógica correta:\n\nEm vez de acusar ou exigir, procure transmitir a ideia de:\n\n"Solicitação de verificação referente ao acesso da conta."\n\nLembre-se:\n\nO assunto serve para abrir uma porta, não para ganhar uma discussão.' 
          },
          { 
            id: '3.4', 
            title: 'AULA 3.4 - NICKNAME DA CONTA', 
            content: 'Não existe margem para criatividade\n\nO nickname deve ser preenchido exatamente como aparece dentro do jogo.\n\nRegras:\n\n✅ Utilize letras maiúsculas e minúsculas corretamente;\n\n✅ Respeite símbolos especiais;\n\n✅ Copie exatamente o nome registrado.\n\nNunca faça:\n\n❌ Utilizar apelidos alternativos;\n\n❌ Utilizar abreviações;\n\n❌ Inserir nomes antigos da conta.\n\nUm nickname incorreto pode fazer com que sua solicitação seja considerada inválida.' 
          },
          { 
            id: '3.5', 
            title: 'AULA 3.5 - O NÚMERO DE ID', 
            content: 'O dado mais importante do formulário\n\nO ID da conta é o principal identificador interno.\n\nPor isso:\n\ncopie diretamente da fonte oficial;\nrevise mais de uma vez;\nconfirme todos os números.\n\nNão faça:\n\n❌ Inserir comentários;\n\n❌ Adicionar justificativas;\n\n❌ Escrever textos complementares.\n\nO campo de ID existe apenas para identificar a conta.\n\nNada além disso.' 
          },
          { 
            id: '3.6', 
            title: 'AULA 3.6 - TEMPO DE SUSPENSÃO', 
            content: 'Nunca invente informações\n\nSe o sistema informar suspensão permanente, informe exatamente isso.\n\nRegras:\n\n✅ Se for permanente, marque permanente;\n\n✅ Se houver prazo definido, utilize o prazo correto;\n\n✅ Se não souber exatamente, utilize a informação mais próxima possível.\n\nNunca faça:\n\n❌ Inventar períodos;\n\n❌ Chutar datas;\n\n❌ Fazer estimativas aleatórias.\n\nInformações inconsistentes reduzem a credibilidade da solicitação.' 
          },
          { 
            id: '3.7', 
            title: 'AULA 3.7 - DATA DO OCORRIDO', 
            content: 'Datas importam mais do que parecem\n\nO sistema pode utilizar a data informada para cruzamento interno de informações.\n\nPor isso:\n\ninforme a data exata, se souber;\nutilize uma aproximação razoável, caso não tenha certeza.\n\nEvite:\n\n❌ "Não lembro";\n\n❌ Datas impossíveis;\n\n❌ Datas muito distantes do ocorrido.\n\nA coerência das informações ajuda a demonstrar organização e boa-fé.' 
          },
          { 
            id: '3.8', 
            title: 'AULA 3.8 - O CAMPO DE DESCRIÇÃO', 
            content: 'O único campo onde o método realmente acontece\n\nTodos os campos anteriores servem para classificação.\n\nA descrição é o único espaço onde existe possibilidade de diferenciação.\n\nO que NÃO fazer:\n\n❌ Acusar;\n\n❌ Confessar;\n\n❌ Implorar;\n\n❌ Escrever textos emocionais;\n\n❌ Fazer ameaças.\n\nO objetivo da descrição\n\nA descrição deve:\n\n✅ parecer escrita por alguém calmo;\n\n✅ demonstrar organização;\n\n✅ solicitar análise;\n\n✅ evitar palavras que acionem respostas automáticas.\n\nA pergunta que o sistema tenta responder\n\nNa prática, sua descrição será analisada sob uma única perspectiva:\n\n"Vale a pena encaminhar esta solicitação para análise?"\n\nTodo o restante depende dessa decisão inicial.\n\nPor isso, a descrição não serve para convencer alguém no grito.\n\nEla serve para parecer suficientemente organizada para merecer uma análise.\n\n\nA recomendação mais importante deste método\n\nEmbora seja possível escrever sua própria descrição, isso aumenta significativamente a chance de cometer erros de tom, estrutura ou linguagem.\n\nPor esse motivo, a recomendação deste método é utilizar um dos modelos prontos disponibilizados no próximo módulo.\n\nOs modelos foram estruturados para:\n\nmanter um tom técnico;\nevitar linguagem emocional;\nreduzir a chance de ativação de respostas automáticas;\napresentar a solicitação de forma organizada e objetiva.\n\nTentar "melhorar" os modelos adicionando emoção, acusações ou explicações excessivas costuma produzir o efeito contrário ao desejado.\n\nNo próximo módulo, você terá acesso aos modelos prontos de tickets e aprenderá qual deles utilizar em cada situação.' 
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
            title: 'AULA 4.1 - MODELO DE TICKET Nº 1', 
            content: 'Quando utilizar este modelo\n\nEste modelo é indicado para situações em que a conta se tornou inacessível de forma inesperada e não existem informações claras sobre o motivo da restrição.\n\nO objetivo deste texto é apresentar a situação como uma possível inconsistência técnica, evitando qualquer linguagem emocional ou acusatória.\n\nModelo:\n\nPrezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.\n\nQuando usar:\n\n✅ Banimentos automáticos;\n✅ Mensagens genéricas;\n✅ Falta de explicação clara.',
            template: 'Prezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.'
          },
          { 
            id: '4.2', 
            title: 'AULA 4.2 - MODELO DE TICKET Nº 2', 
            content: 'Quando utilizar este modelo\n\nEste modelo enfatiza a possibilidade de falha em sistemas automáticos de monitoramento, mantendo uma postura técnica e colaborativa.\n\nModelo:\n\nÀ equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.\n\nQuando usar:\n\n✅ Suspensões inesperadas;\n✅ Casos sem histórico anterior;\n✅ Primeira tentativa de recuperação.',
            template: 'À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.'
          },
          { 
            id: '4.3', 
            title: 'AULA 4.3 - MODELO DE TICKET Nº 3', 
            content: 'Quando utilizar este modelo\n\nEste modelo trabalha com a hipótese de falso positivo e solicita uma análise de integridade da conta.\n\nModelo:\n\nDirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde [data], não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a crer em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.\n\nQuando usar:\n\n✅ Quando você souber aproximadamente a data do ocorrido;\n✅ Possíveis falsos positivos;\n✅ Contas sem histórico de punições.',
            template: 'Dirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde [data], não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a crer em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.'
          },
          { 
            id: '4.4', 
            title: 'AULA 4.4 - MODELO DE TICKET Nº 4', 
            content: 'Quando utilizar este modelo\n\nEste modelo enfatiza a ausência de justificativa apresentada pela plataforma e solicita uma auditoria humana.\n\nModelo:\n\nSaudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.\n\nQuando usar:\n\n✅ Quando não houver explicação clara;\n✅ Casos de bloqueio súbito;\n✅ Situações sem aviso prévio.',
            template: 'Saudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.'
          },
          { 
            id: '4.5', 
            title: 'AULA 4.5 - MODELO DE TICKET Nº 5', 
            content: 'Quando utilizar este modelo\n\nEste modelo procura apresentar o problema como resultado de uma avaliação automatizada incorreta.\n\nModelo:\n\nPrezados, minha conta encontra-se inacessível e busco entender o motivo. Acredito que esta situação possa ter sido causada por uma avaliação incorreta de um processo automatizado, visto que sempre zelei por seguir as regras da plataforma. Para resolvermos esta questão, solicito que um especialista de suporte revise o caso manualmente e me comunique os detalhes técnicos que levaram à atual restrição. Agradeço e aguardo um posicionamento.\n\nQuando usar:\n\n✅ Casos aparentemente automáticos;\n✅ Quando houver suspeita de falso positivo;\n✅ Situações de suspensão permanente.',
            template: 'Prezados, minha conta encontra-se inacessível e busco entender o motivo. Acredito que esta situação possa ter sido causada por uma avaliação incorreta de um processo automatizado, visto que sempre zelei por seguir as regras da plataforma. Para resolvermos esta questão, solicito que um especialista de suporte revise o caso manualmente e me comunique os detalhes técnicos que levaram à atual restrição. Agradeço e aguardo um posicionamento.'
          },
          { 
            id: '4.6', 
            title: 'AULA 4.6 - MODELO DE TICKET Nº 6', 
            content: 'Quando utilizar este modelo\n\nEste modelo utiliza uma abordagem mais técnica e formal, sendo indicado para tentativas posteriores ou situações mais complexas.\n\nModelo:\n\nÀ equipe de Suporte, submeto este pedido para verificação de uma alteração anômala de privilégios em minha conta, resultando na impossibilidade de login. O ocorrido não condiz com meu padrão de uso, que é totalmente aderente aos Termos de Serviço. Peço, formalmente, a intervenção de um analista para um diagnóstico preciso e o restabelecimento do meu acesso. Estou à disposição para cooperar com o processo de análise.\n\nQuando usar:\n\n✅ Segunda tentativa;\n✅ Casos mais complexos;\n✅ Situações em que o primeiro ticket não obteve análise satisfatória.',
            template: 'À equipe de Suporte, submeto este pedido para verificação de uma alteração anômala de privilégios em minha conta, resultando na impossibilidade de login. O ocorrido não condiz com meu padrão de uso, que é totalmente aderente aos Termos de Serviço. Peço, formalmente, a intervenção de um analista para um diagnóstico preciso e o restabelecimento do meu acesso. Estou à disposição para cooperar com o processo de análise.'
          },
          { 
            id: 'm4-rules', 
            title: '⚠️ AULA EXTRA - REGRAS OBRIGATÓRIAS DOS MODELOS', 
            content: 'Antes de utilizar qualquer modelo, você precisa entender algumas regras fundamentais:\n\nFaça:\n\n✅ Utilize apenas um modelo por tentativa;\n\n✅ Mantenha exatamente o tom do texto;\n\n✅ Escolha o modelo mais compatível com sua situação;\n\n✅ Aguarde o prazo correto após o envio.\n\nNunca faça:\n\n❌ Misturar dois modelos;\n\n❌ Adicionar emoção;\n\n❌ Fazer ameaças;\n\n❌ Alterar completamente a estrutura;\n\n❌ Inserir acusações;\n\n❌ Copiar o mesmo texto diversas vezes.\n\nImportante\n\nOs modelos existem para aumentar a possibilidade de leitura humana.\n\nEles não garantem:\n\nrecuperação da conta;\nreversão da decisão;\nprioridade no atendimento.\n\nO objetivo é apenas evitar os erros que fazem a maioria das tentativas ser encerrada automaticamente. O que, convenhamos, já representa uma vantagem estatística considerável diante da tendência humana de transformar um ticket de suporte em uma carta aberta de indignação.' 
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
            title: 'AULA 5.1 - O TEMPO DE ESPERA CORRETO', 
            content: 'O erro mais comum acontece depois do envio\n\nDepois de enviar o ticket, muitas pessoas acreditam que precisam continuar agindo para aumentar suas chances.\n\nNa prática, o excesso de ação costuma produzir o efeito contrário.\n\nApós o envio da solicitação:\n\naguarde pelo menos 72 horas;\no período ideal é entre 7 e 10 dias;\nevite qualquer tentativa de reforço antes desse prazo.\nNão faça isso:\n\n❌ Enviar outro ticket no mesmo dia;\n\n❌ Criar novas solicitações após algumas horas;\n\n❌ Reenviar o mesmo texto diversas vezes;\n\n❌ Procurar outros canais de suporte imediatamente.\n\nOs sistemas de atendimento normalmente priorizam solicitações organizadas e únicas.\n\nInsistência excessiva pode fazer sua solicitação perder credibilidade.\n\nRegra principal\n\nDepois de enviar o ticket, sua melhor estratégia passa a ser esperar.' 
          },
          { 
            id: '5.2', 
            title: 'AULA 5.2 - O QUE NÃO FAZER DE JEITO NENHUM', 
            content: 'Como destruir sua própria tentativa em poucos minutos\n\nApós o envio, existem alguns comportamentos que aumentam significativamente a probabilidade de respostas automáticas.\n\nNunca faça:\n\n❌ Abrir vários tickets simultaneamente;\n\n❌ Utilizar diversos e-mails diferentes;\n\n❌ Alterar categorias apenas para "testar";\n\n❌ Enviar mensagens emocionais;\n\n❌ Discutir com o suporte;\n\n❌ Fazer ameaças;\n\n❌ Tentar pressionar a equipe.\n\nPor quê?\n\nPorque sistemas internos costumam interpretar insistência excessiva como comportamento inadequado ou tentativa repetitiva.\n\nO objetivo do método não é chamar atenção.\n\nO objetivo é parecer uma solicitação legítima que merece análise.\n\nLembre-se:\n\nSer insistente não significa ser prioritário.' 
          },
          { 
            id: '5.3', 
            title: 'AULA 5.3 - QUANDO ENVIAR UM NOVO TICKET', 
            content: 'O momento correto para uma nova tentativa\n\nExiste apenas uma situação em que uma nova tentativa pode ser considerada:\n\nVocê pode enviar outro ticket quando:\n\n✅ Passaram pelo menos 7 dias;\n\n✅ Não houve resposta;\n\nou\n\n✅ A resposta recebida foi claramente automática.\n\nSe decidir tentar novamente:\nutilize outro modelo de ticket;\naltere levemente o assunto;\nmantenha o tom técnico;\n nNão reutilize exatamente o mesmo texto.\nO que nunca fazer:\n\n❌ Copiar e colar o ticket anterior;\n\n❌ Reenviar a mesma mensagem;\n\n❌ Citar respostas automáticas anteriores;\n\n❌ Demonstrar frustração.\n\nO objetivo da segunda tentativa é tentar escapar de processos automatizados, não discutir a primeira decisão.' 
          },
          { 
            id: '5.4', 
            title: 'AULA 5.4 - QUANDO PARAR', 
            content: 'Saber parar também faz parte da estratégia\n\nExiste um momento em que insistir deixa de ser estratégia e passa a ser apenas insistência.\n\nVocê deve considerar interromper as tentativas quando:\n\nreceber uma resposta final clara e repetida;\na plataforma informar explicitamente que não haverá nova análise;\ntrês tentativas bem espaçadas não produzirem qualquer avanço.\nPor que parar?\n\nPorque continuar insistindo após esse ponto normalmente não gera benefícios adicionais.\n\nAo contrário, pode dificultar futuras análises ou revisões.\n\nO objetivo do método\n\nEste método não busca quantidade.\n\nEle busca qualidade na tentativa.\n\nUma única tentativa organizada vale mais do que dezenas de tentativas impulsivas.' 
          },
          { 
            id: '5.5', 
            title: 'AULA 5.5 - A MENTALIDADE CORRETA', 
            content: 'O método não é força bruta\n\nUm erro muito comum é acreditar que recuperar uma conta depende de insistência.\n\nNa verdade, este método funciona tentando:\n\nevitando respostas automáticas;\nnão ativar filtros internos;\nnão levantar sinalizações negativas;\naumentar a possibilidade de análise humana.\nO que este método não é:\n\n❌ Spam;\n\n❌ Pressão;\n\n❌ Manipulação;\n\n❌ Discussão com o suporte.\n\nO que este método é:\n\n✅ Organização;\n\n✅ Controle;\n\n✅ Estratégia;\n\n✅ Paciência.\n\nO princípio mais importante deste módulo\n\nDepois que o ticket é enviado, a maior ameaça ao processo geralmente é agir por impulso.\n\nMuitas tentativas deixam de ter qualquer chance não porque o primeiro ticket estava ruim, mas porque o usuário decidiu enviar outros quinze para "garantir". Uma abordagem admiravelmente otimista, embora estatisticamente desastrosa.' 
          }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALISANDO A RESPOSTA',
        description: 'Decodificação de feedback do suporte.',
        lessons: [
          { 
            id: '6.1', 
            title: 'AULA 6.1 - COMO IDENTIFICAR UMA RESPOSTA AUTOMÁTICA', 
            content: 'Nem toda resposta significa que alguém realmente leu seu caso\n\nAntes de tomar qualquer decisão, você precisa descobrir quem respondeu sua solicitação.\n\nMuitas respostas são produzidas automaticamente pelos sistemas de atendimento e não representam uma análise individual da sua conta.\n\nCaracterísticas de uma resposta automática:\n\n✅ Texto extremamente genérico;\n\n✅ Linguagem padronizada;\n\n✅ Ausência de detalhes específicos;\n\n✅ Repetição das mesmas informações exibidas no banimento;\n\n✅ Encerramento imediato do caso.\n\nExemplos comuns:\n"Após análise, confirmamos que a penalidade foi aplicada corretamente."\n"Não é possível reverter esta decisão."\n"O sistema detectou violação dos Termos de Serviço."\nUma sinal importante\n\nSi a resposta:\n\nnão menciona seu ID;\ndoes not mention dates;\ndoes not mention specific events;\ndoes not refer to the content sent;\n\nexiste grande probabilidade de que você tenha recebido apenas uma resposta automatizada.\n\nO que isso significa?\n\nNão significa necessariamente que seu caso foi analisado e negado.\n\nMuitas vezes significa apenas que ele não ultrapassou a primeira camada de triagem.' 
          },
          { 
            id: '6.2', 
            title: 'AULA 6.2 - COMO IDENTIFICAR UMA RESPOSTA HUMANA', 
            content: 'Os sinais de que alguém realmente analisou sua solicitação\n\nAs respostas humanas costumam apresentar pequenas diferenças que indicam leitura real.\n\nVocê não precisa encontrar todos os sinais. Um ou dois já podem indicar um análise humano.\n\nCaracterísticas comuns:\n\n✅ Menção ao histórico da conta;\n\n✅ Referência a informações fornecidas no ticket;\n\n✅ Solicitação de documentos ou dados adicionais;\n\n✅ Linguagem menos padronizada;\n\n✅ Encaminhamento para análise interna.\n\nExemplos:\n"Verificamos o histórico da conta..."\n"Com base nas informações fornecidas..."\n"Encaminhamos sua solicitação para análise complementar..."\n"Precisaremos de informações adicionais..."\nWhat does this mean?\n\nIt means that your request managed to pass part of the automatic screening.\n\nIn this scenario, the biggest mistake possible is to start writing huge texts trying to reinforce your argument.\n\nThe analysis has already started.\n\nNow, the objective is not to hinder it.' 
          },
          { 
            id: '6.3', 
            title: 'AULA 6.3 - QUÉ HACER SI LA RESPUESTA ES AUTOMÁTICA', 
            content: 'La peor reacción posible es responder de inmediato\n\nAo identificar uma resposta automática, muitas pessoas entram em pânico e começam a enviar novos tickets.\n\nEssa costuma ser a decisão mais prejudicial.\n\nSi a resposta foi automática:\n\n✅ No responda imediatamente;\n\n✅ No intente discutir;\n\n✅ No envíe justificaciones adicionales;\n\n✅ No haga amenazas;\n\n✅ Aguarde pelo menos 7 dias.\n\nApós esse período:\n\nVocê pode considerar:\n\nutilizar outro modelo de ticket;\naltere levemente o assunto;\nreformular a abordagem;\niniciar uma nova tentativa organizada.\n\nO objetivo aqui não é vencer a resposta automática.\n\nO objetivo é tentar fazer com que sua próxima tentativa ultrapasse essa barreira.\n\nLembre-se:\n\nYou are trying to exit the automatic cycle, not argue with it.' 
          },
          { 
            id: '6.4', 
            title: 'AULA 6.4 - O QUE FAZER SE A RESPOSTA FOR HUMANA', 
            content: 'Quando existe leitura humana, menos é mais\n\nIf there are clear signs of human analysis, you must act with even more caution.\n\nDo:\n\n✅ Aguarde o prazo informado;\n\n✅ Responda apenas o que foi solicitado;\n\n✅ Utilize respostas objetivas;\n\n✅ Mantenha linguagem técnica.\n\nNão faça:\n\n❌ Escrever textos emocionais;\n\n❌ Recontar toda a história;\n\n❌ Fazer acusações;\n\n❌ Pressionar por velocidade;\n\n❌ Adicionar informações desnecessárias.\n\nRegra principal:\n\nResponda apenas a pergunta feita.\n\nIf support requested specific information, provide only that information.\n\nQuanto mais você falar além do necessário, maior a chance de introduzir inconsistências ou prejudicar a análise.' 
          },
          { 
            id: '6.5', 
            title: 'AULA 6.5 - O PIOR ERRO DE TODOS', 
            content: 'O impulso destrói mais tentativas do que o próprio sistema\n\nExiste um comportamento que aparece repetidamente em tentativas malsucedidas:\n\nResponder emocionalmente.\n\nPhrases like:\n\n❌ "Mas eu não fiz nada."\n\n❌ "Isso é injusto."\n\n❌ "Outras pessoas conseguiram desbanimento."\n\n❌ "Vou denunciar a empresa."\n\n❌ "Vocês precisam resolver isso."\n\nNormalmente não produzem qualquer benefício.\n\nPelo contrário.\n\nElas podem:\n\nencerrar definitivamente a análise;\nreduce the chance of reassessment;\ntransformar uma possibilidade em uma negativa final.\n\nO princípio final deste método\n\nEste método nunca teve como objetivo discutir com o suporte.\n\nO objetivo sempre foi:\n\nevitando filtros automáticos;\naumentar a chance de leitura humana;\napresentar o caso de forma organizada;\nimpedir que o próprio usuário prejudique a tentativa.' 
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
    orderBump: {
      title: '100% VIP PACK',
      description: 'If you purchased along with the 100% support PACK with my help, click the button below.',
      button: 'ACCESS VIP SUPPORT'
    },
    bypass: {
      title: '100% BYPASS PACK',
      description: 'If you purchased along with the 100% BYPASS PACK with my help, click the button below.',
      button: 'ACCESS BYPASS SUPPORT'
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
            title: 'LESSON 1.1 - WHAT IS AN AUTOMATIC BAN', 
            content: 'Understanding how automatic bans work\n\nBefore trying to recover your account, you need to understand an important fact: not all bans are applied the same way.\n\nAn automatic ban occurs when internal systems identify behaviors considered suspicious without necessarily having an initial human analysis. These systems work by patterns, automated detections, and internal checks.\n\nThe main characteristics of an automatic ban are:\n\nGeneric message;\n\nAbsence of specific details;\n\nFast and standardized responses;\n\nLack of direct reference to user behavior;\n\nAutomatic closure of the service.\n\nCommon examples:\n\n"We detected irregular activities."\n"Your account violated our terms of service."\n"The suspension was applied correctly."\n\nWhy is this important?\n\nBecause automatic bans represent cases where there is still some possibility of requesting a strategic reassessment.\n\nThe goal of this method is not to argue with the system, but rather to try to get your request past the first automatic layer of analysis.\n\nRemember:\n\nThe more emotional your message is, the greater the chance of staying trapped in the automatic process.' 
          },
          { 
            id: '1.2', 
            title: 'LESSON 1.2 - WHAT IS A MANUAL BAN', 
            content: 'When there is human participation in the decision\n\nA manual ban occurs when there is a direct analysis or internal validation carried out by members of the responsible team.\n\nIn these cases, there are usually more specific elements related to the reason for the punishment.\n\nCommon characteristics:\n\nMore detailed messages;\n\nDirect reference to rules or behaviors;\n\nObjective and firm responses;\n\nLess flexibility for reassessment.\n\nExamples:\n\nDirect quote from the Terms of Service;\n\nInformation about specific behavior;\n\nExplicit confirmation of the violation.\n\nWhat does this mean?\n\nIt means that the possibility of reversal tends to be significantly lower.\n\nThis does not mean that you should act on impulse or give up immediately. It just means that the strategy needs to be even more careful.\n\nIn this scenario, the main goal is no longer to "convince" and becomes:\n\nDo not make the situation worse;\n\nAvoid additional closures;\n\nMaintain a technical and organized posture.' 
          },
          { 
            id: '1.3', 
            title: 'LESSON 1.3 - WHAT IS A RECIDIVIST BAN', 
            content: 'When there is a previous history of punishments\n\nA recidivist ban happens when the account already has previous records of punishments, warnings, or suspensions.\n\nPlatforms normally apply progressively lower tolerance levels for recidivist accounts.\n\nCharacteristics:\n\nFaster responses;\n\nLess openness for review;\n\nStricter analyses;\n\nExtremely low tolerance for new appeals.\n\nThe most common error:\n\nMany people believe that sending dozens of tickets increases the chances of success.\n\nIn practice, this usually produces the opposite effect.\n\nWhen there is recidivism, excessive persistence can:\n\nConfirm previous decisions;\n\nEnd possibilities for future analysis;\n\nClassify the case as a repetitive attempt.\n\nTherefore, the method works with control, organization, and strategy, never with impulsive insistence.' 
          },
          { 
            id: '1.4', 
            title: 'LESSON 1.4 - CASE IDENTIFICATION', 
            content: 'The most important step before sending any ticket\n\nBefore writing any message to support, ask these questions:\n\nIs the received message generic?\n\nIf yes, there is a high chance it is an automatic ban.\n\nDoes the message present specific details?\n\nIf yes, it may indicate a manual analysis.\n\nHas the account received punishments before?\n\nIf the answer is positive, you are probably facing a recidivist case.\n\nQuick summary:\n\nType - Characteristics - Chance of attempt\n\nAutomatic ban - Generic and fast messages - Higher\n\nManual ban - Specific messages - Low\n\nRecidivist ban - Previous history - Very low\n\nWhat you need to understand before continuing:\n\nAt Garena, there is normally no room for prolonged debate.\n\nYou send a request and receive a decision.\n\nThis means your first attempt needs to be:\n\n✅ Organized\n\n✅ Technical\n\n✅ Objective\n\n✅ Strategic' 
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
            title: 'LESSON 2.1 - WHERE TO SEND THE TICKET', 
            content: 'Using only official channels\n\nBefore thinking about the text that will be sent, you need to understand a fundamental rule:\n\nA ticket sent in the wrong place is born without a chance of analysis.\n\nMany people, after losing access to the account, try to contact via:\n\nInstagram;\n\nFacebook;\n\nDiscord;\n\nGeneric emails;\n\nComments on social networks;\n\nUnofficial forms.\n\nThese channels do not carry out individual account analysis and, in most cases, do not have any power to change internal decisions.\n\nThe correct procedure:\n\nThe request must be sent exclusively through official support provided by the platform.\n\nThe goal of the method is simple:\n\nenter the correct flow of service;\n\navoid unnecessary automatic referrals;\n\nmaximize the possibility of analysis.\n\nThe first error that eliminates attempts:\n\nMany people send messages to several channels simultaneously.\n\nThis does not increase the chances.\n\nIn practice, it only creates redundant records and can harm the consistency of the case.\n\nRemember:\n\nAn organized attempt is worth more than ten desperate attempts.' 
          },
          { 
            id: '2.2', 
            title: 'LESSON 2.2 - CHOOSING THE CORRECT CATEGORY', 
            content: 'The most important decision before the message\n\nWhen opening a ticket, you will need to select a category.\n\nMost people treat this step as a detail.\n\nIt is not.\n\nThe chosen category directly influences how your request will be processed internally.\n\nWhat to avoid:\n\nAvoid categories:\n\nextremely accusatory;\n\ndefinitive;\n\ndirectly related to the confirmation of the punishment.\n\nVery specific categories can cause your request to be forwarded directly to standardized responses.\n\nWhat to look for:\n\nThe strategy consists in selecting categories that:\n\nallow analysis;\n\nare more neutral;\n\ndo not anticipate conclusions.\n\nThe goal is not to hide information.\n\nThe goal is to avoid your attempt being closed even before reading.\n\nPractical rule:\n\nAsk yourself:\n\nDoes this category seem to open an analysis or just confirm a decision?\n\nIf it seems to confirm a decision, choose another neutral option available.' 
          },
          { 
            id: '2.3', 
            title: 'LESSON 2.3 - FILLING IN THE ACCOUNT DATA', 
            content: 'Less information means fewer problems\n\nOne of the biggest causes of failure occurs when the user tries to explain the entire situation in fields that were not made for that.\n\nThe technical fields exist only for identification.\n\nFill in only:\n\nCorrect account ID;\n\nExact nickname;\n\nRequested email;\n\nMandatory form information.\n\nNever do this:\n\n❌ Add extra explanations;\n\n❌ Tell your story in technical fields;\n\n❌ Insert justifications;\n\n❌ Repeat information.\n\nWhy?\n\nBecause automated systems analyze filling patterns.\n\nTechnical fields must contain only technical data.\n\nThe more organized the form, the greater the chance of it being treated as a legitimate request.' 
          },
          { 
            id: '2.4', 
            title: 'LESSON 2.4 - THE MESSAGE FIELD', 
            content: 'The only place where strategy really matters\n\nAll the rest of the form serves only for classification.\n\nThe message field is the only space where there is a possibility of human influence.\n\nTherefore, there are some fundamental rules.\n\nNever do:\n\n❌ Write in all caps;\n\n❌ Use emojis;\n\n❌ Make threats;\n\n❌ Copy emotional texts;\n\n❌ Write as if you were arguing on a social network.\n\nWhat to do:\n\n✅ Use formal language;\n\n✅ Be objective;\n\n✅ Demonstrate organization;\n\n✅ Request analysis, do not demand result.\n\nThe support is not looking for who is more outraged.\n\nIt is looking for requests that deserve to be analyzed.\n\nMain rule:\n\nClarity is worth more than quantity.\n\nA short and organized text usually works better than an entire page of venting.' 
          },
          { 
            id: '2.5', 
            title: 'LESSON 2.5 - FINAL REVIEW BEFORE SENDING', 
            content: 'The ticket is unique\n\nBefore clicking send, stop for a few minutes and review everything.\n\nGo through the following checklist:\n\nCategory: Is it correct? Is it the most neutral option available?\n\nData: Was the ID typed correctly? Is the nickname exact?\n\nMessage: Is it objective? Is it technical? Is it organized?\n\nGeneral tone: Ask yourself, does this seem to have been written by someone calm and rational?\n\nIf the answer is "no", do not send yet.\n\nAfter sending:\n\n❌ Do not send another immediately;\n\n❌ Do not try to supplement information;\n\n❌ Do not open multiple requests;\n\n❌ Do not try to reinforce the request.\n\nThe strategy ends at the moment of sending.\n\nFrom then on, excessive persistence usually produces the opposite effect to that desired.' 
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
            title: 'LESSON 3.1 - WHICH OPTION TO SELECT', 
            content: 'The first decision that can define the entire process\n\nWhen opening the support form, you will encounter various options related to the account problem.\n\nMost people make the first mistake right here: they choose the most obvious option.\n\nThe problem is that some categories function practically as automatic closure classifications.\n\nAvoid options like:\n\n❌ "We detected the use of unauthorized software"\n\n❌ "The Anti-Cheat system detected irregularities"\n\n❌ "This account has been permanently suspended"\n\nThese categories usually forward the request directly to standardized responses.\n\nThe correct strategy:\n\nWhenever possible, choose more neutral options, related to account recovery or verification.\n\nFor example:\n\n✅ "I want to recover my account"\n\nThis approach:\n\ndoes not anticipate conclusions;\n\ndoes not confirm accusations;\n\nkeeps the request in broader analysis categories.\n\nThe strategic principle:\n\nYou are not trying to prove anything at this stage.\n\nYou are just trying to avoid your request being discarded before it is analyzed.' 
          },
          { 
            id: '3.2', 
            title: 'LESSON 3.2 - THE REQUESTER FIELD', 
            content: 'The simplest field and yet, frequently filled in wrong\n\nThe "Requester" field identifies the ticket requester.\n\nIts function is exclusively administrative.\n\nWhat to insert:\n\nContact email;\n\nA valid address;\n\nAn email you have access to.\n\nWhat NOT to do:\n\n❌ Write the account ID;\n\n❌ Insert explanations;\n\n❌ Add observations;\n\n❌ Use multiple emails.\n\nImportant:\n\nThe ticket email does not necessarily have to be the same one used on the game account.\n\nIt only serves so that support can return your request.\n\nThe cleaner and more objective the filling, the better.' 
          },
          { 
            id: '3.3', 
            title: 'LESSON 3.3 - THE SUBJECT FIELD', 
            content: 'The field that most activates automatic responses\n\nThe subject of the ticket is one of the first pieces of information analyzed by the system.\n\nTherefore, using emotional or accusatory terms can harm the attempt.\n\nNever use:\n\n❌ "I was unfairly banned"\n\n❌ "Urgent unban"\n\n❌ "My account was stolen"\n\n❌ "I want my unban"\n\nThe objective of the subject:\n\nThe subject should:\n\nseem technical;\n\nbe short;\n\nindicate need for analysis;\n\navoid conclusions.\n\nExample of correct logic:\n\nInstead of accusing or demanding, try to convey the idea of:\n\n"Verification request regarding account access."\n\nRemember:\n\nThe subject serves to open a door, not to win an argument.' 
          },
          { 
            id: '3.4', 
            title: 'LESSON 3.4 - ACCOUNT NICKNAME', 
            content: 'There is no room for creativity\n\nThe nickname must be filled in exactly as it appears in the game.\n\nRules:\n\n✅ Use uppercase and lowercase letters correctly;\n\n✅ Respect special symbols;\n\n✅ Copy exactly the registered name.\n\nNever do:\n\n❌ Use alternative nicknames;\n\n❌ Use abbreviations;\n\n❌ Insert old account names.\n\nAn incorrect nickname can cause your request to be considered invalid.' 
          },
          { 
            id: '3.5', 
            title: 'LESSON 3.5 - THE ID NUMBER', 
            content: 'The most important data on the form\n\nThe account ID is the main internal identifier.\n\nTherefore:\n\ncopy directly from the official source;\n\nreview more than once;\n\nconfirm all numbers.\n\nDo not:\n\n❌ Insert comments;\n\n❌ Add justifications;\n\n❌ Write supplementary texts.\n\nThe ID field exists only to identify the account.\n\nNothing more.' 
          },
          { 
            id: '3.6', 
            title: 'LESSON 3.6 - SUSPENSION TIME', 
            content: 'Never invent information\n\nIf the system informs permanent suspension, inform exactly that.\n\nRules:\n\n✅ If it is permanent, mark permanent;\n\n✅ If there is a defined deadline, use the correct deadline;\n\n✅ If you do not know exactly, use the closest information possible.\n\nNever do:\n\n❌ Invent periods;\n\n❌ Guess dates;\n\n❌ Make random estimates.\n\nInconsistent information reduces the credibility of the request.' 
          },
          { 
            id: '3.7', 
            title: 'LESSON 3.7 - DATE OF OCCURRENCE', 
            content: 'Dates matter more than they seem\n\nThe system can use the informed date for internal cross-referencing of information.\n\nTherefore:\n\ninform the exact date, if you know;\n\nuse a reasonable approximation, if you are not sure.\n\nAvoid:\n\n❌ "I don\'t remember";\n\n❌ Impossible dates;\n\n❌ Dates very far from the occurrence.\n\nThe coherence of the information helps demonstrate organization and good faith.' 
          },
          { 
            id: '3.8', 
            title: 'LESSON 3.8 - THE DESCRIPTION FIELD', 
            content: 'The only field where the method really happens\n\nAll previous fields serve for classification.\n\nThe description is the only space where there is a possibility of differentiation.\n\nWhat NOT to do:\n\n❌ Accuse;\n\n❌ Confess;\n\n❌ Implore;\n\n❌ Write emotional texts;\n\n❌ Make threats.\n\nThe objective of the description:\n\nThe description should:\n\n✅ seem written by someone calm;\n\n✅ demonstrate organization;\n\n✅ request analysis;\n\n✅ avoid words that trigger automatic responses.\n\nThe question the system tries to answer:\n\nIn practice, your description will be analyzed from a single perspective:\n\n"Is it worth forwarding this request for analysis?"\n\nEverything else depends on this initial decision.\n\nTherefore, the description does not serve to convince someone by shouting. It serves to seem sufficiently organized to deserve an analysis.\n\nThe most important recommendation of this method:\n\nAlthough it is possible to write your own description, this significantly increases the chance of making mistakes in tone, structure, or language.\n\nFor this reason, the recommendation of this method is to use one of the ready-made templates provided in the next module.\n\nThe templates were structured to:\n\nmaintain a technical tone;\n\navoid emotional language;\n\nreduce the chance of triggering automatic responses;\n\npresent the request in an organized and objective manner.\n\nTrying to "improve" the templates by adding emotion, accusations, or excessive explanations usually produces the opposite effect to that desired.\n\nIn the next module, you will have access to the ready-made ticket templates and learn which one to use in each situation.' 
          }
        ]
      },
      {
        id: 'module-4',
        tag: 'MODULE 4',
        title: 'READY TEMPLATES',
        description: 'High-conversion strategic templates.',
        lessons: [
          { 
            id: '4.1', 
            title: 'TICKET TEMPLATE #1', 
            content: 'When to use this model\n\nThis model is indicated for situations in which the account became inaccessible unexpectedly and there is no clear information about the reason for the restriction.\n\nThe objective of this text is to present the situation as a possible technical inconsistency, avoiding any emotional or accusatory language.\n\nModel:\n\nDear team, I am writing to request a technical diagnosis regarding a sudden inability to access my account. Upon trying to connect, I find an unexpected restriction that I cannot resolve. I believe it might be a systemic anomaly, as I am aware that my activities have always been in compliance with the Terms of Service. I kindly request a manual verification of my account status and clarification on the nature of this restriction. I am available to assist in the investigation.\n\nWhen to use:\n\n✅ Automatic bans;\n\n✅ Generic messages;\n\n✅ Lack of clear explanation.',
            template: 'Dear team, I am writing to request a technical diagnosis regarding a sudden inability to access my account. Upon trying to connect, I find an unexpected restriction that I cannot resolve. I believe it might be a systemic anomaly, as I am aware that my activities have always been in compliance with the Terms of Service. I kindly request a manual verification of my account status and clarification on the nature of this restriction. I am available to assist in the investigation.' 
          },
          { 
            id: '4.2', 
            title: 'TICKET TEMPLATE #2', 
            content: 'When to use this model\n\nThis model emphasizes the possibility of failure in automatic monitoring systems, maintaining a technical and collaborative posture.\n\nModel:\n\nTo the technical team, I am reporting an irregularity that prevents my access to the platform. My account became inaccessible without prior notice, and I suspect a failure or error in an automatic monitoring process. I would like to reiterate that I strictly follow community guidelines. Therefore, I formally request that an analyst investigate the occurrence and provide me with an opinion on the cause of the access problem. I remain available to provide logs or other information.\n\nWhen to use:\n\n✅ Unexpected suspensions;\n\n✅ Cases without prior history;\n\n✅ First recovery attempt.',
            template: 'To the technical team, I am reporting an irregularity that prevents my access to the platform. My account became inaccessible without prior notice, and I suspect a failure or error in an automatic monitoring process. I would like to reiterate that I strictly follow community guidelines. Therefore, I formally request that an analyst investigate the occurrence and provide me with an opinion on the cause of the access problem. I remain available to provide logs or other information.' 
          },
          { 
            id: '4.3', 
            title: 'TICKET TEMPLATE #3', 
            content: 'When to use this model\n\nThis model works with the false positive hypothesis and requests an account integrity analysis.\n\nModel:\n\nI am addressing you to request support regarding a problem with access to my account. Since [date], I can no longer use the services. Considering that my pattern of use is guided by compliance with the rules, the situation leads me to believe in a technical error or a false positive of some system. I request that an account integrity analysis be conducted by a team member to identify the source of this anomaly. I await a return and thank you for your attention.\n\nWhen to use:\n\n✅ When you know approximately the date of the occurrence;\n\n✅ Possible false positives;\n\n✅ Accounts without history of punishments.',
            template: 'I am addressing you to request support regarding a problem with access to my account. Since [date], I can no longer use the services. Considering that my pattern of use is guided by compliance with the rules, the situation leads me to believe in a technical error or a false positive of some system. I request that an account integrity analysis be conducted by a team member to identify the source of this anomaly. I await a return and thank you for your attention.' 
          },
          { 
            id: '4.4', 
            title: 'TICKET TEMPLATE #4', 
            content: 'When to use this model\n\nThis model emphasizes the absence of justification presented by the platform and requests a human audit.\n\nModel:\n\nGreetings. I am contacting the support team to obtain assistance with a failure that is blocking access to my account. I did not receive any notification justifying such an impediment, which suggests a possible inconsistency in the validation systems. I have full conviction of my compliance with game policies. I request a human audit in my account activity record to clarify this incident. I am at your disposal for whatever is needed.\n\nWhen to use:\n\n✅ When there is no clear explanation;\n\n✅ Cases of sudden blockage;\n\n✅ Situations without prior notice.',
            template: 'Greetings. I am contacting the support team to obtain assistance with a failure that is blocking access to my account. I did not receive any notification justifying such an impediment, which suggests a possible inconsistency in the validation systems. I have full conviction of my compliance with game policies. I request a human audit in my account activity record to clarify this incident. I am at your disposal for whatever is needed.' 
          },
          { 
            id: '4.5', 
            title: 'TICKET TEMPLATE #5', 
            content: 'When to use this model\n\nThis model seeks to present the problem as a result of an incorrect automated evaluation.\n\nModel:\n\nDear team, my account is inaccessible and I seek to understand why. I believe this situation might have been caused by an incorrect evaluation of an automated process, as I have always taken care to follow the platform\'s rules. To resolve this issue, I request that a support specialist manually review the case and inform me of the technical details that led to the current restriction. Thank you and I await a position.\n\nWhen to use:\n\n✅ Apparently automatic cases;\n\n✅ When there is a suspicion of false positive;\n\n✅ Permanent suspension situations.',
            template: 'Dear team, my account is inaccessible and I seek to understand why. I believe this situation might have been caused by an incorrect evaluation of an automated process, as I have always taken care to follow the platform\'s rules. To resolve this issue, I request that a support specialist manually review the case and inform me of the technical details that led to the current restriction. Thank you and I await a position.' 
          },
          { 
            id: '4.6', 
            title: 'TICKET TEMPLATE #6', 
            content: 'When to use this model\n\nThis model uses a more technical and formal approach, being indicated for later attempts or more complex situations.\n\nModel:\n\nTo the Support team, I submit this request for verification of an anomalous change of privileges in my account, resulting in the inability to log in. The occurrence does not match my pattern of use, which is fully adherent to the Terms of Service. I formally request the intervention of an analyst for a precise diagnosis and the restoration of my access. I am available to cooperate with the analysis process.\n\nWhen to use:\n\n✅ Second attempt;\n\n✅ More complex cases;\n\n✅ Situations where the first ticket did not obtain satisfactory analysis.',
            template: 'To the Support team, I submit this request for verification of an anomalous change of privileges in my account, resulting in the inability to log in. The occurrence does not match my pattern of use, which is fully adherent to the Terms of Service. I formally request the intervention of an analyst for a precise diagnosis and the restoration of my access. I am available to cooperate with the analysis process.' 
          },
          { 
            id: 'm4-rules', 
            title: '⚠️ EXTRA LESSON - MANDATORY TEMPLATE RULES', 
            content: 'Before using any model, you need to understand some fundamental rules:\n\nDo:\n\n✅ Use only one model per attempt;\n\n✅ Maintain the exact tone of the text;\n\n✅ Choose the model most compatible with your situation;\n\n✅ Wait for the correct period after sending.\n\nNever do:\n\n❌ Mix two models;\n\n❌ Add emotion;\n\n❌ Make threats;\n\n❌ Completely alter the structure;\n\n❌ Insert accusations;\n\n❌ Copy the same text several times.\n\nImportant:\n\nThe models exist to increase the possibility of human reading.\n\nThey do not guarantee:\n\naccount recovery;\n\nreversal of the decision;\n\npriority in service.\n\nThe objective is only to avoid the errors that cause most attempts to be automatically closed. Which, let\'s face it, already represents a considerable statistical advantage given the human tendency to turn a support ticket into an open letter of indignation.' 
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
            title: 'LESSON 5.1 - THE CORRECT WAITING TIME', 
            content: 'The most common error happens after sending\n\nAfter sending the ticket, many people believe they need to keep acting to increase their chances.\n\nIn practice, excess action usually produces the opposite effect.\n\nAfter sending the request:\n\nwait at least 72 hours;\n\nthe ideal period is between 7 and 10 days;\n\navoid any reinforcement attempt before this deadline.\n\nDo not:\n\n❌ Send another ticket on the same day;\n\n❌ Create new requests after a few hours;\n\n❌ Resend the same text multiple times;\n\n❌ Look for other support channels immediately.\n\nService systems normally prioritize organized and unique requests.\n\nExcessive persistence can make your request lose credibility.\n\nMain rule:\n\nAfter sending the ticket, your best strategy becomes waiting.' 
          },
          { 
            id: '5.2', 
            title: 'LESSON 5.2 - WHAT NOT TO DO AT ALL', 
            content: 'How to destroy your own attempt in a few minutes\n\nAfter sending, there are some behaviors that significantly increase the probability of automatic responses.\n\nNever:\n\n❌ Open multiple tickets simultaneously;\n\n❌ Use several different emails;\n\n❌ Change categories just to "test";\n\n❌ Send emotional messages;\n\n❌ Argue with support;\n\n❌ Make threats;\n\n❌ Try to pressure the team.\n\nWhy?\n\nBecause internal systems usually interpret excessive persistence as inappropriate behavior or repetitive attempt.\n\nThe objective of the method is not to draw attention.\n\nThe objective is to appear as a legitimate request that deserves analysis.\n\nRemember:\n\nBeing persistent does not mean being a priority.' 
          },
          { 
            id: '5.3', 
            title: 'LESSON 5.3 - WHEN TO SEND A NEW TICKET', 
            content: 'The correct moment for a new attempt\n\nThere is only one situation in which a new attempt can be considered:\n\nYou can send another ticket when:\n\n✅ At least 7 days have passed;\n\n✅ There was no response;\n\nor\n\n✅ The response received was clearly automatic.\n\nIf you decide to try again:\n\nuse another ticket template;\n\nslightly alter the subject;\n\nmaintain the technical tone;\n\ndo not reuse exactly the same text.\n\nNever:\n\n❌ Copy and paste the previous ticket;\n\n❌ Resend the same message;\n\n❌ Quote previous automatic responses;\n\n❌ Show frustration.\n\nThe objective of the second attempt is to try to escape automated processes, not discuss the first decision.' 
          },
          { 
            id: '5.4', 
            title: 'LESSON 5.4 - WHEN TO STOP', 
            content: 'Knowing when to stop is also part of the strategy\n\nThere is a moment when insisting stops being strategy and becomes just insistence.\n\nYou should consider stopping attempts when:\n\nyou receive a clear and repeated final response;\n\nthe platform explicitly informs that there will be no new analysis;\n\nthree well-spaced unsuccessful attempts produce no progress.\n\nWhy stop?\n\nBecause continuing to insist after this point normally generates no additional benefits.\n\nOn the contrary, it can hinder future analyses or reviews.\n\nThe objective of the method:\n\nThis method does not seek quantity.\n\nIt seeks quality in the attempt.\n\nA single organized attempt is worth more than dozens of impulsive attempts.' 
          },
          { 
            id: '5.5', 
            title: 'LESSON 5.5 - THE CORRECT MENTALITY', 
            content: 'The method is not brute force\n\nA very common mistake is believing that recovering an account depends on persistence.\n\nIn fact, this method works by trying to:\n\navoid automatic responses;\n\nnot trigger internal filters;\n\nnot raise negative signals;\n\nincrease the possibility of human analysis.\n\nWhat this method is NOT:\n\n❌ Spam;\n\n❌ Pressure;\n\n❌ Manipulation;\n\n❌ Discussion with support.\n\nWhat this method IS:\n\n✅ Organization;\n\n✅ Control;\n\n✅ Strategy;\n\n✅ Patience.\n\nThe most important principle of this module:\n\nAfter the ticket is sent, the biggest threat to the process is usually acting on impulse.\n\nMany attempts fail not because the first ticket was bad, but because the user decided to send fifteen others to "ensure". An admirably optimistic approach, though statistically disastrous.' 
          }
        ]
      },
      {
        id: 'module-6',
        tag: 'MODULE 6',
        title: 'ANALYZING THE RESPONSE',
        description: 'Decoding support feedback.',
        lessons: [
          { 
            id: '6.1', 
            title: 'LESSON 6.1 - HOW TO IDENTIFY AN AUTOMATIC RESPONSE', 
            content: 'Not every response means someone actually read your case\n\nBefore making any decision, you need to find out who answered your request.\n\nMany responses are produced automatically by support systems and do not represent an individual analysis of your account.\n\nCharacteristics of an automatic response:\n\n✅ Extremely generic text;\n\n✅ Standardized language;\n\n✅ Absence of specific details;\n\n✅ Repetition of the same information displayed in the ban;\n\n✅ Immediate case closure.\n\nCommon examples:\n\n"After analysis, we confirm that the penalty was correctly applied."\n"It is not possible to reverse this decision."\n"The system detected violation of the Terms of Service."\n\nAn important sign:\n\nIf the response:\n\ndoes not mention your ID;\n\ndoes not mention dates;\n\ndoes not mention specific events;\n\ndoes not refer to the content sent;\n\nthere is a high probability that you received only an automated response.\n\nWhat does this mean?\n\nIt does not necessarily mean that your case was analyzed and denied.\n\nOften it just means that it did not pass the first screening layer.' 
          },
          { 
            id: '6.2', 
            title: 'LESSON 6.2 - HOW TO IDENTIFY A HUMAN RESPONSE', 
            content: 'The signs that someone actually analyzed your request\n\nHuman responses usually present small differences that indicate real reading.\n\nYou do not need to find all the signs. One or two can already indicate human analysis.\n\nCommon characteristics:\n\n✅ Mention of account history;\n\n✅ Reference to information provided in the ticket;\n\n✅ Request for documents or additional data;\n\n✅ Less standardized language;\n\n✅ Referral for internal analysis.\n\nCommon examples:\n\n"We checked the account history..."\n"Based on the information provided..."\n"We forwarded your request for complementary analysis..."\n"We will need additional information..."\n\nWhat does this mean?\n\nIt means that your request managed to pass part of the automatic screening.\n\nIn this scenario, the biggest mistake possible is to start writing huge texts trying to reinforce your argument.\n\nThe analysis has already started.\n\nNow, the objective is not to hinder it.' 
          },
          { 
            id: '6.3', 
            title: 'LESSON 6.3 - WHAT TO DO IF THE RESPONSE IS AUTOMATIC', 
            content: 'The worst possible reaction is to respond immediately\n\nUpon identifying an automatic response, many people panic and start sending new tickets.\n\nThis is usually the most harmful decision.\n\nIf the response was automatic:\n\n✅ Do not respond immediately;\n\n✅ Do not try to argue;\n\n✅ Do not send additional justifications;\n\n✅ Do not make threats;\n\n✅ Wait at least 7 days.\n\nAfter this period:\n\nYou can consider:\n\nusing another ticket template;\n\nslightly alter the subject;\n\nreformulate the approach;\n\nstart a new organized attempt.\n\nThe objective here is not to beat the automatic response.\n\nThe objective is to try to make your next attempt cross this barrier.\n\nRemember:\n\nYou are trying to exit the automatic cycle, not argue with it.' 
          },
          { 
            id: '6.4', 
            title: 'LESSON 6.4 - WHAT TO DO IF THE RESPONSE IS HUMAN', 
            content: 'When there is human reading, less is more\n\nIf there are clear signs of human analysis, you must act with even more caution.\n\nDo:\n\n✅ Wait for the period informed;\n\n✅ Respond only to what was requested;\n\n✅ Use objective responses;\n\n✅ Maintain technical language.\n\nDo not:\n\n❌ Write emotional texts;\n\n❌ Retell the whole story;\n\n❌ Make accusations;\n\n❌ Press for speed;\n\n❌ Add unnecessary information.\n\nMain rule:\n\nRespond only to the question asked.\n\nIf support requested specific information, provide only that information.\n\nThe more you talk beyond what is necessary, the greater the chance of introducing inconsistencies or harming the analysis.' 
          },
          { 
            id: '6.5', 
            title: 'LESSON 6.5 - THE WORST ERROR OF ALL', 
            content: 'Impulse destroys more attempts than the system itself\n\nThere is a behavior that appears repeatedly in failed attempts:\n\nResponding emotionally.\n\nPhrases like:\n\n❌ "But I didn\'t do anything."\n\n❌ "This is unfair."\n\n❌ "Other people got unbanned."\n\n❌ "I will report the company."\n\n❌ "You need to solve this."\n\nUsually produce no benefit.\n\nOn the contrary.\n\nThey can:\n\ndefinitively close the analysis;\n\nreduce the chance of reassessment;\n\ntransform a possibility into a final negative.\n\nThe final principle of this method:\n\nThis method never aimed to argue with support.\n\nThe objective was always:\n\navoid automatic filters;\n\nincrease the chance of human reading;\n\npresent the case in an organized way;\n\nprevent the user himself from harming the attempt.' 
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
    orderBump: {
      title: 'PACK VIP 100%',
      description: 'Si compraste junto con el PACK de soporte 100% con mi ayuda, haz clic en el botón de abajo.',
      button: 'ACCEDER AL SOPORTE VIP'
    },
    bypass: {
      title: 'PACK BYPASS 100%',
      description: 'Si compraste junto con el PACK de BYPASS con mi ayuda, haz clic en el botón de abajo.',
      button: 'ACCEDER AL SOPORTE BYPASS'
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
            title: 'AULA 1.1 - QUÉ ES EL BANEO AUTOMÁTICO', 
            content: 'Entendiendo el funcionamiento de los baneos automáticos\n\nAntes de intentar recuperar su cuenta, debe entender un hecho importante: no todos los baneos se aplican de la misma forma.\n\nEl baneo automático ocurre cuando los sistemas internos identifican comportamientos considerados sospechosos sin que necesariamente exista un análisis humano inicial. Estos sistemas funcionan por patrones, detecciones automatizadas y verificaciones internas.\n\nLas principales características de un baneo automático son:\n\nMensaje genérico;\n\nAusencia de detalles específicos;\n\nRespuestas rápidas y estandarizadas;\n\nFalta de referencia directa al comportamiento do usuario;\n\nCierre automático del soporte.\n\nEjemplos comunes:\n\n"Detectamos actividades irregulares."\n"Su cuenta violó nuestros términos de servicio."\n"La suspensión se aplicó correctamente."\n\n¿Por qué es esto importante?\n\nPorque los baneos automáticos representan los casos en los que todavía existe alguna posibilidad de solicitar una reevaluación estratégica.\n\nEl objetivo de este método no es discutir con el sistema, sino intentar que su solicitud supere la primera capa automática de análisis.\n\nRecuerde:\n\nCuanto más emocional sea su mensaje, mayor será la posibilidad de quedar atrapado en el proceso automático.' 
          },
          { 
            id: '1.2', 
            title: 'AULA 1.2 - QUÉ ES EL BANEO MANUAL', 
            content: 'Cuando hay participación humana en la decisión\n\nEl baneo manual ocurre cuando existe un análisis directo o validación interna realizada por miembros del equipo responsable.\n\nEn estos casos, normalmente existen elementos más específicos relacionados con el motivo de la sanción.\n\nCaracterísticas comunes:\n\nMensajes más detallados;\n\nReferencia directa a reglas o comportamientos;\n\nRespuestas objetivas y firmes;\n\nMenor flexibilidad para la reevaluación.\n\nEjemplos:\n\nCita directa de los Términos de Servicio;\n\nInformación sobre el comportamiento específico;\n\nConfirmación explícita de la infracción.\n\n¿Qué significa esto?\n\nSignifica que la posibilidad de reversión tiende a ser significativamente menor.\n\nEsto no quiere decir que deba actuar por impulso o rendirse de inmediato. Solo significa que la estrategia debe ser aún más cuidadosa.\n\nEn este escenario, el objetivo principal deja de ser "convencer" y pasa a ser:\n\nNo empeorar la situación;\n\nEvitar cierres adicionales;\n\nMantener una postura técnica y organizada.' 
          },
          { 
            id: '1.3', 
            title: 'AULA 1.3 - QUÉ ES EL BANEO REINCIDENTE', 
            content: 'Cuando existe historial previo de sanciones\n\nEl baneo reincidente ocurre cuando la cuenta ya posee registros anteriores de sanciones, advertencias o suspensiones.\n\nLas plataformas normalmente aplican niveles de tolerancia progresivamente menores para cuentas reincidentes.\n\nCaracterísticas:\n\nRespuestas más rápidas;\n\nMenor apertura para la revisión;\n\nAnálisis más rígidos;\n\nBajíssima tolerancia a nuevas apelaciones.\n\nEl error más común\n\nMuchas personas creen que enviar docenas de tickets aumenta las posibilidades de éxito.\n\nEn la práctica, esto suele producir el efecto contrario.\n\nCuando existe reincidencia, la insistencia excesiva puede:\n\nConfirmar decisiones anteriores;\n\nCerrar posibilidades de análisis futuro;\n\nClasificar el caso como intento repetitivo.\n\nPor eso, el método trabaja con control, organización y estrategia, nunca con insistencia impulsiva.' 
          },
          { 
            id: '1.4', 
            title: 'AULA 1.4 - CÓMO IDENTIFICAR CUÁL ES SU CASO', 
            content: 'El paso más importante antes de enviar cualquier ticket\n\nAntes de escribir cualquier mensaje al soporte, hágase estas preguntas:\n\n¿El mensaje recibido es genérico?\n\nSi es así, hay grandes posibilidades de que sea un baneo automático.\n\n¿El mensaje presenta detalles específicos?\n\nSi es así, puede indicar un análisis manual.\n\n¿La cuenta ha recibido sanciones anteriormente?\n\nSi la respuesta es positiva, probablemente esté ante un caso reincidente.\n\nResumen rápido\nTipo\tCaracterísticas\tPosibilidad de intento\nBaneo automático\tMensajes genéricos y rápidos\tMayor\nBaneo manual\tMensajes específicos\tBaja\nBaneo reincidente\tHistorial previo\tMuy baja\n\n¿Qué necesita entender antes de continuar?\n\nEn Garena, normalmente no hay espacio para debates prolongados.\n\nUsted envía una solicitud y recibe una decisión.\n\nEsto significa que su primer intento debe ser:\n\n✅ Organizado\n✅ Técnico\n✅ Objetivo\n✅ Estratégico' 
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
            title: 'AULA 2.1 - DÓNDE ENVIAR EL TICKET', 
            content: 'Utilizando solo canales oficiales\n\nAntes de pensar en el texto que se enviará, debe comprender una regla fundamental:\n\nUn ticket enviado en el lugar equivocado nace sin posibilidad de análisis.\n\nMuchas personas, después de perder el acceso a la cuenta, intentan contactar a través de:\n\nInstagram;\n\nFacebook;\n\nDiscord;\n\nCorreos genéricos;\n\nComentarios en redes sociais;\n\nFormularios no oficiales.\n\nEstos canales no realizan análisis individual de cuentas y, en la mayoría de los casos, no tienen ningún poder para cambiar las decisiones internas.\n\nEl procedimiento correcto\n\nLa solicitud debe enviarse exclusivamente a través del soporte oficial proporcionado por la plataforma.\n\nEl objetivo del método es sencillo:\n\nentrar en el flujo correcto de servicio;\n\nevitar derivaciones automáticas innecesarias;\n\nmaximizar la posibilidad de análisis.\n\nEl primer error que elimina intentos\n\nMuchas personas envían mensajes a varios canales simultáneamente.\n\nEsto no aumenta las posibilidades.\n\nEn la práctica, solo crea registros redundantes y puede perjudicar la coherencia del caso.\n\nRecuerde:\n\nUn intento organizado vale más que diez intentos desesperados.' 
          },
          { 
            id: '2.2', 
            title: 'AULA 2.2 - ELIGIENDO LA CATEGORÍA CORRECTA', 
            content: 'La decisión más importante antes del mensaje\n\nAl abrir un ticket, deberá seleccionar una categoría.\n\nLa mayoría de las personas trata este paso como un detalle.\n\nNo lo es.\n\nLa categoría elegida influye directamente en cómo se procesará su solicitud internamente.\n\nQué evitar\n\nEvite categorías:\n\nextremadamente acusatorias;\n\ndefinitivas;\n\ndirectamente relacionadas con la confirmación de la sanción.\n\nCategorías muy específicas pueden hacer que su solicitud sea dirigida directamente a respuestas estandarizadas.\n\nQué buscar\n\nLa estrategia consiste en seleccionar categorías que:\n\npermitan el análisis;\n\nsean más neutrales;\n\nno anticipen conclusiones.\n\nEl objetivo no es ocultar información.\n\nEl objetivo es evitar que su intento se cierre incluso antes de leerlo.\n\nRegla práctica\n\nPregúntese:\n\n¿Esta categoría parece abrir un análisis o simplemente confirmar una decisión?\n\nSi parece confirmar una decisión, elija otra opción neutral disponible.' 
          },
          { 
            id: '2.3', 
            title: 'AULA 2.3 - COMPLETANDO LOS DATOS DE LA CUENTA', 
            content: 'Menos información significa menos problemas\n\nUna de las mayores causas de fallas ocurre cuando el usuario intenta explicar toda la situación en campos que no fueron hechos para eso.\n\nLos campos técnicos existen solo para identificación.\n\nComplete solo:\n\nID correcto de la cuenta;\n\nNickname exacto;\n\nCorreo electrónico solicitado;\n\nInformación obligatoria del formulario.\n\nNunca haga esto:\n\n❌ Añadir explicaciones adicionales;\n\n❌ Contar su historia en campos técnicos;\n\n❌ Insertar justificaciones;\n\n❌ Repetir información.\n\n¿Por qué?\n\nPorque los sistemas automatizados analizan los patrones de llenado.\n\nLos campos técnicos deben contener solo datos técnicos.\n\nCuanto más organizado esté el formulario, mayor será la posibilidad de que sea tratado como una solicitud legítima.' 
          },
          { 
            id: '2.4', 
            title: 'AULA 2.4 - EL CAMPO DE MENSAJE', 
            content: 'El único lugar donde a estrategia realmente importa\n\nTodo el restante del formulario sirve solo para clasificación.\n\nEl campo de mensaje es el único espacio donde existe posibilidad de influencia humana.\n\nPor eso, existen algunas reglas fundamentales.\n\nNunca haga:\n\n❌ Escribir en mayúsculas;\n\n❌ Utilizar emojis;\n\n❌ Hacer amenazas;\n\n❌ Copiar textos emocionales;\n\n❌ Escribir como si estuviera discutiendo en una red social.\n\nQué hacer:\n\n✅ Utilizar lenguaje formal;\n\n✅ Ser objetivo;\n\n✅ Demostrar organización;\n\n✅ Solicitar análisis, no exigir resultados.\n\nEl soporte no está buscando quién está más indignado.\n\nEstá buscando solicitudes que merezcan ser analizadas.\n\nRegra principal\n\nLa claridad vale más que la cantidad.\n\nUn texto corto y organizado suele funcionar mejor que una página entera de desahogo.' 
          },
          { 
            id: '2.5', 
            title: 'AULA 2.5 - REVISIÓN FINAL ANTES DE ENVIAR', 
            content: 'El ticket es único\n\nAntes de hacer clic en enviar, deténgase unos minutos y revise todo.\n\nRealice la siguiente lista de verificación:\n\nCategoría: ¿Es correcta? ¿Es la opción más neutral disponible?\n\nDatos: ¿Se digitó el ID correctamente? ¿Es exacto el nickname?\n\nMensaje: ¿Es objetivo? ¿Es técnico? ¿Está organizado?\n\nTono general: Pregunte, ¿esto parece haber sido escrito por alguien calmado y racional?\n\nSi la respuesta es "no", no lo envíe todavía.\n\nDespués del envío\n\nDespués de que se haya enviado el ticket:\n\n❌ No envíe otro de inmediato;\n\n❌ No intente complementar información;\n\n❌ No abra múltiples solicitudes;\n\n❌ No intente reforzar el pedido.\n\nLa estrategia termina en el momento del envío.\n\nA partir de ahí, la insistencia excesiva suele producir el efecto contrario al deseado.' 
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
            title: 'AULA 3.1 - QUÉ OPCIÓN SELECCIONAR', 
            content: 'La primera decisión que puede definir todo el proceso\n\nAl abrir el formulario de soporte, encontrará diversas opciones relacionadas con el problema de la cuenta.\n\nLa mayoría de las personas comete el primer error justamente aquí: eligen la opción más obvia.\n\nEl problema es que algunas categorías funcionan prácticamente como clasificaciones automáticas de cierre.\n\nEvite opciones como:\n\n❌ "Detectamos el uso de software no autorizado"\n\n❌ "El sistema Anti-Cheat detectó irregularidades"\n\n❌ "Esta cuenta ha sido suspendida permanentemente"\n\nEstas categorías suelen enviar la solicitud directamente a respuestas estandarizadas.\n\nLa estrategia correcta\n\nSiempre que sea posible, elija opciones más neutras, relacionadas con la recuperación o verificación de la cuenta.\n\nPor ejemplo:\n\n✅ "Quiero recuperar mi cuenta"\n\nEste enfoque:\n\nno anticipa conclusiones;\nno confirma acusaciones;\nmantiene la solicitud en categorías más amplias de análisis.\n\nEl principio estratégico\n\nUsted no está intentando probar nada en esta etapa.\n\nSolo está intentando evitar que su solicitud sea descartada antes de ser analizada.' 
          },
          { 
            id: '3.2', 
            title: 'AULA 3.2 - EL CAMPO SOLICITANTE', 
            content: 'El campo más simple y, aún así, frecuentemente completado mal\n\nEl campo "Requester" (Solicitante) identifica al solicitante del ticket.\n\nSu función es exclusivamente administrativa.\n\nQué insertar:\nel correo electrónico utilizado para el contacto;\nuna dirección válida;\nun correo electrónico al que tenga acceso.\n\nQué NO hacer:\n\n❌ Escribir el ID de la cuenta;\n\n❌ Insertar explicaciones;\n\n❌ Añadir observaciones;\n\n❌ Utilizar múltiples correos electrónicos.\n\nImportante\n\nEl correo electrónico del ticket no necesariamente tiene que ser el mismo que se usa en la cuenta del juego.\n\nSolo sirve para que el soporte pueda responder a su solicitud.\n\nCuanto más limpio y objetivo sea el llenado, mejor.' 
          },
          { 
            id: '3.3', 
            title: 'AULA 3.3 - EL CAMPO ASUNTO', 
            content: 'El campo que más activa respuestas automáticas\n\nEl asunto do ticket es una de las primeras informaciones analizadas por el sistema.\n\nPor lo tanto, el uso de términos emocionales o acusatorios puede perjudicar el intento.\n\nNunca use:\n\n❌ "Fui baneado injustamente"\n\n❌ "Desbaneo urgente"\n\n❌ "Mi cuenta fue robada"\n\n❌ "Quiero mi desbaneo"\n\nEl objetivo del asunto\n\nEl asunto debe:\n\nparecer técnico;\nser corto;\nindicar necesidad de análisis;\nevitar conclusiones.\n\nEjemplo de lógica correcta:\n\nEn lugar de acusar o exigir, trate de transmitir la idea de:\n\n"Solicitud de verificación referente al acceso de la cuenta."\n\nRecuerde:\n\nEl asunto sirve para abrir una puerta, no para ganar una discusión.' 
          },
          { 
            id: '3.4', 
            title: 'AULA 3.4 - NICKNAME DE LA CUENTA', 
            content: 'No existe margen para la creatividad\n\nEl nickname debe completarse exactamente como aparece dentro do juego.\n\nReglas:\n\n✅ Use letras mayúsculas y minúsculas correctamente;\n\n✅ Respete los símbolos especiales;\n\n✅ Copie exactamente el nombre registrado.\n\nNunca haga:\n\n❌ Usar nicknames alternativos;\n\n❌ Usar abreviaturas;\n\n❌ Insertar nombres antiguos de la cuenta.\n\nUn nickname incorrecto puede hacer que su solicitud sea considerada inválida.' 
          },
          { 
            id: '3.5', 
            title: 'AULA 3.5 - EL NÚMERO DE ID', 
            content: 'El dato más importante do formulario\n\nEl ID de la cuenta es el principal identificador interno.\n\nPor lo tanto:\n\ncopie directamente de la fuente oficial;\nrevise más de una vez;\nconfirme todos los números.\n\nNo haga:\n\n❌ Insertar comentarios;\n\n❌ Añadir justificaciones;\n\n❌ Escribir textos complementarios.\n\nEl campo de ID existe solo para identificar la cuenta.\n\nNada más.' 
          },
          { 
            id: '3.6', 
            title: 'AULA 3.6 - TIEMPO DE SUSPENSIÓN', 
            content: 'Nunca invente información\n\nSi el sistema informa suspensión permanente, informe exactamente eso.\n\nReglas:\n\n✅ Si es permanente, marque permanente;\n\n✅ Si hay un plazo definido, use el plazo correcto;\n\n✅ Si no lo sabe exactamente, use la información más cercana posible.\n\nNunca haga:\n\n❌ Inventar períodos;\n\n❌ Adivinar fechas;\n\n❌ Hacer estimaciones aleatorias.\n\nLa información inconsistente reduce la credibilidad de la solicitud.' 
          },
          { 
            id: '3.7', 
            title: 'AULA 3.7 - FECHA DEL SUCESO', 
            content: 'Las fechas importan más de lo que parecen\n\nEl sistema puede usar la fecha informada para el cruce interno de información.\n\nPor lo tanto:\n\ninforme la fecha exacta, si la conoce;\nuse una aproximación razonable, si no está seguro.\n\nEvite:\n\n❌ "No me acuerdo";\n\n❌ Fechas imposibles;\n\n❌ Fechas muy lejanas al suceso.\n\nLa coherencia de la información ayuda a demostrar organización y buena fe.' 
          },
          { 
            id: '3.8', 
            title: 'AULA 3.8 - EL CAMPO DE DESCRIPCIÓN', 
            content: 'El único campo donde el método realmente ocurre\n\nTodos los campos anteriores sirven para la clasificación.\n\nLa descripción es el único espacio donde existe la posibilidad de diferenciación.\n\nQué NO hacer:\n\n❌ Acusar;\n\n❌ Confesar;\n\n❌ Implorar;\n\n❌ Escribir textos emocionales;\n\n❌ Hacer amenazas.\n\nEl objetivo de la descripción\n\nLa descripción debe:\n\n✅ parecer escrita por alguien calmado;\n\n✅ demostrar organización;\n\n✅ solicitar análisis;\n\n✅ evitar palabras que activen respuestas automáticas.\n\nLa pregunta que el sistema trata de responder\n\nEn la práctica, su descripción será analisada desde uma única perspectiva:\n\n"¿Vale la pena enviar esta solicitud para análisis?"\n\nTodo lo demás depende de esta decisión inicial.\n\nPor lo tanto, la descripción no sirve para convencer a alguien gritando.\n\nSirve para parecer lo suficientemente organizada como para merecer un análisis.\n\n\nLa recomendación más importante de este método\n\nAunque es posible escribir su propia descripción, esto aumenta significativamente a posibilidad de cometer errores de tono, estructura o lenguaje.\n\nPor este motivo, a recomendación de este método es usar una de las plantillas ya preparadas que se proporcionan en el próximo módulo.\n\nLas plantillas se estructuraron para:\n\nmantener un tono técnico;\nevitar el lenguaje emocional;\nreducir a posibilidad de activar respuestas automáticas;\npresentar a solicitud de forma organizada y objetiva.\n\nTratar de "mejorar" las plantillas añadiendo emoción, acusaciones o explicaciones excesivas suele producir el efecto contrario al deseado.\n\nEn el próximo módulo, tendrá acceso a las plantillas de tickets ya preparadas y aprenderá cuál usar en cada situación.' 
          }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'PLANTILLAS LISTAS',
        description: 'Plantillas estratégicas de alta conversión.',
        lessons: [
          { 
            id: '4.1', 
            title: 'PLANTILLA DE TICKET Nº 1', 
            content: 'Cuándo utilizar este modelo\n\nEste modelo está indicado para situaciones en las que la cuenta se volvió inaccesible inesperadamente y no hay información clara sobre el motivo de la restricción.\n\nEl objetivo de este texto es presentar la situación como una posible inconsistencia técnica, evitando cualquier lenguaje emocional o acusatorio.\n\nPlantilla:\n\nEstimado equipo, le escribo para solicitar un diagnóstico técnico referente a una súbita imposibilidad de acceder a mi cuenta. Al intentar conectar, encuentro una restricción inesperada que no puedo resolver. Creo que podría tratarse de una anomalía sistêmica, ya que soy consciente de que mis actividades siempre han estado en conformidad con los Términos de Servicio. Solicito, por favor, una verificación manual del estado de mi cuenta y una aclaración sobre la naturaleza de esta restricción. Quedo a su disposición para ayudar en la investigación.\n\nCuándo usar:\n\n✅ Baneos automáticos;\n✅ Mensajes genéricos;\n✅ Falta de explicación clara.',
            template: 'Estimado equipo, le escribo para solicitar un diagnóstico técnico referente a uma súbita imposibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.'
          },
          { 
            id: '4.2', 
            title: 'PLANTILLA DE TICKET Nº 2', 
            content: 'Cuándo utilizar este modelo\n\nEste modelo enfatiza a possibilidade de falla en los sistemas automáticos de monitoreo, manteniendo una postura técnica e colaborativa.\n\nPlantilla:\n\nAl equipo técnico, vengo a reportar una irregularidad que impide mi acceso a la plataforma. Mi cuenta se volvió inaccesible sin previo aviso, y sospecho de una falla o un error en algún proceso de monitoreo automático. Me gustaría reiterar que sigo estrictamente las directrices de la comunidad. Por lo tanto, pido formalmente que un analista investigue lo ocurrido y me proporcione un dictamen sobre la causa del problema de acceso. Sigo disponible para proporcionar logs u otra información.\n\nCuándo usar:\n\n✅ Suspensiones inesperadas;\n✅ Casos sin historial previo;\n✅ Primer intento de recuperación.',
            template: 'À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.'
          },
          { 
            id: '4.3', 
            title: 'PLANTILLA DE TICKET Nº 3', 
            content: 'Cuándo utilizar este modelo\n\nEste modelo trabalha con a hipótese del falso positivo y solicita un análisis de integridad de la cuenta.\n\nPlantilla:\n\nMe dirijo a ustedes para solicitar soporte con respecto a un problema con el acceso a mi cuenta. Desde hace poco tiempo, ya no puedo usar los servicios. Considerando que mi historial de uso se guía por el cumplimiento de las reglas, la situación me lleva a creer en un error técnico o un falso positivo de algún sistema. Pido que se realice un análisis de integridad de la cuenta por parte de un miembro del equipo para identificar el origen de esta anomalía. Espero una respuesta y agradezco su atención.\n\nCuándo usar:\n\n✅ Cuando conoce aproximadamente a fecha del suceso;\n✅ Posibles falsos positivos;\n✅ Cuentas sin historial de sanciones.',
            template: 'Dirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde há pouco tempo, não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a crer em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.'
          },
          { 
            id: '4.4', 
            title: 'PLANTILLA DE TICKET Nº 4', 
            content: 'Cuándo utilizar este modelo\n\nEste modelo enfatiza a ausência de justificativa apresentada pela plataforma y solicita uma auditoria humana.\n\nPlantilla:\n\nSaludos. Me pongo en contacto con el equipo de soporte para obtener asistencia con una falla que está bloqueando el acceso a mi cuenta. No recibí ninguna notificación que justificara tal impedimento, lo que sugiere una posible inconsistência en los sistemas de validação. Tengo plena convicção de mi cumplimiento con las políticas do juego. Solicito uma auditoria humana en el registro de actividades de mi cuenta para aclarar este incidente. Me pongo a su disposición para lo que sea necesario.\n\nCuándo usar:\n\n✅ Cuando no hay una explicación clara;\n✅ Casos de bloqueio repentino;\n✅ Situaciones sin previo aviso.',
            template: 'Saudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.'
          },
          { 
            id: '4.5', 
            title: 'PLANTILLA DE TICKET Nº 5', 
            content: 'Cuándo utilizar este modelo\n\nEste modelo busca apresentar o problema como resultado de uma avaliação automatizada incorreta.\n\nPlantilla:\n\nEstimados, mi cuenta es inaccesible y busco entender por qué. Creo que esta situación puede haber sido causada por una evaluación incorrecta de un proceso automatizado, ya que siempre me he preocupado por seguir las reglas de la plataforma. Para resolver esta cuestión, solicito que un especialista de soporte revise el caso manualmente e me informe los detalles técnicos que llevaron a la restricción actual. Gracias y espero una posición.\n\nCuándo usar:\n\n✅ Casos aparentemente automáticos;\n✅ Cuando hay sospecha de falso positivo;\n✅ Situaciones de suspensión permanente.',
            template: 'Prezados, minha conta encontra-se inacessível e busco entender o motivo. Acredito que esta situação possa ter sido causada por uma avaliação incorreta de um processo automatizado, visto que sempre zelei por seguir as regras da plataforma. Para resolvermos esta questão, solicito que um especialista de suporte revise o caso manualmente e me comunique os detalhes técnicos que levaram à atual restrição. Agradeço e aguardo um posicionamento.'
          },
          { 
            id: '4.6', 
            title: 'PLANTILLA DE TICKET Nº 6', 
            content: 'Cuándo utilizar este modelo\n\nEste modelo utiliza un enfoque más técnico y formal, siendo indicado para intentos posteriores o situaciones más complejas.\n\nPlantilla:\n\nAl equipo de Soporte, presento este pedido para a verificação de uma alteração anômala de privilégios en mi cuenta, lo que resulta en a impossibilidade de iniciar sesión. El suceso no coincide con mi patrón de uso, el cual es totalmente adherente a los Términos de Servicio. Pido, formalmente, a intervenção de un analista para un diagnóstico preciso y el restablecimiento de mi acesso. Estoy a su disposición para cooperar con el proceso de análisis.\n\nCuándo usar:\n\n✅ Segundo intento;\n✅ Casos más complejos;\n✅ Situaciones donde el primer ticket no obtuvo un análisis satisfactorio.',
            template: 'À equipe de Suporte, submeto este pedido para verificação de uma alteração anômala de privilégios em minha conta, resultando na impossibilidade de login. O ocorrido não condiz com meu padrão de uso, que é totalmente aderente aos Termos de Serviço. Peço, formalmente, a intervenção de um analista para um diagnóstico preciso e o restabelecimento do meu acesso. Estou à disposição para cooperar com o processo de análise.'
          },
          { 
            id: 'm4-rules', 
            title: '⚠️ CLASE EXTRA - REGLAS OBLIGATORIAS DE LAS PLANTILLAS', 
            content: 'Antes de utilizar cualquier modelo, debe compreender algunas reglas fundamentales:\n\nQué hacer:\n\n✅ Utilice solo un modelo por intento;\n\n✅ Mantenga exactamente el tono del texto;\n\n✅ Elija el modelo más compatible con su situación;\n\n✅ Espere el plazo correcto después del envío.\n\nQué NO hacer:\n\n❌ Mezclar dos modelos;\n\n❌ Añadir emoción;\n\n❌ Hacer amenazas;\n\n❌ Alterar completamente a estrutura;\n\n❌ Insertar acusaciones;\n\n❌ Copiar el mismo texto varias veces.\n\nImportante\n\nLos modelos existen para aumentar a possibilidade de leitura humana.\n\nNo garantizan:\n\nrecuperación de a cuenta;\nreversión de a decisión;\nprioridad en a atención.\n\nEl objetivo es solo evitar los errores que hacen que a mayoría de los intentos se cierren automáticamente. Lo cual, seamos realistas, ya representa uma ventaja estadística considerable dada a tendencia humana de transformar un ticket de soporte en uma carta abierta de indignación.' 
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
            title: 'AULA 5.1 - EL TIEMPO DE ESPERA CORRECTO', 
            content: 'El error más común ocurre después del envío\n\nDespués de enviar el ticket, muchas personas creen que necesitan seguir actuando para aumentar sus posibilidades.\n\nEn a práctica, el exceso de acción suele producir el efecto contrario.\n\nTras el envío de a solicitud:\n\nespere al menos 72 horas;\nel período ideal es de entre 7 y 10 días;\nevite cualquier intento de refuerzo antes de ese plazo.\nNo haga esto:\n\n❌ Enviar otro ticket el mismo día;\n\n❌ Crear nuevas solicitudes después de unas horas;\n\n❌ Reenviar el mismo texto varias veces;\n\n❌ Buscar otros canales de soporte de inmediato.\n\nLos sistemas de atención suelen priorizar as solicitudes organizadas y únicas.\n\nLa insistencia excesiva puede hacer que su solicitud pierda credibilidad.\n\nRegla principal\n\nDespués de enviar el ticket, su mejor estrategia pasa a ser esperar.' 
          },
          { 
            id: '5.2', 
            title: 'AULA 5.2 - QUÉ NO HACER BAJO NINGUNA CIRCUNSTANCIA', 
            content: 'Cómo destruir su propio intento en pocos minutos\n\nTras el envío, existen algunos comportamientos que aumentan significativamente a probabilidad de respuestas automáticas.\n\nNunca haga:\n\n❌ Abrir varios tickets simultáneamente;\n\n❌ Utilizar diversos correos electrónicos diferentes;\n\n❌ Alterar categorías solo para "probar";\n\n❌ Enviar mensajes emocionales;\n\n❌ Discutir con el soporte;\n\n❌ Hacer amenazas;\n\n❌ Intentar presionar al equipo.\n\n¿Por qué?\n\nPorque los sistemas internos suelen interpretar a insistencia excesiva como un comportamiento inadecuado o un intento repetitivo.\n\nEl objetivo del método no es llamar a atención.\n\nEl objetivo es parecer uma solicitud legítima que merece análisis.\n\nRecuerde:\n\nSer insistente no significa ser prioritario.' 
          },
          { 
            id: '5.3', 
            title: 'AULA 5.3 - CUÁNDO ENVIAR UN NUEVO TICKET', 
            content: 'El momento correcto para un nuevo intento\n\nSolo existe uma situación en a que se puede considerar un nuevo intento:\n\nPuede enviar otro ticket cuando:\n\n✅ Han pasado al menos 7 días;\n\n✅ No ha habido respuesta;\n\no\n\n✅ La respuesta recibida fue claramente automática.\n\nSi decide intentarlo de nuevo:\nutilice otro modelo de ticket;\naltere levemente el asunto;\nmantenga el tono técnico;\nno reutilice exactamente el mismo texto.\nQué NO hacer nunca:\n\n❌ Copiar y pegar el ticket anterior;\n\n❌ Reenviar el mismo mensaje;\n\n❌ Citar respuestas automáticas anteriores;\n\n❌ Demostrar frustración.\n\nEl objetivo del segundo intento es tratar de escapar de los procesos automatizados, no discutir a primera decisión.' 
          },
          { 
            id: '5.4', 
            title: 'AULA 5.4 - CUÁNDO PARAR', 
            content: 'Saber cuándo parar también forma parte de a estratégia\n\nLlega un momento en que insistir deja de ser uma estratégia y pasa a ser solo insistencia.\n\nDebe considerar interrumpir los intentos cuando:\n\nreciba uma respuesta final clara y repetida;\na plataforma informe explicitamente que no habrá un nuevo análisis;\ntres intentos bien espaciados no produzcan ningún avance.\n¿Por qué parar?\n\nPorque seguir insistiendo después de este punto no suele generar beneficios adicionales.\n\nAl contrario, puede dificultar futuros análisis o revisiones.\n\nEl objetivo del método\n\nEste método no busca cantidad.\n\nBusca calidad en el intento.\n\nUn solo intento organizado vale más que decenas de intentos impulsivos.' 
          },
          { 
            id: '5.5', 
            title: 'AULA 5.5 - LA MENTALIDADE CORRETA', 
            content: 'El método no es fuerza bruta\n\nUn error muy común es creer que recuperar uma cuenta depende de a insistencia.\n\nEn realidade, este método funciona tratando de:\n\nevitando respuestas automáticas;\nno activar filtros internos;\nno levantar señalizaciones negativas;\naumentar a possibilidade de análisis humano.\nQué NO es este método:\n\n❌ Spam;\n\n❌ Presión;\n\n❌ Manipulación;\n\n❌ Discusión con el soporte.\n\nQué SÍ es este método:\n\n✅ Organización;\n\n✅ Control;\n\n✅ Estratégia;\n\n✅ Paciencia.\n\nEl principio más importante de este módulo\n\nDespués de que se envía el ticket, a mayor amenaza para el proceso suele ser actuar por impulso.\n\nMuchos intentos pierden cualquier possibilidade no porque el primer ticket fuera malo, sino porque el usuário decidió enviar otros quince para "asegurarse". Un enfoque admirablemente optimista, aunque estadísticamente desastroso.' 
          }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALIZANDO LA RESPUESTA',
        description: 'Decodificação do feedback do suporte.',
        lessons: [
          { 
            id: '6.1', 
            title: 'AULA 6.1 - CÓMO IDENTIFICAR UNA RESPUESTA AUTOMÁTICA', 
            content: 'No toda respuesta significa que alguien realmente leyó su caso\n\nAntes de tomar cualquier decisión, debe descubrir quién respondió a su solicitud.\n\nMuchas respuestas son producidas automáticamente por los sistemas de atención y no representan un análisis individual de su cuenta.\n\nCaracterísticas de uma respuesta automática:\n\n✅ Texto extremadamente genérico;\n\n✅ Lenguaje estandarizado;\n\n✅ Ausencia de detalles específicos;\n\n✅ Repetición de as mismas informaciones mostradas en el baneo;\n\n✅ Cierre inmediato del caso.\n\nEjemplos comunes:\n"Tras el análisis, confirmamos que a penalidade se aplicó correctamente."\n"No es posible revertir esta decisión."\n"El sistema detectó uma violación de los Términos de Servicio."\nUna señal importante\n\nSi a respuesta:\n\nno menciona su ID;\nno menciona fechas;\no no menciona eventos específicos;\nno hace referencia al contenido enviado;\n\nexiste uma gran probabilidad de que haya recibido solo uma respuesta automatizada.\n\n¿Qué significa esto?\n\nNo significa necesariamente que su caso haya sido analisado y denegado.\n\nMuchas veces significa solo que no superó a primera capa de triaje.' 
          },
          { 
            id: '6.2', 
            title: 'AULA 6.2 - CÓMO IDENTIFICAR UNA RESPUESTA HUMANA', 
            content: 'As señales de que alguien realmente analisó su solicitud\n\nAs respuestas humanas suelen presentar pequeñas diferencias que indican uma lectura real.\n\nNo necesita encontrar todas as señales. Uma o dos ya pueden indicar un análisis humano.\n\nCaracterísticas comunes:\n\n✅ Mención al historial de a cuenta;\n\n✅ Referencia a informaciones proporcionadas en el ticket;\n\n✅ Solicitud de documentos o datos adicionales;\n\n✅ Lenguaje menos estandarizado;\n\n✅ Derivación para análisis interno.\n\nEjemplos:\n"Verificamos el historial de a cuenta..."\n"Basándonos en as informaciones proporcionadas..."\n"Derivamos su solicitud para un análisis complementario..."\n"Necesitaremos informaciones adicionales..."\n¿Qué significa esto?\n\nSignifica que su solicitud logró superar parte del triaje automático.\n\nEn este escenario, el mayor error posible es empezar a escribir textos enormes tratando de reforzar su argumentación.\n\nEl análisis ya ha comenzado.\n\nAhora, el objetivo es no entorpecerlo.' 
          },
          { 
            id: '6.3', 
            title: 'AULA 6.3 - QUÉ HACER SI LA RESPUESTA ES AUTOMÁTICA', 
            content: 'La peor reacción posible es responder de inmediato\n\nAl identificar uma respuesta automática, muchas personas entran en pánico y empiezan a enviar nuevos tickets.\n\nEsa suele ser a decisión más perjudicial.\n\nSi a respuesta fue automática:\n\n✅ No responda de inmediato;\n\n✅ No intente discutir;\n\n✅ No envíe justificaciones adicionales;\n\n✅ No haga amenazas;\n\n✅ Espere al menos 7 días.\n\nTras ese período:\n\nPuede considerar:\n\nutilizar otro modelo de ticket;\naltere levemente el asunto;\nreformular el enfoque;\niniciar un nuevo intento organizado.\n\nEl objetivo aquí no es vencer a a respuesta automática.\n\nEl objetivo es tratar de hacer que su próximo intento supere esa barrera.\n\nRecuerde:\n\nEstá tratando de salir del ciclo automático, no de discutir con él.' 
          },
          { 
            id: '6.4', 
            title: 'AULA 6.4 - QUÉ HACER SI LA RESPUESTA ES HUMANA', 
            content: 'Cuando hay uma lectura humana, menos es más\n\nSi hay indicios claros de análisis humano, debe actuar con aún más cautela.\n\nQué hacer:\n\n✅ Espere el plazo informado;\n\n✅ Responda solo lo que se le solicitó;\n\n✅ Utilice respuestas objetivas;\n\n✅ Mantenga un lenguaje técnico.\n\nQué NO hacer:\n\n❌ Escribir textos emocionales;\n\n❌ Volver a contar toda a historia;\n\n❌ Hacer acusaciones;\n\n❌ Presionar por rapidez;\n\n❌ Añadir informaciones innecesarias.\n\nRegla principal:\n\nResponda solo a a pregunta formulada.\n\nSi el soporte solicitó uma información específica, proporcione únicamente esa información.\n\nCuanto más hable más allá de lo necesario, mayor será a possibilidade de introducir inconsistências o de perjudicar el análisis.' 
          },
          { 
            id: '6.5', 
            title: 'AULA 6.5 - EL PEOR ERROR DE TODOS', 
            content: 'El impulso destruye más intentos que el propio sistema\n\nExiste un comportamiento que aparece repetidamente en los intentos fallidos:\n\nResponder emocionalmente.\n\nFrases como:\n\n❌ "Pero yo no hice nada."\n\n❌ "Esto es injusto."\n\n❌ "Otras personas consiguieron el desbaneo."\n\n❌ "Voy a denunciar a a empresa."\n\n❌ "Ustedes tienen que resolver esto."\n\nNormalmente no producen ningún beneficio.\n\nAl contrario.\n\nPueden:\n\ncerrar definitivamente el análisis;\nreducir a possibilidade de reevaluación;\ntransformar uma possibilidade en uma negativa final.\n\nEl principio final de este método\n\nEste método nunca tuvo como objetivo discutir con el soporte.\n\nEl objetivo siempre fue:\n\nevitando filtros automáticos;\naumentar a possibilidade de lectura humana;\npresentar el caso de forma organizada;\nimpedir que el próprio usuário perjudique el intento.' 
          }
        ]
      }
    ]
  }
};
