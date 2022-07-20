/*Faça um algoritmo que leia 10 números inteiros e imprima:
quantos são pares;
e quantos são ímpares.*/
import java.util.Scanner;

public class ParImp {
  public static void main(String[] args) throws InterruptedException {
	Scanner entrada = new Scanner(System.in);
	  int par = 0, impar = 0, c = 1;
	    while( c <= 10) {
		  c++;
		   System.out.print("Digite um número inteiro: ");
		     int num = entrada.nextInt();
		     	System.out.println();
		     if(num % 2 == 0) {
				par++;
			 }else {
				impar++;
			  }
		}
	    System.out.println("Calculando...");
	    Thread.sleep(2000);
		System.out.println("Total de números pares: " + par + " Total de números impares: " + impar);
  }
}
