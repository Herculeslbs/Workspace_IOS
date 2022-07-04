import java.util.Random;

/*Gere uma matriz de 100x100 elementos inteiros positivos
menores ou iguais a 100.
- Imprimir a matriz gerada.
- Percorrer e matriz e substituir os elementos ímpares por -1 e os
pares por 1.
- Imprimir a matriz após a substituição.*/
public class Matriz100x100 {

	public static void main(String[] args) {
		
		 int matriz[][] = new int[100][100];
		 
	        Random gerador = new Random();
	        
	        for (int i = 0; i < matriz.length; i++) {
	            for (int j = 0; j < matriz[i].length; j++) {
	                matriz[i][j] = gerador.nextInt(101);
	                System.out.print("["+matriz[i][j]+"]" + "\t");

	                if (matriz[i][j] % 2 != 0) {
	                    matriz[i][j] = -1;
	                } else {
	                    matriz[i][j] = 1;
	                }
	            }
	            System.out.println("");
	        }
	        
	            System.out.println("");

	        for (int i = 0; i < matriz.length; i++) {
	            for (int j = 0; j < matriz[i].length; j++) {
	                if (matriz[i][j] == -1)
	                    System.out.print("["+matriz[i][j] +"]\t");
	                else
	                    System.out.print("[" + matriz[i][j] + "]\t");
	            }
	            System.out.println("");
	        }
		
	}

}
