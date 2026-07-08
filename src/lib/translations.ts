
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
          { id: '3.1', title: '3.1 - Opção de Seleção', content: 'A primeira decisão que pode definir todo o processo\n\nAo abrir o formulário de suporte, você encontrará diversas opções relacionadas ao problema da conta.\n\nA maioria das pessoas comete o primeiro erro justamente aqui: escolhe a opção mais óbvia.\n\nO problema é que algumas categorias funcionam praticamente como classificações automáticas de encerramento.\n\nEvite opções como:\n\n❌ "Detectamos o uso de softwares não autorizados"\n\n❌ "O sistema Anti-Trapaça detectou irregularidades"\n\n❌ "Esta conta foi suspensa permanentemente"\n\nEssas categorias costumam encaminhar a solicitação diretamente para respostas padronizadas.\n\nA estratégia correta\n\nSempre que possível, escolha opções mais neutras, relacionadas à recuperação ou verificação da conta.\n\nPor exemplo:\n\n✅ "Quero recuperar a conta do Free Fire (não se aplica à Suspensões)"\n\nEssa abordagem:\n\n- não antecipa conclusões;\n- não confirma acusações;\n- mantém a solicitação em categorias mais amplas de análise.\n\nO princípio estratégico\n\nVocê não está tentando provar nada nesta etapa.\n\nVocê está apenas tentando evitar que sua solicitação seja descartada antes de ser analisada.' },
          { id: '3.2', title: '3.2 - Campo Requester', content: 'O campo mais simples e, ainda assim, frequentemente preenchido errado\n\nO campo "Requester" identifica o solicitante do ticket.\n\nSua função é exclusivamente administrativa.\n\nO que inserir:\n- o e-mail utilizado para contato;\n- um endereço válido;\n- um e-mail que você tenha acesso.\n\nO que NÃO fazer:\n\n❌ Escrever o ID da conta;\n\n❌ Inserir explicações;\n\n❌ Adicionar observações;\n\n❌ Utilizar múltiplos e-mails.\n\nImportante\n\nO e-mail do ticket não necessariamente precisa ser o mesmo utilizado na conta do jogo.\n\nEle serve apenas para que o suporte consiga retornar sua solicitação.\n\nQuanto mais limpo e objetivo for o preenchimento, melhor.' },
          { id: '3.3', title: '3.3 - Assunto Estratégico', content: 'O campo que mais ativa respostas automáticas\n\nO assunto do ticket é uma das primeiras informações analisadas pelo sistema.\n\nPor isso, utilizar termos emocionais ou acusatórios pode prejudicar a tentativa.\n\nNunca utilize:\n\n❌ "Fui banido injustamente"\n\n❌ "Desbanimento urgente"\n\n❌ "Minha conta foi roubada"\n\n❌ "Quero meu desbanimento"\n\nO objetivo do assunto\n\nO assunto deve:\n\n- parecer técnico;\n- ser curto;\n- indicar necessidade de análise;\n- evitar conclusões.\n\nExemplo da lógica correta:\n\nEm vez de acusar ou exigir, procure transmitir a ideia de:\n\n"Solicitação de verificação referente ao acesso da conta."\n\nLembre-se:\n\nO assunto serve para abrir uma porta, não para ganhar uma discussão.' },
          { id: '3.4', title: '3.4 - Precisão do Nick', content: 'Não existe margem para criatividade\n\nO nickname deve ser preenchido exatamente como aparece dentro do jogo.\n\nRegras:\n\n✅ Utilize letras maiúsculas e minúsculas corretamente;\n\n✅ Respeite símbolos especiais;\n\n✅ Copie exatamente o nome registrado.\n\nNunca faça:\n\n❌ Utilizar apelidos alternativos;\n\n❌ Utilizar abreviações;\n\n❌ Inserir nomes antigos da conta.\n\nUm nickname incorreto pode fazer com que sua solicitação seja considerada inválida.' },
          { id: '3.5', title: '3.5 - ID da Conta', content: 'O dado mais importante do formulário\n\nO ID da conta é o principal identificador interno.\n\nPor isso:\n\n- copie diretamente da fonte oficial;\n- revise mais de uma vez;\n- confirme todos os números.\n\nNão faça:\n\n❌ Inserir comentários;\n\n❌ Adicionar justificativas;\n\n❌ Escrever textos complementares.\n\nO campo de ID existe apenas para identificar a conta.\n\nNada além disso.' },
          { id: '3.6', title: '3.6 - Status de Suspensão', content: 'Nunca invente informações\n\nSe o sistema informar suspensão permanente, informe exatamente isso.\n\nRegras:\n\n✅ Se for permanente, marque permanente;\n\n✅ Se houver prazo definido, utilize o prazo correto;\n\n✅ Se não souber exatamente, utilize a informação mais próxima possível.\n\nNunca faça:\n\n❌ Inventar períodos;\n\n❌ Chutar datas;\n\n❌ Fazer estimativas aleatórias.\n\nInformações inconsistentes reduzem a credibilidade da solicitação.' },
          { id: '3.7', title: '3.7 - Data e Coerência', content: 'Datas importam mais do que parecem\n\nO sistema pode utilizar a data informada para cruzamento interno de informações.\n\nPor isso:\n\n- informe a data exata, se souber;\n- utilize uma aproximação razoável, caso não tenha certeza.\n\nEvite:\n\n❌ "Não lembro";\n\n❌ Datas impossíveis;\n\n❌ Datas muito distantes do ocorrido.\n\nA coerência das informações ajuda a demonstrar organização e boa-fé.' },
          { id: '3.8', title: '3.8 - Descrição do Ticket', content: 'O único campo onde o método realmente acontece\n\nTodos os campos anteriores servem para classificação.\n\nA descrição é o único espaço onde existe possibilidade de diferenciação.\n\nO que NÃO fazer:\n\n❌ Acusar;\n\n❌ Confessar;\n\n❌ Implorar;\n\n❌ Escrever textos emocionais;\n\n❌ Fazer ameaças.\n\nO objetivo da descrição\n\nA descrição deve:\n\n✅ parecer escrita por alguém calmo;\n\n✅ demonstrar organização;\n\n✅ solicitar análise;\n\n✅ evitar palavras que acionem respostas automáticas.\n\nA pergunta que o sistema tenta responder\n\nNa prática, sua descrição será analisada sob uma única perspectiva:\n\n"Vale a pena encaminhar esta solicitação para análise?"\n\nTodo o restante depende dessa decisão inicial.\n\nPor isso, a descrição não serve para convencer alguém no grito.\n\nEla serve para parecer suficientemente organizada para merecer uma análise.\n\nA recomendação mais importante deste método\n\nEmbora seja possível escrever sua própria descrição, isso aumenta significativamente a chance de cometer erros de tom, estrutura ou linguagem.\n\nPor esse motivo, a recomendação deste método é utilizar um dos modelos prontos disponibilizados no próximo módulo.\n\nOs modelos foram estruturados para:\n\n- manter um tom técnico;\n- evitar linguagem emocional;\n- reduzir a chance de ativação de respostas automáticas;\n- apresentar a solicitação de forma organizada e objetiva.\n\nTentar "melhorar" os modelos adicionando emoção, acusações ou explicações excessivas costuma produzir o efeito contrário ao desejado.' }
        ]
      },
      {
        id: 'module-4',
        tag: 'MÓDULO 4',
        title: 'MODELOS PRONTOS',
        description: 'Templates estratégicos de alta conversão.',
        lessons: [
          { id: 'm4-1', title: 'Ticket 1 - Diagnóstico Técnico', content: 'Quando utilizar este modelo\n\nEste modelo é indicado para situações em que a conta se tornou inacessível de forma inesperada e não existem informações claras sobre o motivo da restrição.\n\nO objetivo deste texto é apresentar a situação como uma possível inconsistência técnica, evitando qualquer linguagem emocional ou acusatória.', template: 'Prezados, escrevo para solicitar um diagnóstico técnico referente a uma súbita impossibilidade de acessar minha conta. Ao tentar conectar, encontro uma restrição inesperada que não consigo resolver. Acredito que possa se tratar de uma anomalia sistêmica, pois tenho ciência de que minhas atividades sempre estiveram em conformidade com os Termos de Serviço. Solicito, por gentileza, uma verificação manual do estado da minha conta e um esclarecimento sobre a natureza desta restrição. Fico à disposição para auxiliar na investigação.\n\nQuando usar:\n✅ Banimentos automáticos;\n✅ Mensagens genéricas;\n✅ Falta de explicação clara.' },
          { id: 'm4-2', title: 'Ticket 2 - Suspeita de Falha', content: 'Quando utilizar este modelo\n\nEste modelo enfatiza a possibilidade de falha em sistemas automáticos de monitoramento, mantendo uma postura técnica e colaborativa.', template: 'À equipe técnica, venho reportar uma irregularidade que impede meu acesso à plataforma. Minha conta tornou-se inacessível sem aviso prévio, e suspeito de uma falha ou um erro em algum processo de monitoramento automático. Gostaria de reiterar que sigo rigorosamente as diretrizes da comunidade. Sendo assim, peço formalmente que um analista investigue o ocorrido e me forneça um parecer sobre a causa do problema de acesso. Permaneço disponível para fornecer logs ou outras informações.\n\nQuando usar:\n✅ Suspensões inesperadas;\n✅ Casos sem histórico anterior;\n✅ Primeira tentativa de recuperação.' },
          { id: 'm4-3', title: 'Ticket 3 - Falso Positivo', content: 'Quando utilizar este modelo\n\nEste modelo trabalha com a hipótese de falso positivo e solicita uma análise de integridade da conta.', template: 'Dirijo-me a vocês para requisitar suporte a respeito de um problema de acesso à minha conta. Desde recentemente, não consigo mais utilizar os serviços. Considerando que meu histórico de uso é pautado pelo cumprimento das regras, a situação me leva a crer em um erro técnico ou um falso positivo de algum sistema. Peço que uma análise de integridade da conta seja conduzida por um membro da equipe para identificar a origem desta anomalia. Aguardo um retorno e agradeço a atenção.\n\nQuando usar:\n✅ Quando você souber aproximadamente a data do ocorrido;\n✅ Possíveis falsos positivos;\n✅ Contas sem histórico de punições.' },
          { id: 'm4-4', title: 'Ticket 4 - Auditoria Humana', content: 'Quando utilizar este modelo\n\nEste modelo enfatiza a ausência de justificativa apresentada pela plataforma e solicita uma auditoria humana.', template: 'Saudações. Contato a equipe de suporte para obter assistência com uma falha que está bloqueando o acesso à minha conta. Não recebi nenhuma notificação que justificasse tal impedimento, o que sugere uma possível inconsistência nos sistemas de validação. Tenho plena convicção de minha conformidade com as políticas do jogo. Solicito uma auditoria humana no registro de atividades da minha conta para esclarecer este incidente. Coloco-me à disposição para o que for preciso.\n\nQuando usar:\n✅ Quando não houver explicação clara;\n✅ Casos de bloqueio súbito;\n✅ Situações sem aviso prévio.' },
          { id: 'm4-5', title: 'Ticket 5 - Avaliação Incorreta', content: 'Quando utilizar este modelo\n\nEste modelo procura apresentar o problema como resultado de uma avaliação automatizada incorreta.', template: 'Prezados, minha conta encontra-se inacessível e busco entender o motivo. Acredito que esta situação possa ter sido causada por uma avaliação incorreta de um processo automatizado, visto que sempre zelei por seguir as regras da plataforma. Para resolvermos esta questão, solicito que um especialista de suporte revise o caso manualmente e me comunique os detalhes técnicos que levaram à atual restrição. Agradeço e aguardo um posicionamento.\n\nQuando usar:\n✅ Casos aparentemente automáticos;\n✅ Quando houver suspeita de falso positivo;\n✅ Situações de suspensão permanente.' },
          { id: 'm4-6', title: 'Ticket 6 - Abordagem Técnica', content: 'Este modelo utiliza uma abordagem mais técnica e formal, sendo indicado para tentativas posteriores ou situações mais complexas.', template: 'À equipe de Suporte, submeto este pedido para verificação de uma alteração anômala de privilégios em minha conta, resultando na impossibilidade de login. O ocorrido não condiz com meu padrão de uso, que é totalmente aderente aos Termos de Serviço. Peço, formalmente, a intervenção de um analista para um diagnóstico preciso e o restabelecimento do meu acesso. Estou à disposição para cooperar com o processo de análise.\n\nQuando usar:\n✅ Segunda tentativa;\n✅ Casos mais complexos;\n✅ Situações em que o primeiro ticket não obteve análise satisfatória.' },
          { id: 'm4-rules', title: 'Regras Fundamentais', content: 'Antes de utilizar qualquer modelo, você precisa entender algumas regras fundamentais:\n\nFaça:\n\n✅ Utilize apenas um modelo por tentativa;\n\n✅ Mantenha exatamente o tom do texto;\n\n✅ Escolha o modelo mais compatível com sua situação;\n\n✅ Aguarde o prazo correto após o envio.\n\nNunca faça:\n\n❌ Misturar dois modelos;\n\n❌ Adicionar emoção;\n\n❌ Fazer ameaças;\n\n❌ Alterar completamente a estrutura;\n\n❌ Inserir acusações;\n\n❌ Copiar o mesmo texto diversas vezes.' }
        ]
      },
      {
        id: 'module-5',
        tag: 'MÓDULO 5',
        title: 'APÓS ENVIAR O TICKET',
        description: 'Gestão de silêncio e janelas de resposta.',
        lessons: [
          { id: '5.1', title: '5.1 - O erro mais comum acontece depois do envio', content: 'Depois de enviar o ticket, muitas pessoas acreditam que precisam continuar agindo para aumentar suas chances.\n\nNa prática, o excesso de ação costuma produzir o efeito contrário.\n\nApós o envio da solicitação:\n- aguarde pelo menos 72 horas;\n- o período ideal é entre 7 e 10 dias;\n- evite qualquer tentativa de reforço antes desse prazo.\n\nNão faça isso:\n\n❌ Enviar outro ticket no mesmo dia;\n\n❌ Criar novas solicitações após algumas horas;\n\n❌ Reenviar o mesmo texto diversas vezes;\n\n❌ Procurar outros canais de suporte imediatamente.\n\nOs sistemas de atendimento normalmente priorizam solicitações organizadas e únicas.\n\nInsistência excessiva pode fazer sua solicitação perder credibilidade.\n\nRegra principal\n\nDepois de enviar o ticket, sua melhor estratégia passa a ser esperar.' },
          { id: '5.2', title: '5.2 - Como destruir sua própria tentativa em poucos minutos', content: 'Após o envio, existem alguns comportamentos que aumentam significativamente a probabilidade de respostas automáticas.\n\nNunca faça:\n\n❌ Abrir vários tickets simultaneamente;\n\n❌ Utilizar diversos e-mails diferentes;\n\n❌ Alterar categorias apenas para "testar";\n\n❌ Enviar mensagens emocionais;\n\n❌ Discutir com o suporte;\n\n❌ Fazer ameaças;\n\n❌ Tentar pressionar a equipe.\n\nPor quê?\n\nPorque sistemas internos costumam interpretar insistência excessiva como comportamento inadequado ou tentativa repetitiva.\n\nO objetivo do método não é chamar atenção.\n\nO objetivo é parecer uma solicitação legítima que merece análise.\n\nLembre-se:\n\nSer insistente não significa ser prioritário.' },
          { id: '5.3', title: '5.3 - O momento correto para uma nova tentativa', content: 'Existe apenas uma situação em que uma nova tentativa pode ser considerada:\n\nVocê pode enviar outro ticket quando:\n\n✅ Passaram pelo menos 7 dias;\n\n✅ Não houve resposta;\n\nou\n\n✅ A resposta recebida foi claramente automática.\n\nSe decidir tentar novamente:\n- utilize outro modelo de ticket;\n- altere levemente o assunto;\n- mantenha o tom técnico;\n- não reutilize exatamente o mesmo texto.\n\nO que nunca fazer:\n\n❌ Copiar e colar o ticket anterior;\n\n❌ Reenviar a mesma mensagem;\n\n❌ Citar respostas automáticas anteriores;\n\n❌ Demonstrar frustração.\n\nO objetivo da segunda tentativa é tentar escapar de processos automatizados, não discutir a primeira decisão.' },
          { id: '5.4', title: '5.4 - Saber parar também faz parte da estratégia', content: 'Existe um momento em que insistir deixa de ser estratégia e passa a ser apenas insistência.\n\nVocê deve considerar interromper as tentativas quando:\n- receber uma resposta final clara e repetida;\n- a plataforma informar explicitamente que não haverá nova análise;\n- três tentativas bem espaçadas não produzirem qualquer avanço.\n\nPor que parar?\n\nPorque continuar insistindo após esse ponto normalmente não gera benefícios adicionais.\n\nAo contrário, pode dificultar futuras análises ou revisões.\n\nO objetivo do método\n\nEste método não busca quantidade.\n\nEle busca qualidade na tentativa.\n\nUma única tentativa organizada vale mais do que dezenas de tentativas impulsivas.\n\nLEMBRE-SE: SE A TENTATIVA NÃO PRODUZIU RESULTADO, AGUARDE OBRIGATORIAMENTE +7 DIAS ANTES DE NOVO CICLO.' }
        ]
      },
      {
        id: 'module-6',
        tag: 'MÓDULO 6',
        title: 'ANALISANDO A RESPOSTA',
        description: 'Decodificação de feedback do suporte.',
        lessons: [
          { id: '6.1', title: '6.1 - Nem toda resposta significa que alguém realmente leu seu caso', content: 'Antes de tomar qualquer decisão, você precisa descobrir quem respondeu sua solicitação.\n\nMuitas respostas são produzidas automaticamente pelos sistemas de atendimento e não representam uma análise individual da sua conta.\n\nCaracterísticas de uma resposta automática:\n\n✅ Texto extremamente genérico;\n\n✅ Linguagem padronizada;\n\n✅ Ausência de detalhes específicos;\n\n✅ Repetição das mesmas informações exibidas no banimento;\n\n✅ Encerramento imediato do caso.\n\nExemplos comuns:\n"Após análise, confirmamos que a penalidade foi aplicada corretamente."\n"Não é possível reverter esta decisão."\n"O sistema detectou violação dos Termos de Serviço."\n\nUm sinal importante\n\nSe a resposta:\n- não menciona seu ID;\n- não menciona datas;\n- não menciona eventos específicos;\n- não faz referência ao conteúdo enviado;\n\nexiste grande probabilidade de que você tenha recebido apenas uma resposta automatizada.\n\nO que isso significa?\n\nNão significa necessariamente que seu caso foi analisado e negado. Muitas vezes significa apenas que ele não ultrapassou a primeira camada de triagem.' },
          { id: '6.2', title: '6.2 - Os sinais de que alguém realmente analisou sua solicitação', content: 'As respostas humanas costumam apresentar pequenas diferenças que indicam leitura real.\n\nVocê não precisa encontrar todos os sinais. Um ou dois já podem indicar análise humana.\n\nCaracterísticas comuns:\n\n✅ Menção ao histórico da conta;\n\n✅ Referência a informações fornecidas no ticket;\n\n✅ Solicitação de documentos ou dados adicionais;\n\n✅ Linguagem menos padronizada;\n\n✅ Encaminhamento para análise interna.\n\nExemplos:\n"Verificamos o histórico da conta..."\n"Com base nas informações fornecidas..."\n"Encaminhamos sua solicitação para análise complementar..."\n"Precisaremos de informações adicionais..."\n\nO que isso significa?\n\nSignifica que sua solicitação conseguiu ultrapassar parte da triagem automática. Neste cenário, o maior erro possível é começar a escrever textos enormes tentando reforçar sua argumentação. A análise já começou. Agora, o objetivo é não atrapalhá-la.' },
          { id: '6.3', title: '6.3 - A pior reação possível é responder imediatamente', content: 'Ao identificar uma resposta automática, muitas pessoas entram em pânico e começam a enviar novos tickets. Essa costuma ser a decisão mais prejudicial.\n\nSe a resposta foi automática:\n\n✅ Não responda imediatamente;\n\n✅ Não tente discutir;\n\n✅ Não envie justificativas adicionais;\n\n✅ Não faça ameaças;\n\n✅ Aguarde pelo menos 7 dias.\n\nApós esse período, você pode considerar utilizar outro modelo de ticket ou reformular a abordagem. O objetivo aqui não é vencer a resposta automática. O objetivo é tentar fazer com que sua próxima tentativa ultrapasse essa barreira.\n\nLembre-se:\n\nVocê está tentando sair do ciclo automático, não discutir com ele.' },
          { id: '6.4', title: '6.4 - Quando existe leitura humana, menos é mais', content: 'Se houver indícios claros de análise humana, você deve agir com ainda mais cautela.\n\nFaça:\n\n✅ Aguarde o prazo informado;\n\n✅ Responda apenas o que foi solicitado;\n\n✅ Utilize respostas objetivas;\n\n✅ Mantenha linguagem técnica.\n\nNão faça:\n\n❌ Escrever textos emocionais;\n\n❌ Recontar toda a história;\n\n❌ Fazer acusações;\n\n❌ Pressionar por velocidade;\n\n❌ Adicionar informações desnecessárias.\n\nRegra principal:\n\nResponda apenas a pergunta feita. Quanto mais você falar além do necessário, maior a chance de introduzir inconsistências ou prejudicar a análise.' }
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
          { id: 'm4-1', title: 'Ticket 1 - Technical Diagnosis', template: 'Dear team, I am writing to request a technical diagnosis regarding a sudden inability to access my account. When trying to connect, I encounter an unexpected restriction that I cannot resolve. I believe it might be a systemic anomaly, as I am aware that my activities have always been in compliance with the Terms of Service. I kindly request a manual verification of my account status and clarification on the nature of this restriction. I remain at your disposal to assist in the investigation.' },
          { id: 'm4-2', title: 'Ticket 2 - Suspected Failure', template: 'To the technical team, I am reporting an irregularity that prevents my access to the platform. My account became inaccessible without prior notice, and I suspect a failure or an error in some automatic monitoring process. I would like to reiterate that I strictly follow the community guidelines. Therefore, I formally ask an analyst to investigate what happened and provide me with an opinion on the cause of the access problem. I remain available to provide logs or other information.' },
          { id: 'm4-3', title: 'Ticket 3 - False Positive', template: 'Dear support, I am writing regarding an access issue. I believe this is a technical error or a false positive. I request an integrity check by a team member.' },
          { id: 'm4-4', title: 'Ticket 4 - Human Audit', template: 'Greetings. I need assistance with a failure blocking my access. I request a human audit of my account activity.' },
          { id: 'm4-5', title: 'Ticket 5 - Incorrect Evaluation', template: 'Dear team, my account is inaccessible. I believe this was caused by an incorrect automated evaluation. Please review manually.' },
          { id: 'm4-6', title: 'Ticket 6 - Technical Approach', template: 'To Support, I submit this request for verification of an anomalous change in privileges. Please diagnose and restore access.' },
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
        description: 'Identificação técnica da restrição aplicada.',
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
          { id: '2.1', title: '2.1 - Canales Oficiales', content: 'Solo suporte oficial. Link: https://ffsuporte.garena.com/support/tickets/new' },
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
          { id: 'm4-1', title: 'Modelo 1 - Diagnóstico', template: 'Estimados, escribo para solicitar un diagnóstico técnico respecto a una súbita imposibilidade de acceder a mi cuenta. Al intentar conectar, encuentro una restricción inesperada que no puedo resolver. Creo que se trata de una anomalía sistémica, ya que soy consciente de que mis actividades siempre han estado en conformidad con los Términos de Servicio. Solicito amablemente una verificación manual del estado de mi cuenta y una aclaración sobre la naturaleza de esta restricción. Quedo a su disposición para ayudar en la investigación.' },
          { id: 'm4-2', title: 'Modelo 2 - Falla', template: 'Al equipo técnico, vengo a reportar una irregularidad que impide mi acceso a la plataforma. Mi cuenta se volvió inaccesible sin previo aviso, y sospecho de una falla o un error en algún proceso de monitoreo automático. Quisiera reiterar que sigo estrictamente las directrices de la comunidad. Por lo tanto, pido formalmente que un analista investigue lo ocurrido y me brinde un parecer sobre la causa del problema de acceso. Permanezco disponible para proporcionar logs u otra información.' },
          { id: 'm4-3', title: 'Modelo 3 - Falso Positivo', template: 'Estimados, solicito soporte por problema de acceso. Creo que es un error técnico. Pido revisión de integridad.' },
          { id: 'm4-4', title: 'Modelo 4 - Auditoría', template: 'Saludos. Necesito asistencia por bloqueo de cuenta. Solicito auditoría humana.' },
          { id: 'm4-5', title: 'Modelo 5 - Evaluación Incorrecta', template: 'Estimados, mi cuenta es inaccesible. Creo que es un error de evaluación automática. Por favor revisen manualmente.' },
          { id: 'm4-6', title: 'Modelo 6 - Técnico', template: 'Al equipo, someto este pedido para verificación de alteración de privilegios. Pido diagnóstico preciso.' },
          { id: 'm4-rules', title: 'Regras de Oro', content: 'Use un solo modelo. Mantenga el tono. Espere el plazo. No mezcle modelos.' }
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
