alert ("Bem vindo ao jogo do número secreto");
let numeroSecreto = 3;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt ("qual o numero secreto?");
    
    if (chute == numeroSecreto) {
        alert (`Voce acertou! O numero secreto é ${numeroSecreto} com ${tentativas}.`);
    } else {
        if (chute > numeroSecreto) {
            alert (`O numero secreto é menor que ${chute}`);
        } else {
            alert (`O numero secreto é maior que ${chute}`);
        } 
    }

    tentativas++;
}

