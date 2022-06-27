import java.util.Scanner;

/*Crie um programa que receba como parametro o nome do mês do ano que será inserido pelo usuario.
Se o usuario Digitar os meses: Abril, Maio e junho. 
Você deve exibir o nome do mês digitado e a estção do ano que é Outono; 
Mês: Julho, Agosto e setembro Estação: Inverno.
Mês: outubro, novembro e dezembro, Estação: Primavera 
Mês: Janeiro, Fevereiro e março, Estação: Verão*/

public class MesEstacao {

	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		String mes;
		System.out.print("Digite um mês de Janeiro a Dezembro: ");
		mes = entrada.nextLine();
		String est = mes;
		if(est.equalsIgnoreCase ("Janeiro") || est.equalsIgnoreCase ("Fevereiro") || est.equalsIgnoreCase ("Março")) {
			
			System.out.println("O mês escolhido é "+ est + ", e sua estação é Verão.");
		}
		if(est.equalsIgnoreCase ("Abril") || est.equalsIgnoreCase ("Maio") || est.equalsIgnoreCase ("Junho")) {
			
			System.out.println("O mês escolhido é "+ est + ", e sua estação é Outono.");
		}
		if(est.equalsIgnoreCase ("Julho") || est.equalsIgnoreCase ("Agosto") || est.equalsIgnoreCase ("Setembro")) {
			
			System.out.println("O mês escolhido é "+ est + ", e sua estação é Inverno.");
		}
		if(est.equalsIgnoreCase ("Outubro") || est.equalsIgnoreCase ("Novembro") || est.equalsIgnoreCase ("Dezembro")) {
			
			System.out.println("O mês escolhido é "+ est + ", e sua estação é Primavera.");
		}
		else {
			
			System.out.println("Valor inserido é inválido.");
		}
	}

}
