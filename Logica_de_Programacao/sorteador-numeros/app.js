function gerarNumero(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}

function alteraStatus() {
    let btnReiniciar = document.getElementById("btn-reiniciar");

    if(btnReiniciar.classList.contains("container__botao-desabilitado")) {
        btnReiniciar.classList.remove("container__botao-desabilitado");
        btnReiniciar.classList.add("container__botao");
    } else {
        btnReiniciar.classList.remove("container__botao");
        btnReiniciar.classList.add("container__botao-desabilitado");
    }
}

function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);  
    let resultado = document.getElementById("resultado");

    let sorteados = [];
    let numero;

    if(document.getElementById("quantidade").value == "" && document.getElementById("de").value == "" && document.getElementById("ate").value == "") {
        alert("Por gentileza, ensira os valores nos campos");
    } else if(de > ate) {
        alert("O numero inserido no campo 'Do número' é maior que o número informado no campo 'Até o número'. Por gentileza, reveja os valores");
    }else if(quantidade > (ate - de)) {
        alert("Não tem como sortear os números");
    } else {
        for(let i = 0; i < quantidade; i++) {
            numero = gerarNumero(de, ate);
            while(sorteados.includes(numero)){
                numero = gerarNumero(de, ate);
            }
            sorteados.push(numero);
        }

        document.getElementById("quantidade").value = "";
        document.getElementById("de").value = "";
        document.getElementById("ate").value = "";        
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
        alteraStatus();
    }   
}

function reiniciar() {
    quantidade = document.getElementById("quantidade").value = "";
    de = document.getElementById("de").value = "";
    ate = document.getElementById("ate").value = "";
    resultado = document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alteraStatus();
}
