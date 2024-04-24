const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach(tarefa => card(tarefa))

function card (tarefa) {
    const cardTarefa = `
    <div class="column is-3 has-text-centered">
    <h3 class="title is-4 has-text-white-ter">Academia</h3>
    <p class="has-text-weight-bold has-text-centered has-text-grey-lighter">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem minus, reiciendis deserunt nam ducimus quisquam asperiores molestias, laborum aspernatur laudantium deleniti doloremque provident saepe quod et nulla totam, accusamus aut?</p>
    <br>
    <p class="has-text-weight-bold has-text-centered has-text-danger">R$ 100</p>
    </div>
     `

    const card = document.createElement("div")
    card.innerHTML = cardTarefa
    document.querySelector("#gastos").appendChild(card)
}