import java.util.Scanner;

public class FibonacciArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt(); 

        long[] fib = new long[93]; 
        fib[1] = 1;
        fib[2] = 1;

        for (int i = 3; i <= 92; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        for (int k = 0; k < t; k++) {
            int n = sc.nextInt();
            System.out.println(fib[n]);
        }

        
    }
}