```js
let arrayDeAmigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    let amigosParticipantes = document.getElementById("lista-amigos");

    if (amigo == "") {
        alert("O campo não pode estar vazio");
    } else if (arrayDeAmigos.includes(amigo)) {
        alert("Esse nome já existe! Por gentileza, insira algo que o diferencie ou coloque outro nome");
    } else {
        arrayDeAmigos.push(amigo);
        amigosParticipantes.textContent = arrayDeAmigos.join(", "); 
        document.getElementById("nome-amigo").value = "";
    }
}
```

A função adicionar()tem como objetivo principal permitir que você adicione nomes de amigos à lista de participantes do amigo secreto.

### **Obtenção do nome do amigo:**
```js
let amigo = document.getElementById("nome-amigo").value;
```
Essa linha pega o valor digitado no campo de entrada de texto com o id "nome-amigo" e armazena esse valor na variável amigo.

### **Obtenção da lista de amigos participantes:**
```js
let amigosParticipantes = document.getElementById("lista-amigos");
```
Essa linha pega o elemento HTML que você define para exibir a lista de amigos participantes (provavelmente uma lista não ordenada) e armazena esse elemento na variável amigosParticipantes.

### **Verificação de campo vazio:**
```js
if (amigo == "") {
    alert("O campo não pode estar vazio");
}
```
Essa parte do código verifica se o campo de entrada de texto está vazio. Se desejar, um alerta é exibido e a função é interrompida.

### **Verificação de nome repetido:**
```js
else if (arrayDeAmigos.includes(amigo)) {
    alert("Esse nome já existe! Por gentileza, insira algo que o diferencie ou coloque outro nome");
}
```
Essa parte do código verifica se o nome do amigo já existe na lista arrayDeAmigos. Se existir, um alerta é exibido e a função é interrompida.

### **Adição de amigo à lista:**
```js
else {
    arrayDeAmigos.push(amigo);
    amigosParticipantes.textContent = arrayDeAmigos.join(", ");
    document.getElementById("nome-amigo").value = "";
}
```
- ``arrayDeAmigos.push(amigo);``: Essa linha adiciona o nome do amigo à lista arrayDeAmigos;
- ``amigosParticipantes.textContent = arrayDeAmigos.join(", ");``: Essa linha atualiza o conteúdo do elemento HTML que exibe uma lista de amigos participantes, mostrando todos os nomes separados por vírgula;
- ``document.getElementById("nome-amigo").value = "";``: Essa linha limpa o campo de entrada de texto, preparando-o para a próxima adição de amigo.

<br><br>

---
<br>

---
<br>

---
<br><br>

```js
function sortear() {
    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = ""; 
  
    if (arrayDeAmigos.length === 0) {
        alert("Nenhum amigo foi adicionado para o sorteio.");
        return;
    }
  
    embaralhar(arrayDeAmigos);
  
    let listaSorteada = [...arrayDeAmigos];
  
    for (let i = 0; i < arrayDeAmigos.length; i++) {
        let amigo = arrayDeAmigos[i];
        let indiceSorteado = Math.floor(Math.random() * listaSorteada.length);
        let amigoSorteado = listaSorteada.splice(indiceSorteado, 1)[0];

        while (amigo === amigoSorteado) {
            // Lógica para lidar com a lista vazia (por exemplo, exibir um erro)
            if (listaSorteada.length === 0) {
                console.error("Erro: listaSorteada está vazia!");
                break; // Interrompe o loop
            }
            indiceSorteado = Math.floor(Math.random() * listaSorteada.length);
            amigoSorteado = listaSorteada[indiceSorteado];
        }
  
        let resultado = document.createElement("li");
        resultado.textContent = `${amigo} tirou ${amigoSorteado}`;
        listaSorteio.appendChild(resultado);
    }
}
```
A função sortear() tem como objetivo principal pegar a lista de amigos que você cadastrou, embaralhar essa lista de forma recuperada e, em seguida, exibir na tela quem tirou quem no sorteio.

### **Limpeza da lista de prêmios:**
```js
let listaSorteio = document.getElementById("lista-sorteio");
listaSorteio.innerHTML = ""; // Limpa a lista de sorteio
```
Essa parte do código pega o elemento HTML que você definiu para exibir o resultado do sorteio (provavelmente uma lista não ordenada) e limpe o conteúdo anterior, caso haja algum.

### **Verificação da lista de amigos:**
```js
if (arrayDeAmigos.length === 0) {
    alert("Nenhum amigo foi adicionado para o sorteio.");
    return;
}
```
Aqui, a função verifica se você adicionou algum amigo à lista. Se a lista estiver vazia, um alerta é exibido e a função é interrompida, pois não há amigos para classificar.

### **Embaralhamento da lista de amigos:**
```js
embaralhar(arrayDeAmigos);
```
Essa linha chama a função embaralhar(). Essa função tem o papel de escolher aleatoriamente na ordem dos amigos na lista, garantindo que o sorteio seja justo e imprevisível.

### **Criação de uma cópia da lista:**
```js
let listaSorteada = [...arrayDeAmigos]; // Cria uma cópia da lista de amigos
```
Essa linha cria uma cópia da lista de amigos embaralhada. Essa cópia será usada para controlar quais amigos já foram sorteados, logo a lista original não é alterada, evitando que um amigo seja sorteado duas vezes. 

- ``[...arrayDeAmigos]:`` Essa é a parte crucial da sintaxe. Ela usa o operador spread ( ...) para criar uma cópia superficial do array arrayDeAmigos.
- **Operador spread (...)** : O operador spread "espalha" os elementos do array arrayDeAmigos em um novo array. Em outras palavras, ele pega cada elemento do array original e os coloca em um novo array.

