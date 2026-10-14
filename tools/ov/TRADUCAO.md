# Tradução de um par de línguas (alvo explicado na língua base)

## O app
"Vokabel 1000" ensina as ~1000 palavras mais frequentes de uma língua (o **alvo**) com cartões de memória, ganchos mnemônicos, frases e histórias **híbridas** (o texto é dividido em blocos; alguns aparecem no alvo, os outros na língua que a pessoa já sabe). Antes, tudo era explicado em português. Agora a pessoa escolhe a língua que **fala** (a **base**): pt, en, es, de, it ou fr. Você vai produzir todo o conteúdo explicativo de UM par `<alvo>-<base>`.

O leitor é um adulto falante nativo da língua base, iniciante (A1 a A2) no alvo. Escreva como um nativo da base escreveria: natural, claro, sem tradução literal.

Material de origem (o alvo + a explicação na língua primária, que é português, ou inglês quando o alvo é português):
```
node tools/ov/source.js <alvo> w 0 99      # palavras 0 a 99 (repita em lotes de 100 até o fim)
node tools/ov/source.js <alvo> f           # frases curtas
node tools/ov/source.js <alvo> t           # parágrafos
node tools/ov/source.js <alvo> m           # texto da aba Método (HTML)
node tools/ov/source.js <alvo> h           # lista de histórias
node tools/ov/source.js <alvo> h <id>      # uma história com contexto
node tools/ov/source.js <alvo> skel <id>   # esqueleto exato da saída da história
```

## Onde escrever
Tudo em `tools/ov-src/<alvo>-<base>/` (crie a pasta). Não mexa em nenhum outro arquivo do repositório e **não use git**.

| Parte | Arquivo | Conteúdo |
|---|---|---|
| Palavras | `w-0.json`, `w-100.json`, `w-200.json`... | lista JSON; o número no nome é o índice da primeira linha. Lotes contínuos, sem buracos, até a última palavra. |
| Frases | `f.json` | uma entrada por frase, na mesma ordem |
| Parágrafos | `t.json` | idem |
| Método | `m.html` | HTML |
| Histórias | `h/<id>.json` | um arquivo por história |

Valide sempre: `node tools/ov/check.js <alvo> <base>` (ou só uma parte: `... w`, `... f`, `... t`, `... m`, `... h`). Repita até `problemas: 0`.

## 1. Palavras: cada linha é `[tradução, pronúncia, tipo, gancho, tradução do exemplo]`
- **tradução**: o(s) significado(s) principal(is) na base, curto. Vários sentidos separados por " / ". Para verbos, o infinitivo da base. Ex. (de→en) `"to have"`, `"house / home"`.
- **pronúncia**: como um falante da base leria em voz alta, usando a ortografia da base. Marque a sílaba tônica de forma consistente (acento gráfico ou MAIÚSCULAS). Para sons que não existem na base, uma nota curta entre parênteses. Ex. (de→en) `"ikh (ch as in Scottish loch)"`, (de→es) `"ij (j suave)"`, (fr→de) `"bonschuhr"`.
- **tipo**: um código da lista, do ponto de vista de quem fala a base:
  `EN` ES IT FR DE PT LA CA (parente/semelhança com essa língua), `SOM` (soa como uma palavra/frase da língua base), `IMG` (imagem mental), `REGRA` (regra gramatical ou de som), `FALSO` (falso amigo entre alvo e base: avise!), `ONO` (onomatopeia), `PAD` (padrão de formação, prefixo/sufixo), `FRASE` (frase ou expressão famosa), `NOME` (nome famoso).
  Use `PT` só se a base for português. Não use a própria língua alvo como tipo.
