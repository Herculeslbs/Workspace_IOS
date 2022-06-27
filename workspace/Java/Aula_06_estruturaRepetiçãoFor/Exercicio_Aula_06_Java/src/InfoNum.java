/*Crie um programa que leia um numero informado pelo o usuario e exiba a tabuada,
raiz quadrada, se é par ou impar.
 */
import java.util.Scanner;

public class InfoNum {
    public static void main (String[]args) throws InterruptedException{
        Scanner entrada = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int i, num = entrada.nextInt();
        System.out.println("Calculando...");
	    Thread.sleep(1000);
	    System.out.println();
        for(i = 0; i <= 10; i++){
        	Thread.sleep(500);
            System.out.print(i + " x " + num + " = " + i * num);
            System.out.println();
        }
        System.out.println();
        if(num % 2 == 0)
            System.out.println(num + " é par!");
        else
            System.out.println(num + " é impar!");
        System.out.println();
        double raiz = Math.sqrt(num);
        System.out.printf("Raiz quadrada de: " + num + " = %.2f %n" , raiz);
    }
}