> **Cópia superficial:** Uma cópia superficial significa que os elementos do novo array ( listaSorteada) são copiados dos elementos do array original ( arrayDeAmigos). No caso de strings (como os nomes dos amigos), isso significa que os valores são copiados. No entanto, se o array original contivesse objetos ou outros arrays, a cópia seria apenas uma referência a esses objetos/arrays, e não uma cópia profunda.

### **Realização do sorteio:**
```js
for (let i = 0; i < arrayDeAmigos.length; i++) {
    let amigo = arrayDeAmigos[i];
    let indiceSorteado = Math.floor(Math.random() * listaSorteada.length);
    let amigoSorteado = listaSorteada.splice(indiceSorteado, 1)[0]; // Remove o amigo sorteado da lista

    while (amigo === amigoSorteado) {
        // Lógica para lidar com a lista vazia (por exemplo, exibir um erro)
        if (listaSorteada.length === 0) {
            console.error("Erro: listaSorteada está vazia!");
            break; // Interrompe o loop
        }
        indiceSorteado = Math.floor(Math.random() * listaSorteada.length);
        amigoSorteado = listaSorteada[indiceSorteado];
    }

    let resultado = document.createElement("li");
    resultado.textContent = `${amigo} tirou ${amigoSorteado}`;
    listaSorteio.appendChild(resultado);
}
```
- ``for (let i = 0; i < arrayDeAmigos.length; i++)``: Esse loop percorre uma lista de amigos originais, um por um;
- ``let amigo = arrayDeAmigos[i];``: Essa linha pega o nome do amigo atual na lista original;
- ``let indiceSorteado = Math.floor(Math.random() * listaSorteada.length);``: Essa linha gera um índice aleatório dentro da lista de amigos sorteados. Esse índice será usado para escolher o amigo que o amigo atual irá tirar;
- ``let amigoSorteado = listaSorteada.splice(indiceSorteado, 1)[0];``: Essa linha pega o amigo sorteado da lista de amigos sorteados e remove essa lista. Isso garante que o mesmo amigo não seja sorteado duas vezes;

<br>

- ``while (amigo === amigoSorteado)``: Essa linha inicia um loop whileque continua sendo executado enquanto a condição dentro dos parênteses for verdadeira;
    - ``amigo === amigoSorteado``: Verifica se os valores das variáveis ``amigo`` e ``amigoSorteado`` ​​são exatamente iguais;
    - O operador ( ``===`` ) verifica tanto o valor quanto o tipo das variáveis, garantindo que a comparação seja precisa;
- ``if (listaSorteada.length === 0)``: Essa linha verifica se a lista listaSorteadaestá vazia;
- ``console.error("Erro: listaSorteada está vazia!");``: Essa linha exibe uma mensagem de erro no console do navegador, informando que a lista está vazia;
- ``break;``: Essa linha interrompeu a execução do loop while, evitando que o código tente acessar elementos de uma lista vazia;
- ``let indiceSorteado = Math.floor(Math.random() * listaSorteada.length);``: Essa linha gera um índice aleatório dentro da lista de amigos sorteados. Esse índice será usado para escolher o amigo que o amigo atual irá tirar;
- ``amigoSorteado = listaSorteada[indiceSorteado];``: Essa linha atualiza o valor da variável amigoSorteadocom o amigo que está na posição indiceSorteadodo array listaSorteada.

<br>

- ``let resultado = document.createElement("li");``: Essa linha cria um novo elemento HTML do tipo "li" (item da lista);
- ``resultado.textContent =${amigo} tirou ${amigoSorteado};``: Essa linha define o texto do item da lista com o nome do amigo que está sorteando e o nome do amigo que ele tirou;
- ``listaSorteio.appendChild(resultado);``: Essa linha adiciona o item da lista ao elemento HTML que exibe o resultado do sorteio.

<br><br>

---
<br>

---
<br>

---
<br><br>

```js
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```
### O que a faz?
A função embaralhar(array), percorre o array de trás para frente e, para cada indice, escolhe outro indice aleatoriamente dentro da lista. Em seguida, ela troca a posição desses dois indices.

### Como ela funciona?
1. **Looping de trás para frente:** A função percorre o array de trás para frente, começando do último elemento (``array.length - 1``) e indo até o segundo elemento (``i > 0``).
---

2. **Gerando um índice aleatório:** Para cada elemento na posição ``i``, a função gera um índice aleatório ``j`` dentro do intervalo de ``0 até i``:
- ``Math.random():`` Essa função gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo). Ou seja, o número gerado será sempre menor que 1;
- ``* (i + 1)``: Multiplicamos o número aleatório gerado por ``(i + 1)``. O valor de irepresenta o índice do elemento atual que está sendo analisado no loop. Ao adicionar 1, garantimos que o intervalo de números aleatórios seja de 0 até i(inclusive).
- ``Math.floor()``: Essa função arredonda o número decimal para o inteiro mais próximo, sempre para baixo . Isso garante que o índice ``j`` seja sempre um número inteiro válido dentro do intervalo do array.
---
3. **Troca de posições:** A função troca o elemento que está na posição ``i`` com o elemento que está na posição ``j``. Isso é feito utilizando uma sintaxe de desestruturação ``[array[i], array[j]] = [array[j], array[i]]``.

> A linha 3 tem como finalidade igualar a chance de todos os sorteios da lista, pois caso não seja feita essa troca a ordem sempre será a mesma. Sendo assim, a linha 3 garante que a ordem dos indices nunca sejam iguais, independente da posição original deles no array.

<br><br>

---
<br>

---
<br>

---
<br><br>