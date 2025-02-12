let alugados = 0;
function alterarStatus(id) {
    let elementoSelecionado = document.getElementById(`game-${id}`);
    let imagem = elementoSelecionado.querySelector(".dashboard__item__img");
    let botao = elementoSelecionado.querySelector(".dashboard__item__button");

    if(botao.classList.contains("dashboard__item__button--return")) {
        let confirmacao = confirm("Você tem certeza que deseja devolver o jogo?");
        if(confirmacao == true){
            imagem.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
        }
    } else {
            imagem.classList.add("dashboard__item__img--rented");
            botao.classList.add("dashboard__item__button--return");
            botao.textContent = "Devolver";
            alugados = alugados + 1;
            console.log(alugados);
    }
    
}
