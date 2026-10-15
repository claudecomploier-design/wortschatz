/* Vokabel 1000: tradução da interface conforme a língua base (VBPAIR.base()).
   Troca nós de texto e atributos (placeholder, title, aria-label) cujo texto está no dicionário,
   inclusive conteúdo criado depois (MutationObserver). Conteúdo de estudo fica intocado.
   Modelos: {n} = número, {s} = trecho traduzido se estiver no dicionário, {x} = trecho mantido como está
   (conteúdo de estudo ou nomes). */
(function(){
"use strict";
var DICT=/*DICT*/{"Português":{"en":"Portuguese","es":"Portugués","it":"Portoghese","fr":"Portugais","de":"Portugiesisch"},
"Inglês":{"en":"English","es":"Inglés","it":"Inglese","fr":"Anglais","de":"Englisch"},
"Espanhol":{"en":"Spanish","es":"Español","it":"Spagnolo","fr":"Espagnol","de":"Spanisch"},
"Alemão":{"en":"German","es":"Alemán","it":"Tedesco","fr":"Allemand","de":"Deutsch"},
"Italiano":{"en":"Italian","es":"Italiano","it":"Italiano","fr":"Italien","de":"Italienisch"},
"Francês":{"en":"French","es":"Francés","it":"Francese","fr":"Français","de":"Französisch"},
"português":{"en":"Portuguese","es":"portugués","it":"portoghese","fr":"portugais","de":"Portugiesisch"},
"inglês":{"en":"English","es":"inglés","it":"inglese","fr":"anglais","de":"Englisch"},
"espanhol":{"en":"Spanish","es":"español","it":"spagnolo","fr":"espagnol","de":"Spanisch"},
"alemão":{"en":"German","es":"alemán","it":"tedesco","fr":"allemand","de":"Deutsch"},
"italiano":{"en":"Italian","es":"italiano","it":"italiano","fr":"italien","de":"Italienisch"},
"francês":{"en":"French","es":"francés","it":"francese","fr":"français","de":"Französisch"},
"Latim":{"en":"Latin","es":"Latín","it":"Latino","fr":"Latin","de":"Latein"},
"Catalão":{"en":"Catalan","es":"Catalán","it":"Catalano","fr":"Catalan","de":"Katalanisch"},
"Escolher personagem":{"en":"Choose character","es":"Elegir personaje","it":"Scegli personaggio","fr":"Choisir un personnage","de":"Figur wählen"},
"Personalizar meu gato":{"en":"Customize my cat","es":"Personalizar mi gato","it":"Personalizza il mio gatto","fr":"Personnaliser mon chat","de":"Meine Katze anpassen"},
"Idioma que você já conhece":{"en":"Language you already know","es":"Idioma que ya conoces","it":"Lingua che conosci già","fr":"Langue que vous connaissez","de":"Sprache, die du kannst"},
"Idioma que você conhece: {s}":{"en":"Language you know: {s}","es":"Idioma que conoces: {s}","it":"Lingua che conosci: {s}","fr":"Langue que vous connaissez : {s}","de":"Deine Sprache: {s}"},
"Idiomas. Atual: {s}. Selecionar idioma":{"en":"Languages. Current: {s}. Select language","es":"Idiomas. Actual: {s}. Seleccionar idioma","it":"Lingue. Attuale: {s}. Seleziona lingua","fr":"Langues. Actuelle : {s}. Choisir la langue","de":"Sprachen. Aktuell: {s}. Sprache wählen"},
"Idiomas. Selecionar idioma":{"en":"Languages. Select language","es":"Idiomas. Seleccionar idioma","it":"Lingue. Seleziona lingua","fr":"Langues. Choisir la langue","de":"Sprachen. Sprache wählen"},
"Selecionar idioma":{"en":"Select language","es":"Seleccionar idioma","it":"Seleziona lingua","fr":"Choisir la langue","de":"Sprache wählen"},
"Navegação principal":{"en":"Main navigation","es":"Navegación principal","it":"Navigazione principale","fr":"Navigation principale","de":"Hauptnavigation"},
"Central de exercícios":{"en":"Exercise hub","es":"Centro de ejercicios","it":"Centro esercizi","fr":"Espace exercices","de":"Übungsbereich"},
"Progresso semanal":{"en":"Weekly progress","es":"Progreso semanal","it":"Progresso settimanale","fr":"Progrès hebdomadaires","de":"Wochenfortschritt"},
"Ranking de amigos":{"en":"Friends ranking","es":"Ranking de amigos","it":"Classifica amici","fr":"Classement des amis","de":"Freunde-Rangliste"},
"Método de estudo":{"en":"Study method","es":"Método de estudio","it":"Metodo di studio","fr":"Méthode d'étude","de":"Lernmethode"},
"Meu perfil e avatar":{"en":"My profile and avatar","es":"Mi perfil y avatar","it":"Il mio profilo e avatar","fr":"Mon profil et avatar","de":"Mein Profil und Avatar"},
"Exercícios":{"en":"Exercises","es":"Ejercicios","it":"Esercizi","fr":"Exercices","de":"Übungen"},
"Amigos":{"en":"Friends","es":"Amigos","it":"Amici","fr":"Amis","de":"Freunde"},
"Método":{"en":"Method","es":"Método","it":"Metodo","fr":"Méthode","de":"Methode"},
"Perfil":{"en":"Profile","es":"Perfil","it":"Profilo","fr":"Profil","de":"Profil"},
"Eu sei":{"en":"I speak","es":"Hablo","it":"Parlo","fr":"Je parle","de":"Ich spreche"},
"Aprender":{"en":"Learn","es":"Aprender","it":"Imparare","fr":"Apprendre","de":"Lernen"},
"Escolha como quer praticar. Todos os modos ficam reunidos aqui.":{"en":"Choose how to practice. All activities are here.","es":"Elige cómo quieres practicar. Todas las actividades están aquí.","it":"Scegli come esercitarti. Tutte le attività sono qui.","fr":"Choisissez comment vous entraîner. Toutes les activités sont ici.","de":"Wähle aus, wie du üben möchtest. Alle Übungen sind hier."},
"Histórias":{"en":"Stories","es":"Historias","it":"Storie","fr":"Histoires","de":"Geschichten"},
"Vocabulário":{"en":"Vocabulary","es":"Vocabulario","it":"Vocabolario","fr":"Vocabulaire","de":"Wortschatz"},
"Frases híbridas":{"en":"Mixed sentences","es":"Frases mixtas","it":"Frasi miste","fr":"Phrases mixtes","de":"Gemischte Sätze"},
"Quiz de compreensão":{"en":"Comprehension quiz","es":"Prueba de comprensión","it":"Quiz di comprensione","fr":"Quiz de compréhension","de":"Verständnistest"},
"Consultar palavras":{"en":"Word list","es":"Lista de palabras","it":"Elenco parole","fr":"Liste des mots","de":"Wortliste"},
"Leia, escolha caminhos e pratique a compreensão.":{"en":"Read, choose paths and practice comprehension.","es":"Lee, elige caminos y practica la comprensión.","it":"Leggi, scegli percorsi ed esercita la comprensione.","fr":"Lisez, choisissez votre chemin et entraînez votre compréhension.","de":"Lies, wähle Wege und übe das Verstehen."},
"Abrir histórias →":{"en":"Open stories →","es":"Abrir historias →","it":"Apri storie →","fr":"Ouvrir les histoires →","de":"Geschichten öffnen →"},
"Treine a memória com as palavras do seu nível.":{"en":"Train your memory with words at your level.","es":"Entrena la memoria con palabras de tu nivel.","it":"Allena la memoria con le parole del tuo livello.","fr":"Entraînez votre mémoire avec les mots de votre niveau.","de":"Trainiere dein Gedächtnis mit Wörtern deines Niveaus."},
"Treinar palavras →":{"en":"Train words →","es":"Entrenar palabras →","it":"Allena parole →","fr":"Réviser les mots →","de":"Wörter üben →"},
"Pratique com proporções de 30%, 50%, 70% e 100% de {s}.":{"en":"Practice with 30%, 50%, 70% and 100% {s}.","es":"Practica con 30 %, 50 %, 70 % y 100 % de {s}.","it":"Esercitati con il 30%, 50%, 70% e 100% di {s}.","fr":"Entraînez-vous avec 30 %, 50 %, 70 % et 100 % de {s}.","de":"Übe mit 30 %, 50 %, 70 % und 100 % {s}."},
"Praticar frases →":{"en":"Practice sentences →","es":"Practicar frases →","it":"Esercita frasi →","fr":"Pratiquer les phrases →","de":"Sätze üben →"},
"Responda perguntas de {s} com correção imediata.":{"en":"Answer {s} questions with instant feedback.","es":"Responde preguntas de {s} con corrección inmediata.","it":"Rispondi a domande di {s} con correzione immediata.","fr":"Répondez à des questions de {s} avec correction immédiate.","de":"Beantworte Fragen zu {s} mit sofortiger Korrektur."},
"Começar quiz →":{"en":"Start quiz →","es":"Empezar prueba →","it":"Inizia quiz →","fr":"Commencer le quiz →","de":"Quiz starten →"},
"Explore a lista, busque palavras e revise exemplos.":{"en":"Browse the list, search words and review examples.","es":"Explora la lista, busca palabras y repasa ejemplos.","it":"Esplora l'elenco, cerca parole e ripassa esempi.","fr":"Parcourez la liste, cherchez des mots et revoyez des exemples.","de":"Durchsuche die Liste, finde Wörter und wiederhole Beispiele."},
"Abrir lista →":{"en":"Open list →","es":"Abrir lista →","it":"Apri elenco →","fr":"Ouvrir la liste →","de":"Liste öffnen →"},
"← Voltar aos exercícios":{"en":"← Back to exercises","es":"← Volver a ejercicios","it":"← Torna agli esercizi","fr":"← Retour aux exercices","de":"← Zurück zu den Übungen"},
"Oi! Toque em mim.":{"en":"Hi! Tap me.","es":"¡Hola! Tócame.","it":"Ciao! Toccami.","fr":"Salut ! Touchez-moi.","de":"Hallo! Tipp mich an."},
"Trocar personagem":{"en":"Change character","es":"Cambiar personaje","it":"Cambia personaggio","fr":"Changer de personnage","de":"Figur wechseln"},
"Personalizar avatar":{"en":"Customize avatar","es":"Personalizar avatar","it":"Personalizza avatar","fr":"Personnaliser l'avatar","de":"Avatar anpassen"},
"Raposa gatuna, mascote. Toque para ela fazer um gesto.":{"en":"Sly fox, mascot. Tap for a gesture.","es":"Zorra pícara, mascota. Tócala para que haga un gesto.","it":"Volpe furbetta, mascotte. Toccala per un gesto.","fr":"Renarde rusée, mascotte. Touchez-la pour un geste.","de":"Schlaue Füchsin, Maskottchen. Tippe für eine Geste."},
"{s}, seu personagem. Toque para um gesto.":{"en":"{s}, your character. Tap for a gesture.","es":"{s}, tu personaje. Toca para un gesto.","it":"{s}, il tuo personaggio. Tocca per un gesto.","fr":"{s}, votre personnage. Touchez pour un geste.","de":"{s}, deine Figur. Tippe für eine Geste."},
"para hoje":{"en":"for today","es":"para hoy","it":"per oggi","fr":"pour aujourd'hui","de":"für heute"},
"aprendendo":{"en":"learning","es":"aprendiendo","it":"in corso","fr":"en cours","de":"am Lernen"},
"firmes":{"en":"mastered","es":"dominadas","it":"consolidate","fr":"maîtrisés","de":"sicher"},
"firme":{"en":"mastered","es":"dominada","it":"consolidata","fr":"maîtrisé","de":"sicher"},
"Nível":{"en":"Level","es":"Nivel","it":"Livello","fr":"Niveau","de":"Niveau"},
"Direção":{"en":"Direction","es":"Dirección","it":"Direzione","fr":"Direction","de":"Richtung"},
"Frase de exemplo: quanto em língua estrangeira":{"en":"Example sentence: how much in the foreign language","es":"Frase de ejemplo: cuánto en lengua extranjera","it":"Frase d'esempio: quanto in lingua straniera","fr":"Phrase d'exemple : part de langue étrangère","de":"Beispielsatz: wie viel in der Fremdsprache"},
"Carregando palavras...":{"en":"Loading words...","es":"Cargando palabras...","it":"Caricamento parole...","fr":"Chargement des mots...","de":"Wörter werden geladen..."},
"Todos os níveis, em ordem":{"en":"All levels, in order","es":"Todos los niveles, en orden","it":"Tutti i livelli, in ordine","fr":"Tous les niveaux, dans l'ordre","de":"Alle Niveaus, der Reihe nach"},
"Nível {n} (palavras {n} a {n})":{"en":"Level {n} (words {n} to {n})","es":"Nivel {n} (palabras {n} a {n})","it":"Livello {n} (parole da {n} a {n})","fr":"Niveau {n} (mots {n} à {n})","de":"Niveau {n} (Wörter {n} bis {n})"},
"Nível {n} ({n} a {n})":{"en":"Level {n} ({n} to {n})","es":"Nivel {n} ({n} a {n})","it":"Livello {n} (da {n} a {n})","fr":"Niveau {n} ({n} à {n})","de":"Niveau {n} ({n} bis {n})"},
"Exemplo: original":{"en":"Example: original","es":"Ejemplo: original","it":"Esempio: originale","fr":"Exemple : original","de":"Beispiel: Original"},
"Exemplo: {n}% {s}":{"en":"Example: {n}% {s}","es":"Ejemplo: {n} % {s}","it":"Esempio: {n}% {s}","fr":"Exemple : {n} % {s}","de":"Beispiel: {n} % {s}"},
"Pronto para jogar?":{"en":"Ready to play?","es":"¿Listo para jugar?","it":"Pronto a giocare?","fr":"Prêt à jouer ?","de":"Bereit zum Spielen?"},
"{n} cartas esperando por você em {s}.":{"en":"{n} cards waiting for you in {s}.","es":"{n} tarjetas te esperan en {s}.","it":"{n} carte ti aspettano in {s}.","fr":"{n} cartes vous attendent en {s}.","de":"{n} Karten warten auf dich auf {s}."},
"{n} carta esperando por você em {s}.":{"en":"{n} card waiting for you in {s}.","es":"{n} tarjeta te espera en {s}.","it":"{n} carta ti aspetta in {s}.","fr":"{n} carte vous attend en {s}.","de":"{n} Karte wartet auf dich auf {s}."},
"{n} revisões":{"en":"{n} reviews","es":"{n} repasos","it":"{n} ripassi","fr":"{n} révisions","de":"{n} Wiederholungen"},
"{n} revisão":{"en":"{n} review","es":"{n} repaso","it":"{n} ripasso","fr":"{n} révision","de":"{n} Wiederholung"},
"{n} novas":{"en":"{n} new","es":"{n} nuevas","it":"{n} nuove","fr":"{n} nouvelles","de":"{n} neue"},
"{n} nova":{"en":"{n} new","es":"{n} nueva","it":"{n} nuova","fr":"{n} nouvelle","de":"{n} neue"},
"Jogar":{"en":"Play","es":"Jugar","it":"Gioca","fr":"Jouer","de":"Spielen"},
"Tudo em dia":{"en":"All caught up","es":"Todo al día","it":"Tutto in pari","fr":"Tout est à jour","de":"Alles erledigt"},
"Ainda há {n} palavras novas em {s}.":{"en":"There are still {n} new words in {s}.","es":"Aún hay {n} palabras nuevas en {s}.","it":"Ci sono ancora {n} parole nuove in {s}.","fr":"Il reste {n} nouveaux mots en {s}.","de":"Es gibt noch {n} neue Wörter auf {s}."},
"Ainda há {n} palavras novas neste nível.":{"en":"There are still {n} new words at this level.","es":"Aún hay {n} palabras nuevas en este nivel.","it":"Ci sono ancora {n} parole nuove in questo livello.","fr":"Il reste {n} nouveaux mots à ce niveau.","de":"Es gibt noch {n} neue Wörter auf diesem Niveau."},
"Você já começou todas as palavras deste nível.":{"en":"You have already started every word at this level.","es":"Ya empezaste todas las palabras de este nivel.","it":"Hai già iniziato tutte le parole di questo livello.","fr":"Vous avez déjà commencé tous les mots de ce niveau.","de":"Du hast schon alle Wörter dieses Niveaus begonnen."},
"Jogar com mais 10 novas":{"en":"Play with 10 more new words","es":"Jugar con 10 nuevas más","it":"Gioca con altre 10 nuove","fr":"Jouer avec 10 nouveaux mots","de":"Mit 10 neuen Wörtern spielen"},
"Treino livre: repassar o que já vi":{"en":"Free practice: review what I've seen","es":"Práctica libre: repasar lo que ya vi","it":"Allenamento libero: ripassa ciò che ho visto","fr":"Entraînement libre : revoir ce que j'ai vu","de":"Freies Training: Gesehenes wiederholen"},
"O treino livre conta para a meta do dia e não mexe nas datas de revisão.":{"en":"Free practice counts toward today's goal and doesn't change review dates.","es":"La práctica libre cuenta para la meta del día y no cambia las fechas de repaso.","it":"L'allenamento libero conta per l'obiettivo del giorno e non cambia le date di ripasso.","fr":"L'entraînement libre compte pour l'objectif du jour et ne modifie pas les dates de révision.","de":"Freies Training zählt fürs Tagesziel und ändert keine Wiederholungstermine."},
"{s} chegando":{"en":"{s} coming soon","es":"{s} muy pronto","it":"{s} in arrivo","fr":"{s} bientôt disponible","de":"{s} kommt bald"},
"As palavras desta língua estão sendo preparadas e aparecem aqui em breve.":{"en":"Words for this language are being prepared and will appear here soon.","es":"Las palabras de este idioma se están preparando y aparecerán aquí pronto.","it":"Le parole di questa lingua sono in preparazione e appariranno qui a breve.","fr":"Les mots de cette langue sont en préparation et apparaîtront bientôt ici.","de":"Die Wörter dieser Sprache werden vorbereitet und erscheinen bald hier."},
"Sem conexão":{"en":"No connection","es":"Sin conexión","it":"Nessuna connessione","fr":"Pas de connexion","de":"Keine Verbindung"},
"Abra uma vez com internet para baixar esta língua. Depois ela funciona offline.":{"en":"Open once with internet to download this language. Then it works offline.","es":"Ábrelo una vez con internet para descargar este idioma. Después funciona sin conexión.","it":"Apri una volta con internet per scaricare questa lingua. Poi funziona offline.","fr":"Ouvrez une fois avec internet pour télécharger cette langue. Elle fonctionnera ensuite hors ligne.","de":"Öffne es einmal mit Internet, um diese Sprache zu laden. Danach geht es offline."},
"Idioma em preparação":{"en":"Language in preparation","es":"Idioma en preparación","it":"Lingua in preparazione","fr":"Langue en préparation","de":"Sprache in Vorbereitung"},
"Ainda não há vocabulário validado para esta língua.":{"en":"There is no validated vocabulary for this language yet.","es":"Aún no hay vocabulario validado para este idioma.","it":"Non c'è ancora vocabolario verificato per questa lingua.","fr":"Il n'y a pas encore de vocabulaire validé pour cette langue.","de":"Für diese Sprache gibt es noch keinen geprüften Wortschatz."},
"Partida":{"en":"Game","es":"Partida","it":"Partita","fr":"Partie","de":"Spiel"},
"Sair":{"en":"Exit","es":"Salir","it":"Esci","fr":"Quitter","de":"Beenden"},
"Sair da partida e voltar ao lobby":{"en":"Leave the game and return to the lobby","es":"Salir de la partida y volver al inicio","it":"Esci dalla partita e torna alla lobby","fr":"Quitter la partie et revenir à l'accueil","de":"Spiel verlassen und zurück zur Lobby"},
"Meta de hoje":{"en":"Today's goal","es":"Meta de hoy","it":"Obiettivo di oggi","fr":"Objectif du jour","de":"Tagesziel"},
"{n} certas":{"en":"{n} correct","es":"{n} aciertos","it":"{n} giuste","fr":"{n} réussies","de":"{n} richtig"},
"{n} certa":{"en":"{n} correct","es":"{n} acierto","it":"{n} giusta","fr":"{n} réussie","de":"{n} richtig"},
"{n} restantes":{"en":"{n} left","es":"{n} restantes","it":"{n} rimanenti","fr":"{n} restantes","de":"{n} übrig"},
"{n} restante":{"en":"{n} left","es":"{n} restante","it":"{n} rimanente","fr":"{n} restante","de":"{n} übrig"},
"Nível {n}":{"en":"Level {n}","es":"Nivel {n}","it":"Livello {n}","fr":"Niveau {n}","de":"Niveau {n}"},
"Palavra nova":{"en":"New word","es":"Palabra nueva","it":"Parola nuova","fr":"Nouveau mot","de":"Neues Wort"},
"Revisão":{"en":"Review","es":"Repaso","it":"Ripasso","fr":"Révision","de":"Wiederholung"},
"Treino livre":{"en":"Free practice","es":"Práctica libre","it":"Allenamento libero","fr":"Entraînement libre","de":"Freies Training"},
"treino livre":{"en":"free practice","es":"práctica libre","it":"allenamento libero","fr":"entraînement libre","de":"freies Training"},
"Diga em {s}, em voz alta.":{"en":"Say it in {s}, out loud.","es":"Dilo en {s}, en voz alta.","it":"Dillo in {s}, ad alta voce.","fr":"Dites-le en {s}, à voix haute.","de":"Sag es laut auf {s}."},
"Diga em {s}, em voz alta, com o artigo.":{"en":"Say it in {s}, out loud, with its article.","es":"Dilo en {s}, en voz alta, con el artículo.","it":"Dillo in {s}, ad alta voce, con l'articolo.","fr":"Dites-le en {s}, à voix haute, avec l'article.","de":"Sag es laut auf {s}, mit Artikel."},
"O que significa?":{"en":"What does it mean?","es":"¿Qué significa?","it":"Che cosa significa?","fr":"Que signifie ce mot ?","de":"Was bedeutet das?"},
"Dica: primeira letra":{"en":"Hint: first letter","es":"Pista: primera letra","it":"Indizio: prima lettera","fr":"Indice : première lettre","de":"Hinweis: erster Buchstabe"},
"Começa com “{x}”":{"en":"Starts with “{x}”","es":"Empieza por “{x}”","it":"Inizia con “{x}”","fr":"Commence par « {x} »","de":"Beginnt mit „{x}“"},
"Mostrar resposta":{"en":"Show answer","es":"Mostrar respuesta","it":"Mostra risposta","fr":"Afficher la réponse","de":"Antwort zeigen"},
"Ouvir palavra":{"en":"Listen to word","es":"Escuchar palabra","it":"Ascolta la parola","fr":"Écouter le mot","de":"Wort anhören"},
"Ouvir frase e repetir":{"en":"Listen and repeat","es":"Escuchar y repetir","it":"Ascolta e ripeti","fr":"Écouter et répéter","de":"Anhören und wiederholen"},
"Gancho ({s})":{"en":"Hook ({s})","es":"Gancho ({s})","it":"Aggancio ({s})","fr":"Astuce ({s})","de":"Eselsbrücke ({s})"},
"Errei":{"en":"I missed it","es":"Fallé","it":"Sbagliato","fr":"Raté","de":"Falsch"},
"Difícil":{"en":"Difficult","es":"Difícil","it":"Difficile","fr":"Difficile","de":"Schwierig"},
"Sabia":{"en":"I knew it","es":"Lo sabía","it":"Lo sapevo","fr":"Je savais","de":"Gewusst"},
"volta agora":{"en":"back now","es":"vuelve ahora","it":"torna subito","fr":"revient tout de suite","de":"kommt gleich wieder"},
"amanhã":{"en":"tomorrow","es":"mañana","it":"domani","fr":"demain","de":"morgen"},
"{n} dia(s)":{"en":"{n} day(s)","es":"{n} día(s)","it":"{n} giorno/i","fr":"{n} jour(s)","de":"{n} Tag(e)"},
"Partida concluída!":{"en":"Game complete!","es":"¡Partida terminada!","it":"Partita conclusa!","fr":"Partie terminée !","de":"Spiel beendet!"},
"Treino livre feito":{"en":"Free practice done","es":"Práctica libre hecha","it":"Allenamento libero fatto","fr":"Entraînement libre terminé","de":"Freies Training erledigt"},
"sabia":{"en":"knew it","es":"lo sabía","it":"sapevo","fr":"je savais","de":"gewusst"},
"difícil":{"en":"difficult","es":"difícil","it":"difficile","fr":"difficile","de":"schwierig"},
"errei":{"en":"missed","es":"fallé","it":"sbagliate","fr":"ratées","de":"falsch"},
"{n} palavras verificadas no total.":{"en":"{n} words checked in total.","es":"{n} palabras verificadas en total.","it":"{n} parole verificate in totale.","fr":"{n} mots vérifiés au total.","de":"{n} Wörter insgesamt geprüft."},
"Continuar com mais 10 novas":{"en":"Continue with 10 more new words","es":"Seguir con 10 nuevas más","it":"Continua con altre 10 nuove","fr":"Continuer avec 10 nouveaux mots","de":"Mit 10 neuen Wörtern weitermachen"},
"Voltar ao lobby":{"en":"Back to lobby","es":"Volver al inicio","it":"Torna alla lobby","fr":"Retour à l'accueil","de":"Zurück zur Lobby"},
"Preparando palavra em {s}…":{"en":"Preparing word in {s}…","es":"Preparando palabra en {s}…","it":"Preparazione della parola in {s}…","fr":"Préparation du mot en {s}…","de":"Wort wird auf {s} vorbereitet…"},
"Traduções de outros pares exigem internet na primeira utilização.":{"en":"Translations for other pairs need internet the first time.","es":"Las traducciones de otros pares necesitan internet la primera vez.","it":"Le traduzioni di altre coppie richiedono internet al primo uso.","fr":"Les traductions d'autres paires nécessitent internet la première fois.","de":"Übersetzungen anderer Paare brauchen beim ersten Mal Internet."},
"Não foi possível obter a tradução gratuita para {s}. Verifique a conexão ou tente novamente.":{"en":"Couldn't get the free translation into {s}. Check your connection or try again.","es":"No se pudo obtener la traducción gratuita al {s}. Revisa la conexión o inténtalo de nuevo.","it":"Impossibile ottenere la traduzione gratuita in {s}. Controlla la connessione o riprova.","fr":"Impossible d'obtenir la traduction gratuite en {s}. Vérifiez la connexion ou réessayez.","de":"Die kostenlose Übersetzung ins {s} war nicht möglich. Prüfe die Verbindung oder versuche es erneut."},
"Tentar tradução novamente":{"en":"Retry translation","es":"Reintentar traducción","it":"Riprova la traduzione","fr":"Réessayer la traduction","de":"Übersetzung erneut versuchen"},
"Nome famoso":{"en":"Famous name","es":"Nombre famoso","it":"Nome famoso","fr":"Nom célèbre","de":"Berühmter Name"},
"Som parecido":{"en":"Similar sound","es":"Sonido parecido","it":"Suono simile","fr":"Son proche","de":"Ähnlicher Klang"},
"Imagem":{"en":"Image","es":"Imagen","it":"Immagine","fr":"Image","de":"Bild"},
"Regra":{"en":"Rule","es":"Regla","it":"Regola","fr":"Règle","de":"Regel"},
"Falso amigo":{"en":"False friend","es":"Falso amigo","it":"Falso amico","fr":"Faux ami","de":"Falscher Freund"},
"Onomatopeia":{"en":"Onomatopoeia","es":"Onomatopeya","it":"Onomatopea","fr":"Onomatopée","de":"Lautmalerei"},
"Padrão":{"en":"Pattern","es":"Patrón","it":"Schema","fr":"Modèle","de":"Muster"},
"Frase famosa":{"en":"Famous quote","es":"Frase famosa","it":"Frase celebre","fr":"Phrase célèbre","de":"Berühmtes Zitat"},
"Primeiro dia garantido!":{"en":"First day secured!","es":"¡Primer día asegurado!","it":"Primo giorno assicurato!","fr":"Premier jour validé !","de":"Erster Tag geschafft!"},
"{n} dias de racha!":{"en":"{n}-day streak!","es":"¡Racha de {n} días!","it":"Serie di {n} giorni!","fr":"Série de {n} jours !","de":"{n} Tage in Folge!"},
"{n} dias seguidos!":{"en":"{n} days in a row!","es":"¡{n} días seguidos!","it":"{n} giorni di fila!","fr":"{n} jours d'affilée !","de":"{n} Tage in Folge!"},
"Conquista desbloqueada: {n} dias! Continue sua jornada amanhã.":{"en":"Achievement unlocked: {n} days! Keep going tomorrow.","es":"¡Logro desbloqueado: {n} días! Sigue mañana.","it":"Traguardo sbloccato: {n} giorni! Continua domani.","fr":"Succès débloqué : {n} jours ! Continuez demain.","de":"Erfolg freigeschaltet: {n} Tage! Mach morgen weiter."},
"Novo recorde pessoal! A racha está protegida hoje.":{"en":"New personal record! Your streak is safe today.","es":"¡Nuevo récord personal! Tu racha está protegida hoy.","it":"Nuovo record personale! La serie è salva oggi.","fr":"Nouveau record personnel ! Votre série est protégée aujourd'hui.","de":"Neuer persönlicher Rekord! Deine Serie ist heute gesichert."},
"Racha protegida hoje! Um passo por dia faz a diferença.":{"en":"Streak safe today! One step a day makes the difference.","es":"¡Racha protegida hoy! Un paso al día marca la diferencia.","it":"Serie salva oggi! Un passo al giorno fa la differenza.","fr":"Série protégée aujourd'hui ! Un pas par jour fait la différence.","de":"Serie heute gesichert! Ein Schritt pro Tag macht den Unterschied."},
"Volte amanhã para manter a chama acesa.":{"en":"Come back tomorrow to keep the flame alive.","es":"Vuelve mañana para mantener la llama encendida.","it":"Torna domani per tenere accesa la fiamma.","fr":"Revenez demain pour garder la flamme allumée.","de":"Komm morgen wieder, damit die Flamme brennt."},
"Continuar":{"en":"Continue","es":"Continuar","it":"Continua","fr":"Continuer","de":"Weiter"},
"hoje":{"en":"today","es":"hoy","it":"oggi","fr":"auj.","de":"heute"},
"Dias seguidos":{"en":"Days in a row","es":"Días seguidos","it":"Giorni di fila","fr":"Jours d'affilée","de":"Tage in Folge"},
"Preparando sua racha":{"en":"Preparing your streak","es":"Preparando tu racha","it":"Preparazione della serie","fr":"Préparation de votre série","de":"Deine Serie wird vorbereitet"},
"dia seguido":{"en":"day in a row","es":"día seguido","it":"giorno di fila","fr":"jour d'affilée","de":"Tag in Folge"},
"dias seguidos":{"en":"days in a row","es":"días seguidos","it":"giorni di fila","fr":"jours d'affilée","de":"Tage in Folge"},
"{n} dias seguidos":{"en":"{n} days in a row","es":"{n} días seguidos","it":"{n} giorni di fila","fr":"{n} jours d'affilée","de":"{n} Tage in Folge"},
"atividades realizadas":{"en":"activities done","es":"actividades realizadas","it":"attività svolte","fr":"activités réalisées","de":"erledigte Übungen"},
"recorde de dias":{"en":"day record","es":"récord de días","it":"record di giorni","fr":"record de jours","de":"Tagesrekord"},
"Desafio extra de hoje":{"en":"Today's extra challenge","es":"Desafío extra de hoy","it":"Sfida extra di oggi","fr":"Défi bonus du jour","de":"Heutige Zusatzaufgabe"},
"Uma atividade concluída mantém a racha. Faça 20 para o desafio extra.":{"en":"One completed activity keeps your streak. Do 20 for the extra challenge.","es":"Una actividad completada mantiene la racha. Haz 20 para el desafío extra.","it":"Un'attività completata mantiene la serie. Fanne 20 per la sfida extra.","fr":"Une activité terminée maintient votre série. Faites-en 20 pour le défi bonus.","de":"Eine erledigte Übung hält deine Serie. Schaffe 20 für die Zusatzaufgabe."},
"Sua semana de estudo":{"en":"Your study week","es":"Tu semana de estudio","it":"La tua settimana di studio","fr":"Votre semaine d'étude","de":"Deine Lernwoche"},
"{n} / {n} dias":{"en":"{n} / {n} days","es":"{n} / {n} días","it":"{n} / {n} giorni","fr":"{n} / {n} jours","de":"{n} / {n} Tage"},
"✓ Racha protegida hoje":{"en":"✓ Streak safe today","es":"✓ Racha protegida hoy","it":"✓ Serie salva oggi","fr":"✓ Série protégée aujourd'hui","de":"✓ Serie heute gesichert"},
"Racha em risco hoje":{"en":"Streak at risk today","es":"Racha en riesgo hoy","it":"Serie a rischio oggi","fr":"Série en danger aujourd'hui","de":"Serie heute in Gefahr"},
"Comece sua primeira sequência":{"en":"Start your first streak","es":"Empieza tu primera racha","it":"Inizia la tua prima serie","fr":"Commencez votre première série","de":"Starte deine erste Serie"},
"Sua atividade de hoje foi registrada.":{"en":"Today's activity has been recorded.","es":"Tu actividad de hoy quedó registrada.","it":"La tua attività di oggi è stata registrata.","fr":"Votre activité du jour est enregistrée.","de":"Deine heutige Übung wurde gespeichert."},
"Faça uma atividade até o fim do dia para continuar a sequência.":{"en":"Do one activity before the day ends to keep your streak.","es":"Haz una actividad antes de que termine el día para seguir la racha.","it":"Fai un'attività entro fine giornata per continuare la serie.","fr":"Faites une activité avant la fin de la journée pour poursuivre votre série.","de":"Mach heute noch eine Übung, um deine Serie fortzusetzen."},
"Desafio extra concluído!":{"en":"Extra challenge complete!","es":"¡Desafío extra completado!","it":"Sfida extra completata!","fr":"Défi bonus réussi !","de":"Zusatzaufgabe geschafft!"},
"Racha salva! Continue para o bônus":{"en":"Streak saved! Keep going for the bonus","es":"¡Racha salvada! Sigue para el bonus","it":"Serie salva! Continua per il bonus","fr":"Série sauvée ! Continuez pour le bonus","de":"Serie gesichert! Weiter zum Bonus"},
"Proteja sua racha com 1 exercício":{"en":"Protect your streak with 1 exercise","es":"Protege tu racha con 1 ejercicio","it":"Proteggi la serie con 1 esercizio","fr":"Protégez votre série avec 1 exercice","de":"Sichere deine Serie mit 1 Übung"},
"Conclua 1 exercício para começar":{"en":"Complete 1 exercise to start","es":"Completa 1 ejercicio para empezar","it":"Completa 1 esercizio per iniziare","fr":"Terminez 1 exercice pour commencer","de":"Schließe 1 Übung ab, um zu starten"},
"Incrível! Você completou as {n} práticas extras de hoje.":{"en":"Amazing! You completed today's {n} extra practices.","es":"¡Increíble! Completaste las {n} prácticas extra de hoy.","it":"Incredibile! Hai completato le {n} pratiche extra di oggi.","fr":"Incroyable ! Vous avez terminé les {n} entraînements bonus du jour.","de":"Super! Du hast die {n} Zusatzübungen von heute geschafft."},
"Você já garantiu sua racha. Faltam {n} práticas para o desafio extra.":{"en":"Your streak is secured. {n} more practices for the extra challenge.","es":"Ya aseguraste tu racha. Faltan {n} prácticas para el desafío extra.","it":"Hai già assicurato la serie. Mancano {n} pratiche per la sfida extra.","fr":"Votre série est assurée. Encore {n} entraînements pour le défi bonus.","de":"Deine Serie ist gesichert. Noch {n} Übungen bis zur Zusatzaufgabe."},
"Qualquer exercício concluído mantém a racha. O desafio extra é opcional.":{"en":"Any completed exercise keeps your streak. The extra challenge is optional.","es":"Cualquier ejercicio completado mantiene la racha. El desafío extra es opcional.","it":"Qualsiasi esercizio completato mantiene la serie. La sfida extra è facoltativa.","fr":"Tout exercice terminé maintient votre série. Le défi bonus est facultatif.","de":"Jede erledigte Übung hält deine Serie. Die Zusatzaufgabe ist freiwillig."},
"Próxima conquista:":{"en":"Next achievement:","es":"Próximo logro:","it":"Prossimo traguardo:","fr":"Prochain succès :","de":"Nächster Erfolg:"},
"Progresso para {n} dias":{"en":"Progress to {n} days","es":"Progreso hacia {n} días","it":"Progresso verso {n} giorni","fr":"Progression vers {n} jours","de":"Fortschritt bis {n} Tage"},
"{s}: {n} atividades":{"en":"{s}: {n} activities","es":"{s}: {n} actividades","it":"{s}: {n} attività","fr":"{s} : {n} activités","de":"{s}: {n} Übungen"},
"{s}: {n} atividade":{"en":"{s}: {n} activity","es":"{s}: {n} actividad","it":"{s}: {n} attività","fr":"{s} : {n} activité","de":"{s}: {n} Übung"},
"dom":{"en":"Sun","es":"dom","it":"dom","fr":"dim","de":"So"},
"seg":{"en":"Mon","es":"lun","it":"lun","fr":"lun","de":"Mo"},
"ter":{"en":"Tue","es":"mar","it":"mar","fr":"mar","de":"Di"},
"qua":{"en":"Wed","es":"mié","it":"mer","fr":"mer","de":"Mi"},
"qui":{"en":"Thu","es":"jue","it":"gio","fr":"jeu","de":"Do"},
"sex":{"en":"Fri","es":"vie","it":"ven","fr":"ven","de":"Fr"},
"sáb":{"en":"Sat","es":"sáb","it":"sab","fr":"sam","de":"Sa"},
"★ Desafio extra do dia concluído: {n} atividades! Continue no seu ritmo.":{"en":"★ Today's extra challenge complete: {n} activities! Keep your own pace.","es":"★ Desafío extra del día completado: ¡{n} actividades! Sigue a tu ritmo.","it":"★ Sfida extra del giorno completata: {n} attività! Continua al tuo ritmo.","fr":"★ Défi bonus du jour réussi : {n} activités ! Continuez à votre rythme.","de":"★ Zusatzaufgabe geschafft: {n} Übungen! Mach in deinem Tempo weiter."},
"Uma atividade concluída por dia mantém sua sequência.":{"en":"One completed activity a day keeps your streak.","es":"Una actividad completada al día mantiene tu racha.","it":"Un'attività completata al giorno mantiene la serie.","fr":"Une activité terminée par jour maintient votre série.","de":"Eine erledigte Übung pro Tag hält deine Serie."},
"Indicador da racha diária":{"en":"Daily streak indicator","es":"Indicador de la racha diaria","it":"Indicatore della serie giornaliera","fr":"Indicateur de série quotidienne","de":"Anzeige der Tagesserie"},
"{x} Bora treinar?":{"en":"{x} Ready to practice?","es":"{x} ¿Practicamos?","it":"{x} Ci alleniamo?","fr":"{x} On s'entraîne ?","de":"{x} Wollen wir üben?"},
"Uhul! Hoje tem palavra nova!":{"en":"Woohoo! New words today!","es":"¡Bien! ¡Hoy hay palabras nuevas!","it":"Evviva! Oggi ci sono parole nuove!","fr":"Youpi ! Nouveaux mots aujourd'hui !","de":"Juhu! Heute gibt es neue Wörter!"},
"Wiiii! Rodopio de aquecimento!":{"en":"Wheee! Warm-up spin!","es":"¡Wiii! ¡Giro de calentamiento!","it":"Wiii! Giravolta di riscaldamento!","fr":"Youhou ! Pirouette d'échauffement !","de":"Hui! Aufwärm-Pirouette!"},
"Psiu... 15 minutinhos e a chama fica acesa.":{"en":"Psst... 15 minutes and the flame stays lit.","es":"Psst... 15 minutitos y la llama sigue encendida.","it":"Psst... 15 minuti e la fiamma resta accesa.","fr":"Psst... 15 petites minutes et la flamme reste allumée.","de":"Psst... 15 Minuten und die Flamme brennt weiter."},
"Dancinha do vocabulário!":{"en":"Vocabulary dance!","es":"¡Bailecito del vocabulario!","it":"Balletto del vocabolario!","fr":"Petite danse du vocabulaire !","de":"Wortschatz-Tänzchen!"},
"Hmm... qual palavra eu vou lembrar hoje?":{"en":"Hmm... which word will I remember today?","es":"Mmm... ¿qué palabra recordaré hoy?","it":"Mmm... quale parola ricorderò oggi?","fr":"Hmm... quel mot vais-je retenir aujourd'hui ?","de":"Hmm... welches Wort merke ich mir heute?"},
"Hahaha, para! Isso faz cócegas!":{"en":"Hahaha, stop! That tickles!","es":"¡Jajaja, para! ¡Me haces cosquillas!","it":"Ahahah, smettila! Mi fa il solletico!","fr":"Hahaha, arrêtez ! Ça chatouille !","de":"Hahaha, hör auf! Das kitzelt!"},
"Opa! Que susto!":{"en":"Whoa! You scared me!","es":"¡Uy! ¡Qué susto!","it":"Ops! Che spavento!","fr":"Oh ! Quelle frayeur !","de":"Huch! Hast du mich erschreckt!"},
"Já são {n} palavras verificadas. Que memória!":{"en":"{n} words checked already. What a memory!","es":"Ya van {n} palabras verificadas. ¡Qué memoria!","it":"Già {n} parole verificate. Che memoria!","fr":"Déjà {n} mots vérifiés. Quelle mémoire !","de":"Schon {n} Wörter geprüft. Was für ein Gedächtnis!"},
"Sua racha já está salva hoje!":{"en":"Your streak is already safe today!","es":"¡Tu racha ya está salvada hoy!","it":"La tua serie è già salva oggi!","fr":"Votre série est déjà sauvée aujourd'hui !","de":"Deine Serie ist heute schon gesichert!"},
"Conclua um exercício hoje para salvar a racha.":{"en":"Complete an exercise today to save your streak.","es":"Completa un ejercicio hoy para salvar la racha.","it":"Completa un esercizio oggi per salvare la serie.","fr":"Terminez un exercice aujourd'hui pour sauver votre série.","de":"Erledige heute eine Übung, um deine Serie zu retten."},
"{n} dias seguidos! Não para agora.":{"en":"{n} days in a row! Don't stop now.","es":"¡{n} días seguidos! No pares ahora.","it":"{n} giorni di fila! Non fermarti ora.","fr":"{n} jours d'affilée ! Ne vous arrêtez pas.","de":"{n} Tage in Folge! Hör jetzt nicht auf."},
"{n} dia seguido! Não para agora.":{"en":"{n} day in a row! Don't stop now.","es":"¡{n} día seguido! No pares ahora.","it":"{n} giorno di fila! Non fermarti ora.","fr":"{n} jour d'affilée ! Ne vous arrêtez pas.","de":"{n} Tag in Folge! Hör jetzt nicht auf."},
"Racha salva e desafio extra completo!":{"en":"Streak saved and extra challenge done!","es":"¡Racha salvada y desafío extra completo!","it":"Serie salva e sfida extra completata!","fr":"Série sauvée et défi bonus réussi !","de":"Serie gesichert und Zusatzaufgabe geschafft!"},
"Racha salva! Mais {n} práticas para o bônus.":{"en":"Streak saved! {n} more practices for the bonus.","es":"¡Racha salvada! {n} prácticas más para el bonus.","it":"Serie salva! Altre {n} pratiche per il bonus.","fr":"Série sauvée ! Encore {n} entraînements pour le bonus.","de":"Serie gesichert! Noch {n} Übungen bis zum Bonus."},
"Conclua uma atividade e acenda sua racha!":{"en":"Complete an activity and light up your streak!","es":"¡Completa una actividad y enciende tu racha!","it":"Completa un'attività e accendi la tua serie!","fr":"Terminez une activité et allumez votre série !","de":"Erledige eine Übung und entfache deine Serie!"},
"A gatuna voltou!":{"en":"The sly fox is back!","es":"¡Volvió la pícara!","it":"La furbetta è tornata!","fr":"La rusée est de retour !","de":"Die Füchsin ist zurück!"},
"Gostou do visual novo?":{"en":"Like the new look?","es":"¿Te gusta el nuevo look?","it":"Ti piace il nuovo look?","fr":"Le nouveau look vous plaît ?","de":"Gefällt dir der neue Look?"},
"Escolha seu personagem":{"en":"Choose your character","es":"Elige tu personaje","it":"Scegli il tuo personaggio","fr":"Choisissez votre personnage","de":"Wähle deine Figur"},
"A raposa gatuna é animada e muda de expressão. As outras são ilustrações.":{"en":"The sly fox is animated and changes expression. The others are illustrations.","es":"La zorra pícara está animada y cambia de expresión. Los demás son ilustraciones.","it":"La volpe furbetta è animata e cambia espressione. Gli altri sono illustrazioni.","fr":"La renarde rusée est animée et change d'expression. Les autres sont des illustrations.","de":"Die schlaue Füchsin ist animiert und ändert ihren Ausdruck. Die anderen sind Illustrationen."},
"Fechar":{"en":"Close","es":"Cerrar","it":"Chiudi","fr":"Fermer","de":"Schließen"},
"Raposa gatuna":{"en":"Sly fox","es":"Zorra pícara","it":"Volpe furbetta","fr":"Renarde rusée","de":"Schlaue Füchsin"},
"De gorro":{"en":"Beanie","es":"Con gorro","it":"Con berretto","fr":"En bonnet","de":"Mit Mütze"},
"Na chuva":{"en":"In the rain","es":"Bajo la lluvia","it":"Sotto la pioggia","fr":"Sous la pluie","de":"Im Regen"},
"Mago":{"en":"Wizard","es":"Mago","it":"Mago","fr":"Magicien","de":"Zauberer"},
"Esboço":{"en":"Sketch","es":"Boceto","it":"Schizzo","fr":"Esquisse","de":"Skizze"},
"De boné":{"en":"Cap","es":"Con gorra","it":"Con cappellino","fr":"En casquette","de":"Mit Kappe"},
"Explorador":{"en":"Explorer","es":"Explorador","it":"Esploratore","fr":"Explorateur","de":"Entdecker"},
"Surfista":{"en":"Surfer","es":"Surfista","it":"Surfista","fr":"Surfeur","de":"Surfer"},
"Na neve":{"en":"In the snow","es":"En la nieve","it":"Sulla neve","fr":"Dans la neige","de":"Im Schnee"},
"Girassóis":{"en":"Sunflowers","es":"Girasoles","it":"Girasoli","fr":"Tournesols","de":"Sonnenblumen"},
"Acampamento":{"en":"Camping","es":"Campamento","it":"Campeggio","fr":"Camping","de":"Zelten"},
"Outono":{"en":"Autumn","es":"Otoño","it":"Autunno","fr":"Automne","de":"Herbst"},
"Leitor":{"en":"Reader","es":"Lector","it":"Lettore","fr":"Lecteur","de":"Leser"},
"Pirata":{"en":"Pirate","es":"Pirata","it":"Pirata","fr":"Pirate","de":"Pirat"},
"Na rede":{"en":"In the hammock","es":"En la hamaca","it":"Sull'amaca","fr":"Dans le hamac","de":"In der Hängematte"},
"Noite na cidade":{"en":"City night","es":"Noche en la ciudad","it":"Notte in città","fr":"Nuit en ville","de":"Nacht in der Stadt"},
"Buscar palavra":{"en":"Search word","es":"Buscar palabra","it":"Cerca parola","fr":"Chercher un mot","de":"Wort suchen"},
"Marque ganchos bons ou ruins. Nos ruins, escreva sua ideia e copie as correções para colar no chat.":{"en":"Mark hooks as good or bad. For bad ones, write your idea and copy the fixes to paste in the chat.","es":"Marca los ganchos buenos o malos. En los malos, escribe tu idea y copia las correcciones para pegarlas en el chat.","it":"Segna gli agganci buoni o cattivi. Per quelli cattivi, scrivi la tua idea e copia le correzioni da incollare in chat.","fr":"Marquez les astuces bonnes ou mauvaises. Pour les mauvaises, écrivez votre idée et copiez les corrections pour les coller dans le chat.","de":"Markiere gute oder schlechte Eselsbrücken. Bei schlechten schreib deine Idee und kopiere die Korrekturen in den Chat."},
"Bom":{"en":"Good","es":"Bueno","it":"Buono","fr":"Bon","de":"Gut"},
"Corrigir":{"en":"Fix","es":"Corregir","it":"Correggi","fr":"Corriger","de":"Korrigieren"},
"bom":{"en":"good","es":"bueno","it":"buono","fr":"bon","de":"gut"},
"corrigir":{"en":"to fix","es":"corregir","it":"da correggere","fr":"à corriger","de":"korrigieren"},
"Sua ideia de gancho ou o que está ruim":{"en":"Your hook idea or what's wrong","es":"Tu idea de gancho o lo que está mal","it":"La tua idea di aggancio o cosa non va","fr":"Votre idée d'astuce ou ce qui ne va pas","de":"Deine Idee oder was nicht passt"},
"{n} bons, {n} para corrigir":{"en":"{n} good, {n} to fix","es":"{n} buenos, {n} por corregir","it":"{n} buoni, {n} da correggere","fr":"{n} bons, {n} à corriger","de":"{n} gut, {n} zu korrigieren"},
"Copiar correções":{"en":"Copy fixes","es":"Copiar correcciones","it":"Copia correzioni","fr":"Copier les corrections","de":"Korrekturen kopieren"},
"Copiado. Cole no chat.":{"en":"Copied. Paste it in the chat.","es":"Copiado. Pégalo en el chat.","it":"Copiato. Incollalo in chat.","fr":"Copié. Collez-le dans le chat.","de":"Kopiert. Füge es im Chat ein."},
"Correções para copiar":{"en":"Fixes to copy","es":"Correcciones para copiar","it":"Correzioni da copiare","fr":"Corrections à copier","de":"Korrekturen zum Kopieren"},
"Nenhuma palavra encontrada.":{"en":"No words found.","es":"No se encontró ninguna palabra.","it":"Nessuna parola trovata.","fr":"Aucun mot trouvé.","de":"Keine Wörter gefunden."},
"Questão {n} de {n} · Acertos: {n}":{"en":"Question {n} of {n} · Correct: {n}","es":"Pregunta {n} de {n} · Aciertos: {n}","it":"Domanda {n} di {n} · Giuste: {n}","fr":"Question {n} sur {n} · Bonnes réponses : {n}","de":"Frage {n} von {n} · Richtig: {n}"},
"O que significa «{x}»?":{"en":"What does «{x}» mean?","es":"¿Qué significa «{x}»?","it":"Che cosa significa «{x}»?","fr":"Que signifie « {x} » ?","de":"Was bedeutet „{x}“?"},
"Como se diz «{x}» em {s}?":{"en":"How do you say «{x}» in {s}?","es":"¿Cómo se dice «{x}» en {s}?","it":"Come si dice «{x}» in {s}?","fr":"Comment dit-on « {x} » en {s} ?","de":"Wie sagt man „{x}“ auf {s}?"},
"Qual é a tradução de «{x}»?":{"en":"What is the translation of «{x}»?","es":"¿Cuál es la traducción de «{x}»?","it":"Qual è la traduzione di «{x}»?","fr":"Quelle est la traduction de « {x} » ?","de":"Was ist die Übersetzung von „{x}“?"},
"Correto! Exemplo: {x}":{"en":"Correct! Example: {x}","es":"¡Correcto! Ejemplo: {x}","it":"Esatto! Esempio: {x}","fr":"Correct ! Exemple : {x}","de":"Richtig! Beispiel: {x}"},
"Correto! Palavra-chave: {x}":{"en":"Correct! Key word: {x}","es":"¡Correcto! Palabra clave: {x}","it":"Esatto! Parola chiave: {x}","fr":"Correct ! Mot clé : {x}","de":"Richtig! Schlüsselwort: {x}"},
"Resposta correta: {x}. Exemplo: {x}":{"en":"Correct answer: {x}. Example: {x}","es":"Respuesta correcta: {x}. Ejemplo: {x}","it":"Risposta corretta: {x}. Esempio: {x}","fr":"Bonne réponse : {x}. Exemple : {x}","de":"Richtige Antwort: {x}. Beispiel: {x}"},
"Resposta correta: {x}. Palavra-chave: {x}":{"en":"Correct answer: {x}. Key word: {x}","es":"Respuesta correcta: {x}. Palabra clave: {x}","it":"Risposta corretta: {x}. Parola chiave: {x}","fr":"Bonne réponse : {x}. Mot clé : {x}","de":"Richtige Antwort: {x}. Schlüsselwort: {x}"},
"Próxima questão":{"en":"Next question","es":"Siguiente pregunta","it":"Domanda successiva","fr":"Question suivante","de":"Nächste Frage"},
"Ver resultado":{"en":"See result","es":"Ver resultado","it":"Vedi risultato","fr":"Voir le résultat","de":"Ergebnis ansehen"},
"Quiz concluído":{"en":"Quiz complete","es":"Prueba terminada","it":"Quiz concluso","fr":"Quiz terminé","de":"Quiz beendet"},
"Você acertou {n} de {n} questões.":{"en":"You got {n} of {n} questions right.","es":"Acertaste {n} de {n} preguntas.","it":"Hai risposto bene a {n} domande su {n}.","fr":"Vous avez réussi {n} questions sur {n}.","de":"Du hast {n} von {n} Fragen richtig."},
"Recomeçar":{"en":"Restart","es":"Reiniciar","it":"Ricomincia","fr":"Recommencer","de":"Neu starten"},
"Quiz em preparação":{"en":"Quiz in preparation","es":"Prueba en preparación","it":"Quiz in preparazione","fr":"Quiz en préparation","de":"Quiz in Vorbereitung"},
"Este idioma precisa de pelo menos três palavras cadastradas para gerar perguntas.":{"en":"This language needs at least three words to generate questions.","es":"Este idioma necesita al menos tres palabras para generar preguntas.","it":"Questa lingua ha bisogno di almeno tre parole per generare domande.","fr":"Cette langue doit avoir au moins trois mots pour générer des questions.","de":"Diese Sprache braucht mindestens drei Wörter, um Fragen zu erstellen."},
"Estudar vocabulário":{"en":"Study vocabulary","es":"Estudiar vocabulario","it":"Studia il vocabolario","fr":"Étudier le vocabulaire","de":"Wortschatz lernen"},
"Preparando questões com traduções em {s}…":{"en":"Preparing questions with translations in {s}…","es":"Preparando preguntas con traducciones en {s}…","it":"Preparazione delle domande con traduzioni in {s}…","fr":"Préparation des questions avec traductions en {s}…","de":"Fragen mit Übersetzungen auf {s} werden vorbereitet…"},
"nesta partida":{"en":"this game","es":"en esta partida","it":"in questa partita","fr":"dans cette partie","de":"in diesem Spiel"},
"Nv {n}":{"en":"Lv {n}","es":"Nv {n}","it":"Liv {n}","fr":"Niv {n}","de":"Lv {n}"},
"★ Nível {n}!":{"en":"★ Level {n}!","es":"★ ¡Nivel {n}!","it":"★ Livello {n}!","fr":"★ Niveau {n} !","de":"★ Niveau {n}!"},
"Frases em {s}":{"en":"Sentences in {s}","es":"Frases en {s}","it":"Frasi in {s}","fr":"Phrases en {s}","de":"Sätze auf {s}"},
"As frases de {s} ainda estão sendo preparadas.":{"en":"The {s} sentences are still being prepared.","es":"Las frases de {s} aún se están preparando.","it":"Le frasi di {s} sono ancora in preparazione.","fr":"Les phrases en {s} sont encore en préparation.","de":"Die Sätze auf {s} werden noch vorbereitet."},
"Hoje:":{"en":"Today:","es":"Hoy:","it":"Oggi:","fr":"Aujourd'hui :","de":"Heute:"},
"Maior combo:":{"en":"Best combo:","es":"Mejor combo:","it":"Combo migliore:","fr":"Meilleur combo :","de":"Bester Combo:"},
"Leia textos que misturam {s} e {s}. Entenda pelo contexto e siga sem abrir a tradução para manter o combo e multiplicar o XP.":{"en":"Read texts that mix {s} and {s}. Understand from context and keep going without opening the translation to keep your combo and multiply XP.","es":"Lee textos que mezclan {s} y {s}. Entiende por el contexto y sigue sin abrir la traducción para mantener el combo y multiplicar el XP.","it":"Leggi testi che mescolano {s} e {s}. Capisci dal contesto e vai avanti senza aprire la traduzione per mantenere la combo e moltiplicare gli XP.","fr":"Lisez des textes qui mélangent {s} et {s}. Comprenez par le contexte sans ouvrir la traduction pour garder le combo et multiplier l'XP.","de":"Lies Texte, die {s} und {s} mischen. Versteh aus dem Kontext und mach ohne Übersetzung weiter, um den Combo zu halten und XP zu vervielfachen."},
"Frases curtas":{"en":"Short sentences","es":"Frases cortas","it":"Frasi brevi","fr":"Phrases courtes","de":"Kurze Sätze"},
"10 frases rápidas do dia a dia.":{"en":"10 quick everyday sentences.","es":"10 frases rápidas del día a día.","it":"10 frasi rapide di tutti i giorni.","fr":"10 phrases rapides du quotidien.","de":"10 kurze Alltagssätze."},
"Parágrafos":{"en":"Paragraphs","es":"Párrafos","it":"Paragrafi","fr":"Paragraphes","de":"Absätze"},
"3 textos de um parágrafo, cerca de 4x maiores. Mais XP por texto.":{"en":"3 one-paragraph texts, about 4x longer. More XP per text.","es":"3 textos de un párrafo, unas 4 veces más largos. Más XP por texto.","it":"3 testi di un paragrafo, circa 4 volte più lunghi. Più XP per testo.","fr":"3 textes d'un paragraphe, environ 4 fois plus longs. Plus d'XP par texte.","de":"3 Texte mit je einem Absatz, etwa 4-mal länger. Mehr XP pro Text."},
"familiares":{"en":"familiar","es":"conocidas","it":"familiari","fr":"familiers","de":"vertraut"},
"dominadas":{"en":"mastered","es":"dominadas","it":"padroneggiate","fr":"maîtrisés","de":"beherrscht"},
"em {s} nas últimas":{"en":"in {s} recently","es":"en {s} en las últimas","it":"in {s} nelle ultime","fr":"en {s} récemment","de":"auf {s} zuletzt"},
"Quanto de {s} por frase":{"en":"How much {s} per sentence","es":"Cuánto {s} por frase","it":"Quanto {s} per frase","fr":"Part de {s} par phrase","de":"Wie viel {s} pro Satz"},
"Proporção de {s}":{"en":"Share of {s}","es":"Proporción de {s}","it":"Proporzione di {s}","fr":"Part de {s}","de":"Anteil {s}"},
"Automático":{"en":"Automatic","es":"Automático","it":"Automatico","fr":"Automatique","de":"Automatisch"},
"O app decide pelo seu nível: começa quase tudo em {s} e vai trocando por {s} conforme você aprende.":{"en":"The app decides by your level: it starts almost all in {s} and switches to {s} as you learn.","es":"La app decide según tu nivel: empieza casi todo en {s} y va cambiando a {s} a medida que aprendes.","it":"L'app decide in base al tuo livello: inizia quasi tutto in {s} e passa al {s} man mano che impari.","fr":"L'appli décide selon votre niveau : presque tout en {s} au début, puis de plus en plus en {s} à mesure que vous apprenez.","de":"Die App richtet sich nach deinem Niveau: Anfangs fast alles auf {s}, dann immer mehr auf {s}, während du lernst."},
"Frases inteiras em {s}. Toque num trecho para traduzir.":{"en":"Whole sentences in {s}. Tap a part to translate it.","es":"Frases enteras en {s}. Toca un fragmento para traducirlo.","it":"Frasi intere in {s}. Tocca un pezzo per tradurlo.","fr":"Phrases entières en {s}. Touchez un passage pour le traduire.","de":"Ganze Sätze auf {s}. Tippe auf einen Teil, um ihn zu übersetzen."},
"Cerca de {n}% de cada frase em {s} e {n}% em {s}.":{"en":"About {n}% of each sentence in {s} and {n}% in {s}.","es":"Cerca del {n} % de cada frase en {s} y el {n} % en {s}.","it":"Circa il {n}% di ogni frase in {s} e il {n}% in {s}.","fr":"Environ {n} % de chaque phrase en {s} et {n} % en {s}.","de":"Etwa {n} % jedes Satzes auf {s} und {n} % auf {s}."},
"Silenciar sons":{"en":"Mute sounds","es":"Silenciar sonidos","it":"Disattiva suoni","fr":"Couper les sons","de":"Töne aus"},
"Ativar sons":{"en":"Turn on sounds","es":"Activar sonidos","it":"Attiva suoni","fr":"Activer les sons","de":"Töne an"},
"Partida de frases":{"en":"Sentence game","es":"Partida de frases","it":"Partita di frasi","fr":"Partie de phrases","de":"Satzspiel"},
"Frase {n} de {n}":{"en":"Sentence {n} of {n}","es":"Frase {n} de {n}","it":"Frase {n} di {n}","fr":"Phrase {n} sur {n}","de":"Satz {n} von {n}"},
"Texto {n} de {n}":{"en":"Text {n} of {n}","es":"Texto {n} de {n}","it":"Testo {n} di {n}","fr":"Texte {n} sur {n}","de":"Text {n} von {n}"},
"Resumo":{"en":"Summary","es":"Resumen","it":"Riepilogo","fr":"Résumé","de":"Zusammenfassung"},
"Leia a frase e toque em Testar. Tocar num trecho mostra a tradução, mas ele sai do teste.":{"en":"Read the sentence and tap Test. Tapping a part shows its translation, but it leaves the test.","es":"Lee la frase y toca Probar. Tocar un fragmento muestra la traducción, pero sale de la prueba.","it":"Leggi la frase e tocca Verifica. Toccare un pezzo mostra la traduzione, ma lo esclude dal test.","fr":"Lisez la phrase et touchez Tester. Toucher un passage affiche sa traduction, mais il sort du test.","de":"Lies den Satz und tippe auf Testen. Tippst du auf einen Teil, siehst du die Übersetzung, aber er fällt aus dem Test."},
"Testar":{"en":"Test","es":"Probar","it":"Verifica","fr":"Tester","de":"Testen"},
"Não sei, mostrar tradução":{"en":"I don't know, show translation","es":"No sé, mostrar traducción","it":"Non lo so, mostra traduzione","fr":"Je ne sais pas, voir la traduction","de":"Weiß nicht, Übersetzung zeigen"},
"Mostrar tradução":{"en":"Show translation","es":"Mostrar traducción","it":"Mostra traduzione","fr":"Voir la traduction","de":"Übersetzung zeigen"},
"Ouvir":{"en":"Listen","es":"Escuchar","it":"Ascolta","fr":"Écouter","de":"Anhören"},
"Teste {n} de {n}":{"en":"Test {n} of {n}","es":"Prueba {n} de {n}","it":"Test {n} di {n}","fr":"Test {n} sur {n}","de":"Test {n} von {n}"},
"O que significa":{"en":"Meaning of","es":"Qué significa","it":"Che cosa significa","fr":"Que signifie","de":"Was bedeutet"},
"Não sei":{"en":"I don't know","es":"No sé","it":"Non lo so","fr":"Je ne sais pas","de":"Weiß nicht"},
"Escolha o significado do trecho destacado. Errar zera o combo.":{"en":"Choose the meaning of the highlighted part. A mistake resets the combo.","es":"Elige el significado del fragmento destacado. Fallar reinicia el combo.","it":"Scegli il significato del pezzo evidenziato. Sbagliare azzera la combo.","fr":"Choisissez le sens du passage surligné. Une erreur remet le combo à zéro.","de":"Wähle die Bedeutung des markierten Teils. Ein Fehler setzt den Combo zurück."},
"Combo zerado. Na próxima ele recomeça.":{"en":"Combo reset. It starts again on the next one.","es":"Combo reiniciado. Vuelve a empezar en la siguiente.","it":"Combo azzerata. Ricomincia dalla prossima.","fr":"Combo remis à zéro. Il repart à la suivante.","de":"Combo zurückgesetzt. Beim nächsten geht es neu los."},
"{n}/{n} certas. Os trechos que você errou voltam logo.":{"en":"{n}/{n} correct. The parts you missed will come back soon.","es":"{n}/{n} aciertos. Los fragmentos que fallaste volverán pronto.","it":"{n}/{n} giuste. I pezzi sbagliati torneranno presto.","fr":"{n}/{n} réussies. Les passages ratés reviendront bientôt.","de":"{n}/{n} richtig. Die falschen Teile kommen bald wieder."},
"Acertou tudo! +{n} XP de bônus":{"en":"All correct! +{n} bonus XP","es":"¡Todo bien! +{n} XP de bonus","it":"Tutto giusto! +{n} XP bonus","fr":"Tout juste ! +{n} XP bonus","de":"Alles richtig! +{n} Bonus-XP"},
"Próxima frase":{"en":"Next sentence","es":"Siguiente frase","it":"Frase successiva","fr":"Phrase suivante","de":"Nächster Satz"},
"Próximo texto":{"en":"Next text","es":"Siguiente texto","it":"Testo successivo","fr":"Texte suivant","de":"Nächster Text"},
"Concluir":{"en":"Finish","es":"Terminar","it":"Concludi","fr":"Terminer","de":"Abschließen"},
"Imparável!":{"en":"Unstoppable!","es":"¡Imparable!","it":"Inarrestabile!","fr":"Inarrêtable !","de":"Unaufhaltsam!"},
"Em chamas!":{"en":"On fire!","es":"¡En llamas!","it":"In fiamme!","fr":"En feu !","de":"In Flammen!"},
"{n} seguidas sem tradução · XP x{n}":{"en":"{n} in a row without translation · XP x{n}","es":"{n} seguidas sin traducción · XP x{n}","it":"{n} di fila senza traduzione · XP x{n}","fr":"{n} d'affilée sans traduction · XP x{n}","de":"{n} in Folge ohne Übersetzung · XP x{n}"},
"Combo de {n}, próximo vale x{n}":{"en":"Combo of {n}, next one is worth x{n}","es":"Combo de {n}, la próxima vale x{n}","it":"Combo di {n}, la prossima vale x{n}","fr":"Combo de {n}, la suivante vaut x{n}","de":"Combo von {n}, der nächste zählt x{n}"},
"Nível {n}!":{"en":"Level {n}!","es":"¡Nivel {n}!","it":"Livello {n}!","fr":"Niveau {n} !","de":"Niveau {n}!"},
"Você subiu de nível em {s}":{"en":"You leveled up in {s}","es":"Subiste de nivel en {s}","it":"Sei salito di livello in {s}","fr":"Vous avez monté de niveau en {s}","de":"Du bist auf {s} aufgestiegen"},
"Perfeito, sem abrir nenhuma tradução!":{"en":"Perfect, without opening a single translation!","es":"¡Perfecto, sin abrir ninguna traducción!","it":"Perfetto, senza aprire nessuna traduzione!","fr":"Parfait, sans ouvrir aucune traduction !","de":"Perfekt, ohne eine einzige Übersetzung!"},
"Muito bem! Quase tudo pelo contexto.":{"en":"Well done! Almost all from context.","es":"¡Muy bien! Casi todo por el contexto.","it":"Molto bene! Quasi tutto dal contesto.","fr":"Très bien ! Presque tout grâce au contexte.","de":"Sehr gut! Fast alles aus dem Kontext."},
"Partida concluída. As palavras difíceis voltam logo.":{"en":"Game complete. The hard words will come back soon.","es":"Partida terminada. Las palabras difíciles volverán pronto.","it":"Partita conclusa. Le parole difficili torneranno presto.","fr":"Partie terminée. Les mots difficiles reviendront bientôt.","de":"Spiel beendet. Die schweren Wörter kommen bald wieder."},
"{n} de {n} estrelas":{"en":"{n} of {n} stars","es":"{n} de {n} estrellas","it":"{n} stelle su {n}","fr":"{n} étoiles sur {n}","de":"{n} von {n} Sternen"},
"Subiu para o nível {n}!":{"en":"You reached level {n}!","es":"¡Subiste al nivel {n}!","it":"Sei salito al livello {n}!","fr":"Vous passez au niveau {n} !","de":"Niveau {n} erreicht!"},
"frases lidas":{"en":"sentences read","es":"frases leídas","it":"frasi lette","fr":"phrases lues","de":"gelesene Sätze"},
"textos lidos":{"en":"texts read","es":"textos leídos","it":"testi letti","fr":"textes lus","de":"gelesene Texte"},
"maior combo":{"en":"best combo","es":"mejor combo","it":"combo migliore","fr":"meilleur combo","de":"bester Combo"},
"em {s}":{"en":"in {s}","es":"en {s}","it":"in {s}","fr":"en {s}","de":"auf {s}"},
"trechos tocados":{"en":"parts tapped","es":"fragmentos tocados","it":"pezzi toccati","fr":"passages touchés","de":"angetippte Teile"},
"Vão voltar logo, em outros textos":{"en":"Coming back soon, in other texts","es":"Volverán pronto, en otros textos","it":"Torneranno presto, in altri testi","fr":"Reviendront bientôt, dans d'autres textes","de":"Kommen bald wieder, in anderen Texten"},
"Proporção da próxima partida":{"en":"Mix for the next game","es":"Proporción de la próxima partida","it":"Proporzione della prossima partita","fr":"Proportion de la prochaine partie","de":"Mischung fürs nächste Spiel"},
"Jogar mais {n} frases":{"en":"Play {n} more sentences","es":"Jugar {n} frases más","it":"Gioca altre {n} frasi","fr":"Jouer {n} phrases de plus","de":"{n} weitere Sätze spielen"},
"Jogar mais {n} textos":{"en":"Play {n} more texts","es":"Jugar {n} textos más","it":"Gioca altri {n} testi","fr":"Jouer {n} textes de plus","de":"{n} weitere Texte spielen"},
"Jogar frases curtas":{"en":"Play short sentences","es":"Jugar frases cortas","it":"Gioca frasi brevi","fr":"Jouer des phrases courtes","de":"Kurze Sätze spielen"},
"Jogar parágrafos":{"en":"Play paragraphs","es":"Jugar párrafos","it":"Gioca paragrafi","fr":"Jouer des paragraphes","de":"Absätze spielen"},
"Tradução temporariamente indisponível":{"en":"Translation temporarily unavailable","es":"Traducción no disponible temporalmente","it":"Traduzione temporaneamente non disponibile","fr":"Traduction temporairement indisponible","de":"Übersetzung vorübergehend nicht verfügbar"},
"O serviço gratuito não respondeu. Não exibiremos uma mistura com o idioma errado.":{"en":"The free service didn't respond. We won't show a mix with the wrong language.","es":"El servicio gratuito no respondió. No mostraremos una mezcla con el idioma equivocado.","it":"Il servizio gratuito non ha risposto. Non mostreremo un mix con la lingua sbagliata.","fr":"Le service gratuit n'a pas répondu. Nous n'afficherons pas de mélange avec la mauvaise langue.","de":"Der kostenlose Dienst hat nicht geantwortet. Wir zeigen keine Mischung mit der falschen Sprache."},
"Tentar novamente":{"en":"Try again","es":"Intentar de nuevo","it":"Riprova","fr":"Réessayer","de":"Erneut versuchen"},
"Traduzindo esta atividade para {s}…":{"en":"Translating this activity into {s}…","es":"Traduciendo esta actividad al {s}…","it":"Traduzione di questa attività in {s}…","fr":"Traduction de cette activité en {s}…","de":"Diese Übung wird ins {s} übersetzt…"},
"Primeira utilização do par de idiomas requer internet.":{"en":"The first use of this language pair needs internet.","es":"El primer uso de este par de idiomas requiere internet.","it":"Il primo uso di questa coppia di lingue richiede internet.","fr":"La première utilisation de cette paire de langues nécessite internet.","de":"Die erste Nutzung dieses Sprachpaars braucht Internet."},
"Histórias interativas":{"en":"Interactive stories","es":"Historias interactivas","it":"Storie interattive","fr":"Histoires interactives","de":"Interaktive Geschichten"},
"Você decide o que acontece. O texto mistura português e {s} na proporção escolhida; toque num trecho em {s} para ver a tradução sem sair da história.":{"en":"You decide what happens. The text mixes your language and {s} in the chosen ratio; tap a part in {s} to see its translation without leaving the story.","es":"Tú decides lo que pasa. El texto mezcla tu idioma y {s} en la proporción elegida; toca un fragmento en {s} para ver la traducción sin salir de la historia.","it":"Decidi tu cosa succede. Il testo mescola la tua lingua e {s} nella proporzione scelta; tocca un pezzo in {s} per vedere la traduzione senza uscire dalla storia.","fr":"Vous décidez de la suite. Le texte mélange votre langue et {s} selon la proportion choisie ; touchez un passage en {s} pour voir sa traduction sans quitter l'histoire.","de":"Du entscheidest, was passiert. Der Text mischt deine Sprache und {s} im gewählten Verhältnis; tippe auf einen Teil auf {s}, um die Übersetzung zu sehen, ohne die Geschichte zu verlassen."},
"Gêneros":{"en":"Genres","es":"Géneros","it":"Generi","fr":"Genres","de":"Genres"},
"Todas":{"en":"All","es":"Todas","it":"Tutte","fr":"Toutes","de":"Alle"},
"Viagem":{"en":"Travel","es":"Viaje","it":"Viaggio","fr":"Voyage","de":"Reise"},
"Cotidiano":{"en":"Everyday life","es":"Día a día","it":"Vita quotidiana","fr":"Quotidien","de":"Alltag"},
"Mistério":{"en":"Mystery","es":"Misterio","it":"Mistero","fr":"Mystère","de":"Rätsel"},
"Suspense":{"en":"Suspense","es":"Suspense","it":"Suspense","fr":"Suspense","de":"Spannung"},
"Trabalho":{"en":"Work","es":"Trabajo","it":"Lavoro","fr":"Travail","de":"Arbeit"},
"Relações":{"en":"Relationships","es":"Relaciones","it":"Relazioni","fr":"Relations","de":"Beziehungen"},
"Ficção científica":{"en":"Science fiction","es":"Ciencia ficción","it":"Fantascienza","fr":"Science-fiction","de":"Science-Fiction"},
"Sobrevivência":{"en":"Survival","es":"Supervivencia","it":"Sopravvivenza","fr":"Survie","de":"Überleben"},
"{s} · {s} · {n} cenas · {n} finais":{"en":"{s} · {s} · {n} scenes · {n} endings","es":"{s} · {s} · {n} escenas · {n} finales","it":"{s} · {s} · {n} scene · {n} finali","fr":"{s} · {s} · {n} scènes · {n} fins","de":"{s} · {s} · {n} Szenen · {n} Enden"},
"Nova":{"en":"New","es":"Nueva","it":"Nuova","fr":"Nouvelle","de":"Neu"},
"Em andamento · cena {n}":{"en":"In progress · scene {n}","es":"En curso · escena {n}","it":"In corso · scena {n}","fr":"En cours · scène {n}","de":"Läuft · Szene {n}"},
"{n} de {n} finais descobertos":{"en":"{n} of {n} endings found","es":"{n} de {n} finales descubiertos","it":"{n} finali scoperti su {n}","fr":"{n} fins découvertes sur {n}","de":"{n} von {n} Enden entdeckt"},
"Começar":{"en":"Start","es":"Empezar","it":"Inizia","fr":"Commencer","de":"Starten"},
"Jogar de novo":{"en":"Play again","es":"Jugar de nuevo","it":"Gioca di nuovo","fr":"Rejouer","de":"Nochmal spielen"},
"Continuar de onde parou":{"en":"Continue where you left off","es":"Continuar donde lo dejaste","it":"Riprendi da dove eri rimasto","fr":"Reprendre où vous en étiez","de":"Dort weitermachen, wo du warst"},
"{x} · cena {n}":{"en":"{x} · scene {n}","es":"{x} · escena {n}","it":"{x} · scena {n}","fr":"{x} · scène {n}","de":"{x} · Szene {n}"},
"Carregando histórias…":{"en":"Loading stories…","es":"Cargando historias…","it":"Caricamento storie…","fr":"Chargement des histoires…","de":"Geschichten werden geladen…"},
"Não foi possível carregar as histórias. Verifique a conexão.":{"en":"Couldn't load the stories. Check your connection.","es":"No se pudieron cargar las historias. Revisa la conexión.","it":"Impossibile caricare le storie. Controlla la connessione.","fr":"Impossible de charger les histoires. Vérifiez la connexion.","de":"Die Geschichten konnten nicht geladen werden. Prüfe die Verbindung."},
"Tentar de novo":{"en":"Try again","es":"Intentar de nuevo","it":"Riprova","fr":"Réessayer","de":"Nochmal versuchen"},
"Ainda não há histórias disponíveis neste idioma. Escolha outro no menu Idiomas.":{"en":"No stories in this language yet. Choose another one in the Languages menu.","es":"Aún no hay historias en este idioma. Elige otro en el menú Idiomas.","it":"Non ci sono ancora storie in questa lingua. Scegline un'altra nel menu Lingue.","fr":"Pas encore d'histoires dans cette langue. Choisissez-en une autre dans le menu Langues.","de":"Noch keine Geschichten in dieser Sprache. Wähle eine andere im Menü Sprachen."},
"História interativa":{"en":"Interactive story","es":"Historia interactiva","it":"Storia interattiva","fr":"Histoire interactive","de":"Interaktive Geschichte"},
"Voltar à biblioteca (o progresso fica salvo)":{"en":"Back to library (progress is saved)","es":"Volver a la biblioteca (el progreso se guarda)","it":"Torna alla biblioteca (i progressi restano salvati)","fr":"Retour à la bibliothèque (progression sauvegardée)","de":"Zurück zur Bibliothek (Fortschritt bleibt gespeichert)"},
"Cena {n} · {x}":{"en":"Scene {n} · {x}","es":"Escena {n} · {x}","it":"Scena {n} · {x}","fr":"Scène {n} · {x}","de":"Szene {n} · {x}"},
"Final · {x}":{"en":"Ending · {x}","es":"Final · {x}","it":"Finale · {x}","fr":"Fin · {x}","de":"Ende · {x}"},
"Você escolheu: {x}":{"en":"You chose: {x}","es":"Elegiste: {x}","it":"Hai scelto: {x}","fr":"Vous avez choisi : {x}","de":"Du hast gewählt: {x}"},
"Ver tradução do parágrafo":{"en":"See paragraph translation","es":"Ver traducción del párrafo","it":"Vedi traduzione del paragrafo","fr":"Voir la traduction du paragraphe","de":"Absatz übersetzen"},
"Ouvir a cena":{"en":"Listen to the scene","es":"Escuchar la escena","it":"Ascolta la scena","fr":"Écouter la scène","de":"Szene anhören"},
"O que você decide fazer?":{"en":"What do you decide to do?","es":"¿Qué decides hacer?","it":"Che cosa decidi di fare?","fr":"Que décidez-vous de faire ?","de":"Was beschließt du zu tun?"},
"Final bom":{"en":"Good ending","es":"Final feliz","it":"Finale felice","fr":"Bonne fin","de":"Gutes Ende"},
"Final em aberto":{"en":"Open ending","es":"Final abierto","it":"Finale aperto","fr":"Fin ouverte","de":"Offenes Ende"},
"Final difícil":{"en":"Tough ending","es":"Final difícil","it":"Finale difficile","fr":"Fin difficile","de":"Schweres Ende"},
"Final":{"en":"Ending","es":"Final","it":"Finale","fr":"Fin","de":"Ende"},
"Você descobriu {n} de {n} finais desta história. Volte e tome outras decisões para ver o resto.":{"en":"You found {n} of {n} endings in this story. Go back and make other choices to see the rest.","es":"Descubriste {n} de {n} finales de esta historia. Vuelve y toma otras decisiones para ver el resto.","it":"Hai scoperto {n} finali su {n} di questa storia. Torna indietro e fai altre scelte per vedere il resto.","fr":"Vous avez découvert {n} fins sur {n} de cette histoire. Revenez et faites d'autres choix pour voir la suite.","de":"Du hast {n} von {n} Enden dieser Geschichte entdeckt. Triff andere Entscheidungen, um den Rest zu sehen."},
"Você descobriu {n} de {n} finais desta história. Você viu todos os finais.":{"en":"You found {n} of {n} endings in this story. You've seen every ending.","es":"Descubriste {n} de {n} finales de esta historia. Viste todos los finales.","it":"Hai scoperto {n} finali su {n} di questa storia. Li hai visti tutti.","fr":"Vous avez découvert {n} fins sur {n} de cette histoire. Vous les avez toutes vues.","de":"Du hast {n} von {n} Enden dieser Geschichte entdeckt. Du hast alle gesehen."},
"Recomeçar e escolher diferente":{"en":"Restart and choose differently","es":"Reiniciar y elegir distinto","it":"Ricomincia e scegli diversamente","fr":"Recommencer et choisir autrement","de":"Neu starten und anders wählen"},
"Voltar à biblioteca":{"en":"Back to library","es":"Volver a la biblioteca","it":"Torna alla biblioteca","fr":"Retour à la bibliothèque","de":"Zurück zur Bibliothek"},
"Tradução do trecho":{"en":"Translation of the part","es":"Traducción del fragmento","it":"Traduzione del pezzo","fr":"Traduction du passage","de":"Übersetzung des Teils"},
"Neste contexto. Palavras do trecho:":{"en":"In this context. Words in this part:","es":"En este contexto. Palabras del fragmento:","it":"In questo contesto. Parole del pezzo:","fr":"Dans ce contexte. Mots du passage :","de":"In diesem Kontext. Wörter im Teil:"},
"Sem palavras da lista neste trecho.":{"en":"No list words in this part.","es":"No hay palabras de la lista en este fragmento.","it":"Nessuna parola dell'elenco in questo pezzo.","fr":"Aucun mot de la liste dans ce passage.","de":"Keine Listenwörter in diesem Teil."},
"+ Cartões":{"en":"+ Cards","es":"+ Tarjetas","it":"+ Schede","fr":"+ Cartes","de":"+ Karten"},
"Nos cartões":{"en":"In cards","es":"En tarjetas","it":"Nelle schede","fr":"Dans les cartes","de":"In den Karten"},
"Preparando cena em {s}…":{"en":"Preparing scene in {s}…","es":"Preparando escena en {s}…","it":"Preparazione della scena in {s}…","fr":"Préparation de la scène en {s}…","de":"Szene wird auf {s} vorbereitet…"},
"Tradução indisponível":{"en":"Translation unavailable","es":"Traducción no disponible","it":"Traduzione non disponibile","fr":"Traduction indisponible","de":"Übersetzung nicht verfügbar"},
"O serviço gratuito não conseguiu traduzir esta cena. Tente novamente com internet.":{"en":"The free service couldn't translate this scene. Try again with internet.","es":"El servicio gratuito no pudo traducir esta escena. Inténtalo de nuevo con internet.","it":"Il servizio gratuito non è riuscito a tradurre questa scena. Riprova con internet.","fr":"Le service gratuit n'a pas pu traduire cette scène. Réessayez avec internet.","de":"Der kostenlose Dienst konnte diese Szene nicht übersetzen. Versuch es mit Internet erneut."},
"Tentar outra vez":{"en":"Try again","es":"Intentar otra vez","it":"Riprova","fr":"Réessayer","de":"Nochmal versuchen"},
"RESUMO DE APRENDIZAGEM":{"en":"LEARNING SUMMARY","es":"RESUMEN DE APRENDIZAJE","it":"RIEPILOGO DI APPRENDIMENTO","fr":"BILAN D'APPRENTISSAGE","de":"LERNÜBERSICHT"},
"Seu progresso, semana a semana":{"en":"Your progress, week by week","es":"Tu progreso, semana a semana","it":"I tuoi progressi, settimana per settimana","fr":"Vos progrès, semaine après semaine","de":"Dein Fortschritt, Woche für Woche"},
"Veja como sua prática evolui, em todos os idiomas.":{"en":"See how your practice grows, across all languages.","es":"Mira cómo evoluciona tu práctica, en todos los idiomas.","it":"Guarda come evolve la tua pratica, in tutte le lingue.","fr":"Voyez comment votre pratique évolue, dans toutes les langues.","de":"Sieh, wie sich dein Üben entwickelt, in allen Sprachen."},
"{n}/{n} – {n}/{n} · atual":{"en":"{n}/{n} – {n}/{n} · current","es":"{n}/{n} – {n}/{n} · actual","it":"{n}/{n} – {n}/{n} · attuale","fr":"{n}/{n} – {n}/{n} · en cours","de":"{n}/{n} – {n}/{n} · aktuell"},
"Semana anterior":{"en":"Previous week","es":"Semana anterior","it":"Settimana precedente","fr":"Semaine précédente","de":"Vorherige Woche"},
"Semana seguinte":{"en":"Next week","es":"Semana siguiente","it":"Settimana successiva","fr":"Semaine suivante","de":"Nächste Woche"},
"Indicadores da semana":{"en":"Week indicators","es":"Indicadores de la semana","it":"Indicatori della settimana","fr":"Indicateurs de la semaine","de":"Wochenkennzahlen"},
"Dias de estudo":{"en":"Study days","es":"Días de estudio","it":"Giorni di studio","fr":"Jours d'étude","de":"Lerntage"},
"Mesmo número de dias ativos da semana anterior":{"en":"Same number of active days as last week","es":"Mismo número de días activos que la semana anterior","it":"Stesso numero di giorni attivi della settimana precedente","fr":"Même nombre de jours actifs que la semaine précédente","de":"Gleich viele aktive Tage wie letzte Woche"},
"{n} dia a mais que na semana anterior":{"en":"{n} more day than last week","es":"{n} día más que la semana anterior","it":"{n} giorno in più della settimana precedente","fr":"{n} jour de plus que la semaine précédente","de":"{n} Tag mehr als letzte Woche"},
"{n} dias a mais que na semana anterior":{"en":"{n} more days than last week","es":"{n} días más que la semana anterior","it":"{n} giorni in più della settimana precedente","fr":"{n} jours de plus que la semaine précédente","de":"{n} Tage mehr als letzte Woche"},
"{n} dia a menos que na semana anterior":{"en":"{n} fewer day than last week","es":"{n} día menos que la semana anterior","it":"{n} giorno in meno della settimana precedente","fr":"{n} jour de moins que la semaine précédente","de":"{n} Tag weniger als letzte Woche"},
"{n} dias a menos que na semana anterior":{"en":"{n} fewer days than last week","es":"{n} días menos que la semana anterior","it":"{n} giorni in meno della settimana precedente","fr":"{n} jours de moins que la semaine précédente","de":"{n} Tage weniger als letzte Woche"},
"Cartas praticadas":{"en":"Cards practiced","es":"Tarjetas practicadas","it":"Carte esercitate","fr":"Cartes travaillées","de":"Geübte Karten"},
"{n} novas · {n} revisões":{"en":"{n} new · {n} reviews","es":"{n} nuevas · {n} repasos","it":"{n} nuove · {n} ripassi","fr":"{n} nouvelles · {n} révisions","de":"{n} neu · {n} Wiederholungen"},
"Frases e textos":{"en":"Sentences and texts","es":"Frases y textos","it":"Frasi e testi","fr":"Phrases et textes","de":"Sätze und Texte"},
"{n} frases · {n} textos":{"en":"{n} sentences · {n} texts","es":"{n} frases · {n} textos","it":"{n} frasi · {n} testi","fr":"{n} phrases · {n} textes","de":"{n} Sätze · {n} Texte"},
"Histórias finalizadas":{"en":"Stories finished","es":"Historias terminadas","it":"Storie finite","fr":"Histoires terminées","de":"Beendete Geschichten"},
"{n} cenas lidas":{"en":"{n} scenes read","es":"{n} escenas leídas","it":"{n} scene lette","fr":"{n} scènes lues","de":"{n} Szenen gelesen"},
"Acertos no quiz":{"en":"Quiz accuracy","es":"Aciertos en la prueba","it":"Risposte giuste al quiz","fr":"Réussite au quiz","de":"Quiz-Treffer"},
"{n} de {n} questões":{"en":"{n} of {n} questions","es":"{n} de {n} preguntas","it":"{n} domande su {n}","fr":"{n} questions sur {n}","de":"{n} von {n} Fragen"},
"Nenhuma questão registrada":{"en":"No questions recorded","es":"Ninguna pregunta registrada","it":"Nessuna domanda registrata","fr":"Aucune question enregistrée","de":"Keine Fragen erfasst"},
"Atividades totais":{"en":"Total activities","es":"Actividades totales","it":"Attività totali","fr":"Activités totales","de":"Übungen gesamt"},
"Inclui seu histórico da racha":{"en":"Includes your streak history","es":"Incluye tu historial de racha","it":"Include lo storico della serie","fr":"Inclut l'historique de votre série","de":"Inklusive deiner Serien-Historie"},
"Atividade diária":{"en":"Daily activity","es":"Actividad diaria","it":"Attività giornaliera","fr":"Activité quotidienne","de":"Tägliche Aktivität"},
"Toque em um dia para ver os detalhes.":{"en":"Tap a day to see details.","es":"Toca un día para ver los detalles.","it":"Tocca un giorno per vedere i dettagli.","fr":"Touchez un jour pour voir le détail.","de":"Tippe auf einen Tag für Details."},
"{n} dias ativos":{"en":"{n} active days","es":"{n} días activos","it":"{n} giorni attivi","fr":"{n} jours actifs","de":"{n} aktive Tage"},
"Atividades realizadas nos sete dias da semana":{"en":"Activities over the seven days of the week","es":"Actividades en los siete días de la semana","it":"Attività nei sette giorni della settimana","fr":"Activités sur les sept jours de la semaine","de":"Übungen an den sieben Wochentagen"},
"Seg":{"en":"Mon","es":"Lun","it":"Lun","fr":"Lun","de":"Mo"},
"Ter":{"en":"Tue","es":"Mar","it":"Mar","fr":"Mar","de":"Di"},
"Qua":{"en":"Wed","es":"Mié","it":"Mer","fr":"Mer","de":"Mi"},
"Qui":{"en":"Thu","es":"Jue","it":"Gio","fr":"Jeu","de":"Do"},
"Sex":{"en":"Fri","es":"Vie","it":"Ven","fr":"Ven","de":"Fr"},
"Sáb":{"en":"Sat","es":"Sáb","it":"Sab","fr":"Sam","de":"Sa"},
"Dom":{"en":"Sun","es":"Dom","it":"Dom","fr":"Dim","de":"So"},
"{s}, {n}/{n}: {n} atividades":{"en":"{s}, {n}/{n}: {n} activities","es":"{s}, {n}/{n}: {n} actividades","it":"{s}, {n}/{n}: {n} attività","fr":"{s}, {n}/{n} : {n} activités","de":"{s}, {n}/{n}: {n} Übungen"},
"{n} atividades · {n} cartas · {n} frases/textos · {n} histórias finalizadas · {n} respostas no quiz":{"en":"{n} activities · {n} cards · {n} sentences/texts · {n} stories finished · {n} quiz answers","es":"{n} actividades · {n} tarjetas · {n} frases/textos · {n} historias terminadas · {n} respuestas en la prueba","it":"{n} attività · {n} carte · {n} frasi/testi · {n} storie finite · {n} risposte al quiz","fr":"{n} activités · {n} cartes · {n} phrases/textes · {n} histoires terminées · {n} réponses au quiz","de":"{n} Übungen · {n} Karten · {n} Sätze/Texte · {n} beendete Geschichten · {n} Quiz-Antworten"},
"O que você praticou":{"en":"What you practiced","es":"Lo que practicaste","it":"Cosa hai praticato","fr":"Ce que vous avez travaillé","de":"Was du geübt hast"},
"Frases e parágrafos":{"en":"Sentences and paragraphs","es":"Frases y párrafos","it":"Frasi e paragrafi","fr":"Phrases et paragraphes","de":"Sätze und Absätze"},
"Cenas de histórias":{"en":"Story scenes","es":"Escenas de historias","it":"Scene di storie","fr":"Scènes d'histoires","de":"Geschichtsszenen"},
"Histórias concluídas":{"en":"Stories completed","es":"Historias completadas","it":"Storie completate","fr":"Histoires terminées","de":"Abgeschlossene Geschichten"},
"Questões de quiz":{"en":"Quiz questions","es":"Preguntas de la prueba","it":"Domande del quiz","fr":"Questions de quiz","de":"Quizfragen"},
"Há atividades registradas nesta semana, mas os tipos de exercício anteriores à atualização não podem ser identificados. Os dias de estudo foram recuperados do histórico da racha.":{"en":"There are activities recorded this week, but exercise types from before the update can't be identified. Study days were recovered from your streak history.","es":"Hay actividades registradas esta semana, pero los tipos de ejercicio anteriores a la actualización no se pueden identificar. Los días de estudio se recuperaron del historial de racha.","it":"Ci sono attività registrate questa settimana, ma i tipi di esercizio precedenti all'aggiornamento non sono identificabili. I giorni di studio sono stati recuperati dallo storico della serie.","fr":"Des activités sont enregistrées cette semaine, mais les types d'exercice antérieurs à la mise à jour ne peuvent pas être identifiés. Les jours d'étude proviennent de l'historique de votre série.","de":"Diese Woche gibt es Übungen, aber Übungsarten vor dem Update lassen sich nicht erkennen. Die Lerntage stammen aus deiner Serien-Historie."},
"Os detalhes por tipo de exercício começam a ser registrados nesta versão. O histórico anterior aparece como atividade diária, sem valores inventados para cada modalidade. Os dados ficam neste navegador e ainda não são sincronizados entre dispositivos.":{"en":"Details by exercise type are recorded from this version on. Earlier history appears as daily activity, with no made-up values per mode. Data stays in this browser and isn't synced across devices yet.","es":"Los detalles por tipo de ejercicio se registran a partir de esta versión. El historial anterior aparece como actividad diaria, sin valores inventados por modalidad. Los datos quedan en este navegador y aún no se sincronizan entre dispositivos.","it":"I dettagli per tipo di esercizio vengono registrati da questa versione. Lo storico precedente appare come attività giornaliera, senza valori inventati per ogni modalità. I dati restano in questo browser e non sono ancora sincronizzati tra dispositivi.","fr":"Le détail par type d'exercice est enregistré à partir de cette version. L'historique antérieur apparaît comme activité quotidienne, sans valeurs inventées par mode. Les données restent dans ce navigateur et ne sont pas encore synchronisées entre appareils.","de":"Details pro Übungsart werden ab dieser Version erfasst. Der frühere Verlauf erscheint als tägliche Aktivität, ohne erfundene Werte pro Modus. Die Daten bleiben in diesem Browser und werden noch nicht zwischen Geräten synchronisiert."},
"DESAFIO ENTRE AMIGOS":{"en":"FRIENDS CHALLENGE","es":"DESAFÍO ENTRE AMIGOS","it":"SFIDA TRA AMICI","fr":"DÉFI ENTRE AMIS","de":"FREUNDES-DUELL"},
"Quem estudou mais?":{"en":"Who studied the most?","es":"¿Quién estudió más?","it":"Chi ha studiato di più?","fr":"Qui a le plus étudié ?","de":"Wer hat am meisten gelernt?"},
"Dispute XP com amigos reais e competidores virtuais, sempre identificados como bots.":{"en":"Compete for XP with real friends and virtual rivals, always labeled as bots.","es":"Compite por XP con amigos reales y rivales virtuales, siempre identificados como bots.","it":"Sfida amici reali e rivali virtuali a colpi di XP, sempre indicati come bot.","fr":"Affrontez en XP de vrais amis et des rivaux virtuels, toujours signalés comme bots.","de":"Sammle XP gegen echte Freunde und virtuelle Gegner, die immer als Bots markiert sind."},
"seus pontos nesta semana":{"en":"your points this week","es":"tus puntos esta semana","it":"i tuoi punti questa settimana","fr":"vos points cette semaine","de":"deine Punkte diese Woche"},
"{n} XP acumulados · Nível {n}":{"en":"{n} XP total · Level {n}","es":"{n} XP acumulados · Nivel {n}","it":"{n} XP totali · Livello {n}","fr":"{n} XP cumulés · Niveau {n}","de":"{n} XP gesamt · Niveau {n}"},
"Esta semana":{"en":"This week","es":"Esta semana","it":"Questa settimana","fr":"Cette semaine","de":"Diese Woche"},
"XP total":{"en":"Total XP","es":"XP total","it":"XP totali","fr":"XP total","de":"XP gesamt"},
"🤖 {n} bots de treino · pontuações simuladas conforme sessões ao longo do dia":{"en":"🤖 {n} practice bots · scores simulated from sessions throughout the day","es":"🤖 {n} bots de práctica · puntuaciones simuladas según sesiones a lo largo del día","it":"🤖 {n} bot di allenamento · punteggi simulati in base a sessioni durante il giorno","fr":"🤖 {n} bots d'entraînement · scores simulés selon des sessions au fil de la journée","de":"🤖 {n} Trainings-Bots · Punkte simuliert nach Sitzungen über den Tag"},
"Ocultar bots":{"en":"Hide bots","es":"Ocultar bots","it":"Nascondi bot","fr":"Masquer les bots","de":"Bots ausblenden"},
"Mostrar bots":{"en":"Show bots","es":"Mostrar bots","it":"Mostra bot","fr":"Afficher les bots","de":"Bots anzeigen"},
"Classificação":{"en":"Ranking","es":"Clasificación","it":"Classifica","fr":"Classement","de":"Rangliste"},
"{n} participantes":{"en":"{n} participants","es":"{n} participantes","it":"{n} partecipanti","fr":"{n} participants","de":"{n} Teilnehmende"},
"{n} participante":{"en":"{n} participant","es":"{n} participante","it":"{n} partecipante","fr":"{n} participant","de":"{n} Teilnehmer"},
"+{n} XP hoje":{"en":"+{n} XP today","es":"+{n} XP hoy","it":"+{n} XP oggi","fr":"+{n} XP aujourd'hui","de":"+{n} XP heute"},
"Sem atividade hoje":{"en":"No activity today","es":"Sin actividad hoy","it":"Nessuna attività oggi","fr":"Aucune activité aujourd'hui","de":"Heute keine Aktivität"},
"Seu progresso atual":{"en":"Your current progress","es":"Tu progreso actual","it":"I tuoi progressi attuali","fr":"Votre progression actuelle","de":"Dein aktueller Fortschritt"},
"Compartilhado hoje":{"en":"Shared today","es":"Compartido hoy","it":"Condiviso oggi","fr":"Partagé aujourd'hui","de":"Heute geteilt"},
"Enviado em {x}":{"en":"Sent on {x}","es":"Enviado el {x}","it":"Inviato il {x}","fr":"Envoyé le {x}","de":"Gesendet am {x}"},
"Você (você)":{"en":"You","es":"Tú","it":"Tu","fr":"Vous","de":"Du"},
"{x} (você)":{"en":"{x} (you)","es":"{x} (tú)","it":"{x} (tu)","fr":"{x} (vous)","de":"{x} (du)"},
"Você":{"en":"You","es":"Tú","it":"Tu","fr":"Vous","de":"Du"},
"Remover {x}":{"en":"Remove {x}","es":"Quitar a {x}","it":"Rimuovi {x}","fr":"Retirer {x}","de":"{x} entfernen"},
"Convidar amigo":{"en":"Invite a friend","es":"Invitar a un amigo","it":"Invita un amico","fr":"Inviter un ami","de":"Freund einladen"},
"Compartilhe seu código; ele contém apenas seu nome, avatar e XP. Nada de senhas.":{"en":"Share your code; it only contains your name, avatar and XP. No passwords.","es":"Comparte tu código; solo contiene tu nombre, avatar y XP. Nada de contraseñas.","it":"Condividi il tuo codice; contiene solo nome, avatar e XP. Niente password.","fr":"Partagez votre code ; il contient seulement votre nom, votre avatar et vos XP. Aucun mot de passe.","de":"Teile deinen Code; er enthält nur Name, Avatar und XP. Keine Passwörter."},
"Copiar meu código":{"en":"Copy my code","es":"Copiar mi código","it":"Copia il mio codice","fr":"Copier mon code","de":"Meinen Code kopieren"},
"Copiar convite":{"en":"Copy invite","es":"Copiar invitación","it":"Copia invito","fr":"Copier l'invitation","de":"Einladung kopieren"},
"Meu código de convite":{"en":"My invite code","es":"Mi código de invitación","it":"Il mio codice di invito","fr":"Mon code d'invitation","de":"Mein Einladungscode"},
"Adicionar ou atualizar amigo":{"en":"Add or update a friend","es":"Añadir o actualizar amigo","it":"Aggiungi o aggiorna un amico","fr":"Ajouter ou mettre à jour un ami","de":"Freund hinzufügen oder aktualisieren"},
"Cole aqui o código ou link VOK-... que seu amigo enviou.":{"en":"Paste the VOK-... code or link your friend sent here.","es":"Pega aquí el código o enlace VOK-... que te envió tu amigo.","it":"Incolla qui il codice o il link VOK-... inviato dal tuo amico.","fr":"Collez ici le code ou le lien VOK-... envoyé par votre ami.","de":"Füge hier den VOK-... Code oder Link deines Freundes ein."},
"Código de seu amigo":{"en":"Your friend's code","es":"Código de tu amigo","it":"Codice del tuo amico","fr":"Code de votre ami","de":"Code deines Freundes"},
"Adicionar ao ranking":{"en":"Add to ranking","es":"Añadir al ranking","it":"Aggiungi alla classifica","fr":"Ajouter au classement","de":"Zur Rangliste hinzufügen"},
"Código inválido. Copie o código VOK- completo.":{"en":"Invalid code. Copy the full VOK- code.","es":"Código no válido. Copia el código VOK- completo.","it":"Codice non valido. Copia il codice VOK- completo.","fr":"Code invalide. Copiez le code VOK- complet.","de":"Ungültiger Code. Kopiere den vollständigen VOK-Code."},
"Este código é do seu próprio perfil.":{"en":"This code is from your own profile.","es":"Este código es de tu propio perfil.","it":"Questo codice è del tuo profilo.","fr":"Ce code est celui de votre propre profil.","de":"Dieser Code gehört zu deinem eigenen Profil."},
"Limite de 50 amigos atingido.":{"en":"Limit of 50 friends reached.","es":"Límite de 50 amigos alcanzado.","it":"Limite di 50 amici raggiunto.","fr":"Limite de 50 amis atteinte.","de":"Limit von 50 Freunden erreicht."},
"Não foi possível salvar neste navegador.":{"en":"Couldn't save in this browser.","es":"No se pudo guardar en este navegador.","it":"Impossibile salvare in questo browser.","fr":"Impossible d'enregistrer dans ce navigateur.","de":"Speichern in diesem Browser nicht möglich."},
"Progresso de {x} atualizado.":{"en":"{x}'s progress updated.","es":"Progreso de {x} actualizado.","it":"Progressi di {x} aggiornati.","fr":"Progression de {x} mise à jour.","de":"Fortschritt von {x} aktualisiert."},
"{x} entrou no seu ranking.":{"en":"{x} joined your ranking.","es":"{x} entró en tu ranking.","it":"{x} è entrato nella tua classifica.","fr":"{x} a rejoint votre classement.","de":"{x} ist jetzt in deiner Rangliste."},
"Copiado ✓":{"en":"Copied ✓","es":"Copiado ✓","it":"Copiato ✓","fr":"Copié ✓","de":"Kopiert ✓"},
"Se a cópia automática não funcionar, selecione o código abaixo.":{"en":"If automatic copy doesn't work, select the code below.","es":"Si la copia automática no funciona, selecciona el código de abajo.","it":"Se la copia automatica non funziona, seleziona il codice qui sotto.","fr":"Si la copie automatique ne marche pas, sélectionnez le code ci-dessous.","de":"Falls automatisches Kopieren nicht klappt, markiere den Code unten."},
"Bots: simulação local de hábitos de estudo, com dias de descanso e ganhos graduais ao longo do dia; não representam pessoas reais. Amigos reais: a pontuação só muda quando compartilham um novo código. O ranking fica neste aparelho.":{"en":"Bots: a local simulation of study habits, with rest days and gradual gains through the day; they are not real people. Real friends: scores only change when they share a new code. The ranking stays on this device.","es":"Bots: simulación local de hábitos de estudio, con días de descanso y avances graduales durante el día; no son personas reales. Amigos reales: la puntuación solo cambia cuando comparten un código nuevo. El ranking queda en este dispositivo.","it":"Bot: simulazione locale di abitudini di studio, con giorni di riposo e progressi graduali durante il giorno; non sono persone reali. Amici reali: il punteggio cambia solo quando condividono un nuovo codice. La classifica resta su questo dispositivo.","fr":"Bots : simulation locale d'habitudes d'étude, avec jours de repos et gains progressifs dans la journée ; ce ne sont pas de vraies personnes. Amis réels : le score ne change que lorsqu'ils partagent un nouveau code. Le classement reste sur cet appareil.","de":"Bots: lokale Simulation von Lerngewohnheiten, mit Ruhetagen und schrittweisen Zuwächsen über den Tag; keine echten Menschen. Echte Freunde: Punkte ändern sich nur, wenn sie einen neuen Code teilen. Die Rangliste bleibt auf diesem Gerät."},
"PERSONAGEM":{"en":"CHARACTER","es":"PERSONAJE","it":"PERSONAGGIO","fr":"PERSONNAGE","de":"FIGUR"},
"Seu gato, seu estilo.":{"en":"Your cat, your style.","es":"Tu gato, tu estilo.","it":"Il tuo gatto, il tuo stile.","fr":"Votre chat, votre style.","de":"Deine Katze, dein Stil."},
"Inspirado nos personagens do Forja, agora em versão compacta para o Vokabel.":{"en":"Inspired by the Forja characters, now in a compact version for Vokabel.","es":"Inspirado en los personajes de Forja, ahora en versión compacta para Vokabel.","it":"Ispirato ai personaggi di Forja, ora in versione compatta per Vokabel.","fr":"Inspiré des personnages de Forja, désormais en version compacte pour Vokabel.","de":"Inspiriert von den Forja-Figuren, jetzt kompakt für Vokabel."},
"Prévia do seu gato":{"en":"Preview of your cat","es":"Vista previa de tu gato","it":"Anteprima del tuo gatto","fr":"Aperçu de votre chat","de":"Vorschau deiner Katze"},
"Lenda das palavras":{"en":"Word legend","es":"Leyenda de las palabras","it":"Leggenda delle parole","fr":"Légende des mots","de":"Wortlegende"},
"Explorador experiente":{"en":"Seasoned explorer","es":"Explorador experto","it":"Esploratore esperto","fr":"Explorateur aguerri","de":"Erfahrener Entdecker"},
"Leitor dedicado":{"en":"Dedicated reader","es":"Lector dedicado","it":"Lettore appassionato","fr":"Lecteur assidu","de":"Fleißiger Leser"},
"Curioso das línguas":{"en":"Language enthusiast","es":"Curioso de los idiomas","it":"Curioso di lingue","fr":"Curieux des langues","de":"Sprachneugierig"},
"Primeiros passos":{"en":"First steps","es":"Primeros pasos","it":"Primi passi","fr":"Premiers pas","de":"Erste Schritte"},
"Nível {n} · {n} XP":{"en":"Level {n} · {n} XP","es":"Nivel {n} · {n} XP","it":"Livello {n} · {n} XP","fr":"Niveau {n} · {n} XP","de":"Niveau {n} · {n} XP"},
"Um personagem pequeno, sem ocupar a tela de estudo.":{"en":"A small character that doesn't take over the study screen.","es":"Un personaje pequeño, sin ocupar la pantalla de estudio.","it":"Un personaggio piccolo, senza occupare lo schermo di studio.","fr":"Un petit personnage qui n'encombre pas l'écran d'étude.","de":"Eine kleine Figur, die den Lernbildschirm nicht verdeckt."},
"Seu nome":{"en":"Your name","es":"Tu nombre","it":"Il tuo nome","fr":"Votre nom","de":"Dein Name"},
"Nome para o seu perfil":{"en":"Name for your profile","es":"Nombre para tu perfil","it":"Nome per il tuo profilo","fr":"Nom de votre profil","de":"Name für dein Profil"},
"Salvar":{"en":"Save","es":"Guardar","it":"Salva","fr":"Enregistrer","de":"Speichern"},
"Pelagem":{"en":"Fur","es":"Pelaje","it":"Pelo","fr":"Pelage","de":"Fell"},
"Cor dos olhos":{"en":"Eye color","es":"Color de ojos","it":"Colore degli occhi","fr":"Couleur des yeux","de":"Augenfarbe"},
"Acessórios":{"en":"Accessories","es":"Accesorios","it":"Accessori","fr":"Accessoires","de":"Accessoires"},
"Combine chapéus, óculos e acessórios de pescoço com o seu gato.":{"en":"Mix hats, glasses and neckwear for your cat.","es":"Combina sombreros, gafas y accesorios de cuello con tu gato.","it":"Abbina cappelli, occhiali e accessori da collo al tuo gatto.","fr":"Associez chapeaux, lunettes et accessoires de cou à votre chat.","de":"Kombiniere Hüte, Brillen und Halsschmuck für deine Katze."},
"Sortear visual":{"en":"Random look","es":"Look al azar","it":"Look a caso","fr":"Look au hasard","de":"Zufälliger Look"},
"As escolhas ficam salvas neste navegador e aparecem também no seu ranking de amigos.":{"en":"Your choices are saved in this browser and also show in your friends ranking.","es":"Tus elecciones se guardan en este navegador y también aparecen en tu ranking de amigos.","it":"Le scelte restano salvate in questo browser e compaiono anche nella classifica degli amici.","fr":"Vos choix sont enregistrés dans ce navigateur et apparaissent aussi dans votre classement d'amis.","de":"Deine Auswahl wird in diesem Browser gespeichert und erscheint auch in der Freunde-Rangliste."},
"Carregando opções de avatar…":{"en":"Loading avatar options…","es":"Cargando opciones de avatar…","it":"Caricamento opzioni avatar…","fr":"Chargement des options d'avatar…","de":"Avatar-Optionen werden geladen…"},
"Laranja":{"en":"Orange","es":"Naranja","it":"Arancione","fr":"Orange","de":"Orange"},
"Cinza":{"en":"Gray","es":"Gris","it":"Grigio","fr":"Gris","de":"Grau"},
"Preto":{"en":"Black","es":"Negro","it":"Nero","fr":"Noir","de":"Schwarz"},
"Branco":{"en":"White","es":"Blanco","it":"Bianco","fr":"Blanc","de":"Weiß"},
"Creme":{"en":"Cream","es":"Crema","it":"Crema","fr":"Crème","de":"Creme"},
"Marrom":{"en":"Brown","es":"Marrón","it":"Marrone","fr":"Marron","de":"Braun"},
"Liso":{"en":"Solid","es":"Liso","it":"Tinta unita","fr":"Uni","de":"Einfarbig"},
"Tigrado":{"en":"Tabby","es":"Atigrado","it":"Tigrato","fr":"Tigré","de":"Getigert"},
"Frajola":{"en":"Tuxedo","es":"Esmoquin","it":"Bianco e nero","fr":"Smoking","de":"Frack"},
"Siamês":{"en":"Siamese","es":"Siamés","it":"Siamese","fr":"Siamois","de":"Siam"},
"Malhado":{"en":"Spotted","es":"Manchado","it":"Pezzato","fr":"Tacheté","de":"Gefleckt"},
"Verde":{"en":"Green","es":"Verde","it":"Verde","fr":"Vert","de":"Grün"},
"Amarelo":{"en":"Yellow","es":"Amarillo","it":"Giallo","fr":"Jaune","de":"Gelb"},
"Cobre":{"en":"Copper","es":"Cobre","it":"Rame","fr":"Cuivre","de":"Kupfer"},
"Azul":{"en":"Blue","es":"Azul","it":"Azzurro","fr":"Bleu","de":"Blau"},
"Sem acessório":{"en":"No accessory","es":"Sin accesorio","it":"Nessun accessorio","fr":"Sans accessoire","de":"Kein Accessoire"},
"Boné":{"en":"Cap","es":"Gorra","it":"Cappellino","fr":"Casquette","de":"Kappe"},
"Gorro":{"en":"Beanie","es":"Gorro","it":"Berretto","fr":"Bonnet","de":"Mütze"},
"Faixa":{"en":"Headband","es":"Cinta","it":"Fascia","fr":"Bandeau","de":"Stirnband"},
"Bandana":{"en":"Bandana","es":"Bandana","it":"Bandana","fr":"Bandana","de":"Bandana"},
"Aba reta":{"en":"Snapback","es":"Gorra plana","it":"Snapback","fr":"Casquette plate","de":"Snapback"},
"Fone":{"en":"Headphones","es":"Auriculares","it":"Cuffie","fr":"Casque audio","de":"Kopfhörer"},
"Chapéu de caubói":{"en":"Cowboy hat","es":"Sombrero vaquero","it":"Cappello da cowboy","fr":"Chapeau de cowboy","de":"Cowboyhut"},
"Cartola":{"en":"Top hat","es":"Chistera","it":"Cilindro","fr":"Haut-de-forme","de":"Zylinder"},
"Elmo viking":{"en":"Viking helmet","es":"Casco vikingo","it":"Elmo vichingo","fr":"Casque viking","de":"Wikingerhelm"},
"Coroa":{"en":"Crown","es":"Corona","it":"Corona","fr":"Couronne","de":"Krone"},
"Auréola":{"en":"Halo","es":"Aureola","it":"Aureola","fr":"Auréole","de":"Heiligenschein"},
"Óculos redondo":{"en":"Round glasses","es":"Gafas redondas","it":"Occhiali tondi","fr":"Lunettes rondes","de":"Runde Brille"},
"Óculos escuro":{"en":"Sunglasses","es":"Gafas de sol","it":"Occhiali da sole","fr":"Lunettes de soleil","de":"Sonnenbrille"},
"Visor esportivo":{"en":"Sports visor","es":"Visera deportiva","it":"Visiera sportiva","fr":"Visière sport","de":"Sportvisier"},
"Cicatriz":{"en":"Scar","es":"Cicatriz","it":"Cicatrice","fr":"Cicatrice","de":"Narbe"},
"Tapa-olho":{"en":"Eye patch","es":"Parche","it":"Benda sull'occhio","fr":"Cache-œil","de":"Augenklappe"},
"Coleira com sino":{"en":"Bell collar","es":"Collar con cascabel","it":"Collare con campanella","fr":"Collier à clochette","de":"Halsband mit Glöckchen"},
"Gravata borboleta":{"en":"Bow tie","es":"Pajarita","it":"Papillon","fr":"Nœud papillon","de":"Fliege"},
"Cachecol":{"en":"Scarf","es":"Bufanda","it":"Sciarpa","fr":"Écharpe","de":"Schal"},
"Toalha no ombro":{"en":"Towel on shoulder","es":"Toalla al hombro","it":"Asciugamano in spalla","fr":"Serviette sur l'épaule","de":"Handtuch über der Schulter"},
"Corrente de ouro":{"en":"Gold chain","es":"Cadena de oro","it":"Catena d'oro","fr":"Chaîne en or","de":"Goldkette"},
"Medalha":{"en":"Medal","es":"Medalla","it":"Medaglia","fr":"Médaille","de":"Medaille"},
"Configurar voz":{"en":"Voice settings","es":"Configurar voz","it":"Impostazioni voce","fr":"Réglages de la voix","de":"Stimme einstellen"},
"Pronúncia e voz":{"en":"Pronunciation and voice","es":"Pronunciación y voz","it":"Pronuncia e voce","fr":"Prononciation et voix","de":"Aussprache und Stimme"},
"O app prioriza vozes online de melhor qualidade, quando seu navegador as disponibiliza. As vozes e a disponibilidade variam conforme o aparelho; no Microsoft Edge, experimente uma voz Natural.":{"en":"The app prefers higher-quality online voices when your browser offers them. Voices and availability vary by device; in Microsoft Edge, try a Natural voice.","es":"La app prioriza voces en línea de mejor calidad cuando tu navegador las ofrece. Las voces y su disponibilidad varían según el dispositivo; en Microsoft Edge, prueba una voz Natural.","it":"L'app privilegia voci online di qualità migliore, quando il browser le offre. Voci e disponibilità variano a seconda del dispositivo; in Microsoft Edge prova una voce Natural.","fr":"L'appli privilégie les voix en ligne de meilleure qualité quand votre navigateur les propose. Les voix varient selon l'appareil ; dans Microsoft Edge, essayez une voix Natural.","de":"Die App bevorzugt hochwertigere Online-Stimmen, wenn dein Browser sie anbietet. Stimmen und Verfügbarkeit hängen vom Gerät ab; in Microsoft Edge probier eine Natural-Stimme."},
"Voz de {s}":{"en":"{s} voice","es":"Voz de {s}","it":"Voce di {s}","fr":"Voix {s}","de":"Stimme für {s}"},
"Automática (melhor disponível)":{"en":"Automatic (best available)","es":"Automática (la mejor disponible)","it":"Automatica (la migliore disponibile)","fr":"Automatique (la meilleure disponible)","de":"Automatisch (beste verfügbare)"},
"▶ Ouvir exemplo":{"en":"▶ Play sample","es":"▶ Escuchar ejemplo","it":"▶ Ascolta esempio","fr":"▶ Écouter un exemple","de":"▶ Beispiel anhören"},
"{n} vozes disponíveis.":{"en":"{n} voices available.","es":"{n} voces disponibles.","it":"{n} voci disponibili.","fr":"{n} voix disponibles.","de":"{n} Stimmen verfügbar."},
"Nenhuma voz detectada neste navegador.":{"en":"No voices detected in this browser.","es":"No se detectó ninguna voz en este navegador.","it":"Nessuna voce rilevata in questo browser.","fr":"Aucune voix détectée dans ce navigateur.","de":"In diesem Browser wurde keine Stimme gefunden."}}/*/DICT*/;
var LG=["en","es","it","fr","de"];
var ATTRS=["placeholder","title","aria-label"];
/* conteúdo de estudo: palavras, ganchos, exemplos, frases, histórias, método */
var SKIP=["script","style","svg","code","#method",
 "#train .prompt","#train .word","#train .pron","#train .hook p","#train .ex","#train .cloze .s","#train .cloze .t",
 "#list .w","#list .m","#list .exs",".exercise-answers",
 ".hy-sent",".hy-trans",".hy-peek",".hy-gloss",".hy-opts",".hy-q b",".hy-theme",".hy-hard",".hy-fl",
 ".st-text",".st-trans",".st-ct",".st-desc",".st-item h3",".st-cont-t b",".st-route",".st-end h3",".st-nota",
 ".sg-pop-h",".sg-pop-pt",".sg-pop-w b",".sg-pop-w i",".sg-title"].join(",");
var SKIP_DIRECT="#list .hk";
var orig=new WeakMap();          // nó de texto -> {o: original pt, a: aplicado}
var origAttr=new WeakMap();      // elemento -> {attr: {o, a}}
var tpl=[], cache=new Map(), obs=null, busy=false, applied="pt";
var norm=function(s){return String(s).replace(/\s+/g," ").trim()};
function base(){try{return window.VBPAIR?VBPAIR.base():"pt"}catch(e){return "pt"}}
function rx(s){return s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}
function build(){
 try{
  Object.keys(DICT).forEach(function(k){
   var row=DICT[k];
   if(/\{[nsx]\}/.test(k)){
    var parts=k.split(/(\{[nsx]\})/),kinds=[],src="";
    parts.forEach(function(p){
     if(p==="{n}"){kinds.push("n");src+="([-+]?\\d[\\d.,]*)"}
     else if(p==="{s}"||p==="{x}"){kinds.push(p.charAt(1));src+="(.+?)"}
     else src+=rx(p);
    });
    tpl.push({k:k,re:new RegExp("^"+src+"$"),kinds:kinds,w:k.replace(/\{[nsx]\}/g,"").length});
   }
  });
  tpl.sort(function(a,b){return b.w-a.w});
 }catch(e){}
}
function fill(out,caps,kinds,l){
 /* cada tipo de lacuna é preenchido na ordem em que aparece no original */
 var pos={n:[],s:[],x:[]},used={n:0,s:0,x:0};
 kinds.forEach(function(k,i){pos[k].push(i)});
 return out.replace(/\{([nsx])\}/g,function(m,kind){
  var j=pos[kind][used[kind]++];var v=caps[j];if(v==null)return "";
  if(kind!=="s")return v;
  var low=lookup(v,l);if(low)return low;
  var t=translate(v,l);return t==null?v:t;
 });
}
function lookup(text,l){
 var row=Object.prototype.hasOwnProperty.call(DICT,text)?DICT[text]:null;
 return row&&row[l]||null;
}
function translate(text,l){
 l=l||base();if(l==="pt")return null;
 var t=norm(text);if(!t||t.length>400||!/[A-Za-zÀ-ÿ]/.test(t))return null;
 var ck=l+"\u0001"+t;if(cache.has(ck))return cache.get(ck);
 var out=lookup(t,l);
 if(out==null){
  for(var i=0;i<tpl.length;i++){
   var m=tpl[i].re.exec(t);
   if(m){var row=DICT[tpl[i].k];if(row&&row[l]){out=fill(row[l],m.slice(1),tpl[i].kinds,l);break}}
  }
 }
 if(cache.size>4000)cache.clear();
 cache.set(ck,out==null?null:out);
 return out==null?null:out;
}
function skipped(el){
 try{return !el||el.closest(SKIP)!==null||el.matches(SKIP_DIRECT)}catch(e){return true}
}
function doText(node,l){
 var v=node.nodeValue;if(!v||!v.trim())return;
 var pe=node.parentElement;if(!pe||pe.tagName==="TEXTAREA"||pe.tagName==="OPTION"&&pe.parentElement&&pe.parentElement.id==="voice-select"&&pe.value)return;
 var rec=orig.get(node);
 if(rec&&v===rec.a)return;                       // já traduzido por nós
 if(skipped(node.parentElement))return;
 var tr=translate(v,l);
 if(tr==null||tr===norm(v))return;
 var lead=v.match(/^\s*/)[0],trail=v.match(/\s*$/)[0],nv=lead+tr+trail;
 orig.set(node,{o:v,a:nv});node.nodeValue=nv;
}
function doAttrs(el,l){
 for(var i=0;i<ATTRS.length;i++){
  var name=ATTRS[i],v=el.getAttribute(name);if(!v)continue;
  var map=origAttr.get(el),rec=map&&map[name];
  if(rec&&v===rec.a)continue;
  var tr=translate(v,l);if(tr==null||tr===norm(v))continue;
  if(!map){map={};origAttr.set(el,map)}
  map[name]={o:v,a:tr};el.setAttribute(name,tr);
 }
}
function walk(root,l){
 if(!root)return;
 if(root.nodeType===3){doText(root,l);return}
 if(root.nodeType!==1&&root.nodeType!==9&&root.nodeType!==11)return;
 if(root.nodeType===1){var t0=root.tagName;if(t0==="SCRIPT"||t0==="STYLE"||t0==="svg"||t0==="CODE"||root.id==="method")return;doAttrs(root,l)}
 /* atributos de acessibilidade são traduzidos também nas áreas de estudo (só quando batem com o dicionário) */
 var tw=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:function(n){
  if(n.nodeType===1){var tag=n.tagName;if(tag==="SCRIPT"||tag==="STYLE"||tag==="svg"||tag==="CODE"||n.id==="method")return NodeFilter.FILTER_REJECT}
  return NodeFilter.FILTER_ACCEPT}});
 var n;while((n=tw.nextNode())){if(n.nodeType===3)doText(n,l);else doAttrs(n,l)}
}
function revertAll(){
 var tw=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT),n;
 while((n=tw.nextNode())){
  if(n.nodeType===3){var r=orig.get(n);if(r){if(n.nodeValue===r.a)n.nodeValue=r.o;orig.delete(n)}}
  else{var m=origAttr.get(n);if(m){for(var a in m){if(n.getAttribute(a)===m[a].a)n.setAttribute(a,m[a].o)}origAttr.delete(n)}}
 }
}
function onMut(list){
 if(busy)return;busy=true;
 try{
  var l=base();
  if(l!=="pt"){
   for(var i=0;i<list.length;i++){
    var m=list[i];
    if(m.type==="childList"){for(var j=0;j<m.addedNodes.length;j++)walk(m.addedNodes[j],l)}
    else if(m.type==="characterData")doText(m.target,l);
    else if(m.type==="attributes"&&m.target.nodeType===1)doAttrs(m.target,l);
   }
  }
 }catch(e){}
 finally{try{if(obs)obs.takeRecords()}catch(e){}busy=false}
}
function start(){
 if(obs||!window.MutationObserver)return;
 obs=new MutationObserver(onMut);
 obs.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS});
}
function stop(){if(obs){try{obs.disconnect()}catch(e){}obs=null}}
function apply(){
 try{
  var l=base();
  busy=true;
  if(applied!==l&&applied!=="pt")revertAll();
  applied=l;
  if(l==="pt")stop();
  else{walk(document.body,l);start()}
 }catch(e){}
 finally{try{if(obs)obs.takeRecords()}catch(e){}busy=false}
 try{document.documentElement.lang=LOCALES[base()]||"pt-BR"}catch(e){}
}
var LOCALES={pt:"pt-BR",en:"en-US",es:"es-ES",it:"it-IT",fr:"fr-FR",de:"de-DE"};
try{
 build();
 window.VBUI={t:function(s){var r=translate(s);return r==null?s:r},apply:apply,locale:function(){return LOCALES[base()]||"pt-BR"},SKIP:SKIP,SKIP_DIRECT:SKIP_DIRECT,dict:DICT,size:Object.keys(DICT).length};
 window.addEventListener("vb-base-changed",function(){
  setTimeout(function(){
   apply();
   try{var r=document.getElementById("view-relatorio");if(r&&!r.hidden&&window.VB_REPORT)VB_REPORT.open()}catch(e){}
  },0);
 });
 apply();
}catch(e){}
})();
