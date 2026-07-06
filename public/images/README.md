# Imagens do portal A COPISTA — o que baixar

Todas as imagens finais devem ser de domínio público (ou ter direitos
resolvidos). Enquanto não forem baixadas, o site usa placeholders SVG
desenhados em código (ornamentos, gravuras, figuras de recorte, fotos).

## Recortes femininos das bandas laterais (FiguraRecorte.jsx)

As silhuetas placeholder serão trocadas por imagens reais recortadas:

- **Damas medievais**: iluminuras e retratos de domínio público —
  British Library (livros de horas, saltérios), Gallica/BnF,
  Met Open Access. Buscar: "portrait of a lady" séc. XIV-XV,
  "book of hours donor portrait".
- **Pré-rafaelitas** (a ponte perfeita medieval × moderno): Waterhouse,
  Rossetti, Burne-Jones — domínio público no Met, Art Institute of
  Chicago (CC0) e Birmingham Museums.
- **Ícones dos anos 70/80 — ATENÇÃO A DIREITOS**: fotos de celebridades
  são quase sempre protegidas. Caminhos seguros: Wikimedia Commons com
  licença CC explícita, acervos governamentais (Nationaal Archief NL
  tem CC0 de artistas em turnê), ou tratamento gráfico forte
  (duotone/meio-tom) que estilize — e mesmo assim, para publicação
  comercial, consultar antes.
- Tratamento: recortar a figura (PNG), borda branca de ~6px, duotone
  sépia. A moldura de papel, fita e legenda já vêm do componente.

## Fotos do álbum (/album) e do quarto

São as fotografias da própria dona — quando existirem, basta trocar
as cenas de FotoArte.jsx por `<img loading="lazy">` nos mesmos slots
(polaroid/cantoneiras já prontos).

## Fontes recomendadas (domínio público)

1. **British Library — Digitised Manuscripts / Catalogue of Illuminated Manuscripts**
   https://www.bl.uk/manuscripts/ e https://www.bl.uk/catalogues/illuminatedmanuscripts/
   Buscar: bestiários (Harley 4751, Royal 12 C XIX), livros de horas, marginalia gótica.

2. **Bibliothèque nationale de France — Gallica**
   https://gallica.bnf.fr
   Buscar: "manuscrit enluminé", "livre d'heures", "bestiaire". Excelentes capitulares
   e bordas iluminadas em alta resolução.

3. **The Met Museum — Open Access**
   https://www.metmuseum.org/art/collection/search?showOnly=openAccess
   Buscar: "illuminated manuscript", "book of hours", woodcuts de Dürer (gravuras),
   páginas do The Cloisters.

## Lista de compras (por página)

- 4–6 iluminuras/marginalia por página para a camada de imagens flutuantes
  (criaturas de bestiário, manicules históricos, iniciais ornadas, brasões)
- 1 retrato em gravura para /sobre (moldura oval)
- 2–3 detalhes de manuscrito por matéria (para as molduras de gravura)

## Tratamento antes de usar

- Converter para sépia/dessaturado
- Cortar fundo quando possível (PNG) ou usar blend-mode (multiply sobre claro,
  luminosity/screen sobre escuro)
- Máx. ~1200px no lado maior; comprimir (WebP/AVIF com fallback)
