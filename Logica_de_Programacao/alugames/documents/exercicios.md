Crie um programa que verifica se uma palavra ou frase é um palíndromo.

```js
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
```
<br>

---

Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

```js
let quantidade = 0;
let array = [];

while (quantidade < 3) {
    let entrada = parseInt(prompt());
    array.push(entrada);
    quantidade++;
}

function ordenaNumero(a, b, c) {
    let newArray = [a, b, c];
    newArray.sort(function(x,y) {
        return x - y;
    });
    return newArray;
}

let resultado = ordenaNumero(array[0], array[1], array[2]);
console.log(resultado);
``` 