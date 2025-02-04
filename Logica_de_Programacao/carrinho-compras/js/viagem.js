function calcularCustoViagem(distancia, eficiencia, precoGasolina, velocidadeMedia) {
    let tempoTotal = distancia / velocidadeMedia;
    let consumoDeCombustivel = distancia / eficiencia;
    let custoTotal = consumoDeCombustivel * precoGasolina;

    return custoTotal;
}

calcularCustoViagem(20, 10, 6.29, 80);