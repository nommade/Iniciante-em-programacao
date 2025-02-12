let palavra = prompt("Essa palavra é um palindromo?");
let letras = palavra.split('');
let array = [];
let newArray = [];

letras.forEach(letra => {
    array.push(letra);
});

for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
}

function palindromo() {
    for (var i = 0; i < array.length; i++) {
        if(array[i] !== newArray[i]) {
            return "Essa palavra não é um palindromo";
        }
    }
    return "Essa palavra é um palindromo";
}

let confirmacao = palindromo();
alert (confirmacao);