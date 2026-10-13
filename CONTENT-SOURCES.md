# Expansão Vokabel 1000: inglês, espanhol e português

Esta expansão acrescenta aos arquivos de cada idioma:
- 1000 entradas de vocabulário, com exemplo e tradução;
- 130 frases híbridas;
- 18 parágrafos híbridos (aproximadamente 46 a 59 palavras);
- 3 histórias interativas, com dez cenas e três finais cada;
- orientação de método e arquivos no cache offline.

## Fontes de apoio

- Frequência relativa das palavras: [FrequencyWords, listas OpenSubtitles de 2018](https://github.com/hermitdave/FrequencyWords), arquivos `en_50k.txt`, `es_50k.txt` e `pt_50k.txt`.
- Vocabulário e significados de apoio: [polyglot-dictionaries](https://github.com/appsinacup/polyglot-dictionaries), especialmente `1000_words/words_pt.csv` e `1000_words/words_es_translated.csv` (projeto MIT).
- Verbos espanhol/inglês: [spanish-english-json](https://github.com/fufu70/spanish-english-json), `en-es-verbs.json`.
- Listas alinhadas complementares: [thousand-most-common-words](https://github.com/SMenigat/thousand-most-common-words); somente entradas úteis e verificáveis por regras de filtragem foram consideradas.
- Correções prioritárias das palavras funcionais de português e espanhol e textos de exercícios redigidos especificamente para o app.

As palavras foram ordenadas pela frequência de *formas* em corpus de diálogo, não por um ranking independente de 1000 lemas cientificamente validado. Isso afeta sobretudo verbos conjugados, artigos e pronomes.

## Controle de qualidade

- `node tools/check_words.js en|es|pt` (um idioma por comando)
- `node tools/check_frases.js en|es|pt frases`
- `node tools/check_frases.js en|es|pt textos`
- `node tools/check_historias.js --lang=en|es|pt`
- `node tools/check_expansion_draft.js`
- `node tools/smoke_langs.js` com Playwright Core e Chrome no GitHub Actions.

Esses testes comprovam que os arquivos têm estrutura válida, que existem as entradas necessárias e que o aplicativo carrega e navega pelos modos. **Eles não substituem revisão por falantes proficientes.** Traduções polissêmicas, gênero de substantivos inferido, exemplos templáticos e pronúncia aproximada precisam de revisão editorial contínua. O botão de áudio do navegador é a principal referência de pronúncia.

As traduções opcionais entre quaisquer pares de idiomas previstas na documentação `tools/ov/TRADUCAO.md` não foram preenchidas: o curso novo tem inglês e espanhol explicados em português e português brasileiro explicado em inglês. A interface geral do app continua majoritariamente em português. Essas melhorias são tarefas separadas e não devem ser descritas como concluídas.

## Escopo anterior

Os dados e o progresso de alemão, italiano e francês foram preservados. Novos idiomas armazenam progresso com chaves separadas `vb-prog-<lang>`, seguindo o motor existente.
