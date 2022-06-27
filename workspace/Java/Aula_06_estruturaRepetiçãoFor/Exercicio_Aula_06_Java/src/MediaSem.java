/*Crie um programa que conte 8 notas inseridas pelo usuario,
e exiba a media semestral do aluno.
 */

import java.util.Scanner;

public class MediaSem {

    public static void main(String[] args) throws InterruptedException {
        Scanner entrada = new Scanner(System.in);
        double i, notas, totalNotas = 0, media = 0;
        System.out.println("Digite suas notas: ");
        for (i = 0; i < 8; i++) {
            notas = entrada.nextDouble();
            totalNotas += notas;
        }
        media = totalNotas / 8;
        System.out.println("Calculando...");
	    Thread.sleep(1000);
        System.out.println("O total de suas notas: " + totalNotas);
        System.out.printf("Sua média semestral é: %.2f %n" , media);
    }
}