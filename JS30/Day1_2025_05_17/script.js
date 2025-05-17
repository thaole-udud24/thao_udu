function tinhgiaithua(){
    let n=parseInt(prompt("nhap"));
    if (isNaN(n) || n < 0){
        alert("nhap so khac ");
        return;
    }
    let gt=1;
    let i=1;
    while(i<=n){
        gt *= i;
        i++;

    }
    alert("giai thua la"+ gt);
}
function demsochiahet(){
    let count =0 ;
    let i=1;
    while(i<=100){
        if (i %3===0 && i %5===0){
            count++;
        }i++;
    }
    alert("co " + count)
}
function tongsole(){
    let n=parseInt(prompt("nhap n"));
    if (isNaN(n) || n < 0){
        alert("nhap so khac ");
        return ;
    }
    let tong=0 ;
    let i=1;
    while(i < n){
        if (i % 2 !==0){
           tong += 1;
        }
        i++;
    }
    alert("tong : " + tong)
}
function bangCuuChuong(n) {
    if (n < 2 || n > 9) {
        console.log("Vui lòng nhập số từ 2 đến 9");
        return;
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
function laSoNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function veTamGiac(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }
}
function xepLoai(diem) {
    if (diem >= 9) return "Xuất sắc";
    else if (diem >= 8) return "Giỏi";
    else if (diem >= 6.5) return "Khá";
    else if (diem >= 5) return "Trung bình";
    else return "Yếu";
}
function tongChuSo(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
