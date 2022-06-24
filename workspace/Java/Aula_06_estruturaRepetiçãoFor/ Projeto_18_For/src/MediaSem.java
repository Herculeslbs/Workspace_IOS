/*Crie um programa que conte 8 notas inseridas pelo usuario,
e exiba a media semestral do aluno.
 */

import java.util.Scanner;

public class MediaSem {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        double i, notas, totalNotas = 0, media = 0;
        System.out.println("Digite suas notas: ");
        for (i = 0; i < 8; i++) {
            notas = entrada.nextDouble();
            totalNotas += notas;
        }
        media = totalNotas / 8;
        System.out.println(media);
    }
}