import java.util.Scanner;

/*Leia dois vetores: A (de tamanho 4) e B (de tamanho 7).
Construa um terceiro vetor que seja a junção de A e B
colocar os elementos de A, e em sequência, os elementos de B.*/

public class Vetores {
	public static void main (String[]args) {
		
		Scanner entrada = new Scanner (System.in);
		
		int vetorA[] = new int[4];
		int vetorB[] = new int[7];
		int vetorC[] = new int[11];

		System.out.println("Digite 4 números inteiros:");
		for(int i = 0; i < vetorA.length; i++) {
			vetorA[i] = entrada.nextInt();
			vetorC[i] = vetorA[i];
		}
		
		System.out.println();
		
		System.out.println("Valores digitados:\n");
		
		for(int c = 0; c < vetorA.length; c++) {
			System.out.print("[" + vetorA[c] + "] ");
		}
		
		System.out.println("\n");
		
		System.out.println("Digite 7 números inteiros:");
		for(int i = 0; i < vetorB.length; i++) {
			vetorB[i] = entrada.nextInt();
			vetorC[i+4] += vetorB[i];
		}
		
		System.out.println();
		
		System.out.println("Valores digitados:\n");
		
		for(int c = 0; c < vetorB.length; c++) {
			System.out.print("[" + vetorB[c] + "] ");
		}
		
		System.out.println("\n");
		System.out.println("Junção dos valores digitados:\n");
		
		for(int i = 0; i < vetorC.length; i++) {
			System.out.print("[" + vetorC[i] + "] ");
   		 }	
	}
}
