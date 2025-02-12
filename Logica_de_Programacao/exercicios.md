Crie um programa que verifica se uma palavra ou frase é um palíndromo.

```js

```
---
Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.

```js
function numero(value) {
    let numero = parseInt(value);
    alert(numero);
}
```
---
<br>
Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

```html
<body>
    <input class="number1" type="number">
    <input class="number2" type="number">
    <button onclick="somar()">somar</button>
    <button onclick="subtrair()">subtrair</button>
    <button onclick="multiplicar()">multiplicar</button>
    <button onclick="dividir()">dividir</button>
    <script src="/index.js"></script>
</body>
```
```js
let numero1 = parseInt(prompt());
let numero2 = parseInt(prompt());

function somar() {
    let soma = numero1 + numero2;
    alert(soma);
}

function subtrair() {
    let subtrair = numero1 - numero2;
    alert(subtrair);
}

function multiplicar() {
    let multiplicar = numero1 * numero2;
    alert(multiplicar);
}

function dividir() {
    let dividir = numero1 / numero2;
    alert(dividir);
}
```
---
<br>

Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.

```js
function impaOuPar() {
    let numero  = parseInt(prompt());
    
    if (numero % 2 === 0) {
        alert("o numero é par");
    } else {
        alert("o numero é impar");
    }
}

impaOuPar();
```
---
<br>

Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar.

```html
<body>
    <label for="temperatura">temperatura</label>
    <input id="temperatura" type="text">

    <select name="escolha" id="select">
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
    </select>

    <button onclick="converter()">converter</button>
    <script src="/index.js"></script>
</body>
```

```js
function converter() {
    let temperatura = parseInt(document.getElementById("temperatura").value);
    let select = document.getElementById("select").value;
    
    if(select == "Celsius") {
        let celsius = ((temperatura - 32) * 5) / 9;
        console.log(celsius);
    } else if (select == "Fahrenheit") {
        let Fahrenheit = (temperatura * 1.8) + 32;
        console.log(Fahrenheit);
    }
}
```
---
<br>

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