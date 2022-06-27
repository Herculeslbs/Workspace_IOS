/* Faça um algoritmo que imprima a tabuada do 5.*/
import java.util.Scanner;

public class Tab {
  public static void main(String[] args) throws InterruptedException {
	Scanner entrada = new Scanner(System.in);
	  System.out.print("Digite o número multiplicador da Tabuada: ");
		int num = entrada.nextInt();
		  System.out.println();
		int result = 0, c = 0;
		while(c  < 10) {
		  c++;
		  Thread.sleep(500);
		   if(c <= 10) {
			  result = num * c;
			   System.out.println(num + " X " + c + " = " + result);
		   }
		}
		
	}

}
