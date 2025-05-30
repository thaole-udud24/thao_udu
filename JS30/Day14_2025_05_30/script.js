function themSinhVien() {
  const maSV = document.getElementById("maSV").value;
  const hoTen = document.getElementById("hoTen").value;
  const email = document.getElementById("email").value;
  const sdt = document.getElementById("sdt").value;

  const newRow = document.createElement("tr");


  const cellMaSV = document.createElement("td");
  cellMaSV.textContent = maSV;

  const cellHoTen = document.createElement("td");
  cellHoTen.textContent = hoTen;

  const cellEmail = document.createElement("td");
  cellEmail.textContent = email;

  const cellSDT = document.createElement("td");
  cellSDT.textContent = sdt;

  
  newRow.appendChild(cellMaSV);
  newRow.appendChild(cellHoTen);
  newRow.appendChild(cellEmail);
  newRow.appendChild(cellSDT);

  
  document.getElementById("danhSachSinhVien").appendChild(newRow);

  // Xóa dữ liệu trong form
  document.getElementById("maSV").value = "";
  document.getElementById("hoTen").value = "";
  document.getElementById("email").value = "";
  document.getElementById("sdt").value = "";
}
const cellAction=DocumentFragment.createElement("td");
const editButton=document.createElement("button");
editButton.textContent="Sửa ";
editButton.onclick=function(){
    suaThongTin(this);
}