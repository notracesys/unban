
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
            title: 'AULA 1.1 - O QUE É BANIMENTO AUTOMÁTICO', 
            content: 'Entendendo o funcionamento dos banimentos automáticos\n\nAntes de tentar recuperar sua conta, você precisa entender um fato importante: nem todos os banimentos são aplicados da mesma forma.\n\nO banimento automático ocorre quando sistemas internos identificam comportamentos considerados suspeitos sem que necessariamente exista uma análise humana inicial. Esses sistemas funcionam por padrões, detecções automatizadas e verificações internas.\n\nAs principais características de um banimento automático são:\n\nMensagem genérica;\nAusência de detalhes específicos;\nRespostas rápidas e padronizadas;\nFalta de referência direta ao comportamento do usuário;\nEncerramento automático do atendimento.\n\nExemplos comuns:\n\n"Detectamos atividades irregulares."\n"Sua conta violou nossos termos de serviço."\n"A suspensão foi aplicada corretamente."\nPor que isso é importante?\n\nPorque os banimentos automáticos representam os casos em que ainda existe alguma possibilidade de solicitar uma reavaliação estratégica.\n\nO objetivo deste método não é discutir com o sistema, mas sim tentar fazer com que sua solicitação ultrapasse a primeira camada automática de análise.\n\nLembre-se:\n\nQuanto mais emocional for sua mensagem, maior a chance de permanecer preso no processo automático.' 
          },
          { 
            id: '1.2', 
            title: 'AULA 1.2 - O QUE É BANIMENTO MANUAL', 
            content: 'Quando existe participação humana na decisão\n\nO banimento manual ocorre quando existe uma análise direta ou validação interna realizada por membros da equipe responsável.\n\nNesses casos, normalmente existem elementos mais específicos relacionados ao motivo da punição.\n\nCaracterísticas comuns:\n\nMensagens mais detalhadas;\nReferência direta a regras ou comportamentos;\nRespostas objetivas e firmes;\nMenor flexibilidade para reavaliação.\n\nExemplos:\n\nCitação direta dos Termos de Serviço;\nInformação sobre comportamento específico;\nConfirmação explícita da violação.\nO que isso significa?\n\nSignifica que a possibilidade de reversão tende a ser significativamente menor.\n\nIsso não quer dizer que você deva agir por impulso ou desistir imediatamente. Significa apenas que a estratégia precisa ser ainda mais cuidadosa.\n\nNeste cenário, o principal objetivo deixa de ser "convencer" e passa a ser:\n\nNão piorar a situação;\nEvitar encerramentos adicionais;\nManter uma postura técnica e organizada.' 
          },
          { 
            id: '1.3', 
            title: 'AULA 1.3 - O QUE É BANIMENTO REINCIDENTE', 
            content: 'Quando existe histórico anterior de punições\n\nO banimento reincidente acontece quando a conta já possui registros anteriores de punições, advertências ou suspensões.\n\nPlataformas normalmente aplicam níveis de tolerância progressivamente menores para contas reincidentes.\n\nCaracterísticas:\n\nRespostas mais rápidas;\nMenor abertura para revisão;\nAnálises mais rígidas;\nBaixíssima tolerância a novos recursos.\nO erro mais comum\n\nMuitas pessoas acreditam que enviar dezenas de tickets aumenta as chances de sucesso.\n\nNa prática, isso geralmente produz o efeito contrário.\n\nQuando existe reincidência, insistência excessiva pode:\n\nConfirmar decisões anteriores;\nEncerrar possibilidades de análise futura;\nClassificar o caso como tentativa repetitiva.\n\nPor isso, o método trabalha com controle, organização e estratégia, nunca com insistência impulsiva.' 
          },
          { 
            id: '1.4', 
            title: 'AULA 1.4 - COMO IDENTIFICAR QUAL É O SEU CASO', 
            content: 'A etapa mais importante antes de enviar qualquer ticket\n\nAntes de escrever qualquer mensagem para o suporte, faça estas perguntas:\n\nA mensagem recebida é genérica?\n\nSe sim, há grandes chances de ser um banimento automático.\n\nA mensagem apresenta detalhes específicos?\n\nSe sim, pode indicar uma análise manual.\n\nA conta já recebeu punições anteriormente?\n\nSe a resposta for positiva, você provavelmente está diante de um caso reincidente.\n\nResumo rápido\nTipo\tCaracterísticas\tChance de tentativa\nBanimento automático\tMensagens genéricas e rápidas\tMaior\nBanimento manual\tMensagens específicas\tBaixa\nBanimento reincidente\tHistórico anterior\tMuito baixa\nO que você precisa entender antes de continuar\n\nNa Garena, normalmente não existe espaço para debate prolongado.\n\nVocê envia uma solicitação e recebe uma decisão.\n\nIsso significa que sua primeira tentativa precisa ser:\n\n✅ Organizada\n✅ Técnica\n✅ Objetiva\n✅ Estratégica' 
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
            content: 'Utilizando apenas canais oficiais\n\nAntes de pensar no texto que será enviado, você precisa entender uma regra fundamental:\n\nUm ticket enviado no local errado já nasce sem chance de análise.\n\nMuitas pessoas, após perderem o acesso à conta, tentam entrar em contato através de:\n\nInstagram;\nFacebook;\nDiscord;\nE-mails genéricos;\nComentários em redes sociais;\nFormulários não oficiais.\n\nEsses canais não realizam análise individual de contas e, na maioria dos casos, não possuem qualquer poder para alterar decisões internas.\n\nO procedimento correto\n\nA solicitação deve ser enviada exclusivamente através do suporte oficial disponibilizado pela plataforma.\n\nO objetivo do método é simples:\n\nentrar no fluxo correto de atendimento;\nevitar encaminhamentos automáticos desnecessários;\nmaximizar a possibilidade de análise.\nO primeiro erro que elimina tentativas\n\nMuitas pessoas enviam mensagens para diversos canais simultaneamente.\n\nIsso não aumenta as chances.\n\nNa prática, apenas cria registros redundantes e pode prejudicar a consistência do caso.\n\nLembre-se:\n\nUma tentativa organizada vale mais do que dez tentativas desesperadas.' 
          },
          { 
            id: '2.2', 
            title: 'AULA 2.2 - ESCOLHENDO A CATEGORIA CORRETA', 
            content: 'A decisão mais importante antes da mensagem\n\nAo abrir um ticket, você precisará selecionar uma categoria.\n\nA maioria das pessoas trata essa etapa como um detalhe.\n\nNão é.\n\nA categoria escolhida influencia diretamente a forma como sua solicitação será processada internamente.\n\nO que evitar\n\nEvite categorias:\n\nextremamente acusatórias;\ndefinitivas;\nrelacionadas diretamente à confirmação da punição.\n\nCategorias muito específicas podem fazer sua solicitação ser encaminhada diretamente para respostas padronizadas.\n\nO que procurar\n\nA estratégia consiste em selecionar categorias que:\n\npermitam análise;\nsejam mais neutras;\nnão antecipem conclusões.\n\nO objetivo não é esconder informações.\n\nO objetivo é evitar que sua tentativa seja encerrada antes mesmo da leitura.\n\nRegra prática\n\nPergunte a si mesmo:\n\nEsta categoria parece abrir uma análise ou apenas confirmar uma decisão?\n\nSe parecer confirmar uma decisão, escolha outra opção disponível mais neutra.' 
          },
          { 
            id: '2.3', 
            title: 'AULA 2.3 - PREENCHENDO OS DADOS DA CONTA', 
            content: 'Menos informação significa menos problemas\n\nUma das maiores causas de falha ocorre quando o usuário tenta explicar toda a situação em campos que não foram feitos para isso.\n\nOs campos técnicos existem apenas para identificação.\n\nPreencha somente:\n\nID correto da conta;\nnickname exato;\ne-mail solicitado;\ninformações obrigatórias do formulário.\nNunca faça isto:\n\n❌ Adicionar explicações extras;\n\n❌ Contar sua história nos campos técnicos;\n\n❌ Inserir justificativas;\n\n❌ Repetir informações.\n\nPor quê?\n\nPorque sistemas automatizados analisam padrões de preenchimento.\n\nCampos técnicos devem conter apenas dados técnicos.\n\nQuanto mais organizado o formulário, maior a chance de ele ser tratado como uma solicitação legítima.' 
          },
          { 
            id: '2.4', 
            title: 'AULA 2.4 - O CAMPO DE MENSAGEM', 
            content: 'O único lugar onde a estratégia realmente importa\n\nTodo o restante do formulário serve apenas para classificação.\n\nO campo de mensagem é o único espaço onde existe possibilidade de influência humana.\n\nPor isso, existem algumas regras fundamentais.\n\nNunca faça:\n\n❌ Escrever em caixa alta;\n\n❌ Utilizar emojis;\n\n❌ Fazer ameaças;\n\n❌ Copiar textos emocionais;\n\n❌ Escrever como se estivesse discutindo em rede social.\n\nO que fazer:\n\n✅ Utilizar linguagem formal;\n\n✅ Ser objetivo;\n\n✅ Demonstrar organização;\n\n✅ Solicitar análise, não exigir resultado.\n\nO suporte não está procurando quem está mais revoltado.\n\nEle está procurando solicitações que mereçam ser analisadas.\n\nRegra principal\n\nClareza vale mais do que quantidade.\n\nUm texto curto e organizado costuma funcionar melhor do que uma página inteira de desabafo.' 
          },
          { 
            id: '2.5', 
            title: 'AULA 2.5 - REVISÃO FINAL ANTES DE ENVIAR', 
            content: 'O ticket é único\n\nAntes de clicar em enviar, pare por alguns minutos e revise tudo.\n\nFaça a seguinte checklist:\n\nCategoria\nEstá correta?\nÉ a opção mais neutra disponível?\nDados\nO ID foi digitado corretamente?\nO nickname está exato?\nMensagem\nEstá objetiva?\nEstá técnica?\nEstá organizada?\nTom geral\n\nPergunte:\n\nIsto parece ter sido escrito por alguém calmo e racional?\n\nSe a resposta for "não", não envie ainda.\n\nApós o envio\n\nDepois que o ticket for enviado:\n\n❌ Não envie outro imediatamente;\n\n❌ Não tente complementar informações;\n\n❌ Não abra múltiplas solicitações;\n\n❌ Não tente reforçar o pedido.\n\nA estratégia termina no momento do envio.\n\nA partir daí, insistência excessiva normalmente produz o efeito contrário ao desejado.' 
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
            content: 'A primeira decisão que pode definir todo o processo\n\nAo abrir o formulário de suporte, você encontrará diversas opções relacionadas ao problema da conta.\n\nA maioria das pessoas comete o primeiro erro justamente aqui: escolhe a opção mais óbvia.\n\nO problema é que algumas categorias funcionam praticamente como classificações automáticas de encerramento.\n\nEvite opções como:\n\n❌ "Detectamos o uso de softwares não autorizados"\n\n❌ "O sistema Anti-Trapaça detectou irregularidades"\n\n❌ "Esta conta foi suspensa permanentemente"\n\nEssas categorias costumam encaminhar a solicitação diretamente para respostas padronizadas.\n\nA estratégia correta\n\nSempre que possível, escolha opções mais neutras, relacionadas à recuperação ou verificação da conta.\n\nPor exemplo:\n\n✅ "Quero recuperar minha conta"\n\nEssa abordagem:\n\nnão antecipa conclusões;\nnão confirma acusações;\nmantém a solicitação em categorias mais amplas de análise.\nO princípio estratégico\n\nVocê não está tentando provar nada nesta etapa.\n\nVocê está apenas tentando evitar que sua solicitação seja descartada antes de ser analisada.' 
          },
          { 
            id: '3.2', 
            title: 'AULA 3.2 - O CAMPO REQUESTER', 
            content: 'O campo mais simples e, ainda assim, frequentemente preenchido errado\n\nO campo "Requester" identifica o solicitante do ticket.\n\nSua função é exclusivamente administrativa.\n\nO que inserir:\no e-mail utilizado para contato;\num endereço válido;\num e-mail que você tenha acesso.\nO que NÃO fazer:\n\n❌ Escrever o ID da conta;\n\n❌ Inserir explicações;\n\n❌ Adicionar observações;\n\n❌ Utilizar múltiplos e-mails.\n\nImportante\n\nO e-mail do ticket não necessariamente precisa ser o mesmo utilizado na conta do jogo.\n\nEle serve apenas para que o suporte consiga retornar sua solicitação.\n\nQuanto mais limpo e objetivo for o preenchimento, melhor.' 
          },
          { 
            id: '3.3', 
            title: 'AULA 3.3 - O CAMPO ASSUNTO', 
            content: 'O campo que mais ativa respostas automáticas\n\nO assunto do ticket é uma das primeiras informações analisadas pelo sistema.\n\nPor isso, utilizar termos emocionais ou acusatórios pode prejudicar a tentativa.\n\nNunca utilize:\n\n❌ "Fui banido injustamente"\n\n❌ "Desbanimento urgente"\n\n❌ "Minha conta foi roubada"\n\n❌ "Quero meu desbanimento"\n\nO objetivo do assunto\n\nO assunto deve:\n\nparecer técnico;\nser curto;\nindicar necessidade de análise;\nevitar conclusões.\nExemplo da lógica correta:\n\nEm vez de acusar ou exigir, procure transmitir a ideia de:\n\n"Solicitação de verificação referente ao acesso da conta."\n\nLembre-se:\n\nO assunto serve para abrir uma porta, não para ganhar uma discussão.' 
          },
          { 
            id: '3.4', 
            title: 'AULA 3.4 - NICKNAME DA CONTA', 
            content: 'Não existe margem para criatividade\n\nO nickname deve ser preenchido exatamente como aparece dentro do jogo.\n\nRegras:\n\n✅ Utilize letras maiúsculas e minúsculas corretamente;\n\n✅ Respeite símbolos especiais;\n\n✅ Copie exatamente o nome registrado.\n\nNunca faça:\n\n❌ Utilizar apelidos alternativos;\n\n❌ Utilizar abreviações;\n\n❌ Inserir nomes antigos da conta.\n\nUm nickname incorreto pode fazer com que sua solicitação seja considerada inválida.' 
          },
          { 
            id: '3.5', 
            title: 'AULA 3.5 - O NÚMERO DE ID', 
            content: 'O dado mais importante do formulário\n\nO ID da conta é o principal identificador interno.\n\nPor isso:\n\ncopie diretamente da fonte oficial;\nrevise mais de uma vez;\nconfirme todos os números.\nNão faça:\n\n❌ Inserir comentários;\n\n❌ Adicionar justificativas;\n\n❌ Escrever textos complementares.\n\nO campo de ID existe apenas para identificar a conta.\n\nNada além disso.' 
          },
          { 
            id: '3.6', 
            title: 'AULA 3.6 - TEMPO DE SUSPENSÃO', 
            content: 'Nunca invente informações\n\nSe o sistema informar suspensão permanente, informe exatamente isso.\n\nRegras:\n\n✅ Se for permanente, marque permanente;\n\n✅ Se houver prazo definido, utilize o prazo correto;\n\n✅ Se não souber exatamente, utilize a informação mais próxima possível.\n\nNunca faça:\n\n❌ Inventar períodos;\n\n❌ Chutar datas;\n\n❌ Fazer estimativas aleatórias.\n\nInformações inconsistentes reduzem a credibilidade da solicitação.' 
          },
          { 
            id: '3.7', 
            title: 'AULA 3.7 - DATA DO OCORRIDO', 
            content: 'Datas importam mais do que parecem\n\nO sistema pode utilizar a data informada para cruzamento interno de informações.\n\nPor isso:\n\ninforme a data exata, se souber;\nutilize uma aproximação razoável, caso não tenha certeza.\nEvite:\n\n❌ "Não lembro";\n\n❌ Datas impossíveis;\n\n❌ Datas muito distantes do ocorrido.\n\nA coerência das informações ajuda a demonstrar organização e boa-fé.' 
          },
          { 
            id: '3.8', 
            title: 'AULA 3.8 - O CAMPO DE DESCRIÇÃO', 
            content: 'O único campo onde o método realmente acontece\n\nTodos os campos anteriores servem para classificação.\n\nA descrição é o único espaço onde existe possibilidade de diferenciação.\n\nO que NÃO fazer:\n\n❌ Acusar;\n\n❌ Confessar;\n\n❌ Implorar;\n\n❌ Escrever textos emocionais;\n\n❌ Fazer ameaças.\n\nO objetivo da descrição\n\nA descrição deve:\n\n✅ parecer escrita por alguém calmo;\n\n✅ demonstrar organização;\n\n✅ solicitar análise;\n\n✅ evitar palavras que acionem respostas automáticas.\n\nA pergunta que o sistema tenta responder\n\nNa prática, sua descrição será analisada sob uma única perspectiva:\n\n"Vale a pena encaminhar esta solicitação para análise?"\n\nTodo o restante depende dessa decisão inicial.\n\nPor isso, a descrição não serve para convencer alguém no grito.\n\nEla serve para parecer suficientemente organizada para merecer uma análise.\n\nA recomendação mais importante deste método\n\nEmbora seja possível escrever sua própria descrição, isso aumenta significativamente a chance de cometer erros de tom, estrutura ou linguagem.\n\nPor esse motivo, a recomendação deste método é utilizar um dos modelos prontos disponibilizados no próximo módulo.\n\nOs modelos foram estruturados para:\n\nmanter um tom técnico;\nevitar linguagem emocional;\nreduzir a chance de ativação de respostas automáticas;\napresentar a solicitação de forma organizada e objetiva.\n\nTentar "melhorar" os modelos adicionando emoção, acusações ou explicações excessivas costuma produzir o efeito contrário ao desejado.\n\nNo próximo módulo, você terá acesso aos modelos prontos de tickets e aprenderá qual deles utilizar em cada situação.' 
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
            content: 'O momento correto para uma nova tentativa\n\nExiste apenas uma situação em que uma nova tentativa pode ser considerada:\n\nVocê pode enviar outro ticket quando:\n\n✅ Passaram pelo menos 7 dias;\n\n✅ Não houve resposta;\n\nou\n\n✅ A resposta recebida foi claramente automática.\n\nSe decidir tentar novamente:\nutilize outro modelo de ticket;\naltere levemente o assunto;\nmantenha o tom técnico;\nnão reutilize exatamente o mesmo texto.\nO que nunca fazer:\n\n❌ Copiar e colar o ticket anterior;\n\n❌ Reenviar a mesma mensagem;\n\n❌ Citar respostas automáticas anteriores;\n\n❌ Demonstrar frustração.\n\nO objetivo da segunda tentativa é tentar escapar de processos automatizados, não discutir a primeira decisão.' 
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
        title: 'ANALIZANDO A RESPOSTA',
        description: 'Decodificação de feedback do suporte.',
        lessons: [
          { 
            id: '6.1', 
            title: 'AULA 6.1 - COMO IDENTIFICAR UMA RESPOSTA AUTOMÁTICA', 
            content: 'Nem toda resposta significa que alguém realmente leu seu caso\n\nAntes de tomar qualquer decisão, você precisa descobrir quem respondeu sua solicitação.\n\nMuitas respostas são produzidas automaticamente pelos sistemas de atendimento e não representam uma análise individual da sua conta.\n\nCaracterísticas de uma resposta automática:\n\n✅ Texto extremamente genérico;\n\n✅ Linguagem padronizada;\n\n✅ Ausência de detalhes específicos;\n\n✅ Repetição das mesmas informações exibidas no banimento;\n\n✅ Encerramento imediato do caso.\n\nExemplos comuns:\n"Após análise, confirmamos que a penalidade foi aplicada corretamente."\n"Não é possível reverter esta decisão."\n"O sistema detectou violação dos Termos de Serviço."\nUm sinal importante\n\nSe a resposta:\n\nnão menciona seu ID;\nnão menciona datas;\nnão menciona eventos específicos;\nnão faz referência ao conteúdo enviado;\n\nexiste grande probabilidade de que você tenha recebido apenas uma resposta automatizada.\n\nO que isso significa?\n\nNão significa necessariamente que seu caso foi analisado e negado.\n\nMuitas vezes significa apenas que ele não ultrapassou a primeira camada de triagem.' 
          },
          { 
            id: '6.2', 
            title: 'AULA 6.2 - COMO IDENTIFICAR UMA RESPOSTA HUMANA', 
            content: 'Os sinais de que alguém realmente analisou sua solicitação\n\nAs respostas humanas costumam apresentar pequenas diferenças que indicam leitura real.\n\nVocê não precisa encontrar todos os sinais. Um ou dois já podem indicar análise humana.\n\nCaracterísticas comuns:\n\n✅ Menção ao histórico da conta;\n\n✅ Referência a informações fornecidas no ticket;\n\n✅ Solicitação de documentos ou dados adicionais;\n\n✅ Linguagem menos padronizada;\n\n✅ Encaminhamento para análise interna.\n\nExemplos:\n"Verificamos o histórico da conta..."\n"Com base nas informações fornecidas..."\n"Encaminhamos sua solicitação para análise complementar..."\n"Precisaremos de informações adicionais..."\nO que isso significa?\n\nSignifica que sua solicitação conseguiu ultrapassar parte da triagem automática.\n\nNeste cenário, o maior erro possível é começar a escrever textos enormes tentando reforçar sua argumentação.\n\nA análise já começou.\n\nAgora, o objetivo é não atrapalhá-la.' 
          },
          { 
            id: '6.3', 
            title: 'AULA 6.3 - O QUE FAZER SE A RESPOSTA FOR AUTOMÁTICA', 
            content: 'A pior reação possível é responder imediatamente\n\nAo identificar uma resposta automática, muitas pessoas entram em pânico e começam a enviar novos tickets.\n\nEssa costuma ser a decisão mais prejudicial.\n\nSe a resposta foi automática:\n\n✅ Não responda imediatamente;\n\n✅ Não tente discutir;\n\n✅ Não envie justificativas adicionais;\n\n✅ Não faça ameaças;\n\n✅ Aguarde pelo menos 7 dias.\n\nApós esse período:\n\nVocê pode considerar:\n\nutilizar outro modelo de ticket;\naltere levemente o assunto;\nreformular a abordagem;\niniciar uma nova tentativa organizada.\nO objetivo aqui não é vencer a resposta automática.\n\nO objetivo é tentar fazer com que sua próxima tentativa ultrapasse essa barreira.\n\nLembre-se:\n\nVocê está tentando sair do ciclo automático, não discutir com ele.' 
          },
          { 
            id: '6.4', 
            title: 'AULA 6.4 - O QUE FAZER SE A RESPOSTA FOR HUMANA', 
            content: 'Quando existe leitura humana, menos é mais\n\nSe houver indícios claros de análise humana, você deve agir com ainda mais cautela.\n\nFaça:\n\n✅ Aguarde o prazo informado;\n\n✅ Responda apenas o que foi solicitado;\n\n✅ Utilize respostas objetivas;\n\n✅ Mantenha linguagem técnica.\n\nNão faça:\n\n❌ Escrever textos emocionais;\n\n❌ Recontar toda a história;\n\n❌ Fazer acusações;\n\n❌ Pressionar por velocidade;\n\n❌ Adicionar informações desnecessárias.\n\nRegra principal:\n\nResponda apenas a pergunta feita.\n\nSe o suporte solicitou uma informação específica, forneça somente essa informação.\n\nQuanto mais você falar além do necessário, maior a chance de introduzir inconsistências ou prejudicar a análise.' 
          },
          { 
            id: '6.5', 
            title: 'AULA 6.5 - O PIOR ERRO DE TODOS', 
            content: 'O impulso destrói mais tentativas do que o próprio sistema\n\nExiste um comportamento que aparece repetidamente em tentativas malsucedidas:\n\nResponder emocionalmente.\n\nFrases como:\n\n❌ "Mas eu não fiz nada."\n\n❌ "Isso é injusto."\n\n❌ "Outras pessoas conseguiram desbanimento."\n\n❌ "Vou denunciar a empresa."\n\n❌ "Vocês precisam resolver isso."\n\nNormalmente não produzem qualquer benefício.\n\nPelo contrário.\n\nElas podem:\n\nencerrar definitivamente a análise;\nreduzir a chance de reavaliação;\ntransformar uma possibilidade em uma negativa final.\nO princípio final deste método\n\nEste método nunca teve como objetivo discutir com o suporte.\n\nO objetivo sempre foi:\n\nevitando filtros automáticos;\naumentar a chance de leitura humana;\napresentar o caso de forma organizada;\nimpedir que o próprio usuário prejudique a tentativa.' 
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
          { id: '1.1', title: 'LESSON 1.1 - WHAT IS AN AUTOMATIC BAN', content: 'Understanding how automatic bans work\n\nBefore trying to recover your account, you need to understand an important fact: not all bans are applied the same way.\n\nAn automatic ban occurs when internal systems identify behaviors considered suspicious without necessarily having an initial human analysis. These systems work by patterns, automated detections, and internal checks.\n\nThe main characteristics of an automatic ban are:\n\nGeneric message;\nAbsence of specific details;\nFast and standardized responses;\nLack of direct reference to user behavior;\nAutomatic closure of the service.\n\nCommon examples:\n\n"We detected irregular activities."\n"Your account violated our terms of service."\n"The suspension was applied correctly."\nWhy is this important?\n\nBecause automatic bans represent cases where there is still some possibility of requesting a strategic reassessment.\n\nThe goal of this method is not to argue with the system, but rather to try to get your request past the first automatic layer of analysis.\n\nRemember:\n\nThe more emotional your message is, the greater the chance of staying trapped in the automatic process.' },
          { id: '1.2', title: 'LESSON 1.2 - WHAT IS A MANUAL BAN', content: 'When there is human participation in the decision\n\nA manual ban occurs when there is a direct analysis or internal validation carried out by members of the responsible team.\n\nIn these cases, there are usually more specific elements related to the reason for the punishment.\n\nCommon characteristics:\n\nMore detailed messages;\nDirect reference to rules or behaviors;\nObjective and firm responses;\nLess flexibility for reassessment.\n\nExamples:\n\nDirect quote from the Terms of Service;\nInformation about specific behavior;\nExplicit confirmation of the violation.\nWhat does this mean?\n\nIt means that the possibility of reversal tends to be significantly lower.\n\nThis does not mean that you should act on impulse or give up immediately. It just means that the strategy needs to be even more careful.\n\nIn this scenario, the main goal is no longer to "convince" and becomes:\n\nDo not make the situation worse;\nAvoid additional closures;\nMaintain a technical and organized posture.' },
          { id: '1.3', title: 'LESSON 1.3 - WHAT IS A RECIDIVIST BAN', content: 'When there is a previous history of punishments\n\nA recidivist ban happens when the account already has previous records of punishments, warnings, or suspensions.\n\nPlatforms normally apply progressively lower tolerance levels for recidivist accounts.\n\nCharacteristics:\n\nFaster responses;\nLess openness for review;\nStricter analyses;\nExtremely low tolerance for new appeals.\nThe most common error\n\nMany people believe that sending dozens of tickets increases the chances of success.\n\nIn practice, this usually produces the opposite effect.\n\nWhen there is recidivism, excessive persistence can:\n\nConfirm previous decisions;\nEnd possibilities for future analysis;\nClassify the case as a repetitive attempt.\n\nTherefore, the method works with control, organization, and strategy, never with impulsive insistence.' },
          { id: '1.4', title: 'LESSON 1.4 - CASE IDENTIFICATION', content: 'The most important step before sending any ticket\n\nBefore writing any message to support, ask these questions:\n\nIs the received message generic?\n\nIf yes, there is a high chance it is an automatic ban.\n\nDoes the message present specific details?\n\nIf yes, it may indicate a manual analysis.\n\nHas the account received punishments before?\n\nIf the answer is positive, you are probably facing a recidivist case.\n\nQuick summary\nType\tCharacteristics\tChance of attempt\nAutomatic ban\tGeneric and fast messages\tHigher\nManual ban\tSpecific messages\tLow\nRecidivist ban\tPrevious history\tVery low\nWhat you need to understand before continuing\n\nAt Garena, there is normally no room for prolonged debate.\n\nYou send a request and receive a decision.\n\nThis means your first attempt needs to be:\n\n✅ Organized\n✅ Technical\n✅ Objective\n✅ Strategic' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MODULE 2',
        title: 'TICKET PREPARATION',
        description: 'Logistics and pre-send strategy.',
        lessons: [
          { id: '2.1', title: 'LESSON 2.1 - WHERE TO SEND THE TICKET', content: 'Using only official channels\n\nBefore thinking about the text that will be sent, you need to understand a fundamental rule:\n\nA ticket sent in the wrong place is born without a chance of analysis.\n\nMany people, after losing access to the account, try to contact via:\n\nInstagram; Facebook; Discord; Generic emails; Comments on social networks; Unofficial forms.\n\nThese channels do not carry out individual account analysis and, in most cases, do not have any power to change internal decisions.\n\nThe correct procedure\n\nThe request must be sent exclusively through official support provided by the platform.\n\nThe goal of the method is simple: enter the correct flow of service; avoid unnecessary automatic referrals; maximize the possibility of analysis.\n\nThe first error that eliminates attempts: Many people send messages to several channels simultaneously. This does not increase the chances. In practice, it only creates redundant records and can harm the consistency of the case. Remember: An organized attempt is worth more than ten desperate attempts.' },
          { id: '2.2', title: 'LESSON 2.2 - CHOOSING THE CORRECT CATEGORY', content: 'The most important decision before the message\n\nWhen opening a ticket, you will need to select a category. Most people treat this step as a detail. It is not. The chosen category directly influences how your request will be processed internally.\n\nWhat to avoid: Avoid categories that are extremely accusatory, definitive, or directly related to the confirmation of the punishment. Very specific categories can cause your request to be forwarded directly to standardized responses.\n\nWhat to look for: The strategy consists in selecting categories that allow analysis, are more neutral, and do not anticipate conclusions. The goal is not to hide information. The goal is to avoid your attempt being closed even before reading.\n\nPractical rule: Ask yourself: Does this category seem to open an analysis or just confirm a decision? If it seems to confirm a decision, choose another neutral option available.' },
          { id: '2.3', title: 'LESSON 2.3 - FILLING IN THE ACCOUNT DATA', content: 'Less information means fewer problems\n\nOne of the biggest causes of failure occurs when the user tries to explain the entire situation in fields that were not made for that. The technical fields exist only for identification. Fill in only the correct account ID, exact nickname, requested email, and mandatory form information.\n\nNever do this: ❌ Add extra explanations; ❌ Tell your story in technical fields; ❌ Insert justifications; ❌ Repeat information.\n\nWhy? Because automated systems analyze filling patterns. Technical fields must contain only technical data. The more organized the form, the greater the chance of it being treated as a legitimate request.' },
          { id: '2.4', title: 'LESSON 2.4 - THE MESSAGE FIELD', content: 'The only place where strategy really matters\n\nAll the rest of the form serves only for classification. The message field is the only space where there is a possibility of human influence. Therefore, there are some fundamental rules.\n\nNever do: ❌ Write in all caps; ❌ Use emojis; ❌ Make threats; ❌ Copy emotional texts; ❌ Write as if you were arguing on a social network.\n\nWhat to do: ✅ Use formal language; ✅ Be objective; ✅ Demonstrate organization; ✅ Request analysis, do not demand result.\n\nThe support is not looking for who is more outraged. It is looking for requests that deserve to be analyzed. Clarity is worth more than quantity. A short and organized text usually works better than an entire page of venting.' },
          { id: '2.5', title: 'LESSON 2.5 - FINAL REVIEW BEFORE SENDING', content: 'The ticket is unique\n\nBefore clicking send, stop for a few minutes and review everything. Go through the following checklist: Category (Is it correct? Neutral?), Data (ID correct? Nickname exact?), Message (Objective? Technical? Organized?), General tone (Does this seem to have been written by someone calm and rational?).\n\nIf the answer is "no", do not send yet.\n\nAfter sending: ❌ Do not send another immediately; ❌ Do not try to supplement information; ❌ Do not open multiple requests; ❌ Do not try to reinforce the request. The strategy ends at the moment of sending. From then on, excessive persistence usually produces the opposite effect to that desired.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MODULE 3',
        title: 'STEP BY STEP FILLING',
        description: 'Detailed filling protocol.',
        lessons: [
          { id: '3.1', title: 'LESSON 3.1 - WHICH OPTION TO SELECT', content: 'The first decision that can define the entire process... Whenever possible, choose more neutral options, related to account recovery or verification. For example: ✅ "I want to recover my account". This approach does not anticipate conclusions, does not confirm accusations, and keeps the request in broader analysis categories.' },
          { id: '3.2', title: 'LESSON 3.2 - THE REQUESTER FIELD', content: 'The simplest field and yet, frequently filled in wrong... What to insert: the email used for contact, a valid address, an email you have access to. What NOT to do: ❌ Write the account ID, ❌ Insert explanations, ❌ Add observations, ❌ Use multiple emails.' },
          { id: '3.3', title: 'LESSON 3.3 - THE SUBJECT FIELD', content: 'The field that most activates automatic responses... Never use: ❌ "I was unfairly banned", ❌ "Urgent unban", ❌ "My account was stolen", ❌ "I want my unban". Instead, use something technical like "Verification request regarding account access."' },
          { id: '3.4', title: 'LESSON 3.4 - ACCOUNT NICKNAME', content: 'There is no room for creativity. Use upper and lower case correctly, respect special symbols, and copy exactly the registered name.' },
          { id: '3.5', title: 'LESSON 3.5 - THE ID NUMBER', content: 'The most important data on the form. Copy directly from the official source, review more than once, and confirm all numbers. Do not insert comments or justifications.' },
          { id: '3.6', title: 'LESSON 3.6 - SUSPENSION TIME', content: 'Never invent information. If it is permanent, mark permanent. If there is a defined deadline, use it. Inconsistent information reduces credibility.' },
          { id: '3.7', title: 'LESSON 3.7 - DATE OF OCCURRENCE', content: 'Dates matter more than they seem. Inform the exact date or a reasonable approximation. Avoid "I don\'t remember" or impossible dates.' },
          { id: '3.8', title: 'LESSON 3.8 - THE DESCRIPTION FIELD', content: 'The only field where the method really happens. Do not accuse, confess, implore, or threaten. Be calm, technical, and organized. Use one of our ready-made templates to avoid tone errors.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MODULE 4',
        title: 'READY TEMPLATES',
        description: 'High-conversion strategic templates.',
        lessons: [
          { id: '4.1', title: 'TICKET TEMPLATE #1', content: 'Technical diagnosis for sudden inability to access account. Use for automatic bans and lack of clear explanation.', template: 'Dear team, I am writing to request a technical diagnosis regarding a sudden inability to access my account. Upon trying to connect, I find an unexpected restriction that I cannot resolve. I believe it might be a systemic anomaly, as I am aware that my activities have always been in compliance with the Terms of Service. I kindly request a manual verification of my account status and clarification on the nature of this restriction. I am available to assist in the investigation.' },
          { id: '4.2', title: 'TICKET TEMPLATE #2', content: 'Suspicion of failure in automatic monitoring. Use for unexpected suspensions without previous history.', template: 'To the technical team, I am reporting an irregularity that prevents my access to the platform. My account became inaccessible without prior notice, and I suspect a failure or error in an automatic monitoring process. I would like to reiterate that I strictly follow community guidelines. Therefore, I formally request that an analyst investigate the occurrence and provide me with an opinion on the cause of the access problem. I remain available to provide logs or other information.' },
          { id: '4.3', title: 'TICKET TEMPLATE #3', content: 'False positive hypothesis and integrity analysis. Best when the date is known.', template: 'I am addressing you to request support regarding a problem with access to my account. Since [date], I can no longer use the services. Considering that my pattern of use is guided by compliance with the rules, the situation leads me to believe in a technical error or a false positive of some system. I request that an account integrity analysis be conducted by a team member to identify the source of this anomaly. I await a return and thank you for your attention.' },
          { id: '4.4', title: 'TICKET TEMPLATE #4', content: 'Request for human audit due to lack of notification. Best for sudden blockages.', template: 'Greetings. I am contacting the support team to obtain assistance with a failure that is blocking access to my account. I did not receive any notification justifying such an impediment, which suggests a possible inconsistency in the validation systems. I have full conviction of my compliance with game policies. I request a human audit in my account activity record to clarify this incident. I am at your disposal for whatever is needed.' },
          { id: '4.5', title: 'TICKET TEMPLATE #5', content: 'Incorrect automated evaluation. Good for permanent suspension situations.', template: 'Dear team, my account is inaccessible and I seek to understand why. I believe this situation might have been caused by an incorrect evaluation of an automated process, as I have always taken care to follow the platform\'s rules. To resolve this issue, I request that a support specialist manually review the case and inform me of the technical details that led to the current restriction. Thank you and I await a position.' },
          { id: '4.6', title: 'TICKET TEMPLATE #6', content: 'Formal request for privilege diagnosis. Use for second attempts or complex cases.', template: 'To the Support team, I submit this request for verification of an anomalous change of privileges in my account, resulting in the inability to log in. The occurrence does not match my pattern of use, which is fully adherent to the Terms of Service. I formally request the intervention of an analyst for a precise diagnosis and the restoration of my access. I am available to cooperate with the analysis process.' },
          { id: 'm4-rules', title: '⚠️ EXTRA LESSON - MANDATORY TEMPLATE RULES', content: 'Use only one template per attempt. Maintain the exact tone. Wait for the correct period. Do not mix templates, add emotion, or make threats.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MODULE 5',
        title: 'AFTER SENDING THE TICKET',
        description: 'Management of silence and response windows.',
        lessons: [
          { id: '5.1', title: 'LESSON 5.1 - THE CORRECT WAITING TIME', content: 'Wait at least 72 hours; ideal is 7-10 days. Do not send multiple tickets immediately.' },
          { id: '5.2', title: 'LESSON 5.2 - WHAT NOT TO DO AT ALL', content: 'Never open several tickets simultaneously or use different emails. Do not argue or pressure the team.' },
          { id: '5.3', title: 'LESSON 5.3 - WHEN TO SEND A NEW TICKET', content: 'Only after 7 days if no response or if response was clearly automatic. Use a different template and slightly alter the subject.' },
          { id: '5.4', title: 'LESSON 5.4 - WHEN TO STOP', content: 'Consider stopping after a clear final response or three well-spaced unsuccessful attempts.' },
          { id: '5.5', title: 'LESSON 5.5 - THE CORRECT MENTALITY', content: 'Organization, control, strategy, and patience. Avoid spam and brute force.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MODULE 6',
        title: 'ANALYZING THE RESPONSE',
        description: 'Decoding support feedback.',
        lessons: [
          { id: '6.1', title: 'LESSON 6.1 - HOW TO IDENTIFY AN AUTOMATIC RESPONSE', content: 'Generic text, standardized language, no mention of your specific ID or dates. Indicates you haven\'t passed the first screening.' },
          { id: '6.2', title: 'LESSON 6.2 - HOW TO IDENTIFY A HUMAN RESPONSE', content: 'Mention of account history, reference to your specific ticket info, or requests for more data. Indicates real analysis has started.' },
          { id: '6.3', title: 'LESSON 6.3 - WHAT TO DO IF THE RESPONSE IS AUTOMATIC', content: 'Do not respond immediately. Wait 7 days and start a new organized attempt with a different approach.' },
          { id: '6.4', title: 'LESSON 6.4 - WHAT TO DO IF THE RESPONSE IS HUMAN', content: 'Wait for the period informed and respond ONLY to what was requested. Less is more.' },
          { id: '6.5', title: 'LESSON 6.5 - THE WORST ERROR OF ALL', content: 'Responding emotionally (e.g., "This is unfair"). It destroys chances of reassessment.' }
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
      systemActive: 'PROTOCOLO ATIVO',
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
          { id: '1.1', title: 'AULA 1.1 - QUÉ ES EL BANEO AUTOMÁTICO', content: 'Entendiendo el funcionamiento de los baneos automáticos... El baneo automático ocurre cuando los sistemas internos identifican comportamientos considerados sospechosos sin que necesariamente exista un análisis humano inicial. Las principales características son mensajes genéricos, respuestas rápidas y falta de referencia directa al usuario.' },
          { id: '1.2', title: 'AULA 1.2 - QUÉ ES EL BANEO MANUAL', content: 'Cuando hay participación humana en la decisión... El baneo manual ocurre cuando existe un análisis directo realizado por miembros del equipo. Las características incluyen mensajes más detallados y referencias directas a reglas específicas.' },
          { id: '1.3', title: 'AULA 1.3 - QUÉ ES EL BANEO REINCIDENTE', content: 'Cuando existe un historial previo de sanciones... Las plataformas aplican niveles de tolerancia progresivamente menores. La insistência excesiva puede confirmar decisiones anteriores.' },
          { id: '1.4', title: 'AULA 1.4 - CÓMO IDENTIFICAR CUÁL ES SU CASO', content: 'El paso más importante antes de enviar cualquier ticket... Identifique si el mensaje es genérico o específico y si hay historial previo. En Garena, su primer intento debe ser organizado, técnico y estratégico.' }
        ]
      },
      {
        id: 'module-2',
        tag: 'MÓDULO 2',
        title: 'PREPARACIÓN DEL TICKET',
        description: 'Logística y estrategia previa al envío.',
        lessons: [
          { id: '2.1', title: 'AULA 2.1 - DÓNDE ENVIAR EL TICKET', content: 'Utilizando solo canales oficiales. Un ticket enviado en el lugar equivocado nace sin posibilidad de análisis. Evite redes sociales y correos genéricos. La solicitud debe enviarse exclusivamente a través del soporte oficial. Enviar a varios canales simultáneamente no aumenta las posibilidades y perjudica la consistencia del caso. Recuerde: Un intento organizado vale más que diez intentos desesperados.' },
          { id: '2.2', title: 'AULA 2.2 - ELIGIENDO LA CATEGORÍA CORRECTA', content: 'La decisión más importante antes del mensaje. La categoría elegida influye en cómo se procesará su solicitud. Evite categorías acusatorias o definitivas. Seleccione categorías que permitan análisis y sean neutras. No intente ocultar información, sino evitar que su intento se cierre antes de ser leído. Pregúntese si la categoría abre un análisis o confirma una decisión.' },
          { id: '2.3', title: 'AULA 2.3 - COMPLETANDO LOS DATOS DE LA CUENTA', content: 'Menos información significa menos problemas. Los campos técnicos existen solo para la identificación. Complete solo el ID correcto, nickname exacto, correo solicitado e información obligatoria. Nunca añada explicaciones extra en campos técnicos. Los sistemas automatizados analizan patrones de llenado; mantenga los campos técnicos solo con datos técnicos.' },
          { id: '2.4', title: 'AULA 2.4 - EL CAMPO DE MENSAJE', content: 'El único lugar donde la estrategia realmente importa. Es el único espacio con posibilidad de influencia humana. Nunca escriba en mayúsculas, use emojis, haga amenazas o copie textos emocionales. Use lenguaje formal, sea objetivo y demuestre organización. El soporte busca solicitudes que merezcan ser analizadas. La claridad vale más que la cantidad.' },
          { id: '2.5', title: 'AULA 2.5 - REVISIÓN FINAL ANTES DE ENVIAR', content: 'El ticket es único. Revise categoría, datos (ID, nickname), mensaje (objetivo, técnico) y tono general (¿parece escrito por alguien calmado?). Si la respuesta es "no", no lo envíe. Después del envío, no envíe otro de inmediato ni abra múltiples solicitudes. La estrategia termina en el envío; la insistencia excesiva produce el efecto contrario.' }
        ]
      },
      {
        id: 'module-3',
        tag: 'MÓDULO 3',
        title: 'LLENADO PASO A PASO',
        description: 'Protocolo detallado de llenado.',
        lessons: [
          { id: '3.1', title: 'AULA 3.1 - QUÉ OPCIÓN SELECCIONAR', content: 'La primera decisión que puede definir todo el proceso... Elija opciones neutras como "Quiero recuperar mi cuenta". Evite opciones que anticipen conclusiones o confirmen acusaciones.' },
          { id: '3.2', title: 'AULA 3.2 - EL CAMPO REQUESTER', content: 'El campo más simple y frecuentemente completado mal... Inserte el correo de contacto válido al que tenga acceso. No escriba el ID ni explicaciones adicionales aquí.' },
          { id: '3.3', title: 'AULA 3.3 - EL CAMPO ASUNTO', content: 'El campo que más activa respuestas automáticas... Evite términos como "injustamente" o "urgente". Use algo técnico como "Solicitud de verificación referente al acceso de la cuenta."' },
          { id: '3.4', title: 'AULA 3.4 - NICKNAME DE LA CUENTA', content: 'Sin margen para la creatividad. Copie exactamente el nombre registrado, respetando mayúsculas, minúsculas y símbolos.' },
          { id: '3.5', title: 'AULA 3.5 - EL NÚMERO DE ID', content: 'El dato más importante. Copie de la fuente oficial y revise varias veces. No añada comentarios ni justificaciones.' },
          { id: '3.6', title: 'AULA 3.6 - TIEMPO DE SUSPENSIÓN', content: 'Nunca invente información. Si es permanente, marque permanente. La incoherencia reduce la credibilidad.' },
          { id: '3.7', title: 'AULA 3.7 - FECHA DEL SUCESO', content: 'Las fechas importan. Informe la fecha exacta o una aproximación razonable. Evite fechas imposibles.' },
          { id: '3.8', title: 'AULA 3.8 - EL CAMPO DE DESCRIPCIÓN', content: 'Donde el método realmente ocurre. No acuse, confiese, implore o amenace. Sea calmado, organizado y técnico. Recomendamos usar nuestras plantillas estratégicas.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'PLANTILLAS LISTAS',
        description: 'Plantillas estratégicas de alta conversión.',
        lessons: [
          { id: '4.1', title: 'PLANTILLA DE TICKET Nº 1', content: 'Diagnóstico técnico por imposibilidad súbita de acceso. Úsela para baneos automáticos y falta de explicación clara.', template: 'Estimado equipo, le escribo para solicitar un diagnóstico técnico referente a una súbita imposibilidad de acceder a mi cuenta. Al intentar conectar, encuentro una restricción inesperada que no puedo resolver. Creo que podría tratarse de una anomalía sistémica, ya que soy consciente de que mis actividades siempre han estado en conformidad con los Términos de Servicio. Solicito, por favor, una verificación manual del estado de mi cuenta y una aclaración sobre la naturaleza de esta restricción. Quedo a su disposición para ayudar en la investigación.' },
          { id: '4.2', title: 'PLANTILLA DE TICKET Nº 2', content: 'Sospecha de falla en monitoreo automático. Úsela para suspensiones inesperadas sin historial previo.', template: 'Al equipo técnico, vengo a reportar una irregularidade que impide mi acceso a la plataforma. Mi cuenta se volvió inaccesible sin previo aviso, y sospecho de una falla o un error en algún proceso de monitoreo automático. Me gustaría reiterar que sigo estrictamente las directrices de la comunidad. Por lo tanto, pido formalmente que un analista investigue lo ocurrido y me proporcione un dictamen sobre la causa del problema de acceso. Sigo disponible para proporcionar logs u otra información.' },
          { id: '4.3', title: 'PLANTILLA DE TICKET Nº 3', content: 'Hipótesis de falso positivo y análisis de integridad. Recomendada si conoce la fecha.', template: 'Me dirijo a ustedes para solicitar soporte con respecto a un problema con el acceso a mi cuenta. Desde el [fecha], ya no puedo usar los servicios. Considerando que mi patrón de uso se guía por el cumplimiento de las reglas, la situación me lleva a creer en un error técnico o un falso positivo de algún sistema. Pido que se realice un análisis de integridad de la cuenta por parte de un miembro del equipo para identificar el origen de esta anomalía. Espero una respuesta y agradezco su atención.' },
          { id: '4.4', title: 'PLANTILLA DE TICKET Nº 4', content: 'Solicitud de auditoría humana por falta de justificación. Mejor para bloqueos repentinos.', template: 'Saludos. Me pongo en contacto con el equipo de soporte para obtener asistencia con una falla que está bloqueando el acceso a mi cuenta. No recibí ninguna notificación que justificara tal impedimento, lo que sugiere una posible inconsistencia en los sistemas de validación. Tengo plena convicción de mi cumplimiento con las políticas del juego. Solicito una auditoría humana en el registro de actividades de mi cuenta para aclarar este incidente. Me pongo a su disposición para lo que sea necesario.' },
          { id: '4.5', title: 'PLANTILLA DE TICKET Nº 5', content: 'Evaluación automatizada incorrecta. Útil para suspensiones permanentes.', template: 'Estimado equipo, mi cuenta es inaccesible y busco entender por qué. Creo que esta situación puede haber sido causada por una evaluación incorrecta de un proceso automatizado, ya que siempre me he preocupado por seguir las reglas de la plataforma. Para resolver esta cuestión, solicito que un especialista de soporte revise el caso manualmente e me informe los detalles técnicos que llevaron a la restricción actual. Gracias y espero una posición.' },
          { id: '4.6', title: 'PLANTILLA DE TICKET Nº 6', content: 'Solicitud formal para diagnóstico de privilegios. Para segundos intentos o casos complejos.', template: 'Al equipo de Soporte, presento este pedido para la verificación de una alteración anómala de privilegios en mi cuenta, lo que resulta en la imposibilidad de iniciar sesión. El suceso no coincide con mi patrón de uso, el cual es totalmente adherente a los Términos de Servicio. Pido, formalmente, la intervención de un analista para un diagnóstico preciso y el restablecimiento de mi acceso. Estoy a su disposición para cooperar con el proceso de análisis.' },
          { id: 'm4-rules', title: '⚠️ AULA EXTRA - REGLAS OBLIGATORIAS', content: 'Use solo una plantilla por intento. Mantenga el tono exacto. Espere el período correcto. No mezcle plantillas, añada emoción o haga amenazas.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'DESPUÉS DE ENVIAR EL TICKET',
        description: 'Gestión de silencio y ventanas de respuesta.',
        lessons: [
          { id: '5.1', title: 'AULA 5.1 - EL TIEMPO DE ESPERA CORRECTO', content: 'Espere al menos 72 horas; lo ideal es de 7 a 10 días. No envíe múltiples tickets de inmediato.' },
          { id: '5.2', title: 'AULA 5.2 - QUÉ NO HACER BAJO NINGUNA CIRCUNSTANCIA', content: 'Nunca abra varios tickets o use diferentes correos. No discuta ni presione al equipo de soporte.' },
          { id: '5.3', title: 'AULA 5.3 - CUÁNDO ENVIAR UN NUEVO TICKET', content: 'Solo tras 7 días sin respuesta o si la respuesta fue claramente automática. Use otra plantilla y altere el asunto.' },
          { id: '5.4', title: 'AULA 5.4 - CUÁNDO PARAR', content: 'Considere detenerse tras una respuesta final clara o tres intentos bien espaciados fallidos.' },
          { id: '5.5', title: 'AULA 5.5 - LA MENTALIDAD CORRECTA', content: 'Organización, control, estrategia y paciencia. Evite el spam y la fuerza bruta.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALIZANDO LA RESPUESTA',
        description: 'Decodificación de feedback del soporte.',
        lessons: [
          { id: '6.1', title: 'AULA 6.1 - CÓMO IDENTIFICAR UNA RESPUESTA AUTOMÁTICA', content: 'Texto genérico, lenguaje estandarizado y sin mención de datos específicos. Indica que no superó el primer cribado.' },
          { id: '6.2', title: 'AULA 6.2 - CÓMO IDENTIFICAR UNA RESPUESTA HUMANA', content: 'Mención del historial o referencia a datos del ticket. Indica que la análisis real ha comenzado.' },
          { id: '6.3', title: 'AULA 6.3 - QUÉ HACER SI LA RESPUESTA ES AUTOMÁTICA', content: 'No responda de inmediato. Espere 7 días e inicie un nuevo intento organizado con otro enfoque.' },
          { id: '6.4', title: 'AULA 6.4 - QUÉ HACER SI LA RESPUESTA ES HUMANA', content: 'Espere el período informado y responda SOLO a lo solicitado. Menos es más.' },
          { id: '6.5', title: 'AULA 6.5 - EL PEOR ERROR DE TODOS', content: 'Responder emocionalmente (ej. "Es injusto"). Destruye las posibilidades de reevaluación.' }
        ]
      }
    ]
  }
};
