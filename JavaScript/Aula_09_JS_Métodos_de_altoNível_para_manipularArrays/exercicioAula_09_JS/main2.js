alert(`Conferir Console`);

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
alunos.forEach((lista) => console.log(lista.nome,lista.ano));

console.log(`Retorne apenas os alunos do 2° ano`);
// Metodo filter()
let filtroTurma = alunos.filter((filtroTurma) => {
    return filtroTurma.ano.match ('2°'); 
});
filtroTurma.forEach((i)=> console.log(i.nome));



console.log('Mostrando se a turma passou ou não passou:')

const notaAlunos = alunos.map((notaValores) => {return notaValores.nota}).reduce(calcularNotas)

function calcularNotas(nota1, nota2) {
    return nota1 + nota2
}

function mediaSala(totalNotas) {
    if (totalNotas / 6 >= 7) {
        console.log('Turma aprovada, pois a nota é maior ou igual a 7')
    }

    else {
        console.log('Turma reprovada, pois a nota é menor que 7')
    }
}

mediaSala(notaAlunos)