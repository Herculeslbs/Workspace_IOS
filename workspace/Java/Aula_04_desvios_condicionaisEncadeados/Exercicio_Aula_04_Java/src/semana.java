/*3) Crie um algoritmo que leia um número de 1 a 7.
imprima o dia da semana correspondente;
assuma que 1 corresponde ao Domingo.*/
import java.util.Scanner;

public class semana {

    public static void main(String[] args) {

        //Escolha - Caso
        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite um número de 1 a 7: ");
        int num = entrada.nextInt();

        switch(num) {
            case 1 :
                System.out.println("Domingo");
                break;
            case 2 :
                System.out.println("Segunda-feira");
                break;
            case 3 :
                System.out.println("Terça-feira");
                break;
            case 4 :
                System.out.println("Quarta-feira");
                break;
            case 5 :
                System.out.println("Quinta-feira");
                break;
            case 6 :
                System.out.println("Sexta-feira");
                break;
            case 7 :
                System.out.println("Sábado-feira");
                break;
            default:
                System.out.println("Opção Inválida!");
                break;
        }
    }

}