# Nova língua de estudo no Vokabel 1000

O app ensina as 1000 palavras mais frequentes de uma língua (o **alvo**) com cartões, ganchos mnemônicos, frases híbridas e histórias. Já existem alemão (de), italiano (it) e francês (fr). Agora entram **inglês (en)**, **espanhol (es)** e **português (pt)**.

Cada alvo tem uma **língua primária** de explicação:
- en e es: explicação em **português do Brasil** (leitor brasileiro).
- pt: explicação em **inglês** (leitor falante de inglês aprendendo português do Brasil).
Nas colunas e campos chamados "pt" abaixo, escreva sempre na língua primária do seu alvo (para o alvo pt, esses campos ficam em inglês).

Variedade: en = inglês americano. es = espanhol neutro latino-americano (use "ustedes", evite gírias regionais e "vosotros"). pt = português do Brasil.

Veja os arquivos existentes como modelo: `data/de.js`, `data/it.js`, `data/frases-it.js`, `data/textos-it.js`, `data/metodo-it.js`, `tools/hist-src/FORMATO.md`. Nunca use o travessão "—". Não use git e não mexa em arquivos que não são seus.

## Parte A: palavras (`data/<alvo>.js`) e Método (`data/metodo-<alvo>.js`)

Formato:
```js
window.VB_DATA=window.VB_DATA||{};VB_DATA.en=[
["the","","o, a, os, as","dâ (th com a língua entre os dentes)","REGRA","...gancho...","The dog is here.","O cachorro está aqui."],
...
];
```
Colunas: `[palavra, gênero, tradução, pronúncia, tipo, gancho, exemplo, tradução do exemplo]`.
1. **palavra**: forma de dicionário. Substantivo sem artigo. Verbo no infinitivo (en sem "to").
2. **gênero**: "m", "f" ou "" (en: sempre ""; es/pt: substantivos m/f, o resto ""). O app mostra o artigo e a cor sozinho.
3. **tradução**: curta; vários sentidos separados por " / ".
4. **pronúncia**: como o leitor da língua primária leria, com a ortografia dele, sílaba tônica marcada; nota curta entre parênteses para sons difíceis.
5. **tipo**: um código: EN PT ES IT FR DE LA CA SOM IMG REGRA FALSO ONO PAD FRASE NOME (ver `tools/ov/TRADUCAO.md`, seção Palavras).
6. **gancho**: mnemônico criativo e concreto em 1 ou 2 frases, para o leitor da língua primária (brasileiro, ou falante de inglês no caso do alvo pt). Parente direto primeiro; avise falsos amigos (tipo FALSO), que são muitos entre português e espanhol.
7. **exemplo**: frase curta A1 no alvo, natural, que contenha a palavra **na mesma forma** sempre que possível (o app apaga a palavra do exemplo para criar uma lacuna).
8. **tradução do exemplo**: natural.

Ordem por frequência real de uso (corpus de conversação e texto do dia a dia), sem repetir palavras: os primeiros 50 são o núcleo (pronomes, artigos, verbos ser/ter/ir...). O app divide em níveis de 50. Escreva em lotes de 100 e valide a cada lote:
```
node tools/check_words.js <alvo>
```
Até sair `problemas: 0` (com 1000 linhas no final; durante os lotes ele avisa do total, normal).

**Método**: `data/metodo-<alvo>.js` com `window.VB_METODO=window.VB_METODO||{};VB_METODO.<alvo>="...html...";` no mesmo estilo de `data/metodo-it.js`: seção "Atalho" com 4 a 6 dicas que mais rendem para o leitor (parentes, trocas de som, falsos amigos, pronúncia) e, se o alvo tem gênero, a seção "Gênero" com `div class="gbox"` igual às existentes (es: el/la; pt: o/a). Para en, troque Gênero por uma seção curta sobre pronúncia ou verbos frasais.

## Parte B: frases (`data/frases-<alvo>.js`) e parágrafos (`data/textos-<alvo>.js`)
Mesmo formato de `data/frases-it.js` e `data/textos-it.js`: `[tema, texto no alvo, tradução, blocos]`, blocos `[trecho no alvo, tradução do trecho, "lema1|lema2"]`.
- 130 frases curtas (4 a 12 palavras) e 18 parágrafos (40 a 70 palavras), temas do dia a dia, usando os temas já existentes (veja os de `data/frases-it.js`).
- Lemas: exatamente a coluna `palavra` de `data/<alvo>.js`. Cubra bem as primeiras 300 palavras e espalhe pelas 1000.
- Blocos seguem a ordem do alvo; juntos reconstroem o texto; cada bloco é um trecho de sentido (não separe artigo de substantivo nem preposição do complemento); a tradução de cada bloco deve soar aceitável no meio de blocos estrangeiros.
- Valide: `node tools/check_frases.js <alvo>` e `node tools/check_frases.js <alvo> textos`.

## Parte C: 3 histórias interativas (`tools/hist-src-<alvo>/<id>.js`)
Siga `tools/hist-src/FORMATO.md` (estrutura, narrativa, blocos, lemas), trocando:
- `VB_HIST.de.push(` por `VB_HIST.<alvo>.push(`; nas escolhas use `{ pt: "...", fl: "...no alvo...", ir: ... }`.
- Lemas = coluna `palavra` de `data/<alvo>.js`; personagens e lugares do país do alvo; gênero da lista do FORMATO.md (em português, é uma chave interna).
- Títulos, desc, cap, nota, finais e traduções na língua primária do alvo.
Validar cada uma: `node tools/check_historias.js --lang=<alvo> tools/hist-src-<alvo>/<id>.js` até `problemas: 0`. No fim gere o arquivo do app: `node tools/build_historias_lang.js <alvo>`.

Ao terminar, responda com um resumo curto do que fez e o resultado dos validadores.
