function fibonacci(){
    let n = parseInt(prompt("nhap n"));
    if (isNaN(n) || n < 0){
        alert("nhap so khac");
        return ;
    }

let a=0 , b=1 ,c; 
for (let i=2 ; i <= n ; i++){
    let c= a +b ;
    a=b;
    b=c;
}
alert(" so fibo thu " + n + "la "+ b); }

// bai 2
function daoNguocChuoi(){
    let str =prompt("nhap chuoi ");
    let dao="";
    for (let i = str.length -1;i>=0 ;i--){
        dao += str[i];
    }
 alert("chuoi dao nguoc la  "+ dao );
}
// bai 3
function laNamNhuan(){
    let n=parseInt(prompt("nhap nam"));
    if (isNaN(n)|| n <0){
        alert("nhap so khac");
        return ;
    }
    if ((n % 4==0 && n %100 !=0) || (n % 400 ==0)){
        alert(n + "la nam nhuan ");

    }
    else {
        alert(n + " khong phai la nam nhuan ");
    }
}
function kiemTraMatKhau(){
    let matkhau=prompt("nhap");
    if (matkhau.length <8){
        alert("nhap mk co it nhat 8 kt");
        return ;
    }
    let coChu =/[a-zA-z]/.test(matkhau);
    let coSo =/[0-9]/.test(matkhau);
    if (!coChu){
    alert("nhap khau phai co chu");

}
    else if (!coSo){
    alert("nhap mk phai co so");
}
    else {
    alert("hop le ");
  }
}