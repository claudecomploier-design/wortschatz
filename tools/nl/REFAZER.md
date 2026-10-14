# Refazer o curso de inglês (en), espanhol (es) e português (pt)

O conteúdo atual destas três línguas foi gerado por modelos repetitivos e NÃO serve: ganchos genéricos ("Associe X à ideia de Y"), pronúncia trocada por "ouça o áudio", exemplos como "I learned the word X today" e frases sem sentido ("I try to happen"). Você vai reescrever com a mesma qualidade de `data/de.js` e `data/it.js` (leia 60 linhas de cada antes de começar; esse é o padrão mínimo).

Leia também `tools/NOVA-LINGUA.md` (formato das colunas, língua primária de cada alvo, variedades). Resumo:
- en (inglês americano) e es (espanhol neutro latino-americano): explicações em **português do Brasil**, para brasileiros.
- pt (português do Brasil): explicações em **inglês**, para falantes de inglês.

## Palavras
A lista atual (palavra, gênero, tradução) está em `tools/nl/<alvo>/orig.json`, na ordem de frequência. Ela foi tirada de legendas e às vezes traz formas conjugadas ("está", "é", "há", "estaba") ou palavras repetidas por variação. Regras:
- Mantenha a palavra de cada linha quando ela é boa. Troque formas conjugadas pelo infinitivo/forma de dicionário, se o infinitivo ainda não estiver em nenhum lugar da lista; senão, troque por uma palavra frequente que esteja faltando (confira com `grep` no orig.json). Ordem de frequência aproximada se mantém.
- Corrija gênero e tradução quando estiverem errados.
- Escreva TODAS as outras colunas do zero, com cuidado:
  - **pronúncia**: como o leitor da língua primária leria, sílaba tônica marcada. Ex. en para brasileiro: `"thrú (th com a língua entre os dentes)"`, `"uórk"`; es para brasileiro: `"ka-RRO (rr vibrado forte)"`; pt para falante de inglês: `"kah-ZAH"`, `"pow (rhymes with 'cow', nasal)"`. Proibido: "ouça o áudio", "aproximado", "confira".
  - **tipo + gancho**: mnemônico específico daquela palavra, com uma imagem ou ligação concreta. Bons exemplos (do alemão): `"IXI, fui EU." O ch alemão depois de i soa como esse chiado.` / `make → machen (k vira ch).` / `Hamlet em alemão: "Sein oder Nichtsein"`. Para es→brasileiro, o atalho principal é o parente em português e as trocas de som (o→ue: porta → puerta; -dade → -dad; f → h: fazer → hacer), e cada **falso amigo** (exquisito, embarazada, oficina, polvo, rato, borracha, apellido, pelado...) deve vir com tipo FALSO e o aviso. Para en→brasileiro, use cognatos, trocas regulares (-tion/-ção, -ty/-dade), imagens e sons do português. Para pt→inglês, cognatos ingleses e trocas (-ção/-tion, -dade/-ty, -mente/-ly), sons parecidos em inglês. **Nunca** a mesma frase com só a palavra trocada: o validador recusa modelos repetidos.
  - **exemplo**: frase curta (4 a 10 palavras), natural, de situação real, que contenha a palavra na mesma forma. Varie os contextos. Proibido: "I learned the word...", "X is important.", "La palabra X...", "Hoy hablamos de...". Atenção à gramática (es: "del", "al"; contrações; pt: "do", "na", crase).
  - **tradução do exemplo**: natural.

## Arquivos (trabalho dividido)
Cada pessoa escreve só a sua parte, em lotes de 100, numa lista JSON de linhas com 8 colunas:
`tools/nl/<alvo>/w-0.json` (linhas 0 a 499) ou `tools/nl/<alvo>/w-500.json` (linhas 500 a 999). Comece pelas primeiras 100 linhas da sua parte, valide, e vá acrescentando 100 por vez ao mesmo arquivo.

Valide a sua parte sempre que acrescentar um lote:
```
node tools/check_words.js <alvo> tools/nl/<alvo>/w-<início>.json
```
Até `problemas: 0` com as 500 linhas. O validador também acusa palavra repetida com a outra metade.
Use uma pasta só sua para rascunhos: `/tmp/claude-0/-home-claude-wortschatz/3aed04db-b1fe-5c49-88e6-718c108d5d2d/scratchpad/<alvo>-<início>/` (outras pessoas trabalham ao mesmo tempo).

Nunca use o travessão "—". Não use git. Não altere nenhum arquivo fora da sua parte. Ao terminar, responda com um resumo curto: quantas linhas, quantas palavras trocadas e por quê, resultado do validador.
