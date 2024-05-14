document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("form")

    const tarefa = {
        id: "id_" + new Date().getTime,
        nome: form.nome.value,
        descricao: form.descricao.value,
        valor: form.valor.value
    }

    console.log(tarefa.nome)
    
    validar(tarefa)
    
    salvar(tarefa)

    atualizarBarra();
    
    console.log('Cadastrado')
})

function salvar(tarefa) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas)) 
}


function validar(tarefa) {
    limparErros ()

    let semErros = true;
    if (tarefa.nome.trim() == "") {
        document.querySelector("#nome").classList.add("is-danger")
        document.querySelector("#nome-erro").innerText = "O nome é obrigatório."
        semErros = false;
    }

    if (tarefa.descricao.trim() == "") {
        document.querySelector("#descricao").classList.add("is-danger")
        document.querySelector("#descricao-erro").innerText = "A descrição é obrigatória."
        semErros = false;
    }

    if (tarefa.valor.trim() == "") {
        document.querySelector("#valor").classList.add("is-danger")
        document.querySelector("#valor-erro").innerText = "O valor é obrigatório."
        semErros = false;
    } else if (tarefa.valor <= 0) {
        document.querySelector("#valor").classList.add("is-danger")
        document.querySelector("#valor-erro").innerText = "O valor não pode ser negativo."
        semErros = false;
    }

    if (semErros) {
        document.querySelector("#confirmacao-cadastro").innerText = "Cadastro realizado com sucesso!";
    }
}

function limparErros () {

    const campos = document.querySelectorAll("input.is-danger, span.is-danger")
    console.log(campos)
  
    campos.forEach((input) => {input.classList.remove("is-danger")})

    document.querySelectorAll("span.has-text-danger").forEach((span) => { span.innerText = ""})
}

function atualizarBarra() {
    // Seleciona o elemento de entrada do tipo email
    const inputEmail = document.getElementById('valorEmail');

    // Seleciona o elemento <progress> pelo ID
    const progressBar = document.getElementById('barra-progresso');

    // Adiciona um ouvinte de evento de mudança de entrada
    inputEmail.addEventListener('change', function() {
        // Obtém o valor digitado pelo usuário
        const novoValor = parseFloat(inputEmail.value); // Converte para número

        // Verifica se o valor é válido
        if (!isNaN(novoValor) && novoValor >= 0 && novoValor <= 100) {
            // Atualiza o valor do progresso
            progressBar.value = novoValor;
        } else {
            alert('Por favor, insira um valor entre 0 e 100.');
        }
    });
}

// Chama a função para inicializar o ouvinte de eventos
