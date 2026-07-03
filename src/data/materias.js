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
