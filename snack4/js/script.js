let wordElement = String(prompt('Inserisci una parola, ti riordinerò le lettere in ordine alfabetico'));
let resultElement = document.querySelector("#result");

function alphaBet (word) {
    let wordAlpha = word.split('').sort().join('');
    resultElement.innerHTML = wordAlpha;
}

alphaBet (wordElement);