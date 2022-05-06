//Estrutura de uma função 
/*
function NomeDaFuncao(valor1,valor2){
    return valor1 * valor2
}
*/

//Funcoes
function AddNums(num1 = 2, num2 = 5){
    return num1 + num2
}

console.log(AddNums())
/*pode ser feito desta maneira*/
/*let = AddNums(10,11);
console.log(x)*/
console.clear();

// Criando Arrow Function
const hello = (primeiro = 2, segundo = 2) => {
    return primeiro * segundo
}
console.log(hello())

const somaAddNums = (num1 = 2, num2 = 5) => {
    return num1 + num2
}

//Criando Objetos
const aluno = {
    primeiroNome: 'Mateus',
    segundoNome: 'lost',
    idade: '19',
}
console.clear();
//Evento onload para mostrar
//mensagem enquanto estiver
//carregando a pagina web
const boasVindas = () =>{
    alert('Bem vindo a nossa página Otário')
    console.log('Bem vindo a nossa página Otário')
}
function eventClick() {
    console.log('Você clicou aqui Otário')
}