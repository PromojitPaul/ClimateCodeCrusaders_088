package ClimateCodeCrusaders_088;

import java.util.Scanner;

public class SimpleCalculator2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.println("Welcome to the Simple Calculator!");
		System.out.println("You can perform the following operations:");
		System.out.println("+ : Addition");
		System.out.println("- : Subtraction");
		System.out.println("* : Multiplication");
		System.out.println("/ : Division");
		System.out.println("% : Percentage");
		System.out.println("s : Square");
		System.out.println("r : Square Root");

		do {
			double firstNumber = getNumber(scanner, "Enter first number: ");
			char operator = getOperator(scanner);

			double result = performOperation(firstNumber, operator);
			if (!Double.isNaN(result)) {
				System.out.printf("Result: %.1f %c = %.1f%n", firstNumber, operator, result);
			}

			if (operator != 's' && operator != 'r') {
				double secondNumber = getNumber(scanner, "Enter second number: ");
				result = performOperation(firstNumber, secondNumber, operator);
				if (!Double.isNaN(result)) {
					System.out.printf("Result: %.1f %c %.1f = %.1f%n", firstNumber, operator, secondNumber, result);
				}
			}

		} while (getContinueCalc(scanner)); // Continue if the user presses Enter

		scanner.close();
	}

	private static double getNumber(Scanner scanner, String prompt) {
		double number;
		while (true) {
			try {
				System.out.print(prompt);
				number = scanner.nextDouble();
				scanner.nextLine(); // Consume the newline
				break; // Exit loop if input is valid
			} catch (Exception e) {
				System.out.println("Invalid input. Please enter a valid number.");
				scanner.nextLine(); // Clear invalid input
			}
		}
		return number;
	}

	private static char getOperator(Scanner scanner) {
		char operator;
		while (true) {
			System.out.print("Enter an operator (+, -, *, /, %, s for square, r for square root): ");
			operator = scanner.next().charAt(0);
			scanner.nextLine(); // Consume the newline
			if ("+-*/%sr".indexOf(operator) != -1) {
				break; // Exit loop if input is valid
			}
			System.out.println("Invalid operator. Please enter one of (+, -, *, /, %, s, r).");
		}
		return operator;
	}

	private static boolean getContinueCalc(Scanner scanner) {
		System.out.print("Press Enter to perform another calculation or type anything to exit: ");
		String input = scanner.nextLine(); // Capture the entire line
		return input.isEmpty(); // Return true if the input is empty
	}

	private static double performOperation(double a, char op) {
		return switch (op) {
		case 's' -> a * a; // Square
		case 'r' -> (a >= 0) ? Math.sqrt(a) : Double.NaN; // Square root (only if non-negative)
		default -> Double.NaN; // For any other invalid operation
		};
	}

	private static double performOperation(double a, double b, char op) {
		return switch (op) {
		case '+' -> a + b;
		case '-' -> a - b;
		case '*' -> a * b;
		case '/' -> (b != 0) ? a / b : Double.NaN; // Handle division by zero
		case '%' -> (b != 0) ? (a * b) / 100 : Double.NaN; // Percentage calculation
		default -> {
			System.out.println("Error: Invalid operator.");
			yield Double.NaN;
		}
		};
	}
}
