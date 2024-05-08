const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach(tarefa => card(tarefa))

function card (tarefa) {
    // tem que arrumar isso aqui pra fazer adicionar e div e ficar de acordo com o CSS, ta saindo tudo na horizontal
    // fugindo do grid
    const cardTarefa = `
    <h3 class="title is-4 has-text-white-ter">${tarefa.nome}</h3>
    <p class="has-text-weight-bold has-text-centered has-text-grey-lighter">${tarefa.descricao}</p>
    <br>
    <p class="has-text-weight-bold has-text-centered has-text-danger">R$ ${tarefa.valor}</p>
     `

    const card = document.createElement("div")
    card.classList.add("column", "is-3", "has-text-centered");
    card.id = tarefa.id
    card.innerHTML = cardTarefa
    document.querySelector("#gastos").appendChild(card)
}