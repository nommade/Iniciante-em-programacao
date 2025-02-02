function alterarStatus(id) {
    let elementoSelecionado = document.getElementById(`game-${id}`);
    let imagem = elementoSelecionado.querySelector(".dashboard__item__img");
    let botao = elementoSelecionado.querySelector(".dashboard__item__button");

    if(botao.classList.contains("dashboard__item__button--return")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }
}
