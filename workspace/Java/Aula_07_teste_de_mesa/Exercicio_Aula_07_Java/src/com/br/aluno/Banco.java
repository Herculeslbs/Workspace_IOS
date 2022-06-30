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
package com.br.aluno;


import java.util.Scanner;

public class Banco {
    

	public static void main (String[]args)throws InterruptedException{
        Scanner entrada = new Scanner(System.in);
         
        char decisao = 's';
        
        while(decisao == 's' || decisao == 'S') {
        System.out.println("===== \t Seja Bem vindo\t =======");
        Thread.sleep(2000);
        System.out.println("=====  \t Banco Safra \t =======");
        Thread.sleep(2000);
        System.out.println();
        System.out.println("====== Escolha uma opção =======");
        Thread.sleep(2000);
        System.out.println("|  \t1 - Conta corrente     |" );
        System.out.println("|  \t2 - Conta poupança     |" );
        System.out.println("|  \t3 - Conta estudante    |" );
        System.out.println();
        System.out.print("->");
        int opcao = entrada.nextInt(); 
       
        System.out.println("|-"+opcao+"-|");
        System.out.println();
        
        if(opcao == 1) {
        	Thread.sleep(2000);
            System.out.println("Você selecionou a conta Corrente");
            System.out.println("Você está no Banco Safra");
        }    
        if(opcao == 2) {
        	Thread.sleep(2000);
        	System.out.println("Você selecionou a conta Poupança");	
        	System.out.println("Você está no Banco Safra");
        }	
        if(opcao == 3) {
        	Thread.sleep(2000);
          	System.out.println("Você selecionou a conta Estudante");	
           	System.out.println("Você está no Banco Safra");	
        }	
        
        System.out.println();
        Thread.sleep(2000);
        System.out.println("Você deseja realizar outra operação.");
        System.out.println("Digite 'S' para sim |Digite 'N' para não");
        System.out.print("->");
        decisao = entrada.next().charAt(0);
        System.out.println();
        if(decisao == 'n' || decisao == 'N') {
        	System.out.println("===== \t Obrigado\t =======");
            Thread.sleep(2000);
            System.out.println("=====  \t Banco Safra \t =======");
         }
      }
        entrada.close();
   }
}
