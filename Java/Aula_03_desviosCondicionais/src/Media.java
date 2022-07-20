import java.util.Scanner;
public class Media {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String aluno;
        float nota1, nota2, media;

        System.out.println("Digite o nome do Aluno: ");
        aluno = entrada.nextLine();

        System.out.println("Digite a primeira nota do Aluno: ");
        nota1 = entrada.nextFloat();

        System.out.println("Digite a segunda nota do Aluno: ");
        nota2 = entrada.nextFloat();

        media = (nota1 + nota2) / 2;

        System.out.println("Aluno: " + aluno + " Media: " + media);

        entrada.close();
    }
}