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
var prezzoFinale;
var eta=parseInt( prompt('inserisci la tua età') );
var totKm=parseInt( prompt('inserisci il numero di km che devi percorrere') );
var prezzoBigliettoPieno= 0.21 * totKm;
// var sconto18= prezzoBigliettoPieno - (prezzoBigliettoPieno * 30/100);
// var sconto65=prezzoBigliettoPieno -(prezzoBigliettoPieno * 40/100);

// console.log(prezzoBigliettoPieno);

if (eta<18){
  prezzoFinale=prezzoBigliettoPieno - (prezzoBigliettoPieno * 30/100);
}
else if(eta>65){
  prezzoFinale=prezzoBigliettoPieno - (prezzoBigliettoPieno * 40/100);
}
else{
  prezzoFinale=prezzoBigliettoPieno;
}
  // console.log(prezzoFinale.toFixed(2));

  document.getElementById('prezzo-biglietto')+=' ' + prezzoFinale.toFixed(2);
