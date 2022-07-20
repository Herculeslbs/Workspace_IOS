import java.util.Scanner;

public class pontoFlutuante {

    public static void main(String[] args) {
        // 2- Faça um programa que entre com três números e coloque em ordem crescente.

        Scanner entrada = new Scanner(System.in);

        float n1, n2, n3;

        System.out.println("Digite o 1° número flutuante: ");
        n1 = entrada.nextFloat();

        System.out.println("Digite o 2° número flutuante: ");
        n2 = entrada.nextFloat();

        System.out.println("Digite o 3° número flutuante: ");
        n3 = entrada.nextFloat();

        if(n1 > n2 && n1 > n3 && n2 > n3) {
            System.out.println("Ordem decrescente: " + n1 + " - " + n2 + " - " + n3);
        }
        if(n1 > n3 && n1 > n2 && n3 > n2) {
            System.out.println("Ordem decrescente: " + n1 + " - " + n3 + " - " + n2);
        }
        if(n2 > n1 && n2 > n3 && n1 > n3) {
            System.out.println("Ordem decrescente: " + n2 + " - " + n1 + " - " + n3);
        }
        if(n2 > n1 && n2 > n3 && n3 > n1) {
            System.out.println("Ordem decrescente: " + n2 + " - " + n3 + " - " + n1);
        }
        if(n3 > n1 && n3 > n2 && n1 > n2) {
            System.out.println("Ordem decrescente: " + n3 + " - " + n1 + " - " + n2);
        }
        if(n3 > n1 && n3 > n2 && n2 > n1) {
            System.out.println("Ordem decrescente: " + n3 + " - " + n2 + " - " + n1);
        }
    }

}