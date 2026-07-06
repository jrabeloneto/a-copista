# A COPISTA — Versão moderna M3: a prateleira (mini-plano técnico)

> Execução inline. A peça de maior risco da versão (pin × Lenis ×
> resize) — este plano existe ANTES do código, como manda o spec.

## Mecânica

Discoteca em modo prateleira (desktop + motion): a seção PINA no topo
e o trilho de fichas viaja horizontalmente preso ao scroll (scrub),
como revirar uma caixa de vinil. O trilho vive DENTRO da moldura de
900px (a prateleira desliza dentro da página da revista — o objeto
continua sendo o objeto; as bandas de recortes seguem visíveis).

```
gsap.matchMedia().add('(min-width: 921px) and (prefers-reduced-motion: no-preference)', () => {
  gsap.to(trilho, { x: () => -distancia(), ease: 'none', scrollTrigger: {
    trigger: secao, start: 'top top', end: () => '+=' + distancia(),
    pin: true, scrub: 0.8, invalidateOnRefresh: true, anticipatePin: 1 } })
})
distancia = trilho.scrollWidth - secao.clientWidth
```

## Riscos mapeados e mitigação

1. **Pin × Lenis**: nosso Lenis usa scroll NATIVO (wrapper window,
   sync via gsap.ticker + ScrollTrigger.update) → pinType 'fixed'
   padrão funciona; combinação documentada como estável.
2. **Spacer do pin muda a altura da página** → o ResizeObserver do App
   dispara refresh (debounced) e converge em 1 ciclo; limites do
   trilho são funcionais (invalidateOnRefresh) — sem loop.
3. **Cleanup na troca de rota**: matchMedia criado DENTRO do
   gsap.context da página (useGsapPagina) — ctx.revert() desfaz pin,
   spacer e listeners de breakpoint.
4. **Mobile e reduced-motion**: SEM pin e SEM prateleira — a grade
   atual permanece. Simetria total entre CSS e JS: a MESMA media query
   `(min-width: 921px) and (prefers-reduced-motion: no-preference)`
   liga os estilos de trilho e o matchMedia do GSAP; fora dela, grade.
5. **Recortes na página**: a travessia ganha o scroll extra do pin
   automaticamente (total() funcional + refresh).
6. **Fichas em modo prateleira**: viram "capas de frente" (layout
   vertical, capa ~300px + info embaixo, largura 340px) — crate
   digging; dica "role para folhear a caixa »" em Verdana.

## Tarefas
- [ ] Discoteca.jsx: seção .prateleira + trilho; matchMedia+pin no useGsapPagina
- [ ] secoes.css: modo prateleira (media dupla) mantendo grade como default
- [ ] Verificar: pin segura no topo, trilho viaja (medições), release, mobile intacto, reduced sem pin, leak test, spacer × ResizeObserver sem loop
- [ ] Revisão final da versão moderna (code-review high no diff M1+M2+M3) + correções
- [ ] Commit — **PARAR: fim da versão moderna**
