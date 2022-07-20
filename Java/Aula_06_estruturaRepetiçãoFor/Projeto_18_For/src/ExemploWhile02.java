public class ExemploWhile02 {
    public static void main(String[] args) {

        int i = 0;
        while (i < 1000 ) {
            System.out.print(" |_" +i+ "_| ");
            i += 2;
            if(i % 20 == 0){
                System.out.println(" ");
            }
        }
    }
}

