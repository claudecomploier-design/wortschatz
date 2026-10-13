# Aprender entre seis idiomas

## O que foi implementado
- Menu global **Eu sei → Aprender**. Todas as 30 combinações dirigidas entre **alemão, italiano, francês, inglês, espanhol e português** são selecionáveis.
- Mantém os cartões, o progresso das frases híbridas e o progresso das histórias separados por alvo e, para pares fora da língua-base original, também por idioma de origem.
- Para o par original, usa os dados editoriais do curso sem solicitar traduções externas.
- Para pares alternativos, consulta o serviço público **MyMemory** por palavra, frase e bloco de história, conforme aparecem no estudo. Guarda traduções individualmente no navegador para reduzir requisições.
- As frases do modo de teste usam somente respostas e alternativas já traduzidas para a língua de origem. O modo «Não sei» continua contando erro, e XP/combo continuam funcionando.
- Nas histórias, texto e opções são traduzidos antes da cena ser exibida. Se o serviço não estiver disponível, um aviso substitui a tradução errada, com botão de tentar novamente.
- Rótulos principais de navegação, método simplificado e dicas genéricas dos cartões aparecem no idioma de origem nos novos pares.
- Os modos existentes, racha, XP, avatar e três cursos originais foram mantidos.

## Limitações importantes
1. **A tradução automática de pares novos requer internet**, a menos que a mesma tradução tenha sido guardada anteriormente. O provedor gratuito pode limitar, bloquear ou interromper requisições. Sem acesso ao serviço, não existe conversão offline garantida das 30 combinações.
2. As traduções não passaram por revisão humana e podem falhar com palavras polissêmicas, expressões idiomáticas, artigos e orações.
3. A localização da interface abrange comandos essenciais, mas telas como relatório, ranking e opções secundárias ainda usam português.
4. Conteúdos editoriais e mnemônicos originais estão completos principalmente para os pares iniciais (alemão, italiano, francês, inglês, espanhol com base portuguesa, e português com base inglesa). Os demais são derivados por tradução automática no momento do uso.
5. O serviço MyMemory recebe somente o trecho solicitado e os códigos dos idiomas na URL HTTPS. Não coloque informações privadas nos exercícios. Não há conta nem senha conectada ao provedor.
6. O áudio foi melhorado **sem API key**: o seletor em «Método» prioriza vozes de maior qualidade e opções online disponibilizadas pelo navegador, especialmente vozes Microsoft Natural no Edge. Na ausência dessas vozes, usa a voz disponível no dispositivo; portanto a naturalidade varia.
7. No modo de vocabulário cruzado, o exemplo da carta é mostrado na língua estudada com tradução na língua conhecida; não exibe um exemplo híbrido antigo em português quando a base não é portuguesa. O minijogo separado Frases traduz os próprios blocos.

## Validação
`node tools/check_ui.js` e `node tools/smoke_langs.js`, `node tools/smoke_pairs.js` em Google Chrome/Playwright. Em `smoke_pairs.js`, o serviço de tradução é simulado para que todos os pares, cenas e testes sejam determinísticos. Isso **não comprova disponibilidade real ou precisão linguística do MyMemory**.

## Serviços
- https://mymemory.translated.net/doc/spec.php
- https://learn.microsoft.com/en-us/deployedge/microsoft-edge-browser-policies/configureonlinetexttospeech
