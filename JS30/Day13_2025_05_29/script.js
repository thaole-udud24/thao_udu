function themSinhVien() {
  // Lấy dữ liệu từ form
  const maSV = document.getElementById("maSV").value;
  const hoTen = document.getElementById("hoTen").value;
  const email = document.getElementById("email").value;
  const sdt = document.getElementById("sdt").value;

  // Tạo một dòng mới
  const newRow = document.createElement("tr");

  // Tạo các ô dữ liệu
  const cellMaSV = document.createElement("td");
  cellMaSV.textContent = maSV;

  const cellHoTen = document.createElement("td");
  cellHoTen.textContent = hoTen;

  const cellEmail = document.createElement("td");
  cellEmail.textContent = email;

  const cellSDT = document.createElement("td");
  cellSDT.textContent = sdt;

  // Gắn các ô vào dòng
  newRow.appendChild(cellMaSV);
  newRow.appendChild(cellHoTen);
  newRow.appendChild(cellEmail);
  newRow.appendChild(cellSDT);

  // Thêm dòng vào bảng
  document.getElementById("danhSachSinhVien").appendChild(newRow);

  // Xóa dữ liệu trong form
  document.getElementById("maSV").value = "";
  document.getElementById("hoTen").value = "";
  document.getElementById("email").value = "";
  document.getElementById("sdt").value = "";
}
