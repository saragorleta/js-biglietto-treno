// Il programma dovrà chiedere
// all’utente il numero di chilometri che
// vuole percorrere e l’età del
// passeggero.
// Sulla base di queste informazioni
// dovrà calcolare il prezzo totale del
// viaggio.
// Il prezzo del biglietto è definito in base
// ai km (0.21 € al km), ma va applicato
// uno sconto del 20% per i minorenni e
// del 40% per gli over 65.

var eta=parseInt(prompt('inserisci la tua età'));
var totKm=parseInt(prompt('inserisci il numero di km che devi percorrere'));
var prezzoBigliettoPieno= (0,21 * totKm);
var sconto18=(prezzoBigliettoPieno * 30/100);
var sconto65=(prezzoBigliettoPieno * 40/100);

if (eta<18)
  console.log('sconto18'è minore di 18);

  else if(eta>65)
    console.log('sconto65'è maggiore di 65);
