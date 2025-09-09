import java.util.Scanner;

class SinhVien {
    private String maSV;
    private String hoTen;
    private int tuoi;
    private static int tongSoSV = 0;

    public SinhVien() {
        tongSoSV++;
    }

    public void nhapThongTin(Scanner sc) {
        System.out.print("Nhập mã sinh viên: ");
        maSV = sc.nextLine();
        System.out.print("Nhập họ tên: ");
        hoTen = sc.nextLine();
        System.out.print("Nhập tuổi: ");
        tuoi = Integer.parseInt(sc.nextLine());
    }

    public void ganThongTin(String maSV, String hoTen, int tuoi) {
        this.maSV = maSV;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
    }

    public void hienThiThongTin() {
        System.out.println("Mã SV: " + maSV + ", Họ tên: " + hoTen + ", Tuổi: " + tuoi);
    }

    public static void hienThiTongSoSV() {
        System.out.println("Tổng số sinh viên đã được tạo: " + tongSoSV);
    }
}

public class bai1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập số lượng sinh viên: ");
        int n = Integer.parseInt(sc.nextLine());
        SinhVien[] ds = new SinhVien[n];

        for (int i = 0; i < n; i++) {
            System.out.println("Nhập thông tin sinh viên thứ " + (i + 1) + ":");
            ds[i] = new SinhVien();
            ds[i].nhapThongTin(sc);
        }

        System.out.println("\nThông tin các sinh viên:");
        for (SinhVien sv : ds) {
            sv.hienThiThongTin();
        }

        SinhVien.hienThiTongSoSV();

        sc.close();
    }
}
