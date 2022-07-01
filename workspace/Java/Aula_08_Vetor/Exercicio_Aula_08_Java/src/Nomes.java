
import java.util.Scanner;

/*Leia 5 nomes de pessoas e armazene-os em um vetor e imprima
na tela os nomes na ordem inversa a que eles foram inseridos.*/

public class Nomes {
	public static void main (String[]args) {
		
		Scanner entrada = new Scanner(System.in);
        String nomes[] = new String[5];
        
          System.out.println("Digite 5 nomes: ");
          
        for (int i = 0; i < nomes.length; i++) {         
            nomes[i] = entrada.nextLine();     
        }      
        for (int c = 4; c >= 0; c--) {
              System.out.print(" ["+nomes[c]+"] ");
        }
	
	}     
}

