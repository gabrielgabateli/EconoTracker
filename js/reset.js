function limparLocalStorage() {
    localStorage.clear();
}

function limparElementos() {
    const paragrafo = document.getElementById('valor-paragrafo');
    if (paragrafo) {
        paragrafo.textContent = 'R$ 0';
    }

    const progressBar = document.getElementById('barra-progresso');
    if (progressBar) {
        progressBar.value = 0;
    }

    const divGastos = document.getElementById('gastos');
    if (divGastos) {
        divGastos.innerHTML = '';
    }
}

function adicionarEventoLimparLocalStorage() {
    const botaoReset = document.getElementById('botao-reset');
    if (botaoReset) {
        botaoReset.addEventListener('click', function() {
            limparLocalStorage();
            limparElementos();
        });
    }
}

adicionarEventoLimparLocalStorage();
