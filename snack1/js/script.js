let wordElement = prompt('Inserisci una parola da invertire');
let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");


function reverseWord (word) {

    // Eseguo un controllo sul testo inserito, evitando che l'user inserisca un numero
    if (!isNaN(word)) {

        resultElement.innerHTML = "C'e' un tempo e un luogo per ogni cosa, ma non ora";

    } else {

        // Prendo il testo scritto lo scompongo in singoli elementi, lo inverto e lo ricompongo
        let wordrev = word.split('').reverse().join('');
        titleElement.innerHTML = "La tua parola al contrario si scrive";
        resultElement.innerHTML = wordrev;

    }

};


reverseWord (wordElement);