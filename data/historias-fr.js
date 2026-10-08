// Histórias interativas em francês (A1–A2): escolhas, tradução contextual e múltiplos finais.
window.VB_HIST=window.VB_HIST||{};
window.VB_HIST.fr=[
  {
    "id": "dernier-metro",
    "titulo": "Le dernier métro",
    "genero": "Viagem",
    "nivel": "A1",
    "desc": "Uma noite em Paris, duas linhas de metrô e um endereço para encontrar.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "La station",
        "p": [
          [
            "Il est presque minuit et tu arrives dans une station de métro à Paris. Tu as l'adresse de ton hôtel sur ton téléphone. Le dernier métro part dans huit minutes. Sur le plan, tu vois deux lignes de couleurs différentes. Une femme attend près de la machine à billets. Tu dois choisir comment trouver le bon chemin.",
            "É quase meia-noite e você chega a uma estação de metrô em Paris. Você tem o endereço do hotel no celular. O último metrô parte em oito minutos. No mapa, você vê duas linhas de cores diferentes. Uma mulher espera perto da máquina de passagens. Você precisa escolher como encontrar o caminho correto.",
            [
              [
                "Il est presque minuit et tu arrives dans une station de métro à Paris.",
                "É quase meia-noite e você chega a uma estação de metrô em Paris.",
                "arriver"
              ],
              [
                "Tu as l'adresse de ton hôtel sur ton téléphone.",
                "Você tem o endereço do hotel no celular.",
                "avoir"
              ],
              [
                "Le dernier métro part dans huit minutes.",
                "O último metrô parte em oito minutos.",
                "partir"
              ],
              [
                "Sur le plan, tu vois deux lignes de couleurs différentes.",
                "No mapa, você vê duas linhas de cores diferentes.",
                "voir"
              ],
              [
                "Une femme attend près de la machine à billets.",
                "Uma mulher espera perto da máquina de passagens.",
                "attendre"
              ],
              [
                "Tu dois choisir comment trouver le bon chemin.",
                "Você precisa escolher como encontrar o caminho correto.",
                "trouver"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Pedir informações à mulher.",
            "fl": "Demander des informations à la femme.",
            "ir": "c2a"
          },
          {
            "pt": "Consultar sozinho o mapa.",
            "fl": "Lire le plan tout seul.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "Une bonne question",
        "p": [
          [
            "Tu demandes à la femme quelle ligne va vers ton hôtel. Elle regarde ton adresse et réfléchit un instant. Elle explique que tu dois changer de ligne à la prochaine station. Tu répètes le nom de la station pour être sûr. La femme sourit et t'indique l'escalier de droite. Tu entends déjà le bruit du métro qui arrive.",
            "Você pergunta à mulher qual linha vai em direção ao hotel. Ela olha seu endereço e pensa por um instante. Ela explica que você precisa trocar de linha na próxima estação. Você repete o nome da estação para ter certeza. A mulher sorri e indica a escada da direita. Você já ouve o barulho do metrô chegando.",
            [
              [
                "Tu demandes à la femme quelle ligne va vers ton hôtel.",
                "Você pergunta à mulher qual linha vai em direção ao hotel.",
                "demander"
              ],
              [
                "Elle regarde ton adresse et réfléchit un instant.",
                "Ela olha seu endereço e pensa por um instante.",
                "regarder"
              ],
              [
                "Elle explique que tu dois changer de ligne à la prochaine station.",
                "Ela explica que você precisa trocar de linha na próxima estação.",
                "devoir"
              ],
              [
                "Tu répètes le nom de la station pour être sûr.",
                "Você repete o nome da estação para ter certeza.",
                "être"
              ],
              [
                "La femme sourit et t'indique l'escalier de droite.",
                "A mulher sorri e indica a escada da direita.",
                "dire"
              ],
              [
                "Tu entends déjà le bruit du métro qui arrive.",
                "Você já ouve o barulho do metrô chegando.",
                "entendre"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Seguir a orientação e pegar a linha indicada.",
            "fl": "Suivre les indications et prendre la bonne ligne.",
            "ir": "f_bom"
          },
          {
            "pt": "Parar para conferir o mapa mais uma vez.",
            "fl": "Vérifier encore une fois le plan.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "Le plan du métro",
        "p": [
          [
            "Tu décides de lire le plan tout seul. Tu trouves ton quartier mais le nom est un peu difficile. Un agent passe et te demande si tu as besoin d'aide. Tu peux lui montrer l'adresse sur ton téléphone. De l'autre côté, les portes du métro vont bientôt fermer. Tu hésites entre demander et courir vers le quai.",
            "Você decide ler o mapa sozinho. Você encontra seu bairro, mas o nome é um pouco difícil. Um funcionário passa e pergunta se você precisa de ajuda. Você pode mostrar a ele o endereço no celular. Do outro lado, as portas do metrô vão fechar em breve. Você hesita entre perguntar e correr para a plataforma.",
            [
              [
                "Tu décides de lire le plan tout seul.",
                "Você decide ler o mapa sozinho.",
                "lire"
              ],
              [
                "Tu trouves ton quartier mais le nom est un peu difficile.",
                "Você encontra seu bairro, mas o nome é um pouco difícil.",
                "trouver"
              ],
              [
                "Un agent passe et te demande si tu as besoin d'aide.",
                "Um funcionário passa e pergunta se você precisa de ajuda.",
                "demander"
              ],
              [
                "Tu peux lui montrer l'adresse sur ton téléphone.",
                "Você pode mostrar a ele o endereço no celular.",
                "pouvoir"
              ],
              [
                "De l'autre côté, les portes du métro vont bientôt fermer.",
                "Do outro lado, as portas do metrô vão fechar em breve.",
                "aller"
              ],
              [
                "Tu hésites entre demander et courir vers le quai.",
                "Você hesita entre perguntar e correr para a plataforma.",
                "demander"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Mostrar o endereço ao funcionário.",
            "fl": "Montrer l'adresse à l'agent.",
            "ir": "f_bom"
          },
          {
            "pt": "Correr para o metrô sem perguntar.",
            "fl": "Courir vers le métro sans demander.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "À la bonne adresse",
        "p": [
          [
            "Tu prends la bonne ligne et tu changes de métro sans problème. Après quelques stations, tu arrives dans une rue calme. L'hôtel est juste en face d'une petite boulangerie. La réceptionniste te donne la clé de ta chambre. Tu es fatigué mais content d'avoir trouvé ton chemin. Demain, tu veux découvrir la ville à pied.",
            "Você pega a linha correta e troca de metrô sem problemas. Depois de algumas estações, você chega a uma rua tranquila. O hotel fica bem em frente a uma pequena padaria. A recepcionista entrega a chave do seu quarto. Você está cansado, mas feliz por ter encontrado o caminho. Amanhã você quer conhecer a cidade a pé.",
            [
              [
                "Tu prends la bonne ligne et tu changes de métro sans problème.",
                "Você pega a linha correta e troca de metrô sem problemas.",
                "prendre"
              ],
              [
                "Après quelques stations, tu arrives dans une rue calme.",
                "Depois de algumas estações, você chega a uma rua tranquila.",
                "arriver"
              ],
              [
                "L'hôtel est juste en face d'une petite boulangerie.",
                "O hotel fica bem em frente a uma pequena padaria.",
                "hôtel"
              ],
              [
                "La réceptionniste te donne la clé de ta chambre.",
                "A recepcionista entrega a chave do seu quarto.",
                "donner"
              ],
              [
                "Tu es fatigué mais content d'avoir trouvé ton chemin.",
                "Você está cansado, mas feliz por ter encontrado o caminho.",
                "être"
              ],
              [
                "Demain, tu veux découvrir la ville à pied.",
                "Amanhã você quer conhecer a cidade a pé.",
                "vouloir"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "No caminho certo"
        }
      },
      "f_neutro": {
        "cap": "Une petite aventure",
        "p": [
          [
            "Tu rates le métro de quelques secondes. Tu restes calme et cherches une autre solution. Un agent te montre l'arrêt du bus de nuit. Le trajet est plus long mais tu vois les lumières de Paris. À l'hôtel, tu racontes cette petite aventure à la réceptionniste. Tu arrives plus tard que prévu, avec une nouvelle histoire à raconter.",
            "Você perde o metrô por alguns segundos. Você fica tranquilo e procura outra solução. Um funcionário mostra o ponto do ônibus noturno. O trajeto é mais longo, mas você vê as luzes de Paris. No hotel, você conta essa pequena aventura à recepcionista. Você chega mais tarde do que esperava, com uma nova história para contar.",
            [
              [
                "Tu rates le métro de quelques secondes.",
                "Você perde o metrô por alguns segundos.",
                "métro"
              ],
              [
                "Tu restes calme et cherches une autre solution.",
                "Você fica tranquilo e procura outra solução.",
                "rester"
              ],
              [
                "Un agent te montre l'arrêt du bus de nuit.",
                "Um funcionário mostra o ponto do ônibus noturno.",
                "montrer"
              ],
              [
                "Le trajet est plus long mais tu vois les lumières de Paris.",
                "O trajeto é mais longo, mas você vê as luzes de Paris.",
                "voir"
              ],
              [
                "À l'hôtel, tu racontes cette petite aventure à la réceptionniste.",
                "No hotel, você conta essa pequena aventura à recepcionista.",
                "raconter"
              ],
              [
                "Tu arrives plus tard que prévu, avec une nouvelle histoire à raconter.",
                "Você chega mais tarde do que esperava, com uma nova história para contar.",
                "arriver"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Outra rota por Paris"
        }
      }
    }
  },
  {
    "id": "petit-cafe",
    "titulo": "Le café des lettres",
    "genero": "Cotidiano",
    "nivel": "A1",
    "desc": "Um café movimentado, um bilhete perdido e uma conversa inesperada.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "Un matin tranquille",
        "p": [
          [
            "Tu entres dans un petit café près de la place du village. Tu commandes un chocolat chaud et un morceau de gâteau. Sur la table, tu trouves une enveloppe avec un prénom. Le serveur dit que personne n'est venu chercher cette lettre. Une vieille dame est assise près de la fenêtre. Tu veux rendre la lettre sans ouvrir l'enveloppe.",
            "Você entra em um pequeno café perto da praça da vila. Você pede um chocolate quente e um pedaço de bolo. Sobre a mesa, você encontra um envelope com um nome. O garçom diz que ninguém veio buscar essa carta. Uma senhora idosa está sentada perto da janela. Você quer devolver a carta sem abrir o envelope.",
            [
              [
                "Tu entres dans un petit café près de la place du village.",
                "Você entra em um pequeno café perto da praça da vila.",
                "entrer"
              ],
              [
                "Tu commandes un chocolat chaud et un morceau de gâteau.",
                "Você pede um chocolate quente e um pedaço de bolo.",
                "chaud"
              ],
              [
                "Sur la table, tu trouves une enveloppe avec un prénom.",
                "Sobre a mesa, você encontra um envelope com um nome.",
                "trouver"
              ],
              [
                "Le serveur dit que personne n'est venu chercher cette lettre.",
                "O garçom diz que ninguém veio buscar essa carta.",
                "dire"
              ],
              [
                "Une vieille dame est assise près de la fenêtre.",
                "Uma senhora idosa está sentada perto da janela.",
                "fenêtre"
              ],
              [
                "Tu veux rendre la lettre sans ouvrir l'enveloppe.",
                "Você quer devolver a carta sem abrir o envelope.",
                "vouloir"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Perguntar à senhora perto da janela.",
            "fl": "Demander à la dame près de la fenêtre.",
            "ir": "c2a"
          },
          {
            "pt": "Entregar o envelope ao garçom.",
            "fl": "Donner l'enveloppe au serveur.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "La dame près de la fenêtre",
        "p": [
          [
            "Tu demandes à la dame si elle connaît le prénom écrit sur la lettre. Elle regarde l'enveloppe et sourit doucement. Elle dit que sa voisine attend une réponse depuis plusieurs jours. La dame connaît l'adresse de cette voisine. Tu peux lui donner la lettre ou la laisser au café. Le serveur te remercie d'avoir posé la question.",
            "Você pergunta à senhora se conhece o nome escrito na carta. Ela olha o envelope e sorri suavemente. Ela diz que sua vizinha espera uma resposta há vários dias. A senhora conhece o endereço dessa vizinha. Você pode dar a carta a ela ou deixá-la no café. O garçom agradece por você ter feito a pergunta.",
            [
              [
                "Tu demandes à la dame si elle connaît le prénom écrit sur la lettre.",
                "Você pergunta à senhora se conhece o nome escrito na carta.",
                "demander"
              ],
              [
                "Elle regarde l'enveloppe et sourit doucement.",
                "Ela olha o envelope e sorri suavemente.",
                "regarder"
              ],
              [
                "Elle dit que sa voisine attend une réponse depuis plusieurs jours.",
                "Ela diz que sua vizinha espera uma resposta há vários dias.",
                "attendre"
              ],
              [
                "La dame connaît l'adresse de cette voisine.",
                "A senhora conhece o endereço dessa vizinha.",
                "connaître"
              ],
              [
                "Tu peux lui donner la lettre ou la laisser au café.",
                "Você pode dar a carta a ela ou deixá-la no café.",
                "donner"
              ],
              [
                "Le serveur te remercie d'avoir posé la question.",
                "O garçom agradece por você ter feito a pergunta.",
                "avoir"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Pedir que a senhora entregue a carta.",
            "fl": "Demander à la dame de donner la lettre.",
            "ir": "f_bom"
          },
          {
            "pt": "Deixar a carta no café com um recado.",
            "fl": "Laisser la lettre au café avec un mot.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "Le serveur curieux",
        "p": [
          [
            "Tu montres l'enveloppe au serveur derrière le comptoir. Il lit le prénom et cherche dans un petit carnet. Il trouve un numéro de téléphone écrit la semaine dernière. Il te propose d'appeler la personne avec toi. Tu vois que le café devient de plus en plus animé. Tu dois choisir entre appeler maintenant et attendre.",
            "Você mostra o envelope ao garçom atrás do balcão. Ele lê o nome e procura em um pequeno caderno. Ele encontra um número de telefone anotado na semana passada. Ele propõe telefonar para a pessoa com você. Você vê que o café fica cada vez mais movimentado. Você precisa escolher entre telefonar agora e esperar.",
            [
              [
                "Tu montres l'enveloppe au serveur derrière le comptoir.",
                "Você mostra o envelope ao garçom atrás do balcão.",
                "montrer"
              ],
              [
                "Il lit le prénom et cherche dans un petit carnet.",
                "Ele lê o nome e procura em um pequeno caderno.",
                "chercher"
              ],
              [
                "Il trouve un numéro de téléphone écrit la semaine dernière.",
                "Ele encontra um número de telefone anotado na semana passada.",
                "trouver"
              ],
              [
                "Il te propose d'appeler la personne avec toi.",
                "Ele propõe telefonar para a pessoa com você.",
                "appeler"
              ],
              [
                "Tu vois que le café devient de plus en plus animé.",
                "Você vê que o café fica cada vez mais movimentado.",
                "voir"
              ],
              [
                "Tu dois choisir entre appeler maintenant et attendre.",
                "Você precisa escolher entre telefonar agora e esperar.",
                "devoir"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Telefonar para encontrar a destinatária.",
            "fl": "Téléphoner à la destinataire.",
            "ir": "f_bom"
          },
          {
            "pt": "Pedir ao garçom que cuide da carta.",
            "fl": "Demander au serveur de garder la lettre.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Une lettre retrouvée",
        "p": [
          [
            "La destinataire arrive au café un peu plus tard. Elle prend la lettre et la garde contre son cœur. Elle explique que son frère lui écrit rarement. Elle est très heureuse de recevoir enfin des nouvelles. Le serveur offre un café à tout le monde pour fêter la rencontre. Tu sors du café avec un grand sourire.",
            "A destinatária chega ao café um pouco mais tarde. Ela pega a carta e a segura junto ao coração. Ela explica que o irmão dela raramente escreve. Ela está muito feliz por finalmente receber notícias. O garçom oferece um café a todos para celebrar o encontro. Você sai do café com um grande sorriso.",
            [
              [
                "La destinataire arrive au café un peu plus tard.",
                "A destinatária chega ao café um pouco mais tarde.",
                "arriver"
              ],
              [
                "Elle prend la lettre et la garde contre son cœur.",
                "Ela pega a carta e a segura junto ao coração.",
                "prendre"
              ],
              [
                "Elle explique que son frère lui écrit rarement.",
                "Ela explica que o irmão dela raramente escreve.",
                "écrire"
              ],
              [
                "Elle est très heureuse de recevoir enfin des nouvelles.",
                "Ela está muito feliz por finalmente receber notícias.",
                "être"
              ],
              [
                "Le serveur offre un café à tout le monde pour fêter la rencontre.",
                "O garçom oferece um café a todos para celebrar o encontro.",
                "offrir"
              ],
              [
                "Tu sors du café avec un grand sourire.",
                "Você sai do café com um grande sorriso.",
                "sortir"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "Uma carta devolvida"
        }
      },
      "f_neutro": {
        "cap": "Une lettre en sécurité",
        "p": [
          [
            "Tu laisses l'enveloppe au serveur avec un petit message. Il promet de chercher la personne dans la journée. Tu termines tranquillement ton chocolat chaud. Avant de partir, tu écris ton numéro si quelqu'un a des questions. Le lendemain, le serveur t'envoie un message de remerciement. La lettre est enfin arrivée à la bonne personne.",
            "Você deixa o envelope com o garçom e um recado. Ele promete procurar a pessoa durante o dia. Você termina tranquilamente seu chocolate quente. Antes de ir embora, você anota seu número caso alguém tenha dúvidas. No dia seguinte, o garçom manda uma mensagem de agradecimento. A carta finalmente chegou à pessoa certa.",
            [
              [
                "Tu laisses l'enveloppe au serveur avec un petit message.",
                "Você deixa o envelope com o garçom e um recado.",
                "laisser"
              ],
              [
                "Il promet de chercher la personne dans la journée.",
                "Ele promete procurar a pessoa durante o dia.",
                "chercher"
              ],
              [
                "Tu termines tranquillement ton chocolat chaud.",
                "Você termina tranquilamente seu chocolate quente.",
                "finir"
              ],
              [
                "Avant de partir, tu écris ton numéro si quelqu'un a des questions.",
                "Antes de ir embora, você anota seu número caso alguém tenha dúvidas.",
                "écrire"
              ],
              [
                "Le lendemain, le serveur t'envoie un message de remerciement.",
                "No dia seguinte, o garçom manda uma mensagem de agradecimento.",
                "envoyer"
              ],
              [
                "La lettre est enfin arrivée à la bonne personne.",
                "A carta finalmente chegou à pessoa certa.",
                "arriver"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Um recado seguro"
        }
      }
    }
  },
  {
    "id": "parapluie-rouge",
    "titulo": "Le parapluie rouge",
    "genero": "Mistério",
    "nivel": "A2",
    "desc": "Um guarda-chuva vermelho e um recado intrigante na biblioteca.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "Un jour de pluie",
        "p": [
          [
            "Il pleut beaucoup quand tu sors de la bibliothèque. Près de la porte, tu trouves un parapluie rouge oublié. Une petite étiquette porte le nom «Camille» et une adresse. Tu connais cette rue, car elle est près du parc. La bibliothécaire te regarde et demande si le parapluie est à toi. Tu peux lui parler ou aller à l'adresse indiquée.",
            "Chove muito quando você sai da biblioteca. Perto da porta, você encontra um guarda-chuva vermelho esquecido. Uma pequena etiqueta traz o nome “Camille” e um endereço. Você conhece essa rua, pois fica perto do parque. A bibliotecária olha para você e pergunta se o guarda-chuva é seu. Você pode falar com ela ou ir ao endereço indicado.",
            [
              [
                "Il pleut beaucoup quand tu sors de la bibliothèque.",
                "Chove muito quando você sai da biblioteca.",
                "sortir"
              ],
              [
                "Près de la porte, tu trouves un parapluie rouge oublié.",
                "Perto da porta, você encontra um guarda-chuva vermelho esquecido.",
                "trouver"
              ],
              [
                "Une petite étiquette porte le nom «Camille» et une adresse.",
                "Uma pequena etiqueta traz o nome “Camille” e um endereço.",
                "porter"
              ],
              [
                "Tu connais cette rue, car elle est près du parc.",
                "Você conhece essa rua, pois fica perto do parque.",
                "connaître"
              ],
              [
                "La bibliothécaire te regarde et demande si le parapluie est à toi.",
                "A bibliotecária olha para você e pergunta se o guarda-chuva é seu.",
                "demander"
              ],
              [
                "Tu peux lui parler ou aller à l'adresse indiquée.",
                "Você pode falar com ela ou ir ao endereço indicado.",
                "parler"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Falar com a bibliotecária.",
            "fl": "Parler à la bibliothécaire.",
            "ir": "c2a"
          },
          {
            "pt": "Procurar o endereço no parque.",
            "fl": "Chercher l'adresse près du parc.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "La bibliothécaire",
        "p": [
          [
            "Tu expliques à la bibliothécaire où tu as trouvé le parapluie. Elle connaît le nom de Camille sur l'étiquette. Camille vient souvent ici pour lire des romans. La bibliothécaire cherche son numéro dans le registre. Elle trouve un contact mais hésite à appeler sans raison. Vous pouvez laisser un message à l'accueil.",
            "Você explica à bibliotecária onde encontrou o guarda-chuva. Ela conhece o nome de Camille na etiqueta. Camille vem aqui com frequência para ler romances. A bibliotecária procura o número dela no cadastro. Ela encontra um contato, mas hesita em telefonar sem motivo. Vocês podem deixar um recado na recepção.",
            [
              [
                "Tu expliques à la bibliothécaire où tu as trouvé le parapluie.",
                "Você explica à bibliotecária onde encontrou o guarda-chuva.",
                "trouver"
              ],
              [
                "Elle connaît le nom de Camille sur l'étiquette.",
                "Ela conhece o nome de Camille na etiqueta.",
                "connaître"
              ],
              [
                "Camille vient souvent ici pour lire des romans.",
                "Camille vem aqui com frequência para ler romances.",
                "venir"
              ],
              [
                "La bibliothécaire cherche son numéro dans le registre.",
                "A bibliotecária procura o número dela no cadastro.",
                "chercher"
              ],
              [
                "Elle trouve un contact mais hésite à appeler sans raison.",
                "Ela encontra um contato, mas hesita em telefonar sem motivo.",
                "trouver"
              ],
              [
                "Vous pouvez laisser un message à l'accueil.",
                "Vocês podem deixar um recado na recepção.",
                "pouvoir"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Deixar um recado para Camille.",
            "fl": "Laisser un message pour Camille.",
            "ir": "f_bom"
          },
          {
            "pt": "Guardar o guarda-chuva no achados e perdidos.",
            "fl": "Garder le parapluie aux objets trouvés.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "La maison du parc",
        "p": [
          [
            "Tu marches jusqu'à l'adresse écrite sur l'étiquette. Tu arrives devant une petite maison aux volets bleus. Une femme ouvre la porte et regarde le parapluie. Elle dit que Camille est sa sœur et qu'elle travaille à la bibliothèque. Tu comprends que tu as peut-être manqué Camille de quelques minutes. La femme te propose de prendre le parapluie.",
            "Você caminha até o endereço escrito na etiqueta. Você chega diante de uma casinha de janelas azuis. Uma mulher abre a porta e olha o guarda-chuva. Ela diz que Camille é sua irmã e trabalha na biblioteca. Você entende que talvez tenha desencontrado Camille por alguns minutos. A mulher se oferece para ficar com o guarda-chuva.",
            [
              [
                "Tu marches jusqu'à l'adresse écrite sur l'étiquette.",
                "Você caminha até o endereço escrito na etiqueta.",
                "marcher"
              ],
              [
                "Tu arrives devant une petite maison aux volets bleus.",
                "Você chega diante de uma casinha de janelas azuis.",
                "arriver"
              ],
              [
                "Une femme ouvre la porte et regarde le parapluie.",
                "Uma mulher abre a porta e olha o guarda-chuva.",
                "ouvrir"
              ],
              [
                "Elle dit que Camille est sa sœur et qu'elle travaille à la bibliothèque.",
                "Ela diz que Camille é sua irmã e trabalha na biblioteca.",
                "dire"
              ],
              [
                "Tu comprends que tu as peut-être manqué Camille de quelques minutes.",
                "Você entende que talvez tenha desencontrado Camille por alguns minutos.",
                "comprendre"
              ],
              [
                "La femme te propose de prendre le parapluie.",
                "A mulher se oferece para ficar com o guarda-chuva.",
                "prendre"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Entregar o guarda-chuva à irmã de Camille.",
            "fl": "Donner le parapluie à la sœur de Camille.",
            "ir": "f_bom"
          },
          {
            "pt": "Voltar e deixá-lo na biblioteca.",
            "fl": "Retourner le laisser à la bibliothèque.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Le bon propriétaire",
        "p": [
          [
            "Camille trouve son parapluie et te remercie avec un sourire. Elle explique que c'est un cadeau de son grand-père. Tu es content d'avoir pris le temps de chercher. Camille t'invite à une rencontre de lecture à la bibliothèque. Tu acceptes parce que tu aimes découvrir de nouveaux livres. La pluie continue, mais la journée est devenue plus belle.",
            "Camille encontra seu guarda-chuva e agradece sorrindo. Ela explica que é um presente de seu avô. Você está contente por ter dedicado tempo para procurar. Camille convida você para um encontro de leitura na biblioteca. Você aceita porque gosta de descobrir livros novos. A chuva continua, mas o dia ficou mais bonito.",
            [
              [
                "Camille trouve son parapluie et te remercie avec un sourire.",
                "Camille encontra seu guarda-chuva e agradece sorrindo.",
                "trouver"
              ],
              [
                "Elle explique que c'est un cadeau de son grand-père.",
                "Ela explica que é um presente de seu avô.",
                "cadeau"
              ],
              [
                "Tu es content d'avoir pris le temps de chercher.",
                "Você está contente por ter dedicado tempo para procurar.",
                "être"
              ],
              [
                "Camille t'invite à une rencontre de lecture à la bibliothèque.",
                "Camille convida você para um encontro de leitura na biblioteca.",
                "inviter"
              ],
              [
                "Tu acceptes parce que tu aimes découvrir de nouveaux livres.",
                "Você aceita porque gosta de descobrir livros novos.",
                "aimer"
              ],
              [
                "La pluie continue, mais la journée est devenue plus belle.",
                "A chuva continua, mas o dia ficou mais bonito.",
                "jour"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "Camille reencontra seu guarda-chuva"
        }
      },
      "f_neutro": {
        "cap": "Le petit mot",
        "p": [
          [
            "Tu laisses le parapluie dans un endroit sûr avec une note. La note explique où et quand tu l'as trouvé. Le lendemain, le parapluie n'est plus là. Tu demandes des nouvelles à la bibliothécaire. Elle dit que Camille est venue le récupérer tôt le matin. Tu souris: parfois une petite aide suffit.",
            "Você deixa o guarda-chuva em um lugar seguro com um bilhete. O bilhete explica onde e quando você o encontrou. No dia seguinte, o guarda-chuva não está mais lá. Você pede notícias à bibliotecária. Ela diz que Camille veio buscá-lo cedo pela manhã. Você sorri: às vezes uma pequena ajuda é suficiente.",
            [
              [
                "Tu laisses le parapluie dans un endroit sûr avec une note.",
                "Você deixa o guarda-chuva em um lugar seguro com um bilhete.",
                "laisser"
              ],
              [
                "La note explique où et quand tu l'as trouvé.",
                "O bilhete explica onde e quando você o encontrou.",
                "trouver"
              ],
              [
                "Le lendemain, le parapluie n'est plus là.",
                "No dia seguinte, o guarda-chuva não está mais lá.",
                "être"
              ],
              [
                "Tu demandes des nouvelles à la bibliothécaire.",
                "Você pede notícias à bibliotecária.",
                "demander"
              ],
              [
                "Elle dit que Camille est venue le récupérer tôt le matin.",
                "Ela diz que Camille veio buscá-lo cedo pela manhã.",
                "venir"
              ],
              [
                "Tu souris: parfois une petite aide suffit.",
                "Você sorri: às vezes uma pequena ajuda é suficiente.",
                "aide"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Uma boa ação discreta"
        }
      }
    }
  },
  {
    "id": "premiere-reunion",
    "titulo": "La première réunion",
    "genero": "Trabalho",
    "nivel": "A2",
    "desc": "No primeiro dia de trabalho, uma apresentação começa mais cedo.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "Au bureau",
        "p": [
          [
            "C'est ton premier lundi dans un bureau à Lyon. Tu arrives tôt avec un carnet et un ordinateur. Ta collègue Léa dit qu'une réunion commence dans quinze minutes. Le responsable veut entendre tes idées pour un nouveau projet. Tu comprends le sujet mais pas tous les mots techniques. Tu dois décider comment préparer ton intervention.",
            "É sua primeira segunda-feira em um escritório em Lyon. Você chega cedo com um caderno e um computador. Sua colega Léa diz que uma reunião começa em quinze minutos. O responsável quer ouvir suas ideias para um projeto novo. Você entende o assunto, mas não todas as palavras técnicas. Você precisa decidir como preparar sua participação.",
            [
              [
                "C'est ton premier lundi dans un bureau à Lyon.",
                "É sua primeira segunda-feira em um escritório em Lyon.",
                "être"
              ],
              [
                "Tu arrives tôt avec un carnet et un ordinateur.",
                "Você chega cedo com um caderno e um computador.",
                "arriver"
              ],
              [
                "Ta collègue Léa dit qu'une réunion commence dans quinze minutes.",
                "Sua colega Léa diz que uma reunião começa em quinze minutos.",
                "dire"
              ],
              [
                "Le responsable veut entendre tes idées pour un nouveau projet.",
                "O responsável quer ouvir suas ideias para um projeto novo.",
                "vouloir"
              ],
              [
                "Tu comprends le sujet mais pas tous les mots techniques.",
                "Você entende o assunto, mas não todas as palavras técnicas.",
                "comprendre"
              ],
              [
                "Tu dois décider comment préparer ton intervention.",
                "Você precisa decidir como preparar sua participação.",
                "devoir"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Pedir ajuda com algumas palavras.",
            "fl": "Demander de l'aide pour quelques mots.",
            "ir": "c2a"
          },
          {
            "pt": "Preparar um esquema no caderno.",
            "fl": "Préparer un schéma dans le carnet.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "Les mots importants",
        "p": [
          [
            "Tu demandes à Léa d'expliquer trois mots que tu ne connais pas. Elle prend un papier et écrit des exemples très simples. Tu dis les expressions à voix basse. Maintenant tu peux expliquer ton idée en deux phrases. La réunion commence et le responsable te regarde. Tu peux parler tout de suite ou attendre la fin.",
            "Você pede a Léa para explicar três palavras que não conhece. Ela pega um papel e escreve exemplos muito simples. Você diz as expressões em voz baixa. Agora você consegue explicar sua ideia em duas frases. A reunião começa e o responsável olha para você. Você pode falar imediatamente ou esperar até o final.",
            [
              [
                "Tu demandes à Léa d'expliquer trois mots que tu ne connais pas.",
                "Você pede a Léa para explicar três palavras que não conhece.",
                "demander"
              ],
              [
                "Elle prend un papier et écrit des exemples très simples.",
                "Ela pega um papel e escreve exemplos muito simples.",
                "écrire"
              ],
              [
                "Tu dis les expressions à voix basse.",
                "Você diz as expressões em voz baixa.",
                "dire"
              ],
              [
                "Maintenant tu peux expliquer ton idée en deux phrases.",
                "Agora você consegue explicar sua ideia em duas frases.",
                "pouvoir"
              ],
              [
                "La réunion commence et le responsable te regarde.",
                "A reunião começa e o responsável olha para você.",
                "regarder"
              ],
              [
                "Tu peux parler tout de suite ou attendre la fin.",
                "Você pode falar imediatamente ou esperar até o final.",
                "attendre"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Apresentar sua ideia na reunião.",
            "fl": "Présenter ton idée pendant la réunion.",
            "ir": "f_bom"
          },
          {
            "pt": "Escutar e revisar suas anotações depois.",
            "fl": "Écouter et relire tes notes après.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "Un plan sur papier",
        "p": [
          [
            "Tu décides d'écrire les points essentiels dans ton carnet. Tu dessines un petit schéma pour organiser tes idées. Léa regarde le schéma et dit qu'il est très clair. Pendant la réunion, tu écoutes les questions des autres. Tu remarques qu'une de tes idées peut répondre à un problème. Tu hésites à prendre la parole devant tout le monde.",
            "Você decide escrever os pontos principais no caderno. Você desenha um pequeno esquema para organizar suas ideias. Léa olha o esquema e diz que ele está muito claro. Durante a reunião, você escuta as perguntas dos outros. Você percebe que uma de suas ideias pode resolver um problema. Você hesita em falar diante de todos.",
            [
              [
                "Tu décides d'écrire les points essentiels dans ton carnet.",
                "Você decide escrever os pontos principais no caderno.",
                "écrire"
              ],
              [
                "Tu dessines un petit schéma pour organiser tes idées.",
                "Você desenha um pequeno esquema para organizar suas ideias.",
                "dessiner"
              ],
              [
                "Léa regarde le schéma et dit qu'il est très clair.",
                "Léa olha o esquema e diz que ele está muito claro.",
                "dire"
              ],
              [
                "Pendant la réunion, tu écoutes les questions des autres.",
                "Durante a reunião, você escuta as perguntas dos outros.",
                "écouter"
              ],
              [
                "Tu remarques qu'une de tes idées peut répondre à un problème.",
                "Você percebe que uma de suas ideias pode resolver um problema.",
                "pouvoir"
              ],
              [
                "Tu hésites à prendre la parole devant tout le monde.",
                "Você hesita em falar diante de todos.",
                "prendre"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Mostrar o esquema para a equipe.",
            "fl": "Montrer le schéma à l'équipe.",
            "ir": "f_bom"
          },
          {
            "pt": "Mandar sua ideia por mensagem depois.",
            "fl": "Envoyer ton idée par message ensuite.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Une idée partagée",
        "p": [
          [
            "Tu prends la parole et présentes ton idée avec des mots simples. Le responsable écoute et pose une question. Tu réponds calmement et montres ton petit schéma. Léa sourit parce que ton explication est claire. À la fin, l'équipe décide de tester ta proposition. Tu rentres chez toi fier de ton premier jour.",
            "Você toma a palavra e apresenta sua ideia com palavras simples. O responsável escuta e faz uma pergunta. Você responde com calma e mostra seu pequeno esquema. Léa sorri porque sua explicação está clara. No final, a equipe decide testar sua proposta. Você volta para casa orgulhoso do primeiro dia.",
            [
              [
                "Tu prends la parole et présentes ton idée avec des mots simples.",
                "Você toma a palavra e apresenta sua ideia com palavras simples.",
                "parler"
              ],
              [
                "Le responsable écoute et pose une question.",
                "O responsável escuta e faz uma pergunta.",
                "écouter"
              ],
              [
                "Tu réponds calmement et montres ton petit schéma.",
                "Você responde com calma e mostra seu pequeno esquema.",
                "répondre"
              ],
              [
                "Léa sourit parce que ton explication est claire.",
                "Léa sorri porque sua explicação está clara.",
                "être"
              ],
              [
                "À la fin, l'équipe décide de tester ta proposition.",
                "No final, a equipe decide testar sua proposta.",
                "décider"
              ],
              [
                "Tu rentres chez toi fier de ton premier jour.",
                "Você volta para casa orgulhoso do primeiro dia.",
                "rentrer"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "Uma ideia compartilhada"
        }
      },
      "f_neutro": {
        "cap": "Un bon début",
        "p": [
          [
            "Tu écoutes jusqu'à la fin et prends des notes précises. Après la réunion, tu demandes à Léa de vérifier ton résumé. Elle t'aide à corriger deux petites erreurs. Tu envoies ensuite ton idée au responsable par message. Il répond que vous pourrez en parler demain. Tu sais déjà que ton français progresse avec la pratique.",
            "Você escuta até o final e faz anotações precisas. Depois da reunião, você pede a Léa para conferir seu resumo. Ela ajuda você a corrigir dois pequenos erros. Você então envia sua ideia ao responsável por mensagem. Ele responde que vocês poderão conversar sobre isso amanhã. Você já sabe que seu francês melhora com a prática.",
            [
              [
                "Tu écoutes jusqu'à la fin et prends des notes précises.",
                "Você escuta até o final e faz anotações precisas.",
                "écouter"
              ],
              [
                "Après la réunion, tu demandes à Léa de vérifier ton résumé.",
                "Depois da reunião, você pede a Léa para conferir seu resumo.",
                "demander"
              ],
              [
                "Elle t'aide à corriger deux petites erreurs.",
                "Ela ajuda você a corrigir dois pequenos erros.",
                "aider"
              ],
              [
                "Tu envoies ensuite ton idée au responsable par message.",
                "Você então envia sua ideia ao responsável por mensagem.",
                "envoyer"
              ],
              [
                "Il répond que vous pourrez en parler demain.",
                "Ele responde que vocês poderão conversar sobre isso amanhã.",
                "répondre"
              ],
              [
                "Tu sais déjà que ton français progresse avec la pratique.",
                "Você já sabe que seu francês melhora com a prática.",
                "savoir"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Um bom começo"
        }
      }
    }
  },
  {
    "id": "marche-dimanche",
    "titulo": "Le marché du dimanche",
    "genero": "Relações",
    "nivel": "A1",
    "desc": "Um almoço de família começa com uma lista de compras incompleta.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "La liste",
        "p": [
          [
            "Dimanche matin, tu vas au marché avec ta tante. Vous voulez préparer un déjeuner pour toute la famille. Sur la liste, il y a des tomates, du pain et des pommes. Mais ta tante a oublié le nom d'un fromage important. Un marchand parle avec plusieurs clients devant son stand. Tu dois décider comment trouver le bon fromage.",
            "Domingo de manhã, você vai à feira com sua tia. Vocês querem preparar um almoço para toda a família. Na lista há tomates, pão e maçãs. Mas sua tia esqueceu o nome de um queijo importante. Um vendedor conversa com vários clientes diante de sua banca. Você precisa decidir como encontrar o queijo correto.",
            [
              [
                "Dimanche matin, tu vas au marché avec ta tante.",
                "Domingo de manhã, você vai à feira com sua tia.",
                "aller"
              ],
              [
                "Vous voulez préparer un déjeuner pour toute la famille.",
                "Vocês querem preparar um almoço para toda a família.",
                "vouloir"
              ],
              [
                "Sur la liste, il y a des tomates, du pain et des pommes.",
                "Na lista há tomates, pão e maçãs.",
                "pain"
              ],
              [
                "Mais ta tante a oublié le nom d'un fromage important.",
                "Mas sua tia esqueceu o nome de um queijo importante.",
                "oublier"
              ],
              [
                "Un marchand parle avec plusieurs clients devant son stand.",
                "Um vendedor conversa com vários clientes diante de sua banca.",
                "parler"
              ],
              [
                "Tu dois décider comment trouver le bon fromage.",
                "Você precisa decidir como encontrar o queijo correto.",
                "trouver"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Perguntar ao vendedor de queijos.",
            "fl": "Demander au marchand de fromages.",
            "ir": "c2a"
          },
          {
            "pt": "Telefonar para a avó.",
            "fl": "Appeler ta grand-mère.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "Le marchand de fromages",
        "p": [
          [
            "Tu demandes au marchand un fromage doux pour une salade. Il te montre deux fromages et explique leurs différences. Tu peux goûter un petit morceau de chaque fromage. Ta tante reconnaît le goût du fromage de son enfance. Elle te remercie et écrit le nom du fromage sur la liste. Vous cherchez maintenant une bonne boulangerie.",
            "Você pede ao vendedor um queijo suave para uma salada. Ele mostra dois queijos e explica as diferenças. Você pode provar um pedacinho de cada queijo. Sua tia reconhece o sabor do queijo de sua infância. Ela agradece e anota o nome do queijo na lista. Vocês agora procuram uma boa padaria.",
            [
              [
                "Tu demandes au marchand un fromage doux pour une salade.",
                "Você pede ao vendedor um queijo suave para uma salada.",
                "demander"
              ],
              [
                "Il te montre deux fromages et explique leurs différences.",
                "Ele mostra dois queijos e explica as diferenças.",
                "montrer"
              ],
              [
                "Tu peux goûter un petit morceau de chaque fromage.",
                "Você pode provar um pedacinho de cada queijo.",
                "pouvoir"
              ],
              [
                "Ta tante reconnaît le goût du fromage de son enfance.",
                "Sua tia reconhece o sabor do queijo de sua infância.",
                "enfance"
              ],
              [
                "Elle te remercie et écrit le nom du fromage sur la liste.",
                "Ela agradece e anota o nome do queijo na lista.",
                "écrire"
              ],
              [
                "Vous cherchez maintenant une bonne boulangerie.",
                "Vocês agora procuram uma boa padaria.",
                "chercher"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Comprar o queijo de que sua tia se lembra.",
            "fl": "Acheter le fromage que ta tante reconnaît.",
            "ir": "f_bom"
          },
          {
            "pt": "Experimentar um queijo diferente.",
            "fl": "Essayer un fromage différent.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "La recette de famille",
        "p": [
          [
            "Tu proposes d'appeler ta grand-mère pour lui demander la recette. Elle répond avec joie et te raconte comment elle préparait ce plat. Elle dit qu'il faut un fromage simple et frais. Ta tante se souvient enfin du nom du fromage. Vous pouvez acheter les ingrédients ou changer un peu la recette. Le marchand attend votre réponse en souriant.",
            "Você propõe telefonar para sua avó e perguntar a receita. Ela responde feliz e conta como preparava esse prato. Ela diz que é necessário um queijo simples e fresco. Sua tia finalmente se lembra do nome do queijo. Vocês podem comprar os ingredientes ou mudar um pouco a receita. O vendedor espera a resposta de vocês sorrindo.",
            [
              [
                "Tu proposes d'appeler ta grand-mère pour lui demander la recette.",
                "Você propõe telefonar para sua avó e perguntar a receita.",
                "appeler"
              ],
              [
                "Elle répond avec joie et te raconte comment elle préparait ce plat.",
                "Ela responde feliz e conta como preparava esse prato.",
                "répondre"
              ],
              [
                "Elle dit qu'il faut un fromage simple et frais.",
                "Ela diz que é necessário um queijo simples e fresco.",
                "dire"
              ],
              [
                "Ta tante se souvient enfin du nom du fromage.",
                "Sua tia finalmente se lembra do nome do queijo.",
                "nom"
              ],
              [
                "Vous pouvez acheter les ingrédients ou changer un peu la recette.",
                "Vocês podem comprar os ingredientes ou mudar um pouco a receita.",
                "acheter"
              ],
              [
                "Le marchand attend votre réponse en souriant.",
                "O vendedor espera a resposta de vocês sorrindo.",
                "attendre"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Seguir a receita da avó.",
            "fl": "Suivre la recette de ta grand-mère.",
            "ir": "f_bom"
          },
          {
            "pt": "Improvisar uma nova receita.",
            "fl": "Improviser une nouvelle recette.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "Un déjeuner réussi",
        "p": [
          [
            "Vous achetez le fromage et le pain encore chaud. À la maison, toute la famille aide à préparer la table. Ta grand-mère goûte la salade et connaît bien cette recette. Elle sourit et raconte un souvenir de son enfance. Après le déjeuner, vous buvez un café ensemble. Tu es heureux d'avoir découvert une tradition de famille.",
            "Vocês compram o queijo e o pão ainda quente. Em casa, toda a família ajuda a preparar a mesa. Sua avó prova a salada e conhece bem essa receita. Ela sorri e conta uma lembrança de sua infância. Depois do almoço, vocês tomam café juntos. Você está feliz por ter conhecido uma tradição de família.",
            [
              [
                "Vous achetez le fromage et le pain encore chaud.",
                "Vocês compram o queijo e o pão ainda quente.",
                "acheter"
              ],
              [
                "À la maison, toute la famille aide à préparer la table.",
                "Em casa, toda a família ajuda a preparar a mesa.",
                "famille"
              ],
              [
                "Ta grand-mère goûte la salade et connaît bien cette recette.",
                "Sua avó prova a salada e conhece bem essa receita.",
                "connaître"
              ],
              [
                "Elle sourit et raconte un souvenir de son enfance.",
                "Ela sorri e conta uma lembrança de sua infância.",
                "enfance"
              ],
              [
                "Après le déjeuner, vous buvez un café ensemble.",
                "Depois do almoço, vocês tomam café juntos.",
                "boire"
              ],
              [
                "Tu es heureux d'avoir découvert une tradition de famille.",
                "Você está feliz por ter conhecido uma tradição de família.",
                "être"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "A receita da família"
        }
      },
      "f_neutro": {
        "cap": "Une recette différente",
        "p": [
          [
            "Vous choisissez un autre fromage et décidez d'improviser. À la maison, tu coupes les tomates et prépares la salade. Ta tante ajoute des herbes et un peu de citron. La grand-mère goûte le plat et trouve le résultat intéressant. Tout le monde mange avec plaisir et parle de nouvelles idées. Peut-être que cette version deviendra une autre recette de famille.",
            "Vocês escolhem outro queijo e decidem improvisar. Em casa, você corta os tomates e prepara a salada. Sua tia acrescenta ervas e um pouco de limão. A avó prova o prato e acha o resultado interessante. Todos comem com prazer e conversam sobre novas ideias. Talvez essa versão se torne outra receita de família.",
            [
              [
                "Vous choisissez un autre fromage et décidez d'improviser.",
                "Vocês escolhem outro queijo e decidem improvisar.",
                "choisir"
              ],
              [
                "À la maison, tu coupes les tomates et prépares la salade.",
                "Em casa, você corta os tomates e prepara a salada.",
                "maison"
              ],
              [
                "Ta tante ajoute des herbes et un peu de citron.",
                "Sua tia acrescenta ervas e um pouco de limão.",
                "ajouter"
              ],
              [
                "La grand-mère goûte le plat et trouve le résultat intéressant.",
                "A avó prova o prato e acha o resultado interessante.",
                "trouver"
              ],
              [
                "Tout le monde mange avec plaisir et parle de nouvelles idées.",
                "Todos comem com prazer e conversam sobre novas ideias.",
                "manger"
              ],
              [
                "Peut-être que cette version deviendra une autre recette de famille.",
                "Talvez essa versão se torne outra receita de família.",
                "famille"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "neutro",
          "titulo": "Uma receita reinventada"
        }
      }
    }
  },
  {
    "id": "phare-de-bretagne",
    "titulo": "La lumière du phare",
    "genero": "Suspense",
    "nivel": "A2",
    "desc": "Uma luz que pisca de maneira estranha chama atenção no litoral.",
    "inicio": "c1",
    "cenas": {
      "c1": {
        "cap": "La mer au crépuscule",
        "p": [
          [
            "Tu passes quelques jours dans un village près de la mer. Tous les soirs, tu regardes la lumière du phare au loin. Ce soir, la lumière s'arrête puis recommence trois fois. Un pêcheur dit que ce n'est pas normal. Dans le port, une radio parle d'un bateau qui revient tard. Tu veux comprendre ce qui se passe avant la nuit.",
            "Você passa alguns dias em uma vila perto do mar. Todas as noites, você observa a luz do farol ao longe. Hoje à noite, a luz para e recomeça três vezes. Um pescador diz que isso não é normal. No porto, um rádio fala sobre um barco que volta tarde. Você quer entender o que está acontecendo antes de anoitecer.",
            [
              [
                "Tu passes quelques jours dans un village près de la mer.",
                "Você passa alguns dias em uma vila perto do mar.",
                "passer"
              ],
              [
                "Tous les soirs, tu regardes la lumière du phare au loin.",
                "Todas as noites, você observa a luz do farol ao longe.",
                "regarder"
              ],
              [
                "Ce soir, la lumière s'arrête puis recommence trois fois.",
                "Hoje à noite, a luz para e recomeça três vezes.",
                "soir"
              ],
              [
                "Un pêcheur dit que ce n'est pas normal.",
                "Um pescador diz que isso não é normal.",
                "dire"
              ],
              [
                "Dans le port, une radio parle d'un bateau qui revient tard.",
                "No porto, um rádio fala sobre um barco que volta tarde.",
                "parler"
              ],
              [
                "Tu veux comprendre ce qui se passe avant la nuit.",
                "Você quer entender o que está acontecendo antes de anoitecer.",
                "comprendre"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Subir até o farol com o pescador.",
            "fl": "Monter au phare avec le pêcheur.",
            "ir": "c2a"
          },
          {
            "pt": "Escutar o rádio no porto.",
            "fl": "Écouter la radio dans le port.",
            "ir": "c2b"
          }
        ]
      },
      "c2a": {
        "cap": "Le chemin du phare",
        "p": [
          [
            "Tu montes jusqu'au phare avec le pêcheur. Le chemin est humide et vous marchez doucement. Près de la porte, vous entendez une femme appeler à l'intérieur. Elle explique que le système a besoin d'une nouvelle batterie. Le pêcheur en a une dans son bateau au port. Vous pouvez retourner la chercher ou appeler les techniciens.",
            "Você sobe até o farol com o pescador. O caminho está úmido e vocês caminham devagar. Perto da porta, vocês ouvem uma mulher chamando lá dentro. Ela explica que o sistema precisa de uma bateria nova. O pescador tem uma em seu barco no porto. Vocês podem voltar para buscá-la ou chamar os técnicos.",
            [
              [
                "Tu montes jusqu'au phare avec le pêcheur.",
                "Você sobe até o farol com o pescador.",
                "monter"
              ],
              [
                "Le chemin est humide et vous marchez doucement.",
                "O caminho está úmido e vocês caminham devagar.",
                "marcher"
              ],
              [
                "Près de la porte, vous entendez une femme appeler à l'intérieur.",
                "Perto da porta, vocês ouvem uma mulher chamando lá dentro.",
                "entendre"
              ],
              [
                "Elle explique que le système a besoin d'une nouvelle batterie.",
                "Ela explica que o sistema precisa de uma bateria nova.",
                "besoin"
              ],
              [
                "Le pêcheur en a une dans son bateau au port.",
                "O pescador tem uma em seu barco no porto.",
                "avoir"
              ],
              [
                "Vous pouvez retourner la chercher ou appeler les techniciens.",
                "Vocês podem voltar para buscá-la ou chamar os técnicos.",
                "pouvoir"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Buscar a bateria de que precisam.",
            "fl": "Chercher la batterie nécessaire.",
            "ir": "f_bom"
          },
          {
            "pt": "Telefonar para a equipe técnica.",
            "fl": "Appeler les techniciens.",
            "ir": "f_neutro"
          }
        ]
      },
      "c2b": {
        "cap": "Le message à la radio",
        "p": [
          [
            "Tu vas au port et écoutes la radio avec le pêcheur. Un capitaine annonce qu'il a besoin de la lumière du phare. Le pêcheur connaît la femme qui travaille au phare. Il trouve son numéro et te demande de l'appeler. Le ciel devient sombre et le vent commence à souffler. Il faut agir avec calme et prudence.",
            "Você vai ao porto e escuta o rádio com o pescador. Um capitão avisa que precisa da luz do farol. O pescador conhece a mulher que trabalha no farol. Ele encontra o número dela e pede a você para ligar. O céu escurece e o vento começa a soprar. É preciso agir com calma e prudência.",
            [
              [
                "Tu vas au port et écoutes la radio avec le pêcheur.",
                "Você vai ao porto e escuta o rádio com o pescador.",
                "écouter"
              ],
              [
                "Un capitaine annonce qu'il a besoin de la lumière du phare.",
                "Um capitão avisa que precisa da luz do farol.",
                "avoir"
              ],
              [
                "Le pêcheur connaît la femme qui travaille au phare.",
                "O pescador conhece a mulher que trabalha no farol.",
                "connaître"
              ],
              [
                "Il trouve son numéro et te demande de l'appeler.",
                "Ele encontra o número dela e pede a você para ligar.",
                "demander"
              ],
              [
                "Le ciel devient sombre et le vent commence à souffler.",
                "O céu escurece e o vento começa a soprar.",
                "commencer"
              ],
              [
                "Il faut agir avec calme et prudence.",
                "É preciso agir com calma e prudência.",
                "falloir"
              ]
            ]
          ]
        ],
        "escolhas": [
          {
            "pt": "Telefonar e ajudar a levar a bateria.",
            "fl": "Téléphoner et apporter une batterie.",
            "ir": "f_bom"
          },
          {
            "pt": "Esperar em segurança a equipe técnica.",
            "fl": "Attendre les techniciens en sécurité.",
            "ir": "f_neutro"
          }
        ]
      },
      "f_bom": {
        "cap": "La lumière revient",
        "p": [
          [
            "Vous portez une nouvelle batterie jusqu'au phare. La gardienne la met en place et vérifie le système. La lumière recommence à tourner régulièrement sur la mer. À la radio, le capitaine dit que le bateau arrive bientôt. Le pêcheur te remercie pour ton aide. Tu regardes le phare et tu te sens enfin tranquille.",
            "Vocês carregam uma bateria nova até o farol. A responsável instala a bateria e confere o sistema. A luz volta a girar regularmente sobre o mar. Pelo rádio, o capitão diz que o barco logo chegará. O pescador agradece por sua ajuda. Você observa o farol e finalmente se sente tranquilo.",
            [
              [
                "Vous portez une nouvelle batterie jusqu'au phare.",
                "Vocês carregam uma bateria nova até o farol.",
                "porter"
              ],
              [
                "La gardienne la met en place et vérifie le système.",
                "A responsável instala a bateria e confere o sistema.",
                "mettre"
              ],
              [
                "La lumière recommence à tourner régulièrement sur la mer.",
                "A luz volta a girar regularmente sobre o mar.",
                "lumière"
              ],
              [
                "À la radio, le capitaine dit que le bateau arrive bientôt.",
                "Pelo rádio, o capitão diz que o barco logo chegará.",
                "arriver"
              ],
              [
                "Le pêcheur te remercie pour ton aide.",
                "O pescador agradece por sua ajuda.",
                "aide"
              ],
              [
                "Tu regardes le phare et tu te sens enfin tranquille.",
                "Você observa o farol e finalmente se sente tranquilo.",
                "regarder"
              ]
            ]
          ]
        ],
        "fim": {
          "tipo": "bom",
          "titulo": "O farol voltou a funcionar"
        }
      },
      "f_neutro": {
        "cap": "Une attente prudente",
        "p": [
          [
            "Vous appelez les techniciens et restez dans un endroit sûr. Ils arrivent avec le matériel nécessaire pour réparer le phare. Le travail prend plus de temps que prévu. Le pêcheur te donne un thé chaud pendant l'attente. Une heure plus tard, la lumière du phare fonctionne de nouveau. Tu comprends que demander de l'aide est parfois la meilleure décision.",
            "Vocês chamam os técnicos e ficam em um lugar seguro. Eles chegam com o material necessário para consertar o farol. O trabalho leva mais tempo do que o previsto. O pescador lhe dá um chá quente durante a espera. Uma hora depois, a luz do farol funciona de novo. Você entende que pedir ajuda às vezes é a melhor decisão.",
            [
              [
                "Vous appelez les techniciens et restez dans un endroit sûr.",
                "Vocês chamam os técnicos e ficam em um lugar seguro.",
                "appeler"
              ],
              [
                "Ils arrivent avec le matériel nécessaire pour réparer le phare.",
                "Eles chegam com o material necessário para consertar o farol.",
                "arriver"
              ],
              [
                "Le travail prend plus de temps que prévu.",
                "O trabalho leva mais tempo do que o previsto.",
                "prendre"
              ],
              [
                "Le pêcheur te donne un thé chaud pendant l'attente.",
                "O pescador lhe dá um chá quente durante a espera.",
                "donner"
              ],
              [
                "Une heure plus tard, la lumière du phare fonctionne de nouveau.",
                "Uma hora depois, a luz do farol funciona de novo.",
                "heure"
              ],
              [
                "Tu comprends que demander de l'aide est parfois la meilleure décision.",
                "Você entende que pedir ajuda às vezes é a melhor decisão.",
                "comprendre"
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
