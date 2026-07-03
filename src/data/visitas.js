/**
 * Livro de visitas — entradas 100% HARDCODED, é um adereço de época.
 *
 * NOTA DE SEGURANÇA (se um dia isto virar um guestbook real):
 * - renderizar SEMPRE via JSX interpolado (auto-escapado); NUNCA
 *   dangerouslySetInnerHTML com conteúdo de visitante;
 * - o campo `site` é texto decorativo, nunca vira href sem validação
 *   de esquema (apenas http/https) e rel="nofollow noopener";
 * - sanitizar e limitar tamanho no servidor antes de persistir.
 */

export const visitas = [
  {
    nome: 'juh_borboletas',
    site: 'fotolog.net/juh_borboletas',
    data: '12 de março, 23h58',
    mensagem: 'adorei o site!! as letras góticas ficaram mto lindas, visita o meu tbm ;)',
  },
  {
    nome: 'Ricardo (Curitiba)',
    site: '',
    data: '15 de março, 14h02',
    mensagem:
      'caí aqui procurando a letra de Battle of Evermore e fiquei uma hora lendo. parabéns pelo conteúdo, raro ver fanzine assim hoje em dia.',
  },
  {
    nome: 'menestrel77',
    site: 'geocities.com/menestrel77/alaudes',
    data: '2 de abril, 03h11',
    mensagem: 'FINALMENTE alguém que sabe o que é um crumhorn!!! favoritado. o webring aceita novos sites?',
  },
  {
    nome: 'wojtek_pl',
    site: '',
    data: '19 de abril, 20h44',
    mensagem: 'greetings from poland! nice medieval graphics, very authentic :) sorry my portuguese',
  },
  {
    nome: 'Bia',
    site: '',
    data: '3 de maio, 17h29',
    mensagem: 'amiga q site LINDO, me ensina a fazer essas letras? juro que é pra um trabalho da escola',
  },
  {
    nome: 'um leitor da Biba',
    site: '',
    data: '28 de maio, 21h37',
    mensagem:
      'primeira vez que vejo texto sobre a Biba em português. a senhora minha mãe guardava um batom deles, cor ameixa, dentro de uma lata de biscoito. obrigado pela memória.',
  },
]
