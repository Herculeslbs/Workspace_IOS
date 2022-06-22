import java.util.Scanner;

public class maiorNum {

    public static void main(String[] args) {
        //1- Faça um programa que receba três inteiros e diga qual deles é o maior.

        Scanner entrada = new Scanner(System.in);

        int n1, n2, n3;

        System.out.println("Digite o 1° número inteiro: ");
        n1 = (int) entrada.nextDouble();

        System.out.println("Digite o 2° número inteiro: ");
        n2 = (int) entrada.nextDouble();

        System.out.println("Digite o 3° número inteiro: ");
        n3 = (int) entrada.nextDouble();

        if(n1 > n2 && n1 > n3) {
            System.out.println("Maior número digtado: " + n1);
        }

        if(n2 > n1 && n2 > n3) {
            System.out.println("Maior número digtado: " + n2);
        }
        if(n3 > n1 && n3 > n2) {
            System.out.println("Maior número digtado: " + n3);
        }
        else if(n1 == n2 && n1 == n3 && n2 == n3 ) {
            System.out.println("Números com os mesmos valores");
        }

    }

}