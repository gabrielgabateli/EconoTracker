document.getElementById('gasto-maximo').addEventListener('click', () => {
    const valorMaximo = prompt('Insira o valor máximo permitido:')
    if (valorMaximo !== null) {
        const numero = parseInt(valorMaximo)
        if (!isNaN(numero) && Number.isInteger(numero)) {
            document.getElementById('valor-paragrafo').textContent = `R$ ${numero}`;
            
        } else {
            alert('Por favor, insira um número inteiro válido.')
        }
    }
});