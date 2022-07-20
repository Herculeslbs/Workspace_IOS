import java.util.Scanner;

/*Criar e ler uma matriz 4 x 4, contar e imprimir quantos valores
maiores que 10 ela possui. Imprimir os elementos da matriz.*/
public class NumMaior10 {

	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		int matriz[][] = new int[4][4];
        
        int c = 0;

        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.println("Digite um número para a posição [" + i + "][" + j + "]: ");
                matriz[i][j] = entrada.nextInt();
            }

        }

        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print("["+matriz[i][j]+"]" + "\t");
            }
            System.out.println("");

        }


        
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] > 10) {
                    c++;
                }
            }
        }
        System.out.println("Quantidade de números maiores do que 10 são: " + c);

        entrada.close();

	}

}
