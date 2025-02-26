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
    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = ""; 
  
    if (arrayDeAmigos.length === 0) {
        alert("Nenhum amigo foi adicionado para o sorteio.");
        return;
    }
  
    embaralhar(arrayDeAmigos);
  
    let listaSorteada = [...arrayDeAmigos];
  
    for (let i = 0; i < arrayDeAmigos.length; i++) {
        let amigo = arrayDeAmigos[i];
        let indiceSorteado = Math.floor(Math.random() * listaSorteada.length);
        let amigoSorteado = listaSorteada.splice(indiceSorteado, 1)[0];
  
        let resultado = document.createElement("li");
        resultado.textContent = `${amigo} tirou ${amigoSorteado}`;
        listaSorteio.appendChild(resultado);
    }
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}