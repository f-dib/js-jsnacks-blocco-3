let wordElement = prompt('Inserisci una parola da invertire');
let resultElement = document.querySelector("#result");

function reverseWord () {
    let wordrev = wordElement.split('').reverse().join('');
    resultElement.innerHTML = wordrev;
};

reverseWord (wordElement);