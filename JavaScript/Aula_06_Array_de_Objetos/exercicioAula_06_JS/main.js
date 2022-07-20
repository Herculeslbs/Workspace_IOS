// Array de objetos
const alunos = [
{
firstName: 'Maria',
lastName: 'Lima',
old: 10,
class:'1°A',
note: [10, 8, 6, 5],
address: {
    street: 'Rua do bobos',
    number: 30,
    city: 'São Paulo',
    state: 'SP',
    },

},
{
    firstName: 'João',
    lastName: 'Silva',
    old: 10,
    class:'1°B',
    note: [1, 7, 3, 5],
    address: {
        street: 'Rua do bobos',
        number: 20,
        city: 'São Paulo',
        state: 'SP',
        },
    },
{
    firstName: 'Pedro',
    lastName: 'Santos',
    old: 10,
    class:'1°C',
    note: [2, 10, 6, 0],
    address: {
        street: 'Rua do bobos',
        number: 10,
        city: 'São Paulo',
        state: 'SP',
        },
    },
];
let medias = [
    (alunos[0].note[0]+alunos[0].note[1]+alunos[0].note[2]+alunos[0].note[3])/4,
    (alunos[1].note[0]+alunos[1].note[1]+alunos[1].note[2]+alunos[1].note[3])/4,
    (alunos[2].note[0]+alunos[2].note[1]+alunos[2].note[2]+alunos[2].note[3])/4,
]
console.log(`Média mínima para ser aprovada igual ou maior a 7.`)

console.log(`Aluno(a) ${alunos[0].firstName} ${alunos[0].lastName} com notas ${alunos[0].note} mora em ${alunos[0].address.street}, ${alunos[0].address.number} ${alunos[0].address.city}, ${alunos[0].address.state} e teve a média ${medias[0]}, portando foi aprovado(a).`)

console.log(`Aluno(a) ${alunos[1].firstName} ${alunos[1].lastName} com notas ${alunos[1].note} mora em ${alunos[1].address.street}, ${alunos[1].address.number} ${alunos[1].address.city}, ${alunos[1].address.state} e teve a média ${medias[1]}, portando foi reprovado(a).`)

console.log(`Aluno(a) ${alunos[2].firstName} ${alunos[2].lastName} com notas ${alunos[2].note} mora em ${alunos[2].address.street}, ${alunos[2].address.number} ${alunos[2].address.city}, ${alunos[2].address.state} e teve a média ${medias[2]}, portando foi reprovado(a).`)
