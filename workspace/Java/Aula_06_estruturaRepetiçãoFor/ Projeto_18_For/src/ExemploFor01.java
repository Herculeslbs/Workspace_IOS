import java.util.Scanner;

public class ExemploFor01 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int i, idade;
        for (i = 0; i < 5; i++) {
            System.out.println("Digite sua idade: ");
            idade = entrada.nextInt();
            if (idade >= 18) {
                System.out.println("Sua idade é "+idade+". Você é maior de idade.");
            } else {
                System.out.println("Sua idade é "+idade+". Você é menor de idade.");
            }
        }
    }
}