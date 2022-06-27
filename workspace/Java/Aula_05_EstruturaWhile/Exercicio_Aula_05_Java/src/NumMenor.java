import java.util.Scanner;

/*Faça um algoritmo que leia dez números inteiros e mostre o
menor entre eles.*/
public class NumMenor {
  public static void main(String[] args) throws InterruptedException {
		Scanner entrada = new Scanner(System.in);
		  int num, menorNum = 999999999, c = 0;
		    while( c < 10) {
			  c++;
			   System.out.print("Digite um número inteiro: ");
			       num = entrada.nextInt();
			     	System.out.println();
			     	if(num < menorNum) {
			     		menorNum = num;
			     	}
           	 }
		      System.out.println("Calculando...");
		      Thread.sleep(1000);
		      System.out.println("O menor número é: " + menorNum);
   }
	
}
