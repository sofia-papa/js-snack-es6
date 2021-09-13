

const myArray = ['mela', 'anguria', 'pesca', 'ciliegia', 'fragola'];
let minUtente = prompt("Inserisci un numero, che vada da zero a " + myArray.length - 1);
let maxUtente = prompt("Inserisci un numero, che vada da" + minUtente + " a " +myArray.length - 1);

console.log(myArray);

while (minUtente < 0 || minUtente >= myArray.length){
    minUtente = prompt("Inserisci un numero, che vada da zero a " + myArray.length - 1);
}

while (maxUtente < minUtente || maxUtente >= myArray.length){
    maxUtente = prompt("Inserisci un numero, che vada da" + minUtente + " a " +myArray.length - 1);
}


function arrayForEach(array, firstIndex, lastIndex) {
  
    const newArray = [];
    array.forEach((element, index) =>{
        if (index >= firstIndex && index <= lastIndex ){
            newArray.push(element);
        }      
    });
    return newArray;
}


console.log(arrayForEach(myArray, minUtente, maxUtente));