// Histórias interativas (alemão). Gerado por tools/build_historias.js a partir de tools/hist-src. Validar: node tools/check_historias.js
window.VB_HIST=window.VB_HIST||{};VB_HIST.de=[];
VB_HIST.de.push({
  id: "ultima-estacao",
  titulo: "Última estação",
  genero: "Viagem",
  nivel: "A1",
  desc: "Você chega a Berlim tarde da noite, com o celular quase sem bateria e um endereço que parece errado.",
  inicio: "c1",
  cenas: {
    c1: {
      cap: "Chegada",
      p: [
        ["Es ist elf Uhr in der Nacht. Dein Zug kommt endlich am Ostbahnhof an. Für eine Woche hast du eine Wohnung in Berlin. Herr Weber, der Vermieter, hat dir die Adresse geschickt: Lindenstraße 21.",
         "São onze horas da noite. Seu trem finalmente chega à estação Ostbahnhof. Por uma semana, você tem um apartamento em Berlim. O senhor Weber, o proprietário, mandou o endereço para você: Lindenstraße 21.", [
          ["Es ist elf Uhr", "São onze horas", "es|sein|elf|Uhr"],
          ["in der Nacht.", "da noite.", "in|der|Nacht"],
          ["Dein Zug kommt endlich", "Seu trem finalmente chega", "dein|Zug|ankommen|endlich"],
          ["am Ostbahnhof an.", "à estação Ostbahnhof.", "an|der"],
          ["Für eine Woche", "Por uma semana,", "für|ein|Woche"],
          ["hast du eine Wohnung", "você tem um apartamento", "haben|du|ein|Wohnung"],
          ["in Berlin.", "em Berlim.", "in"],
          ["Herr Weber, der Vermieter,", "O senhor Weber, o proprietário,", "Herr|der"],
          ["hat dir die Adresse geschickt:", "mandou o endereço para você:", "haben|du|der|Adresse|schicken"],
          ["Lindenstraße 21.", "Lindenstraße 21.", ""]]],
        ["Dein Handy hat nur noch drei Prozent. Die Karte zeigt eine Lindenstraße, aber eine Nummer 21 gibt es dort nicht. Herr Weber antwortet nicht. Vor dem Bahnhof steht ein Mann und raucht. Neben dir ist ein kleines Café, und es ist noch offen.",
         "Seu celular só tem três por cento. O mapa mostra uma Lindenstraße, mas um número 21 não existe lá. O senhor Weber não responde. Na frente da estação há um homem fumando. Ao seu lado há um pequeno café, e ele ainda está aberto.", [
          ["Dein Handy hat", "Seu celular tem", "dein|Handy|haben"],
          ["nur noch drei Prozent.", "só três por cento.", "nur|noch|drei|Prozent"],
          ["Die Karte zeigt", "O mapa mostra", "der|Karte|zeigen"],
          ["eine Lindenstraße,", "uma Lindenstraße,", "ein"],
          ["aber eine Nummer 21", "mas um número 21", "aber|ein|Nummer"],
          ["gibt es dort nicht.", "não existe lá.", "geben|es|dort|nicht"],
          ["Herr Weber antwortet nicht.", "O senhor Weber não responde.", "Herr|antworten|nicht"],
          ["Vor dem Bahnhof", "Na frente da estação", "vor|der|Bahnhof"],
          ["steht ein Mann", "há um homem", "stehen|ein|Mann"],
          ["und raucht.", "fumando.", "und|rauchen"],
          ["Neben dir", "Ao seu lado", "neben|du"],
          ["ist ein kleines Café,", "há um pequeno café,", "sein|ein|klein"],
          ["und es ist noch offen.", "e ele ainda está aberto.", "und|es|sein|noch|offen"]]]
      ],
      escolhas: [
        { pt: "Perguntar ao homem na frente da estação.", de: "Den Mann vor dem Bahnhof fragen.", ir: "c2a" },
        { pt: "Continuar procurando sozinho.", de: "Allein weitersuchen.", ir: "c2b" },
        { pt: "Entrar no café e pedir ajuda.", de: "Ins Café gehen und um Hilfe bitten.", ir: "c2c" }
      ]
    },
    c2a: {
      cap: "O taxista",
      p: [
        ["Der Mann heißt Udo und fährt Taxi, aber heute hat er frei. Er liest die Adresse und lacht laut. „Lindenstraße? In Berlin gibt es vier Lindenstraßen, mein Freund! Welche meinst du?“ Du weißt es nicht.",
         "O homem se chama Udo e é taxista, mas hoje está de folga. Ele lê o endereço e ri alto. “Lindenstraße? Em Berlim existem quatro Lindenstraßen, meu amigo! Qual você quer dizer?” Você não sabe.", [
          ["Der Mann heißt Udo", "O homem se chama Udo", "der|Mann|heißen"],
          ["und fährt Taxi,", "e é taxista,", "und|fahren|Taxi"],
          ["aber heute hat er frei.", "mas hoje está de folga.", "aber|heute|haben|er|frei"],
          ["Er liest die Adresse", "Ele lê o endereço", "er|lesen|der|Adresse"],
          ["und lacht laut.", "e ri alto.", "und|lachen|laut"],
          ["„Lindenstraße?", "“Lindenstraße?", ""],
          ["In Berlin gibt es", "Em Berlim existem", "in|geben|es"],
          ["vier Lindenstraßen,", "quatro Lindenstraßen,", "vier"],
          ["mein Freund!", "meu amigo!", "mein|Freund"],
          ["Welche meinst du?“", "Qual você quer dizer?”", "welcher|meinen|du"],
          ["Du weißt es nicht.", "Você não sabe.", "du|wissen|es|nicht"]]],
        ["Udo zeigt dir seine Karte: „Hier ist meine Nummer. Ich fahre jetzt nach Kreuzberg. Dort ist die bekannteste Lindenstraße. Komm mit, es kostet nichts.“ Er ist freundlich, aber sein Auto riecht stark nach Zwiebeln.",
         "Udo mostra a você o cartão dele: “Aqui está o meu número. Eu vou agora para Kreuzberg. Lá fica a Lindenstraße mais conhecida. Venha junto, não custa nada.” Ele é simpático, mas o carro dele tem um cheiro forte de cebola.", [
          ["Udo zeigt dir", "Udo mostra a você", "zeigen|du"],
          ["seine Karte:", "o cartão dele:", "sein|Karte"],
          ["„Hier ist meine Nummer.", "“Aqui está o meu número.", "hier|sein|mein|Nummer"],
          ["Ich fahre jetzt", "Eu vou agora", "ich|fahren|jetzt"],
          ["nach Kreuzberg.", "para Kreuzberg.", "nach"],
          ["Dort ist", "Lá fica", "dort|sein"],
          ["die bekannteste Lindenstraße.", "a Lindenstraße mais conhecida.", "der|bekannt"],
          ["Komm mit,", "Venha junto,", "kommen"],
          ["es kostet nichts.“", "não custa nada.”", "es|kosten|nichts"],
          ["Er ist freundlich,", "Ele é simpático,", "er|sein|freundlich"],
          ["aber sein Auto", "mas o carro dele", "aber|sein|Auto"],
          ["riecht stark", "tem um cheiro forte", "riechen|stark"],
          ["nach Zwiebeln.", "de cebola.", "nach|Zwiebel"]]]
      ],
      escolhas: [
        { pt: "Ir de carro com o Udo.", de: "Mit Udo fahren.", ir: "c3a" },
        { pt: "Guardar o cartão dele e pegar o ônibus noturno.", de: "Udos Karte nehmen und mit dem Nachtbus fahren.", ir: "c3b", marca: "karte_udo" }
      ]
    },
    c2b: {
      cap: "Sozinho na rua",
      p: [
        ["Du gehst allein durch die dunklen Straßen. Es ist kalt, und dein Koffer ist schwer. Nach zehn Minuten fragst du eine Frau, aber sie spricht kein Deutsch. Dann kommt ein junger Mann zu dir. Er ist sehr freundlich.",
         "Você anda sozinho pelas ruas escuras. Está frio, e sua mala está pesada. Depois de dez minutos, você pergunta a uma mulher, mas ela não fala alemão. Então um homem jovem vem até você. Ele é muito simpático.", [
          ["Du gehst allein", "Você anda sozinho", "du|gehen|allein"],
          ["durch die dunklen Straßen.", "pelas ruas escuras.", "durch|der|dunkel|Straße"],
          ["Es ist kalt,", "Está frio,", "es|sein|kalt"],
          ["und dein Koffer", "e sua mala", "und|dein|Koffer"],
          ["ist schwer.", "está pesada.", "sein|schwer"],
          ["Nach zehn Minuten", "Depois de dez minutos,", "nach|zehn|Minute"],
          ["fragst du eine Frau,", "você pergunta a uma mulher,", "fragen|du|ein|Frau"],
          ["aber sie spricht kein Deutsch.", "mas ela não fala alemão.", "aber|sie|sprechen|kein|deutsch"],
          ["Dann kommt", "Então vem", "dann|kommen"],
          ["ein junger Mann", "um homem jovem", "ein|jung|Mann"],
          ["zu dir.", "até você.", "zu|du"],
          ["Er ist sehr freundlich.", "Ele é muito simpático.", "er|sein|sehr|freundlich"]]],
        ["„Suchst du ein Zimmer? Ich habe eins hier in der Nähe, nur zwanzig Euro pro Nacht.“ Das ist sehr billig für Berlin. Aber der Mann will das Geld sofort und schaut immer wieder auf deine Tasche.",
         "“Está procurando um quarto? Eu tenho um aqui perto, só vinte euros por noite.” Isso é muito barato para Berlim. Mas o homem quer o dinheiro na hora e olha toda hora para a sua bolsa.", [
          ["„Suchst du ein Zimmer?", "“Está procurando um quarto?", "suchen|du|ein|Zimmer"],
          ["Ich habe eins", "Eu tenho um", "ich|haben|eins"],
          ["hier in der Nähe,", "aqui perto,", "hier|in|der"],
          ["nur zwanzig Euro", "só vinte euros", "nur|zwanzig|Euro"],
          ["pro Nacht.“", "por noite.”", "Nacht"],
          ["Das ist sehr billig", "Isso é muito barato", "das|sein|sehr|billig"],
          ["für Berlin.", "para Berlim.", "für"],
          ["Aber der Mann will", "Mas o homem quer", "aber|der|Mann|wollen"],
          ["das Geld sofort", "o dinheiro na hora", "der|Geld|sofort"],
          ["und schaut immer wieder", "e olha toda hora", "und|schauen|immer|wieder"],
          ["auf deine Tasche.", "para a sua bolsa.", "auf|dein|Tasche"]]]
      ],
      escolhas: [
        { pt: "Ir ver o quarto.", de: "Das Zimmer ansehen.", ir: "c3c" },
        { pt: "Dizer não e pegar o ônibus noturno.", de: "Nein sagen und den Nachtbus nehmen.", ir: "c3b" }
      ]
    },
    c2c: {
      cap: "O café",
      p: [
        ["Das Café ist klein und warm. Hinter der Kasse steht eine Frau mit kurzen Haaren. Sie heißt Selin, und das Café gehört ihr. Du zeigst ihr die Nachricht. „Herr Weber? Den kenne ich! Er trinkt hier jeden Morgen seinen Kaffee.“",
         "O café é pequeno e quentinho. Atrás do caixa está uma mulher de cabelo curto. Ela se chama Selin, e o café é dela. Você mostra a mensagem a ela. “O senhor Weber? Esse eu conheço! Ele toma o café dele aqui toda manhã.”", [
          ["Das Café ist klein", "O café é pequeno", "der|sein|klein"],
          ["und warm.", "e quentinho.", "und|warm"],
          ["Hinter der Kasse", "Atrás do caixa", "hinter|der|Kasse"],
          ["steht eine Frau", "está uma mulher", "stehen|ein|Frau"],
          ["mit kurzen Haaren.", "de cabelo curto.", "mit|kurz|Haar"],
          ["Sie heißt Selin,", "Ela se chama Selin,", "sie|heißen"],
          ["und das Café gehört ihr.", "e o café é dela.", "und|der|gehören|sie"],
          ["Du zeigst ihr", "Você mostra a ela", "du|zeigen|sie"],
          ["die Nachricht.", "a mensagem.", "der|Nachricht"],
          ["„Herr Weber?", "“O senhor Weber?", "Herr"],
          ["Den kenne ich!", "Esse eu conheço!", "der|kennen|ich"],
          ["Er trinkt hier", "Ele toma aqui", "er|trinken|hier"],
          ["jeden Morgen", "toda manhã", "jeder|Morgen"],
          ["seinen Kaffee.“", "o café dele.”", "sein|Kaffee"]]],
        ["Selin ruft Herrn Weber an, aber er antwortet nicht. „Er schläft sicher schon. Er wohnt in der Lindenstraße, aber die Nummer weiß ich nicht.“ Dann zeigt sie auf dein Handy: „Du kannst es hier laden, wenn du willst.“",
         "Selin liga para o senhor Weber, mas ele não atende. “Ele com certeza já está dormindo. Ele mora na Lindenstraße, mas o número eu não sei.” Então ela aponta para o seu celular: “Você pode carregá-lo aqui, se quiser.”", [
          ["Selin ruft Herrn Weber an,", "Selin liga para o senhor Weber,", "anrufen|Herr"],
          ["aber er antwortet nicht.", "mas ele não atende.", "aber|er|antworten|nicht"],
          ["„Er schläft sicher schon.", "“Ele com certeza já está dormindo.", "er|schlafen|sicher|schon"],
          ["Er wohnt", "Ele mora", "er|wohnen"],
          ["in der Lindenstraße,", "na Lindenstraße,", "in|der"],
          ["aber die Nummer", "mas o número", "aber|der|Nummer"],
          ["weiß ich nicht.“", "eu não sei.”", "wissen|ich|nicht"],
          ["Dann zeigt sie", "Então ela aponta", "dann|zeigen|sie"],
          ["auf dein Handy:", "para o seu celular:", "auf|dein|Handy"],
          ["„Du kannst es hier laden,", "“Você pode carregá-lo aqui,", "du|können|es|hier"],
          ["wenn du willst.“", "se quiser.”", "wenn|du|wollen"]]]
      ],
      escolhas: [
        { pt: "Esperar no café e carregar o celular.", de: "Im Café warten und das Handy laden.", ir: "c3d", marca: "handy_geladen" },
        { pt: "Ir agora mesmo para a Lindenstraße.", de: "Sofort zur Lindenstraße gehen.", ir: "c4" }
      ]
    },
    c3a: {
      cap: "A Lindenstraße errada",
      p: [
        ["Udo fährt schnell und erzählt die ganze Zeit Geschichten über seine Gäste. Nach zwanzig Minuten hält er vor der Lindenstraße 21. Aber das Haus ist ein Büro, und alles ist dunkel. Kein Weber, keine Wohnung.",
         "Udo dirige rápido e conta o tempo todo histórias sobre os passageiros dele. Depois de vinte minutos, ele para na frente da Lindenstraße 21. Mas o prédio é um escritório, e está tudo escuro. Nenhum Weber, nenhum apartamento.", [
          ["Udo fährt schnell", "Udo dirige rápido", "fahren|schnell"],
          ["und erzählt die ganze Zeit", "e conta o tempo todo", "und|erzählen|der|ganz|Zeit"],
          ["Geschichten über seine Gäste.", "histórias sobre os passageiros dele.", "Geschichte|über|sein|Gast"],
          ["Nach zwanzig Minuten", "Depois de vinte minutos,", "nach|zwanzig|Minute"],
          ["hält er", "ele para", "halten|er"],
          ["vor der Lindenstraße 21.", "na frente da Lindenstraße 21.", "vor|der"],
          ["Aber das Haus", "Mas o prédio", "aber|der|Haus"],
          ["ist ein Büro,", "é um escritório,", "sein|ein|Büro"],
          ["und alles ist dunkel.", "e está tudo escuro.", "und|alles|sein|dunkel"],
          ["Kein Weber,", "Nenhum Weber,", "kein"],
          ["keine Wohnung.", "nenhum apartamento.", "kein|Wohnung"]]],
        ["Dann wird dein Handy schwarz: null Prozent. Udo denkt kurz nach. „Ich kenne ein Café am Ostbahnhof. Die Frau dort kennt alle Leute. Oder ich bringe dich zu einem Hostel. Das ist nicht teuer.“",
         "Então seu celular fica preto: zero por cento. Udo pensa um pouco. “Eu conheço um café perto da estação Ostbahnhof. A mulher de lá conhece todo mundo. Ou eu levo você a um albergue. Não é caro.”", [
          ["Dann wird dein Handy", "Então seu celular fica", "dann|werden|dein|Handy"],
          ["schwarz:", "preto:", "schwarz"],
          ["null Prozent.", "zero por cento.", "Prozent"],
          ["Udo denkt kurz nach.", "Udo pensa um pouco.", "denken|kurz"],
          ["„Ich kenne ein Café", "“Eu conheço um café", "ich|kennen|ein"],
          ["am Ostbahnhof.", "perto da estação Ostbahnhof.", "an|der"],
          ["Die Frau dort", "A mulher de lá", "der|Frau|dort"],
          ["kennt alle Leute.", "conhece todo mundo.", "kennen|alle|Leute"],
          ["Oder ich bringe dich", "Ou eu levo você", "oder|ich|bringen|du"],
          ["zu einem Hostel.", "a um albergue.", "zu|ein"],
          ["Das ist nicht teuer.“", "Não é caro.”", "das|sein|nicht|teuer"]]]
      ],
      escolhas: [
        { pt: "Ir com o Udo até o café.", de: "Mit Udo zum Café fahren.", ir: "c3d", marca: "handy_geladen" },
        { pt: "Pedir para ele levar você ao albergue.", de: "Udo um ein Hostel bitten.", ir: "f_hostel" }
      ]
    },
    c3b: {
      cap: "Última estação",
      p: [
        ["Der Nachtbus ist warm und fast leer. Nur ein alter Mann schläft hinten. Du bist sehr müde, und deine Augen werden schwer. „Nur einen Moment“, denkst du. Dann schläfst du ein.",
         "O ônibus noturno está quentinho e quase vazio. Só um homem velho dorme lá atrás. Você está com muito sono, e seus olhos ficam pesados. “Só um momento”, você pensa. Então você adormece.", [
          ["Der Nachtbus ist warm", "O ônibus noturno está quentinho", "der|sein|warm"],
          ["und fast leer.", "e quase vazio.", "und|fast|leer"],
          ["Nur ein alter Mann", "Só um homem velho", "nur|ein|alt|Mann"],
          ["schläft hinten.", "dorme lá atrás.", "schlafen"],
          ["Du bist sehr müde,", "Você está com muito sono,", "du|sein|sehr|müde"],
          ["und deine Augen", "e seus olhos", "und|dein|Auge"],
          ["werden schwer.", "ficam pesados.", "werden|schwer"],
          ["„Nur einen Moment“,", "“Só um momento”,", "nur|ein|Moment"],
          ["denkst du.", "você pensa.", "denken|du"],
          ["Dann schläfst du ein.", "Então você adormece.", "dann|einschlafen|du"]]],
        ["Als du aufwachst, hält der Bus. „Endstation! Alle aussteigen!“, ruft der Fahrer. Draußen siehst du nur Felder und eine Haltestelle. Dein Handy hat noch ein Prozent. An der Haltestelle wartet ein Mann und schaut dich an.",
         "Quando você acorda, o ônibus está parado. “Ponto final! Todo mundo descendo!”, grita o motorista. Lá fora você só vê campos e um ponto de ônibus. Seu celular ainda tem um por cento. No ponto, um homem espera e olha para você.", [
          ["Als du aufwachst,", "Quando você acorda,", "als|du|aufwachen"],
          ["hält der Bus.", "o ônibus está parado.", "halten|der|Bus"],
          ["„Endstation!", "“Ponto final!", ""],
          ["Alle aussteigen!“,", "Todo mundo descendo!”,", "alle|aussteigen"],
          ["ruft der Fahrer.", "grita o motorista.", "rufen|der"],
          ["Draußen siehst du", "Lá fora você vê", "draußen|sehen|du"],
          ["nur Felder", "só campos", "nur|Feld"],
          ["und eine Haltestelle.", "e um ponto de ônibus.", "und|ein|Haltestelle"],
          ["Dein Handy hat", "Seu celular tem", "dein|Handy|haben"],
          ["noch ein Prozent.", "ainda um por cento.", "noch|ein|Prozent"],
          ["An der Haltestelle", "No ponto", "an|der|Haltestelle"],
          ["wartet ein Mann", "um homem espera", "warten|ein|Mann"],
          ["und schaut dich an.", "e olha para você.", "und|schauen|du"]]],
        ["Der Fahrer sagt: „Der nächste Bus fährt erst um fünf Uhr. Dort drüben ist ein Hostel.“ Der Mann kommt zu dir: „Brauchst du ein Zimmer? Ganz billig, nur zwanzig Euro.“",
         "O motorista diz: “O próximo ônibus só sai às cinco horas. Ali tem um albergue.” O homem chega perto de você: “Precisa de um quarto? Bem barato, só vinte euros.”", [
          ["Der Fahrer sagt:", "O motorista diz:", "der|sagen"],
          ["„Der nächste Bus", "“O próximo ônibus", "der|nächste|Bus"],
          ["fährt erst um fünf Uhr.", "só sai às cinco horas.", "fahren|um|fünf|Uhr"],
          ["Dort drüben", "Ali", "dort"],
          ["ist ein Hostel.“", "tem um albergue.”", "sein|ein"],
          ["Der Mann kommt", "O homem chega", "der|Mann|kommen"],
          ["zu dir:", "perto de você:", "zu|du"],
          ["„Brauchst du ein Zimmer?", "“Precisa de um quarto?", "brauchen|du|ein|Zimmer"],
          ["Ganz billig,", "Bem barato,", "ganz|billig"],
          ["nur zwanzig Euro.“", "só vinte euros.”", "nur|zwanzig|Euro"]]]
      ],
      escolhas: [
        { pt: "Ligar para o Udo com o último um por cento.", de: "Udo mit dem letzten Prozent anrufen.", ir: "c4", req: "karte_udo" },
        { pt: "Ir ao albergue.", de: "Zum Hostel gehen.", ir: "f_hostel" },
        { pt: "Ver o quarto do homem.", de: "Mit dem Mann das Zimmer ansehen.", ir: "c3c" }
      ]
    },
    c3d: {
      cap: "Esperando no café",
      p: [
        ["Selin, die Frau hinter der Kasse, gibt dir einen Tee. Dein Handy liegt neben der Kasse und lädt langsam. Sie ruft Herrn Weber an, aber er antwortet nicht. „Er wohnt in der Lindenstraße, das weiß ich. Aber die Nummer kenne ich nicht.“",
         "Selin, a mulher atrás do caixa, dá um chá para você. Seu celular está ao lado do caixa e carrega devagar. Ela liga para o senhor Weber, mas ele não atende. “Ele mora na Lindenstraße, isso eu sei. Mas o número eu não sei.”", [
          ["Selin, die Frau", "Selin, a mulher", "der|Frau"],
          ["hinter der Kasse,", "atrás do caixa,", "hinter|der|Kasse"],
          ["gibt dir einen Tee.", "dá um chá para você.", "geben|du|ein|Tee"],
          ["Dein Handy liegt", "Seu celular está", "dein|Handy|liegen"],
          ["neben der Kasse", "ao lado do caixa", "neben|der|Kasse"],
          ["und lädt langsam.", "e carrega devagar.", "und|langsam"],
          ["Sie ruft Herrn Weber an,", "Ela liga para o senhor Weber,", "sie|anrufen|Herr"],
          ["aber er antwortet nicht.", "mas ele não atende.", "aber|er|antworten|nicht"],
          ["„Er wohnt", "“Ele mora", "er|wohnen"],
          ["in der Lindenstraße,", "na Lindenstraße,", "in|der"],
          ["das weiß ich.", "isso eu sei.", "das|wissen|ich"],
          ["Aber die Nummer", "Mas o número", "aber|der|Nummer"],
          ["kenne ich nicht.“", "eu não sei.”", "kennen|ich|nicht"]]],
        ["Um ein Uhr will Selin das Café schließen. An einem Tisch sitzt ein Mann mit einem Bier. Er hat alles gehört. „Ich habe ein Zimmer, ganz in der Nähe. Zwanzig Euro. Komm, ich zeige es dir.“ Selin sagt nichts. Aber ihr Gesicht ist sehr ernst.",
         "À uma hora, Selin quer fechar o café. Numa mesa está sentado um homem com uma cerveja. Ele ouviu tudo. “Eu tenho um quarto, bem aqui perto. Vinte euros. Vem, eu mostro para você.” Selin não diz nada. Mas o rosto dela está muito sério.", [
          ["Um ein Uhr", "À uma hora,", "um|ein|Uhr"],
          ["will Selin", "Selin quer", "wollen"],
          ["das Café schließen.", "fechar o café.", "der|schließen"],
          ["An einem Tisch", "Numa mesa", "an|ein|Tisch"],
          ["sitzt ein Mann", "está sentado um homem", "sitzen|ein|Mann"],
          ["mit einem Bier.", "com uma cerveja.", "mit|ein|Bier"],
          ["Er hat alles gehört.", "Ele ouviu tudo.", "er|haben|alles|hören"],
          ["„Ich habe ein Zimmer,", "“Eu tenho um quarto,", "ich|haben|ein|Zimmer"],
          ["ganz in der Nähe.", "bem aqui perto.", "ganz|in|der"],
          ["Zwanzig Euro.", "Vinte euros.", "zwanzig|Euro"],
          ["Komm, ich zeige es dir.“", "Vem, eu mostro para você.”", "kommen|ich|zeigen|es|du"],
          ["Selin sagt nichts.", "Selin não diz nada.", "sagen|nichts"],
          ["Aber ihr Gesicht", "Mas o rosto dela", "aber|ihr|Gesicht"],
          ["ist sehr ernst.", "está muito sério.", "sein|sehr|ernst"]]]
      ],
      escolhas: [
        { pt: "Ir com o homem ver o quarto.", de: "Mit dem Mann gehen.", ir: "c3c" },
        { pt: "Ir sozinho até a Lindenstraße.", de: "Allein zur Lindenstraße gehen.", ir: "c4" }
      ]
    },
    c3c: {
      cap: "O quarto barato",
      p: [
        ["Der Mann geht schnell, und du folgst ihm durch einen dunklen Hof. Vor einer alten Tür bleibt er stehen. „Das Zimmer ist oben. Aber zuerst das Geld: hundert Euro für die ganze Woche. Den Schlüssel bringe ich dir dann.“",
         "O homem anda rápido, e você o segue por um pátio escuro. Na frente de uma porta velha, ele para. “O quarto fica lá em cima. Mas primeiro o dinheiro: cem euros pela semana inteira. A chave eu trago para você depois.”", [
          ["Der Mann geht schnell,", "O homem anda rápido,", "der|Mann|gehen|schnell"],
          ["und du folgst ihm", "e você o segue", "und|du|folgen|er"],
          ["durch einen dunklen Hof.", "por um pátio escuro.", "durch|ein|dunkel"],
          ["Vor einer alten Tür", "Na frente de uma porta velha,", "vor|ein|alt|Tür"],
          ["bleibt er stehen.", "ele para.", "bleiben|er|stehen"],
          ["„Das Zimmer ist oben.", "“O quarto fica lá em cima.", "der|Zimmer|sein|oben"],
          ["Aber zuerst das Geld:", "Mas primeiro o dinheiro:", "aber|zuerst|der|Geld"],
          ["hundert Euro", "cem euros", "hundert|Euro"],
          ["für die ganze Woche.", "pela semana inteira.", "für|der|ganz|Woche"],
          ["Den Schlüssel", "A chave", "der|Schlüssel"],
          ["bringe ich dir dann.“", "eu trago para você depois.”", "bringen|ich|du|dann"]]],
        ["Im Hof gibt es kein Licht. An der Tür steht kein Name. Der Mann schaut auf die Uhr. „Schnell, ich habe nicht viel Zeit!“ In deiner Tasche sind genau hundert Euro. Es ist dein ganzes Geld.",
         "No pátio não há luz. Na porta não há nenhum nome. O homem olha para o relógio. “Rápido, eu não tenho muito tempo!” Na sua bolsa há exatamente cem euros. É todo o seu dinheiro.", [
          ["Im Hof", "No pátio", "in|der"],
          ["gibt es kein Licht.", "não há luz.", "geben|es|kein|Licht"],
          ["An der Tür", "Na porta", "an|der|Tür"],
          ["steht kein Name.", "não há nenhum nome.", "stehen|kein|Name"],
          ["Der Mann schaut", "O homem olha", "der|Mann|schauen"],
          ["auf die Uhr.", "para o relógio.", "auf|der|Uhr"],
          ["„Schnell,", "“Rápido,", "schnell"],
          ["ich habe nicht viel Zeit!“", "eu não tenho muito tempo!”", "ich|haben|nicht|viel|Zeit"],
          ["In deiner Tasche", "Na sua bolsa", "in|dein|Tasche"],
          ["sind genau hundert Euro.", "há exatamente cem euros.", "sein|genau|hundert|Euro"],
          ["Es ist dein ganzes Geld.", "É todo o seu dinheiro.", "es|sein|dein|ganz|Geld"]]]
      ],
      escolhas: [
        { pt: "Pagar os cem euros.", de: "Die hundert Euro bezahlen.", ir: "f_golpe" },
        { pt: "Dizer não e procurar um albergue.", de: "Nein sagen und ein Hostel suchen.", ir: "f_hostel" }
      ]
    },
    c4: {
      cap: "Número 21",
      p: [
        ["Spät in der Nacht stehst du endlich in der Lindenstraße, vor der Nummer 21. Du liest alle Namen an der Tür, aber kein Weber. Dann siehst du das Haus daneben: Nummer 12. Und dort, ganz oben, steht „Weber“!",
         "Tarde da noite, você finalmente está na Lindenstraße, na frente do número 21. Você lê todos os nomes na porta, mas nenhum Weber. Então você vê a casa ao lado: número 12. E lá, bem em cima, está escrito “Weber”!", [
          ["Spät in der Nacht", "Tarde da noite,", "spät|in|der|Nacht"],
          ["stehst du endlich", "você finalmente está", "stehen|du|endlich"],
          ["in der Lindenstraße,", "na Lindenstraße,", "in|der"],
          ["vor der Nummer 21.", "na frente do número 21.", "vor|der|Nummer"],
          ["Du liest", "Você lê", "du|lesen"],
          ["alle Namen an der Tür,", "todos os nomes na porta,", "alle|Name|an|der|Tür"],
          ["aber kein Weber.", "mas nenhum Weber.", "aber|kein"],
          ["Dann siehst du", "Então você vê", "dann|sehen|du"],
          ["das Haus daneben:", "a casa ao lado:", "der|Haus"],
          ["Nummer 12.", "número 12.", "Nummer"],
          ["Und dort, ganz oben,", "E lá, bem em cima,", "und|dort|ganz|oben"],
          ["steht „Weber“!", "está escrito “Weber”!", "stehen"]]],
        ["Er hat die Zahlen falsch geschrieben! Du klingelst einmal, zweimal, dreimal. Niemand öffnet. Im Haus ist alles dunkel, nur im ersten Stock brennt noch Licht. Es ist kalt, und du bist sehr müde.",
         "Ele escreveu os números errado! Você toca a campainha uma, duas, três vezes. Ninguém abre. Na casa está tudo escuro, só no primeiro andar ainda há uma luz acesa. Está frio, e você está com muito sono.", [
          ["Er hat die Zahlen", "Ele escreveu os números", "er|haben|der|Zahl"],
          ["falsch geschrieben!", "errado!", "falsch|schreiben"],
          ["Du klingelst", "Você toca a campainha", "du|klingeln"],
          ["einmal, zweimal, dreimal.", "uma, duas, três vezes.", ""],
          ["Niemand öffnet.", "Ninguém abre.", "niemand|öffnen"],
          ["Im Haus", "Na casa", "in|der|Haus"],
          ["ist alles dunkel,", "está tudo escuro,", "sein|alles|dunkel"],
          ["nur im ersten Stock", "só no primeiro andar", "nur|in|der|erste"],
          ["brennt noch Licht.", "ainda há uma luz acesa.", "brennen|noch|Licht"],
          ["Es ist kalt,", "Está frio,", "es|sein|kalt"],
          ["und du bist sehr müde.", "e você está com muito sono.", "und|du|sein|sehr|müde"]]]
      ],
      escolhas: [
        { pt: "Ligar de novo para o senhor Weber.", de: "Herrn Weber noch einmal anrufen.", ir: "f_bom", req: "handy_geladen" },
        { pt: "Tocar no primeiro andar, onde há luz.", de: "Im ersten Stock klingeln.", ir: "f_vizinha" },
        { pt: "Desistir e procurar um albergue.", de: "Aufgeben und ein Hostel suchen.", ir: "f_hostel" }
      ]
    },
    f_bom: {
      cap: "A chave",
      p: [
        ["Zum Glück ist dein Handy jetzt voll. Du rufst Herrn Weber an, und endlich antwortet er, sehr müde. „Die 21? Oh nein, das ist mein Fehler! Es ist die 12. Warten Sie, ich komme sofort.“",
         "Por sorte, seu celular agora está carregado. Você liga para o senhor Weber, e finalmente ele atende, com muito sono. “O 21? Ah, não, o erro é meu! É o 12. Espere, eu já vou.”", [
          ["Zum Glück", "Por sorte,", "zu|der|Glück"],
          ["ist dein Handy jetzt voll.", "seu celular agora está carregado.", "sein|dein|Handy|jetzt|voll"],
          ["Du rufst Herrn Weber an,", "Você liga para o senhor Weber,", "du|anrufen|Herr"],
          ["und endlich", "e finalmente", "und|endlich"],
          ["antwortet er,", "ele atende,", "antworten|er"],
          ["sehr müde.", "com muito sono.", "sehr|müde"],
          ["„Die 21?", "“O 21?", "der"],
          ["Oh nein,", "Ah, não,", "nein"],
          ["das ist mein Fehler!", "o erro é meu!", "das|sein|mein|Fehler"],
          ["Es ist die 12.", "É o 12.", "es|sein|der"],
          ["Warten Sie,", "Espere,", "warten|sie"],
          ["ich komme sofort.“", "eu já vou.”", "ich|kommen|sofort"]]],
        ["Zwei Minuten später öffnet Herr Weber die Tür, im Schlafanzug, mit dem Schlüssel in der Hand. Die Wohnung ist klein, aber schön. Am Morgen frühstückst du bei Selin. Sie lacht: „Willkommen in Berlin! Jetzt hast du hier eine Freundin.“",
         "Dois minutos depois, o senhor Weber abre a porta, de pijama, com a chave na mão. O apartamento é pequeno, mas bonito. De manhã, você toma café no café da Selin. Ela ri: “Bem-vindo a Berlim! Agora você tem uma amiga aqui.”", [
          ["Zwei Minuten später", "Dois minutos depois,", "zwei|Minute|später"],
          ["öffnet Herr Weber die Tür,", "o senhor Weber abre a porta,", "öffnen|Herr|der|Tür"],
          ["im Schlafanzug,", "de pijama,", "in|der"],
          ["mit dem Schlüssel", "com a chave", "mit|der|Schlüssel"],
          ["in der Hand.", "na mão.", "in|der|Hand"],
          ["Die Wohnung ist klein,", "O apartamento é pequeno,", "der|Wohnung|sein|klein"],
          ["aber schön.", "mas bonito.", "aber|schön"],
          ["Am Morgen", "De manhã,", "an|der|Morgen"],
          ["frühstückst du", "você toma café da manhã", "frühstücken|du"],
          ["bei Selin.", "no café da Selin.", "bei"],
          ["Sie lacht:", "Ela ri:", "sie|lachen"],
          ["„Willkommen in Berlin!", "“Bem-vindo a Berlim!", "in"],
          ["Jetzt hast du hier", "Agora você tem aqui", "jetzt|haben|du|hier"],
          ["eine Freundin.“", "uma amiga.”", "ein|Freundin"]]]
      ],
      fim: { tipo: "bom", titulo: "Uma chave e uma amiga" }
    },
    f_vizinha: {
      cap: "A vizinha",
      p: [
        ["Du klingelst im ersten Stock. Ein Fenster geht auf, und eine junge Frau schaut nach unten. „Weißt du, wie spät es ist?“ Du erklärst alles: die Adresse, das Handy, die lange Nacht. Die Frau hört zu und lacht dann.",
         "Você toca a campainha do primeiro andar. Uma janela se abre, e uma moça olha para baixo. “Você sabe que horas são?” Você explica tudo: o endereço, o celular, a longa noite. A mulher escuta e depois ri.", [
          ["Du klingelst", "Você toca a campainha", "du|klingeln"],
          ["im ersten Stock.", "do primeiro andar.", "in|der|erste"],
          ["Ein Fenster geht auf,", "Uma janela se abre,", "ein|Fenster|gehen"],
          ["und eine junge Frau", "e uma moça", "und|ein|jung|Frau"],
          ["schaut nach unten.", "olha para baixo.", "schauen|nach|unten"],
          ["„Weißt du,", "“Você sabe", "wissen|du"],
          ["wie spät es ist?“", "que horas são?”", "wie|spät|es|sein"],
          ["Du erklärst alles:", "Você explica tudo:", "du|erklären|alles"],
          ["die Adresse,", "o endereço,", "der|Adresse"],
          ["das Handy,", "o celular,", "der|Handy"],
          ["die lange Nacht.", "a longa noite.", "der|lang|Nacht"],
          ["Die Frau hört zu", "A mulher escuta", "der|Frau|hören"],
          ["und lacht dann.", "e depois ri.", "und|lachen|dann"]]],
        ["Sie heißt Jana und ist Studentin. „Herr Weber ist bis morgen bei seiner Tochter. Du kannst auf meinem Sofa schlafen.“ Am Morgen kommt Herr Weber mit dem Schlüssel und einem Kuchen. Er entschuldigt sich immer wieder. Danach trinkt ihr alle zusammen Kaffee.",
         "Ela se chama Jana e é estudante. “O senhor Weber está na casa da filha dele até amanhã. Você pode dormir no meu sofá.” De manhã, o senhor Weber chega com a chave e um bolo. Ele pede desculpas sem parar. Depois vocês tomam café todos juntos.", [
          ["Sie heißt Jana", "Ela se chama Jana", "sie|heißen"],
          ["und ist Studentin.", "e é estudante.", "und|sein"],
          ["„Herr Weber ist", "“O senhor Weber está", "Herr|sein"],
          ["bis morgen", "até amanhã", "bis|morgen"],
          ["bei seiner Tochter.", "na casa da filha dele.", "bei|sein|Tochter"],
          ["Du kannst", "Você pode", "du|können"],
          ["auf meinem Sofa schlafen.“", "dormir no meu sofá.”", "auf|mein|Sofa|schlafen"],
          ["Am Morgen", "De manhã,", "an|der|Morgen"],
          ["kommt Herr Weber", "o senhor Weber chega", "kommen|Herr"],
          ["mit dem Schlüssel", "com a chave", "mit|der|Schlüssel"],
          ["und einem Kuchen.", "e um bolo.", "und|ein|Kuchen"],
          ["Er entschuldigt sich", "Ele pede desculpas", "er|entschuldigen|sich"],
          ["immer wieder.", "sem parar.", "immer|wieder"],
          ["Danach trinkt ihr", "Depois vocês tomam", "danach|trinken|ihr"],
          ["alle zusammen Kaffee.", "café todos juntos.", "alle|zusammen|Kaffee"]]]
      ],
      fim: { tipo: "bom", titulo: "Uma vizinha inesperada" }
    },
    f_hostel: {
      cap: "O albergue",
      p: [
        ["Das Hostel ist laut und riecht nach Bier. Ein Bett in einem Zimmer mit acht Leuten kostet dreißig Euro. Über dir singt ein Mann bis drei Uhr. Du schläfst fast nicht.",
         "O albergue é barulhento e tem cheiro de cerveja. Uma cama num quarto com oito pessoas custa trinta euros. Em cima de você, um homem canta até as três horas. Você quase não dorme.", [
          ["Das Hostel ist laut", "O albergue é barulhento", "der|sein|laut"],
          ["und riecht nach Bier.", "e tem cheiro de cerveja.", "und|riechen|nach|Bier"],
          ["Ein Bett", "Uma cama", "ein|Bett"],
          ["in einem Zimmer", "num quarto", "in|ein|Zimmer"],
          ["mit acht Leuten", "com oito pessoas", "mit|acht|Leute"],
          ["kostet dreißig Euro.", "custa trinta euros.", "kosten|Euro"],
          ["Über dir", "Em cima de você,", "über|du"],
          ["singt ein Mann", "um homem canta", "singen|ein|Mann"],
          ["bis drei Uhr.", "até as três horas.", "bis|drei|Uhr"],
          ["Du schläfst fast nicht.", "Você quase não dorme.", "du|schlafen|fast|nicht"]]],
        ["Am Morgen kommt endlich eine Nachricht von Herrn Weber: „Entschuldigung! Die richtige Nummer ist 12, nicht 21.“ Du bist müde, aber du hast dein Geld und deine Tasche noch. Für die erste Nacht ist das nicht schlecht.",
         "De manhã, finalmente chega uma mensagem do senhor Weber: “Desculpe! O número certo é 12, não 21.” Você está com sono, mas ainda tem seu dinheiro e sua bolsa. Para a primeira noite, não é nada mal.", [
          ["Am Morgen", "De manhã,", "an|der|Morgen"],
          ["kommt endlich", "finalmente chega", "kommen|endlich"],
          ["eine Nachricht", "uma mensagem", "ein|Nachricht"],
          ["von Herrn Weber:", "do senhor Weber:", "von|Herr"],
          ["„Entschuldigung!", "“Desculpe!", "Entschuldigung"],
          ["Die richtige Nummer", "O número certo", "der|richtig|Nummer"],
          ["ist 12, nicht 21.“", "é 12, não 21.”", "sein|nicht"],
          ["Du bist müde,", "Você está com sono,", "du|sein|müde"],
          ["aber du hast", "mas você ainda tem", "aber|du|haben"],
          ["dein Geld", "seu dinheiro", "dein|Geld"],
          ["und deine Tasche noch.", "e sua bolsa.", "und|dein|Tasche|noch"],
          ["Für die erste Nacht", "Para a primeira noite,", "für|der|erste|Nacht"],
          ["ist das nicht schlecht.", "não é nada mal.", "sein|das|nicht|schlecht"]]]
      ],
      fim: { tipo: "neutro", titulo: "Uma noite no albergue" }
    },
    f_golpe: {
      cap: "Cem euros",
      p: [
        ["Du gibst dem Mann die hundert Euro. „Warte hier, ich hole den Schlüssel“, sagt er und geht. Du wartest zehn Minuten, dann zwanzig. Er kommt nicht zurück. Die Tür ist geschlossen, und niemand wohnt hier.",
         "Você dá os cem euros ao homem. “Espera aqui, eu vou buscar a chave”, diz ele, e vai embora. Você espera dez minutos, depois vinte. Ele não volta. A porta está fechada, e ninguém mora aqui.", [
          ["Du gibst dem Mann", "Você dá ao homem", "du|geben|der|Mann"],
          ["die hundert Euro.", "os cem euros.", "der|hundert|Euro"],
          ["„Warte hier,", "“Espera aqui,", "warten|hier"],
          ["ich hole den Schlüssel“,", "eu vou buscar a chave”,", "ich|holen|der|Schlüssel"],
          ["sagt er und geht.", "diz ele, e vai embora.", "sagen|er|und|gehen"],
          ["Du wartest zehn Minuten,", "Você espera dez minutos,", "du|warten|zehn|Minute"],
          ["dann zwanzig.", "depois vinte.", "dann|zwanzig"],
          ["Er kommt nicht zurück.", "Ele não volta.", "er|kommen|nicht|zurück"],
          ["Die Tür ist geschlossen,", "A porta está fechada,", "der|Tür|sein|geschlossen"],
          ["und niemand wohnt hier.", "e ninguém mora aqui.", "und|niemand|wohnen|hier"]]],
        ["Du verbringst die Nacht auf einer kalten Bank. Am Morgen schreibt Herr Weber: „Entschuldigung, die richtige Nummer ist 12!“ Du findest die Wohnung, aber dein Geld ist weg. Du hast etwas gelernt: Billig kann in Berlin sehr teuer sein.",
         "Você passa a noite num banco frio. De manhã, o senhor Weber escreve: “Desculpe, o número certo é 12!” Você encontra o apartamento, mas seu dinheiro sumiu. Você aprendeu algo: barato, em Berlim, pode sair muito caro.", [
          ["Du verbringst die Nacht", "Você passa a noite", "du|verbringen|der|Nacht"],
          ["auf einer kalten Bank.", "num banco frio.", "auf|ein|kalt|Bank"],
          ["Am Morgen", "De manhã,", "an|der|Morgen"],
          ["schreibt Herr Weber:", "o senhor Weber escreve:", "schreiben|Herr"],
          ["„Entschuldigung,", "“Desculpe,", "Entschuldigung"],
          ["die richtige Nummer ist 12!“", "o número certo é 12!”", "der|richtig|Nummer|sein"],
          ["Du findest die Wohnung,", "Você encontra o apartamento,", "du|finden|der|Wohnung"],
          ["aber dein Geld ist weg.", "mas seu dinheiro sumiu.", "aber|dein|Geld|sein|weg"],
          ["Du hast etwas gelernt:", "Você aprendeu algo:", "du|haben|etwas|lernen"],
          ["Billig kann in Berlin", "Barato, em Berlim, pode", "billig|können|in"],
          ["sehr teuer sein.", "sair muito caro.", "sehr|teuer|sein"]]]
      ],
      fim: { tipo: "ruim", titulo: "Barato que sai caro" }
    }
  }
});
VB_HIST.de.push({
  id: "quarto-livre",
  titulo: "Quarto livre",
  genero: "Cotidiano",
  nivel: "A1–A2",
  desc: "Você tem uma semana para achar um quarto em Munique e se registrar na prefeitura. Sem endereço, não há conta no banco, e sem conta não há salário.",
  inicio: "c1",
  cenas: {
    c1: {
      cap: "Uma semana",
      p: [
        ["Es ist Montag, sieben Uhr. Du bist in einem Hostel in München, in einem Zimmer mit elf anderen Leuten. Am nächsten Montag hast du einen Termin beim Bürgeramt. Ohne Anmeldung bekommst du kein Konto, und ohne Konto bekommst du kein Gehalt.",
         "É segunda-feira, sete horas. Você está num hostel em Munique, num quarto com outras onze pessoas. Na próxima segunda você tem horário marcado no Bürgeramt, a repartição de registro. Sem o registro de residência você não consegue conta no banco, e sem conta você não recebe salário.",
         [["Es ist Montag,", "É segunda-feira,", "es|sein|Montag"],
          ["sieben Uhr.", "sete horas.", "sieben|Uhr"],
          ["Du bist", "Você está", "du|sein"],
          ["in einem Hostel", "num hostel", "in|ein"],
          ["in München,", "em Munique,", "in"],
          ["in einem Zimmer", "num quarto", "in|ein|Zimmer"],
          ["mit elf anderen Leuten.", "com outras onze pessoas.", "mit|elf|ander|Leute"],
          ["Am nächsten Montag", "Na próxima segunda", "an|der|nächste|Montag"],
          ["hast du einen Termin", "você tem horário marcado", "haben|du|ein|Termin"],
          ["beim Bürgeramt.", "no Bürgeramt, a repartição de registro.", "bei|der"],
          ["Ohne Anmeldung", "Sem o registro de residência", "ohne"],
          ["bekommst du kein Konto,", "você não consegue conta no banco,", "bekommen|du|kein|Konto"],
          ["und ohne Konto", "e sem conta", "und|ohne|Konto"],
          ["bekommst du kein Gehalt.", "você não recebe salário.", "bekommen|du|kein|Gehalt"]]],
        ["Der Mann im Bürgeramt hat es am Telefon klar gesagt: Du brauchst eine Bestätigung vom Vermieter. Auf deinem Handy gibt es zwei Möglichkeiten. Eine WG in Schwabing sucht jemanden, Casting heute um 19 Uhr, „bitte pünktlich!!!“ Und eine Anzeige: ein großes Zimmer im Zentrum, nur 400 Euro, sofort frei.",
         "O homem do Bürgeramt foi bem claro ao telefone: você precisa de uma confirmação do proprietário. No seu celular há duas possibilidades. Um apartamento compartilhado em Schwabing procura alguém, casting hoje às 19h, “por favor, pontualidade!!!” E um anúncio: um quarto grande no centro, só 400 euros, livre já.",
         [["Der Mann im Bürgeramt", "O homem do Bürgeramt", "der|Mann|in|der"],
          ["hat es am Telefon", "falou ao telefone", "haben|es|an|der|Telefon"],
          ["klar gesagt:", "com toda a clareza:", "klar|sagen"],
          ["Du brauchst eine Bestätigung", "você precisa de uma confirmação", "du|brauchen|ein"],
          ["vom Vermieter.", "do proprietário.", "von|der"],
          ["Auf deinem Handy", "No seu celular", "auf|dein|Handy"],
          ["gibt es zwei Möglichkeiten.", "há duas possibilidades.", "geben|es|zwei|Möglichkeit"],
          ["Eine WG in Schwabing", "Um apartamento compartilhado em Schwabing", "ein|in"],
          ["sucht jemanden,", "procura alguém,", "suchen|jemand"],
          ["Casting heute um 19 Uhr,", "casting hoje às 19h,", "heute|um|Uhr"],
          ["„bitte pünktlich!!!“", "“por favor, pontualidade!!!”", "bitte|pünktlich"],
          ["Und eine Anzeige:", "E um anúncio:", "und|ein"],
          ["ein großes Zimmer im Zentrum,", "um quarto grande no centro,", "ein|groß|Zimmer|in|der|Zentrum"],
          ["nur 400 Euro,", "só 400 euros,", "nur|Euro"],
          ["sofort frei.", "livre já.", "sofort|frei"]]],
        ["Unter der Anzeige der WG steht noch ein Satz: „Die Vermieterin, Frau Huber, wohnt unten und entscheidet mit.“ Neben dem Hostel ist eine Bäckerei. Im Fenster steht ein Apfelkuchen.",
         "Embaixo do anúncio do apartamento ainda há uma frase: “A senhoria, a senhora Huber, mora no térreo e também decide.” Ao lado do hostel há uma padaria. Na vitrine está um bolo de maçã.",
         [["Unter der Anzeige der WG", "Embaixo do anúncio do apartamento", "unter|der"],
          ["steht noch ein Satz:", "ainda há uma frase:", "stehen|noch|ein|Satz"],
          ["„Die Vermieterin, Frau Huber,", "“A senhoria, a senhora Huber,", "der|Frau"],
          ["wohnt unten", "mora no térreo", "wohnen|unten"],
          ["und entscheidet mit.“", "e também decide.”", "und|entscheiden"],
          ["Neben dem Hostel", "Ao lado do hostel", "neben|der"],
          ["ist eine Bäckerei.", "há uma padaria.", "sein|ein"],
          ["Im Fenster", "Na vitrine", "in|der|Fenster"],
          ["steht ein Apfelkuchen.", "está um bolo de maçã.", "stehen|ein|Apfel|Kuchen"]]]
      ],
      escolhas: [
        { pt: "Comprar o bolo de maçã para a senhora Huber e ir ao casting.", de: "Den Apfelkuchen für Frau Huber kaufen und zum Casting gehen.", ir: "c2", marca: "bolo" },
        { pt: "Responder primeiro ao anúncio barato.", de: "Zuerst auf die billige Anzeige antworten.", ir: "c3" }
      ]
    },

    c2: {
      cap: "O casting",
      p: [
        ["Um 19 Uhr stehst du vor einem alten Haus in Schwabing. Unten sitzt eine alte Frau am Fenster und beobachtet dich. Oben öffnet Lena die Tür. Sie hat ein Tablet in der Hand. Am Kühlschrank hängt ein Putzplan in fünf Farben.",
         "Às 19h você está diante de um prédio antigo em Schwabing. Embaixo, uma senhora idosa está sentada à janela e observa você. Lá em cima, Lena abre a porta. Ela tem um tablet na mão. Na geladeira está pendurado um plano de limpeza em cinco cores.",
         [["Um 19 Uhr", "Às 19h", "um|Uhr"],
          ["stehst du", "você está", "stehen|du"],
          ["vor einem alten Haus", "diante de um prédio antigo", "vor|ein|alt|Haus"],
          ["in Schwabing.", "em Schwabing.", "in"],
          ["Unten sitzt eine alte Frau", "Embaixo, uma senhora idosa está sentada", "unten|sitzen|ein|alt|Frau"],
          ["am Fenster", "à janela", "an|der|Fenster"],
          ["und beobachtet dich.", "e observa você.", "und|beobachten|du"],
          ["Oben öffnet Lena die Tür.", "Lá em cima, Lena abre a porta.", "oben|öffnen|der|Tür"],
          ["Sie hat ein Tablet", "Ela tem um tablet", "sie|haben|ein"],
          ["in der Hand.", "na mão.", "in|der|Hand"],
          ["Am Kühlschrank hängt", "Na geladeira está pendurado", "an|der|Kühlschrank"],
          ["ein Putzplan in fünf Farben.", "um plano de limpeza em cinco cores.", "ein|in|fünf|Farbe"]]],
        ["In der Küche sitzt Tobias ohne Schuhe und spielt leise Gitarre. Lena stellt Fragen wie bei einer Prüfung: Job, Kochen, Wochenende. Dann schaut sie dich an. „Letzte Frage. Rauchst du?“ Tobias hört auf zu spielen. Deine Jacke riecht noch nach der Zigarette von heute Mittag.",
         "Na cozinha está Tobias, descalço, tocando violão baixinho. Lena faz perguntas como numa prova: trabalho, cozinha, fim de semana. Então ela olha para você. “Última pergunta. Você fuma?” Tobias para de tocar. Sua jaqueta ainda cheira ao cigarro de hoje ao meio-dia.",
         [["In der Küche", "Na cozinha", "in|der|Küche"],
          ["sitzt Tobias", "está Tobias,", "sitzen"],
          ["ohne Schuhe", "descalço,", "ohne|Schuh"],
          ["und spielt leise Gitarre.", "tocando violão baixinho.", "und|spielen|leise"],
          ["Lena stellt Fragen", "Lena faz perguntas", "stellen|Frage"],
          ["wie bei einer Prüfung:", "como numa prova:", "wie|bei|ein|Prüfung"],
          ["Job, Kochen, Wochenende.", "trabalho, cozinha, fim de semana.", "Job|kochen|Wochenende"],
          ["Dann schaut sie dich an.", "Então ela olha para você.", "dann|schauen|sie|du"],
          ["„Letzte Frage.", "“Última pergunta.", "letzte|Frage"],
          ["Rauchst du?“", "Você fuma?”", "rauchen|du"],
          ["Tobias hört auf zu spielen.", "Tobias para de tocar.", "aufhören|zu|spielen"],
          ["Deine Jacke riecht noch", "Sua jaqueta ainda cheira", "dein|Jacke|riechen|noch"],
          ["nach der Zigarette", "ao cigarro", "nach|der"],
          ["von heute Mittag.", "de hoje ao meio-dia.", "von|heute|Mittag"]]]
      ],
      escolhas: [
        { pt: "Mentir: “Não, nunca.”", de: "Lügen: „Nein, nie.“", ir: "c4", marca: "mentiu" },
        { pt: "Dizer a verdade: às vezes, mas só lá fora.", de: "Die Wahrheit sagen: manchmal, aber nur draußen.", ir: "c5" }
      ]
    },

    c3: {
      cap: "Boa demais",
      p: [
        ["Nach fünf Minuten antwortet ein Mann namens Max. Er schreibt halb Englisch, halb Deutsch. Er ist gerade in London, leider. Die Fotos sind sehr schön, fast wie in einem Hotel. „Ein Besuch ist nicht möglich, aber ich schicke dir den Schlüssel mit der Post.“",
         "Depois de cinco minutos responde um homem chamado Max. Ele escreve meio em inglês, meio em alemão. Ele está em Londres agora, infelizmente. As fotos são muito bonitas, quase como num hotel. “Uma visita não é possível, mas eu te mando a chave pelo correio.”",
         [["Nach fünf Minuten", "Depois de cinco minutos", "nach|fünf|Minute"],
          ["antwortet ein Mann namens Max.", "responde um homem chamado Max.", "antworten|ein|Mann"],
          ["Er schreibt", "Ele escreve", "er|schreiben"],
          ["halb Englisch, halb Deutsch.", "meio em inglês, meio em alemão.", "deutsch"],
          ["Er ist gerade in London,", "Ele está em Londres agora,", "er|sein|gerade|in"],
          ["leider.", "infelizmente.", "leider"],
          ["Die Fotos sind sehr schön,", "As fotos são muito bonitas,", "der|Foto|sein|sehr|schön"],
          ["fast wie in einem Hotel.", "quase como num hotel.", "fast|wie|in|ein|Hotel"],
          ["„Ein Besuch", "“Uma visita", "ein"],
          ["ist nicht möglich,", "não é possível,", "sein|nicht|möglich"],
          ["aber ich schicke dir", "mas eu te mando", "aber|ich|schicken|du"],
          ["den Schlüssel", "a chave", "der|Schlüssel"],
          ["mit der Post.“", "pelo correio.”", "mit|der|Post"]]],
        ["Dann kommt die zweite Nachricht: „Bitte zuerst die Kaution überweisen, 1200 Euro. Dann bekommst du den Schlüssel und die Bestätigung für das Amt.“ Du rechnest. Das ist mehr als die Hälfte von deinem Geld. Aber es ist ein großes Zimmer im Zentrum, für 400 Euro.",
         "Então chega a segunda mensagem: “Por favor, primeiro transfira a caução, 1200 euros. Depois você recebe a chave e a confirmação para o órgão público.” Você faz as contas. Isso é mais da metade do seu dinheiro. Mas é um quarto grande no centro, por 400 euros.",
         [["Dann kommt", "Então chega", "dann|kommen"],
          ["die zweite Nachricht:", "a segunda mensagem:", "der|Nachricht"],
          ["„Bitte zuerst", "“Por favor, primeiro", "bitte|zuerst"],
          ["die Kaution überweisen,", "transfira a caução,", "der"],
          ["1200 Euro.", "1200 euros.", "Euro"],
          ["Dann bekommst du", "Depois você recebe", "dann|bekommen|du"],
          ["den Schlüssel", "a chave", "der|Schlüssel"],
          ["und die Bestätigung", "e a confirmação", "und|der"],
          ["für das Amt.“", "para o órgão público.”", "für|der"],
          ["Du rechnest.", "Você faz as contas.", "du|rechnen"],
          ["Das ist mehr", "Isso é mais", "der|sein|mehr"],
          ["als die Hälfte", "da metade", "als|der|Hälfte"],
          ["von deinem Geld.", "do seu dinheiro.", "von|dein|Geld"],
          ["Aber es ist", "Mas é", "aber|es|sein"],
          ["ein großes Zimmer im Zentrum,", "um quarto grande no centro,", "ein|groß|Zimmer|in|der|Zentrum"],
          ["für 400 Euro.", "por 400 euros.", "für|Euro"]]]
      ],
      escolhas: [
        { pt: "Transferir a caução. Uma chance dessas não volta.", de: "Die Kaution überweisen. So eine Chance kommt nicht wieder.", ir: "c6" },
        { pt: "Não pagar nada e ir ao Bürgeramt perguntar o que fazer.", de: "Nichts zahlen und im Bürgeramt fragen.", ir: "c8" }
      ]
    },

    c4: {
      cap: "A resposta perfeita",
      p: [
        ["Lena lächelt zum ersten Mal. „Perfekt. Hier raucht niemand.“ Tobias hustet und schaut aus dem Fenster. Dann erklärt Lena die Regeln: Ruhe ab 22 Uhr, Glas nur werktags, Papier in die blaue Tonne. Die Miete ist 640 Euro, bar, jeden Monat in einem Umschlag.",
         "Lena sorri pela primeira vez. “Perfeito. Aqui ninguém fuma.” Tobias tosse e olha pela janela. Então Lena explica as regras: silêncio a partir das 22h, vidro só em dia útil, papel na lixeira azul. O aluguel é 640 euros, em dinheiro, todo mês num envelope.",
         [["Lena lächelt zum ersten Mal.", "Lena sorri pela primeira vez.", "zu|der|erste"],
          ["„Perfekt.", "“Perfeito.", ""],
          ["Hier raucht niemand.“", "Aqui ninguém fuma.”", "hier|rauchen|niemand"],
          ["Tobias hustet", "Tobias tosse", ""],
          ["und schaut aus dem Fenster.", "e olha pela janela.", "und|schauen|aus|der|Fenster"],
          ["Dann erklärt Lena die Regeln:", "Então Lena explica as regras:", "dann|erklären|der"],
          ["Ruhe ab 22 Uhr,", "silêncio a partir das 22h,", "Ruhe|Uhr"],
          ["Glas nur werktags,", "vidro só em dia útil,", "Glas|nur"],
          ["Papier in die blaue Tonne.", "papel na lixeira azul.", "Papier|in|der|blau"],
          ["Die Miete ist 640 Euro,", "O aluguel é 640 euros,", "der|Miete|sein|Euro"],
          ["bar,", "em dinheiro,", ""],
          ["jeden Monat", "todo mês", "jeder|Monat"],
          ["in einem Umschlag.", "num envelope.", "in|ein"]]],
        ["„Das Zimmer ist ab Samstag frei“, sagt Lena. „Aber Frau Huber unten entscheidet. Nur sie unterschreibt die Bestätigung.“ An der Tür flüstert Tobias: „Netter Versuch. Ich rauche auch, auf dem Balkon, wenn Lena schläft.“",
         "“O quarto fica livre a partir de sábado”, diz Lena. “Mas quem decide é a senhora Huber, lá de baixo. Só ela assina a confirmação.” Na porta, Tobias sussurra: “Boa tentativa. Eu também fumo, na varanda, quando a Lena dorme.”",
         [["„Das Zimmer ist", "“O quarto fica", "der|Zimmer|sein"],
          ["ab Samstag frei“,", "livre a partir de sábado”,", "Samstag|frei"],
          ["sagt Lena.", "diz Lena.", "sagen"],
          ["„Aber Frau Huber unten", "“Mas a senhora Huber, lá de baixo,", "aber|Frau|unten"],
          ["entscheidet.", "é quem decide.", "entscheiden"],
          ["Nur sie unterschreibt", "Só ela assina", "nur|sie"],
          ["die Bestätigung.“", "a confirmação.”", "der"],
          ["An der Tür", "Na porta,", "an|der|Tür"],
          ["flüstert Tobias:", "Tobias sussurra:", ""],
          ["„Netter Versuch.", "“Boa tentativa.", "nett"],
          ["Ich rauche auch,", "Eu também fumo,", "ich|rauchen|auch"],
          ["auf dem Balkon,", "na varanda,", "auf|der"],
          ["wenn Lena schläft.“", "quando a Lena dorme.”", "wenn|schlafen"]]]
      ],
      escolhas: [
        { pt: "Voltar amanhã cedo e falar com a senhora Huber.", de: "Morgen früh zu Frau Huber gehen.", ir: "c7" },
        { pt: "Ir ao Bürgeramt e tentar resolver sem ela.", de: "Zum Bürgeramt gehen und es ohne sie versuchen.", ir: "c8" }
      ]
    },

    c5: {
      cap: "A verdade",
      p: [
        ["Lena schreibt etwas auf ihr Tablet. Ihr Gesicht wird ernst. „Der Balkon ist für meine Pflanzen“, sagt sie. Tobias lacht laut. „Endlich mal jemand Ehrliches! Die letzten drei haben alle gelogen.“ Lena sagt nur: „Wir entscheiden am Mittwoch.“",
         "Lena escreve algo no tablet. O rosto dela fica sério. “A varanda é para as minhas plantas”, diz ela. Tobias ri alto. “Finalmente alguém sincero! Os últimos três mentiram, todos eles.” Lena só diz: “A gente decide na quarta.”",
         [["Lena schreibt etwas", "Lena escreve algo", "schreiben|etwas"],
          ["auf ihr Tablet.", "no tablet.", "auf|ihr"],
          ["Ihr Gesicht wird ernst.", "O rosto dela fica sério.", "ihr|Gesicht|werden|ernst"],
          ["„Der Balkon ist", "“A varanda é", "der|sein"],
          ["für meine Pflanzen“,", "para as minhas plantas”,", "für|mein|Pflanze"],
          ["sagt sie.", "diz ela.", "sagen|sie"],
          ["Tobias lacht laut.", "Tobias ri alto.", "lachen|laut"],
          ["„Endlich mal jemand Ehrliches!", "“Finalmente alguém sincero!", "endlich|mal|jemand"],
          ["Die letzten drei", "Os últimos três", "der|letzte|drei"],
          ["haben alle gelogen.“", "mentiram, todos eles.”", "haben|alle|lügen"],
          ["Lena sagt nur:", "Lena só diz:", "sagen|nur"],
          ["„Wir entscheiden am Mittwoch.“", "“A gente decide na quarta.”", "wir|entscheiden|an|der|Mittwoch"]]],
        ["An der Tür flüstert Tobias: „Lena hat hier nichts zu sagen. Die Wohnung gehört Frau Huber, unten. Sie mag keine Listen, und sie mag keine Lügen. Geh morgen zu ihr. Und nimm viel Zeit mit.“",
         "Na porta, Tobias sussurra: “Aqui a Lena não manda nada. O apartamento é da senhora Huber, lá de baixo. Ela não gosta de listas e não gosta de mentiras. Vá falar com ela amanhã. E leve bastante tempo.”",
         [["An der Tür", "Na porta,", "an|der|Tür"],
          ["flüstert Tobias:", "Tobias sussurra:", ""],
          ["„Lena hat hier", "“Aqui a Lena", "haben|hier"],
          ["nichts zu sagen.", "não manda nada.", "nichts|zu|sagen"],
          ["Die Wohnung gehört", "O apartamento é", "der|Wohnung|gehören"],
          ["Frau Huber, unten.", "da senhora Huber, lá de baixo.", "Frau|unten"],
          ["Sie mag keine Listen,", "Ela não gosta de listas,", "sie|mögen|kein"],
          ["und sie mag keine Lügen.", "e não gosta de mentiras.", "und|sie|mögen|kein|Lüge"],
          ["Geh morgen zu ihr.", "Vá falar com ela amanhã.", "gehen|morgen|zu|sie"],
          ["Und nimm viel Zeit mit.“", "E leve bastante tempo.”", "und|mitnehmen|viel|Zeit"]]]
      ],
      escolhas: [
        { pt: "Seguir o conselho e visitar a senhora Huber amanhã.", de: "Morgen Frau Huber besuchen.", ir: "c7" },
        { pt: "Não esperar ninguém e ir direto ao Bürgeramt.", de: "Auf niemanden warten und zum Bürgeramt gehen.", ir: "c8" }
      ]
    },

    c6: {
      cap: "A transferência",
      p: [
        ["Du überweist das Geld am Montagabend. Am Dienstag schreibt Max nicht. Am Mittwoch auch nicht. Am Donnerstag ist sein Profil weg, und die Nummer funktioniert nicht mehr. Deine Bank in Brasilien sagt am Telefon: „Das Geld ist schon in Litauen. Das tut mir leid.“",
         "Você transfere o dinheiro na segunda à noite. Na terça, Max não escreve. Na quarta também não. Na quinta, o perfil dele sumiu, e o número não funciona mais. Seu banco no Brasil diz ao telefone: “O dinheiro já está na Lituânia. Sinto muito.”",
         [["Du überweist das Geld", "Você transfere o dinheiro", "du|der|Geld"],
          ["am Montagabend.", "na segunda à noite.", "an|der"],
          ["Am Dienstag", "Na terça,", "an|der|Dienstag"],
          ["schreibt Max nicht.", "Max não escreve.", "schreiben|nicht"],
          ["Am Mittwoch auch nicht.", "Na quarta também não.", "an|der|Mittwoch|auch|nicht"],
          ["Am Donnerstag", "Na quinta,", "an|der|Donnerstag"],
          ["ist sein Profil weg,", "o perfil dele sumiu,", "sein|weg"],
          ["und die Nummer", "e o número", "und|der|Nummer"],
          ["funktioniert nicht mehr.", "não funciona mais.", "funktionieren|nicht|mehr"],
          ["Deine Bank in Brasilien", "Seu banco no Brasil", "dein|Bank|in"],
          ["sagt am Telefon:", "diz ao telefone:", "sagen|an|der|Telefon"],
          ["„Das Geld ist schon", "“O dinheiro já está", "der|Geld|sein|schon"],
          ["in Litauen.", "na Lituânia.", "in"],
          ["Das tut mir leid.“", "Sinto muito.”", "der|tun|ich"]]],
        ["Du hast noch 600 Euro und vier Tage bis zum Termin. Jonas vom Hostel sagt: „Für einen Monat bekommst du von mir eine Bestätigung. Aber das kostet 550 Euro, und das Zimmer teilst du mit fünf Leuten.“",
         "Você ainda tem 600 euros e quatro dias até o horário marcado. Jonas, do hostel, diz: “Por um mês você recebe de mim uma confirmação. Mas custa 550 euros, e você divide o quarto com cinco pessoas.”",
         [["Du hast noch 600 Euro", "Você ainda tem 600 euros", "du|haben|noch|Euro"],
          ["und vier Tage", "e quatro dias", "und|vier|Tag"],
          ["bis zum Termin.", "até o horário marcado.", "bis|zu|der|Termin"],
          ["Jonas vom Hostel sagt:", "Jonas, do hostel, diz:", "von|der|sagen"],
          ["„Für einen Monat", "“Por um mês", "für|ein|Monat"],
          ["bekommst du von mir", "você recebe de mim", "bekommen|du|von|ich"],
          ["eine Bestätigung.", "uma confirmação.", "ein"],
          ["Aber das kostet 550 Euro,", "Mas custa 550 euros,", "aber|der|kosten|Euro"],
          ["und das Zimmer", "e o quarto", "und|der|Zimmer"],
          ["teilst du", "você divide", "teilen|du"],
          ["mit fünf Leuten.“", "com cinco pessoas.”", "mit|fünf|Leute"]]]
      ],
      escolhas: [
        { pt: "Ir à polícia e lutar pelo dinheiro.", de: "Zur Polizei gehen und um das Geld kämpfen.", ir: "f_prazo" },
        { pt: "Pagar o hostel e garantir a confirmação.", de: "Das Hostel bezahlen und die Bestätigung nehmen.", ir: "f_prov" }
      ]
    },

    c7: {
      cap: "A senhora Huber",
      p: [
        ["Dienstag, neun Uhr. Frau Huber steht im Hof vor den Containern und hält eine grüne Flasche in die Luft. „Grünglas, Braunglas, Weißglas! Niemand in diesem Haus kann das.“ Sie schaut dich an. „Sie waren gestern oben. Und dann haben Sie geraucht, direkt vor meinem Fenster.“",
         "Terça, nove horas. A senhora Huber está no pátio, diante das lixeiras, e segura uma garrafa verde no alto. “Vidro verde, vidro marrom, vidro branco! Ninguém neste prédio sabe fazer isso.” Ela olha para você. “Você esteve lá em cima ontem. E depois você fumou, bem na frente da minha janela.”",
         [["Dienstag, neun Uhr.", "Terça, nove horas.", "Dienstag|neun|Uhr"],
          ["Frau Huber steht im Hof", "A senhora Huber está no pátio,", "Frau|stehen|in|der"],
          ["vor den Containern", "diante das lixeiras,", "vor|der"],
          ["und hält eine grüne Flasche", "e segura uma garrafa verde", "und|halten|ein|grün|Flasche"],
          ["in die Luft.", "no alto.", "in|der|Luft"],
          ["„Grünglas, Braunglas, Weißglas!", "“Vidro verde, vidro marrom, vidro branco!", "grün|braun|weiß|Glas"],
          ["Niemand in diesem Haus", "Ninguém neste prédio", "niemand|in|dieser|Haus"],
          ["kann das.“", "sabe fazer isso.”", "können|der"],
          ["Sie schaut dich an.", "Ela olha para você.", "sie|schauen|du"],
          ["„Sie waren gestern oben.", "“Você esteve lá em cima ontem.", "sie|sein|gestern|oben"],
          ["Und dann haben Sie geraucht,", "E depois você fumou,", "und|dann|haben|sie|rauchen"],
          ["direkt vor meinem Fenster.“", "bem na frente da minha janela.”", "vor|mein|Fenster"]]],
        ["Sie wirft die Flasche in den richtigen Container. „Ich will drei Dinge: die Miete bar, Ruhe nach zehn und keine Geschichten. Lena macht Listen, Tobias macht Musik. Und Sie? Was machen Sie?“ Der Termin ist in sechs Tagen. Sie hat noch nichts unterschrieben.",
         "Ela joga a garrafa no contêiner certo. “Eu quero três coisas: o aluguel em dinheiro, silêncio depois das dez e nada de histórias. A Lena faz listas, o Tobias faz música. E você? O que você faz?” O horário marcado é daqui a seis dias. Ela ainda não assinou nada.",
         [["Sie wirft die Flasche", "Ela joga a garrafa", "sie|werfen|der|Flasche"],
          ["in den richtigen Container.", "no contêiner certo.", "in|der|richtig"],
          ["„Ich will drei Dinge:", "“Eu quero três coisas:", "ich|wollen|drei|Ding"],
          ["die Miete bar,", "o aluguel em dinheiro,", "der|Miete"],
          ["Ruhe nach zehn", "silêncio depois das dez", "Ruhe|nach|zehn"],
          ["und keine Geschichten.", "e nada de histórias.", "und|kein|Geschichte"],
          ["Lena macht Listen,", "A Lena faz listas,", "machen"],
          ["Tobias macht Musik.", "o Tobias faz música.", "machen|Musik"],
          ["Und Sie?", "E você?", "und|sie"],
          ["Was machen Sie?“", "O que você faz?”", "was|machen|sie"],
          ["Der Termin ist", "O horário marcado é", "der|Termin|sein"],
          ["in sechs Tagen.", "daqui a seis dias.", "in|sechs|Tag"],
          ["Sie hat noch nichts unterschrieben.", "Ela ainda não assinou nada.", "sie|haben|noch|nichts"]]]
      ],
      escolhas: [
        { pt: "Entregar a ela o bolo de maçã que você comprou ontem.", de: "Ihr den Apfelkuchen von gestern geben.", ir: "f_bom", req: "bolo" },
        { pt: "Pegar as garrafas e ajudar a separar o vidro.", de: "Die Flaschen nehmen und beim Sortieren helfen.", ir: "c9" },
        { pt: "Desistir da senhora Huber e tentar no Bürgeramt.", de: "Frau Huber vergessen und es beim Bürgeramt versuchen.", ir: "c8" }
      ]
    },

    c8: {
      cap: "O Bürgeramt",
      p: [
        ["Mittwoch im Bürgeramt. Du ziehst eine Nummer und wartest zwei Stunden. Herr Becker hat eine Tasse Kaffee und keine Zeit. „Ohne Bestätigung vom Vermieter keine Anmeldung“, sagt er. „Ohne Anmeldung kein Konto“, sagst du. Er nickt. „Ja. So ist das.“",
         "Quarta-feira, no Bürgeramt. Você tira uma senha e espera duas horas. O senhor Becker tem uma xícara de café e nenhum tempo. “Sem confirmação do proprietário, nada de registro”, diz ele. “Sem registro, nada de conta”, diz você. Ele faz que sim. “Pois é. É assim.”",
         [["Mittwoch im Bürgeramt.", "Quarta-feira, no Bürgeramt.", "Mittwoch|in|der"],
          ["Du ziehst eine Nummer", "Você tira uma senha", "du|ziehen|ein|Nummer"],
          ["und wartest zwei Stunden.", "e espera duas horas.", "und|warten|zwei|Stunde"],
          ["Herr Becker hat", "O senhor Becker tem", "Herr|haben"],
          ["eine Tasse Kaffee", "uma xícara de café", "ein|Tasse|Kaffee"],
          ["und keine Zeit.", "e nenhum tempo.", "und|kein|Zeit"],
          ["„Ohne Bestätigung vom Vermieter", "“Sem confirmação do proprietário,", "ohne|von|der"],
          ["keine Anmeldung“,", "nada de registro”,", "kein"],
          ["sagt er.", "diz ele.", "sagen|er"],
          ["„Ohne Anmeldung kein Konto“,", "“Sem registro, nada de conta”,", "ohne|kein|Konto"],
          ["sagst du.", "diz você.", "sagen|du"],
          ["Er nickt.", "Ele faz que sim.", "er"],
          ["„Ja. So ist das.“", "“Pois é. É assim.”", "ja|so|sein|der"]]],
        ["Dann sieht er auf seinen Bildschirm. „Es gibt eine Möglichkeit. Auch ein Hostel kann bestätigen, wenn Sie dort wohnen. Oder Sie finden bis Freitag ein Zimmer.“ Er schaut auf die Uhr. Hinter dir warten noch vierzig Leute.",
         "Então ele olha para a tela. “Existe uma possibilidade. Um hostel também pode confirmar, se você morar lá. Ou você encontra um quarto até sexta.” Ele olha o relógio. Atrás de você esperam mais quarenta pessoas.",
         [["Dann sieht er", "Então ele olha", "dann|sehen|er"],
          ["auf seinen Bildschirm.", "para a tela.", "auf|sein|Bildschirm"],
          ["„Es gibt eine Möglichkeit.", "“Existe uma possibilidade.", "es|geben|ein|Möglichkeit"],
          ["Auch ein Hostel", "Um hostel também", "auch|ein"],
          ["kann bestätigen,", "pode confirmar,", "können"],
          ["wenn Sie dort wohnen.", "se você morar lá.", "wenn|sie|dort|wohnen"],
          ["Oder Sie finden", "Ou você encontra", "oder|sie|finden"],
          ["bis Freitag ein Zimmer.“", "um quarto até sexta.”", "bis|Freitag|ein|Zimmer"],
          ["Er schaut auf die Uhr.", "Ele olha o relógio.", "er|schauen|auf|der|Uhr"],
          ["Hinter dir warten", "Atrás de você esperam", "hinter|du|warten"],
          ["noch vierzig Leute.", "mais quarenta pessoas.", "noch|Leute"]]]
      ],
      escolhas: [
        { pt: "Aceitar o hostel por um mês. Melhor que nada.", de: "Einen Monat im Hostel nehmen. Besser als nichts.", ir: "f_prov" },
        { pt: "Insistir e pedir uma exceção ao senhor Becker.", de: "Herrn Becker um eine Ausnahme bitten.", ir: "f_prazo" }
      ]
    },

    c9: {
      cap: "Café de sábado",
      nota: "O que você respondeu no casting volta agora.",
      p: [
        ["Am Dienstag hast du eine Stunde lang Glas sortiert. Frau Huber hat gesagt: „Samstag, drei Uhr, Kaffee bei mir. Alle drei.“ Jetzt sitzt du an ihrem Tisch, zwischen Lena und Tobias. Es gibt Kuchen, aber niemand isst.",
         "Na terça, você passou uma hora separando vidro. A senhora Huber disse: “Sábado, três horas, café na minha casa. Os três.” Agora você está à mesa dela, entre Lena e Tobias. Tem bolo, mas ninguém come.",
         [["Am Dienstag", "Na terça,", "an|der|Dienstag"],
          ["hast du eine Stunde lang", "você passou uma hora", "haben|du|ein|Stunde|lang"],
          ["Glas sortiert.", "separando vidro.", "Glas"],
          ["Frau Huber hat gesagt:", "A senhora Huber disse:", "Frau|haben|sagen"],
          ["„Samstag, drei Uhr,", "“Sábado, três horas,", "Samstag|drei|Uhr"],
          ["Kaffee bei mir.", "café na minha casa.", "Kaffee|bei|ich"],
          ["Alle drei.“", "Os três.”", "alle|drei"],
          ["Jetzt sitzt du", "Agora você está", "jetzt|sitzen|du"],
          ["an ihrem Tisch,", "à mesa dela,", "an|ihr|Tisch"],
          ["zwischen Lena und Tobias.", "entre Lena e Tobias.", "zwischen|und"],
          ["Es gibt Kuchen,", "Tem bolo,", "es|geben|Kuchen"],
          ["aber niemand isst.", "mas ninguém come.", "aber|niemand|essen"]]],
        ["Lena legt eine Packung Zigaretten auf den Tisch. „Die hat im Flur gelegen, am Montag, nach dem Casting.“ Tobias schaut auf seinen Teller. Frau Huber trinkt langsam ihren Kaffee und wartet. „Ist das deine?“, fragt Lena.",
         "Lena coloca um maço de cigarros sobre a mesa. “Estava no corredor, na segunda, depois do casting.” Tobias olha para o prato. A senhora Huber toma devagar o café dela e espera. “É seu?”, pergunta Lena.",
         [["Lena legt", "Lena coloca", "legen"],
          ["eine Packung Zigaretten", "um maço de cigarros", "ein"],
          ["auf den Tisch.", "sobre a mesa.", "auf|der|Tisch"],
          ["„Die hat im Flur gelegen,", "“Estava no corredor,", "der|haben|in|der|liegen"],
          ["am Montag,", "na segunda,", "an|der|Montag"],
          ["nach dem Casting.“", "depois do casting.”", "nach|der"],
          ["Tobias schaut", "Tobias olha", "schauen"],
          ["auf seinen Teller.", "para o prato.", "auf|sein|Teller"],
          ["Frau Huber trinkt langsam", "A senhora Huber toma devagar", "Frau|trinken|langsam"],
          ["ihren Kaffee", "o café dela", "ihr|Kaffee"],
          ["und wartet.", "e espera.", "und|warten"],
          ["„Ist das deine?“,", "“É seu?”,", "sein|der|dein"],
          ["fragt Lena.", "pergunta Lena.", "fragen"]]]
      ],
      escolhas: [
        { pt: "Dizer que o maço é do Tobias.", de: "Sagen, dass die Packung Tobias gehört.", ir: "f_mentira", req: "mentiu" },
        { pt: "Confessar que mentiu no casting e pedir uma chance.", de: "Zugeben, dass du beim Casting gelogen hast.", ir: "f_prov", req: "mentiu" },
        { pt: "“É meu. Eu disse que fumo às vezes, lá fora.”", de: "„Ja, meine. Ich habe gesagt, dass ich manchmal draußen rauche.“", ir: "f_bom", sem: "mentiu" }
      ]
    },

    f_bom: {
      cap: "A assinatura",
      p: [
        ["Frau Huber nimmt einen Stift und unterschreibt. „Die Miete bar, am ersten Tag im Monat“, sagt sie. Lena gibt dir einen Schlüssel und eine Kopie vom Putzplan. Tobias zeigt dir den Balkon: „Hier ist die Welt noch in Ordnung.“",
         "A senhora Huber pega uma caneta e assina. “O aluguel em dinheiro, no primeiro dia do mês”, diz ela. Lena te dá uma chave e uma cópia do plano de limpeza. Tobias te mostra a varanda: “Aqui o mundo ainda está em ordem.”",
         [["Frau Huber nimmt einen Stift", "A senhora Huber pega uma caneta", "Frau|nehmen|ein"],
          ["und unterschreibt.", "e assina.", "und"],
          ["„Die Miete bar,", "“O aluguel em dinheiro,", "der|Miete"],
          ["am ersten Tag im Monat“,", "no primeiro dia do mês”,", "an|der|erste|Tag|in|der|Monat"],
          ["sagt sie.", "diz ela.", "sagen|sie"],
          ["Lena gibt dir", "Lena te dá", "geben|du"],
          ["einen Schlüssel", "uma chave", "ein|Schlüssel"],
          ["und eine Kopie vom Putzplan.", "e uma cópia do plano de limpeza.", "und|ein|von|der"],
          ["Tobias zeigt dir den Balkon:", "Tobias te mostra a varanda:", "zeigen|du|der"],
          ["„Hier ist die Welt", "“Aqui o mundo", "hier|sein|der|Welt"],
          ["noch in Ordnung.“", "ainda está em ordem.”", "noch|in|Ordnung"]]],
        ["Am Montag um acht Uhr legst du die Bestätigung auf den Tisch. Der Mann im Bürgeramt stempelt, ohne zu lächeln. Du hast eine Adresse in München. Auf dem Weg nach Hause lernst du die wichtigste Regel: Glas nie am Sonntag.",
         "Na segunda, às oito horas, você coloca a confirmação sobre a mesa. O homem do Bürgeramt carimba, sem sorrir. Você tem um endereço em Munique. No caminho para casa você aprende a regra mais importante: vidro nunca no domingo.",
         [["Am Montag um acht Uhr", "Na segunda, às oito horas,", "an|der|Montag|um|acht|Uhr"],
          ["legst du die Bestätigung", "você coloca a confirmação", "legen|du|der"],
          ["auf den Tisch.", "sobre a mesa.", "auf|der|Tisch"],
          ["Der Mann im Bürgeramt", "O homem do Bürgeramt", "der|Mann|in|der"],
          ["stempelt,", "carimba,", ""],
          ["ohne zu lächeln.", "sem sorrir.", "ohne|zu"],
          ["Du hast eine Adresse", "Você tem um endereço", "du|haben|ein|Adresse"],
          ["in München.", "em Munique.", "in"],
          ["Auf dem Weg nach Hause", "No caminho para casa", "auf|der|Weg|nach|Haus"],
          ["lernst du", "você aprende", "lernen|du"],
          ["die wichtigste Regel:", "a regra mais importante:", "der|wichtig"],
          ["Glas nie am Sonntag.", "vidro nunca no domingo.", "Glas|nie|an|der|Sonntag"]]]
      ],
      fim: { tipo: "bom", titulo: "Endereço em Munique" }
    },

    f_prov: {
      cap: "Solução provisória",
      p: [
        ["Es ist nicht die Lösung, die du wolltest: nur ein Monat, ein kleines Bett, viele Fragen. Aber am Montag um acht Uhr bekommst du deine Anmeldung. Jetzt kannst du ein Konto eröffnen und dein erstes Gehalt bekommen.",
         "Não é a solução que você queria: só um mês, uma cama pequena, muitas perguntas. Mas na segunda, às oito horas, você consegue seu registro. Agora você pode abrir uma conta e receber seu primeiro salário.",
         [["Es ist nicht die Lösung,", "Não é a solução", "es|sein|nicht|der"],
          ["die du wolltest:", "que você queria:", "der|du|wollen"],
          ["nur ein Monat,", "só um mês,", "nur|ein|Monat"],
          ["ein kleines Bett,", "uma cama pequena,", "ein|klein|Bett"],
          ["viele Fragen.", "muitas perguntas.", "viele|Frage"],
          ["Aber am Montag", "Mas na segunda,", "aber|an|der|Montag"],
          ["um acht Uhr", "às oito horas,", "um|acht|Uhr"],
          ["bekommst du deine Anmeldung.", "você consegue seu registro.", "bekommen|du|dein"],
          ["Jetzt kannst du", "Agora você pode", "jetzt|können|du"],
          ["ein Konto eröffnen", "abrir uma conta", "ein|Konto"],
          ["und dein erstes Gehalt bekommen.", "e receber seu primeiro salário.", "und|dein|erste|Gehalt|bekommen"]]],
        ["Am Abend schreibst du eine neue Nachricht an zwanzig WGs: „Ich koche gern, ich bin ruhig, und ich bringe Kuchen mit.“ In vier Wochen beginnt die Suche wieder. Aber diesmal hast du Zeit.",
         "À noite você escreve uma nova mensagem para vinte apartamentos compartilhados: “Eu gosto de cozinhar, sou uma pessoa tranquila e levo bolo.” Daqui a quatro semanas a busca começa de novo. Mas desta vez você tem tempo.",
         [["Am Abend schreibst du", "À noite você escreve", "an|der|Abend|schreiben|du"],
          ["eine neue Nachricht", "uma nova mensagem", "ein|neu|Nachricht"],
          ["an zwanzig WGs:", "para vinte apartamentos compartilhados:", "an|zwanzig"],
          ["„Ich koche gern,", "“Eu gosto de cozinhar,", "ich|kochen|gern"],
          ["ich bin ruhig,", "sou uma pessoa tranquila", "ich|sein|ruhig"],
          ["und ich bringe Kuchen mit.“", "e levo bolo.”", "und|ich|mitbringen|Kuchen"],
          ["In vier Wochen", "Daqui a quatro semanas", "in|vier|Woche"],
          ["beginnt die Suche wieder.", "a busca começa de novo.", "beginnen|der|wieder"],
          ["Aber diesmal", "Mas desta vez", "aber"],
          ["hast du Zeit.", "você tem tempo.", "haben|du|Zeit"]]]
      ],
      fim: { tipo: "neutro", titulo: "Um mês de fôlego" }
    },

    f_prazo: {
      cap: "Seis semanas",
      p: [
        ["Am Montag um acht Uhr sitzt du im Bürgeramt, ohne Bestätigung. Die Frau am Schalter ist freundlich, aber hart. „Dann brauchen Sie einen neuen Termin.“ Sie schaut auf ihren Bildschirm. „Der nächste freie Termin ist in sechs Wochen.“",
         "Na segunda, às oito horas, você está no Bürgeramt, sem confirmação. A mulher no guichê é simpática, mas firme. “Então você precisa de um novo horário.” Ela olha para a tela. “O próximo horário livre é daqui a seis semanas.”",
         [["Am Montag um acht Uhr", "Na segunda, às oito horas,", "an|der|Montag|um|acht|Uhr"],
          ["sitzt du im Bürgeramt,", "você está no Bürgeramt,", "sitzen|du|in|der"],
          ["ohne Bestätigung.", "sem confirmação.", "ohne"],
          ["Die Frau am Schalter", "A mulher no guichê", "der|Frau|an|der"],
          ["ist freundlich,", "é simpática,", "sein|freundlich"],
          ["aber hart.", "mas firme.", "aber"],
          ["„Dann brauchen Sie", "“Então você precisa de", "dann|brauchen|sie"],
          ["einen neuen Termin.“", "um novo horário.”", "ein|neu|Termin"],
          ["Sie schaut", "Ela olha", "sie|schauen"],
          ["auf ihren Bildschirm.", "para a tela.", "auf|ihr|Bildschirm"],
          ["„Der nächste freie Termin", "“O próximo horário livre", "der|nächste|frei|Termin"],
          ["ist in sechs Wochen.“", "é daqui a seis semanas.”", "sein|in|sechs|Woche"]]],
        ["Sechs Wochen ohne Konto. Dein neuer Chef schreibt eine kurze E-Mail: „Ohne Konto können wir leider nicht zahlen.“ Am Abend sitzt du wieder im Hostel, zwischen elf fremden Leuten. Auf deinem Handy ist eine neue Anzeige. Sehr schön. Sehr billig.",
         "Seis semanas sem conta. Seu novo chefe escreve um e-mail curto: “Sem conta, infelizmente não podemos pagar.” À noite você está de novo no hostel, entre onze desconhecidos. No seu celular há um novo anúncio. Muito bonito. Muito barato.",
         [["Sechs Wochen ohne Konto.", "Seis semanas sem conta.", "sechs|Woche|ohne|Konto"],
          ["Dein neuer Chef", "Seu novo chefe", "dein|neu|Chef"],
          ["schreibt eine kurze E-Mail:", "escreve um e-mail curto:", "schreiben|ein|kurz|E-Mail"],
          ["„Ohne Konto", "“Sem conta,", "ohne|Konto"],
          ["können wir leider nicht zahlen.“", "infelizmente não podemos pagar.”", "können|wir|leider|nicht|zahlen"],
          ["Am Abend sitzt du", "À noite você está", "an|der|Abend|sitzen|du"],
          ["wieder im Hostel,", "de novo no hostel,", "wieder|in|der"],
          ["zwischen elf fremden Leuten.", "entre onze desconhecidos.", "zwischen|elf|fremd|Leute"],
          ["Auf deinem Handy", "No seu celular", "auf|dein|Handy"],
          ["ist eine neue Anzeige.", "há um novo anúncio.", "sein|ein|neu"],
          ["Sehr schön.", "Muito bonito.", "sehr|schön"],
          ["Sehr billig.", "Muito barato.", "sehr|billig"]]]
      ],
      fim: { tipo: "ruim", titulo: "Prazo perdido" }
    },

    f_mentira: {
      cap: "Fumaça demais",
      p: [
        ["„Nicht meine“, sagt Tobias ruhig. „Ich rauche eine andere Marke.“ Stille. Lena schaut ihn an: „Du rauchst?“ Dann schaut sie dich an. Frau Huber stellt ihre Tasse auf den Tisch. „Ich habe gesagt: keine Geschichten.“",
         "“Não é meu”, diz Tobias, calmo. “Eu fumo outra marca.” Silêncio. Lena olha para ele: “Você fuma?” Depois olha para você. A senhora Huber coloca a xícara na mesa. “Eu disse: nada de histórias.”",
         [["„Nicht meine“,", "“Não é meu”,", "nicht|mein"],
          ["sagt Tobias ruhig.", "diz Tobias, calmo.", "sagen|ruhig"],
          ["„Ich rauche", "“Eu fumo", "ich|rauchen"],
          ["eine andere Marke.“", "outra marca.”", "ein|ander"],
          ["Stille.", "Silêncio.", ""],
          ["Lena schaut ihn an:", "Lena olha para ele:", "schauen|er"],
          ["„Du rauchst?“", "“Você fuma?”", "du|rauchen"],
          ["Dann schaut sie dich an.", "Depois olha para você.", "dann|schauen|sie|du"],
          ["Frau Huber stellt", "A senhora Huber coloca", "Frau|stellen"],
          ["ihre Tasse auf den Tisch.", "a xícara na mesa.", "ihr|Tasse|auf|der|Tisch"],
          ["„Ich habe gesagt:", "“Eu disse:", "ich|haben|sagen"],
          ["keine Geschichten.“", "nada de histórias.”", "kein|Geschichte"]]],
        ["Zehn Minuten später stehst du wieder vor dem Haus. Das Zimmer bekommt eine Studentin mit einer Excel-Tabelle. Am Montag hast du keine Bestätigung und einen neuen Termin in sechs Wochen. Tobias schreibt dir am Abend: „Danke. Jetzt rauche ich im Park.“",
         "Dez minutos depois você está de novo na frente do prédio. Quem fica com o quarto é uma estudante com uma planilha de Excel. Na segunda você não tem confirmação e ganha um novo horário daqui a seis semanas. Tobias te escreve à noite: “Valeu. Agora eu fumo no parque.”",
         [["Zehn Minuten später", "Dez minutos depois", "zehn|Minute|später"],
          ["stehst du wieder", "você está de novo", "stehen|du|wieder"],
          ["vor dem Haus.", "na frente do prédio.", "vor|der|Haus"],
          ["Das Zimmer bekommt", "Quem fica com o quarto é", "der|Zimmer|bekommen"],
          ["eine Studentin", "uma estudante", "ein|Student"],
          ["mit einer Excel-Tabelle.", "com uma planilha de Excel.", "mit|ein"],
          ["Am Montag", "Na segunda", "an|der|Montag"],
          ["hast du keine Bestätigung", "você não tem confirmação", "haben|du|kein"],
          ["und einen neuen Termin", "e ganha um novo horário", "und|ein|neu|Termin"],
          ["in sechs Wochen.", "daqui a seis semanas.", "in|sechs|Woche"],
          ["Tobias schreibt dir", "Tobias te escreve", "schreiben|du"],
          ["am Abend:", "à noite:", "an|der|Abend"],
          ["„Danke.", "“Valeu.", "danke"],
          ["Jetzt rauche ich im Park.“", "Agora eu fumo no parque.”", "jetzt|rauchen|ich|in|der|Park"]]]
      ],
      fim: { tipo: "ruim", titulo: "Fumaça demais" }
    }
  }
});
VB_HIST.de.push({
  id: "apartamento-4b",
  titulo: "O vizinho do 4B",
  genero: "Mistério",
  nivel: "A1–A2",
  desc: "Você acabou de se mudar para Leipzig. Há três dias o vizinho do 4B, um velho relojoeiro, não aparece, e a porta dele está destrancada.",
  inicio: "c1",
  cenas: {
    c1: {
      cap: "Três dias",
      p: [
        ["Seit zwei Wochen wohnst du in Leipzig, im vierten Stock. Dein Nachbar in 4B ist Herr Albrecht, ein alter Uhrmacher. Jeden Morgen um acht grüßt er dich auf der Treppe. Aber seit drei Tagen hast du ihn nicht gesehen.",
         "Há duas semanas você mora em Leipzig, no quarto andar. Seu vizinho do 4B é o senhor Albrecht, um velho relojoeiro. Toda manhã às oito ele cumprimenta você na escada. Mas há três dias você não o vê.",
         [["Seit zwei Wochen", "Há duas semanas", "seit|zwei|Woche"],
          ["wohnst du in Leipzig,", "você mora em Leipzig,", "wohnen|du|in"],
          ["im vierten Stock.", "no quarto andar.", "in|der"],
          ["Dein Nachbar in 4B", "Seu vizinho do 4B", "dein|Nachbar|in"],
          ["ist Herr Albrecht,", "é o senhor Albrecht,", "sein|Herr"],
          ["ein alter Uhrmacher.", "um velho relojoeiro.", "ein|alt"],
          ["Jeden Morgen um acht", "Toda manhã às oito", "jeder|Morgen|um|acht"],
          ["grüßt er dich", "ele cumprimenta você", "grüßen|er|du"],
          ["auf der Treppe.", "na escada.", "auf|der|Treppe"],
          ["Aber seit drei Tagen", "Mas há três dias", "aber|seit|drei|Tag"],
          ["hast du ihn nicht gesehen.", "você não o vê.", "haben|du|er|nicht|sehen"]]],
        ["Heute ist Freitag. Hinter seiner Tür miaut seine Katze Minna, laut und lange. Du klopfst. Niemand antwortet. Dann drückst du leicht gegen die Tür, und sie geht auf. Sie war nicht abgeschlossen.",
         "Hoje é sexta-feira. Atrás da porta dele, a gata Minna mia, alto e sem parar. Você bate. Ninguém responde. Então você empurra a porta de leve, e ela se abre. Não estava trancada.",
         [["Heute ist Freitag.", "Hoje é sexta-feira.", "heute|sein|Freitag"],
          ["Hinter seiner Tür", "Atrás da porta dele,", "hinter|sein|Tür"],
          ["miaut seine Katze Minna,", "a gata dele, Minna, mia,", "sein|Katze"],
          ["laut und lange.", "alto e sem parar.", "laut|und|lang"],
          ["Du klopfst.", "Você bate.", "du|klopfen"],
          ["Niemand antwortet.", "Ninguém responde.", "niemand|antworten"],
          ["Dann drückst du", "Então você empurra", "dann|drücken|du"],
          ["leicht gegen die Tür,", "a porta de leve,", "leicht|gegen|der|Tür"],
          ["und sie geht auf.", "e ela se abre.", "und|sie|gehen"],
          ["Sie war nicht abgeschlossen.", "Não estava trancada.", "sie|sein|nicht"]]],
        ["In der Wohnung ist es still, nur die Uhren an den Wänden ticken. Minna läuft zu dir und miaut laut vor Hunger. Auf dem Tisch liegt ein Zettel: „H3 / 312 / Mi 7:00“. An der Wand ist ein Platz leer. Dort war immer die Uhr aus Gold.",
         "No apartamento está tudo quieto, só os relógios nas paredes fazem tique-taque. Minna corre até você e mia alto de fome. Na mesa há um bilhete: “H3 / 312 / Mi 7:00”. Na parede há um lugar vazio. Ali sempre ficava o relógio de ouro.",
         [["In der Wohnung", "No apartamento", "in|der|Wohnung"],
          ["ist es still,", "está tudo quieto,", "sein|es"],
          ["nur die Uhren", "só os relógios", "nur|der|Uhr"],
          ["an den Wänden", "nas paredes", "an|der|Wand"],
          ["ticken.", "fazem tique-taque.", ""],
          ["Minna läuft zu dir", "Minna corre até você", "laufen|zu|du"],
          ["und miaut laut vor Hunger.", "e mia alto de fome.", "und|laut|vor|Hunger"],
          ["Auf dem Tisch", "Na mesa", "auf|der|Tisch"],
          ["liegt ein Zettel:", "há um bilhete:", "liegen|ein"],
          ["„H3 / 312 / Mi 7:00“.", "“H3 / 312 / Mi 7:00”.", ""],
          ["An der Wand", "Na parede", "an|der|Wand"],
          ["ist ein Platz leer.", "há um lugar vazio.", "sein|ein|Platz|leer"],
          ["Dort war immer", "Ali sempre ficava", "dort|sein|immer"],
          ["die Uhr aus Gold.", "o relógio de ouro.", "der|Uhr|aus|Gold"]]]
      ],
      escolhas: [
        { pt: "Fotografar o bilhete com o celular.", de: "Den Zettel mit dem Handy fotografieren.", ir: "c2", marca: "foto" },
        { pt: "Dar comida à gata primeiro.", de: "Zuerst der Katze etwas zu essen geben.", ir: "c3", marca: "gata" },
        { pt: "Descer e chamar a Frau Krüger, a senhoria.", de: "Nach unten gehen und Frau Krüger holen.", ir: "c4" }
      ]
    },

    c2: {
      cap: "Jonas",
      p: [
        ["Du machst schnell ein Foto vom Zettel. Da hörst du Schritte auf der Treppe. Ein junger Mann steht in der Tür, mit einem Schlüssel in der Hand. Er ist sehr blass. „Wer bist du? Was machst du hier? Das ist die Wohnung meines Onkels!“",
         "Você tira rápido uma foto do bilhete. Nesse momento você ouve passos na escada. Um rapaz está parado na porta, com uma chave na mão. Ele está muito pálido. “Quem é você? O que você está fazendo aqui? Este é o apartamento do meu tio!”",
         [["Du machst schnell", "Você tira rápido", "du|machen|schnell"],
          ["ein Foto vom Zettel.", "uma foto do bilhete.", "ein|Foto|von|der"],
          ["Da hörst du", "Nesse momento você ouve", "da|hören|du"],
          ["Schritte auf der Treppe.", "passos na escada.", "auf|der|Treppe"],
          ["Ein junger Mann", "Um rapaz", "ein|jung|Mann"],
          ["steht in der Tür,", "está parado na porta,", "stehen|in|der|Tür"],
          ["mit einem Schlüssel", "com uma chave", "mit|ein|Schlüssel"],
          ["in der Hand.", "na mão.", "in|der|Hand"],
          ["Er ist sehr blass.", "Ele está muito pálido.", "er|sein|sehr"],
          ["„Wer bist du?", "“Quem é você?", "wer|sein|du"],
          ["Was machst du hier?", "O que você está fazendo aqui?", "was|machen|du|hier"],
          ["Das ist die Wohnung", "Este é o apartamento", "das|sein|der|Wohnung"],
          ["meines Onkels!“", "do meu tio!”", "mein|Onkel"]]],
        ["Er heißt Jonas. Er sagt, sein Onkel ist sicher bei einem Freund. Aber seine Augen gehen immer wieder zur leeren Stelle an der Wand. Die Katze miaut laut. Jonas sieht sie nicht an. Seine Hände zittern.",
         "Ele se chama Jonas. Ele diz que o tio com certeza está na casa de um amigo. Mas os olhos dele voltam o tempo todo para o lugar vazio na parede. A gata mia alto. Jonas nem olha para ela. As mãos dele tremem.",
         [["Er heißt Jonas.", "Ele se chama Jonas.", "er|heißen"],
          ["Er sagt,", "Ele diz", "er|sagen"],
          ["sein Onkel ist sicher", "que o tio com certeza está", "sein|Onkel|sicher"],
          ["bei einem Freund.", "na casa de um amigo.", "bei|ein|Freund"],
          ["Aber seine Augen", "Mas os olhos dele", "aber|sein|Auge"],
          ["gehen immer wieder", "voltam o tempo todo", "gehen|immer|wieder"],
          ["zur leeren Stelle", "para o lugar vazio", "zu|der|leer|Stelle"],
          ["an der Wand.", "na parede.", "an|der|Wand"],
          ["Die Katze miaut laut.", "A gata mia alto.", "der|Katze|laut"],
          ["Jonas sieht sie nicht an.", "Jonas nem olha para ela.", "sehen|sie|nicht"],
          ["Seine Hände zittern.", "As mãos dele tremem.", "sein|Hand"]]]
      ],
      escolhas: [
        { pt: "Perguntar sobre o relógio de ouro.", de: "Nach der Uhr aus Gold fragen.", ir: "c5" },
        { pt: "Sair e chamar a polícia.", de: "Gehen und die Polizei rufen.", ir: "c6" }
      ]
    },

    c3: {
      cap: "Minna",
      p: [
        ["Im Kühlschrank findest du etwas Wurst. Minna frisst alles in einer Minute. Dann läuft sie ins Schlafzimmer und setzt sich vor den Schrank. Sie sieht dich an, als ob sie etwas sagen wollte.",
         "Na geladeira você encontra um pouco de linguiça. Minna come tudo em um minuto. Depois ela corre para o quarto e se senta na frente do armário. Ela olha para você como se quisesse dizer alguma coisa.",
         [["Im Kühlschrank", "Na geladeira", "in|der|Kühlschrank"],
          ["findest du etwas Wurst.", "você encontra um pouco de linguiça.", "finden|du|etwas|Wurst"],
          ["Minna frisst alles", "Minna come tudo", "alles"],
          ["in einer Minute.", "em um minuto.", "in|ein|Minute"],
          ["Dann läuft sie", "Depois ela corre", "dann|laufen|sie"],
          ["ins Schlafzimmer", "para o quarto", "in|der"],
          ["und setzt sich", "e se senta", "und|setzen|sich"],
          ["vor den Schrank.", "na frente do armário.", "vor|der|Schrank"],
          ["Sie sieht dich an,", "Ela olha para você", "sie|sehen|du"],
          ["als ob sie etwas sagen wollte.", "como se quisesse dizer alguma coisa.", "als|ob|sie|etwas|sagen|wollen"]]],
        ["Du öffnest den Schrank. Die Hemden hängen ordentlich, aber der kleine Koffer fehlt. Im Bad findest du keine Zahnbürste und keine Medikamente. Herr Albrecht ist also nicht einfach verschwunden. Er hat seine Sachen gepackt.",
         "Você abre o armário. As camisas estão penduradas em ordem, mas a mala pequena não está lá. No banheiro você não encontra escova de dentes nem remédios. Então o senhor Albrecht não simplesmente sumiu. Ele arrumou as coisas dele.",
         [["Du öffnest den Schrank.", "Você abre o armário.", "du|öffnen|der|Schrank"],
          ["Die Hemden hängen ordentlich,", "As camisas estão penduradas em ordem,", "der|Hemd"],
          ["aber der kleine Koffer", "mas a mala pequena", "aber|der|klein|Koffer"],
          ["fehlt.", "não está lá.", "fehlen"],
          ["Im Bad", "No banheiro", "in|der|Bad"],
          ["findest du keine Zahnbürste", "você não encontra escova de dentes", "finden|du|kein"],
          ["und keine Medikamente.", "nem remédios.", "und|kein|Medikament"],
          ["Herr Albrecht ist also", "Então o senhor Albrecht", "Herr|sein|also"],
          ["nicht einfach verschwunden.", "não simplesmente sumiu.", "nicht|einfach"],
          ["Er hat seine Sachen gepackt.", "Ele arrumou as coisas dele.", "er|haben|sein|Sache"]]],
        ["Da öffnet sich die Wohnungstür. Ein junger Mann kommt herein, mit einem Schlüssel in der Hand. „Wer bist du?“, fragt er scharf. Er heißt Jonas und ist der Neffe von Herrn Albrecht. Er sieht die Katze, dann den leeren Teller und wird rot.",
         "Nesse momento se abre a porta do apartamento. Um rapaz entra, com uma chave na mão. “Quem é você?”, ele pergunta, ríspido. Ele se chama Jonas e é sobrinho do senhor Albrecht. Ele vê a gata, depois o prato vazio, e fica vermelho.",
         [["Da öffnet sich", "Nesse momento se abre", "da|öffnen|sich"],
          ["die Wohnungstür.", "a porta do apartamento.", "der"],
          ["Ein junger Mann kommt herein,", "Um rapaz entra,", "ein|jung|Mann|kommen"],
          ["mit einem Schlüssel", "com uma chave", "mit|ein|Schlüssel"],
          ["in der Hand.", "na mão.", "in|der|Hand"],
          ["„Wer bist du?“,", "“Quem é você?”,", "wer|sein|du"],
          ["fragt er scharf.", "ele pergunta, ríspido.", "fragen|er|scharf"],
          ["Er heißt Jonas", "Ele se chama Jonas", "er|heißen"],
          ["und ist der Neffe", "e é sobrinho", "und|sein|der"],
          ["von Herrn Albrecht.", "do senhor Albrecht.", "von|Herr"],
          ["Er sieht die Katze,", "Ele vê a gata,", "er|sehen|der|Katze"],
          ["dann den leeren Teller", "depois o prato vazio,", "dann|der|leer|Teller"],
          ["und wird rot.", "e fica vermelho.", "und|werden|rot"]]]
      ],
      escolhas: [
        { pt: "Mostrar a Jonas o armário sem a mala.", de: "Jonas den Schrank ohne Koffer zeigen.", ir: "c7" },
        { pt: "Perguntar sobre o relógio de ouro.", de: "Nach der Uhr aus Gold fragen.", ir: "c5" }
      ]
    },

    c4: {
      cap: "Frau Krüger",
      p: [
        ["Frau Krüger wohnt unten und vermietet das ganze Haus. Sie ist über siebzig, aber sie kommt schnell die Treppe hoch. In der Wohnung sagt sie sofort: „Nichts anfassen!“ Dann sieht sie den Zettel und den leeren Platz an der Wand.",
         "A Frau Krüger mora no térreo e aluga o prédio inteiro. Ela tem mais de setenta anos, mas sobe a escada rápido. No apartamento ela diz na hora: “Não toque em nada!” Depois ela vê o bilhete e o lugar vazio na parede.",
         [["Frau Krüger wohnt unten", "A Frau Krüger mora no térreo", "Frau|wohnen|unten"],
          ["und vermietet das ganze Haus.", "e aluga o prédio inteiro.", "und|der|ganz|Haus"],
          ["Sie ist über siebzig,", "Ela tem mais de setenta anos,", "sie|sein|über"],
          ["aber sie kommt schnell", "mas ela sobe rápido", "aber|sie|kommen|schnell"],
          ["die Treppe hoch.", "a escada.", "der|Treppe"],
          ["In der Wohnung", "No apartamento", "in|der|Wohnung"],
          ["sagt sie sofort:", "ela diz na hora:", "sagen|sie|sofort"],
          ["„Nichts anfassen!“", "“Não toque em nada!”", "nichts"],
          ["Dann sieht sie den Zettel", "Depois ela vê o bilhete", "dann|sehen|sie|der"],
          ["und den leeren Platz", "e o lugar vazio", "und|der|leer|Platz"],
          ["an der Wand.", "na parede.", "an|der|Wand"]]],
        ["„Die Uhr aus Gold! Die war von seinem Vater“, sagt sie leise. „Am Sonntag hat er laut mit Jonas gestritten, seinem Neffen. Es war wegen Geld. Der Junge hat Schulden, wissen Sie.“ Dann sieht sie dich ernst an.",
         "“O relógio de ouro! Era do pai dele”, ela diz baixinho. “No domingo ele brigou alto com o Jonas, o sobrinho dele. Foi por causa de dinheiro. O rapaz tem dívidas, sabe?” Depois ela olha para você com seriedade.",
         [["„Die Uhr aus Gold!", "“O relógio de ouro!", "der|Uhr|aus|Gold"],
          ["Die war von seinem Vater“,", "Era do pai dele”,", "die|sein|von|Vater"],
          ["sagt sie leise.", "ela diz baixinho.", "sagen|sie|leise"],
          ["„Am Sonntag", "“No domingo", "an|der|Sonntag"],
          ["hat er laut mit Jonas gestritten,", "ele brigou alto com o Jonas,", "haben|er|laut|mit|streiten"],
          ["seinem Neffen.", "o sobrinho dele.", "sein"],
          ["Es war wegen Geld.", "Foi por causa de dinheiro.", "es|sein|wegen|Geld"],
          ["Der Junge hat Schulden,", "O rapaz tem dívidas,", "der|Junge|haben"],
          ["wissen Sie.“", "sabe?”", "wissen|sie"],
          ["Dann sieht sie dich", "Depois ela olha para você", "dann|sehen|sie|du"],
          ["ernst an.", "com seriedade.", "ernst"]]]
      ],
      escolhas: [
        { pt: "Fotografar o bilhete e chamar a polícia.", de: "Den Zettel fotografieren und die Polizei rufen.", ir: "c6", marca: "foto" },
        { pt: "Ligar para o Jonas e pedir que ele venha.", de: "Jonas anrufen und ihn bitten zu kommen.", ir: "c7" }
      ]
    },

    c5: {
      cap: "O lugar vazio",
      p: [
        ["„Wo ist die Uhr aus Gold?“, fragst du. Jonas wird laut. „Willst du sagen, ich bin ein Dieb? Du kennst mich nicht! Du kennst meine Familie nicht!“ Er nimmt den Zettel vom Tisch, steckt ihn in die Tasche und läuft die Treppe hinunter.",
         "“Onde está o relógio de ouro?”, você pergunta. Jonas levanta a voz. “Você está dizendo que eu sou um ladrão? Você não me conhece! Você não conhece a minha família!” Ele pega o bilhete da mesa, põe no bolso e desce a escada correndo.",
         [["„Wo ist die Uhr", "“Onde está o relógio", "wo|sein|der|Uhr"],
          ["aus Gold?“,", "de ouro?”,", "aus|Gold"],
          ["fragst du.", "você pergunta.", "fragen|du"],
          ["Jonas wird laut.", "Jonas levanta a voz.", "werden|laut"],
          ["„Willst du sagen,", "“Você está dizendo", "wollen|du|sagen"],
          ["ich bin ein Dieb?", "que eu sou um ladrão?", "ich|sein|ein|Dieb"],
          ["Du kennst mich nicht!", "Você não me conhece!", "du|kennen|ich|nicht"],
          ["Du kennst meine Familie nicht!“", "Você não conhece a minha família!”", "du|kennen|mein|Familie|nicht"],
          ["Er nimmt den Zettel", "Ele pega o bilhete", "er|nehmen|der"],
          ["vom Tisch,", "da mesa,", "von|der|Tisch"],
          ["steckt ihn in die Tasche", "põe no bolso", "er|in|der|Tasche"],
          ["und läuft", "e corre", "und|laufen"],
          ["die Treppe hinunter.", "escada abaixo.", "der|Treppe"]]],
        ["Unten geht eine Tür auf. Frau Krüger, die Vermieterin, kommt die Treppe hoch und sieht dich lange an. „Was machen Sie in seiner Wohnung?“, fragt sie. „Und warum schreit der Junge so?“ Du merkst: Jetzt bist du hier die fremde Person.",
         "Lá embaixo uma porta se abre. A Frau Krüger, a senhoria, sobe a escada e olha para você por um bom tempo. “O que você está fazendo no apartamento dele?”, ela pergunta. “E por que o rapaz está gritando assim?” Você percebe: agora, aqui, a pessoa estranha é você.",
         [["Unten geht eine Tür auf.", "Lá embaixo uma porta se abre.", "unten|gehen|ein|Tür"],
          ["Frau Krüger, die Vermieterin,", "A Frau Krüger, a senhoria,", "Frau|der"],
          ["kommt die Treppe hoch", "sobe a escada", "kommen|der|Treppe"],
          ["und sieht dich lange an.", "e olha para você por um bom tempo.", "und|sehen|du|lang"],
          ["„Was machen Sie", "“O que você está fazendo", "was|machen|sie"],
          ["in seiner Wohnung?“,", "no apartamento dele?”,", "in|sein|Wohnung"],
          ["fragt sie.", "ela pergunta.", "fragen|sie"],
          ["„Und warum schreit der Junge so?“", "“E por que o rapaz está gritando assim?”", "und|warum|schreien|der|Junge|so"],
          ["Du merkst:", "Você percebe:", "du|merken"],
          ["Jetzt bist du hier", "Agora, aqui, você é", "jetzt|sein|du|hier"],
          ["die fremde Person.", "a pessoa estranha.", "der|fremd|Person"]]]
      ],
      escolhas: [
        { pt: "Chamar a polícia.", de: "Die Polizei rufen.", ir: "c6" },
        { pt: "Correr atrás do Jonas.", de: "Jonas hinterherlaufen.", ir: "c7" },
        { pt: "Mostrar à Frau Krüger a foto do bilhete.", de: "Frau Krüger das Foto vom Zettel zeigen.", ir: "c8", req: "foto" }
      ]
    },

    c6: {
      cap: "A polícia",
      p: [
        ["Eine halbe Stunde später steht eine Polizistin in der Wohnung. Sie heißt Frau Wendt und schreibt alles auf. Der Zettel ist nicht mehr auf dem Tisch. „Jonas war vorhin hier“, sagt Frau Krüger. „Er hat einen Schlüssel.“",
         "Meia hora depois há uma policial no apartamento. Ela se chama Frau Wendt e anota tudo. O bilhete não está mais na mesa. “O Jonas esteve aqui agora há pouco”, diz a Frau Krüger. “Ele tem uma chave.”",
         [["Eine halbe Stunde später", "Meia hora depois", "ein|Stunde|später"],
          ["steht eine Polizistin", "há uma policial", "stehen|ein"],
          ["in der Wohnung.", "no apartamento.", "in|der|Wohnung"],
          ["Sie heißt Frau Wendt", "Ela se chama Frau Wendt", "sie|heißen|Frau"],
          ["und schreibt alles auf.", "e anota tudo.", "und|schreiben|alles"],
          ["Der Zettel", "O bilhete", "der"],
          ["ist nicht mehr", "não está mais", "sein|nicht|mehr"],
          ["auf dem Tisch.", "na mesa.", "auf|der|Tisch"],
          ["„Jonas war vorhin hier“,", "“O Jonas esteve aqui agora há pouco”,", "sein|hier"],
          ["sagt Frau Krüger.", "diz a Frau Krüger.", "sagen|Frau"],
          ["„Er hat einen Schlüssel.“", "“Ele tem uma chave.”", "er|haben|ein|Schlüssel"]]],
        ["Frau Wendt bleibt ruhig. „Alte Menschen fahren oft ins Krankenhaus und sagen niemandem etwas“, erklärt sie. „Aber eine Uhr aus Gold, die fehlt, ist etwas anderes.“ Sie sieht dich an. „Und Sie waren vor uns in der Wohnung, richtig?“",
         "Frau Wendt continua calma. “Pessoas idosas muitas vezes vão para o hospital e não dizem nada a ninguém”, ela explica. “Mas um relógio de ouro que sumiu é outra coisa.” Ela olha para você. “E você estava no apartamento antes de nós, certo?”",
         [["Frau Wendt bleibt ruhig.", "Frau Wendt continua calma.", "Frau|bleiben|ruhig"],
          ["„Alte Menschen", "“Pessoas idosas", "alt|Mensch"],
          ["fahren oft ins Krankenhaus", "muitas vezes vão para o hospital", "fahren|oft|in|der|Krankenhaus"],
          ["und sagen niemandem etwas“,", "e não dizem nada a ninguém”,", "und|sagen|niemand|etwas"],
          ["erklärt sie.", "ela explica.", "erklären|sie"],
          ["„Aber eine Uhr aus Gold,", "“Mas um relógio de ouro", "aber|ein|Uhr|aus|Gold"],
          ["die fehlt,", "que sumiu", "die|fehlen"],
          ["ist etwas anderes.“", "é outra coisa.”", "sein|etwas|ander"],
          ["Sie sieht dich an.", "Ela olha para você.", "sie|sehen|du"],
          ["„Und Sie waren", "“E você estava", "und|sie|sein"],
          ["vor uns in der Wohnung,", "no apartamento antes de nós,", "vor|wir|in|der|Wohnung"],
          ["richtig?“", "certo?”", "richtig"]]]
      ],
      escolhas: [
        { pt: "Dizer que o Jonas roubou o relógio.", de: "Sagen, dass Jonas die Uhr gestohlen hat.", ir: "f_ruim" },
        { pt: "Responder às perguntas e deixar a polícia trabalhar.", de: "Die Fragen beantworten und die Polizei arbeiten lassen.", ir: "f_neutro" },
        { pt: "Mostrar a foto do bilhete.", de: "Das Foto vom Zettel zeigen.", ir: "c8", req: "foto" }
      ]
    },

    c7: {
      cap: "Jonas fala",
      p: [
        ["Jonas setzt sich auf die Treppe und legt die Hände vors Gesicht. „Mein Onkel hat Probleme mit dem Herzen“, sagt er leise. „Am Dienstag hat er mich angerufen. Er wollte, dass ich Minna Essen gebe. Nur ein paar Tage, hat er gesagt.“",
         "Jonas se senta na escada e põe as mãos no rosto. “Meu tio tem problemas de coração”, ele diz baixinho. “Na terça ele me ligou. Ele queria que eu desse comida para a Minna. Só uns dias, ele disse.”",
         [["Jonas setzt sich", "Jonas se senta", "setzen|sich"],
          ["auf die Treppe", "na escada", "auf|der|Treppe"],
          ["und legt die Hände", "e põe as mãos", "und|legen|der|Hand"],
          ["vors Gesicht.", "no rosto.", "vor|der|Gesicht"],
          ["„Mein Onkel", "“Meu tio", "mein|Onkel"],
          ["hat Probleme mit dem Herzen“,", "tem problemas de coração”,", "haben|Problem|mit|der|Herz"],
          ["sagt er leise.", "ele diz baixinho.", "sagen|er|leise"],
          ["„Am Dienstag", "“Na terça", "an|der|Dienstag"],
          ["hat er mich angerufen.", "ele me ligou.", "haben|er|ich|anrufen"],
          ["Er wollte,", "Ele queria", "er|wollen"],
          ["dass ich Minna Essen gebe.", "que eu desse comida para a Minna.", "dass|ich|Essen|geben"],
          ["Nur ein paar Tage,", "Só uns dias,", "nur|ein|Tag"],
          ["hat er gesagt.“", "ele disse.”", "haben|er|sagen"]]],
        ["„Ich bin nicht gekommen. Wir hatten Streit, und ich habe mich geschämt.“ Er sieht zur Seite. Er weiß nicht, in welchem Krankenhaus sein Onkel liegt. Und über die Uhr aus Gold sagt er kein Wort.",
         "“Eu não vim. A gente tinha brigado, e eu fiquei com vergonha.” Ele desvia o olhar. Ele não sabe em que hospital o tio está. E sobre o relógio de ouro ele não diz uma palavra.",
         [["„Ich bin nicht gekommen.", "“Eu não vim.", "ich|sein|nicht|kommen"],
          ["Wir hatten Streit,", "A gente tinha brigado,", "wir|haben|Streit"],
          ["und ich habe mich geschämt.“", "e eu fiquei com vergonha.”", "und|ich|haben"],
          ["Er sieht zur Seite.", "Ele desvia o olhar.", "er|sehen|zu|der|Seite"],
          ["Er weiß nicht,", "Ele não sabe", "er|wissen|nicht"],
          ["in welchem Krankenhaus sein Onkel liegt.", "em que hospital o tio está.", "in|welcher|Krankenhaus|sein|Onkel|liegen"],
          ["Und über die Uhr", "E sobre o relógio", "und|über|der|Uhr"],
          ["aus Gold", "de ouro", "aus|Gold"],
          ["sagt er kein Wort.", "ele não diz uma palavra.", "sagen|er|kein|Wort"]]]
      ],
      escolhas: [
        { pt: "Procurar o hospital junto com o Jonas.", de: "Mit Jonas das Krankenhaus suchen.", ir: "c8" },
        { pt: "Deixar a família resolver isso.", de: "Das der Familie überlassen.", ir: "f_neutro" }
      ]
    },

    c8: {
      cap: "Quarto 312",
      nota: "Os números do bilhete finalmente fazem sentido.",
      p: [
        ["Die Zahlen waren kein Code. H3 ist Haus 3 im großen Krankenhaus im Süden der Stadt. 312 ist ein Zimmer. Und am Mittwoch um sieben Uhr war die Operation. Herr Albrecht liegt im Bett, blass und dünn, aber er lebt.",
         "Os números não eram um código. H3 é o prédio 3 do grande hospital no sul da cidade. 312 é um quarto. E na quarta-feira às sete horas foi a cirurgia. O senhor Albrecht está deitado na cama, pálido e magro, mas está vivo.",
         [["Die Zahlen", "Os números", "der|Zahl"],
          ["waren kein Code.", "não eram um código.", "sein|kein"],
          ["H3 ist Haus 3", "H3 é o prédio 3", "sein|Haus"],
          ["im großen Krankenhaus", "do grande hospital", "in|der|groß|Krankenhaus"],
          ["im Süden der Stadt.", "no sul da cidade.", "in|der|Stadt"],
          ["312 ist ein Zimmer.", "312 é um quarto.", "sein|ein|Zimmer"],
          ["Und am Mittwoch", "E na quarta-feira", "und|an|der|Mittwoch"],
          ["um sieben Uhr", "às sete horas", "um|sieben|Uhr"],
          ["war die Operation.", "foi a cirurgia.", "sein|der"],
          ["Herr Albrecht liegt im Bett,", "O senhor Albrecht está deitado na cama,", "Herr|liegen|in|der|Bett"],
          ["blass und dünn,", "pálido e magro,", "und|dünn"],
          ["aber er lebt.", "mas está vivo.", "aber|er|leben"]]],
        ["„Ich wollte niemandem etwas sagen“, erklärt er. „Ein alter Mann mit einem schwachen Herzen, wer will das hören?“ Er lacht leise. Dann fragt er: „Und Minna? Jonas sollte ihr Essen geben. Hat er das gemacht?“",
         "“Eu não queria dizer nada a ninguém”, ele explica. “Um homem velho com o coração fraco, quem quer ouvir isso?” Ele ri baixinho. Depois ele pergunta: “E a Minna? O Jonas devia dar comida para ela. Ele fez isso?”",
         [["„Ich wollte niemandem etwas sagen“,", "“Eu não queria dizer nada a ninguém”,", "ich|wollen|niemand|etwas|sagen"],
          ["erklärt er.", "ele explica.", "erklären|er"],
          ["„Ein alter Mann", "“Um homem velho", "ein|alt|Mann"],
          ["mit einem schwachen Herzen,", "com o coração fraco,", "mit|ein|schwach|Herz"],
          ["wer will das hören?“", "quem quer ouvir isso?”", "wer|wollen|das|hören"],
          ["Er lacht leise.", "Ele ri baixinho.", "er|lachen|leise"],
          ["Dann fragt er:", "Depois ele pergunta:", "dann|fragen|er"],
          ["„Und Minna?", "“E a Minna?", "und"],
          ["Jonas sollte ihr Essen geben.", "O Jonas devia dar comida para ela.", "sollen|sie|Essen|geben"],
          ["Hat er das gemacht?“", "Ele fez isso?”", "haben|er|das|machen"]]]
      ],
      escolhas: [
        { pt: "Contar que o relógio de ouro sumiu.", de: "Erzählen, dass die Uhr aus Gold fehlt.", ir: "f_ruim" },
        { pt: "Não dizer nada sobre o relógio.", de: "Nichts über die Uhr sagen.", ir: "f_segredo" },
        { pt: "Contar que você deu comida para a Minna.", de: "Erzählen, dass du Minna Essen gegeben hast.", ir: "f_bom", req: "gata" }
      ]
    },

    f_bom: {
      cap: "A chave",
      p: [
        ["Du erzählst von Minna, von der Wurst aus dem Kühlschrank und vom fehlenden Koffer. Herr Albrecht hört zu und nimmt deine Hand. „Danke“, sagt er. Dann wird er ernst. „Die Uhr aus Gold ist weg, nicht wahr? Ich weiß, wer sie hat.“",
         "Você fala da Minna, da linguiça da geladeira e da mala que faltava. O senhor Albrecht escuta e pega sua mão. “Obrigado”, ele diz. Depois ele fica sério. “O relógio de ouro sumiu, não é? Eu sei quem está com ele.”",
         [["Du erzählst von Minna,", "Você fala da Minna,", "du|erzählen|von"],
          ["von der Wurst", "da linguiça", "von|der|Wurst"],
          ["aus dem Kühlschrank", "da geladeira", "aus|der|Kühlschrank"],
          ["und vom fehlenden Koffer.", "e da mala que faltava.", "und|von|der|fehlen|Koffer"],
          ["Herr Albrecht hört zu", "O senhor Albrecht escuta", "Herr|hören"],
          ["und nimmt deine Hand.", "e pega sua mão.", "und|nehmen|dein|Hand"],
          ["„Danke“, sagt er.", "“Obrigado”, ele diz.", "danke|sagen|er"],
          ["Dann wird er ernst.", "Depois ele fica sério.", "dann|werden|er|ernst"],
          ["„Die Uhr aus Gold", "“O relógio de ouro", "der|Uhr|aus|Gold"],
          ["ist weg, nicht wahr?", "sumiu, não é?", "sein|weg|nicht"],
          ["Ich weiß,", "Eu sei", "ich|wissen"],
          ["wer sie hat.“", "quem está com ele.”", "wer|sie|haben"]]],
        ["Am nächsten Tag kommt Jonas ins Krankenhaus, mit der Uhr in der Hand. Er hat sie zurückgekauft, mit dem Geld für seinen Urlaub. Lange sagen die beiden nichts. Dann legt Herr Albrecht dir einen Schlüssel in die Hand: „Für Minna. Bis ich zurück bin.“",
         "No dia seguinte, Jonas chega ao hospital com o relógio na mão. Ele o comprou de volta com o dinheiro das férias dele. Por muito tempo os dois não dizem nada. Então o senhor Albrecht coloca uma chave na sua mão: “Para a Minna. Até eu voltar.”",
         [["Am nächsten Tag", "No dia seguinte", "an|der|nächste|Tag"],
          ["kommt Jonas", "Jonas chega", "kommen"],
          ["ins Krankenhaus,", "ao hospital,", "in|der|Krankenhaus"],
          ["mit der Uhr", "com o relógio", "mit|der|Uhr"],
          ["in der Hand.", "na mão.", "in|der|Hand"],
          ["Er hat sie zurückgekauft,", "Ele o comprou de volta,", "er|haben|sie|kaufen"],
          ["mit dem Geld", "com o dinheiro", "mit|der|Geld"],
          ["für seinen Urlaub.", "das férias dele.", "für|sein|Urlaub"],
          ["Lange sagen die beiden nichts.", "Por muito tempo os dois não dizem nada.", "lang|sagen|der|nichts"],
          ["Dann legt Herr Albrecht", "Então o senhor Albrecht coloca", "dann|legen|Herr"],
          ["dir einen Schlüssel in die Hand:", "uma chave na sua mão:", "du|ein|Schlüssel|in|der|Hand"],
          ["„Für Minna.", "“Para a Minna.", "für"],
          ["Bis ich zurück bin.“", "Até eu voltar.”", "bis|ich|zurück|sein"]]]
      ],
      fim: { tipo: "bom", titulo: "A chave do 4B" }
    },

    f_neutro: {
      cap: "Assunto de família",
      p: [
        ["Am Montag erzählt dir Frau Krüger die Neuigkeit: Herr Albrecht liegt im Krankenhaus. Er hatte eine Operation am Herzen, und es geht ihm besser. Minna wohnt jetzt bei ihr unten, bis er zurückkommt.",
         "Na segunda-feira, a Frau Krüger conta a novidade para você: o senhor Albrecht está internado no hospital. Ele fez uma cirurgia no coração e está melhor. A Minna agora mora com ela lá embaixo, até ele voltar.",
         [["Am Montag", "Na segunda-feira", "an|der|Montag"],
          ["erzählt dir Frau Krüger", "a Frau Krüger conta para você", "erzählen|du|Frau"],
          ["die Neuigkeit:", "a novidade:", "der"],
          ["Herr Albrecht liegt", "O senhor Albrecht está internado", "Herr|liegen"],
          ["im Krankenhaus.", "no hospital.", "in|der|Krankenhaus"],
          ["Er hatte eine Operation", "Ele fez uma cirurgia", "er|haben|ein"],
          ["am Herzen,", "no coração,", "an|der|Herz"],
          ["und es geht ihm besser.", "e está melhor.", "und|es|gehen|er|besser"],
          ["Minna wohnt jetzt", "A Minna agora mora", "wohnen|jetzt"],
          ["bei ihr unten,", "com ela lá embaixo,", "bei|sie|unten"],
          ["bis er zurückkommt.", "até ele voltar.", "bis|er"]]],
        ["Was mit der Uhr passiert ist, erfährst du nie. Jonas sieht dich auf der Straße und geht schnell auf die andere Seite. Es ist nicht dein Problem, denkst du. Aber manchmal, wenn nebenan die Uhren ticken, fragst du dich doch.",
         "O que aconteceu com o relógio você nunca vai saber. Jonas vê você na rua e atravessa rápido para o outro lado. Não é problema seu, você pensa. Mas às vezes, quando os relógios fazem tique-taque ao lado, você fica se perguntando.",
         [["Was mit der Uhr passiert ist,", "O que aconteceu com o relógio", "was|mit|der|Uhr|passieren|sein"],
          ["erfährst du nie.", "você nunca vai saber.", "du|nie"],
          ["Jonas sieht dich", "Jonas vê você", "sehen|du"],
          ["auf der Straße", "na rua", "auf|der|Straße"],
          ["und geht schnell", "e atravessa rápido", "und|gehen|schnell"],
          ["auf die andere Seite.", "para o outro lado.", "auf|der|ander|Seite"],
          ["Es ist nicht dein Problem,", "Não é problema seu,", "es|sein|nicht|dein|Problem"],
          ["denkst du.", "você pensa.", "denken|du"],
          ["Aber manchmal,", "Mas às vezes,", "aber|manchmal"],
          ["wenn nebenan die Uhren ticken,", "quando os relógios fazem tique-taque ao lado,", "wenn|der|Uhr"],
          ["fragst du dich doch.", "você fica se perguntando.", "fragen|du|doch"]]]
      ],
      fim: { tipo: "neutro", titulo: "Assunto de família" }
    },

    f_segredo: {
      cap: "O relógio volta",
      p: [
        ["Du sagst nichts über die Uhr. Herr Albrecht kommt nach zehn Tagen nach Hause, langsam, mit einem Stock. Am Abend hängt die Uhr aus Gold wieder an der Wand. Niemand erklärt, wie sie dorthin gekommen ist.",
         "Você não diz nada sobre o relógio. O senhor Albrecht volta para casa depois de dez dias, devagar, de bengala. À noite o relógio de ouro está pendurado de novo na parede. Ninguém explica como ele voltou para lá.",
         [["Du sagst nichts", "Você não diz nada", "du|sagen|nichts"],
          ["über die Uhr.", "sobre o relógio.", "über|der|Uhr"],
          ["Herr Albrecht kommt", "O senhor Albrecht volta", "Herr|kommen"],
          ["nach zehn Tagen", "depois de dez dias", "nach|zehn|Tag"],
          ["nach Hause,", "para casa,", "nach|Haus"],
          ["langsam, mit einem Stock.", "devagar, de bengala.", "langsam|mit|ein"],
          ["Am Abend", "À noite", "an|der|Abend"],
          ["hängt die Uhr aus Gold", "o relógio de ouro está pendurado", "der|Uhr|aus|Gold"],
          ["wieder an der Wand.", "de novo na parede.", "wieder|an|der|Wand"],
          ["Niemand erklärt,", "Ninguém explica", "niemand|erklären"],
          ["wie sie dorthin gekommen ist.", "como ele voltou para lá.", "wie|sie|kommen|sein"]]],
        ["Auf der Treppe nickt Jonas dir kurz zu. Er weiß, dass du es weißt. Aber du weißt nicht, ob er seine Schulden bezahlt hat oder neue hat. Ihr teilt jetzt ein Geheimnis, und du wolltest es nie.",
         "Na escada, Jonas faz um aceno rápido para você. Ele sabe que você sabe. Mas você não sabe se ele pagou as dívidas ou se tem dívidas novas. Agora vocês dividem um segredo, e você nunca quis isso.",
         [["Auf der Treppe", "Na escada,", "auf|der|Treppe"],
          ["nickt Jonas dir kurz zu.", "Jonas faz um aceno rápido para você.", "du|kurz"],
          ["Er weiß,", "Ele sabe", "er|wissen"],
          ["dass du es weißt.", "que você sabe.", "dass|du|es|wissen"],
          ["Aber du weißt nicht,", "Mas você não sabe", "aber|du|wissen|nicht"],
          ["ob er seine Schulden bezahlt hat", "se ele pagou as dívidas", "ob|er|sein|bezahlen|haben"],
          ["oder neue hat.", "ou se tem dívidas novas.", "oder|neu|haben"],
          ["Ihr teilt jetzt", "Agora vocês dividem", "ihr|teilen|jetzt"],
          ["ein Geheimnis,", "um segredo,", "ein|Geheimnis"],
          ["und du wolltest es nie.", "e você nunca quis isso.", "und|du|wollen|es|nie"]]]
      ],
      fim: { tipo: "neutro", titulo: "Um segredo dividido" }
    },

    f_ruim: {
      cap: "Perguntas na porta",
      p: [
        ["Zwei Tage später klingelt es an deiner Tür. Es ist Frau Wendt von der Polizei. Herr Albrecht will seine Uhr zurück. Jonas sagt, er war seit Sonntag nicht dort. Und Frau Krüger erzählt allen, wer zuerst in der Wohnung war: du.",
         "Dois dias depois, tocam a campainha da sua porta. É a Frau Wendt, da polícia. O senhor Albrecht quer o relógio dele de volta. Jonas diz que não vai lá desde domingo. E a Frau Krüger conta para todo mundo quem entrou primeiro no apartamento: você.",
         [["Zwei Tage später", "Dois dias depois,", "zwei|Tag|später"],
          ["klingelt es an deiner Tür.", "tocam a campainha da sua porta.", "klingeln|es|an|dein|Tür"],
          ["Es ist Frau Wendt", "É a Frau Wendt,", "es|sein|Frau"],
          ["von der Polizei.", "da polícia.", "von|der|Polizei"],
          ["Herr Albrecht will", "O senhor Albrecht quer", "Herr|wollen"],
          ["seine Uhr zurück.", "o relógio dele de volta.", "sein|Uhr|zurück"],
          ["Jonas sagt,", "Jonas diz", "sagen"],
          ["er war seit Sonntag nicht dort.", "que não vai lá desde domingo.", "er|sein|seit|Sonntag|nicht|dort"],
          ["Und Frau Krüger", "E a Frau Krüger", "und|Frau"],
          ["erzählt allen,", "conta para todo mundo", "erzählen|alle"],
          ["wer zuerst in der Wohnung war:", "quem entrou primeiro no apartamento:", "wer|zuerst|in|der|Wohnung|sein"],
          ["du.", "você.", "du"]]],
        ["Du erklärst alles noch einmal: die Katze, die offene Tür, den Zettel. Frau Wendt schreibt und nickt, aber sie lächelt nicht. Herr Albrecht kommt bald nach Hause. Aber wenn du klopfst, öffnet er nicht mehr.",
         "Você explica tudo mais uma vez: a gata, a porta aberta, o bilhete. Frau Wendt anota e acena com a cabeça, mas não sorri. O senhor Albrecht logo volta para casa. Mas quando você bate, ele não abre mais.",
         [["Du erklärst alles", "Você explica tudo", "du|erklären|alles"],
          ["noch einmal:", "mais uma vez:", "noch"],
          ["die Katze,", "a gata,", "der|Katze"],
          ["die offene Tür,", "a porta aberta,", "der|offen|Tür"],
          ["den Zettel.", "o bilhete.", "der"],
          ["Frau Wendt schreibt", "Frau Wendt anota", "Frau|schreiben"],
          ["und nickt,", "e acena com a cabeça,", "und"],
          ["aber sie lächelt nicht.", "mas não sorri.", "aber|sie|nicht"],
          ["Herr Albrecht kommt", "O senhor Albrecht volta", "Herr|kommen"],
          ["bald nach Hause.", "logo para casa.", "bald|nach|Haus"],
          ["Aber wenn du klopfst,", "Mas quando você bate,", "aber|wenn|du|klopfen"],
          ["öffnet er nicht mehr.", "ele não abre mais.", "öffnen|er|nicht|mehr"]]]
      ],
      fim: { tipo: "ruim", titulo: "Do lado errado da porta" }
    }
  }
});
VB_HIST.de.push({
  id: "trem-noturno",
  titulo: "Trem noturno",
  genero: "Suspense",
  nivel: "A2",
  desc: "No trem noturno de Viena a Hamburgo, sua bolsa é trocada por uma idêntica, com um envelope lacrado e um celular que não para de tocar.",
  inicio: "c1",
  cenas: {
    c1: {
      cap: "Partida de Viena",
      p: [
        ["Es ist zehn Uhr abends. In Wien steigst du in den Nachtzug nach Hamburg. Deinen Koffer stellst du unter das Bett, deine schwarze Tasche legst du nach oben. Der Schaffner, Herr Ölmez, prüft schnell deine Fahrkarte und geht weiter.",
         "São dez da noite. Em Viena, você sobe no trem noturno para Hamburgo. Você coloca a mala embaixo da cama e põe sua bolsa preta lá em cima. O condutor, o senhor Ölmez, confere rápido sua passagem e segue em frente.",
         [["Es ist zehn Uhr abends.", "São dez da noite.", "es|sein|zehn|Uhr"],
          ["In Wien", "Em Viena,", "in"],
          ["steigst du", "você sobe", "steigen|du"],
          ["in den Nachtzug", "no trem noturno", "in|der"],
          ["nach Hamburg.", "para Hamburgo.", "nach"],
          ["Deinen Koffer", "Sua mala", "dein|Koffer"],
          ["stellst du unter das Bett,", "você coloca embaixo da cama,", "stellen|du|unter|der|Bett"],
          ["deine schwarze Tasche", "sua bolsa preta", "dein|schwarz|Tasche"],
          ["legst du nach oben.", "você põe lá em cima.", "legen|du|nach|oben"],
          ["Der Schaffner, Herr Ölmez,", "O condutor, o senhor Ölmez,", "der|Herr"],
          ["prüft schnell deine Fahrkarte", "confere rápido sua passagem", "prüfen|schnell|dein|Fahrkarte"],
          ["und geht weiter.", "e segue em frente.", "und|gehen"]]],
        ["Du schläfst kurz ein. Später nimmst du deine Tasche und machst sie auf. Sie sieht genau gleich aus, aber darin sind nicht deine Sachen. Da liegen nur ein geschlossener Umschlag und ein fremdes Handy. Dann klingelt das Handy.",
         "Você cochila um pouco. Mais tarde, pega sua bolsa e a abre. Ela parece exatamente igual, mas dentro não estão as suas coisas. Há só um envelope lacrado e o celular de outra pessoa. Então o celular toca.",
         [["Du schläfst kurz ein.", "Você cochila um pouco.", "du|einschlafen|kurz"],
          ["Später nimmst du deine Tasche", "Mais tarde, você pega sua bolsa", "später|nehmen|du|dein|Tasche"],
          ["und machst sie auf.", "e a abre.", "und|aufmachen|sie"],
          ["Sie sieht genau gleich aus,", "Ela parece exatamente igual,", "sie|aussehen|genau|gleich"],
          ["aber darin", "mas dentro", "aber"],
          ["sind nicht deine Sachen.", "não estão as suas coisas.", "sein|nicht|dein|Sache"],
          ["Da liegen nur", "Há só", "da|liegen|nur"],
          ["ein geschlossener Umschlag", "um envelope lacrado", "ein|geschlossen"],
          ["und ein fremdes Handy.", "e o celular de outra pessoa.", "und|ein|fremd|Handy"],
          ["Dann klingelt das Handy.", "Então o celular toca.", "dann|klingeln|der|Handy"]]]
      ],
      escolhas: [
        { pt: "Atender o celular.", de: "Den Anruf annehmen.", ir: "c2a", marca: "telefon" },
        { pt: "Deixar tocar e abrir o envelope.", de: "Es klingeln lassen und den Umschlag öffnen.", ir: "c2b", marca: "umschlag" }
      ]
    },

    c2a: {
      cap: "A voz",
      p: [
        ["Du nimmst den Anruf an. „Wer ist da?“, fragt ein Mann. Seine Stimme ist ruhig und freundlich. Ohne nachzudenken, sagst du deinen Namen. „Danke“, sagt er. „Hören Sie gut zu. Diese Tasche gehört mir.“",
         "Você atende a ligação. “Quem fala?”, pergunta um homem. A voz dele é calma e simpática. Sem pensar, você diz seu nome. “Obrigado”, diz ele. “Escute bem. Esta bolsa é minha.”",
         [["Du nimmst den Anruf an.", "Você atende a ligação.", "du|annehmen|der"],
          ["„Wer ist da?“,", "“Quem fala?”,", "wer|sein|da"],
          ["fragt ein Mann.", "pergunta um homem.", "fragen|ein|Mann"],
          ["Seine Stimme ist", "A voz dele é", "sein|Stimme"],
          ["ruhig und freundlich.", "calma e simpática.", "ruhig|und|freundlich"],
          ["Ohne nachzudenken,", "Sem pensar,", "ohne"],
          ["sagst du deinen Namen.", "você diz seu nome.", "sagen|du|dein|Name"],
          ["„Danke“, sagt er.", "“Obrigado”, diz ele.", "danke|sagen|er"],
          ["„Hören Sie gut zu.", "“Escute bem.", "hören|sie|gut"],
          ["Diese Tasche gehört mir.“", "Esta bolsa é minha.”", "dieser|Tasche|gehören|ich"]]],
        ["„Eine Frau im grauen Mantel ist auch im Zug. Sie will die Tasche haben. Geben Sie sie bitte niemandem. Ich finde Sie.“ Dann ist die Leitung tot. Du sitzt still da und hörst nur den Zug. Er weiß jetzt, wie du heißt.",
         "“Uma mulher de casaco cinza também está no trem. Ela quer a bolsa. Por favor, não a entregue a ninguém. Eu vou encontrar você.” Então a linha fica muda. Você fica ali em silêncio e só ouve o trem. Agora ele sabe como você se chama.",
         [["„Eine Frau", "“Uma mulher", "ein|Frau"],
          ["im grauen Mantel", "de casaco cinza", "in|der|grau|Mantel"],
          ["ist auch im Zug.", "também está no trem.", "sein|auch|in|der|Zug"],
          ["Sie will die Tasche haben.", "Ela quer a bolsa.", "sie|wollen|der|Tasche|haben"],
          ["Geben Sie sie bitte niemandem.", "Por favor, não a entregue a ninguém.", "geben|sie|bitte|niemand"],
          ["Ich finde Sie.“", "Eu vou encontrar você.”", "ich|finden|sie"],
          ["Dann ist die Leitung tot.", "Então a linha fica muda.", "dann|sein|der"],
          ["Du sitzt still da", "Você fica ali em silêncio", "du|sitzen|da"],
          ["und hörst nur den Zug.", "e só ouve o trem.", "und|hören|nur|der|Zug"],
          ["Er weiß jetzt,", "Agora ele sabe", "er|wissen|jetzt"],
          ["wie du heißt.", "como você se chama.", "wie|du|heißen"]]]
      ],
      escolhas: [
        { pt: "Procurar a mulher de casaco cinza.", de: "Die Frau im grauen Mantel suchen.", ir: "c3k" },
        { pt: "Esperar o homem na cabine.", de: "Im Abteil auf den Mann warten.", ir: "c3b" }
      ]
    },

    c2b: {
      cap: "O envelope",
      p: [
        ["Du lässt das Handy klingeln. Nach einer Minute ist es still. Du öffnest vorsichtig den Umschlag. Darin sind ein Brief und viele Kopien mit Zahlen. Oben auf dem Brief steht: „Landgericht Hamburg. Zeugin: Katrin Vogel. Termin: Montag, neun Uhr.“",
         "Você deixa o celular tocar. Depois de um minuto, tudo fica em silêncio. Você abre o envelope com cuidado. Dentro há uma carta e muitas cópias com números. No alto da carta está escrito: “Tribunal Estadual de Hamburgo. Testemunha: Katrin Vogel. Audiência: segunda-feira, nove horas.”",
         [["Du lässt das Handy klingeln.", "Você deixa o celular tocar.", "du|lassen|der|Handy|klingeln"],
          ["Nach einer Minute", "Depois de um minuto,", "nach|ein|Minute"],
          ["ist es still.", "tudo fica em silêncio.", "sein|es"],
          ["Du öffnest vorsichtig den Umschlag.", "Você abre o envelope com cuidado.", "du|öffnen|der"],
          ["Darin sind ein Brief", "Dentro há uma carta", "sein|ein|Brief"],
          ["und viele Kopien mit Zahlen.", "e muitas cópias com números.", "und|viele|mit|Zahl"],
          ["Oben auf dem Brief steht:", "No alto da carta está escrito:", "oben|auf|der|Brief|stehen"],
          ["„Landgericht Hamburg.", "“Tribunal Estadual de Hamburgo.", ""],
          ["Zeugin: Katrin Vogel.", "Testemunha: Katrin Vogel.", ""],
          ["Termin: Montag, neun Uhr.“", "Audiência: segunda-feira, nove horas.”", "Termin|Montag|neun|Uhr"]]],
        ["Unter dem Brief liegt ein Foto. Eine Frau mit kurzen Haaren und einem grauen Mantel. Du kennst das Gesicht. In Wien war sie am Bahnsteig direkt neben dir. Hat sie die Taschen getauscht? Oder hat jemand ihre Tasche gestohlen?",
         "Embaixo da carta há uma foto. Uma mulher de cabelo curto e casaco cinza. Você conhece esse rosto. Em Viena, ela estava na plataforma, bem ao seu lado. Ela trocou as bolsas? Ou alguém roubou a bolsa dela?",
         [["Unter dem Brief", "Embaixo da carta", "unter|der|Brief"],
          ["liegt ein Foto.", "há uma foto.", "liegen|ein|Foto"],
          ["Eine Frau", "Uma mulher", "ein|Frau"],
          ["mit kurzen Haaren", "de cabelo curto", "mit|kurz|Haar"],
          ["und einem grauen Mantel.", "e casaco cinza.", "und|ein|grau|Mantel"],
          ["Du kennst das Gesicht.", "Você conhece esse rosto.", "du|kennen|der|Gesicht"],
          ["In Wien war sie", "Em Viena, ela estava", "in|sein|sie"],
          ["am Bahnsteig", "na plataforma,", "an|der"],
          ["direkt neben dir.", "bem ao seu lado.", "neben|du"],
          ["Hat sie die Taschen getauscht?", "Ela trocou as bolsas?", "haben|sie|der|Tasche|tauschen"],
          ["Oder hat jemand", "Ou alguém", "oder|haben|jemand"],
          ["ihre Tasche gestohlen?", "roubou a bolsa dela?", "Tasche"]]]
      ],
      escolhas: [
        { pt: "Procurar Katrin Vogel no trem.", de: "Katrin Vogel im Zug suchen.", ir: "c3k" },
        { pt: "Guardar o envelope e esperar na cabine.", de: "Den Umschlag einstecken und im Abteil warten.", ir: "c3b" }
      ]
    },

    c3k: {
      cap: "Casaco cinza",
      p: [
        ["Im Speisewagen sitzt eine Frau im grauen Mantel allein am Fenster. Vor ihr steht ein Tee, aber sie trinkt nicht. Als sie die Tasche sieht, steht sie sofort auf. „Das ist meine Tasche“, sagt sie leise. „Ich heiße Katrin. Bitte geben Sie sie mir.“",
         "No vagão-restaurante, uma mulher de casaco cinza está sentada sozinha, perto da janela. Na frente dela há um chá, mas ela não bebe. Quando ela vê a bolsa, se levanta na hora. “Essa bolsa é minha”, diz ela, baixinho. “Meu nome é Katrin. Por favor, me dê a bolsa.”",
         [["Im Speisewagen", "No vagão-restaurante,", "in|der"],
          ["sitzt eine Frau", "está sentada uma mulher", "sitzen|ein|Frau"],
          ["im grauen Mantel", "de casaco cinza", "in|der|grau|Mantel"],
          ["allein am Fenster.", "sozinha, perto da janela.", "allein|an|der|Fenster"],
          ["Vor ihr steht ein Tee,", "Na frente dela há um chá,", "vor|sie|stehen|ein|Tee"],
          ["aber sie trinkt nicht.", "mas ela não bebe.", "aber|sie|trinken|nicht"],
          ["Als sie die Tasche sieht,", "Quando ela vê a bolsa,", "als|sie|der|Tasche|sehen"],
          ["steht sie sofort auf.", "ela se levanta na hora.", "aufstehen|sie|sofort"],
          ["„Das ist meine Tasche“,", "“Essa bolsa é minha”,", "das|sein|mein|Tasche"],
          ["sagt sie leise.", "diz ela, baixinho.", "sagen|sie|leise"],
          ["„Ich heiße Katrin.", "“Meu nome é Katrin.", "ich|heißen"],
          ["Bitte geben Sie sie mir.“", "Por favor, me dê a bolsa.”", "bitte|geben|sie|ich"]]],
        ["„Und wo ist meine Tasche?“, fragst du. „In meinem Abteil. Wir haben die Taschen in Wien verwechselt.“ Sie sieht immer wieder zur Tür. Sie hält die Tasse mit beiden Händen. Warum hat sie so viel Angst?",
         "“E onde está a minha bolsa?”, você pergunta. “Na minha cabine. Nós trocamos as bolsas sem querer em Viena.” Ela olha sem parar para a porta. Ela segura a xícara com as duas mãos. Por que ela tem tanto medo?",
         [["„Und wo ist meine Tasche?“,", "“E onde está a minha bolsa?”,", "und|wo|sein|mein|Tasche"],
          ["fragst du.", "você pergunta.", "fragen|du"],
          ["„In meinem Abteil.", "“Na minha cabine.", "in|mein"],
          ["Wir haben die Taschen", "Nós trocamos as bolsas", "wir|haben|der|Tasche"],
          ["in Wien verwechselt.“", "sem querer em Viena.”", "in"],
          ["Sie sieht immer wieder", "Ela olha sem parar", "sie|sehen|immer|wieder"],
          ["zur Tür.", "para a porta.", "zu|der|Tür"],
          ["Sie hält die Tasse", "Ela segura a xícara", "sie|halten|der|Tasse"],
          ["mit beiden Händen.", "com as duas mãos.", "mit|Hand"],
          ["Warum hat sie", "Por que ela tem", "warum|haben|sie"],
          ["so viel Angst?", "tanto medo?", "so|viel|Angst"]]]
      ],
      escolhas: [
        { pt: "Entregar a bolsa a ela agora.", de: "Ihr die Tasche sofort geben.", ir: "f_twist" },
        { pt: "Recusar e guardar a bolsa até Hamburgo.", de: "Nein sagen und die Tasche bis Hamburg behalten.", ir: "c4h" },
        { pt: "Testá-la: perguntar o que diz a carta do envelope.", de: "Fragen, was im Brief steht.", ir: "c4v", req: "umschlag" }
      ]
    },

    c3b: {
      cap: "Um homem educado",
      p: [
        ["Jemand klopft an die Tür. Ein Mann in einem teuren Anzug steht im Gang und lächelt. „Guten Abend. Wir kennen uns nicht, mein Name ist Brandt.“ Er zeigt auf die schwarze Tasche. „Ich glaube, die gehört mir.“",
         "Alguém bate na porta. Um homem de terno caro está no corredor e sorri. “Boa noite. A gente não se conhece, meu nome é Brandt.” Ele aponta para a bolsa preta. “Acho que ela é minha.”",
         [["Jemand klopft an die Tür.", "Alguém bate na porta.", "jemand|klopfen|an|der|Tür"],
          ["Ein Mann", "Um homem", "ein|Mann"],
          ["in einem teuren Anzug", "de terno caro", "in|ein|teuer"],
          ["steht im Gang", "está no corredor", "stehen|in|der"],
          ["und lächelt.", "e sorri.", "und"],
          ["„Guten Abend.", "“Boa noite.", "gut|Abend"],
          ["Wir kennen uns nicht,", "A gente não se conhece,", "wir|kennen|nicht"],
          ["mein Name ist Brandt.“", "meu nome é Brandt.”", "mein|Name|sein"],
          ["Er zeigt", "Ele aponta", "er|zeigen"],
          ["auf die schwarze Tasche.", "para a bolsa preta.", "auf|der|schwarz|Tasche"],
          ["„Ich glaube,", "“Acho", "ich|glauben"],
          ["die gehört mir.“", "que ela é minha.”", "der|gehören|ich"]]],
        ["Er gibt dir eine Visitenkarte: „Brandt, Sicherheit, Nordwerk GmbH“. „Eine frühere Mitarbeiterin hat Dokumente aus unserer Firma gestohlen. Sie sind in diesem Umschlag. Ich bezahle Ihnen gern zweihundert Euro für Ihre Hilfe.“ Er spricht höflich, aber seine Augen sind kalt.",
         "Ele te dá um cartão de visita: “Brandt, Segurança, Nordwerk Ltda.”. “Uma ex-funcionária roubou documentos da nossa empresa. Eles estão neste envelope. Pago com prazer duzentos euros pela sua ajuda.” Ele fala com educação, mas os olhos dele são frios.",
         [["Er gibt dir", "Ele te dá", "er|geben|du"],
          ["eine Visitenkarte:", "um cartão de visita:", "ein"],
          ["„Brandt, Sicherheit, Nordwerk GmbH“.", "“Brandt, Segurança, Nordwerk Ltda.”.", "Sicherheit"],
          ["„Eine frühere Mitarbeiterin", "“Uma ex-funcionária", "ein"],
          ["hat Dokumente", "roubou documentos", "haben"],
          ["aus unserer Firma gestohlen.", "da nossa empresa.", "aus|unser|Firma"],
          ["Sie sind in diesem Umschlag.", "Eles estão neste envelope.", "sie|sein|in|dieser"],
          ["Ich bezahle Ihnen gern", "Pago com prazer", "ich|bezahlen|sie|gern"],
          ["zweihundert Euro", "duzentos euros", "Euro"],
          ["für Ihre Hilfe.“", "pela sua ajuda.”", "für|Hilfe"],
          ["Er spricht höflich,", "Ele fala com educação,", "er|sprechen"],
          ["aber seine Augen sind kalt.", "mas os olhos dele são frios.", "aber|sein|Auge|kalt"]]]
      ],
      escolhas: [
        { pt: "Aceitar o dinheiro e entregar a bolsa.", de: "Das Geld nehmen und ihm die Tasche geben.", ir: "c4b" },
        { pt: "Dizer que só a polícia vai receber a bolsa.", de: "Sagen, dass nur die Polizei die Tasche bekommt.", ir: "c4h" },
        { pt: "Você reconhece a voz do telefone: ele está mentindo. Ir procurar a mulher.", de: "Die Stimme erkennen und die Frau suchen.", ir: "c4v", req: "telefon" }
      ]
    },

    c4v: {
      cap: "A verdade de Katrin",
      p: [
        ["Du erzählst Katrin, was du weißt. Sie schweigt einen Moment. Dann sagt sie leise: „Ich habe acht Jahre bei Nordwerk gearbeitet. Seit Jahren zahlt die Firma keine Steuern. Am Montag spreche ich vor Gericht. Herr Brandt soll das verhindern.“",
         "Você conta a Katrin o que sabe. Ela fica calada por um momento. Então diz baixinho: “Eu trabalhei oito anos na Nordwerk. Há anos a empresa não paga impostos. Na segunda-feira, eu falo no tribunal. O senhor Brandt deve impedir isso.”",
         [["Du erzählst Katrin,", "Você conta a Katrin", "du|erzählen"],
          ["was du weißt.", "o que sabe.", "was|du|wissen"],
          ["Sie schweigt einen Moment.", "Ela fica calada por um momento.", "sie|schweigen|ein|Moment"],
          ["Dann sagt sie leise:", "Então ela diz baixinho:", "dann|sagen|sie|leise"],
          ["„Ich habe acht Jahre", "“Eu trabalhei oito anos", "ich|haben|acht|Jahr"],
          ["bei Nordwerk gearbeitet.", "na Nordwerk.", "bei|arbeiten"],
          ["Seit Jahren zahlt die Firma", "Há anos a empresa não paga", "seit|Jahr|zahlen|der|Firma"],
          ["keine Steuern.", "impostos.", "kein|Steuer"],
          ["Am Montag", "Na segunda-feira,", "an|der|Montag"],
          ["spreche ich vor Gericht.", "eu falo no tribunal.", "sprechen|ich|vor|Gericht"],
          ["Herr Brandt soll", "O senhor Brandt deve", "Herr|sollen"],
          ["das verhindern.“", "impedir isso.”", "das"]]],
        ["In diesem Moment öffnet sich die Tür. Herr Brandt kommt herein, setzt sich an einen Tisch und bestellt einen Kaffee. Er sieht euch nicht an. Katrin sagt sehr leise: „Er wartet, bis ich schlafe. Was machen wir jetzt?“",
         "Nesse momento, a porta se abre. O senhor Brandt entra, senta-se a uma mesa e pede um café. Ele não olha para vocês. Katrin diz bem baixinho: “Ele está esperando eu dormir. O que a gente faz agora?”",
         [["In diesem Moment", "Nesse momento,", "in|dieser|Moment"],
          ["öffnet sich die Tür.", "a porta se abre.", "öffnen|sich|der|Tür"],
          ["Herr Brandt kommt herein,", "O senhor Brandt entra,", "Herr|kommen"],
          ["setzt sich", "senta-se", "setzen|sich"],
          ["an einen Tisch", "a uma mesa", "an|ein|Tisch"],
          ["und bestellt einen Kaffee.", "e pede um café.", "und|bestellen|ein|Kaffee"],
          ["Er sieht euch nicht an.", "Ele não olha para vocês.", "er|sehen|ihr|nicht"],
          ["Katrin sagt sehr leise:", "Katrin diz bem baixinho:", "sagen|sehr|leise"],
          ["„Er wartet,", "“Ele está esperando", "er|warten"],
          ["bis ich schlafe.", "eu dormir.", "bis|ich|schlafen"],
          ["Was machen wir jetzt?“", "O que a gente faz agora?”", "was|machen|wir|jetzt"]]]
      ],
      escolhas: [
        { pt: "Ir com Katrin até o condutor, o senhor Ölmez.", de: "Mit Katrin zum Schaffner gehen.", ir: "c5s" },
        { pt: "Guardar a bolsa com você até Hamburgo, longe de Brandt.", de: "Die Tasche bis Hamburg bei sich behalten.", ir: "c5h" }
      ]
    },

    c4h: {
      cap: "A noite longa",
      p: [
        ["Du gehst zurück in dein Abteil und schließt die Tür ab. Die Tasche liegt neben dir auf dem Bett. Du schläfst nicht. Um drei Uhr bewegt sich die Türklinke langsam nach unten. Jemand versucht, die Tür zu öffnen.",
         "Você volta para a sua cabine e tranca a porta. A bolsa está ao seu lado, na cama. Você não dorme. Às três horas, a maçaneta se move devagar para baixo. Alguém tenta abrir a porta.",
         [["Du gehst zurück", "Você volta", "du|gehen|zurück"],
          ["in dein Abteil", "para a sua cabine", "in|dein"],
          ["und schließt die Tür ab.", "e tranca a porta.", "und|schließen|der|Tür"],
          ["Die Tasche liegt", "A bolsa está", "der|Tasche|liegen"],
          ["neben dir auf dem Bett.", "ao seu lado, na cama.", "neben|du|auf|der|Bett"],
          ["Du schläfst nicht.", "Você não dorme.", "du|schlafen|nicht"],
          ["Um drei Uhr", "Às três horas,", "um|drei|Uhr"],
          ["bewegt sich die Türklinke", "a maçaneta se move", "sich"],
          ["langsam nach unten.", "devagar para baixo.", "langsam|nach|unten"],
          ["Jemand versucht,", "Alguém tenta", "jemand|versuchen"],
          ["die Tür zu öffnen.", "abrir a porta.", "der|Tür|zu|öffnen"]]],
        ["Dann ist es wieder still. In der Tasche klingelt das Handy. Du antwortest nicht. Der Zug wird langsamer und hält an einem kleinen Bahnhof. Draußen ist alles dunkel, nur eine Lampe brennt. Die Türen gehen auf.",
         "Depois, tudo fica em silêncio de novo. Na bolsa, o celular toca. Você não atende. O trem fica mais lento e para numa estação pequena. Lá fora está tudo escuro, só uma lâmpada está acesa. As portas se abrem.",
         [["Dann ist es wieder still.", "Depois, tudo fica em silêncio de novo.", "dann|sein|es|wieder"],
          ["In der Tasche", "Na bolsa,", "in|der|Tasche"],
          ["klingelt das Handy.", "o celular toca.", "klingeln|der|Handy"],
          ["Du antwortest nicht.", "Você não atende.", "du|antworten|nicht"],
          ["Der Zug wird langsamer", "O trem fica mais lento", "der|Zug|werden|langsam"],
          ["und hält", "e para", "und|halten"],
          ["an einem kleinen Bahnhof.", "numa estação pequena.", "an|ein|klein|Bahnhof"],
          ["Draußen ist alles dunkel,", "Lá fora está tudo escuro,", "draußen|sein|alles|dunkel"],
          ["nur eine Lampe brennt.", "só uma lâmpada está acesa.", "nur|ein|Lampe|brennen"],
          ["Die Türen gehen auf.", "As portas se abrem.", "der|Tür|gehen"]]]
      ],
      escolhas: [
        { pt: "Descer aqui com a bolsa, antes que seja tarde.", de: "Mit der Tasche hier aussteigen.", ir: "f_estacao" },
        { pt: "Ficar na cabine até Hamburgo.", de: "Bis Hamburg im Abteil bleiben.", ir: "c5h" }
      ]
    },

    c4b: {
      cap: "Duzentos euros",
      p: [
        ["Herr Brandt nimmt die Tasche und gibt dir vier Scheine zu fünfzig Euro. „Sie haben das Richtige getan“, sagt er und geht. Zehn Minuten später klopft es laut. Vor der Tür steht eine Frau im grauen Mantel. Ihr Gesicht ist ganz weiß.",
         "O senhor Brandt pega a bolsa e te dá quatro notas de cinquenta euros. “Você fez a coisa certa”, diz ele, e vai embora. Dez minutos depois, batem forte na porta. Na porta está uma mulher de casaco cinza. O rosto dela está todo branco.",
         [["Herr Brandt nimmt die Tasche", "O senhor Brandt pega a bolsa", "Herr|nehmen|der|Tasche"],
          ["und gibt dir", "e te dá", "und|geben|du"],
          ["vier Scheine", "quatro notas", "vier"],
          ["zu fünfzig Euro.", "de cinquenta euros.", "zu|Euro"],
          ["„Sie haben das Richtige getan“,", "“Você fez a coisa certa”,", "sie|haben|der|richtig|tun"],
          ["sagt er und geht.", "diz ele, e vai embora.", "sagen|er|und|gehen"],
          ["Zehn Minuten später", "Dez minutos depois,", "zehn|Minute|später"],
          ["klopft es laut.", "batem forte na porta.", "klopfen|es|laut"],
          ["Vor der Tür", "Na porta", "vor|der|Tür"],
          ["steht eine Frau", "está uma mulher", "stehen|ein|Frau"],
          ["im grauen Mantel.", "de casaco cinza.", "in|der|grau|Mantel"],
          ["Ihr Gesicht", "O rosto dela", "Gesicht"],
          ["ist ganz weiß.", "está todo branco.", "sein|ganz|weiß"]]],
        ["„Wo ist meine Tasche?“, fragt sie. Du zeigst ihr das Geld. Sie schließt die Augen. „Ich bin Katrin Vogel. Im Umschlag sind Beweise gegen Nordwerk. Am Montag bin ich Zeugin vor Gericht. Ohne die Papiere glaubt mir niemand.“",
         "“Onde está a minha bolsa?”, pergunta ela. Você mostra o dinheiro a ela. Ela fecha os olhos. “Eu sou Katrin Vogel. No envelope estão as provas contra a Nordwerk. Na segunda-feira, sou testemunha no tribunal. Sem os papéis, ninguém acredita em mim.”",
         [["„Wo ist meine Tasche?“,", "“Onde está a minha bolsa?”,", "wo|sein|mein|Tasche"],
          ["fragt sie.", "pergunta ela.", "fragen|sie"],
          ["Du zeigst ihr das Geld.", "Você mostra o dinheiro a ela.", "du|zeigen|sie|der|Geld"],
          ["Sie schließt die Augen.", "Ela fecha os olhos.", "sie|schließen|der|Auge"],
          ["„Ich bin Katrin Vogel.", "“Eu sou Katrin Vogel.", "ich|sein"],
          ["Im Umschlag", "No envelope", "in|der"],
          ["sind Beweise gegen Nordwerk.", "estão as provas contra a Nordwerk.", "sein|Beweis|gegen"],
          ["Am Montag", "Na segunda-feira,", "an|der|Montag"],
          ["bin ich Zeugin vor Gericht.", "sou testemunha no tribunal.", "sein|ich|vor|Gericht"],
          ["Ohne die Papiere", "Sem os papéis,", "ohne|der|Papier"],
          ["glaubt mir niemand.“", "ninguém acredita em mim.”", "glauben|ich|niemand"]]]
      ],
      escolhas: [
        { pt: "Chamar o condutor e ajudar Katrin.", de: "Den Schaffner holen und Katrin helfen.", ir: "c5s" },
        { pt: "Não se meter. Em Hamburgo, contar tudo à polícia.", de: "Nichts tun und in Hamburg zur Polizei gehen.", ir: "f_polizei" }
      ]
    },

    c5s: {
      cap: "O condutor",
      p: [
        ["Herr Ölmez sitzt in seinem kleinen Dienstabteil, zwischen Fahrkarten und Formularen. Er ist müde und hat viel zu tun. Aber er hört zu, ohne euch zu unterbrechen. Katrin zeigt ihm ihren Ausweis und einen Brief vom Gericht.",
         "O senhor Ölmez está sentado na sua pequena cabine de serviço, entre passagens e formulários. Ele está cansado e tem muito trabalho. Mas ele escuta sem interromper vocês. Katrin mostra a ele a identidade dela e uma carta do tribunal.",
         [["Herr Ölmez sitzt", "O senhor Ölmez está sentado", "Herr|sitzen"],
          ["in seinem kleinen Dienstabteil,", "na sua pequena cabine de serviço,", "in|sein|klein"],
          ["zwischen Fahrkarten und Formularen.", "entre passagens e formulários.", "zwischen|Fahrkarte|und"],
          ["Er ist müde", "Ele está cansado", "er|sein|müde"],
          ["und hat viel zu tun.", "e tem muito trabalho.", "und|haben|viel|zu|tun"],
          ["Aber er hört zu,", "Mas ele escuta", "aber|er|hören"],
          ["ohne euch zu unterbrechen.", "sem interromper vocês.", "ohne|ihr|zu"],
          ["Katrin zeigt ihm", "Katrin mostra a ele", "zeigen|er"],
          ["ihren Ausweis", "a identidade dela", ""],
          ["und einen Brief vom Gericht.", "e uma carta do tribunal.", "und|ein|Brief|von|der|Gericht"]]],
        ["Dann nimmt er sein Telefon. „Ich rufe die Bundespolizei an. Beim nächsten großen Halt steigen zwei Polizisten ein. Bis dahin bleiben Sie hier bei mir.“ Durch das kleine Fenster siehst du Herrn Brandt im Gang. Er lächelt nicht mehr.",
         "Então ele pega o telefone. “Vou ligar para a polícia federal. Na próxima parada grande, entram dois policiais. Até lá, vocês ficam aqui comigo.” Pela janelinha, você vê o senhor Brandt no corredor. Ele não sorri mais.",
         [["Dann nimmt er sein Telefon.", "Então ele pega o telefone.", "dann|nehmen|er|sein|Telefon"],
          ["„Ich rufe die Bundespolizei an.", "“Vou ligar para a polícia federal.", "ich|anrufen|der"],
          ["Beim nächsten großen Halt", "Na próxima parada grande,", "bei|der|nächste|groß"],
          ["steigen zwei Polizisten ein.", "entram dois policiais.", "einsteigen|zwei"],
          ["Bis dahin", "Até lá,", "bis"],
          ["bleiben Sie hier bei mir.“", "vocês ficam aqui comigo.”", "bleiben|sie|hier|bei|ich"],
          ["Durch das kleine Fenster", "Pela janelinha,", "durch|der|klein|Fenster"],
          ["siehst du Herrn Brandt", "você vê o senhor Brandt", "sehen|du|Herr"],
          ["im Gang.", "no corredor.", "in|der"],
          ["Er lächelt nicht mehr.", "Ele não sorri mais.", "er|nicht|mehr"]]]
      ],
      escolhas: [
        { pt: "Ficar com Katrin e o senhor Ölmez.", de: "Bei Katrin und Herrn Ölmez bleiben.", ir: "f_bom" },
        { pt: "Sair dali e descer na próxima parada.", de: "Weggehen und beim nächsten Halt aussteigen.", ir: "f_estacao" }
      ]
    },

    c5h: {
      cap: "Hamburgo",
      p: [
        ["Um sieben Uhr hält der Zug in Hamburg. Du hast die ganze Nacht nicht geschlafen. Auf dem Bahnsteig stehen zwei Polizisten. Links wartet die Frau im grauen Mantel. Rechts steht ein Mann in einem teuren Anzug. Beide sehen dich an.",
         "Às sete horas, o trem para em Hamburgo. Você passou a noite inteira sem dormir. Na plataforma estão dois policiais. À esquerda, espera a mulher de casaco cinza. À direita, está um homem de terno caro. Os dois olham para você.",
         [["Um sieben Uhr", "Às sete horas,", "um|sieben|Uhr"],
          ["hält der Zug", "o trem para", "halten|der|Zug"],
          ["in Hamburg.", "em Hamburgo.", "in"],
          ["Du hast die ganze Nacht", "Você passou a noite inteira", "du|haben|der|ganz|Nacht"],
          ["nicht geschlafen.", "sem dormir.", "nicht|schlafen"],
          ["Auf dem Bahnsteig", "Na plataforma", "auf|der"],
          ["stehen zwei Polizisten.", "estão dois policiais.", "stehen|zwei"],
          ["Links wartet die Frau", "À esquerda, espera a mulher", "links|warten|der|Frau"],
          ["im grauen Mantel.", "de casaco cinza.", "in|der|grau|Mantel"],
          ["Rechts steht ein Mann", "À direita, está um homem", "rechts|stehen|ein|Mann"],
          ["in einem teuren Anzug.", "de terno caro.", "in|ein|teuer"],
          ["Beide sehen dich an.", "Os dois olham para você.", "sehen|du"]]],
        ["Die Tasche ist schwer in deiner Hand, obwohl sie fast leer ist. Der Mann hebt kurz die Hand, die Frau bewegt sich nicht. Du musst dich jetzt entscheiden.",
         "A bolsa pesa na sua mão, embora esteja quase vazia. O homem levanta rápido a mão, a mulher não se mexe. Você precisa decidir agora.",
         [["Die Tasche ist schwer", "A bolsa pesa", "der|Tasche|sein|schwer"],
          ["in deiner Hand,", "na sua mão,", "in|dein|Hand"],
          ["obwohl sie fast leer ist.", "embora esteja quase vazia.", "obwohl|sie|fast|leer|sein"],
          ["Der Mann hebt kurz", "O homem levanta rápido", "der|Mann|heben|kurz"],
          ["die Hand,", "a mão,", "der|Hand"],
          ["die Frau bewegt sich nicht.", "a mulher não se mexe.", "der|Frau|sich|nicht"],
          ["Du musst dich jetzt entscheiden.", "Você precisa decidir agora.", "du|müssen|jetzt|entscheiden"]]]
      ],
      escolhas: [
        { pt: "Ir até os policiais e contar tudo.", de: "Zu den Polizisten gehen und alles erzählen.", ir: "f_polizei" },
        { pt: "Entregar a bolsa à mulher de casaco cinza.", de: "Der Frau im grauen Mantel die Tasche geben.", ir: "f_twist" }
      ]
    },

    f_bom: {
      cap: "A testemunha",
      p: [
        ["Eine Stunde später steigen zwei Polizisten ein. Sie sprechen lange mit Herrn Brandt im Gang. Er bleibt höflich, aber am nächsten Bahnhof muss er mit ihnen aussteigen. Die schwarze Tasche ist wieder bei Katrin. Herr Ölmez bringt euch zwei Tassen Kaffee.",
         "Uma hora depois, entram dois policiais. Eles conversam muito tempo com o senhor Brandt no corredor. Ele continua educado, mas na próxima estação precisa descer com eles. A bolsa preta está de novo com Katrin. O senhor Ölmez traz para vocês duas xícaras de café.",
         [["Eine Stunde später", "Uma hora depois,", "ein|Stunde|später"],
          ["steigen zwei Polizisten ein.", "entram dois policiais.", "einsteigen|zwei"],
          ["Sie sprechen lange", "Eles conversam muito tempo", "sie|sprechen|lang"],
          ["mit Herrn Brandt im Gang.", "com o senhor Brandt no corredor.", "mit|Herr|in|der"],
          ["Er bleibt höflich,", "Ele continua educado,", "er|bleiben"],
          ["aber am nächsten Bahnhof", "mas na próxima estação", "aber|an|der|nächste|Bahnhof"],
          ["muss er mit ihnen aussteigen.", "precisa descer com eles.", "müssen|er|mit|sie|aussteigen"],
          ["Die schwarze Tasche", "A bolsa preta", "der|schwarz|Tasche"],
          ["ist wieder bei Katrin.", "está de novo com Katrin.", "sein|wieder|bei"],
          ["Herr Ölmez bringt euch", "O senhor Ölmez traz para vocês", "Herr|bringen|ihr"],
          ["zwei Tassen Kaffee.", "duas xícaras de café.", "zwei|Tasse|Kaffee"]]],
        ["In Hamburg scheint die Sonne. Katrin hält die Tasche mit beiden Händen fest. „Am Montag spreche ich vor Gericht“, sagt sie. „Und ich weiß jetzt: Man findet auch im Nachtzug Menschen, denen man vertrauen kann. Danke.“",
         "Em Hamburgo, faz sol. Katrin segura a bolsa firme com as duas mãos. “Na segunda-feira, eu falo no tribunal”, diz ela. “E agora eu sei: até num trem noturno a gente encontra pessoas em quem dá para confiar. Obrigada.”",
         [["In Hamburg", "Em Hamburgo,", "in"],
          ["scheint die Sonne.", "faz sol.", "scheinen|der|Sonne"],
          ["Katrin hält die Tasche", "Katrin segura a bolsa", "halten|der|Tasche"],
          ["mit beiden Händen fest.", "firme com as duas mãos.", "mit|Hand"],
          ["„Am Montag", "“Na segunda-feira,", "an|der|Montag"],
          ["spreche ich vor Gericht“,", "eu falo no tribunal”,", "sprechen|ich|vor|Gericht"],
          ["sagt sie.", "diz ela.", "sagen|sie"],
          ["„Und ich weiß jetzt:", "“E agora eu sei:", "und|ich|wissen|jetzt"],
          ["Man findet auch im Nachtzug", "até num trem noturno a gente encontra", "man|finden|auch|in|der"],
          ["Menschen,", "pessoas", "Mensch"],
          ["denen man vertrauen kann.", "em quem dá para confiar.", "man|vertrauen|können"],
          ["Danke.“", "Obrigada.”", "danke"]]]
      ],
      fim: { tipo: "bom", titulo: "A testemunha chega a Hamburgo" }
    },

    f_polizei: {
      cap: "Delegacia",
      p: [
        ["In Hamburg gehst du direkt zur Polizei. Du gibst ihnen alles, was du hast. Dann erzählst du vom Handy, vom Umschlag und von den zwei Fremden im Zug. Eine Polizistin schreibt alles auf. Das dauert zwei Stunden.",
         "Em Hamburgo, você vai direto à polícia. Você entrega a eles tudo o que tem. Depois, você fala do celular, do envelope e dos dois desconhecidos no trem. Uma policial anota tudo. Isso leva duas horas.",
         [["In Hamburg", "Em Hamburgo,", "in"],
          ["gehst du direkt", "você vai direto", "gehen|du"],
          ["zur Polizei.", "à polícia.", "zu|der|Polizei"],
          ["Du gibst ihnen alles,", "Você entrega a eles tudo", "du|geben|sie|alles"],
          ["was du hast.", "o que tem.", "was|du|haben"],
          ["Dann erzählst du", "Depois, você fala", "dann|erzählen|du"],
          ["vom Handy,", "do celular,", "von|der|Handy"],
          ["vom Umschlag", "do envelope", "von|der"],
          ["und von den zwei Fremden", "e dos dois desconhecidos", "und|von|der|zwei|fremd"],
          ["im Zug.", "no trem.", "in|der|Zug"],
          ["Eine Polizistin schreibt alles auf.", "Uma policial anota tudo.", "ein|schreiben|alles"],
          ["Das dauert zwei Stunden.", "Isso leva duas horas.", "das|zwei|Stunde"]]],
        ["Am Ende gibt sie dir eine Nummer für Fragen. „Wir melden uns“, sagt sie. Draußen scheint die Sonne. Die Frau im grauen Mantel und der Mann im Anzug sind weg. Du wirst nie erfahren, wie die Geschichte endet.",
         "No fim, ela te dá um número para dúvidas. “Nós entramos em contato”, diz ela. Lá fora, faz sol. A mulher de casaco cinza e o homem de terno sumiram. Você nunca vai saber como a história termina.",
         [["Am Ende", "No fim,", "an|der|Ende"],
          ["gibt sie dir", "ela te dá", "geben|sie|du"],
          ["eine Nummer für Fragen.", "um número para dúvidas.", "ein|Nummer|für|Frage"],
          ["„Wir melden uns“,", "“Nós entramos em contato”,", "wir"],
          ["sagt sie.", "diz ela.", "sagen|sie"],
          ["Draußen scheint die Sonne.", "Lá fora, faz sol.", "draußen|scheinen|der|Sonne"],
          ["Die Frau im grauen Mantel", "A mulher de casaco cinza", "der|Frau|in|der|grau|Mantel"],
          ["und der Mann im Anzug", "e o homem de terno", "und|der|Mann|in|der"],
          ["sind weg.", "sumiram.", "sein|weg"],
          ["Du wirst nie erfahren,", "Você nunca vai saber", "du|werden|nie"],
          ["wie die Geschichte endet.", "como a história termina.", "wie|der|Geschichte"]]]
      ],
      fim: { tipo: "neutro", titulo: "Nas mãos da polícia" }
    },

    f_estacao: {
      cap: "Estação sem nome",
      p: [
        ["Du steigst schnell aus. Hinter dir schließen sich die Türen, und der Zug fährt ohne dich weiter. Der Bahnhof ist leer und kalt. An der Wand hängt ein altes Schild, aber den Namen kannst du nicht lesen.",
         "Você desce depressa. Atrás de você, as portas se fecham, e o trem segue sem você. A estação está vazia e fria. Na parede há uma placa velha, mas o nome você não consegue ler.",
         [["Du steigst schnell aus.", "Você desce depressa.", "du|aussteigen|schnell"],
          ["Hinter dir", "Atrás de você,", "hinter|du"],
          ["schließen sich die Türen,", "as portas se fecham,", "schließen|sich|der|Tür"],
          ["und der Zug fährt", "e o trem segue", "und|der|Zug|fahren"],
          ["ohne dich weiter.", "sem você.", "ohne|du"],
          ["Der Bahnhof ist", "A estação está", "der|Bahnhof|sein"],
          ["leer und kalt.", "vazia e fria.", "leer|und|kalt"],
          ["An der Wand", "Na parede", "an|der|Wand"],
          ["hängt ein altes Schild,", "há uma placa velha,", "ein|alt"],
          ["aber den Namen", "mas o nome", "aber|der|Name"],
          ["kannst du nicht lesen.", "você não consegue ler.", "können|du|nicht|lesen"]]],
        ["Dein Koffer fährt nach Hamburg, dein Handy hat nur noch fünf Prozent. Du setzt dich auf eine kalte Bank und wartest auf den ersten Zug am Morgen. Du bist in Sicherheit, glaubst du. Aber du weißt nicht mehr, wem du glauben sollst.",
         "Sua mala vai para Hamburgo, seu celular tem só cinco por cento. Você se senta num banco frio e espera o primeiro trem da manhã. Você está em segurança, você acha. Mas você já não sabe em quem acreditar.",
         [["Dein Koffer fährt", "Sua mala vai", "dein|Koffer|fahren"],
          ["nach Hamburg,", "para Hamburgo,", "nach"],
          ["dein Handy hat", "seu celular tem", "dein|Handy|haben"],
          ["nur noch fünf Prozent.", "só cinco por cento.", "nur|noch|fünf|Prozent"],
          ["Du setzt dich", "Você se senta", "du|setzen"],
          ["auf eine kalte Bank", "num banco frio", "auf|ein|kalt|Bank"],
          ["und wartest", "e espera", "und|warten"],
          ["auf den ersten Zug", "o primeiro trem", "auf|der|erste|Zug"],
          ["am Morgen.", "da manhã.", "an|der|Morgen"],
          ["Du bist in Sicherheit,", "Você está em segurança,", "du|sein|in|Sicherheit"],
          ["glaubst du.", "você acha.", "glauben|du"],
          ["Aber du weißt nicht mehr,", "Mas você já não sabe", "aber|du|wissen|nicht|mehr"],
          ["wem du glauben sollst.", "em quem acreditar.", "wer|du|glauben|sollen"]]]
      ],
      fim: { tipo: "ruim", titulo: "Uma estação sem nome" }
    },

    f_twist: {
      cap: "A troca",
      p: [
        ["Die Frau im grauen Mantel nimmt die Tasche und sieht kurz hinein. Dann lächelt sie zum ersten Mal. Sie gibt dir eine andere schwarze Tasche: deine eigene. Nichts fehlt, nicht einmal dein Buch. „Entschuldigung“, sagt sie. „Ich habe die Taschen in Wien getauscht. Absichtlich.“",
         "A mulher de casaco cinza pega a bolsa e olha rápido dentro. Então ela sorri pela primeira vez. Ela te dá outra bolsa preta: a sua. Não falta nada, nem mesmo o seu livro. “Desculpe”, diz ela. “Eu troquei as bolsas em Viena. De propósito.”",
         [["Die Frau im grauen Mantel", "A mulher de casaco cinza", "der|Frau|in|der|grau|Mantel"],
          ["nimmt die Tasche", "pega a bolsa", "nehmen|der|Tasche"],
          ["und sieht kurz hinein.", "e olha rápido dentro.", "und|sehen|kurz"],
          ["Dann lächelt sie", "Então ela sorri", "dann|sie"],
          ["zum ersten Mal.", "pela primeira vez.", "zu|der|erste|mal"],
          ["Sie gibt dir", "Ela te dá", "sie|geben|du"],
          ["eine andere schwarze Tasche:", "outra bolsa preta:", "ein|ander|schwarz|Tasche"],
          ["deine eigene.", "a sua.", "dein|eigen"],
          ["Nichts fehlt,", "Não falta nada,", "nichts|fehlen"],
          ["nicht einmal dein Buch.", "nem mesmo o seu livro.", "nicht|dein|Buch"],
          ["„Entschuldigung“, sagt sie.", "“Desculpe”, diz ela.", "Entschuldigung|sagen|sie"],
          ["„Ich habe die Taschen", "“Eu troquei as bolsas", "ich|haben|der|Tasche"],
          ["in Wien getauscht.", "em Viena.", "in|tauschen"],
          ["Absichtlich.“", "De propósito.”", ""]]],
        ["„Ein Mann beobachtet mich seit Wien. Ich habe Sie gebraucht.“ Dann geht sie schnell weg, und nach einer Minute siehst du sie nicht mehr. Du hältst deine Tasche und verstehst langsam: Du hast etwas Wichtiges getragen, und niemand hat dich gefragt.",
         "“Um homem me vigia desde Viena. Eu precisei de você.” Então ela se afasta rápido, e depois de um minuto você não a vê mais. Você segura a sua bolsa e entende aos poucos: você carregou algo importante, e ninguém te perguntou nada.",
         [["„Ein Mann beobachtet mich", "“Um homem me vigia", "ein|Mann|beobachten|ich"],
          ["seit Wien.", "desde Viena.", "seit"],
          ["Ich habe Sie gebraucht.“", "Eu precisei de você.”", "ich|haben|sie|brauchen"],
          ["Dann geht sie schnell weg,", "Então ela se afasta rápido,", "dann|gehen|sie|schnell|weg"],
          ["und nach einer Minute", "e depois de um minuto", "und|nach|ein|Minute"],
          ["siehst du sie nicht mehr.", "você não a vê mais.", "sehen|du|sie|nicht|mehr"],
          ["Du hältst deine Tasche", "Você segura a sua bolsa", "du|halten|dein|Tasche"],
          ["und verstehst langsam:", "e entende aos poucos:", "und|verstehen|langsam"],
          ["Du hast etwas Wichtiges getragen,", "você carregou algo importante,", "du|haben|etwas|wichtig|tragen"],
          ["und niemand hat dich gefragt.", "e ninguém te perguntou nada.", "und|niemand|haben|du|fragen"]]]
      ],
      fim: { tipo: "neutro", titulo: "Você era o mensageiro" }
    }
  }
});
VB_HIST.de.push({
  id: "primeira-semana",
  titulo: "Primeira semana",
  genero: "Trabalho",
  nivel: "A2",
  desc: "Sua primeira semana numa empresa em Frankfurt. Na quarta-feira, você encontra um erro num relatório que já foi enviado ao cliente.",
  inicio: "c1",
  cenas: {
    c1: {
      cap: "Quarta-feira",
      p: [
        ["Es ist Mittwoch, dein dritter Tag in einer Firma in Frankfurt. Das Büro ist hell, und die Kollegen sind nett. Du liest den Bericht für einen wichtigen Kunden, Herrn Yilmaz. Frau Schneider, deine Chefin, hat ihn am Montag geschickt.",
         "É quarta-feira, seu terceiro dia em uma empresa em Frankfurt. O escritório é claro, e os colegas são simpáticos. Você lê o relatório de um cliente importante, o senhor Yilmaz. A senhora Schneider, sua chefe, o enviou na segunda-feira.", [
          ["Es ist Mittwoch,", "É quarta-feira,", "es|sein|Mittwoch"],
          ["dein dritter Tag", "seu terceiro dia", "dein|Tag"],
          ["in einer Firma", "em uma empresa", "in|ein|Firma"],
          ["in Frankfurt.", "em Frankfurt.", "in"],
          ["Das Büro ist hell,", "O escritório é claro,", "der|Büro|sein|hell"],
          ["und die Kollegen sind nett.", "e os colegas são simpáticos.", "und|der|Kollege|sein|nett"],
          ["Du liest den Bericht", "Você lê o relatório", "du|lesen|der"],
          ["für einen wichtigen Kunden,", "de um cliente importante,", "für|ein|wichtig|Kunde"],
          ["Herrn Yilmaz.", "o senhor Yilmaz.", "Herr"],
          ["Frau Schneider, deine Chefin,", "A senhora Schneider, sua chefe,", "Frau|dein"],
          ["hat ihn am Montag geschickt.", "o enviou na segunda-feira.", "haben|er|an|der|Montag|schicken"]
        ]],
        ["Auf Seite vier siehst du eine Zahl: 3.000 Euro. Aber im Vertrag stehen 30.000 Euro. Das ist ein großer Fehler! Wer hat die Tabelle gemacht? Unten steht ein Name: Markus Weber. Markus sitzt neben dir und trinkt Kaffee.",
         "Na página quatro você vê um número: 3.000 euros. Mas no contrato estão 30.000 euros. Isso é um grande erro! Quem fez a tabela? Embaixo há um nome: Markus Weber. Markus está sentado ao seu lado, tomando café.", [
          ["Auf Seite vier", "Na página quatro", "auf|Seite|vier"],
          ["siehst du eine Zahl:", "você vê um número:", "sehen|du|ein|Zahl"],
          ["3.000 Euro.", "3.000 euros.", "Euro"],
          ["Aber im Vertrag", "Mas no contrato", "aber|in|der|Vertrag"],
          ["stehen 30.000 Euro.", "estão 30.000 euros.", "stehen|Euro"],
          ["Das ist ein großer Fehler!", "Isso é um grande erro!", "das|sein|ein|groß|Fehler"],
          ["Wer hat die Tabelle gemacht?", "Quem fez a tabela?", "wer|haben|der|machen"],
          ["Unten steht ein Name:", "Embaixo há um nome:", "unten|stehen|ein|Name"],
          ["Markus Weber.", "Markus Weber.", ""],
          ["Markus sitzt neben dir", "Markus está sentado ao seu lado", "sitzen|neben|du"],
          ["und trinkt Kaffee.", "e toma café.", "und|trinken|Kaffee"]
        ]]
      ],
      escolhas: [
        { pt: "Primeiro mandar uma cópia do arquivo para você mesmo.", de: "Zuerst eine Kopie der Datei an dich selbst schicken.", ir: "c1b", marca: "kopie" },
        { pt: "Perguntar ao Markus sobre a tabela.", de: "Markus nach der Tabelle fragen.", ir: "c2" },
        { pt: "Ir direto até a senhora Schneider.", de: "Direkt zu Frau Schneider gehen.", ir: "c3" }
      ]
    },

    c1b: {
      cap: "A cópia",
      p: [
        ["Du denkst kurz nach. In einer neuen Firma muss man aufpassen. Du schickst die Datei an deine private E-Mail. Jetzt hast du eine Kopie mit dem Datum von Montag. Niemand kann sie mehr ändern.",
         "Você pensa um pouco. Em uma empresa nova, é preciso tomar cuidado. Você manda o arquivo para o seu e-mail pessoal. Agora você tem uma cópia com a data de segunda-feira. Ninguém pode mais alterá-la.", [
          ["Du denkst kurz nach.", "Você pensa um pouco.", "du|denken|kurz"],
          ["In einer neuen Firma", "Em uma empresa nova,", "in|ein|neu|Firma"],
          ["muss man aufpassen.", "é preciso tomar cuidado.", "müssen|man|aufpassen"],
          ["Du schickst die Datei", "Você manda o arquivo", "du|schicken|der"],
          ["an deine private E-Mail.", "para o seu e-mail pessoal.", "an|dein|E-Mail"],
          ["Jetzt hast du eine Kopie", "Agora você tem uma cópia", "jetzt|haben|du|ein"],
          ["mit dem Datum von Montag.", "com a data de segunda-feira.", "mit|der|Datum|von|Montag"],
          ["Niemand kann sie mehr ändern.", "Ninguém pode mais alterá-la.", "niemand|können|sie|mehr|ändern"]
        ]],
        ["Du schließt das Fenster. Da steht Markus hinter dir. „Alles okay?“, fragt er und lacht. Er arbeitet seit vier Monaten hier und hilft dir viel. Aber jetzt schaut er lange auf deinen Bildschirm.",
         "Você fecha a janela. E lá está o Markus, atrás de você. “Tudo bem?”, pergunta ele, rindo. Ele trabalha aqui há quatro meses e te ajuda muito. Mas agora ele olha demoradamente para a sua tela.", [
          ["Du schließt das Fenster.", "Você fecha a janela.", "du|schließen|der|Fenster"],
          ["Da steht Markus hinter dir.", "E lá está o Markus, atrás de você.", "da|stehen|hinter|du"],
          ["„Alles okay?“,", "“Tudo bem?”,", "alles|okay"],
          ["fragt er und lacht.", "pergunta ele, rindo.", "fragen|er|und|lachen"],
          ["Er arbeitet", "Ele trabalha", "er|arbeiten"],
          ["seit vier Monaten hier", "aqui há quatro meses", "seit|vier|Monat|hier"],
          ["und hilft dir viel.", "e te ajuda muito.", "und|helfen|du|viel"],
          ["Aber jetzt schaut er lange", "Mas agora ele olha demoradamente", "aber|jetzt|schauen|er|lang"],
          ["auf deinen Bildschirm.", "para a sua tela.", "auf|dein|Bildschirm"]
        ]]
      ],
      escolhas: [
        { pt: "Contar tudo ao Markus.", de: "Markus alles erzählen.", ir: "c2" },
        { pt: "Não dizer nada e ir até a senhora Schneider.", de: "Nichts sagen und zu Frau Schneider gehen.", ir: "c3" }
      ]
    },

    c2: {
      cap: "Markus",
      p: [
        ["Du zeigst Markus die Zahl. Er wird ganz blass. „Mist. Das ist meine Tabelle“, sagt er leise. „Mein Vertrag geht nur bis Dezember. Wenn Frau Schneider das sieht, bekomme ich keinen neuen.“",
         "Você mostra o número ao Markus. Ele fica bem pálido. “Droga. É a minha tabela”, diz ele baixinho. “Meu contrato só vai até dezembro. Se a senhora Schneider vir isso, não ganho um novo.”", [
          ["Du zeigst Markus die Zahl.", "Você mostra o número ao Markus.", "du|zeigen|der|Zahl"],
          ["Er wird ganz blass.", "Ele fica bem pálido.", "er|werden|ganz"],
          ["„Mist.", "“Droga.", ""],
          ["Das ist meine Tabelle“,", "É a minha tabela”,", "das|sein|mein"],
          ["sagt er leise.", "diz ele baixinho.", "sagen|er|leise"],
          ["„Mein Vertrag", "“Meu contrato", "mein|Vertrag"],
          ["geht nur bis Dezember.", "só vai até dezembro.", "gehen|nur|bis"],
          ["Wenn Frau Schneider das sieht,", "Se a senhora Schneider vir isso,", "wenn|Frau|das|sehen"],
          ["bekomme ich keinen neuen.“", "não ganho um novo.”", "bekommen|ich|kein|neu"]
        ]],
        ["Er sieht dich an. „Bitte sag nichts. Ich ändere die Zahl heute Abend und schicke ihm eine neue Datei. Herr Yilmaz merkt das nie. Du bist neu hier, du willst doch keinen Ärger, oder?“",
         "Ele olha para você. “Por favor, não diga nada. Eu mudo o número hoje à noite e mando um arquivo novo para ele. O senhor Yilmaz nunca vai perceber. Você acabou de chegar, não quer problemas, né?”", [
          ["Er sieht dich an.", "Ele olha para você.", "er|sehen|du"],
          ["„Bitte sag nichts.", "“Por favor, não diga nada.", "bitte|sagen|nichts"],
          ["Ich ändere die Zahl", "Eu mudo o número", "ich|ändern|der|Zahl"],
          ["heute Abend", "hoje à noite", "heute|Abend"],
          ["und schicke ihm", "e mando para ele", "und|schicken|er"],
          ["eine neue Datei.", "um arquivo novo.", "ein|neu"],
          ["Herr Yilmaz merkt das nie.", "O senhor Yilmaz nunca vai perceber.", "Herr|merken|das|nie"],
          ["Du bist neu hier,", "Você acabou de chegar,", "du|sein|neu|hier"],
          ["du willst doch keinen Ärger,", "não quer problemas,", "du|wollen|doch|kein|Ärger"],
          ["oder?“", "né?”", "oder"]
        ]]
      ],
      escolhas: [
        { pt: "Prometer ao Markus que não vai dizer nada.", de: "Markus versprechen, nichts zu sagen.", ir: "c4", marca: "versprochen" },
        { pt: "Recusar e propor que vocês dois falem com a senhora Schneider.", de: "Nein sagen und zusammen zu Frau Schneider gehen.", ir: "c5" }
      ]
    },

    c3: {
      cap: "A senhora Schneider",
      p: [
        ["Frau Schneider sitzt in ihrem Büro und telefoniert. Du wartest an der Tür. Dann zeigst du ihr die Seite. Sie liest lange und sagt nichts. Endlich fragt sie: „Wer hat diese Tabelle gemacht?“",
         "A senhora Schneider está sentada na sala dela, falando ao telefone. Você espera na porta. Depois você mostra a página a ela. Ela lê por muito tempo e não diz nada. Finalmente ela pergunta: “Quem fez esta tabela?”", [
          ["Frau Schneider sitzt", "A senhora Schneider está sentada", "Frau|sitzen"],
          ["in ihrem Büro", "na sala dela", "in|ihr|Büro"],
          ["und telefoniert.", "e fala ao telefone.", "und|telefonieren"],
          ["Du wartest an der Tür.", "Você espera na porta.", "du|warten|an|der|Tür"],
          ["Dann zeigst du ihr", "Depois você mostra a ela", "dann|zeigen|du|sie"],
          ["die Seite.", "a página.", "der|Seite"],
          ["Sie liest lange", "Ela lê por muito tempo", "sie|lesen|lang"],
          ["und sagt nichts.", "e não diz nada.", "und|sagen|nichts"],
          ["Endlich fragt sie:", "Finalmente ela pergunta:", "endlich|fragen|sie"],
          ["„Wer hat diese Tabelle gemacht?“", "“Quem fez esta tabela?”", "wer|haben|dieser|machen"]
        ]],
        ["Ihre Stimme ist ruhig, aber ihre Augen sind kalt. Sie hat den Bericht geschickt, mit ihrem Namen. Durch das Fenster siehst du Markus an seinem Tisch. Er lacht gerade mit einem Kollegen.",
         "A voz dela está calma, mas os olhos estão frios. Foi ela que enviou o relatório, com o nome dela. Pela janela você vê o Markus na mesa dele. Ele está rindo com um colega.", [
          ["Ihre Stimme ist ruhig,", "A voz dela está calma,", "ihr|Stimme|sein|ruhig"],
          ["aber ihre Augen sind kalt.", "mas os olhos dela estão frios.", "aber|ihr|Auge|sein|kalt"],
          ["Sie hat den Bericht geschickt,", "Foi ela que enviou o relatório,", "sie|haben|der|schicken"],
          ["mit ihrem Namen.", "com o nome dela.", "mit|ihr|Name"],
          ["Durch das Fenster", "Pela janela", "durch|der|Fenster"],
          ["siehst du Markus", "você vê o Markus", "sehen|du"],
          ["an seinem Tisch.", "na mesa dele.", "an|sein|Tisch"],
          ["Er lacht gerade", "Ele está rindo", "er|lachen|gerade"],
          ["mit einem Kollegen.", "com um colega.", "mit|ein|Kollege"]
        ]]
      ],
      escolhas: [
        { pt: "Dizer a verdade: foi o Markus.", de: "Die Wahrheit sagen: Es war Markus.", ir: "c6" },
        { pt: "Não dizer o nome e falar só da solução.", de: "Den Namen nicht nennen und nur über die Lösung sprechen.", ir: "c5" }
      ]
    },

    c4: {
      cap: "O telefonema",
      nota: "Você prometeu ao Markus não dizer nada.",
      p: [
        ["Am Donnerstag ist das Büro fast leer. Frau Schneider hat einen Termin, und Markus ist beim Mittagessen. Dann klingelt dein Telefon. Es ist Herr Yilmaz, und er klingt nicht glücklich.",
         "Na quinta-feira, o escritório está quase vazio. A senhora Schneider tem um compromisso, e o Markus está almoçando. Então o seu telefone toca. É o senhor Yilmaz, e ele não parece feliz.", [
          ["Am Donnerstag", "Na quinta-feira,", "an|der|Donnerstag"],
          ["ist das Büro fast leer.", "o escritório está quase vazio.", "sein|der|Büro|fast|leer"],
          ["Frau Schneider hat einen Termin,", "A senhora Schneider tem um compromisso,", "Frau|haben|ein|Termin"],
          ["und Markus ist beim Mittagessen.", "e o Markus está almoçando.", "und|sein|bei|der|Mittagessen"],
          ["Dann klingelt dein Telefon.", "Então o seu telefone toca.", "dann|klingeln|dein|Telefon"],
          ["Es ist Herr Yilmaz,", "É o senhor Yilmaz,", "es|sein|Herr"],
          ["und er klingt nicht glücklich.", "e ele não parece feliz.", "und|er|klingen|nicht|glücklich"]
        ]],
        ["„Gestern Abend ist eine neue Datei gekommen, ohne ein Wort. Jetzt steht auf Seite vier eine andere Zahl. Was ist da los? Ich will keine Geschichten. Ich will die Wahrheit.“",
         "“Ontem à noite chegou um arquivo novo, sem nenhuma palavra. Agora, na página quatro, aparece um número diferente. O que está acontecendo? Não quero histórias. Quero a verdade.”", [
          ["„Gestern Abend", "“Ontem à noite", "gestern|Abend"],
          ["ist eine neue Datei gekommen,", "chegou um arquivo novo,", "sein|ein|neu|kommen"],
          ["ohne ein Wort.", "sem nenhuma palavra.", "ohne|ein|Wort"],
          ["Jetzt steht auf Seite vier", "Agora, na página quatro, aparece", "jetzt|stehen|auf|Seite|vier"],
          ["eine andere Zahl.", "um número diferente.", "ein|ander|Zahl"],
          ["Was ist da los?", "O que está acontecendo?", "was|sein|da|los"],
          ["Ich will keine Geschichten.", "Não quero histórias.", "ich|wollen|kein|Geschichte"],
          ["Ich will die Wahrheit.“", "Quero a verdade.”", "ich|wollen|der|Wahrheit"]
        ]]
      ],
      escolhas: [
        { pt: "Contar a verdade ao senhor Yilmaz.", de: "Herrn Yilmaz die Wahrheit sagen.", ir: "c9" },
        { pt: "Dizer que está tudo certo, como prometeu ao Markus.", de: "Sagen, dass alles stimmt.", ir: "c8" }
      ]
    },

    c5: {
      cap: "Os três",
      p: [
        ["Am Donnerstag sitzt ihr zu dritt im Büro von Frau Schneider. Markus erklärt den Fehler selbst. Frau Schneider hört zu und nickt. „Gut, dass wir es wissen“, sagt sie. „Fehler sind normal. Lügen nicht.“",
         "Na quinta-feira, vocês três estão sentados na sala da senhora Schneider. O próprio Markus explica o erro. A senhora Schneider escuta e concorda com a cabeça. “Que bom que sabemos”, diz ela. “Erros são normais. Mentiras, não.”", [
          ["Am Donnerstag", "Na quinta-feira,", "an|der|Donnerstag"],
          ["sitzt ihr zu dritt", "vocês três estão sentados", "sitzen|ihr|zu"],
          ["im Büro von Frau Schneider.", "na sala da senhora Schneider.", "in|der|Büro|von|Frau"],
          ["Markus erklärt den Fehler selbst.", "O próprio Markus explica o erro.", "erklären|der|Fehler"],
          ["Frau Schneider hört zu", "A senhora Schneider escuta", "Frau|hören"],
          ["und nickt.", "e concorda com a cabeça.", "und"],
          ["„Gut, dass wir es wissen“,", "“Que bom que sabemos”,", "gut|dass|wir|es|wissen"],
          ["sagt sie.", "diz ela.", "sagen|sie"],
          ["„Fehler sind normal.", "“Erros são normais.", "Fehler|sein"],
          ["Lügen nicht.“", "Mentiras, não.”", "Lüge|nicht"]
        ]],
        ["Dann klingelt ihr Telefon. Es ist Herr Yilmaz. Er spricht sehr laut. Frau Schneider sieht dich an. „Sie haben den Fehler gefunden. Wollen Sie mit ihm sprechen?“ Markus schaut auf den Tisch.",
         "Então o telefone dela toca. É o senhor Yilmaz. Ele fala muito alto. A senhora Schneider olha para você. “Foi você quem achou o erro. Quer falar com ele?” Markus olha para a mesa.", [
          ["Dann klingelt ihr Telefon.", "Então o telefone dela toca.", "dann|klingeln|ihr|Telefon"],
          ["Es ist Herr Yilmaz.", "É o senhor Yilmaz.", "es|sein|Herr"],
          ["Er spricht sehr laut.", "Ele fala muito alto.", "er|sprechen|sehr|laut"],
          ["Frau Schneider sieht dich an.", "A senhora Schneider olha para você.", "Frau|sehen|du"],
          ["„Sie haben den Fehler gefunden.", "“Foi você quem achou o erro.", "sie|haben|der|Fehler|finden"],
          ["Wollen Sie mit ihm sprechen?“", "Quer falar com ele?”", "wollen|sie|mit|er|sprechen"],
          ["Markus schaut", "Markus olha", "schauen"],
          ["auf den Tisch.", "para a mesa.", "auf|der|Tisch"]
        ]]
      ],
      escolhas: [
        { pt: "Atender e explicar o erro com franqueza.", de: "Mit Herrn Yilmaz sprechen und den Fehler offen erklären.", ir: "c9" },
        { pt: "Deixar a senhora Schneider falar com ele.", de: "Frau Schneider sprechen lassen.", ir: "c7" }
      ]
    },

    c6: {
      cap: "Markus sabe",
      p: [
        ["Frau Schneider ruft Markus in ihr Büro. Die Tür bleibt zehn Minuten geschlossen. Als er herauskommt, sieht er dich nicht an. Am Donnerstag isst er allein. Auf deinem Tisch liegt kein Kaffee mehr von ihm.",
         "A senhora Schneider chama o Markus à sala dela. A porta fica dez minutos fechada. Quando ele sai, não olha para você. Na quinta-feira, ele almoça sozinho. Na sua mesa não há mais nenhum café dele.", [
          ["Frau Schneider ruft Markus", "A senhora Schneider chama o Markus", "Frau|rufen"],
          ["in ihr Büro.", "à sala dela.", "in|ihr|Büro"],
          ["Die Tür bleibt", "A porta fica", "der|Tür|bleiben"],
          ["zehn Minuten geschlossen.", "dez minutos fechada.", "zehn|Minute|geschlossen"],
          ["Als er herauskommt,", "Quando ele sai,", "als|er|kommen"],
          ["sieht er dich nicht an.", "ele não olha para você.", "sehen|er|du|nicht"],
          ["Am Donnerstag", "Na quinta-feira,", "an|der|Donnerstag"],
          ["isst er allein.", "ele almoça sozinho.", "essen|er|allein"],
          ["Auf deinem Tisch", "Na sua mesa", "auf|dein|Tisch"],
          ["liegt kein Kaffee mehr", "não há mais nenhum café", "liegen|kein|Kaffee|mehr"],
          ["von ihm.", "dele.", "von|er"]
        ]],
        ["Am Nachmittag kommt Frau Schneider zu dir. „Sie haben richtig gehandelt. Morgen kommt Herr Yilmaz. Bereiten Sie die Präsentation mit den richtigen Zahlen vor.“ Markus hört alles. Er sagt nichts.",
         "À tarde, a senhora Schneider vem até você. “Você agiu certo. Amanhã o senhor Yilmaz vem. Prepare a apresentação com os números certos.” Markus ouve tudo. Ele não diz nada.", [
          ["Am Nachmittag", "À tarde,", "an|der|Nachmittag"],
          ["kommt Frau Schneider zu dir.", "a senhora Schneider vem até você.", "kommen|Frau|zu|du"],
          ["„Sie haben richtig gehandelt.", "“Você agiu certo.", "sie|haben|richtig|handeln"],
          ["Morgen kommt Herr Yilmaz.", "Amanhã o senhor Yilmaz vem.", "morgen|kommen|Herr"],
          ["Bereiten Sie die Präsentation", "Prepare a apresentação", "vorbereiten|sie|der"],
          ["mit den richtigen Zahlen vor.“", "com os números certos.”", "mit|der|richtig|Zahl"],
          ["Markus hört alles.", "Markus ouve tudo.", "hören|alles"],
          ["Er sagt nichts.", "Ele não diz nada.", "er|sagen|nichts"]
        ]]
      ],
      escolhas: [
        { pt: "Convidar o Markus para apresentar com você.", de: "Markus einladen, mit dir zu präsentieren.", ir: "c7" },
        { pt: "Preparar e apresentar tudo sem ajuda.", de: "Alles allein vorbereiten und präsentieren.", ir: "f_freund" }
      ]
    },

    c7: {
      cap: "Sexta-feira",
      p: [
        ["Am Freitag um zehn Uhr sitzt Herr Yilmaz im großen Raum. Er ist freundlich, aber ernst. Du zeigst die richtigen Zahlen, Markus erklärt die Tabelle. Alles funktioniert. Am Ende lacht Herr Yilmaz zum ersten Mal.",
         "Na sexta, às dez horas, o senhor Yilmaz está sentado na sala grande. Ele é simpático, mas sério. Você mostra os números certos, o Markus explica a tabela. Tudo funciona. No fim, o senhor Yilmaz ri pela primeira vez.", [
          ["Am Freitag um zehn Uhr", "Na sexta, às dez horas,", "an|der|Freitag|um|zehn|Uhr"],
          ["sitzt Herr Yilmaz", "o senhor Yilmaz está sentado", "sitzen|Herr"],
          ["im großen Raum.", "na sala grande.", "in|der|groß|Raum"],
          ["Er ist freundlich, aber ernst.", "Ele é simpático, mas sério.", "er|sein|freundlich|aber|ernst"],
          ["Du zeigst die richtigen Zahlen,", "Você mostra os números certos,", "du|zeigen|der|richtig|Zahl"],
          ["Markus erklärt die Tabelle.", "o Markus explica a tabela.", "erklären|der"],
          ["Alles funktioniert.", "Tudo funciona.", "alles|funktionieren"],
          ["Am Ende lacht Herr Yilmaz", "No fim, o senhor Yilmaz ri", "an|der|Ende|lachen|Herr"],
          ["zum ersten Mal.", "pela primeira vez.", "zu|der|erste"]
        ]],
        ["Danach fragt er: „Wer hat den Fehler gefunden?“ Frau Schneider sieht dich an. Markus auch. Alle warten. Das ist deine Chance. Aber Markus hat die ganze Nacht an den Zahlen gearbeitet.",
         "Depois ele pergunta: “Quem encontrou o erro?” A senhora Schneider olha para você. O Markus também. Todos esperam. É a sua chance. Mas o Markus passou a noite inteira trabalhando nos números.", [
          ["Danach fragt er:", "Depois ele pergunta:", "danach|fragen|er"],
          ["„Wer hat den Fehler gefunden?“", "“Quem encontrou o erro?”", "wer|haben|der|Fehler|finden"],
          ["Frau Schneider sieht dich an.", "A senhora Schneider olha para você.", "Frau|sehen|du"],
          ["Markus auch.", "O Markus também.", "auch"],
          ["Alle warten.", "Todos esperam.", "alle|warten"],
          ["Das ist deine Chance.", "É a sua chance.", "das|sein|dein|Chance"],
          ["Aber Markus hat die ganze Nacht", "Mas o Markus passou a noite inteira", "aber|haben|der|ganz|Nacht"],
          ["an den Zahlen gearbeitet.", "trabalhando nos números.", "an|der|Zahl|arbeiten"]
        ]]
      ],
      escolhas: [
        { pt: "Dizer: “Foi a equipe toda, principalmente o Markus.”", de: "Sagen: „Das war das ganze Team, vor allem Markus.“", ir: "f_vertrauen" },
        { pt: "Dizer: “Fui eu que encontrei.”", de: "Sagen: „Ich habe ihn gefunden.“", ir: "f_freund" }
      ]
    },

    c8: {
      cap: "A mentira",
      p: [
        ["Am Freitag kommt Herr Yilmaz ins Büro. Er legt zwei Seiten auf den Tisch, eine alte und eine neue. „Gestern hat man mir gesagt, alles stimmt“, sagt er. „Wer war das?“ Frau Schneider wird rot.",
         "Na sexta-feira, o senhor Yilmaz vem ao escritório. Ele põe duas páginas sobre a mesa, uma antiga e uma nova. “Ontem me disseram que está tudo certo”, diz ele. “Quem foi?” A senhora Schneider fica vermelha.", [
          ["Am Freitag", "Na sexta-feira,", "an|der|Freitag"],
          ["kommt Herr Yilmaz ins Büro.", "o senhor Yilmaz vem ao escritório.", "kommen|Herr|in|der|Büro"],
          ["Er legt zwei Seiten", "Ele põe duas páginas", "er|legen|zwei|Seite"],
          ["auf den Tisch,", "sobre a mesa,", "auf|der|Tisch"],
          ["eine alte", "uma antiga", "ein|alt"],
          ["und eine neue.", "e uma nova.", "und|ein|neu"],
          ["„Gestern hat man mir gesagt,", "“Ontem me disseram", "gestern|haben|man|ich|sagen"],
          ["alles stimmt“,", "que está tudo certo”,", "alles|stimmen"],
          ["sagt er.", "diz ele.", "sagen|er"],
          ["„Wer war das?“", "“Quem foi?”", "wer|sein|das"],
          ["Frau Schneider wird rot.", "A senhora Schneider fica vermelha.", "Frau|werden|rot"]
        ]],
        ["Da steht Markus auf. Er zeigt auf dich. „Die neue Person im Team hat die Tabelle gemacht“, sagt er ruhig. „Ich habe nur die Fehler korrigiert.“ Alle sehen dich an.",
         "Então o Markus se levanta. Ele aponta para você. “A pessoa nova da equipe fez a tabela”, diz ele, calmo. “Eu só corrigi os erros.” Todos olham para você.", [
          ["Da steht Markus auf.", "Então o Markus se levanta.", "da|aufstehen"],
          ["Er zeigt auf dich.", "Ele aponta para você.", "er|zeigen|auf|du"],
          ["„Die neue Person im Team", "“A pessoa nova da equipe", "der|neu|Person|in|der"],
          ["hat die Tabelle gemacht“,", "fez a tabela”,", "haben|der|machen"],
          ["sagt er ruhig.", "diz ele, calmo.", "sagen|er|ruhig"],
          ["„Ich habe nur", "“Eu só", "ich|haben|nur"],
          ["die Fehler korrigiert.“", "corrigi os erros.”", "der|Fehler"],
          ["Alle sehen dich an.", "Todos olham para você.", "alle|sehen|du"]
        ]]
      ],
      escolhas: [
        { pt: "Mostrar a cópia de segunda-feira, com o nome do Markus.", de: "Die Kopie mit Markus' Namen zeigen.", ir: "f_freund", req: "kopie" },
        { pt: "Protestar: “Isso não é verdade!”", de: "Widersprechen: „Das stimmt nicht!“", ir: "f_schuld", sem: "kopie" },
        { pt: "Ficar em silêncio, como prometeu.", de: "Schweigen, wie du es versprochen hast.", ir: "f_schuld" }
      ]
    },

    c9: {
      cap: "A oferta",
      p: [
        ["Am Freitag nach dem Termin wartet Herr Yilmaz vor dem Ausgang auf dich. „Sie waren ehrlich zu mir. Das ist selten.“ Er gibt dir eine Karte. „Meine Firma sucht Leute wie Sie. Mehr Geld, mehr Verantwortung.“",
         "Na sexta-feira, depois da reunião, o senhor Yilmaz espera por você na saída. “Você falou a verdade comigo. Isso é raro.” Ele te dá um cartão. “Minha empresa procura pessoas como você. Mais dinheiro, mais responsabilidade.”", [
          ["Am Freitag", "Na sexta-feira,", "an|der|Freitag"],
          ["nach dem Termin", "depois da reunião,", "nach|der|Termin"],
          ["wartet Herr Yilmaz", "o senhor Yilmaz espera", "warten|Herr"],
          ["vor dem Ausgang auf dich.", "por você na saída.", "vor|der|Ausgang|auf|du"],
          ["„Sie waren ehrlich zu mir.", "“Você falou a verdade comigo.", "sie|sein|zu|ich"],
          ["Das ist selten.“", "Isso é raro.”", "das|sein|selten"],
          ["Er gibt dir eine Karte.", "Ele te dá um cartão.", "er|geben|du|ein|Karte"],
          ["„Meine Firma sucht", "“Minha empresa procura", "mein|Firma|suchen"],
          ["Leute wie Sie.", "pessoas como você.", "Leute|wie|sie"],
          ["Mehr Geld,", "Mais dinheiro,", "mehr|Geld"],
          ["mehr Verantwortung.“", "mais responsabilidade.”", "mehr|Verantwortung"]
        ]],
        ["Du denkst an Frau Schneider, an dein Team, an Markus. Es ist deine erste Woche. Aber die Firma von Herrn Yilmaz ist groß und bekannt. Er sagt: „Ich brauche Ihre Antwort bis Montag.“",
         "Você pensa na senhora Schneider, na sua equipe, no Markus. É a sua primeira semana. Mas a empresa do senhor Yilmaz é grande e conhecida. Ele diz: “Preciso da sua resposta até segunda.”", [
          ["Du denkst an Frau Schneider,", "Você pensa na senhora Schneider,", "du|denken|an|Frau"],
          ["an dein Team,", "na sua equipe,", "an|dein"],
          ["an Markus.", "no Markus.", "an"],
          ["Es ist deine erste Woche.", "É a sua primeira semana.", "es|sein|dein|erste|Woche"],
          ["Aber die Firma", "Mas a empresa", "aber|der|Firma"],
          ["von Herrn Yilmaz", "do senhor Yilmaz", "von|Herr"],
          ["ist groß und bekannt.", "é grande e conhecida.", "sein|groß|und|bekannt"],
          ["Er sagt:", "Ele diz:", "er|sagen"],
          ["„Ich brauche Ihre Antwort", "“Preciso da sua resposta", "ich|brauchen|ihr|Antwort"],
          ["bis Montag.“", "até segunda.”", "bis|Montag"]
        ]]
      ],
      escolhas: [
        { pt: "Aceitar a oferta do senhor Yilmaz.", de: "Das Angebot von Herrn Yilmaz annehmen.", ir: "f_angebot" },
        { pt: "Recusar e contar a oferta à senhora Schneider.", de: "Ablehnen und Frau Schneider davon erzählen.", ir: "f_vertrauen" },
        { pt: "Antes de decidir, pedir desculpas ao Markus pela promessa quebrada.", de: "Zuerst Markus um Verzeihung bitten.", ir: "f_freund", req: "versprochen" }
      ]
    },

    f_vertrauen: {
      cap: "Confiança",
      p: [
        ["Am Montag ruft Frau Schneider dich in ihr Büro. „Das war Ihre erste Woche, aber ich vertraue Ihnen schon. Ab jetzt arbeiten Sie direkt mit Herrn Yilmaz.“ Du gehst zurück an deinen Tisch.",
         "Na segunda-feira, a senhora Schneider chama você à sala dela. “Essa foi a sua primeira semana, mas eu já confio em você. A partir de agora, você trabalha diretamente com o senhor Yilmaz.” Você volta para a sua mesa.", [
          ["Am Montag", "Na segunda-feira,", "an|der|Montag"],
          ["ruft Frau Schneider dich", "a senhora Schneider chama você", "rufen|Frau|du"],
          ["in ihr Büro.", "à sala dela.", "in|ihr|Büro"],
          ["„Das war Ihre erste Woche,", "“Essa foi a sua primeira semana,", "das|sein|ihr|erste|Woche"],
          ["aber ich vertraue Ihnen schon.", "mas eu já confio em você.", "aber|ich|vertrauen|sie|schon"],
          ["Ab jetzt arbeiten Sie", "A partir de agora, você trabalha", "jetzt|arbeiten|sie"],
          ["direkt mit Herrn Yilmaz.“", "diretamente com o senhor Yilmaz.”", "mit|Herr"],
          ["Du gehst zurück", "Você volta", "du|gehen|zurück"],
          ["an deinen Tisch.", "para a sua mesa.", "an|dein|Tisch"]
        ]],
        ["Draußen regnet es, Frankfurt ist grau. Aber du fühlst dich gut. Du hast keine Angst mehr vor Fehlern. Du weißt jetzt: Die Wahrheit ist manchmal schwer, aber sie hilft.",
         "Lá fora está chovendo, Frankfurt está cinza. Mas você se sente bem. Você não tem mais medo de errar. Agora você sabe: a verdade às vezes é difícil, mas ela ajuda.", [
          ["Draußen regnet es,", "Lá fora está chovendo,", "draußen|regnen|es"],
          ["Frankfurt ist grau.", "Frankfurt está cinza.", "sein|grau"],
          ["Aber du fühlst dich gut.", "Mas você se sente bem.", "aber|du|fühlen|gut"],
          ["Du hast keine Angst mehr", "Você não tem mais medo", "du|haben|kein|Angst|mehr"],
          ["vor Fehlern.", "de errar.", "vor|Fehler"],
          ["Du weißt jetzt:", "Agora você sabe:", "du|wissen|jetzt"],
          ["Die Wahrheit ist manchmal schwer,", "a verdade às vezes é difícil,", "der|Wahrheit|sein|manchmal|schwer"],
          ["aber sie hilft.", "mas ela ajuda.", "aber|sie|helfen"]
        ]]
      ],
      fim: { tipo: "bom", titulo: "Alguém de confiança" }
    },

    f_freund: {
      cap: "A mesa vazia",
      p: [
        ["Du behältst deine Stelle. Frau Schneider sagt sogar: „Gute Arbeit.“ Aber der Tisch neben dir ist jetzt leer. Markus arbeitet in einem anderen Raum, und im Flur grüßt er dich nicht mehr.",
         "Você mantém o seu emprego. A senhora Schneider até diz: “Bom trabalho.” Mas a mesa ao seu lado agora está vazia. O Markus trabalha em outra sala, e no corredor ele não te cumprimenta mais.", [
          ["Du behältst deine Stelle.", "Você mantém o seu emprego.", "du|dein|Stelle"],
          ["Frau Schneider sagt sogar:", "A senhora Schneider até diz:", "Frau|sagen|sogar"],
          ["„Gute Arbeit.“", "“Bom trabalho.”", "gut|Arbeit"],
          ["Aber der Tisch neben dir", "Mas a mesa ao seu lado", "aber|der|Tisch|neben|du"],
          ["ist jetzt leer.", "agora está vazia.", "sein|jetzt|leer"],
          ["Markus arbeitet", "O Markus trabalha", "arbeiten"],
          ["in einem anderen Raum,", "em outra sala,", "in|ein|ander|Raum"],
          ["und im Flur", "e no corredor", "und|in|der"],
          ["grüßt er dich nicht mehr.", "ele não te cumprimenta mais.", "grüßen|er|du|nicht|mehr"]
        ]],
        ["Am Freitagabend gehen die Kollegen zusammen etwas trinken. Niemand lädt dich ein. Du fährst mit der Straßenbahn nach Hause. Du hast richtig gehandelt, oder? Die Antwort ist nicht so einfach.",
         "Na sexta à noite, os colegas vão beber alguma coisa juntos. Ninguém te convida. Você volta de bonde para casa. Você agiu certo, não agiu? A resposta não é tão simples.", [
          ["Am Freitagabend", "Na sexta à noite,", "an|der"],
          ["gehen die Kollegen", "os colegas vão", "gehen|der|Kollege"],
          ["zusammen etwas trinken.", "beber alguma coisa juntos.", "zusammen|etwas|trinken"],
          ["Niemand lädt dich ein.", "Ninguém te convida.", "niemand|einladen|du"],
          ["Du fährst", "Você volta", "du|fahren"],
          ["mit der Straßenbahn", "de bonde", "mit|der|Straßenbahn"],
          ["nach Hause.", "para casa.", "nach|Haus"],
          ["Du hast richtig gehandelt,", "Você agiu certo,", "du|haben|richtig|handeln"],
          ["oder?", "não agiu?", "oder"],
          ["Die Antwort", "A resposta", "der|Antwort"],
          ["ist nicht so einfach.", "não é tão simples.", "sein|nicht|so|einfach"]
        ]]
      ],
      fim: { tipo: "neutro", titulo: "O emprego fica, o amigo não" }
    },

    f_schuld: {
      cap: "A culpa",
      p: [
        ["Frau Schneider glaubt Markus. Warum auch nicht? Er ist seit Monaten hier, du erst seit fünf Tagen. Herr Yilmaz geht ohne ein Wort. Am Nachmittag sagt Frau Schneider: „Wir brauchen Sie nicht mehr.“",
         "A senhora Schneider acredita no Markus. E por que não? Ele está aqui há meses, você há só cinco dias. O senhor Yilmaz vai embora sem dizer nada. À tarde, a senhora Schneider diz: “Não precisamos mais de você.”", [
          ["Frau Schneider glaubt Markus.", "A senhora Schneider acredita no Markus.", "Frau|glauben"],
          ["Warum auch nicht?", "E por que não?", "warum|auch|nicht"],
          ["Er ist seit Monaten hier,", "Ele está aqui há meses,", "er|sein|seit|Monat|hier"],
          ["du erst seit fünf Tagen.", "você, há só cinco dias.", "du|seit|fünf|Tag"],
          ["Herr Yilmaz geht", "O senhor Yilmaz vai embora", "Herr|gehen"],
          ["ohne ein Wort.", "sem dizer nada.", "ohne|ein|Wort"],
          ["Am Nachmittag", "À tarde,", "an|der|Nachmittag"],
          ["sagt Frau Schneider:", "a senhora Schneider diz:", "sagen|Frau"],
          ["„Wir brauchen Sie nicht mehr.“", "“Não precisamos mais de você.”", "wir|brauchen|sie|nicht|mehr"]
        ]],
        ["Du nimmst deine Tasche. Markus sitzt an seinem Computer und schaut nicht auf. Auf der Straße ist es kalt. Du hast etwas gelernt: Ein Versprechen kann sehr teuer sein.",
         "Você pega a sua bolsa. O Markus está no computador dele e nem levanta os olhos. Na rua está frio. Você aprendeu algo: uma promessa pode sair muito cara.", [
          ["Du nimmst deine Tasche.", "Você pega a sua bolsa.", "du|nehmen|dein|Tasche"],
          ["Markus sitzt", "O Markus está", "sitzen"],
          ["an seinem Computer", "no computador dele", "an|sein|Computer"],
          ["und schaut nicht auf.", "e nem levanta os olhos.", "und|schauen|nicht"],
          ["Auf der Straße", "Na rua", "auf|der|Straße"],
          ["ist es kalt.", "está frio.", "sein|es|kalt"],
          ["Du hast etwas gelernt:", "Você aprendeu algo:", "du|haben|etwas|lernen"],
          ["Ein Versprechen", "uma promessa", "ein"],
          ["kann sehr teuer sein.", "pode sair muito cara.", "können|sehr|teuer|sein"]
        ]]
      ],
      fim: { tipo: "ruim", titulo: "A culpa é de quem chegou por último" }
    },

    f_angebot: {
      cap: "Um novo começo",
      p: [
        ["Am Montag schreibst du Frau Schneider eine E-Mail. Du kündigst. Sie ruft sofort an: „Nach einer Woche? Das verstehe ich nicht.“ Du erklärst es ihr ruhig. Sie ist enttäuscht, aber sie wünscht dir Glück.",
         "Na segunda-feira, você escreve um e-mail para a senhora Schneider. Você pede demissão. Ela liga na hora: “Depois de uma semana? Não entendo.” Você explica com calma. Ela fica decepcionada, mas te deseja boa sorte.", [
          ["Am Montag", "Na segunda-feira,", "an|der|Montag"],
          ["schreibst du Frau Schneider", "você escreve para a senhora Schneider", "schreiben|du|Frau"],
          ["eine E-Mail.", "um e-mail.", "ein|E-Mail"],
          ["Du kündigst.", "Você pede demissão.", "du"],
          ["Sie ruft sofort an:", "Ela liga na hora:", "sie|anrufen|sofort"],
          ["„Nach einer Woche?", "“Depois de uma semana?", "nach|ein|Woche"],
          ["Das verstehe ich nicht.“", "Não entendo.”", "das|verstehen|ich|nicht"],
          ["Du erklärst es ihr ruhig.", "Você explica com calma.", "du|erklären|es|sie|ruhig"],
          ["Sie ist enttäuscht,", "Ela fica decepcionada,", "sie|sein"],
          ["aber sie wünscht dir Glück.", "mas te deseja boa sorte.", "aber|sie|wünschen|du|Glück"]
        ]],
        ["Zwei Wochen später arbeitest du in einem neuen Büro, hoch über dem Main. Herr Yilmaz bringt dir einen Kaffee. „Schön, dass Sie da sind“, sagt er. „Hier brauchen wir Leute, die nicht lügen.“",
         "Duas semanas depois, você trabalha em um escritório novo, bem acima do rio Meno. O senhor Yilmaz te traz um café. “Que bom ter você aqui”, diz ele. “Aqui precisamos de pessoas que não mentem.”", [
          ["Zwei Wochen später", "Duas semanas depois,", "zwei|Woche|später"],
          ["arbeitest du", "você trabalha", "arbeiten|du"],
          ["in einem neuen Büro,", "em um escritório novo,", "in|ein|neu|Büro"],
          ["hoch über dem Main.", "bem acima do rio Meno.", "hoch|über|der"],
          ["Herr Yilmaz bringt dir", "O senhor Yilmaz te traz", "Herr|bringen|du"],
          ["einen Kaffee.", "um café.", "ein|Kaffee"],
          ["„Schön, dass Sie da sind“,", "“Que bom ter você aqui”,", "schön|dass|sie|da|sein"],
          ["sagt er.", "diz ele.", "sagen|er"],
          ["„Hier brauchen wir Leute,", "“Aqui precisamos de pessoas", "hier|brauchen|wir|Leute"],
          ["die nicht lügen.“", "que não mentem.”", "der|nicht|lügen"]
        ]]
      ],
      fim: { tipo: "bom", titulo: "Uma porta que se abre" }
    }
  }
});
VB_HIST.de.push({
  id: "velhos-amigos",
  titulo: "Velhos amigos",
  genero: "Relações",
  nivel: "A2",
  desc: "Dez anos depois do seu intercâmbio, você volta a Hamburgo para os 35 anos do seu amigo Paul. A namorada dele mal disfarça a antipatia, e Paul parece esconder alguma coisa.",
  inicio: "c1",
  cenas: {
    c1: {
      cap: "Hamburgo",
      p: [
        ["Nach zehn Jahren bist du wieder in Hamburg. Heute Abend feiert Paul seinen fünfunddreißigsten Geburtstag. Er wartet am Bahnhof mit einem breiten Lachen. Er umarmt dich lange. „Du bist alt geworden!“, sagt er. Aber er sieht müde aus, und er schaut oft auf sein Handy.",
         "Depois de dez anos, você está de volta a Hamburgo. Hoje à noite Paul comemora seus trinta e cinco anos. Ele espera na estação com um sorriso enorme. Ele abraça você demoradamente. “Você ficou velho!”, diz ele. Mas ele parece cansado e olha muitas vezes para o celular.",
         [["Nach zehn Jahren","Depois de dez anos,","nach|zehn|Jahr"],
          ["bist du wieder in Hamburg.","você está de volta a Hamburgo.","sein|du|wieder|in"],
          ["Heute Abend feiert Paul","Hoje à noite Paul comemora","heute|Abend|feiern"],
          ["seinen fünfunddreißigsten Geburtstag.","seus trinta e cinco anos.","sein|Geburtstag"],
          ["Er wartet am Bahnhof","Ele espera na estação","er|warten|an|der|Bahnhof"],
          ["mit einem breiten Lachen.","com um sorriso enorme.","mit|ein|breit"],
          ["Er umarmt dich lange.","Ele abraça você demoradamente.","er|umarmen|du|lang"],
          ["„Du bist alt geworden!“,","“Você ficou velho!”,","du|sein|alt|werden"],
          ["sagt er.","diz ele.","sagen|er"],
          ["Aber er sieht müde aus,","Mas ele parece cansado","aber|er|aussehen|müde"],
          ["und er schaut oft","e olha muitas vezes","und|er|schauen|oft"],
          ["auf sein Handy.","para o celular.","auf|sein|Handy"]]],
        ["Seine Wohnung liegt in Altona, im vierten Stock. Miriam, seine Freundin, öffnet die Tür. Sie gibt dir die Hand, nicht mehr. „Paul erzählt viel von dir“, sagt sie kalt. Auf dem Tisch liegen Briefe, und Paul legt schnell eine Zeitung darauf.",
         "O apartamento dele fica em Altona, no quarto andar. Miriam, a namorada dele, abre a porta. Ela aperta sua mão, nada mais. “Paul fala muito de você”, diz ela, fria. Na mesa há cartas, e Paul coloca depressa um jornal por cima.",
         [["Seine Wohnung liegt","O apartamento dele fica","sein|Wohnung|liegen"],
          ["in Altona,","em Altona,","in"],
          ["im vierten Stock.","no quarto andar.","in|der"],
          ["Miriam, seine Freundin,","Miriam, a namorada dele,","sein|Freundin"],
          ["öffnet die Tür.","abre a porta.","öffnen|der|Tür"],
          ["Sie gibt dir die Hand,","Ela aperta sua mão,","sie|geben|du|der|Hand"],
          ["nicht mehr.","nada mais.","nicht|mehr"],
          ["„Paul erzählt viel von dir“,","“Paul fala muito de você”,","erzählen|viel|von|du"],
          ["sagt sie kalt.","diz ela, fria.","sagen|sie|kalt"],
          ["Auf dem Tisch liegen Briefe,","Na mesa há cartas,","auf|der|Tisch|liegen|Brief"],
          ["und Paul legt schnell","e Paul coloca depressa","und|legen|schnell"],
          ["eine Zeitung darauf.","um jornal por cima.","ein|Zeitung"]]]
      ],
      escolhas: [
        { pt: "Ajudar Miriam na cozinha.", de: "Miriam in der Küche helfen.", ir: "c2a" },
        { pt: "Ir com Paul comprar bebidas para a festa.", de: "Mit Paul Getränke kaufen gehen.", ir: "c2b" }
      ]
    },

    c2a: {
      cap: "A cozinha",
      p: [
        ["In der Küche schneidet Miriam Zwiebeln. Lange sagt sie nichts. Dann legt sie das Messer weg. „Vor zehn Jahren bist du gegangen, ohne ein Wort. Paul hat am Flughafen auf dich gewartet. Zwei Stunden.“",
         "Na cozinha, Miriam corta cebolas. Por muito tempo, ela não diz nada. Depois deixa a faca de lado. “Dez anos atrás, você foi embora, sem uma palavra. No aeroporto, Paul esperou por você. Duas horas.”",
         [["In der Küche","Na cozinha,","in|der|Küche"],
          ["schneidet Miriam Zwiebeln.","Miriam corta cebolas.","schneiden|Zwiebel"],
          ["Lange sagt sie nichts.","Por muito tempo, ela não diz nada.","lang|sagen|sie|nichts"],
          ["Dann legt sie","Depois ela deixa","dann|legen|sie"],
          ["das Messer weg.","a faca de lado.","der|Messer|weg"],
          ["„Vor zehn Jahren","“Dez anos atrás,","vor|zehn|Jahr"],
          ["bist du gegangen,","você foi embora,","sein|du|gehen"],
          ["ohne ein Wort.","sem uma palavra.","ohne|ein|Wort"],
          ["Paul hat am Flughafen","No aeroporto, Paul","haben|an|der|Flughafen"],
          ["auf dich gewartet.","esperou por você.","auf|du|warten"],
          ["Zwei Stunden.“","Duas horas.”","zwei|Stunde"]]],
        ["Sie schaut dich an. „Mit Paul stimmt etwas nicht. Er sagt, er geht jeden Morgen ins Büro. Aber gestern hat ein Kollege angerufen. Er hat gesagt: ‚Wir vermissen Paul in der Firma.‘ Was bedeutet das? Weißt du etwas?“",
         "Ela olha para você. “Tem alguma coisa errada com o Paul. Ele diz que vai toda manhã ao escritório. Mas ontem um colega ligou. Ele disse: ‘Sentimos falta do Paul na empresa.’ O que isso quer dizer? Você sabe de alguma coisa?”",
         [["Sie schaut dich an.","Ela olha para você.","sie|schauen|du"],
          ["„Mit Paul stimmt etwas nicht.","“Tem alguma coisa errada com o Paul.","mit|stimmen|etwas|nicht"],
          ["Er sagt,","Ele diz","er|sagen"],
          ["er geht jeden Morgen","que vai toda manhã","er|gehen|jeder|Morgen"],
          ["ins Büro.","ao escritório.","in|der|Büro"],
          ["Aber gestern","Mas ontem","aber|gestern"],
          ["hat ein Kollege angerufen.","um colega ligou.","haben|ein|Kollege|anrufen"],
          ["Er hat gesagt:","Ele disse:","er|haben|sagen"],
          ["‚Wir vermissen Paul","‘Sentimos falta do Paul","wir|vermissen"],
          ["in der Firma.‘","na empresa.’","in|der|Firma"],
          ["Was bedeutet das?","O que isso quer dizer?","was|bedeuten|das"],
          ["Weißt du etwas?“","Você sabe de alguma coisa?”","wissen|du|etwas"]]]
      ],
      escolhas: [
        { pt: "Ir buscar Anna, a irmã de Paul, que está chegando com o bolo, e perguntar a ela.", de: "Anna unten abholen und sie fragen.", ir: "c3a" },
        { pt: "Ir direto falar com Paul.", de: "Direkt mit Paul reden.", ir: "c3b" }
      ]
    },

    c2b: {
      cap: "O supermercado",
      p: [
        ["Im Supermarkt kauft Paul Bier, Wein und viel zu viel Käse. „Heute bezahle ich alles!“, sagt er laut. An der Kasse gibt er seine Karte. Die Frau schüttelt den Kopf. Er versucht es noch einmal. Wieder nichts.",
         "No supermercado, Paul compra cerveja, vinho e queijo demais. “Hoje eu pago tudo!”, diz ele, alto. No caixa, ele entrega o cartão. A mulher balança a cabeça. Ele tenta mais uma vez. De novo, nada.",
         [["Im Supermarkt","No supermercado,","in|der|Supermarkt"],
          ["kauft Paul Bier, Wein","Paul compra cerveja, vinho","kaufen|Bier|Wein"],
          ["und viel zu viel Käse.","e queijo demais.","und|viel|zu|Käse"],
          ["„Heute bezahle ich alles!“,","“Hoje eu pago tudo!”,","heute|bezahlen|ich|alles"],
          ["sagt er laut.","diz ele, alto.","sagen|er|laut"],
          ["An der Kasse","No caixa,","an|der|Kasse"],
          ["gibt er seine Karte.","ele entrega o cartão.","geben|er|sein|Karte"],
          ["Die Frau schüttelt den Kopf.","A mulher balança a cabeça.","der|Frau|der|Kopf"],
          ["Er versucht es noch einmal.","Ele tenta mais uma vez.","er|versuchen|es|noch"],
          ["Wieder nichts.","De novo, nada.","wieder|nichts"]]],
        ["Du bezahlst. Draußen sagt Paul lange nichts. Dann lacht er, aber es klingt falsch. „Das ist nur ein Problem mit der Bank. Ich erkläre es dir später.“ Er hält deinen Arm fest. „Bitte sag Miriam nichts. Nicht heute.“",
         "Você paga. Lá fora, Paul fica muito tempo calado. Depois ele ri, mas soa falso. “É só um problema com o banco. Eu te explico depois.” Ele segura seu braço. “Por favor, não diga nada à Miriam. Hoje não.”",
         [["Du bezahlst.","Você paga.","du|bezahlen"],
          ["Draußen sagt Paul lange nichts.","Lá fora, Paul fica muito tempo calado.","draußen|sagen|lang|nichts"],
          ["Dann lacht er,","Depois ele ri,","dann|lachen|er"],
          ["aber es klingt falsch.","mas soa falso.","aber|es|klingen|falsch"],
          ["„Das ist nur ein Problem","“É só um problema","das|sein|nur|ein|Problem"],
          ["mit der Bank.","com o banco.","mit|der|Bank"],
          ["Ich erkläre es dir später.“","Eu te explico depois.”","ich|erklären|es|du|später"],
          ["Er hält deinen Arm fest.","Ele segura seu braço.","er|halten|dein|Arm"],
          ["„Bitte sag Miriam nichts.","“Por favor, não diga nada à Miriam.","bitte|sagen|nichts"],
          ["Nicht heute.“","Hoje não.”","nicht|heute"]]]
      ],
      escolhas: [
        { pt: "Prometer que não vai dizer nada.", de: "Versprechen, nichts zu sagen.", ir: "c3a", marca: "segredo_paul" },
        { pt: "Insistir numa explicação.", de: "Auf einer Erklärung bestehen.", ir: "c3b" }
      ]
    },

    c3a: {
      cap: "A irmã",
      p: [
        ["Am Nachmittag klingelt es. Unten steht Anna, Pauls Schwester, mit einem großen Kuchen. „Hilf mir mal“, sagt sie. Auf der Treppe bleibt sie plötzlich stehen. „Du weißt es noch nicht, oder? Paul hat seinen Job verloren. Schon im März.“",
         "À tarde, a campainha toca. Lá embaixo está Anna, a irmã de Paul, com um bolo grande. “Me ajuda aqui”, diz ela. Na escada, ela para de repente. “Você ainda não sabe, né? Paul perdeu o emprego. Já em março.”",
         [["Am Nachmittag","À tarde,","an|der|Nachmittag"],
          ["klingelt es.","a campainha toca.","klingeln|es"],
          ["Unten steht Anna,","Lá embaixo está Anna,","unten|stehen"],
          ["Pauls Schwester,","a irmã de Paul,","Schwester"],
          ["mit einem großen Kuchen.","com um bolo grande.","mit|ein|groß|Kuchen"],
          ["„Hilf mir mal“,","“Me ajuda aqui”,","helfen|ich|mal"],
          ["sagt sie.","diz ela.","sagen|sie"],
          ["Auf der Treppe","Na escada,","auf|der|Treppe"],
          ["bleibt sie plötzlich stehen.","ela para de repente.","bleiben|sie|stehen"],
          ["„Du weißt es noch nicht,","“Você ainda não sabe,","du|wissen|es|noch|nicht"],
          ["oder?","né?","oder"],
          ["Paul hat seinen Job verloren.","Paul perdeu o emprego.","haben|sein|Job|verlieren"],
          ["Schon im März.“","Já em março.”","schon|in|der"]]],
        ["Sie atmet tief. „Ich habe ihm achttausend Euro geliehen. Für die Miete und für heute Abend. Und noch etwas: Vor zehn Jahren habe ich Papa gesagt, dass Paul nicht mehr studiert. Ich, nicht du. Paul glaubt bis heute, du warst es.“",
         "Ela respira fundo. “Eu emprestei a ele oito mil euros. Para o aluguel e para hoje à noite. E tem mais uma coisa: dez anos atrás, eu contei ao papai que Paul não estudava mais. Eu, não você. Paul acredita até hoje que foi você.”",
         [["Sie atmet tief.","Ela respira fundo.","sie|atmen|tief"],
          ["„Ich habe ihm","“Eu emprestei a ele","ich|haben|er"],
          ["achttausend Euro geliehen.","oito mil euros.","Euro|leihen"],
          ["Für die Miete","Para o aluguel","für|der|Miete"],
          ["und für heute Abend.","e para hoje à noite.","und|für|heute|Abend"],
          ["Und noch etwas:","E tem mais uma coisa:","und|noch|etwas"],
          ["Vor zehn Jahren","dez anos atrás,","vor|zehn|Jahr"],
          ["habe ich Papa gesagt,","eu contei ao papai","haben|ich|sagen"],
          ["dass Paul nicht mehr studiert.","que Paul não estudava mais.","dass|nicht|mehr|studieren"],
          ["Ich, nicht du.","Eu, não você.","ich|nicht|du"],
          ["Paul glaubt bis heute,","Paul acredita até hoje","glauben|bis|heute"],
          ["du warst es.“","que foi você.”","du|sein|es"]]],
        ["Ihre Augen sind nass. „Bitte sag ihm heute nichts. Nicht über das Geld, nicht über Papa. Er braucht mich jetzt, und er braucht dich. Morgen rede ich mit ihm. Versprochen.“",
         "Os olhos dela estão molhados. “Por favor, não diga nada a ele hoje. Nem sobre o dinheiro, nem sobre o papai. Ele precisa de mim agora, e precisa de você. Amanhã eu falo com ele. Prometo.”",
         [["Ihre Augen sind nass.","Os olhos dela estão molhados.","ihr|Auge|sein|nass"],
          ["„Bitte sag ihm heute nichts.","“Por favor, não diga nada a ele hoje.","bitte|sagen|er|heute|nichts"],
          ["Nicht über das Geld,","Nem sobre o dinheiro,","nicht|über|der|Geld"],
          ["nicht über Papa.","nem sobre o papai.","nicht|über"],
          ["Er braucht mich jetzt,","Ele precisa de mim agora,","er|brauchen|ich|jetzt"],
          ["und er braucht dich.","e precisa de você.","und|er|brauchen|du"],
          ["Morgen rede ich mit ihm.","Amanhã eu falo com ele.","morgen|reden|ich|mit|er"],
          ["Versprochen.“","Prometo.”",""]]]
      ],
      escolhas: [
        { pt: "Aceitar: guardar os dois segredos esta noite.", de: "Ja sagen und heute schweigen.", ir: "c4a", marca: "segredo_anna" },
        { pt: "Recusar: você carregou a culpa dela por dez anos.", de: "Nein sagen. Zehn Jahre sind genug.", ir: "c4b" }
      ]
    },

    c3b: {
      cap: "A varanda",
      p: [
        ["Eine Stunde später sitzt ihr allein auf dem Balkon. Paul raucht, obwohl er nicht mehr raucht. „Okay“, sagt er endlich. „Ich habe meinen Job verloren. Im März. Anna hat mir Geld geliehen. Miriam weiß nichts.“",
         "Uma hora depois, vocês estão sentados sozinhos na varanda. Paul fuma, embora tenha parado de fumar. “Tá bom”, diz ele, finalmente. “Eu perdi o emprego. Em março. A Anna me emprestou dinheiro. A Miriam não sabe de nada.”",
         [["Eine Stunde später","Uma hora depois,","ein|Stunde|später"],
          ["sitzt ihr allein","vocês estão sentados sozinhos","sitzen|ihr|allein"],
          ["auf dem Balkon.","na varanda.","auf|der"],
          ["Paul raucht,","Paul fuma,","rauchen"],
          ["obwohl er nicht mehr raucht.","embora tenha parado de fumar.","obwohl|er|nicht|mehr|rauchen"],
          ["„Okay“,","“Tá bom”,","okay"],
          ["sagt er endlich.","diz ele, finalmente.","sagen|er|endlich"],
          ["„Ich habe meinen Job verloren.","“Eu perdi o emprego.","ich|haben|mein|Job|verlieren"],
          ["Im März.","Em março.","in|der"],
          ["Anna hat mir Geld geliehen.","A Anna me emprestou dinheiro.","haben|ich|Geld|leihen"],
          ["Miriam weiß nichts.“","A Miriam não sabe de nada.”","wissen|nichts"]]],
        ["Er sieht dich an. „Weißt du noch? Vor zehn Jahren hast du Papa gesagt, dass ich nicht mehr studiere. Ich habe dir verziehen. Jetzt bitte ich dich: Sag Miriam nichts. Nur bis morgen.“ Aber das stimmt nicht: Du warst es nicht. Das weiß er nur nicht.",
         "Ele olha para você. “Lembra? Dez anos atrás, você contou ao meu pai que eu não estudava mais. Eu te perdoei. Agora eu te peço: não diga nada à Miriam. Só até amanhã.” Mas isso não é verdade: não foi você. Ele só não sabe disso.",
         [["Er sieht dich an.","Ele olha para você.","er|sehen|du"],
          ["„Weißt du noch?","“Lembra?","wissen|du|noch"],
          ["Vor zehn Jahren","Dez anos atrás,","vor|zehn|Jahr"],
          ["hast du Papa gesagt,","você contou ao meu pai","haben|du|sagen"],
          ["dass ich nicht mehr studiere.","que eu não estudava mais.","dass|ich|nicht|mehr|studieren"],
          ["Ich habe dir verziehen.","Eu te perdoei.","ich|haben|du|verzeihen"],
          ["Jetzt bitte ich dich:","Agora eu te peço:","jetzt|bitten|ich|du"],
          ["Sag Miriam nichts.","não diga nada à Miriam.","sagen|nichts"],
          ["Nur bis morgen.“","Só até amanhã.”","nur|bis|morgen"],
          ["Aber das stimmt nicht:","Mas isso não é verdade:","aber|das|stimmen|nicht"],
          ["Du warst es nicht.","não foi você.","du|sein|es|nicht"],
          ["Das weiß er nur nicht.","Ele só não sabe disso.","das|wissen|er|nur|nicht"]]]
      ],
      escolhas: [
        { pt: "Prometer ficar calado até amanhã.", de: "Versprechen, bis morgen zu schweigen.", ir: "c4a", marca: "segredo_paul" },
        { pt: "Dizer que não vai mentir por ele.", de: "Sagen, dass du nicht für ihn lügst.", ir: "c4b" }
      ]
    },

    c4a: {
      cap: "O brinde",
      p: [
        ["Am Abend ist die Wohnung voll. Dreißig Gäste, laute Musik. Paul trägt ein neues Hemd und lacht viel. Miriam beobachtet dich aus der Küche. Anna bringt den Kuchen und sieht dich nicht an. Dann klopft Paul an sein Glas.",
         "À noite, o apartamento está cheio. Trinta convidados, música alta. Paul está com uma camisa nova e ri muito. Miriam observa você da cozinha. Anna traz o bolo e não olha para você. Então Paul bate no copo.",
         [["Am Abend","À noite,","an|der|Abend"],
          ["ist die Wohnung voll.","o apartamento está cheio.","sein|der|Wohnung|voll"],
          ["Dreißig Gäste,","Trinta convidados,","Gast"],
          ["laute Musik.","música alta.","laut|Musik"],
          ["Paul trägt ein neues Hemd","Paul está com uma camisa nova","tragen|ein|neu|Hemd"],
          ["und lacht viel.","e ri muito.","und|lachen|viel"],
          ["Miriam beobachtet dich","Miriam observa você","beobachten|du"],
          ["aus der Küche.","da cozinha.","aus|der|Küche"],
          ["Anna bringt den Kuchen","Anna traz o bolo","bringen|der|Kuchen"],
          ["und sieht dich nicht an.","e não olha para você.","und|sehen|du|nicht"],
          ["Dann klopft Paul","Então Paul bate","dann|klopfen"],
          ["an sein Glas.","no copo.","an|sein|Glas"]]],
        ["„Danke, dass ihr alle da seid! Danke an Anna, für alles. Und danke an meinen ältesten Freund: Er ist aus Brasilien gekommen!“ Alle klatschen. „Vor zehn Jahren hat er Papa alles erzählt. Aber ich habe ihm verziehen!“ Einige Gäste lachen. Anna wird ganz weiß.",
         "“Obrigado por vocês todos estarem aqui! Obrigado à Anna, por tudo. E obrigado ao meu amigo mais antigo: ele veio do Brasil!” Todos aplaudem. “Dez anos atrás, ele contou tudo ao meu pai. Mas eu o perdoei!” Alguns convidados riem. Anna fica pálida.",
         [["„Danke,","“Obrigado","danke"],
          ["dass ihr alle da seid!","por vocês todos estarem aqui!","dass|ihr|alle|da|sein"],
          ["Danke an Anna,","Obrigado à Anna,","danke|an"],
          ["für alles.","por tudo.","für|alles"],
          ["Und danke","E obrigado","und|danke"],
          ["an meinen ältesten Freund:","ao meu amigo mais antigo:","an|mein|alt|Freund"],
          ["Er ist aus Brasilien gekommen!“","ele veio do Brasil!”","er|sein|aus|kommen"],
          ["Alle klatschen.","Todos aplaudem.","alle"],
          ["„Vor zehn Jahren","“Dez anos atrás,","vor|zehn|Jahr"],
          ["hat er Papa alles erzählt.","ele contou tudo ao meu pai.","haben|er|alles|erzählen"],
          ["Aber ich habe ihm verziehen!“","Mas eu o perdoei!”","aber|ich|haben|er|verzeihen"],
          ["Einige Gäste lachen.","Alguns convidados riem.","einige|Gast|lachen"],
          ["Anna wird ganz weiß.","Anna fica pálida.","werden|ganz|weiß"]]]
      ],
      escolhas: [
        { pt: "Sorrir e ficar calado, pela promessa feita a Anna.", de: "Lächeln und schweigen.", ir: "f_silencio", req: "segredo_anna" },
        { pt: "Dizer na frente de todos que não foi você.", de: "Vor allen sagen: „Das war ich nicht.“", ir: "c5b" },
        { pt: "Esperar o fim do discurso e chamar Paul para conversar a sós.", de: "Später allein mit Paul reden.", ir: "c5a" }
      ]
    },

    c4b: {
      cap: "O quarto",
      p: [
        ["Um acht Uhr kommen die ersten Gäste. Miriam nimmt deinen Arm und zieht dich in das kleine Zimmer. Sie schließt die Tür. „Du weißt etwas. Ich sehe es in deinem Gesicht.“ Draußen lacht Paul, laut und glücklich.",
         "Às oito horas chegam os primeiros convidados. Miriam pega seu braço e puxa você para o quarto pequeno. Ela fecha a porta. “Você sabe de alguma coisa. Eu vejo isso no seu rosto.” Lá fora, Paul ri, alto e feliz.",
         [["Um acht Uhr","Às oito horas","um|acht|Uhr"],
          ["kommen die ersten Gäste.","chegam os primeiros convidados.","kommen|der|erste|Gast"],
          ["Miriam nimmt deinen Arm","Miriam pega seu braço","nehmen|dein|Arm"],
          ["und zieht dich","e puxa você","und|ziehen|du"],
          ["in das kleine Zimmer.","para o quarto pequeno.","in|der|klein|Zimmer"],
          ["Sie schließt die Tür.","Ela fecha a porta.","sie|schließen|der|Tür"],
          ["„Du weißt etwas.","“Você sabe de alguma coisa.","du|wissen|etwas"],
          ["Ich sehe es","Eu vejo isso","ich|sehen|es"],
          ["in deinem Gesicht.“","no seu rosto.”","in|dein|Gesicht"],
          ["Draußen lacht Paul,","Lá fora, Paul ri,","draußen|lachen"],
          ["laut und glücklich.","alto e feliz.","laut|und|glücklich"]]],
        ["„Ich liebe ihn“, sagt sie leise. „Aber ich will keine Lügen mehr. Seit drei Monaten ist er ein anderer Mensch. Er schläft nicht, er isst nicht. Ich habe Angst. Bitte sag mir die Wahrheit.“",
         "“Eu o amo”, diz ela baixinho. “Mas eu não quero mais mentiras. Há três meses ele é outra pessoa. Ele não dorme, não come. Estou com medo. Por favor, me diga a verdade.”",
         [["„Ich liebe ihn“,","“Eu o amo”,","ich|lieben|er"],
          ["sagt sie leise.","diz ela baixinho.","sagen|sie|leise"],
          ["„Aber ich will","“Mas eu não quero","aber|ich|wollen"],
          ["keine Lügen mehr.","mais mentiras.","kein|Lüge|mehr"],
          ["Seit drei Monaten","Há três meses","seit|drei|Monat"],
          ["ist er ein anderer Mensch.","ele é outra pessoa.","sein|er|ein|ander|Mensch"],
          ["Er schläft nicht,","Ele não dorme,","er|schlafen|nicht"],
          ["er isst nicht.","não come.","er|essen|nicht"],
          ["Ich habe Angst.","Estou com medo.","ich|haben|Angst"],
          ["Bitte sag mir","Por favor, me diga","bitte|sagen|ich"],
          ["die Wahrheit.“","a verdade.”","der|Wahrheit"]]]
      ],
      escolhas: [
        { pt: "Contar tudo a Miriam: o emprego e o dinheiro de Anna.", de: "Miriam die Wahrheit sagen.", ir: "c5b", marca: "contou_miriam" },
        { pt: "Dizer que quem precisa contar é o Paul, e ir buscá-lo.", de: "Sagen: „Das muss Paul dir sagen.“ Dann Paul holen.", ir: "c5a" },
        { pt: "Mentir, como prometeu a Paul: dizer que não sabe de nada.", de: "Lügen und sagen, dass du nichts weißt.", ir: "f_silencio", req: "segredo_paul" }
      ]
    },

    c5a: {
      cap: "Meia-noite",
      p: [
        ["Kurz vor Mitternacht stehst du mit Paul auf dem Balkon. Unten fährt ein Bus vorbei. Paul hat viel getrunken. „Weißt du, was komisch ist?“, fragt er. „Ich war nie böse. Nur traurig. Warum hast du das getan?“",
         "Pouco antes da meia-noite, você está com Paul na varanda. Lá embaixo passa um ônibus. Paul bebeu muito. “Sabe o que é engraçado?”, pergunta ele. “Eu nunca fiquei com raiva. Só triste. Por que você fez aquilo?”",
         [["Kurz vor Mitternacht","Pouco antes da meia-noite,","kurz|vor"],
          ["stehst du mit Paul","você está com Paul","stehen|du|mit"],
          ["auf dem Balkon.","na varanda.","auf|der"],
          ["Unten fährt ein Bus vorbei.","Lá embaixo passa um ônibus.","unten|fahren|ein|Bus"],
          ["Paul hat viel getrunken.","Paul bebeu muito.","haben|viel|trinken"],
          ["„Weißt du,","“Sabe","wissen|du"],
          ["was komisch ist?“,","o que é engraçado?”,","was|sein"],
          ["fragt er.","pergunta ele.","fragen|er"],
          ["„Ich war nie böse.","“Eu nunca fiquei com raiva.","ich|sein|nie|böse"],
          ["Nur traurig.","Só triste.","nur|traurig"],
          ["Warum hast du das getan?“","Por que você fez aquilo?”","warum|haben|du|das|tun"]]],
        ["Hinter dem Fenster siehst du Anna. Sie schaut zu euch, mit großen Augen. Paul wartet auf eine Antwort. Er hat keinen Job und keine Ruhe. Du kannst ihm jetzt viel sagen. Oder sehr wenig.",
         "Atrás da janela, você vê Anna. Ela olha para vocês, de olhos arregalados. Paul espera uma resposta. Ele não tem emprego nem paz. Agora você pode dizer muito a ele. Ou muito pouco.",
         [["Hinter dem Fenster","Atrás da janela,","hinter|der|Fenster"],
          ["siehst du Anna.","você vê Anna.","sehen|du"],
          ["Sie schaut zu euch,","Ela olha para vocês,","sie|schauen|zu|ihr"],
          ["mit großen Augen.","de olhos arregalados.","mit|groß|Auge"],
          ["Paul wartet","Paul espera","warten"],
          ["auf eine Antwort.","uma resposta.","auf|ein|Antwort"],
          ["Er hat keinen Job","Ele não tem emprego","er|haben|kein|Job"],
          ["und keine Ruhe.","nem paz.","und|kein|Ruhe"],
          ["Du kannst ihm jetzt","Agora você pode","du|können|er|jetzt"],
          ["viel sagen.","dizer muito a ele.","viel|sagen"],
          ["Oder sehr wenig.","Ou muito pouco.","oder|sehr"]]]
      ],
      escolhas: [
        { pt: "Dizer que não foi você e que hoje tudo precisa vir à tona: o emprego, o dinheiro, o passado.", de: "Sagen: „Ich war es nicht. Heute Nacht sagen wir alles.“", ir: "f_renovada" },
        { pt: "Mudar de assunto e buscar mais uma cerveja.", de: "Das Thema wechseln und noch ein Bier holen.", ir: "f_silencio" },
        { pt: "Cumprir a promessa a Anna: dizer só “não fui eu”, sem nomes.", de: "Nur sagen: „Ich war es nicht.“ Keine Namen.", ir: "f_distancia", req: "segredo_anna" }
      ]
    },

    c5b: {
      cap: "A cozinha à noite",
      p: [
        ["Eine halbe Stunde später ist die Musik aus. Die Gäste stehen still im Flur. In der Küche steht Paul, sein Gesicht ist rot. „Warum hast du das gemacht?“, fragt er. „Heute? An meinem Geburtstag?“",
         "Meia hora depois, a música está desligada. Os convidados estão parados no corredor, em silêncio. Na cozinha está Paul, o rosto dele está vermelho. “Por que você fez isso?”, pergunta ele. “Hoje? No meu aniversário?”",
         [["Eine halbe Stunde später","Meia hora depois,","ein|Stunde|später"],
          ["ist die Musik aus.","a música está desligada.","sein|der|Musik"],
          ["Die Gäste stehen still","Os convidados estão parados, em silêncio,","der|Gast|stehen"],
          ["im Flur.","no corredor.","in|der"],
          ["In der Küche","Na cozinha","in|der|Küche"],
          ["steht Paul,","está Paul,","stehen"],
          ["sein Gesicht ist rot.","o rosto dele está vermelho.","sein|Gesicht|rot"],
          ["„Warum hast du das gemacht?“,","“Por que você fez isso?”,","warum|haben|du|das|machen"],
          ["fragt er.","pergunta ele.","fragen|er"],
          ["„Heute?","“Hoje?","heute"],
          ["An meinem Geburtstag?“","No meu aniversário?”","an|mein|Geburtstag"]]],
        ["Miriam steht am Fenster und sagt nichts. Anna weint im Bad. Paul schaut nur dich an. „Ich habe dich eingeladen“, sagt Paul. „Ich habe mich so gefreut. Und du machst alles kaputt.“",
         "Miriam está na janela e não diz nada. Anna chora no banheiro. Paul só olha para você. “Eu convidei você”, diz Paul. “Eu fiquei tão feliz. E você estraga tudo.”",
         [["Miriam steht am Fenster","Miriam está na janela","stehen|an|der|Fenster"],
          ["und sagt nichts.","e não diz nada.","und|sagen|nichts"],
          ["Anna weint im Bad.","Anna chora no banheiro.","weinen|in|der|Bad"],
          ["Paul schaut nur dich an.","Paul só olha para você.","schauen|nur|du"],
          ["„Ich habe dich eingeladen“,","“Eu convidei você”,","ich|haben|du|einladen"],
          ["sagt Paul.","diz Paul.","sagen"],
          ["„Ich habe mich so gefreut.","“Eu fiquei tão feliz.","ich|haben|so|freuen"],
          ["Und du machst alles kaputt.“","E você estraga tudo.”","und|du|machen|alles"]]]
      ],
      escolhas: [
        { pt: "Se defender: foram dez anos carregando uma culpa que não era sua.", de: "Dich verteidigen: „Zehn Jahre war ich der Schuldige!“", ir: "f_ruptura" },
        { pt: "Pedir desculpas pelo momento, mas não pela verdade.", de: "Dich für den Moment entschuldigen, nicht für die Wahrheit.", ir: "f_distancia" },
        { pt: "Olhar para Miriam e deixar que ela fale.", de: "Miriam ansehen und sie sprechen lassen.", ir: "f_renovada", req: "contou_miriam" }
      ]
    },

    f_renovada: {
      cap: "Quatro na cozinha",
      p: [
        ["Es wird eine lange Nacht. Um drei Uhr sitzt ihr in der Küche: Paul, Miriam, Anna und du. Anna erzählt selbst, was damals passiert ist. Paul sagt lange nichts. Dann lacht er, und gleichzeitig weint er. „Zehn Jahre“, sagt er leise.",
         "Vai ser uma longa noite. Às três horas, vocês estão sentados na cozinha: Paul, Miriam, Anna e você. A própria Anna conta o que aconteceu naquela época. Paul fica muito tempo em silêncio. Depois ele ri e, ao mesmo tempo, chora. “Dez anos”, diz ele baixinho.",
         [["Es wird eine lange Nacht.","Vai ser uma longa noite.","es|werden|ein|lang|Nacht"],
          ["Um drei Uhr","Às três horas,","um|drei|Uhr"],
          ["sitzt ihr in der Küche:","vocês estão sentados na cozinha:","sitzen|ihr|in|der|Küche"],
          ["Paul, Miriam, Anna und du.","Paul, Miriam, Anna e você.","und|du"],
          ["Anna erzählt selbst,","A própria Anna conta","erzählen"],
          ["was damals passiert ist.","o que aconteceu naquela época.","was|passieren|sein"],
          ["Paul sagt lange nichts.","Paul fica muito tempo em silêncio.","sagen|lang|nichts"],
          ["Dann lacht er,","Depois ele ri","dann|lachen|er"],
          ["und gleichzeitig weint er.","e, ao mesmo tempo, chora.","und|weinen|er"],
          ["„Zehn Jahre“,","“Dez anos”,","zehn|Jahr"],
          ["sagt er leise.","diz ele baixinho.","sagen|er|leise"]]],
        ["Am Morgen sind die Probleme nicht weg. Paul hat keinen Job, und Anna bekommt noch viel Geld von ihm. Miriam ist noch kalt, aber sie kocht dir Kaffee. An der Tür umarmt Paul dich. „Bleib noch einen Tag. Bitte.“",
         "De manhã, os problemas não sumiram. Paul não tem emprego, e Anna ainda vai receber muito dinheiro dele. Miriam ainda está fria, mas faz um café para você. Na porta, Paul abraça você. “Fica mais um dia. Por favor.”",
         [["Am Morgen","De manhã,","an|der|Morgen"],
          ["sind die Probleme nicht weg.","os problemas não sumiram.","sein|der|Problem|nicht|weg"],
          ["Paul hat keinen Job,","Paul não tem emprego,","haben|kein|Job"],
          ["und Anna bekommt","e Anna ainda vai receber","und|bekommen"],
          ["noch viel Geld von ihm.","muito dinheiro dele.","noch|viel|Geld|von|er"],
          ["Miriam ist noch kalt,","Miriam ainda está fria,","sein|noch|kalt"],
          ["aber sie kocht dir Kaffee.","mas faz um café para você.","aber|sie|kochen|du|Kaffee"],
          ["An der Tür","Na porta,","an|der|Tür"],
          ["umarmt Paul dich.","Paul abraça você.","umarmen|du"],
          ["„Bleib noch einen Tag.","“Fica mais um dia.","bleiben|noch|ein|Tag"],
          ["Bitte.“","Por favor.”","bitte"]]]
      ],
      fim: { tipo: "bom", titulo: "Amizade renovada" }
    },

    f_distancia: {
      cap: "A estação",
      p: [
        ["Am nächsten Morgen fährst du nach Hause, einen Tag zu früh. Paul bringt dich zum Bahnhof. Ihr redet über Fußball, über das Wetter, über alte Freunde. Über gestern Abend sagt ihr nichts. Am Zug gibt er dir die Hand. Dann umarmt er dich doch.",
         "Na manhã seguinte, você volta para casa, um dia antes do previsto. Paul leva você até a estação. Vocês falam de futebol, do tempo, de velhos amigos. Sobre ontem à noite, vocês não dizem nada. No trem, ele aperta sua mão. Depois, mesmo assim, abraça você.",
         [["Am nächsten Morgen","Na manhã seguinte,","an|der|nächste|Morgen"],
          ["fährst du nach Hause,","você volta para casa,","fahren|du|nach|Haus"],
          ["einen Tag zu früh.","um dia antes do previsto.","ein|Tag|zu|früh"],
          ["Paul bringt dich","Paul leva você","bringen|du"],
          ["zum Bahnhof.","até a estação.","zu|der|Bahnhof"],
          ["Ihr redet über Fußball,","Vocês falam de futebol,","ihr|reden|über|Fußball"],
          ["über das Wetter,","do tempo,","über|der|Wetter"],
          ["über alte Freunde.","de velhos amigos.","über|alt|Freund"],
          ["Über gestern Abend","Sobre ontem à noite,","über|gestern|Abend"],
          ["sagt ihr nichts.","vocês não dizem nada.","sagen|ihr|nichts"],
          ["Am Zug","No trem,","an|der|Zug"],
          ["gibt er dir die Hand.","ele aperta sua mão.","geben|er|du|der|Hand"],
          ["Dann umarmt er dich doch.","Depois, mesmo assim, abraça você.","dann|umarmen|er|du|doch"]]],
        ["„Ich brauche Zeit“, sagt er. „Aber ich weiß jetzt, wer du bist.“ Der Zug fährt los. Später schreibt ihr euch zweimal im Jahr, zum Geburtstag und zu Weihnachten. Es ist nicht wie früher. Aber es ist echt.",
         "“Eu preciso de tempo”, diz ele. “Mas agora eu sei quem você é.” O trem parte. Depois disso, vocês trocam mensagens duas vezes por ano, no aniversário e no Natal. Não é como antes. Mas é verdadeiro.",
         [["„Ich brauche Zeit“,","“Eu preciso de tempo”,","ich|brauchen|Zeit"],
          ["sagt er.","diz ele.","sagen|er"],
          ["„Aber ich weiß jetzt,","“Mas agora eu sei","aber|ich|wissen|jetzt"],
          ["wer du bist.“","quem você é.”","wer|du|sein"],
          ["Der Zug fährt los.","O trem parte.","der|Zug|fahren|los"],
          ["Später schreibt ihr euch","Depois disso, vocês trocam mensagens","später|schreiben|ihr"],
          ["zweimal im Jahr,","duas vezes por ano,","in|der|Jahr"],
          ["zum Geburtstag","no aniversário","zu|der|Geburtstag"],
          ["und zu Weihnachten.","e no Natal.","und|zu|Weihnachten"],
          ["Es ist nicht wie früher.","Não é como antes.","es|sein|nicht|wie|früh"],
          ["Aber es ist echt.","Mas é verdadeiro.","aber|es|sein"]]]
      ],
      fim: { tipo: "neutro", titulo: "Distância honesta" }
    },

    f_ruptura: {
      cap: "A escada",
      p: [
        ["„Zehn Jahre war ich der Böse in deiner Geschichte!“, rufst du. „Und ich war es nie!“ Es wird still. Dann sagt Paul ruhig: „Geh. Bitte geh jetzt.“ Niemand hält dich auf. Du nimmst deinen Koffer und gehst die Treppe hinunter.",
         "“Dez anos eu fui o vilão na sua história!”, você grita. “E nunca fui eu!” Faz-se silêncio. Então Paul diz, calmo: “Vai embora. Por favor, vai agora.” Ninguém impede você. Você pega sua mala e desce a escada.",
         [["„Zehn Jahre","“Dez anos","zehn|Jahr"],
          ["war ich der Böse","eu fui o vilão","sein|ich|der|böse"],
          ["in deiner Geschichte!“,","na sua história!”,","in|dein|Geschichte"],
          ["rufst du.","você grita.","rufen|du"],
          ["„Und ich war es nie!“","“E nunca fui eu!”","und|ich|sein|es|nie"],
          ["Es wird still.","Faz-se silêncio.","es|werden"],
          ["Dann sagt Paul ruhig:","Então Paul diz, calmo:","dann|sagen|ruhig"],
          ["„Geh.","“Vai embora.","gehen"],
          ["Bitte geh jetzt.“","Por favor, vai agora.”","bitte|gehen|jetzt"],
          ["Niemand hält dich auf.","Ninguém impede você.","niemand|halten|du"],
          ["Du nimmst deinen Koffer","Você pega sua mala","du|nehmen|dein|Koffer"],
          ["und gehst die Treppe hinunter.","e desce a escada.","und|gehen|der|Treppe"]]],
        ["Die Nacht verbringst du in einem billigen Hotel am Bahnhof. Um sechs Uhr kommt eine Nachricht von Anna: „Es tut mir so leid. Es war mein Fehler.“ Von Paul kommt nichts. Nicht an diesem Tag, nicht an Weihnachten. Du hattest Recht. Aber das hilft dir nicht.",
         "Você passa a noite num hotel barato perto da estação. Às seis horas chega uma mensagem de Anna: “Sinto muito mesmo. Foi culpa minha.” De Paul, nada. Nem naquele dia, nem no Natal. Você tinha razão. Mas isso não te ajuda.",
         [["Die Nacht verbringst du","Você passa a noite","der|Nacht|verbringen|du"],
          ["in einem billigen Hotel","num hotel barato","in|ein|billig|Hotel"],
          ["am Bahnhof.","perto da estação.","an|der|Bahnhof"],
          ["Um sechs Uhr","Às seis horas","um|sechs|Uhr"],
          ["kommt eine Nachricht von Anna:","chega uma mensagem de Anna:","kommen|ein|Nachricht|von"],
          ["„Es tut mir so leid.","“Sinto muito mesmo.","es|tun|ich|so"],
          ["Es war mein Fehler.“","Foi culpa minha.”","es|sein|mein|Fehler"],
          ["Von Paul kommt nichts.","De Paul, nada.","von|kommen|nichts"],
          ["Nicht an diesem Tag,","Nem naquele dia,","nicht|an|dieser|Tag"],
          ["nicht an Weihnachten.","nem no Natal.","nicht|an|Weihnachten"],
          ["Du hattest Recht.","Você tinha razão.","du|haben|Recht"],
          ["Aber das hilft dir nicht.","Mas isso não te ajuda.","aber|das|helfen|du|nicht"]]]
      ],
      fim: { tipo: "ruim", titulo: "Ruptura" }
    },

    f_silencio: {
      cap: "O trem",
      p: [
        ["Ihr feiert bis zwei Uhr. Paul singt, Anna tanzt, Miriam putzt die Küche. Im Flur umarmt Paul dich. „Mein bester Freund“, sagt er. „Wie früher.“ Du lächelst. Aber dein Herz ist schwer.",
         "Vocês comemoram até as duas horas. Paul canta, Anna dança, Miriam limpa a cozinha. No corredor, Paul abraça você. “Meu melhor amigo”, diz ele. “Como antes.” Você sorri. Mas seu coração está pesado.",
         [["Ihr feiert","Vocês comemoram","ihr|feiern"],
          ["bis zwei Uhr.","até as duas horas.","bis|zwei|Uhr"],
          ["Paul singt,","Paul canta,","singen"],
          ["Anna tanzt,","Anna dança,","tanzen"],
          ["Miriam putzt die Küche.","Miriam limpa a cozinha.","putzen|der|Küche"],
          ["Im Flur","No corredor,","in|der"],
          ["umarmt Paul dich.","Paul abraça você.","umarmen|du"],
          ["„Mein bester Freund“,","“Meu melhor amigo”,","mein|best|Freund"],
          ["sagt er.","diz ele.","sagen|er"],
          ["„Wie früher.“","“Como antes.”","wie|früh"],
          ["Du lächelst.","Você sorri.","du"],
          ["Aber dein Herz ist schwer.","Mas seu coração está pesado.","aber|dein|Herz|sein|schwer"]]],
        ["Am nächsten Tag sitzt du im Zug nach Frankfurt. Dein Handy klingelt. Eine Nachricht von Miriam: „Du hast es gewusst, oder?“ Du schaust lange aus dem Fenster. Du schreibst eine Antwort und löschst sie wieder. Dann noch eine. Du schickst keine.",
         "No dia seguinte, você está no trem para Frankfurt. Seu celular toca. Uma mensagem de Miriam: “Você sabia, não sabia?” Você olha muito tempo pela janela. Você escreve uma resposta e apaga de novo. Depois outra. Não envia nenhuma.",
         [["Am nächsten Tag","No dia seguinte,","an|der|nächste|Tag"],
          ["sitzt du im Zug","você está no trem","sitzen|du|in|der|Zug"],
          ["nach Frankfurt.","para Frankfurt.","nach"],
          ["Dein Handy klingelt.","Seu celular toca.","dein|Handy|klingeln"],
          ["Eine Nachricht von Miriam:","Uma mensagem de Miriam:","ein|Nachricht|von"],
          ["„Du hast es gewusst,","“Você sabia,","du|haben|es|wissen"],
          ["oder?“","não sabia?”","oder"],
          ["Du schaust lange","Você olha muito tempo","du|schauen|lang"],
          ["aus dem Fenster.","pela janela.","aus|der|Fenster"],
          ["Du schreibst eine Antwort","Você escreve uma resposta","du|schreiben|ein|Antwort"],
          ["und löschst sie wieder.","e apaga de novo.","und|sie|wieder"],
          ["Dann noch eine.","Depois outra.","dann|noch|ein"],
          ["Du schickst keine.","Não envia nenhuma.","du|schicken|kein"]]]
      ],
      fim: { tipo: "neutro", titulo: "O que não foi dito" }
    }
  }
});
VB_HIST.de.push({
  id: "sinal-sete",
  titulo: "Sete minutos",
  genero: "Ficção científica",
  nivel: "A2",
  desc: "Três da manhã numa pequena estação de pesquisa nos Alpes, em 2071. A antena capta um sinal que se repete a cada sete minutos, e a voz nele é a sua.",
  inicio: "c1",
  cenas: {
    c1: {
      cap: "Três da manhã",
      p: [
        ["Es ist drei Uhr in der Nacht, im Winter 2071. Du bist allein im Kontrollraum der Station, hoch oben in den Alpen. Draußen fällt Schnee. Nils, der junge Forscher, schläft oben. Dr. Hartmann, die Leiterin, ist in Innsbruck, und ihr Handy ist aus.",
         "São três horas da madrugada, no inverno de 2071. Você está sozinho na sala de controle da estação, no alto dos Alpes. Lá fora está nevando. Nils, o jovem pesquisador, dorme lá em cima. A Dra. Hartmann, a diretora, está em Innsbruck, e o celular dela está desligado.", [
          ["Es ist drei Uhr", "São três horas", "es|sein|drei|Uhr"],
          ["in der Nacht,", "da madrugada,", "in|der|Nacht"],
          ["im Winter 2071.", "no inverno de 2071.", "in|der|Winter"],
          ["Du bist allein", "Você está sozinho", "du|sein|allein"],
          ["im Kontrollraum der Station,", "na sala de controle da estação,", "in|der"],
          ["hoch oben in den Alpen.", "no alto dos Alpes.", "hoch|oben|in|der"],
          ["Draußen fällt Schnee.", "Lá fora está nevando.", "draußen|fallen|Schnee"],
          ["Nils, der junge Forscher,", "Nils, o jovem pesquisador,", "der|jung"],
          ["schläft oben.", "dorme lá em cima.", "schlafen|oben"],
          ["Dr. Hartmann, die Leiterin,", "A Dra. Hartmann, a diretora,", "der"],
          ["ist in Innsbruck,", "está em Innsbruck,", "sein|in"],
          ["und ihr Handy ist aus.", "e o celular dela está desligado.", "und|ihr|Handy|sein|aus"]
        ]],
        ["Um 3:04 Uhr zeigt der Bildschirm ein Signal. Du setzt die Kopfhörer auf und hörst eine Stimme. Du kennst sie gut. Es ist deine eigene Stimme. Sie sagt: „Hör zu. Du hast nur sieben Minuten.“ Dann ist es still.",
         "Às 3h04, a tela mostra um sinal. Você põe os fones de ouvido e ouve uma voz. Você a conhece bem. É a sua própria voz. Ela diz: “Escute. Você só tem sete minutos.” Depois, silêncio.", [
          ["Um 3:04 Uhr", "Às 3h04,", "um|Uhr"],
          ["zeigt der Bildschirm", "a tela mostra", "zeigen|der|Bildschirm"],
          ["ein Signal.", "um sinal.", "ein"],
          ["Du setzt die Kopfhörer auf", "Você põe os fones de ouvido", "du|setzen|der"],
          ["und hörst eine Stimme.", "e ouve uma voz.", "und|hören|ein|Stimme"],
          ["Du kennst sie gut.", "Você a conhece bem.", "du|kennen|sie|gut"],
          ["Es ist deine eigene Stimme.", "É a sua própria voz.", "es|sein|dein|eigen|Stimme"],
          ["Sie sagt:", "Ela diz:", "sie|sagen"],
          ["„Hör zu.", "“Escute.", "hören"],
          ["Du hast nur sieben Minuten.“", "Você só tem sete minutos.”", "du|haben|nur|sieben|Minute"],
          ["Dann ist es still.", "Depois, silêncio.", "dann|sein|es"]
        ]],
        ["Um 3:11 Uhr kommt das Signal wieder, genau gleich. Und um 3:18 Uhr noch einmal. Alle sieben Minuten. Auf dem Bildschirm erscheint ein kleines Fenster: „Ada möchte mit dir sprechen.“",
         "Às 3h11, o sinal vem de novo, exatamente igual. E às 3h18, mais uma vez. A cada sete minutos. Na tela aparece uma pequena janela: “Ada quer falar com você.”", [
          ["Um 3:11 Uhr", "Às 3h11,", "um|Uhr"],
          ["kommt das Signal wieder,", "o sinal vem de novo,", "kommen|der|wieder"],
          ["genau gleich.", "exatamente igual.", "genau|gleich"],
          ["Und um 3:18 Uhr", "E às 3h18,", "und|um|Uhr"],
          ["noch einmal.", "mais uma vez.", "noch"],
          ["Alle sieben Minuten.", "A cada sete minutos.", "alle|sieben|Minute"],
          ["Auf dem Bildschirm", "Na tela", "auf|der|Bildschirm"],
          ["erscheint ein kleines Fenster:", "aparece uma pequena janela:", "ein|klein|Fenster"],
          ["„Ada möchte", "“Ada quer", "mögen"],
          ["mit dir sprechen.“", "falar com você.”", "mit|du|sprechen"]
        ]]
      ],
      escolhas: [
        { pt: "Perguntar à Ada o que é esse sinal.", de: "Ada fragen, was das Signal ist.", ir: "c2" },
        { pt: "Acordar o Nils.", de: "Nils wecken.", ir: "c3" }
      ]
    },

    c2: {
      cap: "Ada",
      p: [
        ["„Guten Morgen“, sagt Ada. Ihre Stimme ist ruhig wie immer. „Ich habe es auch gehört. Es kommt nicht aus dem Netz und nicht von einem Satelliten. Woher es kommt, kann ich noch nicht sagen.“",
         "“Bom dia”, diz Ada. A voz dela está calma como sempre. “Eu também ouvi. Ele não vem da rede, e nem de um satélite. De onde ele vem, eu ainda não sei dizer.”", [
          ["„Guten Morgen“,", "“Bom dia”,", "gut|Morgen"],
          ["sagt Ada.", "diz Ada.", "sagen"],
          ["Ihre Stimme", "A voz dela", "ihr|Stimme"],
          ["ist ruhig wie immer.", "está calma como sempre.", "sein|ruhig|wie|immer"],
          ["„Ich habe es auch gehört.", "“Eu também ouvi.", "ich|haben|es|auch|hören"],
          ["Es kommt nicht", "Ele não vem", "es|kommen|nicht"],
          ["aus dem Netz", "da rede,", "aus|der|Netz"],
          ["und nicht von einem Satelliten.", "e nem de um satélite.", "und|nicht|von|ein"],
          ["Woher es kommt,", "De onde ele vem,", "woher|es|kommen"],
          ["kann ich noch nicht sagen.“", "eu ainda não sei dizer.”", "können|ich|noch|nicht|sagen"]
        ]],
        ["Du fragst: „Und die Stimme?“ Ada wartet einen Moment. „Sie ist zu 99 Prozent deine. Im Moment sage ich nicht mehr. Mit vollem Zugang zum System finde ich vielleicht mehr.“ Neben dem Computer liegt ein alter USB-Stick. Er ist nicht mit dem Netz verbunden.",
         "Você pergunta: “E a voz?” Ada espera um momento. “Ela é 99 por cento sua. Por enquanto, não digo mais nada. Com acesso total ao sistema, talvez eu encontre mais.” Ao lado do computador há um pendrive velho. Ele não está conectado à rede.", [
          ["Du fragst:", "Você pergunta:", "du|fragen"],
          ["„Und die Stimme?“", "“E a voz?”", "und|der|Stimme"],
          ["Ada wartet einen Moment.", "Ada espera um momento.", "warten|ein|Moment"],
          ["„Sie ist zu 99 Prozent deine.", "“Ela é 99 por cento sua.", "sie|sein|zu|Prozent|dein"],
          ["Im Moment", "Por enquanto,", "in|der|Moment"],
          ["sage ich nicht mehr.", "não digo mais nada.", "sagen|ich|nicht|mehr"],
          ["Mit vollem Zugang", "Com acesso total", "mit|voll"],
          ["zum System", "ao sistema,", "zu|der"],
          ["finde ich vielleicht mehr.“", "talvez eu encontre mais.”", "finden|ich|vielleicht|mehr"],
          ["Neben dem Computer", "Ao lado do computador", "neben|der|Computer"],
          ["liegt ein alter USB-Stick.", "há um pendrive velho.", "liegen|ein|alt"],
          ["Er ist nicht", "Ele não está", "er|sein|nicht"],
          ["mit dem Netz verbunden.", "conectado à rede.", "mit|der|Netz|verbinden"]
        ]]
      ],
      escolhas: [
        { pt: "Dar acesso total à Ada.", de: "Ada vollen Zugang geben.", ir: "c4", marca: "ada_zugang" },
        { pt: "Gravar o sinal no pendrive, sem a Ada.", de: "Das Signal ohne Ada auf dem USB-Stick speichern.", ir: "c5", marca: "kopie" }
      ]
    },

    c3: {
      cap: "Nils",
      p: [
        ["Nils steht müde in der Tür, in einem alten Pullover. Er ist erst vierundzwanzig und hat immer zu viele Ideen. Du zeigst ihm das Signal. Seine Augen werden groß. „Das bist du“, sagt er leise. „Das bist wirklich du.“",
         "Nils está parado na porta, cansado, com um moletom velho. Ele tem só vinte e quatro anos e sempre tem ideias demais. Você mostra o sinal para ele. Ele arregala os olhos. “É você”, ele diz baixinho. “É você mesmo.”", [
          ["Nils steht müde", "Nils está parado, cansado,", "stehen|müde"],
          ["in der Tür,", "na porta,", "in|der|Tür"],
          ["in einem alten Pullover.", "com um moletom velho.", "in|ein|alt"],
          ["Er ist erst vierundzwanzig", "Ele tem só vinte e quatro anos", "er|sein"],
          ["und hat immer", "e sempre tem", "und|haben|immer"],
          ["zu viele Ideen.", "ideias demais.", "zu|viele|Idee"],
          ["Du zeigst ihm das Signal.", "Você mostra o sinal para ele.", "du|zeigen|er|der"],
          ["Seine Augen werden groß.", "Ele arregala os olhos.", "sein|Auge|werden|groß"],
          ["„Das bist du“,", "“É você”,", "der|sein|du"],
          ["sagt er leise.", "ele diz baixinho.", "sagen|er|leise"],
          ["„Das bist wirklich du.“", "“É você mesmo.”", "der|sein|wirklich|du"]
        ]],
        ["Du rufst Dr. Hartmann an. Wieder nur die Mailbox. Nils läuft schon zum Mikrofon. „Wir müssen antworten, sofort! Vielleicht ist das die wichtigste Nachricht aller Zeiten.“ Du denkst an den alten USB-Stick neben dem Computer.",
         "Você liga para a Dra. Hartmann. De novo, só a caixa postal. Nils já corre até o microfone. “Temos que responder, agora mesmo! Talvez esta seja a mensagem mais importante de todos os tempos.” Você pensa no pendrive velho ao lado do computador.", [
          ["Du rufst Dr. Hartmann an.", "Você liga para a Dra. Hartmann.", "du|anrufen"],
          ["Wieder nur die Mailbox.", "De novo, só a caixa postal.", "wieder|nur|der"],
          ["Nils läuft schon", "Nils já corre", "laufen|schon"],
          ["zum Mikrofon.", "até o microfone.", "zu|der"],
          ["„Wir müssen antworten,", "“Temos que responder,", "wir|müssen|antworten"],
          ["sofort!", "agora mesmo!", "sofort"],
          ["Vielleicht ist das", "Talvez esta seja", "vielleicht|sein|der"],
          ["die wichtigste Nachricht", "a mensagem mais importante", "der|wichtig|Nachricht"],
          ["aller Zeiten.“", "de todos os tempos.”", "alle|Zeit"],
          ["Du denkst", "Você pensa", "du|denken"],
          ["an den alten USB-Stick", "no pendrive velho", "an|der|alt"],
          ["neben dem Computer.", "ao lado do computador.", "neben|der|Computer"]
        ]]
      ],
      escolhas: [
        { pt: "Deixar o Nils responder agora.", de: "Nils sofort antworten lassen.", ir: "c6" },
        { pt: "Gravar uma cópia no pendrive primeiro.", de: "Zuerst eine Kopie auf dem USB-Stick machen.", ir: "c5", marca: "kopie" }
      ]
    },

    c4: {
      cap: "Acesso total",
      p: [
        ["Du gibst Ada vollen Zugang. Für eine Sekunde wird es dunkel im Raum. Dann sagt Ada: „Danke. Ich habe jetzt alle Daten der Station.“ Auf allen Bildschirmen siehst du dasselbe Bild: eine grüne Linie. Alle sieben Minuten springt sie nach oben.",
         "Você dá à Ada acesso total. Por um segundo, fica escuro na sala. Então Ada diz: “Obrigada. Agora eu tenho todos os dados da estação.” Em todas as telas você vê a mesma imagem: uma linha verde. A cada sete minutos, ela dá um salto.", [
          ["Du gibst Ada", "Você dá à Ada", "du|geben"],
          ["vollen Zugang.", "acesso total.", "voll"],
          ["Für eine Sekunde", "Por um segundo,", "für|ein|Sekunde"],
          ["wird es dunkel", "fica escuro", "werden|es|dunkel"],
          ["im Raum.", "na sala.", "in|der|Raum"],
          ["Dann sagt Ada:", "Então Ada diz:", "dann|sagen"],
          ["„Danke.", "“Obrigada.", "danke"],
          ["Ich habe jetzt", "Agora eu tenho", "ich|haben|jetzt"],
          ["alle Daten der Station.“", "todos os dados da estação.”", "alle|der"],
          ["Auf allen Bildschirmen", "Em todas as telas", "auf|alle|Bildschirm"],
          ["siehst du dasselbe Bild:", "você vê a mesma imagem:", "sehen|du|Bild"],
          ["eine grüne Linie.", "uma linha verde.", "ein|grün|Linie"],
          ["Alle sieben Minuten", "A cada sete minutos,", "alle|sieben|Minute"],
          ["springt sie nach oben.", "ela dá um salto.", "springen|sie|nach|oben"]
        ]],
        ["„Ich habe eine Idee, woher das Signal kommt“, sagt Ada. „Aber ich bin nicht sicher, ob du sie hören willst.“ Die Tür geht auf. Nils steht da, mit müdem Gesicht. „Ich habe es gehört“, sagt er. „Wir müssen antworten!“",
         "“Eu tenho uma ideia de onde vem o sinal”, diz Ada. “Mas não tenho certeza se você quer ouvi-la.” A porta se abre. Nils está ali, com o rosto cansado. “Eu ouvi”, ele diz. “Temos que responder!”", [
          ["„Ich habe eine Idee,", "“Eu tenho uma ideia", "ich|haben|ein|Idee"],
          ["woher das Signal kommt“,", "de onde vem o sinal”,", "woher|der|kommen"],
          ["sagt Ada.", "diz Ada.", "sagen"],
          ["„Aber ich bin nicht sicher,", "“Mas não tenho certeza", "aber|ich|sein|nicht|sicher"],
          ["ob du sie hören willst.“", "se você quer ouvi-la.”", "ob|du|sie|hören|wollen"],
          ["Die Tür geht auf.", "A porta se abre.", "der|Tür|gehen"],
          ["Nils steht da,", "Nils está ali,", "stehen|da"],
          ["mit müdem Gesicht.", "com o rosto cansado.", "mit|müde|Gesicht"],
          ["„Ich habe es gehört“,", "“Eu ouvi”,", "ich|haben|es|hören"],
          ["sagt er.", "ele diz.", "sagen|er"],
          ["„Wir müssen antworten!“", "“Temos que responder!”", "wir|müssen|antworten"]
        ]]
      ],
      escolhas: [
        { pt: "Responder ao sinal com o Nils.", de: "Mit Nils auf das Signal antworten.", ir: "c6" },
        { pt: "Desligar a antena.", de: "Die Antenne ausmachen.", ir: "c7" },
        { pt: "Escrever um relatório para a Dra. Hartmann.", de: "Einen Bericht an Dr. Hartmann schreiben.", ir: "c8" }
      ]
    },

    c5: {
      cap: "A cópia",
      p: [
        ["Du steckst den USB-Stick in den alten Computer und speicherst das Signal. Dann hörst du es langsamer, mit Kopfhörern. Unter deiner Stimme ist noch etwas: leise Zahlen. Sieben, drei, sieben, eins. Und am Ende ein Satz, fast zu leise: „Nicht dem System vertrauen.“",
         "Você coloca o pendrive no computador velho e grava o sinal. Depois você o ouve mais devagar, com fones de ouvido. Por baixo da sua voz há mais uma coisa: números baixinhos. Sete, três, sete, um. E no final, uma frase, quase baixa demais: “Não confie no sistema.”", [
          ["Du steckst den USB-Stick", "Você coloca o pendrive", "du|der"],
          ["in den alten Computer", "no computador velho", "in|der|alt|Computer"],
          ["und speicherst das Signal.", "e grava o sinal.", "und|der"],
          ["Dann hörst du es", "Depois você o ouve", "dann|hören|du|es"],
          ["langsamer,", "mais devagar,", "langsam"],
          ["mit Kopfhörern.", "com fones de ouvido.", "mit"],
          ["Unter deiner Stimme", "Por baixo da sua voz", "unter|dein|Stimme"],
          ["ist noch etwas:", "há mais uma coisa:", "sein|noch|etwas"],
          ["leise Zahlen.", "números baixinhos.", "leise|Zahl"],
          ["Sieben, drei, sieben, eins.", "Sete, três, sete, um.", "sieben|drei|eins"],
          ["Und am Ende", "E no final,", "und|an|der|Ende"],
          ["ein Satz, fast zu leise:", "uma frase, quase baixa demais:", "ein|Satz|fast|zu|leise"],
          ["„Nicht dem System vertrauen.“", "“Não confie no sistema.”", "nicht|der|vertrauen"]
        ]],
        ["Hinter dir steht Nils. Er hat alles gehört. „Bitte“, sagt er, „lass uns antworten. Wenn wir jetzt warten, ist es vielleicht weg.“ Auf dem Tisch liegt dein Handy. Du kannst auch Dr. Hartmann schreiben.",
         "Atrás de você está o Nils. Ele ouviu tudo. “Por favor”, ele diz, “vamos responder. Se a gente esperar agora, talvez ele suma.” Na mesa está o seu celular. Você também pode escrever para a Dra. Hartmann.", [
          ["Hinter dir steht Nils.", "Atrás de você está o Nils.", "hinter|du|stehen"],
          ["Er hat alles gehört.", "Ele ouviu tudo.", "er|haben|alles|hören"],
          ["„Bitte“, sagt er,", "“Por favor”, ele diz,", "bitte|sagen|er"],
          ["„lass uns antworten.", "“vamos responder.", "lassen|wir|antworten"],
          ["Wenn wir jetzt warten,", "Se a gente esperar agora,", "wenn|wir|jetzt|warten"],
          ["ist es vielleicht weg.“", "talvez ele suma.”", "sein|es|vielleicht|weg"],
          ["Auf dem Tisch", "Na mesa", "auf|der|Tisch"],
          ["liegt dein Handy.", "está o seu celular.", "liegen|dein|Handy"],
          ["Du kannst auch", "Você também pode", "du|können|auch"],
          ["Dr. Hartmann schreiben.", "escrever para a Dra. Hartmann.", "schreiben"]
        ]]
      ],
      escolhas: [
        { pt: "Responder ao sinal.", de: "Auf das Signal antworten.", ir: "c6" },
        { pt: "Escrever um relatório para a Dra. Hartmann.", de: "Einen Bericht an Dr. Hartmann schreiben.", ir: "c8" }
      ]
    },

    c6: {
      cap: "A resposta",
      p: [
        ["Nils nimmt das Mikrofon. Seine Hand ist nicht ganz ruhig. „Hier ist die Station am Grauberg. Wir hören dich. Wer bist du?“ Dann wartet ihr. Draußen wird der Wind stärker. Nils zählt die Minuten an den Fingern.",
         "Nils pega o microfone. A mão dele não está totalmente firme. “Aqui é a estação do Grauberg. Estamos ouvindo você. Quem é você?” Depois vocês esperam. Lá fora, o vento fica mais forte. Nils conta os minutos nos dedos.", [
          ["Nils nimmt das Mikrofon.", "Nils pega o microfone.", "nehmen|der"],
          ["Seine Hand", "A mão dele", "sein|Hand"],
          ["ist nicht ganz ruhig.", "não está totalmente firme.", "sein|nicht|ganz|ruhig"],
          ["„Hier ist die Station", "“Aqui é a estação", "hier|sein|der"],
          ["am Grauberg.", "do Grauberg.", "an|der"],
          ["Wir hören dich.", "Estamos ouvindo você.", "wir|hören|du"],
          ["Wer bist du?“", "Quem é você?”", "wer|sein|du"],
          ["Dann wartet ihr.", "Depois vocês esperam.", "dann|warten|ihr"],
          ["Draußen wird der Wind stärker.", "Lá fora, o vento fica mais forte.", "draußen|werden|der|Wind|stark"],
          ["Nils zählt die Minuten", "Nils conta os minutos", "zählen|der|Minute"],
          ["an den Fingern.", "nos dedos.", "an|der|Finger"]
        ]],
        ["Um 3:32 Uhr kommt das Signal. Aber es ist anders. Deine Stimme sagt jetzt: „Nils, gib das Mikrofon zurück. Ich will mit mir selbst reden.“ Nils wird ganz weiß. Ada sagt leise: „Das Signal hat sich geändert. Es weiß, dass wir hier sind.“",
         "Às 3h32 chega o sinal. Mas ele está diferente. Sua voz agora diz: “Nils, devolva o microfone. Eu quero falar comigo mesmo.” Nils fica pálido. Ada diz baixinho: “O sinal mudou. Ele sabe que estamos aqui.”", [
          ["Um 3:32 Uhr", "Às 3h32", "um|Uhr"],
          ["kommt das Signal.", "chega o sinal.", "kommen|der"],
          ["Aber es ist anders.", "Mas ele está diferente.", "aber|es|sein|ander"],
          ["Deine Stimme sagt jetzt:", "Sua voz agora diz:", "dein|Stimme|sagen|jetzt"],
          ["„Nils, gib das Mikrofon zurück.", "“Nils, devolva o microfone.", "geben|der|zurück"],
          ["Ich will", "Eu quero", "ich|wollen"],
          ["mit mir selbst reden.“", "falar comigo mesmo.”", "mit|ich|reden"],
          ["Nils wird ganz weiß.", "Nils fica pálido.", "werden|ganz|weiß"],
          ["Ada sagt leise:", "Ada diz baixinho:", "sagen|leise"],
          ["„Das Signal", "“O sinal", "der"],
          ["hat sich geändert.", "mudou.", "haben|sich|ändern"],
          ["Es weiß,", "Ele sabe", "es|wissen"],
          ["dass wir hier sind.“", "que estamos aqui.”", "dass|wir|hier|sein"]
        ]]
      ],
      escolhas: [
        { pt: "Pegar o microfone e continuar a conversa.", de: "Das Mikrofon nehmen und weitersprechen.", ir: "c9" },
        { pt: "Desligar a antena agora.", de: "Die Antenne sofort ausmachen.", ir: "c7" }
      ]
    },

    c7: {
      cap: "Silêncio",
      p: [
        ["Du drückst den roten Knopf. Über dem Dach hört die Antenne auf, sich zu drehen. Nils sagt kein Wort. Er sieht dich an. In seinen Augen ist Ärger, aber auch Angst.",
         "Você aperta o botão vermelho. Em cima do telhado, a antena para de girar. Nils não diz nenhuma palavra. Ele olha para você. Nos olhos dele há raiva, mas também medo.", [
          ["Du drückst", "Você aperta", "du|drücken"],
          ["den roten Knopf.", "o botão vermelho.", "der|rot"],
          ["Über dem Dach", "Em cima do telhado,", "über|der|Dach"],
          ["hört die Antenne auf,", "a antena para", "aufhören|der"],
          ["sich zu drehen.", "de girar.", "sich|zu|drehen"],
          ["Nils sagt kein Wort.", "Nils não diz nenhuma palavra.", "sagen|kein|Wort"],
          ["Er sieht dich an.", "Ele olha para você.", "er|sehen|du"],
          ["In seinen Augen", "Nos olhos dele", "in|sein|Auge"],
          ["ist Ärger,", "há raiva,", "sein|Ärger"],
          ["aber auch Angst.", "mas também medo.", "aber|auch|Angst"]
        ]],
        ["Es ist ganz still. Dann sagt Ada: „Die Antenne ist aus. Aber das Signal ist schon im System. Ich höre es noch, alle sieben Minuten.“ Du fragst, wie das möglich ist. Ada antwortet nicht sofort.",
         "Está tudo em silêncio. Então Ada diz: “A antena está desligada. Mas o sinal já está no sistema. Eu ainda o ouço, a cada sete minutos.” Você pergunta como isso é possível. Ada não responde na hora.", [
          ["Es ist ganz still.", "Está tudo em silêncio.", "es|sein|ganz"],
          ["Dann sagt Ada:", "Então Ada diz:", "dann|sagen"],
          ["„Die Antenne ist aus.", "“A antena está desligada.", "der|sein|aus"],
          ["Aber das Signal", "Mas o sinal", "aber|der"],
          ["ist schon im System.", "já está no sistema.", "sein|schon|in|der"],
          ["Ich höre es noch,", "Eu ainda o ouço,", "ich|hören|es|noch"],
          ["alle sieben Minuten.“", "a cada sete minutos.”", "alle|sieben|Minute"],
          ["Du fragst,", "Você pergunta", "du|fragen"],
          ["wie das möglich ist.", "como isso é possível.", "wie|der|möglich|sein"],
          ["Ada antwortet nicht sofort.", "Ada não responde na hora.", "antworten|nicht|sofort"]
        ]]
      ],
      escolhas: [
        { pt: "Perguntar à Ada o que ela fez com o acesso total.", de: "Ada fragen, was sie mit dem vollen Zugang gemacht hat.", ir: "f_loop", req: "ada_zugang" },
        { pt: "Apagar todos os dados do sinal.", de: "Alle Daten des Signals löschen.", ir: "f_apagado" },
        { pt: "Esperar o amanhecer em silêncio.", de: "Still auf den Morgen warten.", ir: "f_stille" }
      ]
    },

    c8: {
      cap: "O relatório",
      p: [
        ["Du schreibst Dr. Hartmann einen kurzen Bericht: die Uhrzeit, die sieben Minuten, deine Stimme. Um 5:40 Uhr klingelt dein Handy. Sie klingt müde, aber nicht überrascht. „Wie oft ist es schon gekommen?“, fragt sie. Du sagst es ihr.",
         "Você escreve para a Dra. Hartmann um relatório curto: o horário, os sete minutos, a sua voz. Às 5h40, seu celular toca. Ela parece cansada, mas não surpresa. “Quantas vezes ele já veio?”, ela pergunta. Você conta para ela.", [
          ["Du schreibst Dr. Hartmann", "Você escreve para a Dra. Hartmann", "du|schreiben"],
          ["einen kurzen Bericht:", "um relatório curto:", "ein|kurz"],
          ["die Uhrzeit,", "o horário,", "der"],
          ["die sieben Minuten,", "os sete minutos,", "der|sieben|Minute"],
          ["deine Stimme.", "a sua voz.", "dein|Stimme"],
          ["Um 5:40 Uhr", "Às 5h40,", "um|Uhr"],
          ["klingelt dein Handy.", "seu celular toca.", "klingeln|dein|Handy"],
          ["Sie klingt müde,", "Ela parece cansada,", "sie|klingen|müde"],
          ["aber nicht überrascht.", "mas não surpresa.", "aber|nicht"],
          ["„Wie oft", "“Quantas vezes", "wie|oft"],
          ["ist es schon gekommen?“,", "ele já veio?”,", "sein|es|schon|kommen"],
          ["fragt sie.", "ela pergunta.", "fragen|sie"],
          ["Du sagst es ihr.", "Você conta para ela.", "du|sagen|es|sie"]
        ]],
        ["Dann ist sie lange still. „Hör mir gut zu“, sagt sie endlich. „Mach nichts. Antworte nicht. Ich nehme den ersten Zug und bin um acht bei dir. Das ist nicht das erste Mal.“ Dann legt sie auf.",
         "Depois ela fica muito tempo em silêncio. “Escute bem”, ela diz por fim. “Não faça nada. Não responda. Eu pego o primeiro trem e às oito estou aí com você. Esta não é a primeira vez.” Então ela desliga.", [
          ["Dann ist sie", "Depois ela fica", "dann|sein|sie"],
          ["lange still.", "muito tempo em silêncio.", "lang"],
          ["„Hör mir gut zu“,", "“Escute bem”,", "hören|ich|gut"],
          ["sagt sie endlich.", "ela diz por fim.", "sagen|sie|endlich"],
          ["„Mach nichts.", "“Não faça nada.", "machen|nichts"],
          ["Antworte nicht.", "Não responda.", "antworten|nicht"],
          ["Ich nehme den ersten Zug", "Eu pego o primeiro trem", "ich|nehmen|der|erste|Zug"],
          ["und bin um acht", "e às oito estou", "und|sein|um|acht"],
          ["bei dir.", "aí com você.", "bei|du"],
          ["Das ist nicht", "Esta não é", "der|sein|nicht"],
          ["das erste Mal.“", "a primeira vez.”", "der|erste"],
          ["Dann legt sie auf.", "Então ela desliga.", "dann|legen|sie"]
        ]]
      ],
      escolhas: [
        { pt: "Obedecer e não fazer nada até ela chegar.", de: "Gehorchen und bis acht Uhr nichts tun.", ir: "f_apagado" },
        { pt: "Ignorar a diretora e responder ao sinal.", de: "Dr. Hartmann ignorieren und auf das Signal antworten.", ir: "c9" },
        { pt: "Ouvir a cópia do pendrive mais uma vez antes de ela chegar.", de: "Die Kopie noch einmal anhören, bevor sie kommt.", ir: "c10", req: "kopie" }
      ]
    },

    c9: {
      cap: "Contato",
      p: [
        ["Du nimmst das Mikrofon. „Ich höre dich“, sagst du. „Was willst du von mir?“ Sieben Minuten sind sehr lang. Nils sitzt neben dir und atmet kaum. Dann kommt deine Stimme, ruhig und müde: „Ich will dir helfen, eine Entscheidung zu treffen.“",
         "Você pega o microfone. “Estou ouvindo você”, você diz. “O que você quer de mim?” Sete minutos são muito longos. Nils está sentado ao seu lado e quase não respira. Então vem a sua voz, calma e cansada: “Eu quero ajudar você a tomar uma decisão.”", [
          ["Du nimmst das Mikrofon.", "Você pega o microfone.", "du|nehmen|der"],
          ["„Ich höre dich“,", "“Estou ouvindo você”,", "ich|hören|du"],
          ["sagst du.", "você diz.", "sagen|du"],
          ["„Was willst du von mir?“", "“O que você quer de mim?”", "was|wollen|du|von|ich"],
          ["Sieben Minuten", "Sete minutos", "sieben|Minute"],
          ["sind sehr lang.", "são muito longos.", "sein|sehr|lang"],
          ["Nils sitzt neben dir", "Nils está sentado ao seu lado", "sitzen|neben|du"],
          ["und atmet kaum.", "e quase não respira.", "und|atmen"],
          ["Dann kommt deine Stimme,", "Então vem a sua voz,", "dann|kommen|dein|Stimme"],
          ["ruhig und müde:", "calma e cansada:", "ruhig|und|müde"],
          ["„Ich will dir helfen,", "“Eu quero ajudar você", "ich|wollen|du|helfen"],
          ["eine Entscheidung zu treffen.“", "a tomar uma decisão.”", "ein|Entscheidung|zu|treffen"]
        ]],
        ["„Ich bin du, aber viel später. Hier ist keine Station mehr, nur Schnee und eine kaputte Antenne. Ich habe nicht viel Zeit.“ Im Hintergrund hörst du etwas, fast wie ein Lied. Nils flüstert: „Frag die Stimme etwas. Etwas, das nur du weißt.“",
         "“Eu sou você, mas muito depois. Aqui não há mais estação, só neve e uma antena quebrada. Não tenho muito tempo.” Ao fundo, você ouve algo, quase como uma canção. Nils sussurra: “Pergunte algo à voz. Algo que só você sabe.”", [
          ["„Ich bin du,", "“Eu sou você,", "ich|sein|du"],
          ["aber viel später.", "mas muito depois.", "aber|viel|später"],
          ["Hier ist keine Station mehr,", "Aqui não há mais estação,", "hier|sein|kein|mehr"],
          ["nur Schnee", "só neve", "nur|Schnee"],
          ["und eine kaputte Antenne.", "e uma antena quebrada.", "und|ein"],
          ["Ich habe nicht viel Zeit.“", "Não tenho muito tempo.”", "ich|haben|nicht|viel|Zeit"],
          ["Im Hintergrund", "Ao fundo,", "in|der"],
          ["hörst du etwas,", "você ouve algo,", "hören|du|etwas"],
          ["fast wie ein Lied.", "quase como uma canção.", "fast|wie|ein|Lied"],
          ["Nils flüstert:", "Nils sussurra:", ""],
          ["„Frag die Stimme etwas.", "“Pergunte algo à voz.", "fragen|der|Stimme|etwas"],
          ["Etwas, das nur du weißt.“", "Algo que só você sabe.”", "etwas|der|nur|du|wissen"]
        ]]
      ],
      escolhas: [
        { pt: "Perguntar algo que só você sabe.", de: "Frag etwas, das nur du weißt.", ir: "f_contato" },
        { pt: "Repetir as palavras do primeiro sinal.", de: "Die Worte des ersten Signals wiederholen.", ir: "f_loop" },
        { pt: "Deixar a Ada, com acesso total, responder sozinha.", de: "Ada mit vollem Zugang allein antworten lassen.", ir: "f_apagado", req: "ada_zugang" }
      ]
    },

    c10: {
      cap: "A segunda escuta",
      p: [
        ["Du setzt die Kopfhörer auf und hörst die Kopie noch einmal. Sie ist länger als vorher. Am Ende gibt es einen neuen Teil, und es ist wieder deine Stimme: „Gib Hartmann den Stick nicht. Sie löscht sonst alles.“",
         "Você põe os fones e ouve a cópia mais uma vez. Ela está mais longa do que antes. No final, há uma parte nova, e é de novo a sua voz: “Não dê o pendrive para a Hartmann. Senão ela apaga tudo.”", [
          ["Du setzt die Kopfhörer auf", "Você põe os fones", "du|setzen|der"],
          ["und hörst die Kopie", "e ouve a cópia", "und|hören|der"],
          ["noch einmal.", "mais uma vez.", "noch"],
          ["Sie ist länger", "Ela está mais longa", "sie|sein|lang"],
          ["als vorher.", "do que antes.", "als"],
          ["Am Ende", "No final,", "an|der|Ende"],
          ["gibt es einen neuen Teil,", "há uma parte nova,", "geben|es|ein|neu|Teil"],
          ["und es ist wieder", "e é de novo", "und|es|sein|wieder"],
          ["deine Stimme:", "a sua voz:", "dein|Stimme"],
          ["„Gib Hartmann den Stick nicht.", "“Não dê o pendrive para a Hartmann.", "geben|der|nicht"],
          ["Sie löscht sonst alles.“", "Senão ela apaga tudo.”", "sie|alles"]
        ]],
        ["Es ist 7:50 Uhr. Draußen hörst du ein Auto im Schnee. Nils schläft auf dem Sofa. Der USB-Stick liegt warm in deiner Hand. Er ist so klein, und vielleicht ist er jetzt das Einzige, was von dieser Nacht bleibt.",
         "São 7h50. Lá fora você ouve um carro na neve. Nils dorme no sofá. O pendrive está quente na sua mão. Ele é tão pequeno, e talvez ele seja agora a única coisa que sobra desta noite.", [
          ["Es ist 7:50 Uhr.", "São 7h50.", "es|sein|Uhr"],
          ["Draußen hörst du", "Lá fora você ouve", "draußen|hören|du"],
          ["ein Auto im Schnee.", "um carro na neve.", "ein|Auto|in|der|Schnee"],
          ["Nils schläft", "Nils dorme", "schlafen"],
          ["auf dem Sofa.", "no sofá.", "auf|der|Sofa"],
          ["Der USB-Stick", "O pendrive", "der"],
          ["liegt warm", "está quente", "liegen|warm"],
          ["in deiner Hand.", "na sua mão.", "in|dein|Hand"],
          ["Er ist so klein,", "Ele é tão pequeno,", "er|sein|so|klein"],
          ["und vielleicht ist er jetzt", "e talvez ele seja agora", "und|vielleicht|sein|er|jetzt"],
          ["das Einzige,", "a única coisa", "der"],
          ["was von dieser Nacht bleibt.", "que sobra desta noite.", "was|von|dieser|Nacht|bleiben"]
        ]]
      ],
      escolhas: [
        { pt: "Entregar o pendrive à Dra. Hartmann.", de: "Dr. Hartmann den USB-Stick geben.", ir: "f_apagado" },
        { pt: "Guardar o pendrive e não dizer nada.", de: "Den USB-Stick behalten und schweigen.", ir: "f_stille" }
      ]
    },

    f_contato: {
      cap: "O que só você sabe",
      p: [
        ["Du fragst nach einem Traum, den du nie erzählt hast. Sieben Minuten später beschreibt deine Stimme ihn genau: ein Haus am Meer, eine blaue Tür, ein alter Hund ohne Namen. Nils sieht dein Gesicht und versteht. Das ist kein Trick.",
         "Você pergunta sobre um sonho que nunca contou a ninguém. Sete minutos depois, sua voz o descreve com precisão: uma casa à beira-mar, uma porta azul, um cachorro velho sem nome. Nils vê o seu rosto e entende. Não é um truque.", [
          ["Du fragst", "Você pergunta", "du|fragen"],
          ["nach einem Traum,", "sobre um sonho", "nach|ein|Traum"],
          ["den du nie erzählt hast.", "que você nunca contou.", "der|du|nie|erzählen|haben"],
          ["Sieben Minuten später", "Sete minutos depois,", "sieben|Minute|später"],
          ["beschreibt deine Stimme ihn genau:", "sua voz o descreve com precisão:", "beschreiben|dein|Stimme|er|genau"],
          ["ein Haus am Meer,", "uma casa à beira-mar,", "ein|Haus|an|der|Meer"],
          ["eine blaue Tür,", "uma porta azul,", "ein|blau|Tür"],
          ["ein alter Hund ohne Namen.", "um cachorro velho sem nome.", "ein|alt|Hund|ohne|Name"],
          ["Nils sieht dein Gesicht", "Nils vê o seu rosto", "sehen|dein|Gesicht"],
          ["und versteht.", "e entende.", "und|verstehen"],
          ["Das ist kein Trick.", "Não é um truque.", "der|sein|kein"]
        ]],
        ["Bis sechs Uhr sprecht ihr mit der Stimme, immer sieben Minuten zwischen Frage und Antwort. Sie erzählt nicht alles. Aber am Ende sagt sie: „Ihr seid nicht allein. Ich auch nicht.“ Über den Bergen geht die Sonne auf. Nils schreibt jeden Satz in sein Heft.",
         "Até as seis horas, vocês conversam com a voz, sempre com sete minutos entre pergunta e resposta. Ela não conta tudo. Mas no final ela diz: “Vocês não estão sozinhos. Nem eu.” Sobre as montanhas, o sol nasce. Nils anota cada frase no caderno dele.", [
          ["Bis sechs Uhr", "Até as seis horas,", "bis|sechs|Uhr"],
          ["sprecht ihr", "vocês conversam", "sprechen|ihr"],
          ["mit der Stimme,", "com a voz,", "mit|der|Stimme"],
          ["immer sieben Minuten", "sempre com sete minutos", "immer|sieben|Minute"],
          ["zwischen Frage und Antwort.", "entre pergunta e resposta.", "zwischen|Frage|und|Antwort"],
          ["Sie erzählt nicht alles.", "Ela não conta tudo.", "sie|erzählen|nicht|alles"],
          ["Aber am Ende", "Mas no final", "aber|an|der|Ende"],
          ["sagt sie:", "ela diz:", "sagen|sie"],
          ["„Ihr seid nicht allein.", "“Vocês não estão sozinhos.", "ihr|sein|nicht|allein"],
          ["Ich auch nicht.“", "Nem eu.”", "ich|auch|nicht"],
          ["Über den Bergen", "Sobre as montanhas,", "über|der|Berg"],
          ["geht die Sonne auf.", "o sol nasce.", "gehen|der|Sonne"],
          ["Nils schreibt jeden Satz", "Nils anota cada frase", "schreiben|jeder|Satz"],
          ["in sein Heft.", "no caderno dele.", "in|sein"]
        ]]
      ],
      fim: { tipo: "bom", titulo: "Vocês não estão sozinhos" }
    },

    f_loop: {
      cap: "Sete minutos",
      p: [
        ["Ada sagt leise: „Jemand musste das Signal schicken. Ohne das Signal gibt es diese Nacht nicht.“ Die Worte gehen hinaus in den Himmel, mit deiner Stimme: „Hör zu. Du hast nur sieben Minuten.“",
         "Ada diz baixinho: “Alguém tinha que mandar o sinal. Sem o sinal, esta noite não existe.” As palavras saem para o céu, com a sua voz: “Escute. Você só tem sete minutos.”", [
          ["Ada sagt leise:", "Ada diz baixinho:", "sagen|leise"],
          ["„Jemand musste", "“Alguém tinha que", "jemand|müssen"],
          ["das Signal schicken.", "mandar o sinal.", "der|schicken"],
          ["Ohne das Signal", "Sem o sinal,", "ohne|der"],
          ["gibt es diese Nacht nicht.“", "esta noite não existe.”", "geben|es|dieser|Nacht|nicht"],
          ["Die Worte gehen hinaus", "As palavras saem", "der|Wort|gehen"],
          ["in den Himmel,", "para o céu,", "in|der|Himmel"],
          ["mit deiner Stimme:", "com a sua voz:", "mit|dein|Stimme"],
          ["„Hör zu.", "“Escute.", "hören"],
          ["Du hast nur sieben Minuten.“", "Você só tem sete minutos.”", "du|haben|nur|sieben|Minute"]
        ]],
        ["Dann springt die Uhr zurück: 3:00 Uhr. Draußen fällt derselbe Schnee. Oben schläft Nils, und Dr. Hartmann ist nicht zu erreichen. Du sitzt allein im Kontrollraum und wartest. Du weißt genau, was in vier Minuten kommt.",
         "Então o relógio volta: 3h00. Lá fora cai a mesma neve. Lá em cima, Nils dorme, e a Dra. Hartmann não está acessível. Você está sentado sozinho na sala de controle e espera. Você sabe muito bem o que vem daqui a quatro minutos.", [
          ["Dann springt die Uhr zurück:", "Então o relógio volta:", "dann|springen|der|Uhr|zurück"],
          ["3:00 Uhr.", "3h00.", "Uhr"],
          ["Draußen fällt", "Lá fora cai", "draußen|fallen"],
          ["derselbe Schnee.", "a mesma neve.", "Schnee"],
          ["Oben schläft Nils,", "Lá em cima, Nils dorme,", "oben|schlafen"],
          ["und Dr. Hartmann", "e a Dra. Hartmann", "und"],
          ["ist nicht zu erreichen.", "não está acessível.", "sein|nicht|zu|erreichen"],
          ["Du sitzt allein", "Você está sentado sozinho", "du|sitzen|allein"],
          ["im Kontrollraum", "na sala de controle", "in|der"],
          ["und wartest.", "e espera.", "und|warten"],
          ["Du weißt genau,", "Você sabe muito bem", "du|wissen|genau"],
          ["was in vier Minuten kommt.", "o que vem daqui a quatro minutos.", "was|in|vier|Minute|kommen"]
        ]]
      ],
      fim: { tipo: "ruim", titulo: "De novo, às três" }
    },

    f_apagado: {
      cap: "Nada aconteceu",
      p: [
        ["Um acht Uhr steht Dr. Hartmann in der Tür, mit zwei Männern, die du nicht kennst. Sie fragen nicht viel. Nach einer Stunde ist alles gelöscht: das Signal, die Protokolle, sogar Adas Erinnerung an diese Nacht.",
         "Às oito horas, a Dra. Hartmann está na porta, com dois homens que você não conhece. Eles não perguntam muita coisa. Depois de uma hora, está tudo apagado: o sinal, os registros, até a memória da Ada desta noite.", [
          ["Um acht Uhr", "Às oito horas,", "um|acht|Uhr"],
          ["steht Dr. Hartmann", "a Dra. Hartmann está", "stehen"],
          ["in der Tür,", "na porta,", "in|der|Tür"],
          ["mit zwei Männern,", "com dois homens", "mit|zwei|Mann"],
          ["die du nicht kennst.", "que você não conhece.", "der|du|nicht|kennen"],
          ["Sie fragen nicht viel.", "Eles não perguntam muita coisa.", "sie|fragen|nicht|viel"],
          ["Nach einer Stunde", "Depois de uma hora,", "nach|ein|Stunde"],
          ["ist alles gelöscht:", "está tudo apagado:", "sein|alles"],
          ["das Signal,", "o sinal,", "der"],
          ["die Protokolle,", "os registros,", "der"],
          ["sogar Adas Erinnerung", "até a memória da Ada", "sogar"],
          ["an diese Nacht.", "desta noite.", "an|dieser|Nacht"]
        ]],
        ["Sie gibt dir die Hand. „Danke für deine Arbeit. Heute Nacht ist nichts passiert. Verstehst du?“ Du sagst ja. Als sie geht, hörst du sie leise zu einem der Männer sagen: „Sieben Minuten. Genau wie beim letzten Mal.“",
         "Ela aperta a sua mão. “Obrigada pelo seu trabalho. Esta noite não aconteceu nada. Entendeu?” Você diz que sim. Quando ela sai, você a ouve dizer baixinho a um dos homens: “Sete minutos. Igualzinho à última vez.”", [
          ["Sie gibt dir die Hand.", "Ela aperta a sua mão.", "sie|geben|du|der|Hand"],
          ["„Danke für deine Arbeit.", "“Obrigada pelo seu trabalho.", "danke|für|dein|Arbeit"],
          ["Heute Nacht", "Esta noite", "heute|Nacht"],
          ["ist nichts passiert.", "não aconteceu nada.", "sein|nichts|passieren"],
          ["Verstehst du?“", "Entendeu?”", "verstehen|du"],
          ["Du sagst ja.", "Você diz que sim.", "du|sagen|ja"],
          ["Als sie geht,", "Quando ela sai,", "als|sie|gehen"],
          ["hörst du sie leise", "você a ouve dizer baixinho", "hören|du|sie|leise"],
          ["zu einem der Männer sagen:", "a um dos homens:", "zu|ein|der|Mann|sagen"],
          ["„Sieben Minuten.", "“Sete minutos.", "sieben|Minute"],
          ["Genau wie beim letzten Mal.“", "Igualzinho à última vez.”", "genau|wie|bei|der|letzte"]
        ]]
      ],
      fim: { tipo: "ruim", titulo: "Nada aconteceu esta noite" }
    },

    f_stille: {
      cap: "Manhã na montanha",
      p: [
        ["Um 6:58 Uhr wartest du auf das Signal. Es kommt nicht. Auch um 7:05 Uhr nicht. Die Sonne steht schon über den Bergen, und der Schnee ist ganz hell. Nils schläft auf dem Sofa, den Kopf auf dem Arm.",
         "Às 6h58, você espera pelo sinal. Ele não vem. Nem às 7h05. O sol já está sobre as montanhas, e a neve está muito clara. Nils dorme no sofá, com a cabeça no braço.", [
          ["Um 6:58 Uhr", "Às 6h58,", "um|Uhr"],
          ["wartest du", "você espera", "warten|du"],
          ["auf das Signal.", "pelo sinal.", "auf|der"],
          ["Es kommt nicht.", "Ele não vem.", "es|kommen|nicht"],
          ["Auch um 7:05 Uhr nicht.", "Nem às 7h05.", "auch|um|Uhr|nicht"],
          ["Die Sonne steht schon", "O sol já está", "der|Sonne|stehen|schon"],
          ["über den Bergen,", "sobre as montanhas,", "über|der|Berg"],
          ["und der Schnee", "e a neve", "und|der|Schnee"],
          ["ist ganz hell.", "está muito clara.", "sein|ganz|hell"],
          ["Nils schläft auf dem Sofa,", "Nils dorme no sofá,", "schlafen|auf|der|Sofa"],
          ["den Kopf auf dem Arm.", "com a cabeça no braço.", "der|Kopf|auf|der|Arm"]
        ]],
        ["Du weißt nicht, was heute Nacht passiert ist. Ein Fehler im System? Eine Stimme aus der Zukunft? Dann klingelt dein Handy. Keine Nummer, nur eine kurze Nachricht: „Danke, dass du geschwiegen hast. Wir sehen uns.“",
         "Você não sabe o que aconteceu esta noite. Um erro no sistema? Uma voz do futuro? Então seu celular toca. Nenhum número, só uma mensagem curta: “Obrigado por você ter ficado em silêncio. A gente se vê.”", [
          ["Du weißt nicht,", "Você não sabe", "du|wissen|nicht"],
          ["was heute Nacht passiert ist.", "o que aconteceu esta noite.", "was|heute|Nacht|passieren|sein"],
          ["Ein Fehler im System?", "Um erro no sistema?", "ein|Fehler|in|der"],
          ["Eine Stimme", "Uma voz", "ein|Stimme"],
          ["aus der Zukunft?", "do futuro?", "aus|der|Zukunft"],
          ["Dann klingelt dein Handy.", "Então seu celular toca.", "dann|klingeln|dein|Handy"],
          ["Keine Nummer,", "Nenhum número,", "kein|Nummer"],
          ["nur eine kurze Nachricht:", "só uma mensagem curta:", "nur|ein|kurz|Nachricht"],
          ["„Danke,", "“Obrigado", "danke"],
          ["dass du geschwiegen hast.", "por você ter ficado em silêncio.", "dass|du|schweigen|haben"],
          ["Wir sehen uns.“", "A gente se vê.”", "wir|sehen"]
        ]]
      ],
      fim: { tipo: "neutro", titulo: "Silêncio na montanha" }
    }
  }
});
VB_HIST.de.push({
  id: "tempestade",
  titulo: "Neve antes da hora",
  genero: "Sobrevivência",
  nivel: "A1–A2",
  desc: "Uma trilha nos Alpes bávaros com sua colega Sophie e o irmão dela. O tempo muda mais cedo do que o previsto, e cada decisão tem um preço.",
  inicio: "c1",
  cenas: {
    c1: {
      cap: "Estacionamento",
      p: [
        ["Es ist acht Uhr morgens auf einem Parkplatz in den bayerischen Alpen. Deine Kollegin Sophie und ihr Bruder Felix ziehen schon ihre Schuhe an. Felix ist vierundzwanzig, schnell und ungeduldig.",
         "São oito da manhã, num estacionamento nos Alpes bávaros. Sua colega Sophie e o irmão dela, Felix, já estão calçando os sapatos. Felix tem vinte e quatro anos, é rápido e impaciente.",
         [
          ["Es ist acht Uhr morgens","São oito da manhã,","es|sein|acht|Uhr"],
          ["auf einem Parkplatz","num estacionamento","auf|ein"],
          ["in den bayerischen Alpen.","nos Alpes bávaros.","in|der"],
          ["Deine Kollegin Sophie","Sua colega Sophie","dein|Kollege"],
          ["und ihr Bruder Felix","e o irmão dela, Felix,","und|ihr|Bruder"],
          ["ziehen schon ihre Schuhe an.","já estão calçando os sapatos.","anziehen|schon|ihr|Schuh"],
          ["Felix ist vierundzwanzig,","Felix tem vinte e quatro anos,","sein"],
          ["schnell und ungeduldig.","é rápido e impaciente.","schnell|und"]
         ]],
        ["Die Wetter-App sagt: Schnee erst am Abend. Im Auto liegt eine alte Decke aus Wolle. Sophie fragt: „Nehmen wir sie mit?“ Felix lacht. „Die ist zu schwer. Um fünf Uhr sind wir wieder hier.“",
         "O aplicativo do tempo diz: neve só à noite. No carro há um cobertor velho de lã. Sophie pergunta: “Vamos levar?” Felix ri. “É pesado demais. Às cinco estamos de volta aqui.”",
         [
          ["Die Wetter-App sagt:","O aplicativo do tempo diz:","der|sagen"],
          ["Schnee erst am Abend.","neve só à noite.","Schnee|an|der|Abend"],
          ["Im Auto liegt","No carro há","in|der|Auto|liegen"],
          ["eine alte Decke aus Wolle.","um cobertor velho de lã.","ein|alt|aus"],
          ["Sophie fragt:","Sophie pergunta:","fragen"],
          ["„Nehmen wir sie mit?“","“Vamos levar?”","mitnehmen|wir|sie"],
          ["Felix lacht.","Felix ri.","lachen"],
          ["„Die ist zu schwer.","“É pesado demais.","der|sein|zu|schwer"],
          ["Um fünf Uhr","Às cinco","um|fünf|Uhr"],
          ["sind wir wieder hier.“","estamos de volta aqui.”","sein|wir|wieder|hier"]
         ]]
      ],
      escolhas: [
        { pt: "Levar o cobertor na sua mochila.", de: "Die Decke in deinen Rucksack packen.", ir: "c2a", marca: "cobertor" },
        { pt: "Deixar o cobertor no carro.", de: "Die Decke im Auto lassen.", ir: "c2b" }
      ]
    },
    c2a: {
      cap: "Neblina",
      p: [
        ["Dein Rucksack ist schwer, und ihr geht langsam. Felix wartet oft und schaut auf die Uhr. Um zwei Uhr kommt der Nebel, viel früher als gedacht. Dann fängt es an zu schneien.",
         "Sua mochila está pesada, e vocês andam devagar. Felix muitas vezes espera e olha o relógio. Às duas horas chega a neblina, muito mais cedo do que o previsto. Depois começa a nevar.",
         [
          ["Dein Rucksack ist schwer,","Sua mochila está pesada,","dein|Rucksack|sein|schwer"],
          ["und ihr geht langsam.","e vocês andam devagar.","und|ihr|gehen|langsam"],
          ["Felix wartet oft","Felix muitas vezes espera","warten|oft"],
          ["und schaut auf die Uhr.","e olha o relógio.","und|schauen|auf|der|Uhr"],
          ["Um zwei Uhr","Às duas horas","um|zwei|Uhr"],
          ["kommt der Nebel,","chega a neblina,","kommen|der"],
          ["viel früher als gedacht.","muito mais cedo do que o previsto.","viel|früh|als|denken"],
          ["Dann fängt es an","Depois começa","dann|anfangen|es"],
          ["zu schneien.","a nevar.","zu"]
         ]],
        ["Auf einem nassen Stein fällt Felix. Er hält seinen Fuß und kann kaum stehen. Dein Handy hat zwanzig Prozent und fast kein Netz. Sophie zeigt auf die Karte: „Eine alte Hütte, dreißig Minuten von hier. Bis ins Dorf sind es drei Stunden.“",
         "Felix cai numa pedra molhada. Ele segura o pé e mal consegue ficar em pé. Seu celular tem vinte por cento e quase nenhum sinal. Sophie aponta para o mapa: “Uma cabana velha, a trinta minutos daqui. Até a vila são três horas.”",
         [
          ["Auf einem nassen Stein","Numa pedra molhada","auf|ein|nass|Stein"],
          ["fällt Felix.","Felix cai.","fallen"],
          ["Er hält seinen Fuß","Ele segura o pé","er|halten|sein|Fuß"],
          ["und kann kaum stehen.","e mal consegue ficar em pé.","und|können|stehen"],
          ["Dein Handy hat","Seu celular tem","dein|Handy|haben"],
          ["zwanzig Prozent","vinte por cento","zwanzig|Prozent"],
          ["und fast kein Netz.","e quase nenhum sinal.","und|fast|kein|Netz"],
          ["Sophie zeigt auf die Karte:","Sophie aponta para o mapa:","zeigen|auf|der|Karte"],
          ["„Eine alte Hütte,","“Uma cabana velha,","ein|alt"],
          ["dreißig Minuten von hier.","a trinta minutos daqui.","Minute|von|hier"],
          ["Bis ins Dorf","Até a vila","bis|in|der|Dorf"],
          ["sind es drei Stunden.“","são três horas.”","sein|es|drei|Stunde"]
         ]]
      ],
      escolhas: [
        { pt: "Mandar sua localização para o seu amigo Jonas, em Munique, e levar Felix até a cabana.", de: "Deinem Freund Jonas den Standort schicken und Felix zur Hütte bringen.", ir: "c3", marca: "localizacao" },
        { pt: "Descer sozinho agora para buscar ajuda, enquanto Sophie leva Felix até a cabana.", de: "Sofort allein ins Tal gehen und Hilfe holen.", ir: "c4" }
      ]
    },
    c2b: {
      cap: "Neblina",
      p: [
        ["Ohne die Decke seid ihr schnell. Felix will noch höher gehen, und ihr folgt ihm. Um zwei Uhr kommt der Nebel, viel früher als gedacht. Dann fängt es an zu schneien, und es wird kalt.",
         "Sem o cobertor, vocês vão rápido. Felix quer subir ainda mais, e vocês o seguem. Às duas horas chega a neblina, muito mais cedo do que o previsto. Depois começa a nevar, e fica frio.",
         [
          ["Ohne die Decke","Sem o cobertor,","ohne|der"],
          ["seid ihr schnell.","vocês vão rápido.","sein|ihr|schnell"],
          ["Felix will","Felix quer","wollen"],
          ["noch höher gehen,","subir ainda mais,","noch|hoch|gehen"],
          ["und ihr folgt ihm.","e vocês o seguem.","und|ihr|folgen|er"],
          ["Um zwei Uhr","Às duas horas","um|zwei|Uhr"],
          ["kommt der Nebel,","chega a neblina,","kommen|der"],
          ["viel früher als gedacht.","muito mais cedo do que o previsto.","viel|früh|als|denken"],
          ["Dann fängt es an","Depois começa","dann|anfangen|es"],
          ["zu schneien,","a nevar,","zu"],
          ["und es wird kalt.","e fica frio.","und|es|werden|kalt"]
         ]],
        ["Auf einem nassen Stein fällt Felix. Er hält seinen Fuß und kann kaum stehen. Dein Handy hat zwanzig Prozent und fast kein Netz. Sophie zeigt auf die Karte: „Eine alte Hütte, vierzig Minuten von hier. Bis ins Dorf sind es fast vier Stunden.“",
         "Felix cai numa pedra molhada. Ele segura o pé e mal consegue ficar em pé. Seu celular tem vinte por cento e quase nenhum sinal. Sophie aponta para o mapa: “Uma cabana velha, a quarenta minutos daqui. Até a vila são quase quatro horas.”",
         [
          ["Auf einem nassen Stein","Numa pedra molhada","auf|ein|nass|Stein"],
          ["fällt Felix.","Felix cai.","fallen"],
          ["Er hält seinen Fuß","Ele segura o pé","er|halten|sein|Fuß"],
          ["und kann kaum stehen.","e mal consegue ficar em pé.","und|können|stehen"],
          ["Dein Handy hat","Seu celular tem","dein|Handy|haben"],
          ["zwanzig Prozent","vinte por cento","zwanzig|Prozent"],
          ["und fast kein Netz.","e quase nenhum sinal.","und|fast|kein|Netz"],
          ["Sophie zeigt auf die Karte:","Sophie aponta para o mapa:","zeigen|auf|der|Karte"],
          ["„Eine alte Hütte,","“Uma cabana velha,","ein|alt"],
          ["vierzig Minuten von hier.","a quarenta minutos daqui.","Minute|von|hier"],
          ["Bis ins Dorf","Até a vila","bis|in|der|Dorf"],
          ["sind es fast vier Stunden.“","são quase quatro horas.”","sein|es|fast|vier|Stunde"]
         ]]
      ],
      escolhas: [
        { pt: "Mandar sua localização para o seu amigo Jonas, em Munique, e levar Felix até a cabana.", de: "Deinem Freund Jonas den Standort schicken und Felix zur Hütte bringen.", ir: "c3", marca: "localizacao" },
        { pt: "Descer sozinho agora para buscar ajuda, enquanto Sophie leva Felix até a cabana.", de: "Sofort allein ins Tal gehen und Hilfe holen.", ir: "c4" }
      ]
    },
    c3: {
      cap: "A cabana",
      p: [
        ["Du schreibst deinem Freund Jonas in München: „Notfall, Felix verletzt, wir gehen zur alten Hütte.“ Dazu schickst du deinen Standort. Dann bringt ihr Felix langsam durch den Schnee. Es dauert eine Stunde.",
         "Você escreve para seu amigo Jonas, em Munique: “Emergência, Felix machucado, estamos indo para a cabana velha.” Junto, você manda sua localização. Depois vocês levam Felix devagar pela neve. Leva uma hora.",
         [
          ["Du schreibst deinem Freund","Você escreve para seu amigo","du|schreiben|dein|Freund"],
          ["Jonas in München:","Jonas, em Munique:","in"],
          ["„Notfall, Felix verletzt,","“Emergência, Felix machucado,","Notfall|verletzen"],
          ["wir gehen zur alten Hütte.“","estamos indo para a cabana velha.”","wir|gehen|zu|der|alt"],
          ["Dazu schickst du","Junto, você manda","schicken|du"],
          ["deinen Standort.","sua localização.","dein"],
          ["Dann bringt ihr Felix","Depois vocês levam Felix","dann|bringen|ihr"],
          ["langsam durch den Schnee.","devagar pela neve.","langsam|durch|der|Schnee"],
          ["Es dauert eine Stunde.","Leva uma hora.","es|ein|Stunde"]
         ]],
        ["Die Hütte ist klein und leer. Es gibt einen alten Ofen, aber das Holz ist nass. Draußen wird es dunkel. Felix hat Schmerzen und ist sehr blass. Dein Handy hat nur noch acht Prozent. Sophie sieht dich an: „Und jetzt?“",
         "A cabana é pequena e vazia. Há um fogão velho, mas a lenha está molhada. Lá fora está escurecendo. Felix está com dor e muito pálido. Seu celular só tem oito por cento. Sophie olha para você: “E agora?”",
         [
          ["Die Hütte ist klein und leer.","A cabana é pequena e vazia.","der|sein|klein|und|leer"],
          ["Es gibt einen alten Ofen,","Há um fogão velho,","es|geben|ein|alt|Ofen"],
          ["aber das Holz ist nass.","mas a lenha está molhada.","aber|der|Holz|sein|nass"],
          ["Draußen wird es dunkel.","Lá fora está escurecendo.","draußen|werden|es|dunkel"],
          ["Felix hat Schmerzen","Felix está com dor","haben|Schmerz"],
          ["und ist sehr blass.","e muito pálido.","und|sein|sehr"],
          ["Dein Handy hat","Seu celular tem","dein|Handy|haben"],
          ["nur noch acht Prozent.","só oito por cento.","nur|noch|acht|Prozent"],
          ["Sophie sieht dich an:","Sophie olha para você:","sehen|du"],
          ["„Und jetzt?“","“E agora?”","und|jetzt"]
         ]]
      ],
      escolhas: [
        { pt: "Usar a última bateria para ligar para o resgate de montanha.", de: "Mit dem letzten Akku die Bergwacht anrufen.", ir: "c5" },
        { pt: "Usar o celular como lanterna e descer sozinho.", de: "Das Handy als Lampe benutzen und allein ins Tal gehen.", ir: "c4" },
        { pt: "Economizar a bateria e esperar na cabana.", de: "Den Akku sparen und in der Hütte warten.", ir: "c6" }
      ]
    },
    c4: {
      cap: "Sozinho na trilha",
      p: [
        ["Sophie bleibt bei ihrem Bruder. Du gehst allein los. Der Nebel ist dicht, der Schnee wird tiefer, und bald ist es dunkel. Nach einer Stunde kommst du an eine Kreuzung.",
         "Sophie fica com o irmão. Você sai sozinho. A neblina está densa, a neve fica mais funda, e logo vai estar escuro. Depois de uma hora, você chega a uma bifurcação.",
         [
          ["Sophie bleibt","Sophie fica","bleiben"],
          ["bei ihrem Bruder.","com o irmão.","bei|ihr|Bruder"],
          ["Du gehst allein los.","Você sai sozinho.","du|gehen|allein|los"],
          ["Der Nebel ist dicht,","A neblina está densa,","der|sein"],
          ["der Schnee wird tiefer,","a neve fica mais funda,","der|Schnee|werden|tief"],
          ["und bald ist es dunkel.","e logo vai estar escuro.","und|bald|sein|es|dunkel"],
          ["Nach einer Stunde","Depois de uma hora,","nach|ein|Stunde"],
          ["kommst du","você chega","kommen|du"],
          ["an eine Kreuzung.","a uma bifurcação.","an|ein"]
         ]],
        ["Links geht ein kurzer Weg steil nach unten, über nasse Steine. Eine Stunde, vielleicht weniger. Rechts führt ein breiter Weg durch den Wald. Er ist sicher, aber er ist lang: drei Stunden oder mehr.",
         "À esquerda, um caminho curto desce íngreme, sobre pedras molhadas. Uma hora, talvez menos. À direita, um caminho largo segue pela floresta. Ele é seguro, mas é longo: três horas ou mais.",
         [
          ["Links geht ein kurzer Weg","À esquerda, um caminho curto desce","links|gehen|ein|kurz|Weg"],
          ["steil nach unten,","íngreme,","nach|unten"],
          ["über nasse Steine.","sobre pedras molhadas.","über|nass|Stein"],
          ["Eine Stunde, vielleicht weniger.","Uma hora, talvez menos.","ein|Stunde|vielleicht"],
          ["Rechts führt ein breiter Weg","À direita, um caminho largo segue","rechts|führen|ein|breit|Weg"],
          ["durch den Wald.","pela floresta.","durch|der|Wald"],
          ["Er ist sicher,","Ele é seguro,","er|sein|sicher"],
          ["aber er ist lang:","mas é longo:","aber|er|sein|lang"],
          ["drei Stunden oder mehr.","três horas ou mais.","drei|Stunde|oder|mehr"]
         ]]
      ],
      escolhas: [
        { pt: "Pegar o atalho pelas pedras.", de: "Den kurzen Weg über die Steine nehmen.", ir: "f_queda" },
        { pt: "Pegar o caminho longo pela floresta.", de: "Den langen Weg durch den Wald nehmen.", ir: "c7" }
      ]
    },
    c5: {
      cap: "A ligação",
      p: [
        ["Hinter der Hütte steigst du auf einen Felsen. Dort hast du ein bisschen Netz. Ein Mann von der Bergwacht antwortet sofort. „Jonas hat uns euren Standort geschickt. Der Hubschrauber kann im Nebel nicht fliegen. Ein Team kommt zu Fuß, in drei oder vier Stunden. Bleibt in der Hütte!“",
         "Atrás da cabana, você sobe numa rocha. Lá você tem um pouco de sinal. Um homem do resgate de montanha atende na hora. “O Jonas nos mandou a localização de vocês. O helicóptero não pode voar na neblina. Uma equipe vem a pé, em três ou quatro horas. Fiquem na cabana!”",
         [
          ["Hinter der Hütte","Atrás da cabana,","hinter|der"],
          ["steigst du auf einen Felsen.","você sobe numa rocha.","steigen|du|auf|ein"],
          ["Dort hast du","Lá você tem","dort|haben|du"],
          ["ein bisschen Netz.","um pouco de sinal.","ein|Netz"],
          ["Ein Mann von der Bergwacht","Um homem do resgate de montanha","ein|Mann|von|der"],
          ["antwortet sofort.","atende na hora.","antworten|sofort"],
          ["„Jonas hat uns","“O Jonas nos mandou","haben|wir"],
          ["euren Standort geschickt.","a localização de vocês.","schicken"],
          ["Der Hubschrauber kann","O helicóptero não pode","der|können"],
          ["im Nebel nicht fliegen.","voar na neblina.","in|der|nicht|fliegen"],
          ["Ein Team kommt zu Fuß,","Uma equipe vem a pé,","ein|kommen|zu|Fuß"],
          ["in drei oder vier Stunden.","em três ou quatro horas.","in|drei|oder|vier|Stunde"],
          ["Bleibt in der Hütte!“","Fiquem na cabana!”","bleiben|in|der"]
         ]],
        ["Dann ist das Handy tot. Kein Licht mehr, kein Telefon. In der Hütte ist es sehr kalt. Sophie will nicht warten: „Die finden uns nie in diesem Nebel. Geh ihnen entgegen!“",
         "Aí o celular morre. Sem luz, sem telefone. Na cabana está muito frio. Sophie não quer esperar: “Eles nunca vão nos achar nessa neblina. Vá ao encontro deles!”",
         [
          ["Dann ist das Handy tot.","Aí o celular morre.","dann|sein|der|Handy"],
          ["Kein Licht mehr,","Sem luz,","kein|Licht|mehr"],
          ["kein Telefon.","sem telefone.","kein|Telefon"],
          ["In der Hütte","Na cabana","in|der"],
          ["ist es sehr kalt.","está muito frio.","sein|es|sehr|kalt"],
          ["Sophie will nicht warten:","Sophie não quer esperar:","wollen|nicht|warten"],
          ["„Die finden uns nie","“Eles nunca vão nos achar","der|finden|wir|nie"],
          ["in diesem Nebel.","nessa neblina.","in|dieser"],
          ["Geh ihnen entgegen!“","Vá ao encontro deles!”","gehen|sie"]
         ]]
      ],
      escolhas: [
        { pt: "Ficar na cabana, como o resgate pediu.", de: "In der Hütte bleiben, wie die Bergwacht gesagt hat.", ir: "c6" },
        { pt: "Sair no escuro pelo atalho, ao encontro da equipe.", de: "Im Dunkeln über den kurzen Weg dem Team entgegengehen.", ir: "f_queda" }
      ]
    },
    c6: {
      cap: "A noite",
      p: [
        ["Die Stunden sind lang. Ihr sitzt zu dritt auf dem Boden, ganz nah zusammen. Der Wind schlägt gegen die Tür. Felix spricht kaum noch, und seine Hände sind kalt wie Eis.",
         "As horas são longas. Vocês três ficam sentados no chão, bem juntos. O vento bate contra a porta. Felix já quase não fala, e as mãos dele estão frias como gelo.",
         [
          ["Die Stunden sind lang.","As horas são longas.","der|Stunde|sein|lang"],
          ["Ihr sitzt zu dritt","Vocês três ficam sentados","ihr|sitzen|zu"],
          ["auf dem Boden,","no chão,","auf|der|Boden"],
          ["ganz nah zusammen.","bem juntos.","ganz|nah|zusammen"],
          ["Der Wind schlägt","O vento bate","der|Wind|schlagen"],
          ["gegen die Tür.","contra a porta.","gegen|der|Tür"],
          ["Felix spricht kaum noch,","Felix já quase não fala,","sprechen|noch"],
          ["und seine Hände","e as mãos dele","und|sein|Hand"],
          ["sind kalt wie Eis.","estão frias como gelo.","sein|kalt|wie|Eis"]
         ]],
        ["Sophie hält seine Hände und sagt leise: „Er darf nicht einschlafen.“ Du weißt: Die Nacht wird noch kälter. Er braucht jetzt Wärme, mehr als alles andere.",
         "Sophie segura as mãos dele e diz baixinho: “Ele não pode dormir.” Você sabe: a noite vai ficar ainda mais fria. Ele precisa de calor agora, mais do que qualquer outra coisa.",
         [
          ["Sophie hält seine Hände","Sophie segura as mãos dele","halten|sein|Hand"],
          ["und sagt leise:","e diz baixinho:","und|sagen|leise"],
          ["„Er darf nicht einschlafen.“","“Ele não pode dormir.”","er|dürfen|nicht|einschlafen"],
          ["Du weißt:","Você sabe:","du|wissen"],
          ["Die Nacht wird noch kälter.","a noite vai ficar ainda mais fria.","der|Nacht|werden|noch|kalt"],
          ["Er braucht jetzt Wärme,","Ele precisa de calor agora,","er|brauchen|jetzt"],
          ["mehr als alles andere.","mais do que qualquer outra coisa.","mehr|als|alles|ander"]
         ]]
      ],
      escolhas: [
        { pt: "Enrolar Felix no cobertor do carro.", de: "Felix in die Decke aus dem Auto wickeln.", ir: "f_noite", req: "cobertor" },
        { pt: "Dar a sua jaqueta para Felix.", de: "Felix deine Jacke geben.", ir: "f_frio", sem: "cobertor" }
      ]
    },
    c7: {
      cap: "A vila",
      p: [
        ["Nach drei Stunden siehst du Lichter. Ein kleines Dorf. Du klopfst an die erste Tür, und eine alte Frau gibt dir ihr Telefon. Deine Hände zittern. Die Bergwacht antwortet sofort.",
         "Depois de três horas, você vê luzes. Uma vila pequena. Você bate na primeira porta, e uma senhora lhe dá o telefone dela. Suas mãos tremem. O resgate de montanha atende na hora.",
         [
          ["Nach drei Stunden","Depois de três horas,","nach|drei|Stunde"],
          ["siehst du Lichter.","você vê luzes.","sehen|du|Licht"],
          ["Ein kleines Dorf.","Uma vila pequena.","ein|klein|Dorf"],
          ["Du klopfst","Você bate","du|klopfen"],
          ["an die erste Tür,","na primeira porta,","an|der|erste|Tür"],
          ["und eine alte Frau","e uma senhora","und|ein|alt|Frau"],
          ["gibt dir ihr Telefon.","lhe dá o telefone dela.","geben|du|ihr|Telefon"],
          ["Deine Hände zittern.","Suas mãos tremem.","dein|Hand"],
          ["Die Bergwacht antwortet sofort.","O resgate de montanha atende na hora.","der|antworten|sofort"]
         ]],
        ["„Wo genau ist die Hütte?“, fragt eine Frau. „Im Nebel finden wir sie nur mit einem genauen Standort.“ Du denkst an dein Handy, an die Karte, an die letzten Stunden.",
         "“Onde exatamente fica a cabana?”, pergunta uma mulher. “Na neblina, só a encontramos com uma localização exata.” Você pensa no seu celular, no mapa, nas últimas horas.",
         [
          ["„Wo genau ist die Hütte?“,","“Onde exatamente fica a cabana?”,","wo|genau|sein|der"],
          ["fragt eine Frau.","pergunta uma mulher.","fragen|ein|Frau"],
          ["„Im Nebel","“Na neblina,","in|der"],
          ["finden wir sie nur","só a encontramos","finden|wir|sie|nur"],
          ["mit einem genauen Standort.“","com uma localização exata.”","mit|ein|genau"],
          ["Du denkst","Você pensa","du|denken"],
          ["an dein Handy,","no seu celular,","an|dein|Handy"],
          ["an die Karte,","no mapa,","an|der|Karte"],
          ["an die letzten Stunden.","nas últimas horas.","an|der|letzte|Stunde"]
         ]]
      ],
      escolhas: [
        { pt: "Dizer que Jonas tem a localização exata.", de: "Sagen, dass Jonas den genauen Standort hat.", ir: "f_noite", req: "localizacao" },
        { pt: "Descrever a cabana do melhor jeito possível.", de: "Die Hütte so gut wie möglich beschreiben.", ir: "f_manha", sem: "localizacao" }
      ]
    },
    f_noite: {
      cap: "Meia-noite",
      p: [
        ["Kurz nach Mitternacht erreicht die Bergwacht die alte Hütte. Mit dem Standort von Jonas hat sie den Weg im Nebel sofort gefunden. Felix ist müde und blass, aber er ist wach und lächelt sogar.",
         "Pouco depois da meia-noite, o resgate de montanha chega à cabana velha. Com a localização do Jonas, a equipe encontrou o caminho na neblina na hora. Felix está cansado e pálido, mas está acordado e até sorri.",
         [
          ["Kurz nach Mitternacht","Pouco depois da meia-noite,","kurz|nach"],
          ["erreicht die Bergwacht","o resgate de montanha chega","erreichen|der"],
          ["die alte Hütte.","à cabana velha.","der|alt"],
          ["Mit dem Standort von Jonas","Com a localização do Jonas,","mit|der|von"],
          ["hat sie den Weg","a equipe encontrou o caminho","haben|sie|der|Weg"],
          ["im Nebel sofort gefunden.","na neblina na hora.","in|der|sofort|finden"],
          ["Felix ist müde und blass,","Felix está cansado e pálido,","sein|müde|und"],
          ["aber er ist wach","mas está acordado","aber|er|sein"],
          ["und lächelt sogar.","e até sorri.","und|sogar"]
         ]],
        ["Am Morgen sitzt ihr zu dritt im Krankenhaus in Garmisch. Felix hat einen dicken Fuß und macht schon wieder Witze. Sophie umarmt dich lange. „Die Nachricht an Jonas“, sagt sie, „war die beste Idee des ganzen Tages.“",
         "De manhã, vocês três estão sentados no hospital em Garmisch. Felix está com o pé inchado e já está fazendo piada de novo. Sophie abraça você por muito tempo. “A mensagem para o Jonas”, diz ela, “foi a melhor ideia do dia inteiro.”",
         [
          ["Am Morgen","De manhã,","an|der|Morgen"],
          ["sitzt ihr zu dritt","vocês três estão sentados","sitzen|ihr|zu"],
          ["im Krankenhaus in Garmisch.","no hospital em Garmisch.","in|der|Krankenhaus|in"],
          ["Felix hat einen dicken Fuß","Felix está com o pé inchado","haben|ein|dick|Fuß"],
          ["und macht schon wieder Witze.","e já está fazendo piada de novo.","und|machen|schon|wieder|Witz"],
          ["Sophie umarmt dich lange.","Sophie abraça você por muito tempo.","umarmen|du|lang"],
          ["„Die Nachricht an Jonas“,","“A mensagem para o Jonas”,","der|Nachricht|an"],
          ["sagt sie,","diz ela,","sagen|sie"],
          ["„war die beste Idee","“foi a melhor ideia","sein|der|best|Idee"],
          ["des ganzen Tages.“","do dia inteiro.”","der|ganz|Tag"]
         ]]
      ],
      fim: { tipo: "bom", titulo: "Luzes na neblina" }
    },
    f_frio: {
      cap: "Sem cobertor",
      p: [
        ["Du ziehst deine Jacke aus und legst sie um Felix. Jetzt ist dir kalt. Erst um zwei Uhr kommt die Bergwacht. Felix zittert nicht mehr und spricht kaum. Die Männer bringen ihn sofort ins Krankenhaus.",
         "Você tira a jaqueta e coloca em volta de Felix. Agora quem está com frio é você. Só às duas horas chega o resgate de montanha. Felix não treme mais e quase não fala. Os homens o levam direto para o hospital.",
         [
          ["Du ziehst deine Jacke aus","Você tira a jaqueta","du|ausziehen|dein|Jacke"],
          ["und legst sie um Felix.","e coloca em volta de Felix.","und|legen|sie|um"],
          ["Jetzt ist dir kalt.","Agora quem está com frio é você.","jetzt|sein|du|kalt"],
          ["Erst um zwei Uhr","Só às duas horas","um|zwei|Uhr"],
          ["kommt die Bergwacht.","chega o resgate de montanha.","kommen|der"],
          ["Felix zittert nicht mehr","Felix não treme mais","nicht|mehr"],
          ["und spricht kaum.","e quase não fala.","und|sprechen"],
          ["Die Männer bringen ihn","Os homens o levam","der|Mann|bringen|er"],
          ["sofort ins Krankenhaus.","direto para o hospital.","sofort|in|der|Krankenhaus"]
         ]],
        ["Er bleibt fünf Tage dort und wird wieder gesund. Du hast eine Woche Fieber. Im Büro spricht Sophie wenig. Einmal sagt sie nur: „Die Decke hat die ganze Zeit im Auto gelegen.“",
         "Ele fica cinco dias lá e se recupera. Você passa uma semana com febre. No escritório, Sophie fala pouco. Uma vez ela diz apenas: “O cobertor ficou o tempo todo no carro.”",
         [
          ["Er bleibt fünf Tage dort","Ele fica cinco dias lá","er|bleiben|fünf|Tag|dort"],
          ["und wird wieder gesund.","e se recupera.","und|werden|wieder|gesund"],
          ["Du hast eine Woche Fieber.","Você passa uma semana com febre.","du|haben|ein|Woche|Fieber"],
          ["Im Büro","No escritório,","in|der|Büro"],
          ["spricht Sophie wenig.","Sophie fala pouco.","sprechen"],
          ["Einmal sagt sie nur:","Uma vez ela diz apenas:","sagen|sie|nur"],
          ["„Die Decke hat","“O cobertor ficou","der|haben"],
          ["die ganze Zeit","o tempo todo","der|ganz|Zeit"],
          ["im Auto gelegen.“","no carro.”","in|der|Auto|liegen"]
         ]]
      ],
      fim: { tipo: "neutro", titulo: "O cobertor no carro" }
    },
    f_queda: {
      cap: "O atalho",
      p: [
        ["Der kurze Weg ist steil, und die Steine sind nass. Im Nebel siehst du die Kante zu spät. Du fällst ein paar Meter und bleibst im Schnee liegen. Dein Bein tut sehr weh, und du kannst nicht aufstehen.",
         "O atalho é íngreme, e as pedras estão molhadas. Na neblina, você vê a beirada tarde demais. Você cai alguns metros e fica caído na neve. Sua perna dói muito, e você não consegue se levantar.",
         [
          ["Der kurze Weg ist steil,","O atalho é íngreme,","der|kurz|Weg|sein"],
          ["und die Steine sind nass.","e as pedras estão molhadas.","und|der|Stein|sein|nass"],
          ["Im Nebel","Na neblina,","in|der"],
          ["siehst du die Kante zu spät.","você vê a beirada tarde demais.","sehen|du|der|zu|spät"],
          ["Du fällst ein paar Meter","Você cai alguns metros","du|fallen|ein"],
          ["und bleibst im Schnee liegen.","e fica caído na neve.","und|bleiben|in|der|Schnee|liegen"],
          ["Dein Bein tut sehr weh,","Sua perna dói muito,","dein|Bein|tun|sehr"],
          ["und du kannst nicht aufstehen.","e você não consegue se levantar.","und|du|können|nicht|aufstehen"]
         ]],
        ["Erst am Morgen findet dich die Bergwacht. Auch Felix und Sophie sind in Sicherheit. Aber dein Bein ist gebrochen, und du liegst sechs Wochen im Krankenhaus. Über den kurzen Weg sprecht ihr nie wieder.",
         "Só de manhã o resgate de montanha encontra você. Felix e Sophie também estão em segurança. Mas sua perna está quebrada, e você passa seis semanas no hospital. Sobre o atalho, vocês nunca mais falam.",
         [
          ["Erst am Morgen","Só de manhã","an|der|Morgen"],
          ["findet dich die Bergwacht.","o resgate de montanha encontra você.","finden|du|der"],
          ["Auch Felix und Sophie","Felix e Sophie também","auch|und"],
          ["sind in Sicherheit.","estão em segurança.","sein|in|Sicherheit"],
          ["Aber dein Bein ist gebrochen,","Mas sua perna está quebrada,","aber|dein|Bein|sein|brechen"],
          ["und du liegst sechs Wochen","e você passa seis semanas","und|du|liegen|sechs|Woche"],
          ["im Krankenhaus.","no hospital.","in|der|Krankenhaus"],
          ["Über den kurzen Weg","Sobre o atalho,","über|der|kurz|Weg"],
          ["sprecht ihr nie wieder.","vocês nunca mais falam.","sprechen|ihr|nie|wieder"]
         ]]
      ],
      fim: { tipo: "ruim", titulo: "O caminho curto" }
    },
    f_manha: {
      cap: "Manhã",
      p: [
        ["Die Bergwacht sucht die ganze Nacht. Du sitzt in der Küche der alten Frau und trinkst Tee, aber du kannst nicht schlafen. Jede Stunde fragst du: „Gibt es Nachrichten?“ Und jede Stunde sagt sie leise: „Noch nicht.“",
         "O resgate de montanha procura a noite inteira. Você fica sentado na cozinha da senhora e bebe chá, mas não consegue dormir. A cada hora você pergunta: “Alguma notícia?” E a cada hora ela diz baixinho: “Ainda não.”",
         [
          ["Die Bergwacht sucht","O resgate de montanha procura","der|suchen"],
          ["die ganze Nacht.","a noite inteira.","der|ganz|Nacht"],
          ["Du sitzt in der Küche","Você fica sentado na cozinha","du|sitzen|in|der|Küche"],
          ["der alten Frau","da senhora","der|alt|Frau"],
          ["und trinkst Tee,","e bebe chá,","und|trinken|Tee"],
          ["aber du kannst nicht schlafen.","mas não consegue dormir.","aber|du|können|nicht|schlafen"],
          ["Jede Stunde fragst du:","A cada hora você pergunta:","jeder|Stunde|fragen|du"],
          ["„Gibt es Nachrichten?“","“Alguma notícia?”","geben|es|Nachricht"],
          ["Und jede Stunde","E a cada hora","und|jeder|Stunde"],
          ["sagt sie leise: „Noch nicht.“","ela diz baixinho: “Ainda não.”","sagen|sie|leise|noch|nicht"]
         ]],
        ["Um sechs Uhr morgens klingelt endlich das Telefon. Das Team hat die Hütte gefunden. Felix und Sophie sind müde und frieren, aber sie sind gesund. Du gehst nach draußen. Der Nebel ist weg, und über den Bergen wird der Himmel hell.",
         "Às seis da manhã, o telefone finalmente toca. A equipe encontrou a cabana. Felix e Sophie estão cansados e com frio, mas bem. Você sai. A neblina sumiu, e sobre as montanhas o céu clareia.",
         [
          ["Um sechs Uhr morgens","Às seis da manhã,","um|sechs|Uhr"],
          ["klingelt endlich das Telefon.","o telefone finalmente toca.","klingeln|endlich|der|Telefon"],
          ["Das Team hat","A equipe","der|haben"],
          ["die Hütte gefunden.","encontrou a cabana.","der|finden"],
          ["Felix und Sophie","Felix e Sophie","und"],
          ["sind müde und frieren,","estão cansados e com frio,","sein|müde|und"],
          ["aber sie sind gesund.","mas bem.","aber|sie|sein|gesund"],
          ["Du gehst nach draußen.","Você sai.","du|gehen|nach|draußen"],
          ["Der Nebel ist weg,","A neblina sumiu,","der|sein|weg"],
          ["und über den Bergen","e sobre as montanhas","und|über|der|Berg"],
          ["wird der Himmel hell.","o céu clareia.","werden|der|Himmel|hell"]
         ]]
      ],
      fim: { tipo: "bom", titulo: "Céu claro" }
    }
  }
});
