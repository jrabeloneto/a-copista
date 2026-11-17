# A COPISTA

**Fanzine & revista de mão única.** A revista-portal pessoal de uma personagem copista: um códice medieval no centro, cercado por seções em colagem — álbum de fotos, quarto-scrapbook, discoteca, webring — com a alma da web pessoal de 2003 e o motion de um portfólio contemporâneo.

[![Live](https://img.shields.io/badge/Live-a--copista.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://a-copista.vercel.app)

![React](https://img.shields.io/badge/React-20232a?style=flat-square&logo=react&logoColor=61dafb)
![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-0ae448?style=flat-square&logo=greensock&logoColor=black)
![Lenis](https://img.shields.io/badge/Lenis-smooth%20scroll-1f1f1f?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## Conceito

**Estrutura de revista, pele de colagem.** Masthead, editorias, manchete de capa e fichas organizam o conteúdo; fita adesiva, bordas rasgadas, rotações leves e letras de recorte dão a textura. O "dial" muda por seção: quanto mais pessoal, mais colagem; quanto mais editorial, mais revista. O **CÓDICE** — o fanzine original — fica intocado.

## Seções

| Rota | O que é |
|---|---|
| `/` | Capa-revista: manchete do códice, objetos colados e notas recentes |
| `/codice` | O fanzine, com índice tipográfico e hover-reveal das gravuras |
| `/codice/materia/:slug` | Matérias em fólios iluminados |
| `/album` | Grade estilo fotolog com polaroids e legendas manuscritas |
| `/quarto` | Diário-scrapbook da personagem |
| `/discoteca` | Fichas de coleção com resenhas |
| `/amigas` | Links, webring e parede de botões 88×31 |
| `/sobre` `/visitas` `/arquivo` `/especime` | Sobre, livro de visitas, arquivo completo e espécime tipográfico |

## Motion

- **Capa que se dobra** — as letras do masthead chegam gigantes e encolhem com o scroll até o cabeçalho normal.
- **Recortes nas bandas laterais** — figuras coladas fora da coluna de conteúdo, trocadas conforme a leitura avança.
- **Virada de página** entre rotas com View Transitions e scroll ao topo antes do snapshot.
- **Grão de papel global** com parallax sutil; marquee de época; cursor de pena e manicule.
- Animações só em `transform`/`opacity`, triggers isolados por página (`useGsapPagina`) e fallback completo para `prefers-reduced-motion`.

## Estrutura

```
src/
├── components/
│   ├── portal/      # Masthead, régua de editorias, preloader, bandas laterais
│   ├── folio/       # folhas, molduras iluminadas, retratos, gravuras
│   ├── ornamentos/  # capitulares, fleurons, manicules, marginália
│   ├── recortes/    # camada de figuras recortadas
│   ├── ui2003/      # botões 88×31, contador de visitas, nav de época
│   └── v2/          # carimbos, ex-libris, papel rasgado, títulos gigantes
├── pages/           # uma página por rota (secundárias com lazy loading)
├── data/            # conteúdo: matérias, álbum, discoteca, recortes…
├── lib/             # useLenis, useGsapPagina, helpers de motion
└── styles/          # tokens + CSS por seção
docs/superpowers/    # specs de design e planos de cada etapa
```

## Rodar localmente

```bash
npm install
npm run dev
npm run build
```

Deploy na Vercel com rewrite SPA (`vercel.json`).

## Processo

O projeto foi construído em etapas documentadas em `docs/superpowers/` — fundação, fólios, capa, motion, polimento, expansão para portal e versão moderna — cada uma com spec de design aprovado antes da implementação.

---

Feito por [João Rabelo](https://github.com/jrabeloneto).
