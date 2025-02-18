Suponha que você esteja trabalhando em um sistema de vendas, no qual o usuário informa o total de itens e o valor unitário. Com base em algumas regras, o sistema aplica um desconto de 5% sobre o valor total.

As regras são as seguintes:

- Inclusão de 10 ou mais itens; e
- Valor unitário igual ou superior a R$ 100,00.
O valor deverá ser exibido num alert e depois a função reiniciar() deverá ser chamada.

Os seguintes códigos foram escritos para implementar essa funcionalidade e a funcionalidade de reiniciar os valores:

```js
function calcular() {

  let quantidade = parseInt(document.getElementById('quantidade').value);
  let valor = parseFloat(document.getElementById('valor').value);

  let total = quantidade * valor;

  if (quantidade >= 10 || valor >= 100) {
    total = total - (total / 100 * 5);
  }

  alert(`Valor total: ${total} `);
}


function reiniciar() {
  quantidade.value = '';
  valor.value = '';
}
```

Entretanto, os campos não estão sendo limpos após o cálculo do valor total.
Escolha TODAS as alternativas que indicam os problemas de lógica do código anterior:

```xml
Necessário ajustar a função reiniciar(), pois as variáveis quantidade e valor foram declaradas dentro da função calcular().
```
> Como a função reiniciar() é uma função distinta, só poderíamos aproveitar a variável caso ela tivesse sido declarada globalmente, sem o uso do parseInt e parseFloat. Sendo assim, é necessário modificar a função reiniciar() para o seguinte código:

```js
function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('valor').value = '';
}
```
> Uma outra alternativa seria declarar as variáveis globalmente, onde o código completo ficaria da seguinte forma:
```js
let quantidade = document.getElementById('quantidade');
let valor = document.getElementById('valor');

function calcular() {
  let total = parseInt(quantidade.value) * parseFloat(valor.value);

  if (quantidade.value >= 10 || valor.value >= 100) {
    total = total - (total / 100 * 5);
  }

  alert(`Valor total: ${total} `);
  reiniciar();
}


function reiniciar() {
  quantidade.value = '';
  valor.value = '';
}
```