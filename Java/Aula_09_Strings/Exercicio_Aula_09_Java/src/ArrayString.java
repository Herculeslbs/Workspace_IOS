/*Receber o nome de 5 frutas e armazenar em array.
- Verificar se a string recebida é vazia (isEmpty)
- Verificar se a string tem 3 ou mais letras (length)
- Comparar se a string recebida já existe (compareTo)
- Comparar a string igualando caracteres (ToUpperCase)
- Comparar a string eliminando caracter em branco (trim)
- Após receber as strings sobrepor o conteúdo (replace)
  em caixa baixa (toLowerCase)
- Exibir a listagem de frutas recebidas*/
import java.util.Scanner;

public class ArrayString {
	public static void main(String[] args) {
		
		 Scanner entrada = new Scanner (System.in);
	     String frutas[] = new String[5];
	     
	     int i;
	     
	     for(i = 0; i < frutas.length; i++ ) {
	      System.out.println("Digite o nome da " + (i+1) + "º frutas:");
	      frutas[i] = entrada.nextLine();	          
	    
	     var vazio = frutas[i].isEmpty();
	     var tamanho = frutas[i].length();
	     
	   	     
	     if(vazio == true) {
	         System.out.println("Este indice possui espaço vazio.");
	     }
	     else {
	         System.out.println("Este indice não possui espaço vazio.");
	     }
	     if(tamanho >= 3) {
	    	 System.out.println("Este indice possui " + frutas[i].length() + " caracteres."); 
	     }
	     else {
	    	 System.out.println("Este indice possui menos de 3 caracteres.");
	     }
	         System.out.println();	         
	     } 
	  		
	    for(i = 0; i < frutas.length; i++ ) {
	    	System.out.print("[" + frutas[i].toUpperCase().trim() + "] ");	    	          	    
	    }
	    
	    System.out.println();
	    
	    String frutas1[] = new String[frutas.length];
	    
	    for(i = 0; i < frutas.length; i++ ) {
	    	frutas1[i] = frutas[i];
	    }
	    	System.out.println();
	    for(i = 0; i < frutas.length; i++ ) {
	    	System.out.print("[" + frutas1[i].replace(frutas1[i], frutas1[i].toLowerCase()) + "] ");
	    }
	    	   
	}
}