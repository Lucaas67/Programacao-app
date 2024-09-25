//Faça um sorteador de números para a loteria

function gerarNumerosAleatorios(quantidade, min, max) {
    const numeros = new Set();
    while (numeros.size < quantidade) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.add(numeroAleatorio);
    }
    return Array.from(numeros).sort((a, b) => a - b);
}

function sortearNumeros(tipoDeJogo) {
    switch (tipoDeJogo.toLowerCase()) {
        case 'quina':
            return gerarNumerosAleatorios(5, 1, 80);
        case 'mega sena':
            return gerarNumerosAleatorios(6, 1, 60);
        case 'lotofacil':
            return gerarNumerosAleatorios(15, 1, 25);
        default:
            return 'Tipo de jogo inválido. Escolha entre "quina", "mega sena" ou "lotofacil".';
    }
}

const tipoDeJogo = prompt("Digite o tipo de jogo (quina, mega sena, lotofacil):");
const numerosSorteados = sortearNumeros(tipoDeJogo);
console.log(`Números sorteados para ${tipoDeJogo}: ${numerosSorteados}`);
