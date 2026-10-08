# Histórias Interativas: formato e regras de escrita

App: "Vokabel 1000", ensina as 1000 palavras mais frequentes do alemão com **frases híbridas**: o texto é escrito em alemão, dividido em blocos, e o app mostra alguns blocos em alemão e os outros traduzidos para o português, conforme a proporção escolhida (30/50/70/100% de alemão ou automático pelo nível). O leitor é um adulto brasileiro, iniciante a intermediário (A1 a A2).

## Arquivo

Cada história é um arquivo `tools/hist-src/<id>.js` com exatamente este formato:

```js
VB_HIST.de.push({
  id: "berlim-noite",                 // slug, minúsculas e hífen
  titulo: "Última estação",           // título em português, curto
  genero: "Viagem",                   // exatamente um de: Mistério | Viagem | Cotidiano | Relações | Suspense | Trabalho | Ficção científica | Sobrevivência
  nivel: "A1–A2",                     // "A1", "A1–A2" ou "A2"
  desc: "Você chega a Berlim tarde da noite, com o celular quase sem bateria e um endereço errado.",  // 1 ou 2 frases, em português, sem spoiler
  inicio: "c1",
  cenas: {
    c1: {
      cap: "Chegada",                 // título curto da cena, em português
      p: [                            // 1 a 3 parágrafos
        ["Texto alemão completo do parágrafo.", "Tradução completa e natural em português.", [
          ["bloco alemão", "tradução do bloco", "lema1|lema2"],
          ...
        ]]
      ],
      escolhas: [                     // 2 ou 3; em português e alemão
        { pt: "Perguntar ao homem onde fica o prédio.", de: "Den Mann nach dem Weg fragen.", ir: "c2a", marca: "falou_homem" },
        { pt: "Continuar procurando sozinho.", de: "Allein weitersuchen.", ir: "c2b" }
      ]
    },
    ...
    f_bom: { cap: "A chave", p: [ ... ], fim: { tipo: "bom", titulo: "Um lugar para ficar" } }   // tipo: bom | neutro | ruim
  }
});
```

### Campos opcionais das escolhas (consequências que voltam depois)
- `marca: "flag"`: grava um fato quando o leitor escolhe esta opção.
- `req: "flag"`: a escolha só aparece se o fato foi marcado antes.
- `sem: "flag"`: a escolha só aparece se o fato NÃO foi marcado.
Use isso para que uma decisão antiga mude o que é possível mais adiante (ex.: quem guardou o cartão do taxista pode ligar para ele no capítulo 4). Uma cena com `req` precisa ter também pelo menos 2 escolhas sem condição, ou um par `req`/`sem` com a mesma flag.
- Cenas também podem ter um campo `nota: "..."` em português para lembrar o leitor de uma consequência (opcional, curto).

## Estrutura narrativa
- 10 a 14 cenas no total, 3 ou 4 finais diferentes (pelo menos um bom e um ruim ou ambíguo).
- Cada caminho do início a um final passa por 4 a 6 cenas. Sem ciclos.
- As escolhas têm consequências reais: levam a cenas diferentes. Ramos podem se reencontrar depois, mas a cena seguinte precisa reconhecer o que o leitor fez (texto diferente, ou uma flag que muda opções mais tarde).
- Adulto e interessante: tensão, dilemas reais, personagens com motivações, diálogos curtos, detalhes concretos. Nada infantil, nada previsível. Sem violência gráfica, sem conteúdo sexual.
- Narração na 2ª pessoa (“du”), presente. O texto em português usa “você”.
- Personagens com nomes alemães comuns, coerentes do começo ao fim (nome, profissão, o que sabem).

## Regras do alemão (as mais importantes)
1. Alemão natural e gramaticalmente correto. Presente e Perfekt; Präteritum só de sein, haben e verbos modais. Frases curtas e médias. Nível A1 a A2.
2. Use principalmente palavras da lista `tools/hist-src/palavras-de.txt` (posição, lema, tradução). Palavras fora da lista são permitidas quando necessárias, mas com moderação.
3. Parágrafo: 25 a 55 palavras em alemão, dividido em 8 a 16 blocos.
4. **Blocos** seguem a ordem do texto alemão; juntando os blocos com espaço você reconstrói exatamente o parágrafo (pontuação fica grudada no bloco).
5. Cada bloco alemão é um trecho de sentido gramaticalmente completo (1 a 5 palavras): não separe artigo do substantivo, preposição do seu complemento, verbo de sua partícula separável quando estão juntos. Quando o verbo vai para o fim da oração subordinada, a oração subordinada inteira fica num bloco só. Cuidado especial: o português do bloco precisa soar natural quando aparece no meio de blocos alemães (a ordem das palavras segue o alemão, então o bloco português deve ser um trecho autônomo, como "eu levanto cedo.").
6. Terceiro campo: os lemas, separados por "|", **exatamente** como aparecem na coluna 2 de palavras-de.txt (substantivos com maiúscula; verbos no infinitivo; artigos definidos sempre como "der"; indefinidos como "ein"; possessivos como "mein", "dein", "sein" (pronome) etc.; contrações: "im" = "in|der", "zum" = "zu|der", "am" = "an|der", "vom" = "von|der", "zur" = "zu|der", "beim" = "bei|der"; verbos separáveis pelo infinitivo se existir na lista, senão o verbo base). Liste só palavras que estão na lista. Bloco sem nenhuma palavra da lista: deixe "" (no máximo 25% dos blocos).
7. Tradução PT do bloco: natural, mantendo maiúsculas e pontuação de acordo com a posição.
8. Opções de escolha: `de` é uma frase curta e correta (infinitivo ou imperativo, ex.: "Den Mann fragen."), `pt` a versão em português.

## Validação (obrigatória)
Rode no diretório /home/claude/wortschatz:
```
node tools/check_historias.js tools/hist-src/<id>.js
```
Corrija até sair "problemas: 0". O validador confere lemas, blocos, cenas, finais, alcance, ciclos e tamanho dos caminhos. Ele NÃO confere a gramática: releia todo o alemão com cuidado antes de terminar.

## Exemplo de um parágrafo bem dividido
```js
["Es ist schon spät, und dein Handy hat nur noch zwei Prozent. Vor dem Bahnhof steht ein Mann mit einem alten Hund. Er sieht dich an und fragt: „Suchst du etwas?“",
 "Já é tarde, e seu celular só tem dois por cento. Na frente da estação há um homem com um cachorro velho. Ele olha para você e pergunta: “Está procurando alguma coisa?”",
 [["Es ist schon spät,","Já é tarde,","es|sein|schon|spät"],
  ["und dein Handy","e seu celular","und|dein|Handy"],
  ["hat nur noch zwei Prozent.","só tem dois por cento.","haben|nur|noch|zwei"],
  ["Vor dem Bahnhof","Na frente da estação","vor|der|Bahnhof"],
  ["steht ein Mann","há um homem","stehen|ein|Mann"],
  ["mit einem alten Hund.","com um cachorro velho.","mit|ein|alt|Hund"],
  ["Er sieht dich an","Ele olha para você","er|sehen|du"],
  ["und fragt:","e pergunta:","und|fragen"],
  ["„Suchst du etwas?“","“Está procurando alguma coisa?”","suchen|du|etwas"]]]
```
(Confira cada lema na lista antes de usar; o exemplo é ilustrativo.)
