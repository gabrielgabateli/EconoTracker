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
    const inputEmail = document.getElementById('valorEmail');

    const progressBar = document.getElementById('barra-progresso');

    inputEmail.addEventListener('change', function() {
        const novoValor = parseFloat(inputEmail.value)

        if (!isNaN(novoValor) && novoValor >= 0 && novoValor <= 100) {
            progressBar.value = novoValor
        } else {
            alert('Por favor, insira um valor entre 0 e 100.')
        }
    });
}

