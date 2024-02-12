let wordElement = prompt('Inserisci una parola da invertire');
let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");


function reverseWord (word) {

    if (!isNaN(word)) {

        resultElement.innerHTML = "C'e' un tempo e un luogo per ogni cosa, ma non ora";

    } else {

        let wordrev = word.split('').reverse().join('');
        titleElement.innerHTML = "La tua parola al contrario si scrive";
        resultElement.innerHTML = wordrev;

    }

};

reverseWord (wordElement);