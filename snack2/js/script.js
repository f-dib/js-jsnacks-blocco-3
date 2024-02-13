let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");
let result = [];
let firstArray = [1, 2, 3, 4, 5];
let secondArray = ["a", "b", "c", "d", "e"];

// Creo un ciclo che prende gli elementi presenti nei due array e li concateni

function combineArray (first, second) {

    for (i = 0; i < firstArray.length; i++) {
        result.push(first[i], second[i]);
    };
    
    return result;

}

// Mostro a schermo i valori ottenuti
titleElement.innerHTML = "L'unione dei due array risulta";
resultElement.innerText = combineArray (firstArray, secondArray);