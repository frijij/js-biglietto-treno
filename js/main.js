/* TESTO DELL'ESERCIZIO:

Inserisco il testo dell'esercizio

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero 
(con i prompt() in questo caso).
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo 
e questo richiederà un minimo di ricerca.).
Il risultato andrà visualizzato prima in console e poi possibilmente in un apposito elemento <p> del mio codice HTML.

BONUS:
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole 
percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il recap dei dati e l'output del prezzo finale va stampato in pagina.

*/

// INIZIO
// Chiedere informazioni all'utente su km ed età
let kmInfo=parseInt(prompt("Inserisci i chilometri che desideri percorrere:"));
let userAge=parseInt(prompt("Inserisci la tua età:"));

// Calcolare il prezzo del biglietto 
let basicTicketPrice = kmInfo * 0.21
console.log("Il prezzo del tuo biglietto è: €"+basicTicketPrice);

// Stabilire le condizioni per applicare sconti:
// applicare il 20% di sconto se età < 18 anni


// applicare il 40% di sconto se età > 65 anni


// arrotondare il prezzo a max due decimali


//mostrare in console e in elemento <p> in html 

