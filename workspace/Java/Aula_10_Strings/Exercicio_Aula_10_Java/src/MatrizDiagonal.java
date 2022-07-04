/*Declare uma matriz 5 x 5. Gere uma matriz identidade, ou seja,
preencha com 1 a diagonal principal e com 0 os demais elementos.
Imprimir a matriz identidade no final.*/
public class MatrizDiagonal {

	public static void main(String[] args) {
		
		 int tabela [][] = {{1,0,0,0,0}, {0,1,0,0,0}, {0,0,1,0,0}, {0,0,0,1,0}, {0,0,0,0,1}};

	        for (int i = 0; i < tabela.length; i++) {
	            for (int j = 0; j < tabela[i].length; j++){
	                System.out.print("["+tabela[i][j]+"]" + "\t");
	            }
	            System.out.println("");
	        }

	}

}
