// Histórias interativas em italiano (A1–A2): escolhas, tradução contextual e múltiplos finais.
window.VB_HIST=window.VB_HIST||{};
window.VB_HIST.it=[
  {
    "id": "treno-per-firenze",
    "titulo": "Il treno per Firenze",
    "genero": "Viagem",
    "nivel": "A1",
    "desc": "Uma passagem, duas plataformas e uma decisão antes de o trem partir.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "A estação",
        "p": [
          [
            "È sabato mattina e sei alla stazione di Bologna. Hai un biglietto per Firenze e una piccola valigia. Sul biglietto c'è scritto «binario cinque», ma il tabellone mostra il sei. Mancano dieci minuti alla partenza del treno. Una ragazza con uno zaino guarda lo stesso tabellone. Devi decidere in fretta che cosa fare.",
            "É sábado de manhã e você está na estação de Bolonha. Você tem uma passagem para Florença e uma mala pequena. Na passagem está escrito “plataforma cinco”, mas o painel mostra a seis. Faltam dez minutos para a partida do trem. Uma moça com uma mochila olha o mesmo painel. Você precisa decidir rapidamente o que fazer.",
            [
              [
                "È sabato mattina e sei alla stazione di Bologna.",
                "É sábado de manhã e você está na estação de Bolonha.",
                "essere"
              ],
              [
                "Hai un biglietto per Firenze e una piccola valigia.",
                "Você tem uma passagem para Florença e uma mala pequena.",
                "avere"
              ],
              [
                "Sul biglietto c'è scritto «binario cinque», ma il tabellone mostra il sei.",
                "Na passagem está escrito “plataforma cinco”, mas o painel mostra a seis.",
                "biglietto"
              ],
              [
                "Mancano dieci minuti alla partenza del treno.",
                "Faltam dez minutos para a partida do trem.",
                "treno"
              ],
              [
                "Una ragazza con uno zaino guarda lo stesso tabellone.",
                "Uma moça com uma mochila olha o mesmo painel.",
                "guardare"
              ],
              [
                "Devi decidere in fretta che cosa fare.",
                "Você precisa decidir rapidamente o que fazer.",
                "fare"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Perguntar no balcão de informações.",
            "fl": "Chiedere informazioni allo sportello.",
            "ir": "c2a"
          },
          {
            "pt": "Conversar com a moça da mochila.",
            "fl": "Parlare con la ragazza dello zaino.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "Uma informação importante",
        "p": [
          [
            "Vai allo sportello informazioni e aspetti il tuo turno. Un impiegato ti saluta e guarda il biglietto. Dice che il treno ha cambiato binario cinque minuti fa. Ora sai che devi andare al binario sei. L'impiegato aggiunge che hai ancora tempo. Vedi una scala e anche un ascensore libero.",
            "Você vai ao balcão de informações e espera sua vez. Um funcionário cumprimenta você e olha a passagem. Ele diz que o trem mudou de plataforma há cinco minutos. Agora você sabe que precisa ir à plataforma seis. O funcionário acrescenta que ainda há tempo. Você vê uma escada e também um elevador livre.",
            [
              [
                "Vai allo sportello informazioni e aspetti il tuo turno.",
                "Você vai ao balcão de informações e espera sua vez.",
                "andare"
              ],
              [
                "Un impiegato ti saluta e guarda il biglietto.",
                "Um funcionário cumprimenta você e olha a passagem.",
                "guardare"
              ],
              [
                "Dice che il treno ha cambiato binario cinque minuti fa.",
                "Ele diz que o trem mudou de plataforma há cinco minutos.",
                "dire"
              ],
              [
                "Ora sai che devi andare al binario sei.",
                "Agora você sabe que precisa ir à plataforma seis.",
                "sapere"
              ],
              [
                "L'impiegato aggiunge che hai ancora tempo.",
                "O funcionário acrescenta que ainda há tempo.",
                "avere"
              ],
              [
                "Vedi una scala e anche un ascensore libero.",
                "Você vê uma escada e também um elevador livre.",
                "vedere"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Pegar o elevador e ir direto à plataforma seis.",
            "fl": "Prendere l'ascensore e andare al binario sei.",
            "ir": "f_bom"
          },
          {
            "pt": "Parar para comprar um café primeiro.",
            "fl": "Fermarsi a comprare un caffè.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "La ragazza dello zaino",
        "p": [
          [
            "Chiedi alla ragazza se anche lei va a Firenze. Lei sorride e dice che conosce bene questa stazione. Ti mostra un messaggio sul telefono con il binario corretto. Poi ti invita a seguirla attraverso un corridoio. Il corridoio è lungo, ma non c'è molta gente. In fondo senti il rumore di un treno in arrivo.",
            "Você pergunta à moça se ela também vai a Florença. Ela sorri e diz que conhece bem esta estação. Ela mostra no celular uma mensagem com a plataforma correta. Depois convida você a segui-la por um corredor. O corredor é longo, mas não há muita gente. Ao fundo você ouve o barulho de um trem chegando.",
            [
              [
                "Chiedi alla ragazza se anche lei va a Firenze.",
                "Você pergunta à moça se ela também vai a Florença.",
                "chiedere"
              ],
              [
                "Lei sorride e dice che conosce bene questa stazione.",
                "Ela sorri e diz que conhece bem esta estação.",
                "conoscere"
              ],
              [
                "Ti mostra un messaggio sul telefono con il binario corretto.",
                "Ela mostra no celular uma mensagem com a plataforma correta.",
                "mostrare"
              ],
              [
                "Poi ti invita a seguirla attraverso un corridoio.",
                "Depois convida você a segui-la por um corredor.",
                "seguire"
              ],
              [
                "Il corridoio è lungo, ma non c'è molta gente.",
                "O corredor é longo, mas não há muita gente.",
                "lungo"
              ],
              [
                "In fondo senti il rumore di un treno in arrivo.",
                "Ao fundo você ouve o barulho de um trem chegando.",
                "sentire"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Seguir a moça imediatamente.",
            "fl": "Seguire subito la ragazza.",
            "ir": "f_bom"
          },
          {
            "pt": "Voltar para conferir o painel mais uma vez.",
            "fl": "Tornare a controllare il tabellone.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Il viaggio comincia",
        "p": [
          [
            "Arrivi al binario sei proprio quando il treno apre le porte. Trovi il tuo posto vicino al finestrino e metti via la valigia. Fuori, la città diventa sempre più piccola. Il controllore controlla il biglietto e ti augura buon viaggio. Poco dopo, il treno attraversa la campagna italiana. Hai imparato che chiedere aiuto può farti risparmiare tempo.",
            "Você chega à plataforma seis justamente quando o trem abre as portas. Você encontra seu lugar junto à janela e guarda a mala. Lá fora, a cidade fica cada vez menor. O fiscal confere a passagem e deseja boa viagem. Pouco depois, o trem atravessa o interior da Itália. Você aprendeu que pedir ajuda pode economizar tempo.",
            [
              [
                "Arrivi al binario sei proprio quando il treno apre le porte.",
                "Você chega à plataforma seis justamente quando o trem abre as portas.",
                "arrivare"
              ],
              [
                "Trovi il tuo posto vicino al finestrino e metti via la valigia.",
                "Você encontra seu lugar junto à janela e guarda a mala.",
                "trovare"
              ],
              [
                "Fuori, la città diventa sempre più piccola.",
                "Lá fora, a cidade fica cada vez menor.",
                "città"
              ],
              [
                "Il controllore controlla il biglietto e ti augura buon viaggio.",
                "O fiscal confere a passagem e deseja boa viagem.",
                "biglietto"
              ],
              [
                "Poco dopo, il treno attraversa la campagna italiana.",
                "Pouco depois, o trem atravessa o interior da Itália.",
                "treno"
              ],
              [
                "Hai imparato che chiedere aiuto può farti risparmiare tempo.",
                "Você aprendeu que pedir ajuda pode economizar tempo.",
                "chiedere"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "A caminho de Florença"
        }
      },
      "f_neutro": {
        "cap": "Un piano diverso",
        "p": [
          [
            "Perdi il treno per pochi secondi e rimani sul binario. All'inizio sei deluso, ma non vuoi rovinare la giornata. Controlli gli orari e trovi un altro treno nel pomeriggio. Decidi di fare una passeggiata nel centro di Bologna. Entri in un piccolo bar e prendi un cappuccino caldo. Firenze può aspettare qualche ora: anche questo è un viaggio.",
            "Você perde o trem por poucos segundos e fica na plataforma. No início fica decepcionado, mas não quer estragar o dia. Você confere os horários e encontra outro trem à tarde. Você decide passear pelo centro de Bolonha. Entra em um pequeno café e toma um cappuccino quente. Florença pode esperar algumas horas: isso também é uma viagem.",
            [
              [
                "Perdi il treno per pochi secondi e rimani sul binario.",
                "Você perde o trem por poucos segundos e fica na plataforma.",
                "perdere"
              ],
              [
                "All'inizio sei deluso, ma non vuoi rovinare la giornata.",
                "No início fica decepcionado, mas não quer estragar o dia.",
                "volere"
              ],
              [
                "Controlli gli orari e trovi un altro treno nel pomeriggio.",
                "Você confere os horários e encontra outro trem à tarde.",
                "trovare"
              ],
              [
                "Decidi di fare una passeggiata nel centro di Bologna.",
                "Você decide passear pelo centro de Bolonha.",
                "fare"
              ],
              [
                "Entri in un piccolo bar e prendi un cappuccino caldo.",
                "Entra em um pequeno café e toma um cappuccino quente.",
                "prendere"
              ],
              [
                "Firenze può aspettare qualche ora: anche questo è un viaggio.",
                "Florença pode esperar algumas horas: isso também é uma viagem.",
                "aspettare"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Um plano diferente"
        }
      }
    }
  },
  {
    "id": "caffe-delle-sette",
    "titulo": "Il caffè delle sette",
    "genero": "Cotidiano",
    "nivel": "A1",
    "desc": "Uma manhã chuvosa, um pedido trocado e uma gentileza inesperada.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "Una mattina di pioggia",
        "p": [
          [
            "Piove da quando sei uscito di casa questa mattina. Entri in un bar piccolo e senti il profumo del pane caldo. Ordini un caffè e un cornetto alla crema. La barista ti porta invece un tè e un cornetto al cioccolato. Lei sembra molto occupata e parla con tre clienti. Hai fame e devi andare al lavoro tra venti minuti.",
            "Chove desde que você saiu de casa hoje de manhã. Você entra em um café pequeno e sente o cheiro de pão quente. Você pede um café e um croissant com creme. A atendente traz, porém, um chá e um croissant de chocolate. Ela parece muito ocupada e conversa com três clientes. Você está com fome e precisa ir trabalhar em vinte minutos.",
            [
              [
                "Piove da quando sei uscito di casa questa mattina.",
                "Chove desde que você saiu de casa hoje de manhã.",
                "casa"
              ],
              [
                "Entri in un bar piccolo e senti il profumo del pane caldo.",
                "Você entra em um café pequeno e sente o cheiro de pão quente.",
                "entrare"
              ],
              [
                "Ordini un caffè e un cornetto alla crema.",
                "Você pede um café e um croissant com creme.",
                "caffè"
              ],
              [
                "La barista ti porta invece un tè e un cornetto al cioccolato.",
                "A atendente traz, porém, um chá e um croissant de chocolate.",
                "portare"
              ],
              [
                "Lei sembra molto occupata e parla con tre clienti.",
                "Ela parece muito ocupada e conversa com três clientes.",
                "parlare"
              ],
              [
                "Hai fame e devi andare al lavoro tra venti minuti.",
                "Você está com fome e precisa ir trabalhar em vinte minutos.",
                "andare"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Explicar o erro com gentileza.",
            "fl": "Spiegare gentilmente l'errore.",
            "ir": "c2a"
          },
          {
            "pt": "Observar a mesa ao lado.",
            "fl": "Guardare il tavolo accanto.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "Una domanda gentile",
        "p": [
          [
            "Chiami la barista e spieghi con calma che cosa hai ordinato. Lei si ferma per ascoltarti e guarda lo scontrino. Dice che ha confuso due tavoli molto vicini. Ti offre subito il caffè giusto e un sorriso. Un altro cliente dice che anche lui ha fatto lo stesso errore ieri. Ora il bar sembra un posto più amichevole.",
            "Você chama a atendente e explica com calma o que pediu. Ela para para escutar você e olha o recibo. Ela diz que confundiu duas mesas muito próximas. Ela oferece imediatamente o café correto e um sorriso. Outro cliente diz que também cometeu o mesmo erro ontem. Agora o café parece um lugar mais acolhedor.",
            [
              [
                "Chiami la barista e spieghi con calma che cosa hai ordinato.",
                "Você chama a atendente e explica com calma o que pediu.",
                "chiamare"
              ],
              [
                "Lei si ferma per ascoltarti e guarda lo scontrino.",
                "Ela para para escutar você e olha o recibo.",
                "guardare"
              ],
              [
                "Dice che ha confuso due tavoli molto vicini.",
                "Ela diz que confundiu duas mesas muito próximas.",
                "dire"
              ],
              [
                "Ti offre subito il caffè giusto e un sorriso.",
                "Ela oferece imediatamente o café correto e um sorriso.",
                "caffè"
              ],
              [
                "Un altro cliente dice che anche lui ha fatto lo stesso errore ieri.",
                "Outro cliente diz que também cometeu o mesmo erro ontem.",
                "fare"
              ],
              [
                "Ora il bar sembra un posto più amichevole.",
                "Agora o café parece um lugar mais acolhedor.",
                "sembrare"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Agradecer e aceitar o pedido corrigido.",
            "fl": "Ringraziare e prendere l'ordine giusto.",
            "ir": "f_bom"
          },
          {
            "pt": "Experimentar o chá mesmo assim.",
            "fl": "Provare comunque il tè.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "Il tavolo vicino",
        "p": [
          [
            "Guardando il tavolo accanto, vedi il tuo caffè davanti a una signora. La signora ha ricevuto anche il tuo cornetto alla crema. Lei nota la tua sorpresa e ride. Dice che aspetta un'amica e non ha ancora toccato niente. Potete chiamare insieme la barista per scambiare gli ordini. Oppure puoi accettare il tè e provare qualcosa di nuovo.",
            "Olhando a mesa ao lado, você vê seu café diante de uma senhora. A senhora também recebeu seu croissant com creme. Ela percebe sua surpresa e ri. Diz que espera uma amiga e ainda não tocou em nada. Vocês podem chamar juntos a atendente para trocar os pedidos. Ou você pode aceitar o chá e experimentar algo novo.",
            [
              [
                "Guardando il tavolo accanto, vedi il tuo caffè davanti a una signora.",
                "Olhando a mesa ao lado, você vê seu café diante de uma senhora.",
                "vedere"
              ],
              [
                "La signora ha ricevuto anche il tuo cornetto alla crema.",
                "A senhora também recebeu seu croissant com creme.",
                "ricevere"
              ],
              [
                "Lei nota la tua sorpresa e ride.",
                "Ela percebe sua surpresa e ri.",
                "ridere"
              ],
              [
                "Dice che aspetta un'amica e non ha ancora toccato niente.",
                "Diz que espera uma amiga e ainda não tocou em nada.",
                "aspettare"
              ],
              [
                "Potete chiamare insieme la barista per scambiare gli ordini.",
                "Vocês podem chamar juntos a atendente para trocar os pedidos.",
                "potere"
              ],
              [
                "Oppure puoi accettare il tè e provare qualcosa di nuovo.",
                "Ou você pode aceitar o chá e experimentar algo novo.",
                "provare"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Pedir para trocar os pedidos.",
            "fl": "Chiedere di scambiare gli ordini.",
            "ir": "f_bom"
          },
          {
            "pt": "Ficar com o pedido diferente.",
            "fl": "Tenere l'ordine diverso.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Il gusto della giornata",
        "p": [
          [
            "La barista sistema subito i due ordini. Ringrazi tutti e finalmente assaggi il tuo cornetto. La signora ti racconta di un bel parco vicino al lavoro. Scrivi il nome del parco sul telefono per il fine settimana. Esci dal bar puntuale e con un buon umore. Un piccolo errore ha reso la mattina più interessante.",
            "A atendente corrige imediatamente os dois pedidos. Você agradece a todos e finalmente prova seu croissant. A senhora conta sobre um parque bonito perto do trabalho. Você anota o nome do parque no celular para o fim de semana. Você sai do café no horário e de bom humor. Um pequeno erro tornou a manhã mais interessante.",
            [
              [
                "La barista sistema subito i due ordini.",
                "A atendente corrige imediatamente os dois pedidos.",
                "ordine"
              ],
              [
                "Ringrazi tutti e finalmente assaggi il tuo cornetto.",
                "Você agradece a todos e finalmente prova seu croissant.",
                "assaggiare"
              ],
              [
                "La signora ti racconta di un bel parco vicino al lavoro.",
                "A senhora conta sobre um parque bonito perto do trabalho.",
                "raccontare"
              ],
              [
                "Scrivi il nome del parco sul telefono per il fine settimana.",
                "Você anota o nome do parque no celular para o fim de semana.",
                "scrivere"
              ],
              [
                "Esci dal bar puntuale e con un buon umore.",
                "Você sai do café no horário e de bom humor.",
                "uscire"
              ],
              [
                "Un piccolo errore ha reso la mattina più interessante.",
                "Um pequeno erro tornou a manhã mais interessante.",
                "piccolo"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "Uma manhã mais doce"
        }
      },
      "f_neutro": {
        "cap": "Una sorpresa dolce",
        "p": [
          [
            "Decidi di tenere il tè e il cornetto al cioccolato. Il tè è caldo e ha un profumo di limone. All'inizio sei incerto, poi scopri che ti piace. La barista passa e si scusa per il suo errore. Tu sorridi e dici che oggi vuoi provare qualcosa di diverso. Esci con una nuova idea per la colazione di domani.",
            "Você decide ficar com o chá e o croissant de chocolate. O chá está quente e tem aroma de limão. No início fica em dúvida, depois descobre que gosta. A atendente passa e pede desculpas pelo erro. Você sorri e diz que hoje quer experimentar algo diferente. Você sai com uma nova ideia para o café da manhã de amanhã.",
            [
              [
                "Decidi di tenere il tè e il cornetto al cioccolato.",
                "Você decide ficar com o chá e o croissant de chocolate.",
                "decidere"
              ],
              [
                "Il tè è caldo e ha un profumo di limone.",
                "O chá está quente e tem aroma de limão.",
                "avere"
              ],
              [
                "All'inizio sei incerto, poi scopri che ti piace.",
                "No início fica em dúvida, depois descobre que gosta.",
                "piacere"
              ],
              [
                "La barista passa e si scusa per il suo errore.",
                "A atendente passa e pede desculpas pelo erro.",
                "passare"
              ],
              [
                "Tu sorridi e dici che oggi vuoi provare qualcosa di diverso.",
                "Você sorri e diz que hoje quer experimentar algo diferente.",
                "volere"
              ],
              [
                "Esci con una nuova idea per la colazione di domani.",
                "Você sai com uma nova ideia para o café da manhã de amanhã.",
                "domani"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Um sabor inesperado"
        }
      }
    }
  },
  {
    "id": "chiave-blu",
    "titulo": "La chiave blu",
    "genero": "Mistério",
    "nivel": "A2",
    "desc": "Uma chave desconhecida aparece na porta do apartamento.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "Un oggetto strano",
        "p": [
          [
            "Torni a casa dopo una giornata lunga e trovi una chiave blu davanti alla porta. Non è tua e non sembra una chiave normale. Accanto alla chiave c'è un foglietto con scritto «Per favore, guarda nel cortile». Nel palazzo abitano sei famiglie, ma oggi tutto è silenzioso. Il tuo vicino Marco di solito torna alle sette. Vuoi capire a chi appartiene la chiave prima di entrare.",
            "Você volta para casa depois de um dia longo e encontra uma chave azul diante da porta. Ela não é sua e não parece uma chave comum. Ao lado da chave há um bilhete dizendo “Por favor, olhe no pátio”. No prédio moram seis famílias, mas hoje tudo está silencioso. Seu vizinho Marco costuma voltar às sete. Você quer entender de quem é a chave antes de entrar.",
            [
              [
                "Torni a casa dopo una giornata lunga e trovi una chiave blu davanti alla porta.",
                "Você volta para casa depois de um dia longo e encontra uma chave azul diante da porta.",
                "trovare"
              ],
              [
                "Non è tua e non sembra una chiave normale.",
                "Ela não é sua e não parece uma chave comum.",
                "sembrare"
              ],
              [
                "Accanto alla chiave c'è un foglietto con scritto «Per favore, guarda nel cortile».",
                "Ao lado da chave há um bilhete dizendo “Por favor, olhe no pátio”.",
                "guardare"
              ],
              [
                "Nel palazzo abitano sei famiglie, ma oggi tutto è silenzioso.",
                "No prédio moram seis famílias, mas hoje tudo está silencioso.",
                "famiglia"
              ],
              [
                "Il tuo vicino Marco di solito torna alle sette.",
                "Seu vizinho Marco costuma voltar às sete.",
                "tornare"
              ],
              [
                "Vuoi capire a chi appartiene la chiave prima di entrare.",
                "Você quer entender de quem é a chave antes de entrar.",
                "capire"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Investigar a porta do pátio.",
            "fl": "Cercare la porta nel cortile.",
            "ir": "c2a"
          },
          {
            "pt": "Esperar o vizinho Marco.",
            "fl": "Aspettare il vicino Marco.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "La porta del cortile",
        "p": [
          [
            "Scendi le scale e vai nel cortile del palazzo. Vedi una piccola porta vicino alle biciclette. La porta ha una serratura dipinta di blu. Senti un rumore leggero e qualcuno che chiama da dentro. La voce appartiene alla signora Anna del terzo piano. Dice che la porta si è chiusa e non riesce ad aprirla.",
            "Você desce a escada e vai ao pátio do prédio. Você vê uma pequena porta perto das bicicletas. A porta tem uma fechadura pintada de azul. Você ouve um ruído leve e alguém chamando de dentro. A voz pertence à senhora Anna do terceiro andar. Ela diz que a porta se fechou e não consegue abri-la.",
            [
              [
                "Scendi le scale e vai nel cortile del palazzo.",
                "Você desce a escada e vai ao pátio do prédio.",
                "andare"
              ],
              [
                "Vedi una piccola porta vicino alle biciclette.",
                "Você vê uma pequena porta perto das bicicletas.",
                "vedere"
              ],
              [
                "La porta ha una serratura dipinta di blu.",
                "A porta tem uma fechadura pintada de azul.",
                "porta"
              ],
              [
                "Senti un rumore leggero e qualcuno che chiama da dentro.",
                "Você ouve um ruído leve e alguém chamando de dentro.",
                "sentire"
              ],
              [
                "La voce appartiene alla signora Anna del terzo piano.",
                "A voz pertence à senhora Anna do terceiro andar.",
                "signora"
              ],
              [
                "Dice che la porta si è chiusa e non riesce ad aprirla.",
                "Ela diz que a porta se fechou e não consegue abri-la.",
                "aprire"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Usar a chave para ajudar Anna.",
            "fl": "Usare la chiave per aiutare Anna.",
            "ir": "f_bom"
          },
          {
            "pt": "Deixar a chave na portaria.",
            "fl": "Lasciare la chiave al portiere.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "Il vicino Marco",
        "p": [
          [
            "Decidi di aspettare Marco per chiedere informazioni. Quando arriva, guarda la chiave e sembra sorpreso. Ti racconta che nel cortile c'è una piccola stanza per gli attrezzi. Anna ha perso la sua copia della chiave la settimana scorsa. Marco prova a chiamarla, ma lei non risponde al telefono. Ora sapete dove andare, ma è già buio.",
            "Você decide esperar Marco para pedir informações. Quando ele chega, olha a chave e parece surpreso. Ele conta que no pátio há um pequeno cômodo de ferramentas. Anna perdeu sua cópia da chave na semana passada. Marco tenta telefonar para ela, mas ela não atende. Agora vocês sabem aonde ir, mas já está escuro.",
            [
              [
                "Decidi di aspettare Marco per chiedere informazioni.",
                "Você decide esperar Marco para pedir informações.",
                "aspettare"
              ],
              [
                "Quando arriva, guarda la chiave e sembra sorpreso.",
                "Quando ele chega, olha a chave e parece surpreso.",
                "arrivare"
              ],
              [
                "Ti racconta che nel cortile c'è una piccola stanza per gli attrezzi.",
                "Ele conta que no pátio há um pequeno cômodo de ferramentas.",
                "raccontare"
              ],
              [
                "Anna ha perso la sua copia della chiave la settimana scorsa.",
                "Anna perdeu sua cópia da chave na semana passada.",
                "perdere"
              ],
              [
                "Marco prova a chiamarla, ma lei non risponde al telefono.",
                "Marco tenta telefonar para ela, mas ela não atende.",
                "chiamare"
              ],
              [
                "Ora sapete dove andare, ma è già buio.",
                "Agora vocês sabem aonde ir, mas já está escuro.",
                "sapere"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Ir com Marco até a porta.",
            "fl": "Andare con Marco alla porta.",
            "ir": "f_bom"
          },
          {
            "pt": "Escrever um aviso e esperar até amanhã.",
            "fl": "Scrivere un avviso e aspettare domani.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Una porta aperta",
        "p": [
          [
            "Apri la porta blu con attenzione e trovi Anna dentro. Lei sta bene, ma era rimasta senza il telefono. Ti dice grazie perché hai letto il messaggio. Marco porta una torcia e vi aiuta a chiudere la stanza. Il giorno dopo Anna lascia una torta davanti alla tua porta. Finalmente conosci meglio i vicini del tuo palazzo.",
            "Você abre a porta azul com cuidado e encontra Anna lá dentro. Ela está bem, mas tinha ficado sem o celular. Ela diz obrigado porque você leu a mensagem. Marco traz uma lanterna e ajuda vocês a fechar o cômodo. No dia seguinte, Anna deixa um bolo diante da sua porta. Finalmente você conhece melhor os vizinhos do seu prédio.",
            [
              [
                "Apri la porta blu con attenzione e trovi Anna dentro.",
                "Você abre a porta azul com cuidado e encontra Anna lá dentro.",
                "aprire"
              ],
              [
                "Lei sta bene, ma era rimasta senza il telefono.",
                "Ela está bem, mas tinha ficado sem o celular.",
                "stare"
              ],
              [
                "Ti dice grazie perché hai letto il messaggio.",
                "Ela diz obrigado porque você leu a mensagem.",
                "dire"
              ],
              [
                "Marco porta una torcia e vi aiuta a chiudere la stanza.",
                "Marco traz uma lanterna e ajuda vocês a fechar o cômodo.",
                "portare"
              ],
              [
                "Il giorno dopo Anna lascia una torta davanti alla tua porta.",
                "No dia seguinte, Anna deixa um bolo diante da sua porta.",
                "lasciare"
              ],
              [
                "Finalmente conosci meglio i vicini del tuo palazzo.",
                "Finalmente você conhece melhor os vizinhos do seu prédio.",
                "conoscere"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "A vizinha encontrada"
        }
      },
      "f_neutro": {
        "cap": "Il mistero continua",
        "p": [
          [
            "Lasci la chiave nel posto sicuro vicino al portiere. Scrivi una nota per spiegare dove l'hai trovata. La mattina seguente la chiave non c'è più. Anna ti manda un messaggio e dice che va tutto bene. Non sai esattamente che cosa è successo nel cortile. Ma ora hai una storia curiosa da raccontare agli amici.",
            "Você deixa a chave em um lugar seguro perto da portaria. Você escreve um bilhete para explicar onde a encontrou. Na manhã seguinte, a chave não está mais lá. Anna manda uma mensagem dizendo que está tudo bem. Você não sabe exatamente o que aconteceu no pátio. Mas agora você tem uma história curiosa para contar aos amigos.",
            [
              [
                "Lasci la chiave nel posto sicuro vicino al portiere.",
                "Você deixa a chave em um lugar seguro perto da portaria.",
                "lasciare"
              ],
              [
                "Scrivi una nota per spiegare dove l'hai trovata.",
                "Você escreve um bilhete para explicar onde a encontrou.",
                "scrivere"
              ],
              [
                "La mattina seguente la chiave non c'è più.",
                "Na manhã seguinte, a chave não está mais lá.",
                "chiave"
              ],
              [
                "Anna ti manda un messaggio e dice che va tutto bene.",
                "Anna manda uma mensagem dizendo que está tudo bem.",
                "dire"
              ],
              [
                "Non sai esattamente che cosa è successo nel cortile.",
                "Você não sabe exatamente o que aconteceu no pátio.",
                "sapere"
              ],
              [
                "Ma ora hai una storia curiosa da raccontare agli amici.",
                "Mas agora você tem uma história curiosa para contar aos amigos.",
                "avere"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Um recado misterioso"
        }
      }
    }
  },
  {
    "id": "primo-giorno-lavoro",
    "titulo": "Il primo giorno",
    "genero": "Trabalho",
    "nivel": "A2",
    "desc": "Uma reunião inesperada testa seu italiano no novo emprego.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "Una nuova squadra",
        "p": [
          [
            "Oggi inizi a lavorare in un piccolo ufficio a Milano. La tua collega Giulia ti mostra la scrivania e la cucina. Alle dieci arriva un cliente che vuole parlare di un nuovo progetto. Il responsabile ti chiede di partecipare alla riunione. Capisci molte parole, ma alcuni dettagli sono difficili. Hai due idee per seguire meglio la conversazione.",
            "Hoje você começa a trabalhar em um pequeno escritório em Milão. Sua colega Giulia mostra sua mesa e a cozinha. Às dez chega um cliente que quer falar de um novo projeto. O responsável pede que você participe da reunião. Você entende muitas palavras, mas alguns detalhes são difíceis. Você tem duas ideias para acompanhar melhor a conversa.",
            [
              [
                "Oggi inizi a lavorare in un piccolo ufficio a Milano.",
                "Hoje você começa a trabalhar em um pequeno escritório em Milão.",
                "lavorare"
              ],
              [
                "La tua collega Giulia ti mostra la scrivania e la cucina.",
                "Sua colega Giulia mostra sua mesa e a cozinha.",
                "mostrare"
              ],
              [
                "Alle dieci arriva un cliente che vuole parlare di un nuovo progetto.",
                "Às dez chega um cliente que quer falar de um novo projeto.",
                "parlare"
              ],
              [
                "Il responsabile ti chiede di partecipare alla riunione.",
                "O responsável pede que você participe da reunião.",
                "chiedere"
              ],
              [
                "Capisci molte parole, ma alcuni dettagli sono difficili.",
                "Você entende muitas palavras, mas alguns detalhes são difíceis.",
                "capire"
              ],
              [
                "Hai due idee per seguire meglio la conversazione.",
                "Você tem duas ideias para acompanhar melhor a conversa.",
                "avere"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Fazer uma pergunta durante a reunião.",
            "fl": "Fare una domanda durante la riunione.",
            "ir": "c2a"
          },
          {
            "pt": "Anotar primeiro e ouvir com calma.",
            "fl": "Prendere appunti e ascoltare.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "Fare domande",
        "p": [
          [
            "Decidi di fare una domanda semplice al cliente. Lui parla lentamente e spiega il progetto con un esempio. Giulia scrive tre parole importanti su un foglio. Il cliente vuole una risposta entro venerdì. Ora sai che cosa devi preparare per domani. Il responsabile ti invita a dare un'opinione.",
            "Você decide fazer uma pergunta simples ao cliente. Ele fala devagar e explica o projeto com um exemplo. Giulia escreve três palavras importantes em uma folha. O cliente quer uma resposta até sexta-feira. Agora você sabe o que precisa preparar para amanhã. O responsável convida você a dar uma opinião.",
            [
              [
                "Decidi di fare una domanda semplice al cliente.",
                "Você decide fazer uma pergunta simples ao cliente.",
                "fare"
              ],
              [
                "Lui parla lentamente e spiega il progetto con un esempio.",
                "Ele fala devagar e explica o projeto com um exemplo.",
                "parlare"
              ],
              [
                "Giulia scrive tre parole importanti su un foglio.",
                "Giulia escreve três palavras importantes em uma folha.",
                "scrivere"
              ],
              [
                "Il cliente vuole una risposta entro venerdì.",
                "O cliente quer uma resposta até sexta-feira.",
                "volere"
              ],
              [
                "Ora sai che cosa devi preparare per domani.",
                "Agora você sabe o que precisa preparar para amanhã.",
                "sapere"
              ],
              [
                "Il responsabile ti invita a dare un'opinione.",
                "O responsável convida você a dar uma opinião.",
                "dare"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Compartilhar sua ideia com a equipe.",
            "fl": "Condividere la tua idea con la squadra.",
            "ir": "f_bom"
          },
          {
            "pt": "Ouvir primeiro as opiniões dos outros.",
            "fl": "Ascoltare prima le opinioni degli altri.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "Ascoltare con calma",
        "p": [
          [
            "All'inizio preferisci ascoltare e prendere appunti. Scrivi i numeri, le date e le parole che riconosci. Quando il cliente fa una pausa, Giulia ti guarda. Ti chiede se hai bisogno di un piccolo riassunto. Hai paura di interrompere, ma vuoi lavorare bene. La riunione sta per finire e devi scegliere.",
            "No início você prefere escutar e tomar notas. Você anota os números, as datas e as palavras que reconhece. Quando o cliente faz uma pausa, Giulia olha para você. Ela pergunta se você precisa de um pequeno resumo. Você tem medo de interromper, mas quer trabalhar bem. A reunião está prestes a terminar e você precisa escolher.",
            [
              [
                "All'inizio preferisci ascoltare e prendere appunti.",
                "No início você prefere escutar e tomar notas.",
                "prendere"
              ],
              [
                "Scrivi i numeri, le date e le parole che riconosci.",
                "Você anota os números, as datas e as palavras que reconhece.",
                "scrivere"
              ],
              [
                "Quando il cliente fa una pausa, Giulia ti guarda.",
                "Quando o cliente faz uma pausa, Giulia olha para você.",
                "guardare"
              ],
              [
                "Ti chiede se hai bisogno di un piccolo riassunto.",
                "Ela pergunta se você precisa de um pequeno resumo.",
                "chiedere"
              ],
              [
                "Hai paura di interrompere, ma vuoi lavorare bene.",
                "Você tem medo de interromper, mas quer trabalhar bem.",
                "volere"
              ],
              [
                "La riunione sta per finire e devi scegliere.",
                "A reunião está prestes a terminar e você precisa escolher.",
                "finire"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Pedir um resumo e participar.",
            "fl": "Chiedere un riassunto e partecipare.",
            "ir": "f_bom"
          },
          {
            "pt": "Conferir suas notas depois da reunião.",
            "fl": "Controllare gli appunti dopo la riunione.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Una buona collaborazione",
        "p": [
          [
            "Dici con chiarezza che hai bisogno di una spiegazione. Giulia ti aiuta e il cliente risponde con pazienza. Proponi una piccola idea per migliorare il progetto. Il responsabile ascolta e dice che è una buona proposta. Alla fine tutti sorridono e fanno un nuovo piano. Tornando a casa, sei contento del tuo primo giorno.",
            "Você diz com clareza que precisa de uma explicação. Giulia ajuda você e o cliente responde com paciência. Você propõe uma pequena ideia para melhorar o projeto. O responsável escuta e diz que é uma boa proposta. No final todos sorriem e fazem um novo plano. Voltando para casa, você está contente com o primeiro dia.",
            [
              [
                "Dici con chiarezza che hai bisogno di una spiegazione.",
                "Você diz com clareza que precisa de uma explicação.",
                "dire"
              ],
              [
                "Giulia ti aiuta e il cliente risponde con pazienza.",
                "Giulia ajuda você e o cliente responde com paciência.",
                "aiutare"
              ],
              [
                "Proponi una piccola idea per migliorare il progetto.",
                "Você propõe uma pequena ideia para melhorar o projeto.",
                "migliorare"
              ],
              [
                "Il responsabile ascolta e dice che è una buona proposta.",
                "O responsável escuta e diz que é uma boa proposta.",
                "dire"
              ],
              [
                "Alla fine tutti sorridono e fanno un nuovo piano.",
                "No final todos sorriem e fazem um novo plano.",
                "fare"
              ],
              [
                "Tornando a casa, sei contento del tuo primo giorno.",
                "Voltando para casa, você está contente com o primeiro dia.",
                "tornare"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "Uma boa primeira impressão"
        }
      },
      "f_neutro": {
        "cap": "Un inizio tranquillo",
        "p": [
          [
            "Decidi di ascoltare fino alla fine della riunione. Capisci l'idea generale, anche se perdi qualche parola. Dopo, chiedi a Giulia di controllare i tuoi appunti. Lei dice che hai scritto quasi tutte le informazioni importanti. Preparate insieme un breve messaggio per il cliente. Domani potrai parlare con più sicurezza.",
            "Você decide escutar até o final da reunião. Você entende a ideia geral, mesmo perdendo algumas palavras. Depois, pede a Giulia para conferir suas anotações. Ela diz que você anotou quase todas as informações importantes. Vocês preparam juntos uma mensagem curta para o cliente. Amanhã você poderá falar com mais segurança.",
            [
              [
                "Decidi di ascoltare fino alla fine della riunione.",
                "Você decide escutar até o final da reunião.",
                "ascoltare"
              ],
              [
                "Capisci l'idea generale, anche se perdi qualche parola.",
                "Você entende a ideia geral, mesmo perdendo algumas palavras.",
                "capire"
              ],
              [
                "Dopo, chiedi a Giulia di controllare i tuoi appunti.",
                "Depois, pede a Giulia para conferir suas anotações.",
                "chiedere"
              ],
              [
                "Lei dice che hai scritto quasi tutte le informazioni importanti.",
                "Ela diz que você anotou quase todas as informações importantes.",
                "scrivere"
              ],
              [
                "Preparate insieme un breve messaggio per il cliente.",
                "Vocês preparam juntos uma mensagem curta para o cliente.",
                "preparare"
              ],
              [
                "Domani potrai parlare con più sicurezza.",
                "Amanhã você poderá falar com mais segurança.",
                "parlare"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Aprendendo com calma"
        }
      }
    }
  },
  {
    "id": "cena-dei-vicini",
    "titulo": "La cena dei vicini",
    "genero": "Relações",
    "nivel": "A1",
    "desc": "Um jantar entre vizinhos vira uma oportunidade de fazer amizades.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "Un invito",
        "p": [
          [
            "La tua vicina Sofia ti invita a cena venerdì sera. Abiti in questo palazzo da soltanto due settimane. Non conosci ancora molte persone in città. Sofia dice che ognuno può portare qualcosa da mangiare. In cucina trovi pomodori, pane, formaggio e un po' di frutta. Devi scegliere che cosa preparare per gli ospiti.",
            "Sua vizinha Sofia convida você para jantar na sexta-feira à noite. Você mora neste prédio há apenas duas semanas. Você ainda não conhece muitas pessoas na cidade. Sofia diz que cada um pode levar algo para comer. Na cozinha você encontra tomates, pão, queijo e algumas frutas. Você precisa escolher o que preparar para os convidados.",
            [
              [
                "La tua vicina Sofia ti invita a cena venerdì sera.",
                "Sua vizinha Sofia convida você para jantar na sexta-feira à noite.",
                "invitare"
              ],
              [
                "Abiti in questo palazzo da soltanto due settimane.",
                "Você mora neste prédio há apenas duas semanas.",
                "abitare"
              ],
              [
                "Non conosci ancora molte persone in città.",
                "Você ainda não conhece muitas pessoas na cidade.",
                "conoscere"
              ],
              [
                "Sofia dice che ognuno può portare qualcosa da mangiare.",
                "Sofia diz que cada um pode levar algo para comer.",
                "portare"
              ],
              [
                "In cucina trovi pomodori, pane, formaggio e un po' di frutta.",
                "Na cozinha você encontra tomates, pão, queijo e algumas frutas.",
                "trovare"
              ],
              [
                "Devi scegliere che cosa preparare per gli ospiti.",
                "Você precisa escolher o que preparar para os convidados.",
                "preparare"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Preparar uma salada para o jantar.",
            "fl": "Preparare un'insalata per la cena.",
            "ir": "c2a"
          },
          {
            "pt": "Comprar um bolo para compartilhar.",
            "fl": "Comprare una torta da condividere.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "Una ricetta semplice",
        "p": [
          [
            "Prepari un'insalata fresca con pomodori e formaggio. Aggiungi un po' di olio e qualche foglia di basilico. Quando arrivi, Sofia apre la porta e ti saluta. Tutti sono seduti intorno a un grande tavolo. Una persona chiede come si prepara la tua insalata. Puoi spiegare la ricetta o semplicemente sorridere.",
            "Você prepara uma salada fresca com tomates e queijo. Acrescenta um pouco de azeite e algumas folhas de manjericão. Quando você chega, Sofia abre a porta e cumprimenta você. Todos estão sentados em torno de uma mesa grande. Uma pessoa pergunta como se prepara sua salada. Você pode explicar a receita ou simplesmente sorrir.",
            [
              [
                "Prepari un'insalata fresca con pomodori e formaggio.",
                "Você prepara uma salada fresca com tomates e queijo.",
                "preparare"
              ],
              [
                "Aggiungi un po' di olio e qualche foglia di basilico.",
                "Acrescenta um pouco de azeite e algumas folhas de manjericão.",
                "aggiungere"
              ],
              [
                "Quando arrivi, Sofia apre la porta e ti saluta.",
                "Quando você chega, Sofia abre a porta e cumprimenta você.",
                "arrivare"
              ],
              [
                "Tutti sono seduti intorno a un grande tavolo.",
                "Todos estão sentados em torno de uma mesa grande.",
                "tavolo"
              ],
              [
                "Una persona chiede come si prepara la tua insalata.",
                "Uma pessoa pergunta como se prepara sua salada.",
                "chiedere"
              ],
              [
                "Puoi spiegare la ricetta o semplicemente sorridere.",
                "Você pode explicar a receita ou simplesmente sorrir.",
                "potere"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Explicar a receita e conversar.",
            "fl": "Spiegare la ricetta e parlare.",
            "ir": "f_bom"
          },
          {
            "pt": "Aproveitar o jantar em silêncio.",
            "fl": "Godersi la cena in silenzio.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "Un dolce da condividere",
        "p": [
          [
            "Decidi di comprare una torta nella pasticceria vicina. La commessa ti dice che la torta con mele e cannella è buona. Arrivi a casa di Sofia e senti musica nella sala. Un vicino prende la torta e ti ringrazia. Qualcuno propone di giocare a un piccolo gioco dopo cena. Non sai se partecipare, perché conosci poche parole.",
            "Você decide comprar um bolo na confeitaria próxima. A atendente diz que o bolo de maçã e canela é bom. Você chega à casa de Sofia e ouve música na sala. Um vizinho pega o bolo e agradece. Alguém propõe brincar de um jogo depois do jantar. Você não sabe se deve participar, pois conhece poucas palavras.",
            [
              [
                "Decidi di comprare una torta nella pasticceria vicina.",
                "Você decide comprar um bolo na confeitaria próxima.",
                "comprare"
              ],
              [
                "La commessa ti dice che la torta con mele e cannella è buona.",
                "A atendente diz que o bolo de maçã e canela é bom.",
                "dire"
              ],
              [
                "Arrivi a casa di Sofia e senti musica nella sala.",
                "Você chega à casa de Sofia e ouve música na sala.",
                "arrivare"
              ],
              [
                "Un vicino prende la torta e ti ringrazia.",
                "Um vizinho pega o bolo e agradece.",
                "prendere"
              ],
              [
                "Qualcuno propone di giocare a un piccolo gioco dopo cena.",
                "Alguém propõe brincar de um jogo depois do jantar.",
                "giocare"
              ],
              [
                "Non sai se partecipare, perché conosci poche parole.",
                "Você não sabe se deve participar, pois conhece poucas palavras.",
                "sapere"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Participar do jogo dos vizinhos.",
            "fl": "Partecipare al gioco dei vicini.",
            "ir": "f_bom"
          },
          {
            "pt": "Ficar ouvindo a conversa.",
            "fl": "Ascoltare la conversazione.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Nuovi amici",
        "p": [
          [
            "Ti presenti e racconti qualcosa della tua città. Gli altri ascoltano e fanno domande interessanti. Sofia propone una passeggiata insieme domenica mattina. Dici di sì perché vuoi conoscere meglio il quartiere. Prima di andare via, scambiate i numeri di telefono. Torni a casa felice: la città sembra già più familiare.",
            "Você se apresenta e conta um pouco sobre sua cidade. Os outros escutam e fazem perguntas interessantes. Sofia propõe um passeio juntos no domingo de manhã. Você diz que sim porque quer conhecer melhor o bairro. Antes de ir embora, vocês trocam os números de telefone. Você volta feliz para casa: a cidade já parece mais familiar.",
            [
              [
                "Ti presenti e racconti qualcosa della tua città.",
                "Você se apresenta e conta um pouco sobre sua cidade.",
                "raccontare"
              ],
              [
                "Gli altri ascoltano e fanno domande interessanti.",
                "Os outros escutam e fazem perguntas interessantes.",
                "ascoltare"
              ],
              [
                "Sofia propone una passeggiata insieme domenica mattina.",
                "Sofia propõe um passeio juntos no domingo de manhã.",
                "domenica"
              ],
              [
                "Dici di sì perché vuoi conoscere meglio il quartiere.",
                "Você diz que sim porque quer conhecer melhor o bairro.",
                "volere"
              ],
              [
                "Prima di andare via, scambiate i numeri di telefono.",
                "Antes de ir embora, vocês trocam os números de telefone.",
                "telefono"
              ],
              [
                "Torni a casa felice: la città sembra già più familiare.",
                "Você volta feliz para casa: a cidade já parece mais familiar.",
                "casa"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "Amigos novos"
        }
      },
      "f_neutro": {
        "cap": "Una serata tranquilla",
        "p": [
          [
            "Ti siedi vicino alla finestra e ascolti la conversazione. Non parli molto, ma capisci diversi argomenti. Sofia ti offre un'altra fetta di torta. Prima di uscire, ringrazi tutti per la bella serata. Un vicino ti invita a prendere un caffè la prossima settimana. Accetti volentieri e torni a casa con un sorriso.",
            "Você se senta perto da janela e escuta a conversa. Você não fala muito, mas entende vários assuntos. Sofia oferece outra fatia de bolo. Antes de sair, você agradece a todos pela noite agradável. Um vizinho convida você para tomar um café na próxima semana. Você aceita de bom grado e volta para casa sorrindo.",
            [
              [
                "Ti siedi vicino alla finestra e ascolti la conversazione.",
                "Você se senta perto da janela e escuta a conversa.",
                "ascoltare"
              ],
              [
                "Non parli molto, ma capisci diversi argomenti.",
                "Você não fala muito, mas entende vários assuntos.",
                "capire"
              ],
              [
                "Sofia ti offre un'altra fetta di torta.",
                "Sofia oferece outra fatia de bolo.",
                "offrire"
              ],
              [
                "Prima di uscire, ringrazi tutti per la bella serata.",
                "Antes de sair, você agradece a todos pela noite agradável.",
                "uscire"
              ],
              [
                "Un vicino ti invita a prendere un caffè la prossima settimana.",
                "Um vizinho convida você para tomar um café na próxima semana.",
                "caffè"
              ],
              [
                "Accetti volentieri e torni a casa con un sorriso.",
                "Você aceita de bom grado e volta para casa sorrindo.",
                "tornare"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Uma conversa tranquila"
        }
      }
    }
  },
  {
    "id": "luce-del-faro",
    "titulo": "La luce del faro",
    "genero": "Suspense",
    "nivel": "A2",
    "desc": "Uma luz estranha aparece no farol de uma vila costeira.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "La costa di sera",
        "p": [
          [
            "Sei in vacanza in un piccolo paese vicino al mare. Ogni sera vedi la luce del faro sopra la collina. Oggi la luce si accende e si spegne tre volte. Un pescatore dice che normalmente il faro funziona senza problemi. Dal porto senti una radio che trasmette un messaggio poco chiaro. Vuoi capire che cosa sta succedendo prima che arrivi il buio.",
            "Você está de férias em uma pequena vila perto do mar. Todas as noites você vê a luz do farol sobre a colina. Hoje a luz acende e apaga três vezes. Um pescador diz que o farol normalmente funciona sem problemas. Do porto você ouve um rádio transmitindo uma mensagem pouco clara. Você quer entender o que está acontecendo antes de escurecer.",
            [
              [
                "Sei in vacanza in un piccolo paese vicino al mare.",
                "Você está de férias em uma pequena vila perto do mar.",
                "mare"
              ],
              [
                "Ogni sera vedi la luce del faro sopra la collina.",
                "Todas as noites você vê a luz do farol sobre a colina.",
                "vedere"
              ],
              [
                "Oggi la luce si accende e si spegne tre volte.",
                "Hoje a luz acende e apaga três vezes.",
                "luce"
              ],
              [
                "Un pescatore dice che normalmente il faro funziona senza problemi.",
                "Um pescador diz que o farol normalmente funciona sem problemas.",
                "dire"
              ],
              [
                "Dal porto senti una radio che trasmette un messaggio poco chiaro.",
                "Do porto você ouve um rádio transmitindo uma mensagem pouco clara.",
                "sentire"
              ],
              [
                "Vuoi capire che cosa sta succedendo prima che arrivi il buio.",
                "Você quer entender o que está acontecendo antes de escurecer.",
                "capire"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Subir até o farol com um pescador.",
            "fl": "Salire al faro con un pescatore.",
            "ir": "c2a"
          },
          {
            "pt": "Verificar o rádio no porto.",
            "fl": "Controllare la radio al porto.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "La strada in salita",
        "p": [
          [
            "Segui la strada che porta al faro insieme a un pescatore. Camminate lentamente perché le pietre sono bagnate. Vicino alla porta trovate una piccola finestra illuminata. Una donna all'interno controlla un vecchio apparecchio. Dice che il generatore ha bisogno di una nuova batteria. Il pescatore ne ha una sulla sua barca, ma deve tornare al porto.",
            "Você segue a estrada que leva ao farol acompanhado por um pescador. Vocês caminham devagar porque as pedras estão molhadas. Perto da porta vocês encontram uma pequena janela iluminada. Uma mulher lá dentro confere um aparelho antigo. Ela diz que o gerador precisa de uma bateria nova. O pescador tem uma em seu barco, mas precisa voltar ao porto.",
            [
              [
                "Segui la strada che porta al faro insieme a un pescatore.",
                "Você segue a estrada que leva ao farol acompanhado por um pescador.",
                "seguire"
              ],
              [
                "Camminate lentamente perché le pietre sono bagnate.",
                "Vocês caminham devagar porque as pedras estão molhadas.",
                "camminare"
              ],
              [
                "Vicino alla porta trovate una piccola finestra illuminata.",
                "Perto da porta vocês encontram uma pequena janela iluminada.",
                "trovare"
              ],
              [
                "Una donna all'interno controlla un vecchio apparecchio.",
                "Uma mulher lá dentro confere um aparelho antigo.",
                "controllare"
              ],
              [
                "Dice che il generatore ha bisogno di una nuova batteria.",
                "Ela diz que o gerador precisa de uma bateria nova.",
                "bisogno"
              ],
              [
                "Il pescatore ne ha una sulla sua barca, ma deve tornare al porto.",
                "O pescador tem uma em seu barco, mas precisa voltar ao porto.",
                "tornare"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Buscar uma bateria nova com o pescador.",
            "fl": "Cercare una batteria nuova.",
            "ir": "f_bom"
          },
          {
            "pt": "Avisar a equipe e esperar em segurança.",
            "fl": "Avvisare la squadra e aspettare.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "Una voce alla radio",
        "p": [
          [
            "Vai al porto e chiedi al pescatore di ascoltare la radio con te. Una voce dice che una barca è in ritardo per il vento. La luce del faro è importante per chi torna dal mare. Il pescatore conosce la persona che lavora al faro. Potete chiamarla al telefono o andare insieme a controllare. Intanto il cielo diventa sempre più scuro.",
            "Você vai ao porto e pede ao pescador para ouvir o rádio com você. Uma voz diz que um barco está atrasado por causa do vento. A luz do farol é importante para quem volta do mar. O pescador conhece a pessoa que trabalha no farol. Vocês podem telefonar para ela ou ir conferir juntos. Enquanto isso, o céu fica cada vez mais escuro.",
            [
              [
                "Vai al porto e chiedi al pescatore di ascoltare la radio con te.",
                "Você vai ao porto e pede ao pescador para ouvir o rádio com você.",
                "ascoltare"
              ],
              [
                "Una voce dice che una barca è in ritardo per il vento.",
                "Uma voz diz que um barco está atrasado por causa do vento.",
                "dire"
              ],
              [
                "La luce del faro è importante per chi torna dal mare.",
                "A luz do farol é importante para quem volta do mar.",
                "importante"
              ],
              [
                "Il pescatore conosce la persona che lavora al faro.",
                "O pescador conhece a pessoa que trabalha no farol.",
                "conoscere"
              ],
              [
                "Potete chiamarla al telefono o andare insieme a controllare.",
                "Vocês podem telefonar para ela ou ir conferir juntos.",
                "potere"
              ],
              [
                "Intanto il cielo diventa sempre più scuro.",
                "Enquanto isso, o céu fica cada vez mais escuro.",
                "cielo"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Telefonar e levar ajuda ao farol.",
            "fl": "Telefonare e portare aiuto al faro.",
            "ir": "f_bom"
          },
          {
            "pt": "Avisar o porto e aguardar os técnicos.",
            "fl": "Avvisare il porto e attendere i tecnici.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Il segnale torna",
        "p": [
          [
            "Insieme riuscite a portare una batteria nuova al faro. La donna sostituisce il pezzo e accende il sistema. La luce ora gira regolarmente sul mare. Dal porto arriva un messaggio: la barca sta tornando. Il pescatore ti ringrazia per aver chiesto aiuto. Quella sera guardi la luce con un senso di tranquillità.",
            "Juntos vocês conseguem levar uma bateria nova ao farol. A mulher troca a peça e liga o sistema. A luz agora gira regularmente sobre o mar. Do porto chega uma mensagem: o barco está voltando. O pescador agradece por você ter pedido ajuda. Naquela noite você observa a luz com uma sensação de tranquilidade.",
            [
              [
                "Insieme riuscite a portare una batteria nuova al faro.",
                "Juntos vocês conseguem levar uma bateria nova ao farol.",
                "portare"
              ],
              [
                "La donna sostituisce il pezzo e accende il sistema.",
                "A mulher troca a peça e liga o sistema.",
                "accendere"
              ],
              [
                "La luce ora gira regolarmente sul mare.",
                "A luz agora gira regularmente sobre o mar.",
                "mare"
              ],
              [
                "Dal porto arriva un messaggio: la barca sta tornando.",
                "Do porto chega uma mensagem: o barco está voltando.",
                "arrivare"
              ],
              [
                "Il pescatore ti ringrazia per aver chiesto aiuto.",
                "O pescador agradece por você ter pedido ajuda.",
                "aiuto"
              ],
              [
                "Quella sera guardi la luce con un senso di tranquillità.",
                "Naquela noite você observa a luz com uma sensação de tranquilidade.",
                "guardare"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "O farol voltou a brilhar"
        }
      },
      "f_neutro": {
        "cap": "Una notte di attesa",
        "p": [
          [
            "Avvisi il porto e scegli di aspettare in un posto sicuro. La squadra del faro arriva con gli strumenti necessari. Ci vuole tempo per controllare tutto il sistema. Il pescatore ti offre un tè caldo mentre aspettate. Dopo un'ora la luce torna a funzionare. Capisci che qualche volta la scelta migliore è chiedere aiuto e avere pazienza.",
            "Você avisa o porto e decide esperar em um lugar seguro. A equipe do farol chega com as ferramentas necessárias. Leva tempo para conferir todo o sistema. O pescador oferece um chá quente enquanto vocês esperam. Depois de uma hora a luz volta a funcionar. Você entende que às vezes a melhor escolha é pedir ajuda e ter paciência.",
            [
              [
                "Avvisi il porto e scegli di aspettare in un posto sicuro.",
                "Você avisa o porto e decide esperar em um lugar seguro.",
                "aspettare"
              ],
              [
                "La squadra del faro arriva con gli strumenti necessari.",
                "A equipe do farol chega com as ferramentas necessárias.",
                "arrivare"
              ],
              [
                "Ci vuole tempo per controllare tutto il sistema.",
                "Leva tempo para conferir todo o sistema.",
                "tempo"
              ],
              [
                "Il pescatore ti offre un tè caldo mentre aspettate.",
                "O pescador oferece um chá quente enquanto vocês esperam.",
                "offrire"
              ],
              [
                "Dopo un'ora la luce torna a funzionare.",
                "Depois de uma hora a luz volta a funcionar.",
                "tornare"
              ],
              [
                "Capisci che qualche volta la scelta migliore è chiedere aiuto e avere pazienza.",
                "Você entende que às vezes a melhor escolha é pedir ajuda e ter paciência.",
                "capire"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Uma espera segura"
        }
      }
    }
  }
];
