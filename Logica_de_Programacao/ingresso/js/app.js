function comprar() {
    let ingresso = document.getElementById ("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById ("qtd").value);
    let opcao = parseInt(document.getElementById(`qtd-${ingresso}`).textContent);

    let disponivel = opcao - quantidade;

    if(quantidade < 0) {
        limpaCampo();
        alert("Valor invalido");
    } else if(disponivel < 0) {
        alert("Não há mais ingressos disponíveis no momento");
    } else {
        limpaCampo();
        document.getElementById(`qtd-${ingresso}`).textContent = disponivel;
    }   
}

function limpaCampo() {
    document.getElementById ("qtd").value = "";
}
