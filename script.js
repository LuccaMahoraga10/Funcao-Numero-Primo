function aumentarBalao() {
    var balao = document.getElementById('balao');
    var tamanhoAtual = parseInt(balao.style.width) || 100;
    var novoTamanho = tamanhoAtual + 30;
    
    var animacao = setInterval(function() {
        balao.style.width = novoTamanho + 'px';
        balao.style.height = novoTamanho + 'px';
        
        novoTamanho += 30;
        
        if (novoTamanho >= 500) {
            clearInterval(animacao);
            balao.src = 'explosao.png'; // Altere para o nome do seu arquivo de explosão
        }
    }, 600);
    
    document.getElementById('bomba').removeAttribute('onclick'); // Remove o evento de clique para evitar crescimento repetido
}
