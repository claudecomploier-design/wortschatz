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
