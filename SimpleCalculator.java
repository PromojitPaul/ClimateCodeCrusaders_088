package ClimateCodeCrusaders_088;

import java.util.Scanner;

public class SimpleCalculator {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println(
				"Welcome to the Simple Calculator!\n+ : Addition\n- : Subtraction\n* : Multiplication\n/ : Division");

		while (true) {
			double firstNumber = getInput(scanner, "Enter first number: ");
			double secondNumber = getInput(scanner, "Enter second number: ");
			char operator = getOperator(scanner);

			double result = performOperation(firstNumber, secondNumber, operator);
			System.out.println(Double.isNaN(result) ? "Error: Division by zero is not allowed."
					: String.format("Result: %.1f %c %.1f = %.1f%n", firstNumber, operator, secondNumber, result));

			if (!getContinueCalc(scanner))
				break;
			System.out.println();
		}

		scanner.close();
		System.out.println("Thank you for using the Simple Calculator!");
	}

	private static double getInput(Scanner scanner, String prompt) {
		while (true) {
			System.out.print(prompt);
			if (scanner.hasNextDouble())
				return scanner.nextDouble();
			System.out.println("Invalid input. Please enter a valid number.");
			scanner.next(); // Clear invalid input
		}
	}

	private static char getOperator(Scanner scanner) {
		while (true) {
			System.out.print("Enter an operator (+, -, *, /): ");
			char operator = scanner.next().charAt(0);
			if ("+-*/".indexOf(operator) != -1)
				return operator;
			System.out.println("Invalid operator. Please enter one of (+, -, *, /).");
		}
	}

	private static boolean getContinueCalc(Scanner scanner) {
		System.out.print("Press Enter to perform another calculation or type anything to exit: ");
		scanner.nextLine(); // Consume the newline
		return scanner.nextLine().isEmpty();
	}

	private static double performOperation(double a, double b, char op) {
		return switch (op) {
		case '+' -> a + b;
		case '-' -> a - b;
		case '*' -> a * b;
		case '/' -> (b != 0) ? a / b : Double.NaN;
		default -> Double.NaN;
		};
	}
}
