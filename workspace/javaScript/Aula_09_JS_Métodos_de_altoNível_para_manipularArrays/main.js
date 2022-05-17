// Metodo forEach com Arrays
const frutas = ['Maca','Pera','Melancia']
frutas.forEach(minhaFuncao);

function minhaFuncao(index, item){
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
}

// Com Arrow Function
const frutas2 = ['Maca','Pera','Melancia']
frutas2.forEach((index, item)=>{
    console.log(`Indice: ${item}`);
    console.log(`Elemento: ${index}`);
   
});

// Metodo forEach com Array de Objetos
// Forma mais enxuta de escrever funções
const tarefas = [
    {
        id: 1,
        texto:'Aqui vai um texto'
    },
    {
        id: 2,
        texto:'Aqui vai dois textos'
    },
    {
        id: 3,
        texto:'Aqui vai três textos'
    },

];

tarefas.forEach((teste) => console.log(teste.texto))//apenas uma saida no console log, para mais saidas colocar entre chaves

//Metodos map
const numeros = [16, 4, 9, 25]
const newArray = numeros.map(Math.sqrt);

console.log('Array antigo')
console.log(numeros);
console.log('Novo Array');
console.log(newArray);

// Outro exemplo de Map
const mapText = tarefas.map((valor) =>{
    return valor.texto;
})

console.log(mapText);

// Metodo filter()
const idade = [32, 15, 8, 98, 70]

let filtroIdade = idade.filter((idades) => {
    return idades >= 18;
})

console.log(filtroIdade);

// Metodo find()
const meuArray = [
    
    {nome: 'Diego',idade: 12, altura: 120, sexo: 'masculino'},

    {nome: 'Jissara',idade: 15, altura: 170, sexo: 'feminino'},

    {nome: 'Jheniffer',idade: 70, altura: 180, sexo: 'feminino'},
    
];

console.log(
    meuArray.filter((genero) =>{
        return genero.sexo === 'feminino'
    })
);

// Crie um array de objetos com quatro objetos
// e cada objeto tera 4 propriedades
// E retorne o nome de todos os alunos 
// Retorne todos os alunos que tirou nota maior que 6
// Retorne o primeiro aluno que tirou nota menor que 5

const alunos = [
    {
        nome: 'Maria',
        idade: 15,
        turma: '1°C',
        nota: 10,
    },
    {
        nome: 'Joao',
        idade: 15,
        turma: '1°C',
        nota: 4,
    },
    {
        nome: 'Pedro',
        idade: 15,
        turma: '1°C',
        nota: 8,
    },
    {
        nome: 'Maria',
        idade: 15,
        turma: '1°C',
        nota: 7,
    },


];

// Metodo forEach()
alunos.forEach((lista) => console.log(lista.nome))

// Metodo filter()
let filtroNotas = alunos.filter((notas) => {
    return notas.nota >= 6;
})

console.log(filtroNotas);


