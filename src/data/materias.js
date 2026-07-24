/**
 * As matérias do CÓDICE.
 *
 * Estrutura: cada matéria é um conjunto de FOLHAS de pergaminho;
 * cada folha tem uma variante visual (1-3: recorte, mancha, vinheta)
 * e uma lista de seções tipadas:
 *   paragrafo  — texto corrido; opcionalmente capitular + versais + marginalia
 *   rubrica    — subtítulo interno em rubrica de manuscrito
 *   citacao    — destaque com manicule (nunca blockquote moderno)
 *   gravura    — ilustração woodcut placeholder com legenda
 *
 * Nota da casa: nenhuma citação é atribuída como literal a pessoa real —
 * ou é aforismo da "copista", ou vem sinalizada como reconstrução.
 */

export const materias = [
  {
    slug: 'leila-diniz',
    volume: 1,
    titulo: 'Da vida & obra de Leila Diniz',
    subtitulo: 'atriz, santa profana de Ipanema, mártir dos asteriscos',
    incipit: 'Aqui começa a matéria da estrela que falou',
    categoria: 'cinema',
    arte: 'sol',
    chamada:
      'Uma professora de jardim de infância ensinou um país inteiro a não ter medo — e a censura inteira não bastou para calá-la.',
    mesAno: 'março de MMXXVI',
    folioBase: 12,
    postadoEm: 'sexta-feira, 14 de março',
    hora: '23h47',
    comentarios: 3,
    colofao: [
      'Aqui se encerra a presente matéria, composta no ano de MMXXVI, copiada de crônicas, jornais amarelados & fitas que ninguém rebobinou;',
      'se houver erro nas datas, é do copista e dos almanaques,',
      'não da estrela.',
    ],
    folhas: [
      {
        variante: 1,
        secoes: [
          {
            tipo: 'paragrafo',
            capitular: 'D',
            versais: 'e Leila Diniz, natural de Niterói,',
            texto:
              ' dirão os almanaques que nasceu no ano de 1945 e que, antes de ser estrela, foi professora de jardim de infância — e é justo começar por aí, porque toda a sua vida pública guardou algo dessa primeira vocação: uma paciência infinita com os que ainda estão aprendendo a falar, e nenhuma paciência com os que já deviam ter aprendido e fingem que não sabem.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'Do palco à tela o pulo foi curto. No teatro fez de tudo, como se fazia então; na televisão entrou pelas novelas como quem entra na casa dos vizinhos; e no cinema bastou-lhe um filme para virar assunto: Todas as Mulheres do Mundo, que Domingos de Oliveira rodou em 1966, no qual ela menos representou do que compareceu — a naturalidade era tanta que a crítica, desarmada, teve de inventar elogios novos.',
            marginalia: {
              arte: 'caracol',
              texto: 'dizem que improvisava metade das falas; a outra metade improvisava ela',
            },
          },
        ],
      },
      {
        variante: 2,
        secoes: [
          { tipo: 'rubrica', texto: 'Do martírio pela língua' },
          {
            tipo: 'paragrafo',
            texto:
              'Em novembro de 1969 sentou-se diante dos moços d’O Pasquim e falou como sempre falava: sem cerimônia, sem eufemismo e sem pedir licença. O jornal, que não era bobo, imprimiu tudo — trocando cada palavrão por um asterisco, e foram tantos asteriscos que a página parecia um céu estrelado. O escândalo foi imediato e proveitoso: a edição esgotou, as bancas pediram mais, e a censura, que não entende de astronomia, entendeu que era preciso agir.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'Agiu: o decreto que dali em diante obrigou os periódicos à censura prévia ficou conhecido, para sempre, pelo nome dela — como se uma moça de Niterói, falando da própria vida numa mesa de bar, fosse ameaça maior que qualquer editorial. Foi seu martírio e sua consagração: outros santos padecem pela fé; Leila padeceu pela sintaxe.',
            marginalia: {
              arte: 'flor',
              texto: 'no ano da graça de 1969 choveram asteriscos como gafanhotos',
            },
          },
          {
            tipo: 'citacao',
            texto:
              '«A vida é (***) boa demais para quem não tem (***) medo de vivê-la (***).» — assim, de memória e com os asteriscos no lugar de sempre, reconstrói a copista o tom daquela página; quem quiser a letra exata, procure o microfilme.',
          },
          { tipo: 'rubrica', texto: 'Do milagre da praia' },
          {
            tipo: 'paragrafo',
            texto:
              'No verão de 1971 operou seu milagre mais lembrado, e não precisou de mais que um biquíni. Grávida da filha Janaína, que teria com o cineasta Ruy Guerra, apareceu na praia de Ipanema de barriga ao sol, coisa que hoje não pararia um ônibus e que naquele tempo parou o país. As fotos correram as redações como relíquias; as senhoras benzeram-se; as moças, discretamente, tomaram nota.',
          },
          {
            tipo: 'gravura',
            arte: 'sol',
            legenda: 'O sol de Ipanema, conforme o viu a copista. Gravura da oficina do CÓDICE.',
          },
        ],
      },
      {
        variante: 3,
        secoes: [
          { tipo: 'rubrica', texto: 'Do trânsito & da glória' },
          {
            tipo: 'paragrafo',
            texto:
              'Voltava do festival de cinema de Adelaide, na Austrália, quando o avião em que viajava caiu perto de Nova Délhi, a 14 de junho de 1972. Tinha vinte e sete anos, uma filha pequena e a agenda cheia. Não há moral nenhuma a tirar disso, e a copista desconfia de quem tira: há apenas a conta brutal do que se perdeu, e a data, que este códice registra em tinta mais escura.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'Não deixou doutrina; deixou jurisprudência. Cada liberdade pequena que as moças de depois exerceram sem pensar — falar como se fala, amar sem prestar contas, ser mãe sem pedir desculpas — passou antes, de algum modo, por aquela mesa de bar e por aquela areia. Os anos setenta a transformaram em padroeira do desbunde; este fanzine prefere lembrá-la como era: uma professora de jardim de infância ensinando um país inteiro, palavra por palavra, a não ter medo.',
          },
        ],
      },
    ],
  },
  {
    slug: 'boutique-biba',
    volume: 1,
    titulo: 'Da boutique Biba & sua penumbra dourada',
    subtitulo: 'crônica da catedral que Londres ergueu ao veludo — MCMLXIV–MCMLXXV',
    incipit: 'Aqui começa a matéria da loja escura',
    categoria: 'moda',
    arte: 'pavao',
    chamada:
      'Sete andares, luz nenhuma, flamingos no terraço: a loja que Londres frequenta até hoje, embora tenha fechado em 1975.',
    mesAno: 'abril de MMXXVI',
    folioBase: 21,
    postadoEm: 'terça-feira, 8 de abril',
    hora: '01h12',
    comentarios: 7,
    colofao: [
      'Aqui se encerra a presente matéria, composta no ano de MMXXVI a partir de fotografias amareladas, memórias alheias & um logotipo dourado;',
      'a penumbra é da boutique,',
      'os erros são da copista.',
    ],
    folhas: [
      {
        variante: 3,
        secoes: [
          {
            tipo: 'paragrafo',
            capitular: 'H',
            versais: 'á lojas que vendem roupa,',
            texto:
              ' e houve uma que vendia penumbra. A Biba começou pequena e pelo correio: em 1964, a ilustradora de moda Barbara Hulanicki e o marido, Stephen Fitz-Simon, anunciaram no Daily Mirror um vestidinho de riscado cor-de-rosa a preço de moça que trabalha — e dezessete mil pedidos entupiram o correio de Londres numa semana. Descobriu-se ali uma verdade que o comércio inglês fingia não saber: as secretárias também queriam ser estrelas de cinema, e podiam, desde que a estrela custasse pouco.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'O nome era de família: Biba, apelido da irmã mais nova de Barbara. A primeira loja de verdade abriu numa antiga farmácia de Abingdon Road, em Kensington, e já nasceu com a liturgia que faria escola — luz baixa, madeira escura, música alta, araras entulhadas como sacristias. Mudou-se depois para a Kensington Church Street, sempre maior, sempre mais escura, até que a penumbra exigiu um edifício inteiro.',
            marginalia: {
              arte: 'flor',
              texto: 'riscado: o xadrezinho de toalha de piquenique; em inglês, gingham',
            },
          },
        ],
      },
      {
        variante: 1,
        secoes: [
          { tipo: 'rubrica', texto: 'Da catedral de sete andares' },
          {
            tipo: 'paragrafo',
            texto:
              'Em 1973 a Biba tomou posse do antigo armazém Derry & Toms, na High Street Kensington: sete andares que o século chamou de loja de departamentos e que ela converteu em catedral. Lá dentro havia de tudo — vestidos, plumas, batons em tons de ameixa, latas de feijão com o logotipo dourado —, e no alto, como um céu privativo, o salão Rainbow Room e um jardim no terraço onde passeavam flamingos verdadeiros, indiferentes ao comércio lá embaixo.',
            marginalia: {
              arte: 'caracol',
              texto: 'flamingos no terraço: a copista contou cinco; conferir',
            },
          },
          {
            tipo: 'paragrafo',
            texto:
              'A estética era um anacronismo deliberado, e é por isso que interessa a este códice: em plena era do plástico, a Biba olhava para trás — Art Nouveau nas curvas do logotipo, Art Déco nos balcões, veludo preto nas paredes, espelhos fumê onde as freguesas apareciam como retratos antigos. As cores da casa eram as que Barbara chamava de cores de tia-avó: amora, ameixa, ferrugem, castanhos machucados. Nenhum branco de loja; nenhuma luz que denunciasse. Quem entrava, entrava num romance.',
          },
          {
            tipo: 'gravura',
            arte: 'pavao',
            legenda: 'O pavão da penumbra, ave heráldica da casa. Gravura da oficina do CÓDICE.',
          },
          {
            tipo: 'citacao',
            texto:
              '«Entrava-se para comprar um chapéu; saía-se tendo morado, por uma tarde, dentro de um romance gótico.» — aforismo da copista, que não teve a sorte de entrar.',
          },
        ],
      },
      {
        variante: 2,
        secoes: [
          { tipo: 'rubrica', texto: 'Da ruína' },
          {
            tipo: 'paragrafo',
            texto:
              'Durou pouco, como convém às catedrais erguidas depressa. O dinheiro grande que financiou a mudança para os sete andares trouxe junto os seus costumes: planilhas, conselhos, gerentes que achavam a loja escura demais e a mercadoria estranha demais. Em 1975 a Big Biba fechou as portas, e Londres perdeu, no mesmo ano, uma loja e um cenário. Os números venceram a penumbra — vencem sempre, na primeira rodada.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'Mas há uma segunda rodada, que se joga na memória, e nela a Biba segue invicta. Não existe revival dos anos setenta que não a cite, nem boutique escura que não seja, saiba ou não, sua filha. Gerações inteiras juram ter subido àquele terraço dos flamingos — muito mais gente do que os sete andares comportariam —, e essa aritmética impossível é a medida exata do que ela foi: um lugar que a cidade continuou frequentando depois de demolido.',
          },
        ],
      },
    ],
  },
  {
    slug: 'menestreis-eletricos',
    volume: 1,
    titulo: 'Dos menestréis elétricos',
    subtitulo: 'de como a década de setenta ressuscitou a Idade Média com amplificadores',
    incipit: 'Aqui começa a matéria dos alaúdes ligados na tomada',
    categoria: 'música',
    arte: 'alaude',
    chamada:
      'Crumhorns em arenas, latim nas paradas e o Rei Artur sobre patins: a década que amou a Idade Média sem nenhuma moderação.',
    mesAno: 'maio de MMXXVI',
    folioBase: 34,
    postadoEm: 'domingo, 25 de maio',
    hora: '22h03',
    comentarios: 5,
    colofao: [
      'Aqui se encerra a presente matéria, composta no ano de MMXXVI ao som de discos riscados & cânticos em latim de segunda mão;',
      'os anacronismos são todos propositais,',
      'como eram os deles.',
    ],
    folhas: [
      {
        variante: 2,
        secoes: [
          {
            tipo: 'paragrafo',
            capitular: 'Q',
            versais: 'uando a década de sessenta acabou',
            texto:
              ' — e ela acabou várias vezes, nunca de uma vez só —, uma parte da música elétrica inglesa fez o gesto que ninguém esperava: em vez de correr para o futuro, deu meia-volta. Em 1969 o Fairport Convention ligou as baladas tradicionais nos amplificadores em Liege & Lief, e descobriu-se que as canções de trezentos anos aguentavam a distorção melhor que muita novidade. Estava aberta a estrada de terra que a década seguinte percorreria em carruagem elétrica.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'O episódio mais improvável dessa cruzada aconteceu nas paradas de sucesso: o Steeleye Span pôs um cântico natalino em latim, cantado a cappella, entre os discos mais vendidos da Inglaterra — Gaudete, quatro vozes e nenhum instrumento, dividindo as rádios com o glam e suas plataformas. Nenhum programador de rádio saberia explicar; nenhum precisou. Havia fome de coisa antiga, e ela vinha de longe.',
            marginalia: {
              arte: 'caracol',
              texto: 'Gaudete, gaudete, Christus est natus — na parada, entre lantejoulas',
            },
          },
        ],
      },
      {
        variante: 3,
        secoes: [
          { tipo: 'rubrica', texto: 'Dos instrumentos ressuscitados' },
          {
            tipo: 'paragrafo',
            texto:
              'Houve quem levasse a arqueologia a sério. O Gryphon subia ao palco com crumhorns, flautas doces e fagote, tocava estampies para plateias de arena e chegou a abrir os concertos do Yes — milhares de pessoas que tinham vindo pelos sintetizadores ouvindo, de repente, o som anasalado de um instrumento que dormira quatrocentos anos. Red Queen to Gryphon Three, de 1974, é xadrez medieval em tempo de rock progressivo, e não pede desculpas a ninguém.',
            marginalia: {
              arte: 'flor',
              texto: 'crumhorn: soa como um pato abençoado; a copista aprova',
            },
          },
          {
            tipo: 'paragrafo',
            texto:
              'O Gentle Giant escrevia madrigais de contraponto cerrado para vozes de roqueiro, como se a capela de Salisbury tivesse contratado uma banda de bar. E fora dos palcos elétricos, um erudito de fôlego curto e influência imensa, David Munrow, levava consorts de instrumentos antigos à rádio e à televisão britânicas — de repente a musicologia era assunto de vestiário de escola, e todo adolescente sabia distinguir, ao menos de ouvido, uma sacabuxa de um serpentão.',
          },
          {
            tipo: 'gravura',
            arte: 'alaude',
            legenda: 'O alaúde elétrico, quimera da década. Gravura da oficina do CÓDICE.',
          },
          {
            tipo: 'citacao',
            texto:
              '«Todo alaúde sonha em ser guitarra; toda guitarra, na calada da noite, sonha em voltar a ser alaúde.» — máxima da copista, escrita ao ouvir o lado B.',
          },
        ],
      },
      {
        variante: 1,
        secoes: [
          { tipo: 'rubrica', texto: 'Do rei Artur sobre o gelo' },
          {
            tipo: 'paragrafo',
            texto:
              'Os gigantes também fizeram sua romaria. O Led Zeppelin gravou The Battle of Evermore com a voz de Sandy Denny — a única convidada a cantar num disco da banda — e estampou um eremita de lanterna na capa interna do quarto álbum, para quem duvidasse da devoção. O Jethro Tull, que já vinha vestido de menestrel havia anos, entregou em 1975 o Minstrel in the Gallery, flauta e escárnio na galeria dos nobres, como manda o ofício.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'E no extremo da cruzada, onde a devoção vira espetáculo, Rick Wakeman montou em 1975 os seus Mitos e Lendas do Rei Artur numa pista de gelo — cavaleiros de patins, capas bordadas, órgão de igreja e público de estádio. A crítica torceu o nariz; o século guardou a imagem. Porque o exagero era exatamente o ponto: nenhuma época ama outra com moderação, e os anos setenta amaram a Idade Média como se ela fosse voltar — de patins, de crumhorn, de logotipo em letra gótica. Este fanzine é prova de que, em certa medida, voltou.',
            marginalia: {
              arte: 'flor',
              texto: 'conferir se o rei patinava ele mesmo (não patinava)',
            },
          },
        ],
      },
    ],
  },
  {
    slug: 'cinemas-de-rua-manaus',
    volume: 2,
    titulo: 'Dos colossais cinemas de rua de Manaus',
    subtitulo: 'crônica das casas de sombra que a cidade ergueu, encheu & entregou ao comércio',
    incipit: 'Aqui começa a matéria das casas de sombra',
    categoria: 'cinema',
    arte: 'sereia',
    chamada:
      'Havia sereias de gesso guardando a porta e mil e trezentas cadeiras lá dentro: a cidade que via cinema na rua, antes de vê-lo no shopping.',
    mesAno: 'julho de MMXXVI',
    folioBase: 3,
    postadoEm: 'quarta-feira, 22 de julho',
    hora: '22h30',
    comentarios: 5,
    colofao: [
      'Aqui se encerra a presente matéria, composta no ano de MMXXVI a partir de recortes, almanaques da cidade & memória de família;',
      'as datas vêm de quem pesquisou antes,',
      'os erros são da copista.',
    ],
    folhas: [
      {
        variante: 1,
        secoes: [
          {
            tipo: 'paragrafo',
            capitular: 'H',
            versais: 'ouve nesta cidade um tempo',
            texto:
              ' em que ver um filme era sair de casa e descer a rua. Não havia estacionamento, não havia praça de alimentação, não havia a escolha entre oito salas idênticas: havia a calçada, o cartaz pintado à mão, a fila que dobrava a esquina e, no fim dela, uma porta grande demais para o prédio que a sustentava. Recolhe-se aqui, de memória alheia e de papel amarelado, a lembrança dessas casas — porque foi por essas escadas que subiram a mãe e a avó de quem escreve, e porque cidade que esquece onde se sentou acaba esquecendo o que viu.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'De todas, a maior foi o Polytheama, que teve três vidas e não se contentou com nenhuma. Nasceu em 1899 como casa de diversões, virou teatro em 1906 e só em 1912 assumiu o ofício que lhe deu fama, quando a empresa de J. Fontenelle & Cia — dos irmãos Jonas e Raimundo — o abriu como cinema para mil e trezentas pessoas. Mil e trezentas: escreva-se o número por extenso, porque hoje nenhuma sala da cidade sonha com metade disso.',
            marginalia: {
              arte: 'caracol',
              texto: 'mil e trezentas cadeiras — e ainda ficava gente em pé no corredor',
            },
          },
        ],
      },
      {
        variante: 2,
        secoes: [
          { tipo: 'rubrica', texto: 'Das sereias que guardavam a porta' },
          {
            tipo: 'paragrafo',
            texto:
              'A fachada é o que este códice mais estima, porque foi feita segundo a lógica dos manuscritos: nada ali era só enfeite. Havia sereias, havia harpas ornadas de liras, havia toda uma zoologia de gesso debruçada sobre quem entrava. O pesquisador Ed Lincon Barros registra que aquelas figuras não estavam ali por vaidade de arquiteto — teriam sido postas para espantar as visagens que habitavam o lugar. Ou seja: a mesma função que a serpente e o grifo cumprem na margem de um fólio, que é guardar a página de quem não foi convidado.',
            marginalia: {
              arte: 'flor',
              texto: 'visagem: o que assombra o lugar e não pede licença',
            },
          },
          {
            tipo: 'gravura',
            arte: 'sereia',
            legenda:
              'Sereia de duas caudas com sua lira, à maneira das que guardavam a porta do Polytheama. Gravura da oficina do CÓDICE.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'O primeiro filme que aquelas sereias viram passar foi Jerusalém Libertada, que Enrico Guazzoni rodara em 1911 sobre o poema de Tasso — cruzados, cercos e cavalaria, projetados no meio da floresta. A copista anota a coincidência sem forçá-la: a primeira sombra que a cidade viu em tela grande foi uma sombra medieval.',
          },
        ],
      },
      {
        variante: 3,
        secoes: [
          { tipo: 'rubrica', texto: 'Da queda das casas' },
          {
            tipo: 'paragrafo',
            texto:
              'Em 1959 o Polytheama foi reformado e perdeu cem cadeiras no negócio, ficando em mil e duzentas. Reabriu com Guerra e Paz, de 1956, e para a cerimônia vieram representantes da Paramount e da Metro Goldwyn-Mayer — o que, numa cidade que se alcançava por rio ou por ar, era acontecimento de primeira grandeza.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'O fim não veio por incêndio nem por decreto, que seriam mortes dignas: veio pelo aluguel. Em 1973 a sala virou loja de eletrodomésticos; depois, agência bancária; hoje é loja de departamentos. Quem passa na porta não vê nada — e é esse o ponto. As sereias guardaram o prédio contra as visagens, mas ninguém as encarregou de guardá-lo contra o comércio.',
            marginalia: {
              arte: 'caracol',
              texto: 'de casa de sombra a vitrine iluminada: a ironia é do século, não da copista',
            },
          },
          {
            tipo: 'paragrafo',
            texto:
              'Os outros foram caindo na mesma ordem. O Cine Chaplin abriu a 21 de abril de 1980, na avenida Joaquim Nabuco, com trezentos lugares, e resistiu até novembro de 2002, quando as salas dos shoppings acabaram com a conta. O Cine-Theatro Guarany não teve nem isso: foi demolido em 1983. Somem-se os que já haviam ido antes — o Éden, o Ypiranga — e fecha-se o inventário: uma cidade inteira de telas apagadas entre a Eduardo Ribeiro e a Sete de Setembro.',
          },
          {
            tipo: 'citacao',
            texto:
              '«Era um programa baré ir ao cinema. Hoje em dia as pessoas não dão mais valor a isso.» — assim resume o historiador Geraldo dos Anjos, em depoimento que a copista copia da fonte onde o encontrou, sem retocar.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'Não se escreve isto por saudosismo, que é vício barato. Escreve-se porque ainda há quem projete: o Casarão de Ideias segue acendendo o projetor na cidade que desligou os seus, e enquanto houver uma sala escura e uma cadeira ocupada a conta não está fechada. Das sereias, o que sobrou está em fotografia — e este fólio é uma delas.',
          },
        ],
      },
    ],
  },
  {
    slug: 'cla-das-jiboias',
    volume: 2,
    titulo: 'Do clã das jibóias & da arte suave no Norte',
    subtitulo: 'de como um mestre desembarcou de um paquete & deixou uma linhagem inteira atrás de si',
    incipit: 'Aqui começa a matéria dos que lutam sem pressa',
    categoria: 'luta',
    arte: 'jiboia',
    chamada:
      'Um lutador japonês desceu do paquete Pará em 1915, deu demonstração na cidade e seguiu viagem — a linhagem que deixou dá volta ao mundo até hoje.',
    mesAno: 'julho de MMXXVI',
    folioBase: 14,
    postadoEm: 'quarta-feira, 22 de julho',
    hora: '23h58',
    comentarios: 2,
    colofao: [
      'Aqui se encerra a presente matéria, composta no ano de MMXXVI a partir de notícias de embarque, ficha de filme & do que contam os que treinam;',
      'a linhagem é dos lutadores,',
      'os erros são da copista.',
    ],
    folhas: [
      {
        variante: 2,
        secoes: [
          {
            tipo: 'paragrafo',
            capitular: 'E',
            versais: 'm dezembro de 1915,',
            texto:
              ' a cidade recebeu no cais uma troupe que não vinha cantar nem representar. Vinha lutar — e lutar de um modo que ninguém ali tinha visto: sem murro fechado, sem força bruta, derrubando homem maior com um jeito de torcer o corpo que os jornais da época não sabiam nomear e chamavam, à falta de melhor, de jiu-jitsu.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'O anúncio saiu com a secura das notas de embarque: «Chega hoje, a bordo do paquete Pará, a troupe de lutadores japoneses de jiu-jitsu…» — e deixa-se a frase truncada como foi encontrada, porque o resto da notícia se perdeu e porque assim mesmo basta. A 18 de dezembro daquele ano, Mitsuyo Maeda apresentou-se em Manaus. Antes houvera Belém, e no Theatro Politheama — nome que este volume já encontrou noutra página, e por outro motivo.',
            marginalia: {
              arte: 'caracol',
              texto: 'o mesmo nome do cinema, noutro estado: Politheamas houve muitos',
            },
          },
        ],
      },
      {
        variante: 1,
        secoes: [
          { tipo: 'rubrica', texto: 'Do mestre que veio do mar' },
          {
            tipo: 'paragrafo',
            texto:
              'De Mitsuyo Maeda dirão os registros que chegou ao Brasil por volta de 1914, desembarcando em Porto Alegre ou em Santos conforme a fonte que se consulte, e que a 24 de setembro daquele ano já havia demonstração sua anotada em jornal. Vinha da escola de Jigoro Kano, que arrumara as lutas antigas do seu país numa disciplina só; e vinha fazendo o que os mestres faziam então — rodando o mundo, aceitando desafio e provando a arte no corpo dos incrédulos.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'No seu dojo formou-se a amizade que mudaria a história do esporte: Gastão Gracie aproximou-se do mestre, e o mestre aceitou ensinar ao filho dele, Carlos, o jujutsu que aprendera com Kano. Do que aquele menino fez com a lição saiu tudo o que veio depois — o Gracie Jiu-Jitsu, o jiu-jitsu brasileiro, a arte que hoje se pratica em tatames de todos os continentes e que, na origem, passou por um cais do Norte.',
            marginalia: {
              arte: 'flor',
              texto: 'jujutsu, judô, jiu-jitsu: a mesma raiz, grafias de cada porto',
            },
          },
          {
            tipo: 'gravura',
            arte: 'jiboia',
            legenda:
              'A jibóia enrodilhada, que aperta sem pressa e não solta. Gravura da oficina do CÓDICE.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'Hélio Gracie dedicou à arte a vida inteira e passou adiante o posto a Carlson, de quem a Associação Laranjeiras Brazilian Jiu-Jitsu diz ter sido o grande marco do jiu-jitsu no Brasil e no mundo, por haver criado uma cultura nova de luta. A copista não arbitra disputa de família nem de linhagem: anota o que as casas dizem de si mesmas, e segue.',
          },
        ],
      },
      {
        variante: 3,
        secoes: [
          { tipo: 'rubrica', texto: 'Do clã & da floresta' },
          {
            tipo: 'paragrafo',
            texto:
              'Esta matéria não teria fólio se não houvesse quem filmasse. O Clã das Jibóias, documentário dirigido e produzido por Heraldo Daniel, com roteiro seu e de Gustavo Sonraz, estreou em fevereiro de 2022 no Teatro Amazonas e faz o resgate que faltava. Divide-se em três partes: o começo da arte marcial na Amazônia, os atletas daqui que alcançaram projeção mundial e a força local do esporte no Amazonas.',
          },
          {
            tipo: 'paragrafo',
            texto:
              'A ficha é de oficina, e este códice, que se orgulha da sua, copia-a inteira: montagem de Gustavo Sonraz, fotografia de Erian Souza, pesquisa e produção de Almerio Augusto com Rildo Heros, som de Caio de Biase, animação de Ricardo Juliani. O que o filme faz de mais raro, porém, não está na ficha — é lembrar que esporte nenhum se explica só pelo tatame. Entram na conta a medicina das florestas e a comida da região, porque corpo que luta é corpo que alguém curou e alimentou primeiro.',
            marginalia: {
              arte: 'caracol',
              texto: 'Heraldo Daniel dirigiu também Pescadores da Amazônia, de 2021',
            },
          },
          {
            tipo: 'paragrafo',
            texto:
              'Buscam-se, ao tempo em que se copia este fólio, legendas em inglês e em japonês, para que a obra alcance as plataformas e volte — fechando o círculo — ao país de onde veio o mestre que desceu do paquete. A copista acha justo: história de linhagem deve ser contada na língua dos dois lados.',
          },
        ],
      },
    ],
  },
]

export function materiaPorSlug(slug) {
  return materias.find((materia) => materia.slug === slug)
}

/** fol. 12r, 12v, 13r… — recto nos pares, verso nos ímpares */
export function rotuloFolio(base, indice) {
  const numero = base + Math.floor(indice / 2)
  const lado = indice % 2 === 0 ? 'r' : 'v'
  return `fol. ${numero}${lado}`
}
