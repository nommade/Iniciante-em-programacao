Suponha que você está desenvolvendo um programa para uma loja de jogos e precisa calcular o desconto total que um cliente receberá em sua compra, de acordo com as seguintes regras:

- A loja oferece desconto progressivo com base na quantidade de jogos comprados;
- Cada jogo custa R$50 sem desconto;
- Se o cliente comprar 5 ou mais jogos, ele receberá um desconto de 10% em cada jogo;
- Se o cliente comprar 10 ou mais jogos, ele receberá um desconto de 20% em cada jogo;

Você deseja usar um loop while para calcular o desconto total, dado o número de jogos comprados, e escreveu o seguinte código:

```js
function calcularDescontoTotal(quantidadeDeJogos) {
    let desconto = 0;
    let i = 0;

    while (i < quantidadeDeJogos) {
        if (quantidadeDeJogos >= 5) {
            desconto += 0.1 * 50;
        } else if (quantidadeDeJogos >= 10) {
            desconto += 0.2 * 50;
        }
        i++;
    }

    return desconto;
}
```

No entanto, você percebeu que há problemas de lógica no código escrito e ele não está funcionando conforme as regras descritas anteriormente.

Escolha a alternativa que indica o problema de lógica no código anterior:

```xml
O primeiro bloco if foi escrito de maneira incorreta, fazendo com que o segundo if nunca seja executado.
```
> Exatamente! O primeiro if deveria ser executado apenas quando a quantidade de jogos for maior do que 5 e também menor do que 10:
```js
if (quantidadeDeJogos >= 5 && quantidadeDeJogos < 10) {}
```