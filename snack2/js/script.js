let resultElement = document.querySelector("#result");
let result = [];
let firstArray = [1, 2, 3, 4, 5];
let secondArray = ["a", "b", "c", "d", "e"];

console.log(firstArray);
console.log(secondArray);


function combineArray (first, second) {

    for (i = 0; i < firstArray.length; i++) {
        result.push(first[i], second[i]);
    };
    
    return result;

}


resultElement.innerText = combineArray (firstArray, secondArray);