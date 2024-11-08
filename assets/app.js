exibirMensagemInicial();
let tentativas = 1;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibeTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibeTextoNaTela("h1", "Jogo do número secreto");
    exibeTextoNaTela("p", "Selecione um numero de 1 a 10");
}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if(chute == numeroSecreto) {
        exibeTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibeTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chutar").setAttribute("disabled", true);
        document.getElementById("campoChute").setAttribute("disabled", true);
    } else {
        if(chute > numeroSecreto) {
            exibeTextoNaTela("p", "O número secreto é menor");
        } else {
            exibeTextoNaTela("p", "O número secreto é maior");
        }

        tentativas++;
        limpaCampo();
    }
}

function limpaCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    limpaCampo();
    exibirMensagemInicial();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById("chutar").removeAttribute("disabled");
    document.getElementById("campoChute").removeAttribute("disabled");
    document.getElementById("reiniciar").setAttribute("disabled", true);
}