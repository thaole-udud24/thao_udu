import java.util.Scanner;

public class J01007 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        long[] fib = new long[93];
        fib[0] = 0;
        fib[1] = 1;
        for (int i = 2; i <= 92; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        for (int k = 0; k < t; k++) {
            long n = sc.nextLong();
            int dem = 0;   

            for (int i = 0; i <= 92; i++) {
                if (fib[i] == n) {
                    System.out.println("YES");
                    dem = 1;
                    break;
                }
            }

            if (dem == 0) {  
                System.out.println("NO");
            }
        }
    }
}
