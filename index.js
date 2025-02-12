let palavra = prompt("Essa palavra é um palindromo?");
let letras = palavra.split('');
let array = [];

letras.forEach(letra => {
    array.push(letra);
});
console.log(array);

function palindromo() {
    let newArray = array.reverse();

    if(array == newArray) {
        alert("essa palavra é um palindromo");
    } else {
        alert("essa palavra não é um palindromo");
    }
    console.log(newArray);
}