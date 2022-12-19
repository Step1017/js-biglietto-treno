console.log('JS OK');

//Costo per km
const priceForKm = 0.21;

//Prompt per chiedere all'utente quanti km vuole percorrere
const userKm = prompt ('Quanti km vuoi percorrere?')
console.log('km da percorrere')

//Prompt per chiedere all'utente l'età del passeggero
const userAge = prompt ('Quanti anni hai?')
console.log('anni utente')

//Calcolare costo biglietto in base ai km
const ticketPrice = (userKm * priceForKm);
console.log('ticketPrice')

//Applicare sconti
let finalPrice = ticketPrice;

//Se < 18 anni applicare sconto 20%
if (userAge < 18) {
    finalPrice = ticketPrice - (ticketPrice * 20 / 100);
}

//Se > 65 anni applicare sconto 40%
else if (userAge > 65) {
    finalPrice = ticketPrice - (ticketPrice * 40 / 100);
}

//Arrotondiamo a massimo due decimali
finalPrice = finalPrice.toFixed(2);

//Print in pagina html
document.getElementById('userFinalPrice').innerHTML= finalPrice;