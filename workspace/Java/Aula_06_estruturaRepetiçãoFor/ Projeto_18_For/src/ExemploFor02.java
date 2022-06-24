public class ExemploFor02 {
    public static void main(String[] args) {

        int i;
        for (i = 0; i < 1000; i += 2) {
            System.out.print(" |_" +i+ "_| ");
            if(i % 20 == 0){
                System.out.println(" ");
            }
        }
    }
}
