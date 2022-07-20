import java.util.Random;
import java.util.Scanner;

/* Leia 10 valores inteiros e armazene-os em um vetor e depois
imprima o menor valor, o maior valor e a média dos valores. */

public class ValorNum {
	public static void main (String[]args) {
		
		Scanner entrada = new Scanner(System.in);
                
        int vetor[] = new int[10];
        
        int num1 = 0, num = 999999999;
        double media = 0;
        System.out.println("Digite 10 números inteiros:");
        for(int i = 0; i < vetor.length; i++){
            vetor[i] = entrada.nextInt();
            
            if(vetor[i] < num)
                num = vetor[i];
            
            if(vetor[i] > num1)
                num1 = vetor[i];
            
            media += vetor[i];
        }
                       
		 int vetor1[] = new int[vetor.length];
		 
		 for(int i = 0; i < vetor.length; i++) 
			 vetor1[i] = vetor[i];  
		
   		 for(int i = 0; i < vetor.length; i++) {
			System.out.print(" [" + vetor1[i] + "] "  );
   		 }	
        System.out.println("\n");
        System.out.println("O menor número é: " +num);
        System.out.println("O maior número é: " +num1);
        System.out.println("A média dos numeros é: " + media/vetor.length);
	
	}     
}
