alert(`Conferir Console`);

//Criando classe date para pegar a data de hoje
date = new Date();
    dataArray = Array(3);
    dataArray[0] = date.getFullYear();
    dataArray[1] = date.getMonth() + 1;
    dataArray[2] = date.getDate();

//declarando variáveis globais
idade = 0
niver = 0
i = 0

//criando classe pessoa
class pessoa{
    constructor(nome, dataNascimento){
        this.nome = nome; //criando atributo nome
        this.dataNascimento = new Date(dataNascimento); //criando atributo dataNascimento e recebendo a data de hoje
        this.idade = idade; //criando atributo idade
    };
    getIdade(){ //método para pegar a idade da pessoa
        this.dataNascimentoArray = Array(3); //criando array dataNascimento de 3 espaços
        this.dataNascimentoArray[0] = this.dataNascimento.getFullYear(); //adicionando o atributo dataNascimento que recebe o ano ao array no index0
        this.dataNascimentoArray[1] = this.dataNascimento.getMonth() +1; //adicionando o atributo dataNascimento que recebe o mes ao array no index1
        this.dataNascimentoArray[2] = this.dataNascimento.getDate(); //adicionando o atributo dataNascimento que recebe o dia ao array no index2
        
        if (this.dataNascimentoArray[1] < dataArray[1]){ //verificando se o mes que a pessoa faz aniversário é menor que o mes atual
            idade = dataArray[0] - this.dataNascimentoArray[0]; //subtraindo o ano atual pelo nascimento para obter a idade da pessoa
        }
        else if(this.dataNascimentoArray[1] == dataArray[1] && this.dataNascimentoArray[2] <= dataArray[2]){ //verificando se a pessoa faz aniversário no mes atual E se ela fez aniversário em um dia que ja passou do mês atual
            idade = dataArray[0] - this.dataNascimentoArray[0]; //subtraindo o ano atual pelo nascimento para obter a idade da pessoa
        }
        else if(this.dataNascimentoArray[1] >= dataArray[1]){ //verificando se a pessoa faz aniversário depois do mes atual
            idade = dataArray[0] - this.dataNascimentoArray[0] -1; //subtraindo o ano atual pelo nascimento para obter a idade da pessoa, o -1 foi usado porque a pessoa ainda não fez aniversário, logo, ela permananece com a mesma idade
        };
        return idade;
    };
    mostrarConsole(){ //método para mostrar o resultado no console
        for(i; i<pessoas.length; i++){
            console.log(`${pessoas[i].nome} tem ${pessoas[i].getIdade()} anos e ${pessoas[i].niver() ? 'já fez aniversário' : 'ainda não fez aniversário'} esse ano.`)
                          //nome da pessoa          //idade da pessoa               //se fez aniversário ou não
            console.log('\n') //espaçamento para não ficar tudo grudado no console
        }
    }
};

//criando array de 10 espaços
pessoas = Array(10);

//inserindo as informações no array
pessoas[0] = new pessoa('Joao', '1997-10-14');
pessoas[1] = new pessoa('Maria', '1996-09-19');
pessoas[2] = new pessoa('Pedro', '1995-08-11');
pessoas[3] = new pessoa('Cleber', '1994-02-06');
pessoas[4] = new pessoa('Luana', '2000-05-23');
pessoas[5] = new pessoa('Angelica', '2002-01-21');
pessoas[6] = new pessoa('Mateus', '2004-03-20');
pessoas[7] = new pessoa('Vitoria', '1997-10-06');
pessoas[8] = new pessoa('Breno', '1998-11-05');
pessoas[9] = new pessoa('Samuel', '1999-12-01');

/* 
classe.prototype.nomeMétodo = function(){}
*/
//adicionando o método niver pelo prototype para verificar se a pessoa fez aniversário ou vai fazer
pessoa.prototype.niver = function (){ //declarando o método niver no prototype
    if (this.dataNascimentoArray[1] < dataArray[1]){ //verificando se o mes que a pessoa faz aniversário é menor que o mes atual
        niver = true //declarando verdadeiro se a pessoa ja fez aniversário
    }
    else if(this.dataNascimentoArray[1] == dataArray[1] && this.dataNascimentoArray[2] <= dataArray[2]){ //verificando se a pessoa faz aniversário no mes atual E se ela fez aniversário em um dia que ja passou do mês atual
        niver = true //declarando verdadeiro se a pessoa ja fez aniversário no mes atual
    }
    else if(this.dataNascimentoArray[1] >= dataArray[1]){ //verificando se a pessoa faz aniversário depois do mes atual
        niver = false //declarando falso se a pessoa ainda vai fazer aniversário
    };
    return niver;
};

pessoas[0].mostrarConsole()