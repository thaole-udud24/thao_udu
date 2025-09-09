import java.util.*;

class TaiKhoan {
    private String soTaiKhoan;
    private String tenChuTaiKhoan;
    private double soDu;
    private static double laiSuatNam = 0.06;

    public TaiKhoan(String soTaiKhoan, String tenChuTaiKhoan, double soDu) {
        this.soTaiKhoan = soTaiKhoan;
        this.tenChuTaiKhoan = tenChuTaiKhoan;
        this.soDu = soDu;
    }

    public void napTien(double soTien) {
        if (soTien > 0) {
            soDu += soTien;
        }
    }

    public boolean rutTien(double soTien) {
        if (soTien > 0 && soTien <= soDu) {
            soDu -= soTien;
            return true;
        }
        return false;
    }

    public double tinhLaiMotThang() {
        return soDu * (laiSuatNam / 12);
    }

    public void hienThiThongTin() {
        System.out.printf("Số TK: %s | Tên chủ TK: %s | Số dư: %.2f\n", soTaiKhoan, tenChuTaiKhoan, soDu);
    }

    public String laySoTaiKhoan() {
        return soTaiKhoan;
    }

    public double laySoDu() {
        return soDu;
    }

    public static void doiLaiSuat(double laiSuatMoi) {
        if (laiSuatMoi >= 0) {
            laiSuatNam = laiSuatMoi;
        }
    }

    public static void hienThiLaiSuat() {
        System.out.printf("Lãi suất năm hiện tại: %.2f%%\n", laiSuatNam * 100);
    }
}
