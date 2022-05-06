// Criando Function Simple
function alertClick() {
    alert('Você quer um cookie')
    console.log('Você quer um cookie')
}
// Criando Arrow Function
const alertSucesso = () =>{
    alert('Mensagem gerada com sucesso')
    console.log('Mensagem gerada com sucesso')
}
// Criando Object
const notebook = {
    marca: 'Dell',
    modelo: 'Inspiron 14',
    cor: 'Preto',
    peso: '800g',
    bateria:'5000mah',
}
console.log(notebook)

function AnosDias(num1 = 2, num2 = 365){
    return num1 * num2
}
console.log(AnosDias())
