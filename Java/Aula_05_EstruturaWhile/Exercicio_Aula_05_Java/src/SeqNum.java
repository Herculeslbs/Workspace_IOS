/*Escreva um algoritmo que imprima a sequência do número
100 ao 200.*/
public class SeqNum {
  public static void main(String[] args) throws InterruptedException {
    int c = 99 , num = 200;
      while(c < num) {
	    c++;
	    Thread.sleep(200);
	      if(c % 10 == 0) {
	        System.out.println("  ");
	      }	
	      System.out.print("|-"+ c +"-|");
	  }
    }
 }