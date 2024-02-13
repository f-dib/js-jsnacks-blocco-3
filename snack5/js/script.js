let wordElement = String(prompt('Inserisci una parola o una frase'));
let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");

// Trasforma tutte le prime lettere in maiuscole
function upperWord (word) {

    let arrayText = word.split(' ');

    for (i = 0; i < arrayText.length; i++) {
        arrayText[i] = arrayText[i].charAt(0).toUpperCase() + arrayText[i].slice(1);
    }

    let firstUpper = arrayText.join(' ');

    return firstUpper;

}

titleElement.innerHTML = "Il tuo testo e':";
resultElement.innerHTML = upperWord (wordElement);