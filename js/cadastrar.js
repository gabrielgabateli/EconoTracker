document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("form")

    const tarefa = {
        nome: form.nome.value,
        descricao: form.descricao.value,
        valor: form.valor.value
    }

    console.log(tarefa.nome)
    
    validar(tarefa)
    
    salvar(tarefa)
    
    console.log('Cadastrado')    
})

function salvar(tarefa) {
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.push(tarefa)
    localStorage.setItem("tarefas", JSON.stringify(tarefas)) 
}


function validar(tarefa) {
    limparErros ()

    if (tarefa.nome.trim() == "") {
        document.querySelector("#nome").classList.add("is-danger")
        document.querySelector("#nome-erro").innerText = "O nome é obrigatório."
    }

    if (tarefa.descricao.trim() == "") {
        document.querySelector("#descricao").classList.add("is-danger")
        document.querySelector("#descricao-erro").innerText = "A descrição é obrigatória."
    }

    if (tarefa.valor.trim() == "") {
        document.querySelector("#valor").classList.add("is-danger")
        document.querySelector("#valor-erro").innerText = "O valor é obrigatório."
    } else if (tarefa.valor <= 0) {
        document.querySelector("#valor").classList.add("is-danger")
        document.querySelector("#valor-erro").innerText = "O valor não pode ser negativo."
    }

}

function limparErros () {

    const campos = document.querySelectorAll("input.is-danger, span.is-danger")
    console.log(campos)
  
    campos.forEach((input) => {input.classList.remove("is-danger")})

    document.querySelectorAll("span.has-text-danger").forEach((span) => { span.innerText = ""})
}