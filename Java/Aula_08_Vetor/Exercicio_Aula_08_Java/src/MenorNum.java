import java.util.Random;
import java.util.Scanner;

/*Sorteie 10 números inteiros entre 1 e 10 e armazene em vetor
Percorra o vetor e encontre o menor elemento.*/

public class MenorNum {
	public static void main (String[]args) {
			
		Scanner entrada = new Scanner(System.in);
        Random rand = new Random();
        
        int num = 999999999;
        int vetor[]= new int[10];
        
        for(int i = 0; i < vetor.length; i++){
            vetor[i] = rand.nextInt(10)+1;
            if(vetor[i] < num)
                num = vetor[i];
            System.out.print(" ["+vetor[i]+"] ");       
        }
        System.out.println("\n");
        System.out.print("O menor número é: " +num);
	
	}     
}
