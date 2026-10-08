# Modo Frases (imersão por frases híbridas): plano e progresso

Arquivo de controle para retomar o trabalho se a sessão parar no meio.

## Arquitetura (decidida)

- **Palavras:** reaproveita `data/<lang>.js` (`VB_DATA[lang]`, cada linha `[palavra, gênero, pt, pron, tipo, gancho, ex, exPt]`). O ranking é a posição na lista (0 = mais frequente). Nada é duplicado.
- **Frases:** `data/frases-<lang>.js` define `VB_FRASES[lang]`, uma lista de `[tema, fraseEstrangeira, frasePT, blocos]`.
  - `blocos` = `[[estrangeiro, português, "lema1|lema2"], ...]`, na ordem da frase estrangeira.
  - Cada bloco estrangeiro é um trecho gramaticalmente correto. Orações com verbo no fim (alemão) ficam num bloco só.
  - Os lemas são exatamente a coluna `palavra` de `data/<lang>.js`. `tools/check_frases.py` valida.
- **Progresso:** reaproveita `vb-prog-<lang>` (flashcards, campo `box` 0 a 5) como sinal de domínio. Estado próprio do modo em `vb-hyb-<lang>`: `{tick, w:{lema:{h,s,t,st,d,l}}, s:{idx:{n,o,l}}, log:[...]}`.
- **Código:** `frases.js` (motor + tela), carregado depois do script principal; usa globais `lang`, `CARDS`, `prog`, `store`, `$`, `esc`, `speak`, `addActivity`.
- **Tela:** nova aba "Frases" no app (entre Treinar e Palavras).

## Algoritmo (resumo)

1. Familiaridade por palavra `f = max(h, box/5*0.9)`. Faixas: nova < 0.15 ≤ aprendendo < 0.45 ≤ familiar < 0.75 ≤ dominada.
2. Escolha da frase: pontua palavras em aprendizagem vencidas (+), palavras novas dentro da fronteira de frequência (+, por ranking), penaliza frases recentes e palavras novas além da fronteira.
3. Montagem: bloco aparece no idioma estrangeiro se todas as palavras dele são familiares ou são alvo; no máximo 3 alvos por frase (até 2 novas). Se todos os blocos ficarem estrangeiros, mostra a frase estrangeira natural completa.
4. Ao avançar: sem abrir tradução, as palavras estrangeiras ganham familiaridade (com teto por número de exposições); abrindo tradução, perdem e voltam em poucas frases.

## Status

- [x] Plano e estrutura
- [x] frases.js (motor + tela) e integração no index.html (aba Frases)
- [x] Frases alemão (130 frases, validadas; simulação em /tmp: progressão ok)
- [x] Frases italiano (128 frases, validadas e simuladas)
- [x] Frases francês (130 frases, validadas e simuladas)
- [x] Verificação no navegador (Playwright, desktop e celular, sem erros) e publicação

## Próximos passos sugeridos

- Ampliar frases para cobrir palavras 300 a 1000 (hoje cada língua usa cerca de 230 a 250 das 1000).
- Revisar naturalidade das frases com o usuário (botão de reportar frase).
- Áudio por bloco e modo só ouvir.

## Etapa 2 (08/10): lobby + partida e proporções fixas

Pedido: aba Frases com lobby e partida (como Treinar); proporções 30/50/70/100% do idioma estrangeiro como opção extra ao automático, valendo também para as cartas (frase de exemplo e pista).

- [x] frases.js: `buildFixed` (proporção fixa), lobby, partida de 10 frases com resumo, `HYB.hybridFor(id, ratio)` para as cartas, `HYB.ratio()/setRatio()` (chave `vb-ratio`, compartilhada)
- [x] index.html: seletor de proporção no lobby do Treinar; frase de exemplo e pista das cartas usam `hybridFor` quando a proporção é 30/50/70 (automático e 100% mantêm o exemplo original)
- [ ] Testes (Playwright) e publicação

Limite conhecido: nas cartas, a frase misturada só existe para palavras que aparecem nas frases (cerca de 250 por língua); as demais mostram o exemplo original.

Nota: tools/simular_frases.js foi escrito para a versão sem lobby; para simular agora, chame HYB.prepare e use HYB._state() ou adapte para a partida (#hgame).
