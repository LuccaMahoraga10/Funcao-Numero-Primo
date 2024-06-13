function contarVogais(frase) {
    frase = frase.toLowerCase(); // Converter a frase para minúsculas
    const vogais = 'aeiouáéíóúãõàèìòùäëïöüâêîôû';
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            contador++;
        }
    }
    return contador;
}

// Exemplo de uso:
const frase = "Esta é uma frase de exemplo";
console.log("Número de vogais na frase:", contarVogais(frase));