- **gancho**: mnemônico NOVO, pensado para quem fala a base (não traduza o gancho português: trocadilhos em português não funcionam). 1 ou 2 frases curtas, concretas, fáceis de lembrar. Prioridade:
  1. parente direto na língua base (o mais forte quando existe: de→en `house → Haus`, fr→it `maison` vs `casa`... nesse caso procure outro parente, ex. `magione`);
  2. parente em inglês, que quase todo mundo conhece (quando a base não é inglês);
  3. palavra da base com som parecido (SOM), com uma cena exagerada que liga som e sentido;
  4. imagem, regra ou padrão.
  Quando o alvo tem gênero (de, es, it, fr, pt), o gancho de substantivo pode reforçar o gênero, mas sem repetir a palavra "masculino/feminino" em todo gancho. Avise falsos amigos entre alvo e base.
- **tradução do exemplo**: tradução natural da frase de exemplo (a frase no alvo NÃO muda).

Escreva em lotes de 100 (`w-0.json`, `w-100.json`...), validando a cada lote. O número de linhas total é o que o `source.js` mostrar (algumas listas têm um pouco mais de 1000).

## 2. Frases (`f.json`) e parágrafos (`t.json`): cada item é `[tradução completa, [tradução de cada bloco]]`
- Mesma ordem e mesmo número de itens que a origem; mesmo número de blocos em cada item.
- **tradução completa**: natural e fiel.
- **blocos**: o app mistura blocos do alvo com blocos traduzidos, **na ordem do alvo**. Então cada bloco traduzido precisa ser um trecho autônomo que soe aceitável no meio de blocos estrangeiros. Mantenha maiúscula no início da frase e a pontuação colada no fim do bloco, conforme a posição. Não tente "consertar" a ordem: cada bloco traduz o seu trecho.
  Exemplo (de→en): blocos `["Heute stehe ich früh auf.", "Ich trinke", "schnell einen Kaffee"]` → `["Today I get up early.", "I drink", "a coffee quickly"]`.

## 3. Método (`m.html`)
Reescreva o texto da aba Método para quem fala a base, mantendo o HTML (as mesmas tags e classes: `section`, `h2`, `ul`, `li`, `b`, `div class="tbl"`, `table`, `div class="gbox"`, `b class="g-m"` etc.). Não é tradução literal: adapte os atalhos à base. Ex.: para quem fala inglês aprendendo alemão, as trocas de som inglês→alemão são o atalho principal; para quem fala espanhol aprendendo italiano, compare com o espanhol. Tamanho parecido com o original. Sem `<script>`.

## 4. Histórias (`h/<id>.json`)
Gere o esqueleto com `node tools/ov/source.js <alvo> skel <id>` e substitua cada texto pela versão na base, mantendo exatamente a mesma estrutura (mesmas chaves, mesmas listas, mesmo número de blocos). Use `node tools/ov/source.js <alvo> h <id>` para ver o texto estrangeiro de cada parte. Campos: `titulo`, `desc`, e por cena `cap`, `nota` (se houver), `p` = lista de `[tradução completa do parágrafo, [traduções dos blocos]]`, `e` = textos das escolhas, `fim` = título do final. A narração é em 2ª pessoa (you / tú / du / tu...), presente. Mantenha os nomes próprios.

## Trabalho já começado e rascunhos
- Se a pasta do seu par já tiver arquivos de uma tentativa anterior (ex.: `w-0.json`, `w-100.json`), revise-os rapidamente, corrija o que estiver fraco e continue a partir de onde pararam.
- Outras pessoas trabalham ao mesmo tempo em outros pares. Use uma pasta de rascunho só sua: `/tmp/claude-0/-home-claude-wortschatz/3aed04db-b1fe-5c49-88e6-718c108d5d2d/scratchpad/<alvo>-<base>-<parte>/`.
- O validador também recusa ganchos de modelo (a mesma frase com só a palavra trocada) e pronúncias vagas ("listen to the audio"). Cada gancho precisa ser específico.

## Regras gerais
- Nunca use o travessão "—". Use vírgula, dois-pontos ou ponto.
- Ortografia e acentuação corretas da base; nada de texto em português ou inglês sobrando (exceto quando a base é essa língua, ou num gancho que cite de propósito um parente em inglês).
- Releia tudo antes de terminar: o validador confere a estrutura, não a qualidade.
- Ao terminar, responda com um resumo curto: o que fez, `problemas: 0` de cada parte e dúvidas que ficaram.
