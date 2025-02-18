1. Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

```html
<form action="">
    <div class="campo-nome">
        <label for="name">Nome</label>
        <input type="text" name="name" id="name" required />
    </div>
    <div class="campo-idade">
        <label for="idade">idade</label>
        <input type="number" name="idade" id="idade" required />
    </div>
</form>
<button onclick="mensagem()">enviar</button>
```

```js
function mensagem() {
    let nome = document.getElementById("name").value;
    let idade = document.getElementById("idade").value;

    console.log("Olá " + nome + ". Você tem " + idade + " anos")
}
```
---
<br>

2. Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

```html
<p id="paragrafo"></p>
```
```js
let paragrafo = document.getElementById("paragrafo");
paragrafo.textContent = "Mudando o texto com JavaScript.";
```
---
<br>

3. Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

```js
function somaNumeros() {
    let num1 = parseInt(prompt());
    let num2 = parseInt(prompt());
    let soma = num1 + num2;
    let mensagem = `O resultado da soma dos produtos ${num1} e ${num2} é igual a ${soma}.`

    return mensagem;
}

let resultado = somaNumeros();
console.log(resultado);
```
---
<br>

4. Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

```html
<p>setença1; sentença2</p>
```

```js
let text = document.querySelector("p").textContent;
let sentenca1 = text.split(`;`)[0];
let sentenca2 = text.split(` `)[1];
console.log(sentenca1 + " " + sentenca2);
```
---
<br>

5. Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.

```js
let ListaDenumeros = "1, 75, 48, 3, 6";
let numero = ListaDenumeros.split(`,`);
console.log(numero);
```