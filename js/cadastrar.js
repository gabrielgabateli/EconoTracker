document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("form")

    const tarefa = {
        nome: form.nome.value,
        descricao: form.descricao.value,
        valor: form.valor.value
    }

    console.log(tarefa.nome)
    
    validar(tarefa)
    
    
    console.log('Cadastrado')    
})

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
    // tem que iterar sobre o array que o querySelectorAll retorna
    document.querySelectorAll("input .is-danger, span .is-danger").classList.remove("is-danger")
}