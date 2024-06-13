function gerarCombinações(letra1, letra2, letra3) {
    const combinacoes = [];
    
    // Combinações de uma letra
    combinacoes.push(letra1);
    combinacoes.push(letra2);
    combinacoes.push(letra3);
    
    // Combinações de duas letras
    combinacoes.push(letra1 + letra2);
    combinacoes.push(letra1 + letra3);
    combinacoes.push(letra2 + letra3);
    
    // Combinação de três letras
    combinacoes.push(letra1 + letra2 + letra3);
    
    return combinacoes;
}
const letra1 = 'a';
const letra2 = 'b';
const letra3 = 'c';
const resultado = gerarCombinações(letra1, letra2, letra3);
console.log("Combinações únicas:", resultado);
