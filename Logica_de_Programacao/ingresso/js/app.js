function comprar() {
    let ingresso = document.getElementById ("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById ("qtd").value);
    let opcao = parseInt(document.getElementById(`qtd-${ingresso}`).textContent);

    let disponivel = opcao - quantidade;

    if(disponivel < 0) {
        alert("Não há mais ingressos disponíveis no momento");
    } else {
        document.getElementById(`qtd-${ingresso}`).textContent = `${disponivel}`;
    }
}


