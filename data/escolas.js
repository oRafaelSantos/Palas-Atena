/*
 * escolas.js — conteúdo dos verbetes de escolas filosóficas.
 * Usa o mesmo formato de data/filosofos.js (veja o comentário no topo daquele arquivo).
 * Referências a outros verbetes: "relacionados" aceita "colecao:slug" (ex.: "filosofo:platao").
 * Links dentro dos textos são relativos a pages/escolas/ (ex.: ../filosofos/platao.html).
 */
(function (ns) {
  "use strict";

  ns.data = ns.data || {};

  ns.data.escolas = [
    {
      slug: "platonismo",
      nome: "Platonismo",
      periodo: "c. 387 a.C. em diante",
      local: "Academia de Atenas",
      resumo: "Tradição que parte de Platão e da Academia de Atenas e vai do platonismo antigo e da Academia cética ao neoplatonismo de Plotino e Proclo.",
      secoes: [
        {
          id: "origem",
          titulo: "Origem e contexto histórico",
          paragrafos: [
            "O platonismo parte da obra de <a href='../filosofos/platao.html'>Platão</a> e da comunidade que ele reuniu em Atenas. Por volta de 387 a.C., depois de uma viagem à Sicília, Platão fundou a Academia, num ginásio e bosque consagrados ao herói Academo, nos arredores da cidade. Não era uma escola no sentido moderno, com currículo fixo: era uma comunidade de pesquisa em matemática, dialética e política, ligada a nomes como o matemático e astrônomo Eudoxo de Cnido e, a partir de cerca de 367 a.C., ao jovem Aristóteles.",
            "O contexto é o da Atenas que saía da Guerra do Peloponeso (431–404 a.C.) e da condenação de Sócrates (399 a.C.). Platão, discípulo de <a href='../filosofos/socrates.html'>Sócrates</a>, escreveu diálogos em que a investigação socrática sobre a justiça e a virtude se liga a questões sobre o conhecimento, a alma e a cidade. Os estudiosos discutem quanto dessas doutrinas pertence ao Sócrates histórico e quanto a Platão; para o platonismo, o ponto de partida são os diálogos de Platão.",
            "“Platonismo” é um rótulo posterior, que abrange coisas diferentes: o ensino da Academia sob Platão e seus sucessores, a fase cética da Academia, o platonismo da época imperial e o neoplatonismo. O que une essas fases é a referência a Platão, e não uma doutrina única: os próprios platônicos antigos discordavam sobre o que ele realmente ensinara."
          ]
        },
        {
          id: "fundamentos",
          titulo: "Fundamentos filosóficos",
          paragrafos: [
            "Os princípios abaixo são extraídos sobretudo dos diálogos de Platão e foram interpretados de modos diferentes ao longo dos séculos.",
            "<b>Dois níveis de realidade.</b> O mundo sensível, sujeito à mudança, distingue-se de uma realidade inteligível, estável, que só a razão alcança. É isso que, para Platão, explica a existência de conhecimento (<i>epistēmē</i>) e não apenas de opinião (<i>doxa</i>).",
            "<b>Primazia da razão e da dialética.</b> O conhecimento mais alto exige o exame crítico de definições e hipóteses, por perguntas e respostas, e não apenas a percepção.",
            "<b>A alma e sua afinidade com o inteligível.</b> A alma é distinta do corpo, e sua imortalidade é defendida em diálogos como o <i>Fédon</i>. A filosofia é tratada como cuidado da alma, herança de Sócrates.",
            "<b>Ordem e Bem.</b> Na <i>República</i>, o Bem é o princípio supremo do conhecimento e do valor, e a justiça é a ordem da alma e da cidade. No <i>Timeu</i>, o cosmos é obra racional e ordenada, o que levou platônicos posteriores a ver o mundo como expressão de uma inteligência."
          ]
        },
        {
          id: "ideias",
          titulo: "Principais ideias e conceitos",
          paragrafos: [
            "Os conceitos centrais já aparecem em Platão; a tradição platônica os retoma, interpreta e, em alguns casos, transforma."
          ],
          itens: [
            { termo: "Formas e participação", texto: "Realidades inteligíveis e imutáveis, como o Belo em si, das quais as coisas sensíveis “participam”. O próprio Platão discute dificuldades dessa ideia no <i>Parmênides</i>, e Aristóteles e outros a criticaram." },
            { termo: "Reminiscência e dialética", texto: "Para Platão, aprender é em certo sentido recordar o que a alma já contemplou (<i>Mênon</i>, <i>Fédon</i>), e a dialética é o método que conduz das hipóteses aos princípios." },
            { termo: "O Bem", texto: "Na <i>República</i> (VI, 508–509), o Bem é comparado ao sol: dá às Formas sua inteligibilidade e é dito estar “além do ser”. Os neoplatônicos apoiaram-se nesta passagem para sua doutrina do Uno." },
            { termo: "A alma", texto: "Dividida em razão, ânimo e desejo na <i>República</i> e dita imortal em outros diálogos. Como as passagens variam, os platônicos discutiram como conciliá-las." },
            { termo: "Assimilação a deus", texto: "No <i>Teeteto</i> (176a–b), Platão fala em procurar assemelhar-se a deus tanto quanto possível. Platônicos de época imperial, como Plutarco e Alcínoo, tomaram essa fórmula como o fim da vida filosófica." },
            { termo: "O demiurgo", texto: "No <i>Timeu</i>, o cosmos é obra de um artífice divino, que ordena a matéria segundo um modelo inteligível. Já na Antiguidade se discutia se a criação deve ser entendida literalmente, como início no tempo, ou como recurso de exposição; Aristóteles a leu literalmente, e outros platônicos, não." },
            { termo: "O Uno e as três hipóstases (Plotino)", texto: "No neoplatonismo de Plotino, o princípio supremo é o Uno, além do ser e do pensamento, do qual procedem o Intelecto e a Alma, e depois o mundo sensível. Essa hierarquia é um desenvolvimento próprio, embora Plotino se visse como intérprete fiel de Platão." }
          ]
        },
        {
          id: "representantes",
          titulo: "Principais representantes",
          itens: [
            { termo: "<a href='../filosofos/platao.html'>Platão</a> (c. 428/427–348/347 a.C.)", texto: "Fundador da Academia e autor dos diálogos que servem de base a toda a tradição." },
            { termo: "Espeusipo e Xenócrates", texto: "Espeusipo, sobrinho de Platão, o sucedeu na direção da Academia, e Xenócrates a dirigiu depois dele. Ambos sistematizaram o ensino e discutiram a interpretação das Formas e dos números." },
            { termo: "Arcesilau (séc. III a.C.) e Carnéades (séc. II a.C.)", texto: "Nomes centrais da Academia cética. Carnéades integrou, em 155 a.C., a embaixada de filósofos atenienses a Roma." },
            { termo: "Antíoco de Ascalão (séc. I a.C.)", texto: "Afastou-se do ceticismo e defendeu que a Academia antiga concordava, no essencial, com o peripatetismo e o estoicismo." },
            { termo: "Plutarco de Queroneia (c. 46–c. 120)", texto: "Platônico da época imperial, autor dos <i>Moralia</i> e das <i>Vidas Paralelas</i>, com escritos dedicados à interpretação de Platão." },
            { termo: "Plotino (c. 204/205–270)", texto: "Fundador do neoplatonismo, ensinou em Roma e teve em Porfírio seu editor e biógrafo." },
            { termo: "Proclo (412–485)", texto: "Sistematizador do neoplatonismo tardio, ligado à escola platônica de Atenas." }
          ]
        },
        {
          id: "obras",
          titulo: "Obras e fontes fundamentais",
          itens: [
            { termo: "Platão, diálogos", texto: "Base da tradição: <i>Mênon</i>, <i>Fédon</i>, <i>Banquete</i>, <i>República</i>, <i>Parmênides</i>, <i>Timeu</i> e <i>Leis</i>, entre outros." },
            { termo: "Aristóteles, Metafísica e Física", texto: "Testemunhos antigos sobre a doutrina platônica, incluindo menções a “doutrinas não escritas” (<i>Metafísica</i> I.6; <i>Física</i> IV.2, 209b). Os estudiosos discutem o alcance dessas doutrinas." },
            { termo: "Cícero, Acadêmicas", texto: "Principal fonte latina sobre a Academia cética e sobre Antíoco de Ascalão." },
            { termo: "Plutarco, Questões Platônicas", texto: "Parte dos <i>Moralia</i>, reúne discussões sobre passagens de Platão." },
            { termo: "Alcínoo, Didaskalikos", texto: "Manual de doutrina platônica da época imperial, transmitido sob o nome de Alcínoo." },
            { termo: "Plotino, Enéadas", texto: "Tratados reunidos por Porfírio em seis grupos de nove (daí “Enéadas”), obra central do neoplatonismo." },
            { termo: "Proclo, Elementos de Teologia", texto: "Exposição sistemática do neoplatonismo tardio. Proclo escreveu também comentários a diálogos de Platão, como o <i>Timeu</i> e o <i>Parmênides</i>." },
            { termo: "Diógenes Laércio, Vidas, livros III e IV", texto: "Notícias biográficas sobre Platão e sobre os primeiros dirigentes da Academia, com problemas de confiabilidade típicos desse autor tardio." }
          ]
        },
        {
          id: "desenvolvimento",
          titulo: "Desenvolvimento histórico",
          paragrafos: [
            "<b>Academia antiga.</b> Após a morte de Platão, a direção passou a Espeusipo e depois a Xenócrates, Polemon e Crates. Esses dirigentes sistematizaram o ensino e discutiram a interpretação das Formas. Aristóteles, que deixou a Academia, desenvolveu uma filosofia própria (ver <a href='aristotelismo.html'>Aristotelismo</a>).",
            "<b>Academia cética.</b> A partir de Arcesilau, no século III a.C., a Academia adotou uma postura cética, apoiada no exemplo de Sócrates, que examinava sem afirmar, e debateu sobretudo com os estoicos sobre o critério de verdade (ver <a href='estoicismo.html'>Estoicismo</a>). Os antigos distinguiam fases dentro dessa Academia, mas a classificação é discutida.",
            "<b>Retorno ao dogmatismo e platonismo médio.</b> No século I a.C., Fílon de Larissa e Antíoco de Ascalão se afastaram do ceticismo. O chamado platonismo médio (séculos I a.C. a II d.C.), que inclui Plutarco e Alcínoo, combina Platão com elementos aristotélicos e estoicos e dá destaque ao <i>Timeu</i> e a uma dimensão religiosa.",
            "<b>Neoplatonismo.</b> Com Plotino, no século III d.C., o platonismo ganha um sistema metafísico centrado no Uno. Porfírio edita Plotino; Jâmblico dá importância a práticas rituais (teurgia); em Atenas, Proclo sistematiza a tradição. “Neoplatonismo” é um termo moderno, do século XIX: os antigos se diziam simplesmente platônicos.",
            "<b>Fim da escola antiga e transmissão.</b> A tradição liga o fim da escola ateniense ao decreto do imperador Justiniano de 529, mas os historiadores discutem o alcance real dessa medida. O platonismo seguiu por outros caminhos: no mundo latino, Agostinho leu “livros dos platônicos” e Calcídio traduziu parte do <i>Timeu</i>; no mundo árabe circulou a chamada <i>Teologia de Aristóteles</i>, na verdade uma paráfrase de partes de Plotino; em Florença, Marsílio Ficino traduziu as obras de Platão para o latim (1484) e depois Plotino (1492)."
          ]
        },
        {
          id: "influencia",
          titulo: "Influência e legado",
          paragrafos: [
            "<b>Metafísica e teologia.</b> A ideia de uma realidade inteligível distinta da sensível e a hierarquia do ser marcaram o pensamento cristão, judaico e islâmico. Agostinho conta nas <i>Confissões</i> (VII) que a leitura de “livros dos platônicos” o ajudou a conceber uma realidade incorpórea. Isso não faz do cristianismo um platonismo: os teólogos adaptaram e corrigiram o que receberam.",
            "<b>Matemática e ciência.</b> A Academia valorizou a matemática, e o <i>Timeu</i> descreve os elementos por meio de sólidos regulares. Na filosofia contemporânea, “platonismo” passou a designar a tese de que os objetos matemáticos existem independentemente da mente: é uma herança, e não uma reprodução, da doutrina de Platão.",
            "<b>Educação e política.</b> A reflexão sobre a justiça, a formação dos governantes e a relação entre conhecimento e poder permaneceu como referência da filosofia política. O próprio nome “academia”, aplicado a instituições de estudo, vem do ginásio de Academo.",
            "<b>Renascimento e modernidade.</b> As traduções de Ficino difundiram Platão e Plotino na Europa latina; no século XVII, os platônicos de Cambridge, como Henry More e Ralph Cudworth, defenderam uma leitura espiritualista contra o materialismo."
          ]
        },
        {
          id: "criticas",
          titulo: "Críticas e debates",
          paragrafos: [
            "<b>Crítica às Formas.</b> Aristóteles objetou que Formas separadas duplicam o mundo sem explicá-lo. O próprio Platão discute no <i>Parmênides</i> o argumento do “terceiro homem”, e Gregory Vlastos o examinou em 1954 (ver <a href='../filosofos/platao.html'>Platão</a>).",
            "<b>Doutrina ou investigação.</b> Os antigos já discordavam sobre se os diálogos expõem doutrina ou apenas investigam: a Academia cética dizia seguir Sócrates e Platão, e Antíoco a acusava de traí-los. Entre os modernos, há leituras doutrinais, céticas e dramáticas (associadas a Leo Strauss), e a escola de Tübingen sustenta que o núcleo da doutrina estaria em ensinamentos não escritos, tese contestada.",
            "<b>A Academia foi contínua?</b> Os historiadores discutem se a Academia, como instituição, teve continuidade real entre a fase antiga, a fase cética e a escola de Atenas dos séculos V e VI, ou se esta última esteve ligada às anteriores sobretudo por tradição. O ponto continua em discussão.",
            "<b>Neoplatonismo: continuidade ou ruptura?</b> Plotino afirmava expor Platão; muitos estudiosos veem nele uma nova metafísica, com elementos aristotélicos e estoicos. A discussão depende do que se considera “fiel” a Platão.",
            "<b>Críticas modernas.</b> Nietzsche chamou o cristianismo de “platonismo para o povo” (prefácio a <i>Para Além do Bem e do Mal</i>), numa crítica à desvalorização do mundo sensível. Heidegger leu o platonismo como início da “metafísica” ocidental. Karl Popper criticou a política da <i>República</i>, leitura que outros contestam. São interpretações debatidas, e não consensos."
          ]
        }
      ],
      referencias: [
        "Platão. <i>Mênon</i>, <i>Fédon</i>, <i>Banquete</i>, <i>República</i>, <i>Teeteto</i>, <i>Parmênides</i>, <i>Timeu</i>, <i>Leis</i>. Aristóteles. <i>Metafísica</i>, I; <i>Física</i>, IV.2.",
        "Cícero. <i>Acadêmicas</i>. Plutarco. <i>Moralia</i> (<i>Questões Platônicas</i>). Alcínoo. <i>Didaskalikos</i>. Plotino. <i>Enéadas</i>. Proclo. <i>Elementos de Teologia</i>. Agostinho. <i>Confissões</i>, VII.",
        "Diógenes Laércio. <i>Vidas e Doutrinas dos Filósofos Ilustres</i>, livros III e IV.",
        "Dillon, J. <i>The Middle Platonists</i>. Duckworth, 1977 (ed. rev. 1996).",
        "Dillon, J. <i>The Heirs of Plato: A Study of the Old Academy</i>. Oxford University Press, 2003.",
        "Glucker, J. <i>Antiochus and the Late Academy</i>. Vandenhoeck &amp; Ruprecht, 1978.",
        "Gerson, L. <i>From Plato to Platonism</i>. Cornell University Press, 2013.",
        "Gerson, L. (org.). <i>The Cambridge Companion to Plotinus</i>. Cambridge University Press, 1996.",
        "Long, A. A.; Sedley, D. N. <i>The Hellenistic Philosophers</i>, vol. 1. Cambridge University Press, 1987.",
        "Vlastos, G. “The Third Man Argument in the Parmenides”. <i>Philosophical Review</i> 63, 1954."
      ],
      relacionados: ["filosofo:platao", "filosofo:socrates", "escola:aristotelismo", "escola:estoicismo"]
    },
    {
      slug: "aristotelismo",
      nome: "Aristotelismo (Escola Peripatética)",
      periodo: "c. 335 a.C. em diante",
      local: "Liceu de Atenas",
      resumo: "Tradição que parte de Aristóteles e do Liceu, continuada por comentadores antigos e por filósofos árabes, judeus e latinos.",
      secoes: [
        {
          id: "origem",
          titulo: "Origem e contexto histórico",
          paragrafos: [
            "O aristotelismo parte de Aristóteles (384–322 a.C.) e da comunidade de estudos que ele reuniu no Liceu, em Atenas. Nascido em Estagira, Aristóteles passou cerca de vinte anos na Academia de Platão (ver <a href='platonismo.html'>Platonismo</a>), viveu depois em Assos e em Lesbos e foi preceptor de Alexandre da Macedônia. De volta a Atenas, fundou o Liceu em 335 a.C., num ginásio dedicado a Apolo Lício, nos arredores da cidade. O nome “peripatético” vem de <i>perípatos</i>, o passeio do Liceu; a explicação antiga de que ele ensinava caminhando é possível, mas incerta.",
            "Aristóteles era estrangeiro residente em Atenas e ligado à corte macedônica. Quando Alexandre morreu, em 323 a.C., cresceu a reação antimacedônica, e ele deixou a cidade para Cálcis, onde morreu em 322 a.C. A escola prosseguiu sob Teofrasto.",
            "O Liceu foi um centro de pesquisa coletiva: história natural, anatomia, estudos sobre constituições de cidades e coleta de dados. Dessas últimas, só a <i>Constituição de Atenas</i>, recuperada em papiro no fim do século XIX, chegou a nós. Os escritos de Aristóteles que lemos parecem derivar de cursos e notas de aula, e não de obras literárias; os diálogos que ele publicou se perderam."
          ]
        },
        {
          id: "fundamentos",
          titulo: "Fundamentos filosóficos",
          paragrafos: [
            "<b>Partir da experiência e das opiniões reputadas.</b> Aristóteles costuma iniciar suas investigações expondo os fenômenos observados e as opiniões do senso comum e dos antecessores (<i>endoxa</i>), para então resolver os impasses que surgem. A ciência avança do que nos é mais conhecido, os particulares sensíveis, ao que é mais conhecido por natureza: as causas e os princípios.",
            "<b>A substância individual como o que há de mais básico.</b> Para Platão, Formas separadas são o que há de mais real. Aristóteles sustenta que o que existe primeiro são substâncias individuais, como este homem ou este cavalo, nas quais a forma e a essência estão presentes. A extensão dessa divergência com Platão é debatida pelos estudiosos.",
            "<b>Natureza finalista.</b> Explicar algo é indicar suas causas, entre elas a finalidade para a qual existe. A natureza é vista como um domínio de processos orientados, e não só de movimentos mecânicos.",
            "<b>Ética e política como saberes práticos.</b> A conduta humana é objeto de um conhecimento menos exato, que exige experiência e prudência. O ser humano é um animal político, e a vida boa só se realiza na cidade."
          ]
        },
        {
          id: "ideias",
          titulo: "Principais ideias e conceitos",
          itens: [
            { termo: "Substância e categorias", texto: "A substância (este homem, este cavalo) é o sujeito de que se dizem qualidade, quantidade, relação, lugar e outras categorias. Falar do que existe é, em primeiro lugar, falar de substâncias." },
            { termo: "Matéria e forma (hilemorfismo)", texto: "Toda substância natural é um composto: no bronze de uma estátua, o metal é a matéria e a figura é a forma. Num ser vivo, a alma é a forma do corpo (<i>Da Alma</i> II.1), e não uma substância separada." },
            { termo: "Ato e potência", texto: "A semente é potencialmente uma árvore, e a árvore é a semente realizada. A noção explica a mudança sem negá-la nem tratá-la como ilusão." },
            { termo: "As quatro causas", texto: "Explicar algo é indicar sua causa material (do que é feito), formal (o que é), eficiente (o que o produziu) e final (para que existe). Numa estátua: o bronze, o desenho, o escultor e o fim de homenagear alguém (<i>Física</i> II.3)." },
            { termo: "Silogismo e demonstração", texto: "Aristóteles formulou a primeira teoria sistemática da lógica: uma conclusão decorre necessariamente de premissas, como em “todo homem é mortal; Sócrates é homem; logo, Sócrates é mortal”. O exemplo é didático, e não uma citação sua." },
            { termo: "Eudaimonia, virtude e prudência", texto: "O bem humano é a eudaimonia, o florescimento que consiste em exercer bem a atividade própria do ser humano, conforme a virtude. As virtudes morais são hábitos que escolhem o meio-termo adequado a cada situação, e quem decide o que é adequado é a prudência (<i>phronesis</i>)." },
            { termo: "Animal político", texto: "A cidade existe por natureza e visa não só a sobrevivência, mas a vida boa (<i>Política</i> I.2). Aristóteles analisa os regimes e recomenda uma forma mista, apoiada numa ampla classe média." },
            { termo: "Motor imóvel", texto: "Na <i>Metafísica</i> (livro XII), o movimento do cosmos é explicado por um primeiro princípio, pensamento que pensa a si mesmo e move como objeto de desejo. Os intérpretes discutem seu alcance teológico." }
          ]
        },
        {
          id: "representantes",
          titulo: "Principais representantes",
          itens: [
            { termo: "Aristóteles (384–322 a.C.)", texto: "Fundador do Liceu e autor da maior parte dos textos que definem a tradição." },
            { termo: "Teofrasto (c. 371–c. 287 a.C.)", texto: "Sucessor imediato de Aristóteles na direção da escola, destacou-se na botânica e nos estudos de caráter e de lógica." },
            { termo: "Estratão de Lâmpsaco", texto: "Dirigiu o Liceu depois de Teofrasto (séc. III a.C.). Segundo Cícero, atribuía à natureza a explicação dos fenômenos, sem recorrer a uma divindade." },
            { termo: "Aristoxeno e Dicearco", texto: "Discípulos diretos de Aristóteles, conhecidos por estudos sobre música e harmonia, no primeiro caso, e sobre geografia e história da cultura, no segundo." },
            { termo: "Alexandre de Afrodisias (c. 200 d.C.)", texto: "Comentador de Aristóteles, ficou tão associado a essa tarefa que foi chamado, mais tarde, de “o Comentador”." },
            { termo: "Avicena (980–1037) e Averróis (1126–1198)", texto: "Filósofos de língua árabe que comentaram e reelaboraram Aristóteles. Averróis foi, para os latinos, “o Comentador”." },
            { termo: "Tomás de Aquino (c. 1225–1274)", texto: "Teólogo dominicano que fez de Aristóteles a base de uma síntese entre filosofia e teologia cristã." }
          ]
        },
        {
          id: "obras",
          titulo: "Obras e fontes fundamentais",
          itens: [
            { termo: "Aristóteles, Organon", texto: "Escritos de lógica: <i>Categorias</i>, <i>Da Interpretação</i>, <i>Analíticos Anteriores e Posteriores</i>, <i>Tópicos</i> e <i>Refutações Sofísticas</i>." },
            { termo: "Aristóteles, obras de filosofia natural", texto: "<i>Física</i>, <i>Da Alma</i> e os tratados de biologia, como a <i>História dos Animais</i>, que partem da observação e da dissecação." },
            { termo: "Aristóteles, Metafísica", texto: "Investigação sobre o ser, as substâncias e os primeiros princípios. O título é posterior, e a organização dos livros é atribuída pela tradição à edição de Andrônico de Rodes, no século I a.C." },
            { termo: "Aristóteles, Ética a Nicômaco e Política", texto: "Textos centrais sobre a vida boa e a cidade. A <i>Retórica</i> e a <i>Poética</i> tratam da persuasão e da tragédia." },
            { termo: "Teofrasto", texto: "<i>Caracteres</i>, retratos de tipos morais, e a <i>Investigação sobre as Plantas</i>." },
            { termo: "Alexandre de Afrodisias", texto: "Comentários a obras de Aristóteles e tratados próprios, como <i>Sobre o Destino</i>." },
            { termo: "Averróis e Tomás de Aquino", texto: "Comentários a Aristóteles, que moldaram sua leitura nas tradições árabe e latina." },
            { termo: "Diógenes Laércio, Vidas, livro V", texto: "Notícias sobre Aristóteles, Teofrasto, Estratão e outros peripatéticos." }
          ]
        },
        {
          id: "desenvolvimento",
          titulo: "Desenvolvimento histórico",
          paragrafos: [
            "<b>Os primeiros peripatéticos.</b> Teofrasto dirigiu a escola até cerca de 287 a.C., e Estratão, depois dele. Nessa fase, o Liceu continuou a pesquisa empírica e discutiu pontos do sistema, como a explicação por causas finais. Depois do século III a.C., a escola perdeu destaque em Atenas.",
            "<b>Edição e comentadores antigos.</b> No século I a.C., a tradição atribui a Andrônico de Rodes a edição dos tratados que formam o <i>corpus</i> aristotélico que lemos. Alexandre de Afrodisias (c. 200 d.C.) e Temístio (séc. IV) comentaram os textos, e os neoplatônicos (Porfírio, Simplício, Filopono) os estudaram, muitas vezes com o objetivo de harmonizar Platão e Aristóteles. Foi graças a esses comentários que muita coisa se preservou.",
            "<b>Mundo árabe e judaico.</b> Entre os séculos VIII e X, o movimento de tradução em Bagdá verteu Aristóteles ao árabe. Al-Farabi, Avicena e Averróis o comentaram e reelaboraram, e Maimônides o usou no mundo judaico.",
            "<b>Mundo latino e escolástica.</b> Boécio (c. 477–524) traduziu partes da lógica aristotélica, e nos séculos XII e XIII a obra completa chegou à Europa latina, por traduções do grego e do árabe. Houve resistências, como proibições parciais em Paris na primeira metade do século XIII, depois superadas. Tomás de Aquino fez de Aristóteles a base de sua síntese, e condenações em Paris, em 1277, atingiram algumas teses aristotélicas e seus intérpretes.",
            "<b>Renascimento e modernidade.</b> O aristotelismo renascentista teve centros importantes, como Pádua, com Pomponazzi e Zabarella. A Revolução Científica rejeitou boa parte da física e da astronomia aristotélicas, mas a ética e a lógica seguiram influentes. No século XX, a ética aristotélica foi retomada por Elizabeth Anscombe (1958) e Alasdair MacIntyre (1981)."
          ]
        },
        {
          id: "influencia",
          titulo: "Influência e legado",
          paragrafos: [
            "<b>Lógica e linguagem filosófica.</b> A lógica silogística dominou o ensino por séculos, e termos como substância, essência, matéria, forma, categoria e causa vêm do vocabulário aristotélico, em tradução latina.",
            "<b>Ciências naturais.</b> A observação sistemática de animais e plantas e os esforços de classificação fazem de Aristóteles e de seus discípulos um marco da história da biologia, mesmo quando suas conclusões foram corrigidas.",
            "<b>Ética e política.</b> A ética das virtudes, a noção de prudência, a análise dos regimes e a ideia de governo misto seguem como referência da filosofia moral e política.",
            "<b>Teologia e filosofia medieval.</b> O aristotelismo estruturou o ensino universitário medieval e a forma como filósofos cristãos, judeus e muçulmanos discutiram a relação entre razão e fé. Sua influência chega também à teoria literária, por meio da <i>Poética</i> e da <i>Retórica</i>."
          ]
        },
        {
          id: "criticas",
          titulo: "Críticas e debates",
          paragrafos: [
            "<b>Ciência moderna.</b> A física aristotélica (lugares naturais, movimento que exige um motor) e a astronomia geocêntrica foram superadas por Galileu e Newton, e a explicação por causas finais na natureza foi rejeitada pelos modernos, embora volte a ser discutida na filosofia da biologia.",
            "<b>Escravidão natural e mulheres.</b> A defesa da escravidão natural na <i>Política</i> e a visão de Aristóteles sobre as mulheres são amplamente criticadas e dificilmente conciliáveis com sua própria ética.",
            "<b>Interpretação.</b> Os especialistas discutem se a eudaimonia consiste só na contemplação ou num conjunto de bens, e a tese de Werner Jaeger (1923), de que Aristóteles teria evoluído de um platonismo inicial para o empirismo, foi muito questionada. As leituras de comentadores árabes, latinos e neoplatônicos também divergem, por exemplo sobre a natureza do intelecto.",
            "<b>Um sistema fechado?</b> Os antigos peripatéticos discordavam do mestre em vários pontos, e Aristóteles apresenta muitas questões como impasses a investigar. Por isso se discute o quanto “aristotelismo” designa um sistema acabado ou uma tradição de pesquisa."
          ]
        }
      ],
      referencias: [
        "Aristóteles. <i>Organon</i>; <i>Física</i>; <i>Da Alma</i>; <i>Metafísica</i>; <i>Ética a Nicômaco</i>; <i>Política</i>; <i>Retórica</i>; <i>Poética</i>; <i>História dos Animais</i>.",
        "Teofrasto. <i>Caracteres</i>; <i>Investigação sobre as Plantas</i>. Diógenes Laércio. <i>Vidas e Doutrinas dos Filósofos Ilustres</i>, livro V.",
        "Barnes, J. (org.). <i>The Cambridge Companion to Aristotle</i>. Cambridge University Press, 1995.",
        "Natali, C. <i>Aristotle: His Life and School</i>. Princeton University Press, 2013.",
        "Sharples, R. W. <i>Peripatetic Philosophy, 200 BC to AD 200</i>. Cambridge University Press, 2010.",
        "Sorabji, R. (org.). <i>Aristotle Transformed: The Ancient Commentators and Their Influence</i>. Duckworth, 1990.",
        "Gutas, D. <i>Greek Thought, Arabic Culture</i>. Routledge, 1998.",
        "Schmitt, C. B. <i>Aristotle and the Renaissance</i>. Harvard University Press, 1983.",
        "Jaeger, W. <i>Aristoteles: Grundlegung einer Geschichte seiner Entwicklung</i>, 1923. Anscombe, G. E. M. “Modern Moral Philosophy”. <i>Philosophy</i> 33, 1958. MacIntyre, A. <i>After Virtue</i>, 1981."
      ],
      relacionados: ["escola:platonismo", "filosofo:platao"]
    },
    {
      slug: "estoicismo",
      nome: "Estoicismo",
      periodo: "c. 300 a.C. – séc. II d.C.",
      local: "Pórtico de Atenas e Roma",
      resumo: "Escola fundada por Zenão de Cítio, que une lógica, física e ética e propõe viver conforme a razão e a natureza. Passa por Crisipo, Sêneca, Epicteto e Marco Aurélio.",
      secoes: [
        {
          id: "origem",
          titulo: "Origem e contexto histórico",
          paragrafos: [
            "O estoicismo foi fundado em Atenas por Zenão de Cítio (c. 334–262 a.C.), natural de Cítio, em Chipre. Segundo Diógenes Laércio, ele chegou a Atenas por volta de 312 a.C. e estudou com o cínico Crates e com filósofos da Academia e de Mégara. Por volta de 300 a.C., começou a ensinar no Pórtico Pintado (<i>Stoa Poikile</i>), uma colunata da ágora. Daí o nome da escola: seus primeiros seguidores eram chamados “zenonianos”, e só depois “estoicos”.",
            "O contexto é o do mundo helenístico. Após a morte de Alexandre (323 a.C.), os reinos de seus sucessores se tornaram o horizonte político, e as cidades gregas perderam parte de sua autonomia. A filosofia passou a oferecer orientação para a vida num mundo mais amplo e incerto. Nessa época, Epicuro fundou o Jardim (c. 306 a.C.), e o estoicismo disputou com ele e com os céticos a atenção do público culto (ver <a href='platonismo.html'>Platonismo</a> sobre a Academia cética).",
            "Segundo uma tradição transmitida por Diógenes Laércio, Zenão se aproximou da filosofia ao ler um relato sobre Sócrates nas <i>Memoráveis</i> de Xenofonte. Os estoicos reivindicaram <a href='../filosofos/socrates.html'>Sócrates</a> como modelo de vida filosófica, e o cinismo foi uma fonte importante das primeiras ideias da escola."
          ]
        },
        {
          id: "fundamentos",
          titulo: "Fundamentos filosóficos",
          paragrafos: [
            "<b>Três partes ligadas.</b> Para os estoicos, a filosofia tem três partes: a <b>lógica</b> (que inclui a teoria do conhecimento e da linguagem), a <b>física</b> (a natureza do cosmos, inclusive de deus) e a <b>ética</b>. Os antigos as comparavam a um ovo, a um animal ou a um campo cercado, para mostrar que se sustentam mutuamente (Diógenes Laércio VII.40); a ordem em que eram ensinadas era discutida.",
            "<b>Viver conforme a natureza e a razão.</b> O cosmos é um todo ordenado, penetrado por uma razão (<i>logos</i>), que os estoicos chamam também de providência, deus ou natureza. O ser humano participa dessa razão, e o fim da vida é viver de acordo com ela.",
            "<b>A virtude é o único bem.</b> Sabedoria, justiça, coragem e temperança bastam para a felicidade. Saúde, riqueza e reputação são “indiferentes”: podem ser preferíveis, mas não decidem a vida boa. Esta é a tese mais característica da escola e a mais discutida.",
            "<b>Filosofia como prática.</b> Os estoicos viam o estudo como exercício de transformação da conduta, e não só como acúmulo de teoria."
          ]
        },
        {
          id: "ideias",
          titulo: "Principais ideias e conceitos",
          itens: [
            { termo: "Impressão e assentimento", texto: "Toda experiência chega como uma impressão, e o que depende de nós é aceitar ou recusar o juízo que a acompanha. Os estoicos buscavam um critério de verdade na impressão “apreensiva” (<i>phantasia katalēptikē</i>), tema muito discutido com os céticos da Academia." },
            { termo: "As paixões como juízos", texto: "Para Crisipo, as emoções perturbadoras (medo, desejo, prazer, aflição) são juízos falsos sobre o que é bom ou mau, e não impulsos irracionais. Por isso podem ser evitadas pela correção dos juízos." },
            { termo: "Eupatheiai (boas emoções)", texto: "O sábio estoico não é insensível: segundo Diógenes Laércio (VII.116), ele experimenta alegria, cautela e vontade racional. “Apatia” designa a ausência de paixões, e não a de todo sentimento." },
            { termo: "Indiferentes preferidos", texto: "Coisas sem valor moral, mas razoáveis de buscar, como saúde e posses. Servem de matéria para a ação virtuosa, mas não governam a vida." },
            { termo: "Destino, providência e responsabilidade", texto: "Tudo ocorre por causas, e o cosmos é governado pela razão. Crisipo, porém, defendeu que somos responsáveis por nossas ações, com a imagem do cilindro: o empurrão o põe em movimento, mas é sua forma que determina como rola (Cícero, <i>Sobre o Destino</i> 41–43)." },
            { termo: "Corporalismo e cosmologia", texto: "Para os estoicos antigos, só corpos existem em sentido pleno, e o cosmos é permeado por um sopro ordenador (<i>pneuma</i>). Defendiam também ciclos em que o mundo é periodicamente consumido pelo fogo e renasce (a conflagração)." },
            { termo: "Cosmopolitismo e a ideia de oikeiosis", texto: "Cada ser tende a conservar-se e a ligar-se ao que lhe é próprio, e nos humanos esse laço se amplia da família à comunidade e, por fim, a toda a humanidade. Daí a ideia de que somos cidadãos do cosmos." },
            { termo: "O que depende de nós", texto: "Distinção desenvolvida por Epicteto (<i>Encheirídio</i> 1): dependem de nós juízos, impulsos e desejos; não dependem o corpo, a reputação e as ações alheias. É a base prática do controle das reações." }
          ]
        },
        {
          id: "representantes",
          titulo: "Principais representantes",
          itens: [
            { termo: "Zenão de Cítio (c. 334–262 a.C.)", texto: "Fundador da escola, dividiu a filosofia em lógica, física e ética." },
            { termo: "Cleantes de Assos (c. 331–232 a.C.)", texto: "Sucessor de Zenão. Seu <i>Hino a Zeus</i> é um dos poucos textos estoicos antigos conservados." },
            { termo: "Crisipo de Solos (c. 279–206 a.C.)", texto: "Terceiro dirigente e grande sistematizador, escreveu centenas de obras, quase todas perdidas. Dizia-se que, sem ele, não haveria o Pórtico (Diógenes Laércio VII.183)." },
            { termo: "Diógenes da Babilônia, Panécio de Rodes e Posidônio de Apaméia", texto: "Representam a chamada fase média. Diógenes integrou a embaixada a Roma em 155 a.C.; Panécio adaptou o estoicismo ao público romano e influenciou Cícero; Posidônio uniu a doutrina ao interesse pelas ciências." },
            { termo: "Musônio Rufo (séc. I d.C.)", texto: "Mestre romano de ética prática, foi professor de Epicteto." },
            { termo: "Sêneca (c. 4 a.C.–65 d.C.)", texto: "Estoico romano, orador e político, tutor e conselheiro de Nero. Escreveu cartas e tratados morais." },
            { termo: "Epicteto (c. 50–c. 135)", texto: "Antigo escravo, ensinou em Roma e depois em Nicópolis. Seus ensinamentos foram registrados por seu discípulo Arriano." },
            { termo: "Marco Aurélio (121–180)", texto: "Imperador romano, escreveu em grego as anotações pessoais conhecidas como <i>Meditações</i>." }
          ]
        },
        {
          id: "obras",
          titulo: "Obras e fontes fundamentais",
          paragrafos: [
            "Quase tudo o que os estoicos antigos escreveram se perdeu; de Zenão, Cleantes e Crisipo restam fragmentos e testemunhos. Por isso a leitura da escola combina textos romanos completos com relatos de outros autores."
          ],
          itens: [
            { termo: "Fragmentos dos estoicos antigos", texto: "Reunidos na coletânea <i>Stoicorum Veterum Fragmenta</i> (Hans von Arnim, 1903–1905), que traz também o <i>Hino a Zeus</i>, de Cleantes." },
            { termo: "Diógenes Laércio, Vidas, livro VII", texto: "Biografias de Zenão e seus sucessores e um resumo da doutrina, com os problemas de confiabilidade do autor." },
            { termo: "Cícero, Sobre os Fins (III) e Sobre a Natureza dos Deuses (II)", texto: "Exposições da ética e da teologia estoicas por porta-vozes do diálogo, escritas por um autor que não era estoico." },
            { termo: "Sêneca", texto: "<i>Cartas a Lucílio</i>, <i>Sobre a Ira</i>, <i>Sobre a Brevidade da Vida</i> e outros tratados morais." },
            { termo: "Epicteto", texto: "<i>Discursos</i> e <i>Encheirídio</i>, ambos registrados por Arriano." },
            { termo: "Marco Aurélio", texto: "<i>Meditações</i>, caderno pessoal em doze livros." },
            { termo: "Musônio Rufo", texto: "Preleções conservadas por discípulos, sobre ética prática." }
          ]
        },
        {
          id: "desenvolvimento",
          titulo: "Desenvolvimento histórico",
          paragrafos: [
            "<b>Estoa antiga.</b> Com Zenão, Cleantes e Crisipo, a escola se constituiu como sistema articulado de lógica, física e ética. A lógica de Crisipo, centrada em proposições e não em termos, é uma de suas realizações mais notáveis.",
            "<b>Estoa média.</b> Diógenes da Babilônia, Panécio e Posidônio levaram a escola a Roma e a modificaram. Fontes antigas dizem que Panécio duvidava da conflagração periódica, e Posidônio é associado a uma psicologia mais atenta ao lado irracional da alma e a estudos científicos; os historiadores discutem o quanto essas mudanças justificam falar numa “fase” distinta.",
            "<b>Estoicismo romano.</b> No período imperial, sobretudo em Sêneca, Musônio, Epicteto e Marco Aurélio, a ênfase recai na ética prática e na vida cotidiana. Epicteto ensinou em Roma e, depois que os filósofos foram expulsos por Domiciano, em Nicópolis, no fim do século I. Houve estoicos ligados à oposição aos imperadores, como Trásea Peto, sob Nero, mas se discute se formaram um grupo coerente.",
            "<b>Eclipse e retomada.</b> Com o avanço do neoplatonismo e do cristianismo, o estoicismo deixou de existir como escola, mas suas ideias seguiram em circulação, por exemplo na noção de logos. No século XVI, Justus Lipsius propôs um neoestoicismo cristão (<i>Sobre a Constância</i>, 1584). Nos séculos XX e XXI, o estoicismo voltou a ser lido fora da academia."
          ]
        },
        {
          id: "influencia",
          titulo: "Influência e legado",
          paragrafos: [
            "<b>Lógica.</b> Os historiadores da lógica, como Benson Mates (1953), mostraram que a lógica de proposições dos estoicos antecipa pontos da lógica moderna.",
            "<b>Ética, direito e política.</b> A ideia de uma lei natural racional e de uma comunidade humana universal, desenvolvida por Cícero e por juristas romanos, chegou ao direito e ao pensamento político. A relação com a noção moderna de direitos humanos é discutida e exige cautela.",
            "<b>Cristianismo e filosofia posterior.</b> Termos e temas estoicos, como o <i>logos</i>, marcaram a teologia cristã primitiva. No Renascimento e na era moderna, o estoicismo influenciou autores como Montaigne e Lipsius.",
            "<b>Psicologia e uso contemporâneo.</b> Terapias cognitivas modernas, como as de Albert Ellis e Aaron Beck, reconhecem o estoicismo como antecedente. A popularidade atual de Marco Aurélio e de Epicteto também deu origem a leituras simplificadas, que reduzem a escola a técnica de resiliência."
          ]
        },
        {
          id: "criticas",
          titulo: "Críticas e debates",
          paragrafos: [
            "<b>Críticas antigas.</b> Os céticos da Academia, como Carnéades, atacaram a ideia de uma impressão infalível; os epicuristas rejeitaram a providência e o determinismo; peripatéticos defendiam uma moderação das emoções, e não sua eliminação. Plutarco escreveu uma obra sobre supostas contradições dos estoicos.",
            "<b>A virtude basta?</b> A tese de que só a virtude é um bem e de que ela basta para a felicidade foi vista como contraintuitiva, e a figura do sábio perfeito, tão rara quanto a fênix, parecia inalcançável. Os estoicos admitiam que quase ninguém é sábio e falavam em progresso moral.",
            "<b>Determinismo e liberdade.</b> Discute-se se a posição de Crisipo concilia de fato destino e responsabilidade, e que tipo de liberdade ela garante.",
            "<b>Doutrina antiga e prática romana.</b> Os estudiosos debatem o quanto Sêneca, Epicteto e Marco Aurélio seguem o sistema antigo e o quanto o adaptam. Marco Aurélio, por exemplo, considera hipóteses alternativas sobre o cosmos, e Pierre Hadot leu as <i>Meditações</i> como exercícios espirituais.",
            "<b>Controle ou repressão?</b> Críticos veem no ideal estoico uma frieza que sufocaria afetos, e outros temem que a ênfase no que depende de nós leve à passividade política. Defensores respondem que o alvo é o juízo falso, e não os afetos, e lembram o dever social enfatizado pelos estoicos."
          ]
        }
      ],
      referencias: [
        "Diógenes Laércio. <i>Vidas e Doutrinas dos Filósofos Ilustres</i>, livro VII. Arnim, H. von (org.). <i>Stoicorum Veterum Fragmenta</i>, 1903–1905.",
        "Cícero. <i>Sobre os Fins</i>, III; <i>Sobre a Natureza dos Deuses</i>, II; <i>Sobre o Destino</i>; <i>Sobre os Deveres</i>.",
        "Sêneca. <i>Cartas a Lucílio</i>. Epicteto. <i>Discursos</i> e <i>Encheirídio</i>. Marco Aurélio. <i>Meditações</i>.",
        "Long, A. A.; Sedley, D. N. <i>The Hellenistic Philosophers</i>, 2 vols. Cambridge University Press, 1987.",
        "Inwood, B. (org.). <i>The Cambridge Companion to the Stoics</i>. Cambridge University Press, 2003.",
        "Sellars, J. <i>Stoicism</i>. Acumen, 2006.",
        "Brennan, T. <i>The Stoic Life</i>. Oxford University Press, 2005.",
        "Hadot, P. <i>The Inner Citadel: The Meditations of Marcus Aurelius</i>. Harvard University Press, 1998.",
        "Mates, B. <i>Stoic Logic</i>. University of California Press, 1953."
      ],
      relacionados: ["filosofo:socrates", "escola:platonismo"]
    }
  ];
})((window.PalasAtena = window.PalasAtena || {}));
