# Vokabel 1000: aprendizagem offline entre seis idiomas

O aplicativo tem seis idiomas: alemão (de), italiano (it), francês (fr), inglês (en), espanhol (es) e português (pt). Existem **30 combinações direcionais** de idioma conhecido e idioma aprendido.

## O que é usado sem internet

Depois que o site for aberto online e o service worker `vokabel-v35` terminar de instalar **todos os arquivos**, o aplicativo funciona sem conexão para:

- As seis listas originais de vocabulário, frases, parágrafos e histórias.
- Os **24 pacotes complementares** em `data/ov/<alvo>-<base>.js`, criados previamente, que armazenam a tradução das palavras, exemplos, frases, blocos de parágrafos e histórias para cada idioma-base alternativo.
- Revisões espaçadas, testes de compreensão, registro de XP, racha, ranking fictício e progresso local.
- O uso de uma voz de leitura já **instalada no aparelho**. Uma voz escolhida manualmente como “requer internet” continuará dependendo da conexão, por escolha explícita da pessoa.

Não existe chamada a MyMemory, LibreTranslate nem qualquer serviço de tradução online enquanto se estuda. O app não baixa modelos de tradução durante a sessão; consulta apenas pacotes JS estáticos incluídos na instalação.

**Importante:** o primeiro acesso ao endereço GitHub Pages, a instalação ou atualização do app e o download de novas versões exigem conexão à internet. Para garantir que todos os 24 pacotes estejam disponíveis, o service worker só conclui a instalação quando todos os arquivos forem salvos no cache.

## Como as traduções são geradas

O arquivo `tools/generate_offline_pairs.py` executa [Argos Translate](https://github.com/argosopentech/argos-translate) durante o **processo de construção no GitHub Actions**, não no navegador. O gerador usa modelos gratuitos pt→en e en→alemão, espanhol, italiano ou francês, com tradução intermediária pelo inglês quando não há rota direta necessária.

As traduções são geradas a partir dos textos originais do próprio curso e gravadas em `data/ov`. Seus dados vêm de `tools/export_translation_sources.js`. Os textos devem ser revistos linguisticamente: modelos automáticos podem confundir sinônimos, contextos, tempos verbais, gênero e pontuação.

## Armazenamento e privacidade

O conteúdo do idioma é um arquivo estático no GitHub Pages. Progresso, XP e racha continuam guardados localmente no navegador. Não é necessário cadastrar usuário num servidor externo de tradução. Limpar os dados do navegador pode apagar o progresso e os pacotes em cache.

As vozes locais dependem do sistema operacional e podem soar menos naturais do que uma voz neural online opcional. O modo automático prioriza as vozes locais. O app usa apenas o mecanismo de fala que o navegador disponibiliza, sem servidor de áudio do projeto.

## Testes

- `node tools/check_offline_packs.js`: exige todos os 24 arquivos, confere contagens, blocos e cenas.
- `node tools/smoke_langs.js`: verifica os seis idiomas originais.
- `node tools/smoke_offline_pairs.js`: instala o PWA, **desativa a internet no Chrome** e verifica os 30 pares e o carregamento de jogos reais com pacotes locais.

A validação sintática e a navegação não equivalem a uma revisão humana das traduções.
