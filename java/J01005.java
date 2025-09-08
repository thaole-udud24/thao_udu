import java.util.Scanner;

public class J01005 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        
        for (int test = 0; test < t; test++) {
            int n = scanner.nextInt();
            double h = scanner.nextDouble();
            
            for (int k = 1; k < n; k++) {
                double y = h * Math.sqrt((double) k / n);
                System.out.printf("%.6f ", y);
            }
            System.out.println(); 
        }
        
        scanner.close();
    }
}
