let wordElement = String(prompt('Inserisci una parola, ti riordinerò le lettere in ordine alfabetico'));
let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");


function alphaBet (word) {

    // Controllo per non permettere all'user di inserire numeri
    if(!isNaN(word)){

        resultElement.innerHTML = "C'e' un tempo e un luogo per ogni cosa, ma non ora";

    } else {

        // Creo una variabile, la scompongo, la ordino in ordine alfabetico e la ricompongo
        let wordAlpha = word.split('').sort().join('');
        titleElement.innerHTML = "Le lettere in ordine alfabetico della parola inserita sono:";
        resultElement.innerHTML = wordAlpha;

    }
}

alphaBet (wordElement);