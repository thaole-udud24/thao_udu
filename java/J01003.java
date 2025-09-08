import java.util.Scanner;

public class J01003 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double a = scanner.nextDouble();
        double b = scanner.nextDouble();
        scanner.close();
        if(a == 0){
           if(b==0){
            System.out.println("VSN");
           }
           else{
            System.out.println("VNN");
           }
        }
        else{
        System.out.printf("%.2f",-b/a);    
   } 
} 
}
