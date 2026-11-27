/*
 * filosofos.js — conteúdo dos verbetes de pensadores.
 *
 * Formato de cada pensador:
 *   slug, nome, periodo, local, resumo   -> usados nos cartões e no topo do verbete
 *   secoes: [{ id, titulo, paragrafos?, itens? }]
 *       paragrafos: lista de textos
 *       itens: lista de { termo, texto } (exibida como lista de definições)
 *   referencias: lista de textos
 *   relacionados: referências "colecao:slug" (ex.: "filosofo:platao", "escola:estoicismo")
 *
 * Os textos aceitam apenas <i> (títulos de obras) e <b> (destaques), pois são
 * inseridos como HTML. Para adicionar um pensador, copie um bloco abaixo e crie
 * o HTML correspondente em pages/filosofos/ (veja o README).
 */
(function (ns) {
  "use strict";

  ns.data = ns.data || {};

  ns.data.filosofos = [
    {
      slug: "socrates",
      nome: "Sócrates",
      periodo: "c. 470–399 a.C.",
      local: "Atenas",
      resumo: "Filósofo ateniense que nada escreveu. Examinava crenças por perguntas e respostas e foi condenado à morte por impiedade e por corromper os jovens. Conhecemos seu pensamento sobretudo por Platão e Xenofonte.",
      secoes: [
        {
          id: "contexto",
          titulo: "Contexto histórico e intelectual",
          paragrafos: [
            "Sócrates viveu a Atenas do século V a.C., no auge e na crise da cidade. Depois das Guerras Médicas, Atenas liderou a Liga de Delos e consolidou uma democracia em que os cidadãos decidiam na Assembleia. Em 431 a.C. começou a Guerra do Peloponeso contra Esparta, que trouxe a peste (430–426 a.C.), a derrota na expedição à Sicília (415–413 a.C.), golpes oligárquicos e o regime dos Trinta Tiranos (404–403 a.C.), seguido da restauração da democracia.",
            "Na vida intelectual conviviam a investigação da natureza, feita pelos pré-socráticos, e os <b>sofistas</b>, mestres itinerantes que cobravam para ensinar retórica e política e que punham em dúvida a existência de padrões objetivos de justiça. Sócrates conheceu essas correntes, mas orientou sua investigação para a pergunta ética de como se deve viver."
          ]
        },
        {
          id: "vida",
          titulo: "Vida e trajetória intelectual",
          paragrafos: [
            "Sócrates nada escreveu: o que se sabe dele vem de outros autores, cujos retratos divergem (ver “Principais obras”). Nasceu em Atenas, filho de Sofronisco e de Fenarete, e serviu como soldado de infantaria em campanhas da Guerra do Peloponeso, como as de Potideia, Délio e Anfípolis.",
            "Não abriu escola nem cobrava para conversar: passava os dias na ágora e nos ginásios, discutindo com quem aparecesse, e reuniu em torno de si jovens e admiradores, como Platão, Xenofonte, Críton, Alcibíades e Crítias.",
            "Teve poucas atuações públicas, e arriscadas. Em 406 a.C., como membro do Conselho, opôs-se ao julgamento coletivo dos generais das Arginusas, por considerá-lo ilegal, e, sob os Trinta, recusou-se a participar da prisão de um cidadão (Platão, <i>Apologia</i> 32). Em 399 a.C. foi processado por impiedade e por corromper os jovens, condenado e morreu ao beber cicuta."
          ]
        },
        {
          id: "ideias",
          titulo: "Principais ideias",
          paragrafos: [
            "As ideias abaixo apoiam-se sobretudo nos diálogos socráticos de Platão e em Xenofonte, com confirmação parcial de Aristóteles, e devem ser lidas com a cautela explicada nas seções “Principais obras” e “Críticas e debates”. Nos diálogos da maturidade de Platão, o personagem Sócrates fala de Formas e da imortalidade da alma; essas doutrinas costumam ser atribuídas ao próprio Platão, e não ao Sócrates histórico.",
            "<b>A sabedoria humana e o reconhecimento da ignorância.</b> Na <i>Apologia</i>, Sócrates conta que seu amigo Querefonte perguntou ao oráculo de Delfos se havia alguém mais sábio que ele, e a resposta foi que não. Intrigado, Sócrates interrogou políticos, poetas e artesãos para refutar o oráculo e concluiu que todos julgavam saber o que não sabiam. Sua sabedoria, “humana”, consistia em não supor saber o que ignorava (21d). Não se trata de ceticismo total: ele afirma saber que é mau cometer injustiça e desobedecer a quem é melhor (29b).",
            "<b>O método.</b> Sócrates pergunta o que é a coragem, a piedade ou a justiça. O interlocutor responde e, por perguntas curtas, Sócrates mostra que a resposta contradiz outras crenças que ele aceita. No <i>Eutífron</i>, quem acusa o próprio pai de impiedade define o piedoso como o que é caro aos deuses; Sócrates mostra que os deuses discordam entre si e pergunta se algo é piedoso por ser amado pelos deuses ou se é amado por ser piedoso (10a). O diálogo termina sem definição. O efeito é ético: o interlocutor percebe que não sabia o que dizia, e só então pode investigar de verdade.",
            "<b>Virtude e conhecimento.</b> Nos diálogos socráticos de Platão, a virtude é uma espécie de conhecimento: saber o que é bom. Daí a tese de que ninguém faz o mal voluntariamente, pois quem age mal acredita, por ignorância, que aquilo lhe convém. Aristóteles (<i>Ética a Nicômaco</i> VII.2) atribui a Sócrates a tese de que a virtude é conhecimento e a negação da fraqueza da vontade, o que confirma o ponto por outra fonte.",
            "<b>Cuidar da alma e examinar a vida.</b> Sócrates censura os atenienses por cuidarem de riqueza e reputação e não da alma, isto é, da sensatez e da verdade (<i>Apologia</i> 29d–30b), e diz que uma vida sem exame não vale a pena ser vivida (38a). Aplica isso à própria vida: no <i>Críton</i>, recusa fugir da prisão, com o argumento de que, ao viver sob as leis de Atenas, comprometeu-se com elas, e de que não deve retribuir uma injustiça com outra."
          ]
        },
        {
          id: "conceitos",
          titulo: "Conceitos fundamentais",
          itens: [
            { termo: "Elenchus", texto: "Refutação: teste de uma tese pela coerência com outras crenças do interlocutor. Os estudiosos discutem como esse método pode levar à verdade, e não apenas revelar inconsistências." },
            { termo: "Ironia socrática", texto: "Sócrates finge ignorar para fazer o outro explicar-se, mas também é sincero ao dizer que não sabe. Para Gregory Vlastos, trata-se de uma “ironia complexa”, em que se diz uma coisa num sentido e outra noutro." },
            { termo: "Maiêutica", texto: "A imagem de Sócrates como parteira de ideias, que ajuda os outros a dar à luz seus pensamentos, vem do <i>Teeteto</i> (148e–151d), diálogo tardio de Platão; por isso é mais provável que seja uma imagem platônica do que uma autodescrição histórica." },
            { termo: "Aporia", texto: "Impasse em que o interlocutor reconhece não saber; ponto de partida e, muitas vezes, de chegada dos diálogos." },
            { termo: "Intelectualismo moral", texto: "A ideia de que a virtude é conhecimento e de que o erro moral é ignorância." },
            { termo: "Cuidado da alma", texto: "A tarefa de formar o caráter e a razão, que Sócrates põe acima da riqueza, da honra e do poder." }
          ]
        },
        {
          id: "obras",
          titulo: "Principais obras",
          paragrafos: [
            "Sócrates não escreveu livro algum, e não se deve atribuir obra alguma a ele. Seu pensamento chegou por meio de outros autores, que o retrataram de modos muito diferentes, o que origina o <b>problema socrático</b>, formulado desde o século XIX (Schleiermacher, 1815): como reconstruir o Sócrates histórico a partir de retratos com propósitos distintos? As principais fontes são:"
          ],
          itens: [
            { termo: "Aristófanes, As Nuvens (423 a.C.)", texto: "Comédia que mostra Sócrates como um excêntrico que dirige um “pensatório”, estuda os céus e ensina a vencer discussões injustas. É uma caricatura que mistura filosofia natural e sofística; Platão diz que esse retrato alimentou preconceitos contra Sócrates (<i>Apologia</i> 18b–19d)." },
            { termo: "Xenofonte", texto: "Deixou as <i>Memoráveis</i>, a <i>Apologia</i>, o <i>Banquete</i> e o <i>Econômico</i>. Seu Sócrates é piedoso e prático. Alguns estudiosos o veem como mais fiel; outros o consideram simplificado pelo propósito de defender a memória do mestre." },
            { termo: "Platão", texto: "Escreveu diálogos em que Sócrates é o protagonista. Os chamados diálogos socráticos (<i>Apologia</i>, <i>Críton</i>, <i>Eutífron</i>, <i>Laques</i>, <i>Cármides</i>, <i>Protágoras</i>) são vistos por muitos estudiosos, como Vlastos, como o retrato mais próximo do Sócrates histórico. Charles Kahn lembra, porém, que são obras literárias, e não atas, compostas com liberdade." },
            { termo: "Aristóteles", texto: "Não conheceu Sócrates, mas o menciona como alguém que buscava definições universais e usava argumentos indutivos, sem separar as Formas das coisas (<i>Metafísica</i> I.6 e XIII.4)." }
          ]
        },
        {
          id: "influencia",
          titulo: "Influência e legado",
          paragrafos: [
            "<b>Sócrates e Platão.</b> Platão foi o discípulo mais influente. Desenvolveu e transformou questões socráticas em sua própria filosofia, e seus diálogos, com Sócrates como personagem central, são a principal via de transmissão do pensamento socrático. É também por isso que se torna difícil separar o que é de um e o que é de outro: essa é a essência do problema socrático (ver <a href=\"platao.html\">Platão</a>).",
            "<b>Tradição antiga.</b> Várias escolas helenísticas reivindicaram Sócrates como modelo: os cínicos, por meio de Antístenes, seu discípulo, os <a href='../escolas/estoicismo.html'>estoicos</a>, que o viam como exemplo de sábio, e a Academia cética, que se apoiava em sua profissão de ignorância. Cícero diz que ele fez a filosofia descer do céu para a vida humana.",
            "<b>Repercussão moderna.</b> Sócrates tornou-se símbolo do pensador que prefere a verdade e a consciência à conveniência. Kierkegaard escreveu sobre a ironia socrática (1841); Nietzsche criticou o que chamou de otimismo racionalista socrático em <i>O Nascimento da Tragédia</i>; Hannah Arendt viu em Sócrates o modelo do pensar como diálogo consigo mesmo. O “método socrático” de perguntas inspira práticas de ensino e de psicoterapia, embora esses usos sejam adaptações e nem sempre fiéis ao Sócrates histórico."
          ]
        },
        {
          id: "criticas",
          titulo: "Críticas e debates",
          paragrafos: [
            "<b>As fontes.</b> A principal discussão é a do problema socrático: quanto das ideias dos diálogos platônicos é de Sócrates? Vlastos propôs separar o “Sócrates dos diálogos iniciais” do Sócrates platônico posterior; Kahn e outros duvidam de que se possa reconstruir o Sócrates histórico com tanta precisão e ressaltam o caráter literário dos textos. Também se discute por que Xenofonte e Platão o descrevem de modos tão diferentes.",
            "<b>Intelectualismo e método.</b> Aristóteles criticou a ideia de que ninguém age contra o que sabe ser melhor: a experiência da fraqueza da vontade, em que se faz o que se julga pior, parece contradizê-la. Defensores respondem que Sócrates entendia o saber como uma disposição estável, e não como uma opinião do momento. Discute-se também se o elenchus, que expõe contradições, pode estabelecer verdades (o “problema do elenchus”, formulado por Vlastos).",
            "<b>O julgamento.</b> O processo é lido de modos diferentes. Thomas Brickhouse e Nicholas Smith analisam as acusações de impiedade e de corrupção dos jovens em seu contexto religioso e cívico; I. F. Stone sustentou que a condenação teve forte motivação política, por Sócrates ser crítico da democracia e ligado a figuras odiadas, como Crítias e Alcibíades. A anistia de 403 a.C. impedia processos por atos políticos anteriores, de modo que a acusação formal foi religiosa e moral, embora o contexto político possa ter pesado.",
            "<b>Religião.</b> Discute-se o que era o <i>daimonion</i>, o sinal divino que Sócrates dizia afastá-lo de certos atos, e se sua piedade era convencional, como em Xenofonte, ou crítica das crenças tradicionais, como o julgamento parece supor."
          ]
        }
      ],
      referencias: [
        "Platão. <i>Apologia de Sócrates</i>, <i>Críton</i>, <i>Eutífron</i>, <i>Laques</i>, <i>Cármides</i>, <i>Protágoras</i>, <i>Teeteto</i>. Passagens indicadas pela numeração de Stephanus.",
        "Xenofonte. <i>Memoráveis</i>, <i>Apologia de Sócrates</i>, <i>Banquete</i>, <i>Econômico</i>. Aristófanes. <i>As Nuvens</i> (423 a.C.).",
        "Aristóteles. <i>Metafísica</i>, I.6 e XIII.4; <i>Ética a Nicômaco</i>, VII.2. Diógenes Laércio. <i>Vidas e Doutrinas dos Filósofos Ilustres</i>, livro II.",
        "Vlastos, G. <i>Socrates, Ironist and Moral Philosopher</i>. Cornell University Press, 1991.",
        "Vlastos, G. “The Socratic Elenchus”. <i>Oxford Studies in Ancient Philosophy</i> 1, 1983.",
        "Kahn, C. <i>Plato and the Socratic Dialogue</i>. Cambridge University Press, 1996.",
        "Brickhouse, T.; Smith, N. <i>Socrates on Trial</i>. Princeton University Press, 1989.",
        "Stone, I. F. <i>The Trial of Socrates</i>. Little, Brown, 1988.",
        "Morrison, D. (org.). <i>The Cambridge Companion to Socrates</i>. Cambridge University Press, 2011."
      ],
      relacionados: ["filosofo:platao", "escola:estoicismo"]
    },
    {
      slug: "platao",
      nome: "Platão",
      periodo: "c. 428/427–348/347 a.C.",
      local: "Atenas",
      resumo: "Discípulo de Sócrates e fundador da Academia, escreveu diálogos sobre conhecimento, justiça e política, como a República, nos quais Sócrates costuma ser o personagem central.",
      secoes: [
        {
          id: "contexto",
          titulo: "Contexto histórico e intelectual",
          paragrafos: [
            "Platão nasceu em Atenas, por volta de 428/427 a.C., numa família aristocrática, durante a Guerra do Peloponeso (431–404 a.C.) entre Atenas e Esparta. A derrota ateniense, o regime oligárquico dos Trinta Tiranos (404–403 a.C.), entre cujos líderes havia parentes seus, como Crítias, e a restauração da democracia marcaram sua juventude. Em 399 a.C., essa democracia condenou Sócrates à morte por impiedade e corrupção dos jovens.",
            "O ambiente intelectual incluía os sofistas, mestres de retórica que punham em dúvida padrões objetivos de justiça, e o debate herdado de Parmênides e Heráclito sobre o ser e a mudança. Sócrates, que nada escreveu, investigava com seus interlocutores o que são a justiça, a coragem e a piedade. Platão leva essas questões a uma metafísica e a uma política que, segundo muitos estudiosos, vão além do que se pode atribuir ao Sócrates histórico."
          ]
        },
        {
          id: "vida",
          titulo: "Vida e trajetória intelectual",
          paragrafos: [
            "A tradição (Diógenes Laércio; a <i>Carta VII</i>, de autenticidade discutida) diz que Platão pensava em seguir carreira política e a abandonou após a condenação de Sócrates, de quem era discípulo. Viajou à Sicília por volta de 388/387 a.C. e, de volta a Atenas, fundou a Academia (c. 387 a.C.): uma comunidade de pesquisa em matemática, dialética e política, e não uma escola no sentido moderno. Voltou a Siracusa em 367 e 361 a.C., sem êxito político. Aristóteles ingressou na Academia por volta de 367 a.C. Platão morreu por volta de 348/347 a.C.",
            "Os diálogos costumam ser divididos, com apoio em estudos de estilo, em socráticos (como a <i>Apologia</i>), de transição e maturidade (<i>Mênon</i>, <i>Fédon</i>, <i>Banquete</i>, <i>República</i>) e tardios (<i>Parmênides</i>, <i>Sofista</i>, <i>Timeu</i>, <i>Leis</i>). Os “desenvolvimentistas” veem mudanças de doutrina entre as fases; os “unitaristas”, como Charles Kahn, veem unidade, com antecipações."
          ]
        },
        {
          id: "ideias",
          titulo: "Principais ideias",
          paragrafos: [
            "Como Platão nunca fala em nome próprio nos diálogos e Sócrates costuma ser o personagem central, é prudente separar o que é de Sócrates, o que é de Platão e o que é interpretação de comentadores. As ideias abaixo são, em geral, atribuídas a Platão.",
            "<b>Teoria das Formas.</b> Para explicar como há conhecimento estável num mundo em mudança, Platão postula Formas (ou Ideias), como o Belo em si e o Justo em si: entidades inteligíveis e imutáveis das quais as coisas sensíveis “participam”. No <i>Fédon</i> e na <i>República</i>, são o objeto do verdadeiro conhecimento e o que dá sentido às definições buscadas por Sócrates.",
            "<b>Opinião e conhecimento.</b> Na <i>República</i> (V, 476–480), o conhecimento (<i>epistēmē</i>) tem por objeto o que é; a opinião (<i>doxa</i>), o que oscila entre ser e não ser. A linha dividida (VI, 509d–511e) gradua os estados da mente, da imaginação à intelecção. No <i>Mênon</i> (97a–98a), a opinião verdadeira guia a ação tão bem quanto o conhecimento, mas só este está “amarrado” pela explicação da causa. A reminiscência (<i>Mênon</i>, <i>Fédon</i>) afirma que aprender é recordar o que a alma já contemplou.",
            "<b>Alegoria da caverna.</b> (<i>República</i> VII, 514a–520a) Prisioneiros acorrentados tomam sombras por realidade; quem sai e vê o sol, imagem do Bem, deve voltar e ajudar os demais, que podem rejeitá-lo. A imagem trata a educação como conversão da alma e antecipa a hostilidade ao filósofo.",
            "<b>Alma tripartida e justiça.</b> Na <i>República</i> IV (435–444), a alma tem razão, ânimo (<i>thymos</i>) e desejo; a justiça individual é cada parte cumprir sua função sob o governo da razão, e a da cidade é análoga, entre governantes, auxiliares e produtores. A pergunta de fundo vem dos livros I e II: vale a pena ser justo mesmo sem recompensas (o anel de Giges, 359d–360b)?",
            "<b>Filósofos-reis; ética e política.</b> Se só quem conhece o Bem governa bem, as cidades só se livrarão de seus males quando filósofos governarem ou governantes filosofarem (473c–d). Para Platão, ética e política são inseparáveis: a boa cidade e a boa alma se espelham. Nas <i>Leis</i>, mais tardias, ele dá mais peso à lei do que ao governante sábio."
          ]
        },
        {
          id: "conceitos",
          titulo: "Conceitos fundamentais",
          itens: [
            { termo: "Forma (Ideia)", texto: "Realidade inteligível e imutável, como o Belo em si, que explica o que há de comum nas coisas belas e é objeto do verdadeiro conhecimento." },
            { termo: "Participação", texto: "Relação pela qual as coisas sensíveis “têm parte” nas Formas. O próprio Platão discute as dificuldades dessa noção no <i>Parmênides</i>." },
            { termo: "Epistēmē e doxa", texto: "Conhecimento, ligado ao que é, e opinião, ligada ao que muda. A distinção organiza a <i>República</i> e orienta a ideia de educação." },
            { termo: "Reminiscência", texto: "Tese de que aprender é recordar o que a alma já contemplou, apresentada no <i>Mênon</i> e no <i>Fédon</i>." },
            { termo: "Dialética", texto: "Investigação por perguntas e respostas, herdada do método de Sócrates, e, nos diálogos da maturidade, caminho do conhecimento das Formas (<i>República</i> VI–VII)." },
            { termo: "Alma tripartida", texto: "Divisão da alma em razão, ânimo e desejo, que serve de modelo para a justiça na cidade." }
          ]
        },
        {
          id: "obras",
          titulo: "Principais obras",
          paragrafos: [
            "Platão escreveu diálogos, e não tratados. A lista abaixo destaca cinco deles, entre os mais lidos e discutidos."
          ],
          itens: [
            { termo: "Apologia de Sócrates", texto: "Defesa de Sócrates no julgamento de 399 a.C.: rejeita as acusações, narra a missão que atribui ao oráculo de Delfos e afirma que a vida sem exame não vale a pena ser vivida (38a). É um discurso, e não uma conversa." },
            { termo: "Mênon", texto: "Pergunta se a virtude pode ser ensinada. Surge o “paradoxo de Mênon” (80d–e: como buscar o que não se conhece?), respondido pela reminiscência, com um escravo que descobre como dobrar a área de um quadrado (82b–85b). O diálogo termina sem resposta firme." },
            { termo: "Fédon", texto: "No último dia de Sócrates, discutem-se argumentos para a imortalidade da alma, com objeções de Símias e Cebes, e a teoria das Formas como causa. Trata da relação entre alma e corpo e da filosofia como preparação para a morte." },
            { termo: "Banquete", texto: "Discursos sobre Eros numa festa na casa de Agatão. Sócrates relata a doutrina de Diotima, uma escada do amor que vai de um belo corpo à Beleza em si (210a–212a). Alcibíades interrompe com um elogio de Sócrates." },
            { termo: "República", texto: "Dez livros: justiça na alma e na cidade (I–IV); filósofos-reis, Formas, linha e caverna (V–VII); regimes políticos degenerados (VIII–IX); crítica à poesia e mito de Er (X). Busca mostrar que a justiça vale por si e beneficia a alma." },
            { termo: "Parmênides, Sofista, Timeu e Leis", texto: "Pertencem à fase tardia. No <i>Parmênides</i>, Platão discute objeções à própria teoria das Formas, como o argumento do “terceiro homem”; nas <i>Leis</i>, dá mais peso à lei do que ao governante sábio." }
          ]
        },
        {
          id: "influencia",
          titulo: "Influência e legado",
          paragrafos: [
            "<b>Sócrates e Platão.</b> Platão foi discípulo de Sócrates, e a influência é visível na forma e nos temas: os diálogos, com Sócrates como personagem central, buscam definições de virtudes e examinam crenças por perguntas e respostas. Por isso são a principal via de transmissão do pensamento socrático. Mas Platão não é um mero registrador: é amplamente aceito que ele reelaborou e ampliou o que recebeu, e os estudiosos discutem até onde o Sócrates dos diálogos corresponde ao histórico (ver <a href=\"socrates.html\">Sócrates</a>).",
            "<b>A tradição platônica.</b> A Academia durou séculos. O <a href='../escolas/platonismo.html'><b>platonismo</b></a> inclui o platonismo antigo, a fase cética da Academia e o neoplatonismo (Plotino, século III d.C.). Aristóteles, que estudou vinte anos na Academia, desenvolveu uma filosofia própria, em parte crítica a Platão. A influência platônica chegou ao pensamento cristão e ao islâmico, e é um fio importante na história da filosofia ocidental."
          ]
        },
        {
          id: "criticas",
          titulo: "Críticas e debates",
          paragrafos: [
            "<b>Aristóteles</b> (<i>Metafísica</i> I.9; <i>Ética a Nicômaco</i> I.6) objeta que Formas separadas duplicam o mundo sem explicá-lo e que um Bem único não orienta a ação prática. O próprio Platão discute no <i>Parmênides</i> o argumento do “terceiro homem”: se uma Forma explica a semelhança entre coisas, outra seria necessária para explicar a semelhança entre a primeira e as coisas, e assim indefinidamente (ver Vlastos, 1954).",
            "<b>Política.</b> Karl Popper (<i>A Sociedade Aberta e Seus Inimigos</i>, 1945) leu a cidade ideal como totalitária, por causa do controle da educação, da censura da poesia e da “nobre mentira”. Julia Annas, entre outros, sustenta que o projeto político serve sobretudo para esclarecer a justiça da alma. Outros o tomam como proposta séria. Também se criticam a rígida hierarquia entre as classes e o lugar dos trabalhadores.",
            "<b>Como ler os diálogos.</b> Platão nunca fala neles em nome próprio, o que gera disputa: doutrina sistemática, investigação aberta, ou textos dramáticos e irônicos (leitura associada a Leo Strauss). A chamada escola de Tübingen defende que o núcleo de sua doutrina estaria em ensinamentos não escritos, aos quais Aristóteles alude; a tese é contestada."
          ]
        }
      ],
      referencias: [
        "Platão. <i>Apologia de Sócrates</i>, <i>Mênon</i>, <i>Fédon</i>, <i>Banquete</i>, <i>República</i>, <i>Parmênides</i>, <i>Leis</i>; <i>Carta VII</i> (autenticidade discutida). Passagens indicadas pela numeração de Stephanus.",
        "Aristóteles. <i>Metafísica</i>, I.9; <i>Ética a Nicômaco</i>, I.6.",
        "Diógenes Laércio. <i>Vidas e Doutrinas dos Filósofos Ilustres</i>, livro III.",
        "Vlastos, G. “The Third Man Argument in the Parmenides”. <i>Philosophical Review</i> 63, 1954.",
        "Vlastos, G. <i>Socrates, Ironist and Moral Philosopher</i>. Cornell University Press, 1991.",
        "Annas, J. <i>An Introduction to Plato’s Republic</i>. Oxford University Press, 1981.",
        "Kahn, C. <i>Plato and the Socratic Dialogue</i>. Cambridge University Press, 1996.",
        "Popper, K. <i>The Open Society and Its Enemies</i>, vol. 1, 1945."
      ],
      relacionados: ["filosofo:socrates", "escola:platonismo"]
    }
  ];
})((window.PalasAtena = window.PalasAtena || {}));
