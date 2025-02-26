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
  
        let resultado = document.createElement("li");
        resultado.textContent = `${amigo} tirou ${amigoSorteado}`;
        listaSorteio.appendChild(resultado);
    }
}
```

---
<br>

---
<br>

---
<br>

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