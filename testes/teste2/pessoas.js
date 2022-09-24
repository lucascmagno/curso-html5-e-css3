let div = document.getElementById('idiv')
const pessoas = [
    {nome: "Luck", area: "Front-end"},
    {nome: "Murilo", area: "Back-end"},
    {nome: "Pedro", area: "Full-stack"}
]
div.innerHTML += 'pessoas'
console.table(pessoas)