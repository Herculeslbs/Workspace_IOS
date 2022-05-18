// Classes
class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }
    getIdade(dataHoje) {
        let idade = dataHoje.getFullYear()-this.dataNascimento.getFullYear();
        if (dataHoje.getMonth()<this.dataNascimento.getMonth()) idade--;
        else if (dataHoje.getMonth() == this.dataNascimento.getMonth() &&dataHoje.getDate() < this.dataNascimento.getDate()) idade--;
        return idade;
    }
}
let dataHoje = new Date();
let pessoa1 = new Pessoa('Joao','1997-09-14');
console.log(pessoa1.getIdade(dataHoje)); 