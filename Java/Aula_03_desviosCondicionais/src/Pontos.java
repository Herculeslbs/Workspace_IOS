import java.util.Scanner;
public class Pontos {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        String jogador;
        float pontos;

        System.out.println("Digite o nome do Jogador: ");
        jogador = entrada.nextLine();

        System.out.println("Digite os pontos do Jogador: ");
        pontos = entrada.nextFloat();

        if(pontos >= 1000) {
            System.out.println("Parabens voce passou para a segunda fase!!! ");
        }
        if(pontos < 1000) {
            System.out.println("Infelizmente voce nao passou de fase...");
        }

        entrada.close();
    }
}