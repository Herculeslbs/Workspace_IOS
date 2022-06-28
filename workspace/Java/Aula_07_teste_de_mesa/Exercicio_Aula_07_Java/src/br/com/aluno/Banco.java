/*Início do projeto banco...
Crie um pacote chamado com.br.aluno, dentro do pacote crie uma classe
chamada Banco
Crie uma classe main e dentro da classe você vai desenvolver o seguinte
código:
No momento em que você executar a sua aplicação no console terá que
aparecer o nome do seu banco e as três opções de conta que o usuário
vai selecionar. Os tipos de contas são:
1 - Conta corrente
2 - Conta poupança
3 - Conta estudante

Criar uma validação onde o usuário vai selecionar qual o tipo
de conta bancária ele deseja acessar, se ele selecionar a
conta corrente você terá que apresentar no console a
mensagem Você selecionou a conta Corrente, se ele
selecionar a conta poupança deverá imprimir no console a
mensagem Você selecionou a conta poupança, se o usuário
selecionar a conta estudante você deverá imprimir a
mensagem Você selecionou a conta Estudante e no final de
cada mensagem você deverá imprimir uma mensagem Você
está no banco "Nome do seu banco".

Logo após o usuario selecionar o seu banco e você
imprimir a mensagem acima, você deve criar uma
funcionalidade (Pode utilizar for, while ou Do-While) para
perguntar ao usuario se ele quer refazer a operação de
escolher novamente o banco, caso a resposta do usuario for
Sim você devera retormar o fluxo e perguntar novamente
qual o banco do usuario, caso ele selecione não o fluxo
finaliza.
 */
package br.com.aluno;

import java.util.Scanner;

public class Banco {
    public static void main (String[]args)throws InterruptedException{
        Scanner entrada = new Scanner(System.in);
        System.out.println("===== \t Seja Bem vindo\t =======");
        Thread.sleep(1000);
        System.out.println("=====  \t Banco Safra \t =======");
        Thread.sleep(1000);
        System.out.println("===== Escolha uma opção  =======");
        Thread.sleep(2000);
        System.out.println("|\t   1 - Conta corrente \t   |" );
        System.out.println("|\t   2 - Conta poupança \t   |" );
        System.out.println("|\t   3 - Conta estudante \t   |" );
        int opcao = entrada.nextInt();
        System.out.println("|-Você selecionou a conta Corrente");
        if(opcao == 1){
            System.out.println("Você selecionou a conta Corrente");
            System.out.println("Você está no Banco Safra");
        }



    }

}
