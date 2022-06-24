/*Crie um programa que leia um numero informado pelo o usuario e exiba a tabuada,
raiz quadrada, se é par ou impar.
 */
import java.util.Scanner;

public class InfoNum {
    public static void main (String[]args){
        Scanner entrada = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int i, num = entrada.nextInt();

        for(i = 0; i <= 10; i++){
            System.out.print(i + " x " + num + " = ");
            System.out.println(i * num);
        }
        if(num % 2 == 0)
            System.out.println(num + " é par!");
        else
            System.out.println(num + " é impar!");

        double raiz = Math.sqrt(num);
        System.out.printf("Raiz quadrada de: " + num + " = %.2f %n" , raiz);
    }
}
