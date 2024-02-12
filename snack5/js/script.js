let wordElement = String(prompt('Inserisci una parola o una frase'));
let resultElement = document.querySelector("#result");

function upperWord (word) {

    let arrayText = word.split(' ');

    for (i = 0; i < arrayText.length; i++) {
        arrayText[i] = arrayText[i].charAt(0).toUpperCase() + arrayText[i].slice(1);
    }

    let firstUpper = arrayText.join(' ');

    return firstUpper;
}

resultElement.innerHTML = upperWord (wordElement);