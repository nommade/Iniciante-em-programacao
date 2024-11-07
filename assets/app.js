let chute;
let tentativas = 1;
let multiplicador = 100;
let numeroSecreto = parseInt (Math.random()*multiplicador+1);

alert ("Bem vindo ao jogo do número secreto");

while (chute != numeroSecreto) {
    chute = prompt (`Escolha um numero entre ${tentativas} e ${multiplicador}`);
    
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert (`O numero secreto é menor que ${chute}`);
        } else {
            alert (`O numero secreto é maior que ${chute}`);
        } 
    }

    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert (`Voce acertou! O numero secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
