alert(`Conferir Console`)

const alunos = [
    {
        nome: 'Ana',
        idade: 17,
        nota: 8,
        ano: '2°B'
    },
    {
        nome: 'Bruno',
        idade: 16,
        nota: 6,
        ano: '2°C'
    },
    {
        nome: 'Veronica',
        idade: 16,
        nota: 9,
        ano: '2°C'
    },
    {
        nome: 'Marta',
        idade: 15,
        nota: 5,
        ano: '3°C'
    },
    {
        nome: 'Brenno',
        idade: 19,
        nota: 6,
        ano: '3°C'
    },
    {
        nome: 'Maria',
        idade: 14,
        nota: 4,
        ano: '1°F'
    },
];

//Retorne somente o nome e o ano dos alunos
//Retorne apenas os alunos do segundo ano

//Faça a soma de todas as notas dos alunos e retorne a média informando se os alunos ficaram acima da média que é 7

// Metodo forEach()
alunos.forEach(minhaFuncao);

function minhaFuncao(){
    console.log(`Nome: ${alunos.nome}`);
    console.log(`Ano: ${alunos.ano}`);
}
