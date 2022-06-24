import java.util.Scanner;

public class ExemploWhile01 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int i = 0, idade;
        while (i < 5){
            System.out.println("Digite sua idade: ");
            idade = entrada.nextInt();
            i ++;
            if (idade >= 18) {
                System.out.println("Sua idade é "+idade+". Você é maior de idade.");
            } else {
                System.out.println("Sua idade é "+idade+". Você é menor de idade.");
            }
        }
    }
}

