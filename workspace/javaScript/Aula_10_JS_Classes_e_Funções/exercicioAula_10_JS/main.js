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
    getNiver(dataHoje){
        let anoPessoa = this.dataNascimento.getFullYear()
        let mesPessoa = this.dataNascimento.getMonth()
        let diaPessoa = this.dataNascimento.getDate()
        if (mesPessoa<mesAtual){
            let fezAnv = true
        }
        else if (mesPessoa==mesAtual&&diaPessoa<diaAtual){
            let fezAnv = true
        }
        else if (mesPessoa>mesAtual){
            let fezAnv = false
        }

    }
}

let dataHoje = new Date();
let pessoa1 = new Pessoa('Joao','1997-09-14');

let anoAtual = dataHoje.getFullYear()
let mesAtual = dataHoje.getMonth()
let diaAtual = dataHoje.getDate()

let pessoas = Array(10)

pessoas[0]=new Pessoa('Joao','1997-10-14');
pessoas[1]=new Pessoa('Maria','1996-09-19');
pessoas[2]=new Pessoa('Pedro','1995-08-11');
pessoas[3]=new Pessoa('Cleber','1994-02-06');
pessoas[4]=new Pessoa('Luana','2000-05-23');
pessoas[5]=new Pessoa('Angelica','2002-01-21');
pessoas[6]=new Pessoa('Mateus','2004-03-20');
pessoas[7]=new Pessoa('Vitoria','1997-10-06');
pessoas[8]=new Pessoa('Breno','1998-11-05');
pessoas[9]=new Pessoa('Samuel','1999-12-01');

//for (i=0;i<=pessoas.length;i++){
  //  console.log(pessoas[i].getIdade()); 

//}
//console.log(pessoas[0].getIdade());