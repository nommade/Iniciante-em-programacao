let totalGeral = 0;
limpar();

function adicionar() {
    let selecao = document.getElementById("produto").value;
    let produtoNome = selecao.split(`-`)[0];
    let produtoPreco = selecao.split(`R$`)[1];
    let quantidade = document.getElementById("quantidade").value;

    if(quantidade <= 0) {
        alert("Por gentileza insira um valor valido");
    } else {
        let carrinho = document.getElementById("lista-produtos");
        carrinho.innerHTML = carrinho.innerHTML + 
                `<section class="carrinho__produtos__produto">
                    <span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">${produtoPreco}</span>
                </section>`;

        let preco = quantidade*parseInt(produtoPreco);
        let subTotal = document.getElementById("valor-total");
        totalGeral = totalGeral + preco;
        subTotal.textContent = `R$ ${totalGeral}`;

        quantidade = document.getElementById("quantidade").value = '';
    }
}

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "";
    totalGeral = 0;
}