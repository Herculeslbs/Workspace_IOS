import java.util.Scanner;
public class parImpar {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int numeros;

        System.out.println("Digite um numero: ");
        numeros = entrada.nextInt();

        if(numeros % 2 == 0) {
            System.out.println("Voce digitou " + numeros + " Este numero e par!");
        }
        else {
            System.out.println("Voce digitou " + numeros + " Este numero e impar!");
        }

        entrada.close();
    }
}