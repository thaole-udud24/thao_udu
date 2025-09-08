import java.util.Scanner;
public class J010026{
    public static boolean chinhphuong(int n){
        int s=(int)Math.sqrt(n);
        return s*s==n;
    
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        for(int i=0;i<n;i++) {
            int x= sc.nextInt();
            if(chinhphuong(x)){
              System.out.println("YES");
            }
            else{
                System.out.println("NO");
            }
        }

    }
}