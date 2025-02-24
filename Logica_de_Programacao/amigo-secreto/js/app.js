let arrayDeAmigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    let amigosParticipantes = document.getElementById("lista-amigos");

    if (amigo == "") {
        alert("O campo não pode estar vazio");
    } else if (arrayDeAmigos.includes(amigo)) {
        alert("Esse nome já existe! Por gentileza, insira algo que o diferencie ou coloque outro nome");
    } else {
        arrayDeAmigos.push(amigo);
        amigosParticipantes.textContent = arrayDeAmigos.join(", "); 
        document.getElementById("nome-amigo").value = "";
    }
}

function sortear() {
    let amigoSorteado = document.getElementById("lista-sorteio");
    let sorteio = parseInt(Math.random()*arrayDeAmigos.length);
    amigoSorteado.textContent = arrayDeAmigos[sorteio];
}
