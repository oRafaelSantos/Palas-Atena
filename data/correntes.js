/*
 * correntes.js — conteúdo dos verbetes de correntes filosóficas.
 * Usa o mesmo formato de data/filosofos.js e data/escolas.js (veja o comentário no topo de filosofos.js).
 * Referências a outros verbetes: "relacionados" aceita "colecao:slug" (ex.: "corrente:empirismo").
 * Links dentro dos textos são relativos a pages/correntes/ (ex.: ../filosofos/platao.html).
 *
 * Os pensadores citados nos textos (Descartes, Spinoza, Leibniz, Locke, Berkeley, Hume, Montesquieu,
 * Voltaire, Rousseau, Diderot, Kant) ainda não têm verbete próprio; por isso aparecem sem link.
 * Quando forem cadastrados em data/filosofos.js, os links devem ser acrescentados aqui.
 */
(function (ns) {
  "use strict";

  ns.data = ns.data || {};

  ns.data.correntes = [
    {
      slug: "racionalismo",
      nome: "Racionalismo",
      periodo: "séc. XVII–XVIII",
      local: "Europa continental",
      resumo: "Orientação epistemológica da filosofia moderna que atribui à razão papel fundamental na aquisição e na justificação do conhecimento, associada sobretudo a Descartes, Spinoza e Leibniz.",
      secoes: [
        {
          id: "origem",
          titulo: "Origem e contexto histórico",
          paragrafos: [
            "O racionalismo moderno surge no século XVII, num cenário de rupturas. A Reforma e as guerras de religião, que culminaram na Guerra dos Trinta Anos (1618–1648), abalaram a confiança nas autoridades que antes garantiam o saber e a fé. O ceticismo antigo, redescoberto a partir do século XVI por autores como Montaigne e pela circulação dos textos de Sexto Empírico, levantava a dúvida sobre se é possível conhecer algo com segurança. Ao mesmo tempo, a Revolução Científica (Copérnico, Kepler, Galileu) mostrava a força da matemática para descrever a natureza e punha em xeque a física aristotélico-escolástica ensinada nas universidades (ver <a href='../escolas/aristotelismo.html'>Aristotelismo</a>).",
            "Os três nomes centrais viveram em contextos distintos. René Descartes (1596–1650), francês, passou boa parte da vida nos Países Baixos e buscou um fundamento seguro para o conhecimento e uma nova física. Baruch Spinoza (1632–1677) nasceu em Amsterdã, numa família judaica de origem portuguesa, foi expulso de sua comunidade em 1656 e ganhou a vida polindo lentes. Gottfried Wilhelm Leibniz (1646–1716), alemão, foi também jurista, diplomata e bibliotecário, e criou o cálculo infinitesimal de modo independente de Newton.",
            "“Racionalismo” é, porém, um rótulo posterior, que agrupa autores que não formavam uma escola nem se descreviam assim, e que divergem em pontos centrais. O contraste com o empirismo (ver <a href='empirismo.html'>Empirismo</a>) consolidou-se em histórias da filosofia dos séculos XVIII e XIX e é uma simplificação útil, mas incompleta: Descartes, Spinoza e Leibniz também deram lugar à experiência em suas ciências, e Locke, Berkeley e Hume partilhavam com eles problemas e vocabulário."
          ]
        },
        {
          id: "fundamentos",
          titulo: "Fundamentos filosóficos",
          paragrafos: [
            "O problema que orienta a corrente é epistemológico: o que podemos conhecer com certeza, e o que justifica nossas crenças? Os racionalistas respondem atribuindo à razão papel fundamental na aquisição e na justificação do conhecimento. Segundo caracterizações consolidadas na literatura (como a do verbete “Rationalism vs. Empiricism”, da <i>Stanford Encyclopedia of Philosophy</i>), isso pode envolver, em graus variados, três ideias: que há verdades acessíveis por intuição e dedução, e não só pela experiência sensível; que alguma parte do conhecimento é inata à mente; e que certos conceitos não derivam da experiência. Cada autor adere a elas em medidas diferentes.",
            "Isso não equivale a negar toda importância à experiência. Descartes valoriza a experimentação na física, e Leibniz admite que as “verdades de fato”, contingentes, são em geral conhecidas por meio da experiência. A diferença está em onde se busca o fundamento e no que se considera conhecimento em sentido forte.",
            "Outro traço comum, também com variações, é o ideal de conhecimento como demonstração, inspirado na matemática: partir de princípios evidentes e deduzir conclusões necessárias. Daí a ligação estreita entre matemática, metafísica e epistemologia: a metafísica (o que são a substância, Deus, a mente) deve ser tratada com o rigor de uma demonstração, e a certeza matemática serve de modelo para o saber em geral.",
            "Há ainda a confiança de que o real é, em princípio, inteligível. Leibniz a formula como princípio de razão suficiente: nada ocorre sem uma razão pela qual é assim e não de outro modo. Spinoza vai mais longe e sustenta que a ordem e a conexão das ideias são as mesmas das coisas, ligadas por necessidade."
          ]
        },
        {
          id: "ideias",
          titulo: "Principais ideias e conceitos",
          itens: [
            { termo: "Intuição, dedução e ideias claras e distintas", texto: "Nas <i>Regras para a Direção do Espírito</i> (compostas por volta de 1628 e publicadas depois da morte do autor), Descartes distingue a intuição, apreensão imediata de uma verdade, e a dedução, encadeamento de intuições. Ideias “claras e distintas” são, em seu critério, as que se impõem ao entendimento sem confusão. O alcance desse critério é muito discutido." },
            { termo: "Dúvida metódica e cogito", texto: "Nas <i>Meditações</i>, Descartes leva a dúvida ao extremo (a dúvida hiperbólica, com a hipótese de um gênio maligno), não para duvidar por duvidar, mas para encontrar uma verdade que resista a ela: a existência de quem duvida e pensa. A fórmula “penso, logo existo” aparece no <i>Discurso do Método</i> (IV) e nos <i>Princípios</i> (I.7), e não literalmente nas <i>Meditações</i>. É o ponto de partida para reconstruir o conhecimento, passando pela existência de Deus e pela garantia das ideias claras e distintas." },
            { termo: "Ideias inatas", texto: "Descartes sustenta que há ideias, como as de Deus, da mente e das verdades matemáticas, que não vêm dos sentidos. “Inato”, em seus textos, não significa pensamento já consciente ao nascer, e sim uma disposição da mente (<i>Notas contra um Programa</i>, 1648). Leibniz acentua essa leitura: compara as ideias inatas aos veios de um bloco de mármore, que predispõem a forma sem esculpi-la sozinhos (<i>Novos Ensaios</i>, Prefácio), e responde ao lema empirista de que nada está no intelecto sem ter passado pelos sentidos acrescentando: exceto o próprio intelecto (II.1). Spinoza dá pouco peso à linguagem das ideias inatas e destaca as “noções comuns” e o conhecimento intuitivo (<i>Ética</i>, II)." },
            { termo: "Uma substância, duas ou infinitas", texto: "Descartes admite duas substâncias criadas, a mente (pensamento) e o corpo (extensão), além de Deus: é o dualismo. Spinoza sustenta que há uma só substância, “Deus, ou seja, a Natureza” (<i>Ética</i>, I e IV, Prefácio), da qual o pensamento e a extensão são atributos, e a mente e o corpo, modos desses atributos: é o monismo. Leibniz propõe uma infinidade de substâncias simples, as mônadas, sem partes e sem ação causal recíproca, cuja concordância seria explicada pela “harmonia preestabelecida” (<i>Monadologia</i>)." },
            { termo: "Método geométrico", texto: "A <i>Ética</i> de Spinoza é “demonstrada em ordem geométrica”: parte de definições e axiomas e deduz proposições, como em Euclides. Descartes, nas respostas às <i>Segundas Objeções</i>, distingue a análise (caminho da descoberta) da síntese (exposição ordenada) e apresenta uma exposição sintética de suas razões." },
            { termo: "Verdades de razão, verdades de fato e razão suficiente", texto: "Para Leibniz, as verdades de razão (como as da matemática) são necessárias, e seu contrário é impossível. Leibniz admite que as “verdades de fato” são contingentes e, em geral, conhecidas por meio da experiência. Diferentemente das verdades de razão, elas não podem ser demonstradas por nós por uma análise finita, embora também estejam submetidas ao princípio de razão suficiente (<i>Monadologia</i>, §§ 31–33). Leibniz sustenta ainda que o mundo atual é o melhor dos possíveis, tese tratada na <i>Teodiceia</i> e alvo de críticas e sátiras (ver “Críticas e debates”)." },
            { termo: "Graus de conhecimento em Spinoza", texto: "Na <i>Ética</i> (II, prop. 40, escólio 2), Spinoza distingue três gêneros de conhecimento: a opinião ou imaginação, que inclui a experiência dispersa; a razão, que opera por noções comuns; e a ciência intuitiva, que apreende as coisas a partir da natureza de Deus. O esquema mostra que seu racionalismo não despreza a experiência, mas a subordina." }
          ]
        },
        {
          id: "representantes",
          titulo: "Principais representantes",
          itens: [
            { termo: "René Descartes (1596–1650)", texto: "Figura central do racionalismo moderno. Buscou um fundamento seguro para o conhecimento por meio da dúvida metódica, defendeu o dualismo entre mente e corpo e uma física mecanicista. Suas teses suscitaram objeções de contemporâneos, como Arnauld, Gassendi, Hobbes e Elisabeth da Boêmia, que ajudaram a definir os problemas da filosofia moderna." },
            { termo: "Baruch Spinoza (1632–1677)", texto: "Desenvolveu um sistema monista e determinista, exposto em ordem geométrica, e uma crítica histórica da Bíblia no <i>Tratado Teológico-Político</i>. É racionalista no método, mas diverge de Descartes na metafísica e rejeita o livre-arbítrio entendido como indeterminação." },
            { termo: "Gottfried Wilhelm Leibniz (1646–1716)", texto: "Sustentou uma metafísica de substâncias simples e o princípio de razão suficiente, e fez contribuições decisivas à lógica e à matemática. Foi o interlocutor mais direto de Locke entre os racionalistas, nos <i>Novos Ensaios</i>." },
            { termo: "Platão e o platonismo: afinidade, e não filiação", texto: "A reminiscência platônica e a ideia de um conhecimento inteligível servem de ponto de comparação para o inatismo racionalista, e Leibniz discute a reminiscência nos <i>Novos Ensaios</i>. Convém, porém, distinguir afinidade conceitual de filiação histórica: Descartes não se apresentava como platônico, e o racionalismo moderno responde a problemas próprios do século XVII (ver <a href='../filosofos/platao.html'>Platão</a> e <a href='../escolas/platonismo.html'>Platonismo</a>)." }
          ]
        },
        {
          id: "obras",
          titulo: "Obras e fontes fundamentais",
          itens: [
            { termo: "Descartes, Discurso do Método (1637)", texto: "Expõe o método e a trajetória intelectual do autor. Foi publicado em francês, com ensaios científicos (<i>Dióptrica</i>, <i>Meteoros</i> e <i>Geometria</i>)." },
            { termo: "Descartes, Meditações Metafísicas (1641)", texto: "Obra central: dúvida, cogito, existência de Deus e distinção entre mente e corpo. A edição inclui objeções de contemporâneos e as respostas do autor, indispensáveis para entender o debate." },
            { termo: "Descartes, Princípios da Filosofia (1644)", texto: "Sistematiza a metafísica e a física cartesianas, na forma de um manual." },
            { termo: "Spinoza, Ética (publicada em 1677, após sua morte)", texto: "Obra principal: Deus, a mente, os afetos, a servidão e a liberdade humanas, em ordem geométrica." },
            { termo: "Spinoza, Tratado Teológico-Político (1670)", texto: "Publicado sem o nome do autor, defende a liberdade de pensar e propõe uma leitura histórica e crítica da Bíblia." },
            { termo: "Leibniz, Discurso de Metafísica (1686)", texto: "Resumo de sua metafísica, escrito em 1686 e publicado só no século XIX." },
            { termo: "Leibniz, Novos Ensaios sobre o Entendimento Humano", texto: "Resposta, capítulo por capítulo, ao <i>Ensaio</i> de Locke (ver <a href='empirismo.html'>Empirismo</a>). Foi concluído por volta de 1704 e publicado em 1765." },
            { termo: "Leibniz, Teodiceia (1710) e Monadologia (1714)", texto: "A <i>Teodiceia</i> trata do problema do mal e do melhor dos mundos possíveis; a <i>Monadologia</i>, escrita em 1714 e publicada em 1720, resume sua metafísica em proposições breves." }
          ]
        },
        {
          id: "desenvolvimento",
          titulo: "Desenvolvimento histórico",
          paragrafos: [
            "<b>Cartesianismo e polêmicas.</b> As ideias de Descartes foram debatidas ainda em vida e encontraram acolhida em universidades dos Países Baixos e em círculos como o de Port-Royal, mas também resistência de teólogos e de autoridades acadêmicas. Nicolas Malebranche (1638–1715) desenvolveu o legado cartesiano em direção ao ocasionalismo, segundo o qual só Deus é causa verdadeira.",
            "<b>O escândalo espinosano.</b> Spinoza foi condenado por muitos contemporâneos como ateu e perigoso, e “espinosismo” tornou-se ao mesmo tempo insulto e bandeira. Em 1785, a controvérsia entre Jacobi e Mendelssohn sobre o suposto espinosismo de Lessing reabriu o debate na Alemanha e levou o pensamento de Spinoza à cultura filosófica do período seguinte.",
            "<b>Leibniz e a escola alemã.</b> No século XVIII, a filosofia de Leibniz, sistematizada por Christian Wolff (1679–1754), dominou o ensino universitário alemão. Em geral, essa forma escolar era mais sistemática e dogmática do que a do próprio Leibniz, e foi ela que Kant tinha em vista ao criticar o “dogmatismo” racionalista.",
            "<b>Kant.</b> Na <i>Crítica da Razão Pura</i> (1781), Kant sustentou que a razão pura não pode conhecer Deus, a alma e o mundo como totalidade para além da experiência possível. Sustentou também que o conhecimento exige estruturas a priori que a experiência sozinha não fornece, retendo algo do racionalismo e do empirismo (ver <a href='iluminismo.html'>Iluminismo</a>).",
            "<b>Retomadas.</b> No século XX, o termo voltou ao debate em outros contextos. Noam Chomsky, em <i>Linguística Cartesiana</i> (1966), apresentou sua teoria linguística como herdeira do inatismo racionalista, leitura que historiadores da filosofia contestam em vários pontos."
          ]
        },
        {
          id: "influencia",
          titulo: "Influência e legado",
          paragrafos: [
            "<b>Matemática e lógica.</b> A <i>Geometria</i> de Descartes (1637) liga álgebra e geometria e está na origem da geometria analítica. Leibniz desenvolveu o cálculo infinitesimal e concebeu o projeto de uma linguagem formal para o raciocínio, antecipando temas da lógica moderna.",
            "<b>Mente e metafísica.</b> A distinção entre mente e corpo e o problema de sua interação, levantado na correspondência de Descartes com Elisabeth da Boêmia, permanecem centrais na filosofia da mente. Spinoza e Leibniz influenciaram os debates sobre substância, causalidade, modalidade e liberdade.",
            "<b>Religião e política.</b> O <i>Tratado Teológico-Político</i> tornou-se referência da crítica bíblica e do debate sobre a liberdade de pensamento. Os historiadores discutem o peso de Spinoza no chamado Iluminismo radical (ver <a href='iluminismo.html'>Iluminismo</a>).",
            "<b>Ciência.</b> A física mecanicista de Descartes foi influente no século XVII e depois superada pela de Newton, mas o ideal de explicar fenômenos por causas mecânicas marcou a ciência nascente.",
            "<b>Debates atuais.</b> As discussões contemporâneas sobre o inatismo em linguística e ciência cognitiva, e sobre o conhecimento a priori, retomam, em termos novos, problemas colocados pelos racionalistas."
          ]
        },
        {
          id: "criticas",
          titulo: "Críticas e debates",
          paragrafos: [
            "<b>Críticas empiristas e kantianas.</b> Locke rejeitou a existência de princípios inatos, e Hume contestou que a razão estabeleça por si só conexões necessárias entre fatos (ver <a href='empirismo.html'>Empirismo</a>). Kant, por sua vez, considerou que a metafísica racionalista ultrapassa os limites da experiência possível, o que o levou a propor a filosofia crítica.",
            "<b>Problemas internos.</b> Arnauld observou que Descartes parece provar a existência de Deus pela clareza das ideias e garantir a clareza das ideias por Deus, o chamado “círculo cartesiano”; discute-se se a objeção é decisiva e se Descartes tem uma resposta. A interação entre mente e corpo, questionada por Elisabeth da Boêmia, continua sendo o problema clássico do dualismo. O monismo e o determinismo de Spinoza foram acusados de fatalismo e de ateísmo, e a harmonia preestabelecida de Leibniz parece a alguns uma solução construída ad hoc. A tese do melhor dos mundos foi satirizada por Voltaire no <i>Cândido</i> (1759), e discute-se se a sátira atinge a posição de Leibniz.",
            "<b>A própria categoria.</b> Historiadores como Louis Loeb (1981) mostraram que a narrativa de um confronto simples entre racionalistas e empiristas esconde continuidades e problemas partilhados. Por isso muitos estudiosos tratam “racionalismo” como rótulo de conveniência, que não deve apagar as diferenças entre Descartes, Spinoza e Leibniz."
          ]
        }
      ],
      referencias: [
        "Descartes, R. <i>Regras para a Direção do Espírito</i> (c. 1628); <i>Discurso do Método</i> (1637); <i>Meditações Metafísicas</i> (1641), com Objeções e Respostas; <i>Princípios da Filosofia</i> (1644); <i>Notas contra um Programa</i> (1648). Edição de referência: Adam, C.; Tannery, P. (orgs.), <i>Oeuvres de Descartes</i>, 1897–1913.",
        "Spinoza, B. de. <i>Tratado Teológico-Político</i> (1670); <i>Ética</i> (1677).",
        "Leibniz, G. W. <i>Discurso de Metafísica</i> (1686); <i>Teodiceia</i> (1710); <i>Monadologia</i> (1714); <i>Novos Ensaios sobre o Entendimento Humano</i> (publicado em 1765). Malebranche, N. <i>A Busca da Verdade</i> (1674–1675).",
        "Kant, I. <i>Crítica da Razão Pura</i> (1781, 2ª ed. 1787).",
        "Markie, P.; Folescu, M. “Rationalism vs. Empiricism”. Em: <i>Stanford Encyclopedia of Philosophy</i> (verbete; consultar a edição vigente).",
        "Cottingham, J. <i>The Rationalists</i>. Oxford University Press, 1988.",
        "Garber, D.; Ayers, M. (orgs.). <i>The Cambridge History of Seventeenth-Century Philosophy</i>. Cambridge University Press, 1998.",
        "Loeb, L. <i>From Descartes to Hume: Continental Metaphysics and the Development of Modern Philosophy</i>. Cornell University Press, 1981.",
        "Gaukroger, S. <i>Descartes: An Intellectual Biography</i>. Oxford University Press, 1995.",
        "Nadler, S. <i>Spinoza: A Life</i>. Cambridge University Press, 1999.",
        "Jolley, N. <i>Leibniz</i>. Routledge, 2005.",
        "Chomsky, N. <i>Cartesian Linguistics</i>. Harper &amp; Row, 1966."
      ],
      relacionados: ["corrente:empirismo", "corrente:iluminismo", "escola:aristotelismo", "escola:platonismo", "filosofo:platao"]
    },
    {
      slug: "empirismo",
      nome: "Empirismo",
      periodo: "séc. XVII–XVIII",
      local: "Ilhas Britânicas",
      resumo: "Orientação da filosofia moderna que vê na experiência a origem ou o limite do conhecimento, associada a Locke, Berkeley e Hume, cujas posições divergem muito entre si.",
      secoes: [
        {
          id: "origem",
          titulo: "Origem e contexto histórico",
          paragrafos: [
            "O empirismo moderno se desenvolve nas Ilhas Britânicas, sobretudo entre o fim do século XVII e o século XVIII. O cenário é o da Revolução Científica inglesa: a Royal Society, fundada em 1660, promovia a pesquisa experimental, e os <i>Principia</i> de Newton (1687) deram à física um modelo de êxito baseado em observação e matemática. Francis Bacon (1561–1626), no <i>Novum Organum</i> (1620), já havia defendido a investigação metódica da natureza a partir da observação e da experimentação. É costume vê-lo como precursor, embora não seja um empirista no sentido estrito dos três autores centrais.",
            "O cenário político também pesou: a guerra civil, a Restauração e a Revolução Gloriosa (1688–1689) alimentaram debates sobre autoridade, religião e tolerância, que Locke enfrentou ao lado de sua teoria do conhecimento. No plano intelectual, o alvo imediato eram as doutrinas das ideias inatas, defendidas por cartesianos e pelos platônicos de Cambridge, e a herança da escolástica (ver <a href='../escolas/aristotelismo.html'>Aristotelismo</a>). Há uma ironia histórica: a máxima de que nada está no intelecto sem ter passado antes pelos sentidos é de origem escolástica, de inspiração aristotélica. Os empiristas modernos a retomam, mas a inserem numa teoria das ideias e numa ciência corpuscular que a escolástica não admitia.",
            "“Empirismo” designa aqui um grupo de pensadores, Locke, Berkeley e Hume, que a tradição historiográfica reuniu e contrapôs ao racionalismo (ver <a href='racionalismo.html'>Racionalismo</a>). Eles não formaram escola, e suas posições divergem tanto que parte do trabalho dos historiadores é mostrar o que os une e o que os separa."
          ]
        },
        {
          id: "fundamentos",
          titulo: "Fundamentos filosóficos",
          paragrafos: [
            "O problema comum é o da origem e dos limites do conhecimento. O empirista sustenta que a experiência, tanto a sensível, ligada aos sentidos externos, quanto a reflexiva, ligada à percepção das operações da própria mente, é a fonte ou o limite do que podemos conhecer e dos conceitos que podemos formar. Os autores, porém, não partilham exatamente a mesma teoria da experiência, como se verá adiante. Convém separar duas versões dessa ideia: uma tese sobre a origem das ideias (todas as nossas ideias derivam, direta ou indiretamente, da experiência) e outra sobre a justificação do conhecimento (as crenças sobre o mundo só se justificam pela experiência). Os autores aceitam essas teses em graus diferentes.",
            "O empirismo não é uma recusa da razão. Locke admite conhecimento demonstrativo, inclusive em matemática e, segundo ele, na moral e na existência de Deus. Hume reconhece que a matemática trata de relações entre ideias, que a razão examina. O que muda é o alcance: para os empiristas, a razão trabalha sobre material fornecido pela experiência e não alcança certas verdades que os racionalistas pretendiam demonstrar.",
            "O programa traz um problema: se tudo vem da experiência, o que garante aquilo que parece estar além dela, como a matéria, a causa, o eu e Deus? As respostas a essa pergunta são o que mais separa Locke, Berkeley e Hume."
          ]
        },
        {
          id: "ideias",
          titulo: "Principais ideias e conceitos",
          itens: [
            { termo: "Sensação e reflexão (Locke)", texto: "No livro II do <i>Ensaio</i>, Locke descreve a mente, no início, como um papel em branco (“tábula rasa” é um rótulo tradicional, e não uma expressão sua). Todas as ideias viriam da experiência por duas fontes: a sensação (ideias dos sentidos externos, como cor e dureza) e a reflexão (ideias das operações da própria mente, como lembrar e duvidar). As ideias simples são recebidas passivamente; as complexas são formadas pela mente, por combinação, comparação e abstração." },
            { termo: "Crítica às ideias inatas (Locke)", texto: "No livro I do <i>Ensaio</i>, Locke argumenta que não há princípios inatos, pois não há assentimento universal a eles, e que, mesmo se houvesse, isso não provaria que são inatos. O alvo exato é discutido, e parte da crítica atinge versões mais fortes do inatismo do que a de Descartes (ver <a href='racionalismo.html'>Racionalismo</a>)." },
            { termo: "Qualidades primárias e secundárias; substância (Locke)", texto: "Seguindo a ciência corpuscular, Locke distingue qualidades primárias (extensão, figura, movimento), que existem nos corpos, de qualidades secundárias (cor, sabor), que são poderes de produzir sensações em nós. Quanto à substância, admite que temos apenas uma noção obscura de um suporte desconhecido das qualidades." },
            { termo: "Imaterialismo (Berkeley)", texto: "Berkeley aceita que o conhecimento vem da experiência, mas considera incoerente a ideia de uma matéria independente da percepção: o que percebemos são ideias, e uma ideia só pode assemelhar-se a outra ideia. Daí a fórmula de que, para as coisas sensíveis, ser é ser percebido (<i>esse est percipi</i>), enquanto os espíritos são o que percebe e age. Berkeley não nega a realidade das coisas que vemos e tocamos: nega que sejam substâncias materiais. Para ele, Deus sustenta a ordem das ideias." },
            { termo: "Impressões e ideias (Hume)", texto: "No <i>Tratado</i>, Hume divide as percepções da mente em impressões (sensações e sentimentos vivos) e ideias (cópias menos vívidas das impressões). O princípio da cópia afirma, como regra geral, que toda ideia simples deriva de uma impressão correspondente. Hume reconhece uma exceção possível: o caso da tonalidade ausente de azul, em que alguém poderia formar mentalmente uma tonalidade nunca percebida. Ele considera, porém, que esse caso é particular demais para abandonar o princípio geral. O princípio serve de teste: uma ideia sem impressão correspondente é suspeita." },
            { termo: "Causalidade e indução (Hume)", texto: "Não percebemos, entre causa e efeito, uma ligação necessária: vemos apenas eventos que se sucedem com regularidade. Hume pergunta o que nos autoriza a esperar que o futuro se pareça com o passado e conclui que essa inferência não é demonstrativa e não se apoia em raciocínio que já não a pressuponha. Ela se explica pelo hábito (<i>Investigação</i>, IV–V). “Problema da indução” é uma formulação posterior dessa dificuldade. Hume não conclui que devemos deixar de inferir: sustenta que a natureza humana nos leva a isso." },
            { termo: "Limites do conhecimento", texto: "Em Locke, os limites aparecem sobretudo na tese de que não conhecemos as essências reais das substâncias, apenas suas propriedades observáveis (<i>Ensaio</i>, III). Em Hume, aparecem na crítica da ideia de um eu idêntico, que ele vê como um feixe de percepções (<i>Tratado</i>, I.4.6), e na análise dos milagres e da religião natural (<i>Investigação</i>, X)." }
          ]
        },
        {
          id: "representantes",
          titulo: "Principais representantes",
          itens: [
            { termo: "John Locke (1632–1704)", texto: "Autor do <i>Ensaio sobre o Entendimento Humano</i>, formulou o programa de derivar as ideias da experiência e investigou os limites do conhecimento. É também figura central do pensamento político moderno (governo por consentimento, direitos naturais, tolerância), o que o liga ao Iluminismo (ver <a href='iluminismo.html'>Iluminismo</a>). Em relação a Descartes, é interlocutor crítico: rejeita o inatismo, mas partilha com ele o vocabulário das “ideias” e a ciência corpuscular, de modo que a relação não é de simples oposição." },
            { termo: "George Berkeley (1685–1753)", texto: "Filósofo irlandês e bispo anglicano. Partiu de premissas lockianas para negar a existência de matéria independente da percepção, em defesa de uma visão espiritualista que via como antídoto contra o ceticismo e o ateísmo." },
            { termo: "David Hume (1711–1776)", texto: "Filósofo escocês que levou o programa empirista a suas consequências mais severas, com a análise da causalidade, do eu e da religião. É também figura do Iluminismo escocês, o que não faz dele simples “iluminista”: suas relações com o movimento são complexas (ver <a href='iluminismo.html'>Iluminismo</a>)." },
            { termo: "Francis Bacon (1561–1626): precursor", texto: "Defensor da observação e da experimentação metódica, é visto como antecedente do espírito empirista, e não como membro do grupo." }
          ]
        },
        {
          id: "obras",
          titulo: "Obras e fontes fundamentais",
          itens: [
            { termo: "Bacon, Novum Organum (1620)", texto: "Propõe um método de investigação da natureza baseado na observação e na experimentação, em oposição ao aristotelismo escolástico." },
            { termo: "Locke, Ensaio sobre o Entendimento Humano (1689, datado de 1690)", texto: "Obra fundadora: origem das ideias, crítica do inatismo, linguagem e limites do conhecimento." },
            { termo: "Berkeley, Ensaio para uma Nova Teoria da Visão (1709) e Princípios do Conhecimento Humano (1710)", texto: "O primeiro analisa a percepção visual da distância; o segundo expõe o imaterialismo." },
            { termo: "Berkeley, Três Diálogos entre Hylas e Philonous (1713)", texto: "Apresentação em forma de diálogo, mais acessível, do imaterialismo e das respostas às objeções." },
            { termo: "Hume, Tratado da Natureza Humana (1739–1740)", texto: "Obra juvenil e mais extensa: entendimento, paixões e moral." },
            { termo: "Hume, Investigação sobre o Entendimento Humano (1748)", texto: "Reelaboração mais curta e acessível da parte epistemológica do <i>Tratado</i>, com a análise da causalidade e dos milagres." },
            { termo: "Hume, Diálogos sobre a Religião Natural (publicados em 1779)", texto: "Publicados depois da morte do autor, discutem os argumentos sobre a existência e a natureza de Deus." },
            { termo: "Leibniz, Novos Ensaios sobre o Entendimento Humano", texto: "Resposta racionalista ao <i>Ensaio</i> de Locke, importante para ver os pontos de discordância (ver <a href='racionalismo.html'>Racionalismo</a>)." }
          ]
        },
        {
          id: "desenvolvimento",
          titulo: "Desenvolvimento histórico",
          paragrafos: [
            "<b>De Locke a Berkeley e Hume.</b> O <i>Ensaio</i> de Locke criou o quadro de problemas que os dois seguintes retomaram. Berkeley (1710) usou distinções lockianas para atacar a noção de matéria; Hume (1739–1740) levou adiante a análise da origem das ideias e dela extraiu conclusões céticas sobre a causa, o eu e a religião natural. Não se trata de uma radicalização em linha reta: cada um tinha motivações próprias, e Berkeley, por exemplo, escrevia contra o ceticismo.",
            "<b>Reações.</b> Leibniz respondeu a Locke nos <i>Novos Ensaios</i> (escritos por volta de 1704 e publicados em 1765). Na Escócia, Thomas Reid reagiu a Hume com a filosofia do senso comum. Kant disse que a leitura de Hume o despertou do “sono dogmático” (<i>Prolegômenos</i>) e procurou mostrar que a experiência pressupõe estruturas a priori (ver <a href='iluminismo.html'>Iluminismo</a>).",
            "<b>Circulação na Europa.</b> Voltaire divulgou Locke e Newton nas <i>Cartas Filosóficas</i> (1734), e Condillac, no <i>Ensaio sobre a Origem dos Conhecimentos Humanos</i> (1746), desenvolveu uma versão mais radical, que deriva todas as faculdades da sensação. Essas apropriações transformaram as ideias originais.",
            "<b>Séculos XIX e XX.</b> No século XIX, John Stuart Mill desenvolveu um empirismo sobre a lógica e a ciência. No século XX, o empirismo lógico do Círculo de Viena reivindicou Hume como ancestral, e Quine, em “Dois Dogmas do Empirismo” (1951), criticou pressupostos desse programa e propôs um empirismo revisto."
          ]
        },
        {
          id: "influencia",
          titulo: "Influência e legado",
          paragrafos: [
            "<b>Ciência e método.</b> A ênfase na observação e na experiência aproximou o empirismo da ciência experimental, embora os historiadores discutam o quanto a prática científica dependeu de teorias filosóficas.",
            "<b>Psicologia.</b> As leis de associação de ideias, formuladas por Hume (semelhança, contiguidade e causa e efeito), alimentaram o associacionismo psicológico dos séculos seguintes.",
            "<b>Filosofia da ciência.</b> A análise de Hume sobre a indução permanece como problema central: Karl Popper, na <i>Lógica da Pesquisa Científica</i> (1934), propôs uma resposta própria a ele.",
            "<b>Mente, política e educação.</b> A discussão de Locke e de Hume sobre a identidade pessoal ainda informa a filosofia da mente. Locke também escreveu sobre educação (<i>Alguns Pensamentos sobre a Educação</i>, 1693), e seu pensamento político influenciou o Iluminismo (ver <a href='iluminismo.html'>Iluminismo</a>)."
          ]
        },
        {
          id: "criticas",
          titulo: "Críticas e debates",
          paragrafos: [
            "<b>Críticas racionalistas e kantianas.</b> Leibniz sustentou que há conhecimento e princípios que não vêm dos sentidos. Kant defendeu que a experiência já pressupõe formas a priori da sensibilidade e categorias do entendimento, o que desafia a tese de que tudo vem da experiência. Reid sustentou que a teoria das ideias leva ao ceticismo e que o senso comum oferece um ponto de partida mais firme.",
            "<b>Como ler Hume.</b> Discute-se se Hume é um cético, um naturalista que explica a crença por mecanismos psicológicos, ou, como na leitura associada à chamada “nova interpretação de Hume” (Galen Strawson), alguém que não nega a existência de conexões causais reais, apenas nosso acesso a elas. Norman Kemp Smith, no século XX, destacou o lado naturalista. O próprio Hume avaliou que os argumentos de Berkeley não admitem refutação e não produzem convicção (<i>Investigação</i>, XII).",
            "<b>Status do princípio empirista.</b> Uma objeção recorrente pergunta se a tese de que todo conhecimento vem da experiência é ela mesma fundada na experiência. Quine e outros reformularam o empirismo para evitar essa dificuldade.",
            "<b>A própria categoria.</b> Os estudiosos observam que a fronteira com o racionalismo é menos nítida do que o rótulo sugere: Locke admite conhecimento demonstrativo, e a linguagem das “ideias” é comum a cartesianos e empiristas. Também se discute se Berkeley, que nega a matéria, deve ser descrito como empirista ou idealista, e as respostas dependem do que se entende por cada termo."
          ]
        }
      ],
      referencias: [
        "Bacon, F. <i>Novum Organum</i> (1620). Locke, J. <i>An Essay Concerning Human Understanding</i> (1689/1690), ed. P. H. Nidditch. Oxford University Press, 1975.",
        "Berkeley, G. <i>A New Theory of Vision</i> (1709); <i>A Treatise Concerning the Principles of Human Knowledge</i> (1710); <i>Three Dialogues between Hylas and Philonous</i> (1713).",
        "Hume, D. <i>A Treatise of Human Nature</i> (1739–1740), ed. D. F. Norton e M. J. Norton. Oxford University Press, 2000. <i>An Enquiry Concerning Human Understanding</i> (1748), ed. T. L. Beauchamp. Oxford University Press, 1999.",
        "Leibniz, G. W. <i>Novos Ensaios sobre o Entendimento Humano</i> (publicado em 1765). Kant, I. <i>Prolegômenos a Toda Metafísica Futura</i> (1783).",
        "Markie, P.; Folescu, M. “Rationalism vs. Empiricism”. Em: <i>Stanford Encyclopedia of Philosophy</i> (verbete; consultar a edição vigente).",
        "Ayers, M. <i>Locke</i>, 2 vols. Routledge, 1991.",
        "Winkler, K. <i>Berkeley: An Interpretation</i>. Oxford University Press, 1989.",
        "Stroud, B. <i>Hume</i>. Routledge, 1977. Kemp Smith, N. <i>The Philosophy of David Hume</i>. Macmillan, 1941.",
        "Strawson, G. <i>The Secret Connexion: Causation, Realism, and David Hume</i>. Oxford University Press, 1989.",
        "Garber, D.; Ayers, M. (orgs.). <i>The Cambridge History of Seventeenth-Century Philosophy</i>. Cambridge University Press, 1998.",
        "Loeb, L. <i>From Descartes to Hume</i>. Cornell University Press, 1981.",
        "Quine, W. V. O. “Two Dogmas of Empiricism”. <i>Philosophical Review</i> 60, 1951."
      ],
      relacionados: ["corrente:racionalismo", "corrente:iluminismo", "escola:aristotelismo"]
    },
    {
      slug: "iluminismo",
      nome: "Iluminismo",
      periodo: "séc. XVII–XVIII",
      local: "Europa e Américas",
      resumo: "Amplo movimento intelectual, cultural e filosófico dos séculos XVII e XVIII, com variantes nacionais e posições internas diversas, que valorizou a razão, a crítica da autoridade e a circulação do conhecimento.",
      secoes: [
        {
          id: "origem",
          titulo: "Origem e contexto histórico",
          paragrafos: [
            "O Iluminismo (<i>Enlightenment</i> em inglês, <i>Lumières</i> em francês, <i>Aufklärung</i> em alemão; também “Ilustração” ou “Esclarecimento”) é um movimento amplo, sem data de início ou de fim consensual. As referências costumam ir do fim do século XVII, quando Paul Hazard descreveu uma “crise da consciência europeia” (1680–1715), até o fim do século XVIII, com variações de país para país. As datas são convenções, e há quem fale de vários Iluminismos, e não de um só.",
            "O contexto combina vários processos. As guerras de religião e a fragmentação confessional da Europa deixaram o problema da tolerância e do fundamento da autoridade. A Revolução Científica e os <i>Principia</i> de Newton (1687) deram à razão e à experiência uma imagem de êxito. A Revolução Gloriosa (1688–1689) na Inglaterra e as reformas de monarquias absolutas colocaram em debate a natureza do poder. Ao mesmo tempo, cresceram a imprensa, as academias, os salões, os cafés e as correspondências, que formaram a “república das letras” e uma esfera pública de debate.",
            "O próprio movimento se debateu sobre si mesmo. Em 1784, a <i>Berlinische Monatsschrift</i> publicou respostas à pergunta “O que é o esclarecimento?”, entre elas as de Moses Mendelssohn e de Immanuel Kant. É um indício de que seus participantes viam o Iluminismo como processo em curso, e não como época já encerrada."
          ]
        },
        {
          id: "fundamentos",
          titulo: "Fundamentos filosóficos",
          paragrafos: [
            "O problema que atravessa o movimento é como organizar o conhecimento e a vida social quando a tradição e a autoridade deixam de ser aceitas sem exame. As respostas variam, mas há alguns eixos comuns, que devem ser entendidos como tendências, e não como doutrina única.",
            "<b>Uso crítico da razão.</b> Exame de crenças, instituições e costumes à luz da razão e da experiência, com desconfiança diante do dogmatismo e da autoridade tradicional. Kant resume o espírito do movimento no lema <i>sapere aude</i> (ousa saber), tomado de Horácio.",
            "<b>Confiança na ciência e na educação.</b> O modelo da ciência newtoniana inspirou a ideia de que se pode conhecer e melhorar também o mundo humano. A difusão do saber, por enciclopédias, periódicos e escolas, era vista como condição do esclarecimento.",
            "<b>Liberdade, tolerância e direitos.</b> Defesa da liberdade de consciência e de expressão, de direitos naturais e de limites ao poder, em formas muito diversas, do liberalismo de Locke à soberania popular de Rousseau.",
            "<b>Atitudes diante da religião.</b> O Iluminismo não foi necessariamente antirreligioso. Houve ateus (como d’Holbach), deístas (como Voltaire), céticos (como Hume) e cristãos esclarecidos, como em parte do Iluminismo alemão e escocês. O que atravessa o movimento é, em geral, a crítica da intolerância, da superstição e do uso do poder religioso para impor crenças.",
            "<b>Progresso.</b> A ideia de progresso foi entendida de modos distintos. Condorcet, no <i>Esboço de um Quadro Histórico dos Progressos do Espírito Humano</i> (1795), é o exemplo mais otimista. Rousseau duvidava de que o avanço das ciências e das artes melhorasse os costumes. Kant concebia o progresso como tarefa moral e política, e não como processo garantido."
          ]
        },
        {
          id: "ideias",
          titulo: "Principais ideias e conceitos",
          itens: [
            { termo: "Esclarecimento como saída da menoridade", texto: "No ensaio de 1784, Kant define o esclarecimento como a saída do ser humano da menoridade de que ele próprio é culpado, que consiste em não ousar servir-se do próprio entendimento sem a direção de outro. Distingue o uso público da razão, que deve ser livre, do uso privado, ligado a um cargo, em que se pode ser obrigado a obedecer. Ele não afirma que sua época fosse esclarecida, e sim que vivia em época de esclarecimento." },
            { termo: "Tolerância e liberdade de consciência", texto: "Locke escreveu a <i>Carta sobre a Tolerância</i> (1689), sem estender a tolerância a todos, pois excluía ateus e católicos. Bayle defendeu a tolerância mesmo para consciências errôneas, e Voltaire, no <i>Tratado sobre a Tolerância</i> (1763), partiu do caso do protestante Jean Calas para criticar o fanatismo." },
            { termo: "Direitos naturais, consentimento e separação dos poderes", texto: "Locke sustentou, nos <i>Dois Tratados</i>, que o governo legítimo se funda no consentimento e na proteção de direitos naturais. Montesquieu, em <i>Do Espírito das Leis</i> (1748), analisou como leis e regimes dependem de clima, costumes e história e discutiu a separação dos poderes como garantia da liberdade (XI, 6). Rousseau, no <i>Contrato Social</i> (1762), formulou outra concepção: a soberania do povo e a vontade geral." },
            { termo: "Ciência, enciclopédia e circulação do saber", texto: "A <i>Enciclopédia</i>, dirigida por Diderot e, no início, por d’Alembert (1751–1772), reuniu colaboradores diversos num projeto de organizar o saber e difundi-lo. Enfrentou a censura e a oposição da Igreja. Academias, periódicos e salões ampliaram a circulação das ideias." },
            { termo: "Sentimento e natureza humana", texto: "No Iluminismo escocês, autores como Hutcheson, Hume e Adam Smith procuraram fundar a moral e a vida social em sentimentos como a simpatia e na observação da natureza humana, e desenvolveram estudos sobre história e economia política." },
            { termo: "Despotismo esclarecido e reformas", texto: "Alguns monarcas buscaram reformar a administração, o ensino, a justiça e a religião, como Frederico II da Prússia, José II da Áustria e, em Portugal, o ministro Pombal. Os historiadores discutem o quanto o rótulo “despotismo esclarecido” ajuda a entender esses governos, em que a autoridade do soberano continuava forte." },
            { termo: "Diferentes concepções de progresso", texto: "O progresso podia ser pensado como avanço contínuo do saber (Condorcet), como ganho acompanhado de perdas morais (Rousseau) ou como horizonte moral e jurídico a ser construído (Kant, em <i>Ideia de uma História Universal</i>, 1784, e em <i>À Paz Perpétua</i>, 1795)." }
          ]
        },
        {
          id: "representantes",
          titulo: "Principais representantes",
          paragrafos: [
            "A lista abaixo mostra a diversidade de posições, e não um grupo coeso. É útil distinguir os que foram representantes diretos do movimento, os que são precursores e os que mantêm uma relação complexa com ele."
          ],
          itens: [
            { termo: "John Locke (1632–1704): precursor e interlocutor", texto: "Sua teoria política (consentimento, direitos naturais, tolerância) e seu empirismo foram referências constantes no século XVIII, embora ele pertença à geração anterior (ver <a href='empirismo.html'>Empirismo</a>)." },
            { termo: "Montesquieu (1689–1755)", texto: "Autor das <i>Cartas Persas</i> (1721) e de <i>Do Espírito das Leis</i> (1748). Analisou as relações entre regimes, leis e circunstâncias sociais e discutiu a moderação do poder." },
            { termo: "Voltaire (1694–1778)", texto: "Escritor, polemista e divulgador de Locke e de Newton na França. Defendeu a tolerância e criticou a intolerância religiosa, com posições deístas." },
            { termo: "Denis Diderot (1713–1784)", texto: "Diretor da <i>Enciclopédia</i> e autor de obras filosóficas e literárias. Suas posições sobre religião e natureza mudaram ao longo da vida, do deísmo a formas de materialismo." },
            { termo: "Jean-Jacques Rousseau (1712–1778)", texto: "Participou do ambiente iluminista e colaborou com a <i>Enciclopédia</i>, mas criticou a ideia de que o progresso das ciências e das artes melhora os costumes. Não se reduz a empirista nem a racionalista: combina crítica da civilização, teoria da soberania popular e reflexão sobre educação e sentimento." },
            { termo: "David Hume (1711–1776)", texto: "Empirista e figura central do Iluminismo escocês, com obra sobre filosofia, história, moral e economia. Sua relação com o movimento é complexa: criticou a superstição e os argumentos da religião natural, mas manteve ceticismo quanto às pretensões da razão. Manteve amizade com Rousseau, rompida em 1766." },
            { termo: "Immanuel Kant (1724–1804)", texto: "Autor da definição mais citada do esclarecimento, procurou na filosofia crítica superar limites do racionalismo dogmático e do empirismo cético, ao tratar dos limites e das condições do conhecimento (ver <a href='racionalismo.html'>Racionalismo</a> e <a href='empirismo.html'>Empirismo</a>). Sua filosofia moral baseia-se na autonomia da razão." }
          ]
        },
        {
          id: "obras",
          titulo: "Obras e fontes fundamentais",
          itens: [
            { termo: "Locke, Carta sobre a Tolerância (1689) e Dois Tratados sobre o Governo (1689/1690)", texto: "Textos de referência sobre tolerância, consentimento e direitos naturais." },
            { termo: "Montesquieu, Cartas Persas (1721) e Do Espírito das Leis (1748)", texto: "As <i>Cartas Persas</i> criticam, com ironia, a sociedade francesa; <i>Do Espírito das Leis</i> é um estudo comparado de leis e regimes." },
            { termo: "Voltaire, Cartas Filosóficas (1734) e Tratado sobre a Tolerância (1763)", texto: "A primeira elogia a ciência e as instituições inglesas; a segunda parte do caso Calas para defender a tolerância." },
            { termo: "Diderot e d’Alembert (orgs.), Enciclopédia (1751–1772)", texto: "Obra coletiva central do movimento. O <i>Discurso Preliminar</i>, de d’Alembert (1751), expõe o projeto." },
            { termo: "Rousseau, Discurso sobre as Ciências e as Artes (1750), Discurso sobre a Desigualdade (1755), Do Contrato Social (1762)", texto: "Crítica da civilização, análise da origem da desigualdade e teoria da soberania popular." },
            { termo: "Hume, Tratado da Natureza Humana (1739–1740) e Investigação sobre o Entendimento Humano (1748)", texto: "Textos centrais do empirismo, importantes também para o Iluminismo escocês (ver <a href='empirismo.html'>Empirismo</a>)." },
            { termo: "Kant, Resposta à Pergunta: Que É o Esclarecimento? (1784)", texto: "Ensaio breve em que o autor define o esclarecimento e discute o uso público da razão." }
          ]
        },
        {
          id: "desenvolvimento",
          titulo: "Desenvolvimento histórico",
          paragrafos: [
            "<b>Fases.</b> Costuma-se distinguir uma fase inicial, com Bayle, Locke e Newton, uma fase intermediária, com Montesquieu, Voltaire e Hume, e uma fase tardia, com a <i>Enciclopédia</i>, Rousseau, Diderot, Adam Smith e Kant. A divisão é uma convenção dos historiadores.",
            "<b>Iluminismo francês.</b> Os <i>philosophes</i> atuaram em salões, academias e na imprensa, muitas vezes sob censura e em conflito com a Igreja. Voltaire e Diderot são exemplos de ambientes e estratégias distintas. É a versão mais conhecida, mas não a única.",
            "<b>Iluminismo escocês e debates na Inglaterra.</b> Na Escócia, universidades como as de Edimburgo e Glasgow foram centros de estudos de moral, história e economia política, com Hutcheson, Hume, Smith e Reid. Na Inglaterra, a recepção das ideias iluministas assumiu características próprias, frequentemente associadas à ciência experimental e a uma cultura religiosa protestante relativamente moderada. Locke e Newton foram referências fundamentais, embora também sejam frequentemente considerados precursores do movimento. A própria existência de um Iluminismo inglês distinto é objeto de debate historiográfico.",
            "<b>Aufklärung alemã.</b> Desenvolveu-se muitas vezes dentro das universidades e dos Estados, com forte presença de pensadores religiosos. Reuniu nomes como Christian Wolff, Lessing, Mendelssohn e Kant. Mendelssohn, no <i>Fédon</i> (1767), retomou o diálogo de Platão sobre a imortalidade da alma (ver <a href='../filosofos/platao.html'>Platão</a>).",
            "<b>Outras manifestações.</b> Na Itália, Beccaria e outros discutiram a reforma do direito penal. Em Portugal, o governo de Pombal promoveu reformas do ensino e expulsou os jesuítas em 1759. Nas colônias americanas, circularam ideias e obras iluministas, discutidas e adaptadas por elites locais, e figuras como Benjamin Franklin e Thomas Jefferson participaram do ambiente intelectual do movimento.",
            "<b>A Revolução Francesa.</b> A relação entre o Iluminismo e a Revolução Francesa é muito discutida. Alguns historiadores viram nas ideias a origem da Revolução; outros, como Roger Chartier, argumentam que a leitura de obras iluministas foi seletiva e que a Revolução também criou, depois, sua própria genealogia intelectual. Críticos contemporâneos, como Edmund Burke, atribuíram à Revolução um racionalismo abstrato, e os revolucionários invocaram autores como Rousseau de modos variados. Não há razão para tratar a Revolução como consequência inevitável e direta das ideias iluministas."
          ]
        },
        {
          id: "influencia",
          titulo: "Influência e legado",
          paragrafos: [
            "<b>Política e direito.</b> A teoria dos direitos naturais, a separação dos poderes e a soberania popular foram referências em debates constitucionais do século XVIII, como na independência dos Estados Unidos e na Declaração dos Direitos do Homem e do Cidadão (1789). A medida dessa influência é discutida, pois os textos políticos misturaram fontes diversas. Beccaria influenciou discussões sobre a reforma penal e o fim da tortura judicial.",
            "<b>Tolerância e secularização.</b> A defesa da tolerância contribuiu para reformas religiosas, como os decretos de tolerância de José II (1781), embora o alcance dessas medidas fosse limitado.",
            "<b>Conhecimento e educação.</b> Enciclopédias, academias, periódicos e a ideia de instrução pública ampliaram a circulação do saber. Surgiram novas ciências humanas, como a economia política (Adam Smith, <i>A Riqueza das Nações</i>, 1776).",
            "<b>Filosofia.</b> A discussão de Kant sobre autonomia, esclarecimento e limites do conhecimento marcou a filosofia posterior, em especial a moral, a política e a teoria crítica."
          ]
        },
        {
          id: "criticas",
          titulo: "Críticas e debates",
          paragrafos: [
            "<b>Críticas contemporâneas ao movimento.</b> Rousseau já criticava o otimismo do progresso. Herder, Hamann e Burke, em sentidos diferentes, enfatizaram a história, a tradição, a diversidade cultural e as limitações da razão abstrata; Isaiah Berlin os reuniu sob o rótulo de “contra-Iluminismo”, categoria também debatida.",
            "<b>Críticas do século XX.</b> Horkheimer e Adorno, na <i>Dialética do Esclarecimento</i> (1944/1947), sustentaram que a razão instrumental pode se converter em dominação. Alasdair MacIntyre considerou que o “projeto iluminista” de fundar a moral na razão fracassou. Habermas defende, ao contrário, que o projeto da modernidade permanece inacabado. Foucault, em “O que são as Luzes?” (1984), propôs ler o Iluminismo como atitude crítica, e não como doutrina.",
            "<b>Exclusões e limites.</b> O movimento convive com tensões graves. Autores iluministas discordaram sobre a escravidão: alguns a criticaram, outros a toleraram ou justificaram. Hume e Kant escreveram passagens sobre raças hoje muito criticadas, e Locke teve ligações com a empresa colonial. As mulheres foram em geral excluídas da cidadania, o que levou críticas como Mary Wollstonecraft (1792) e Olympe de Gouges (1791) a reivindicar a ampliação dos direitos.",
            "<b>Debates historiográficos.</b> Discute-se se há um só Iluminismo ou vários. Jonathan Israel defende a existência de um Iluminismo radical, de origem espinosana e materialista, oposto a um moderado; outros historiadores, como Roy Porter e J. G. A. Pocock, enfatizam a diversidade nacional e religiosa e questionam essa divisão. Discute-se também o papel do Iluminismo na origem da modernidade, do colonialismo e do totalitarismo, com respostas diferentes e muitas vezes opostas."
          ]
        }
      ],
      referencias: [
        "Kant, I. “Beantwortung der Frage: Was ist Aufklärung?” (1784); <i>Ideia de uma História Universal de um Ponto de Vista Cosmopolita</i> (1784); <i>À Paz Perpétua</i> (1795). Mendelssohn, M. “Über die Frage: Was heißt aufklären?” (1784).",
        "Locke, J. <i>Carta sobre a Tolerância</i> (1689); <i>Dois Tratados sobre o Governo</i> (1689/1690).",
        "Montesquieu. <i>Cartas Persas</i> (1721); <i>Do Espírito das Leis</i> (1748). Voltaire. <i>Cartas Filosóficas</i> (1734); <i>Tratado sobre a Tolerância</i> (1763). Rousseau, J.-J. <i>Do Contrato Social</i> (1762).",
        "Diderot, D.; d’Alembert, J. (orgs.). <i>Encyclopédie</i> (1751–1772). Condorcet. <i>Esboço de um Quadro Histórico dos Progressos do Espírito Humano</i> (1795).",
        "Hazard, P. <i>La crise de la conscience européenne, 1680–1715</i>. Boivin, 1935.",
        "Gay, P. <i>The Enlightenment: An Interpretation</i>, 2 vols. Knopf, 1966–1969.",
        "Outram, D. <i>The Enlightenment</i>. Cambridge University Press, 1995.",
        "Schmidt, J. (org.). <i>What Is Enlightenment? Eighteenth-Century Answers and Twentieth-Century Questions</i>. University of California Press, 1996.",
        "Israel, J. <i>Radical Enlightenment: Philosophy and the Making of Modernity, 1650–1750</i>. Oxford University Press, 2001.",
        "Porter, R. <i>Enlightenment: Britain and the Creation of the Modern World</i>. Allen Lane, 2000.",
        "Pocock, J. G. A. <i>Barbarism and Religion</i>, vol. 1. Cambridge University Press, 1999.",
        "Chartier, R. <i>The Cultural Origins of the French Revolution</i>. Duke University Press, 1991.",
        "Horkheimer, M.; Adorno, T. <i>Dialektik der Aufklärung</i>. Querido, 1947. MacIntyre, A. <i>After Virtue</i>, 1981. Foucault, M. “Qu’est-ce que les Lumières?”, 1984."
      ],
      relacionados: ["corrente:racionalismo", "corrente:empirismo", "filosofo:platao"]
    }
  ];
})((window.PalasAtena = window.PalasAtena || {}));
