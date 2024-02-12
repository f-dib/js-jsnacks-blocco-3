let resultElement = document.querySelector("#result");
let result = [];
let arrayElement = [0, 1, 2, 3, 4, 5];
let a = 2;
let b = 4;

function miniArray (array, min, max) {
    
    for (i = min; i <= max; i++) {
        result.push(array[i]);
    }
    return result;
    
};

resultElement.innerHTML = `${miniArray (arrayElement, a, b)}`;