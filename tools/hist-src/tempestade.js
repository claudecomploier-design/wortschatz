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
