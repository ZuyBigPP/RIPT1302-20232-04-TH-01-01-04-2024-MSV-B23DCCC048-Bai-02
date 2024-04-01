// Hàm thêm sinh viên
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var lop = document.getElementById("Lớp").value;

    // Kiểm tra nếu tuổi và số điện thoại là số và không nhỏ hơn 0
    if (parseInt(age) >= 0 && parseInt(phone) >= 0 && parseInt(lop) >= 1) {
        var table = document.getElementById("studentTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell1.innerHTML = table.rows.length - 1;
        cell2.innerHTML = name;
        cell3.innerHTML = age;
        cell4.innerHTML = address;
        cell5.innerHTML = phone;
        cell6.innerHTML = email;
        cell7.innerHTML = lop;

        cell8.innerHTML = '<button class="edit-btn" onclick="openEditDialog(' + (table.rows.length - 1) + ')">Sửa</button> <button class="delete-btn" onclick="deleteStudent(' + (table.rows.length - 1) + ')">Xóa</button>';

    } else {
        // Hiển thị thông báo lỗi khi tuổi, số điện thoại hoặc lớp nhỏ hơn 0
        alert("Tuổi, số điện thoại và lớp không được nhỏ hơn 0 và lớp không được nhỏ hơn 1");
    }
});

// Hàm sửa sinh viên
function editStudent(rowNum) {
    var table = document.getElementById("studentTable");
    var row = table.rows[rowNum];
    
    // Lấy thông tin của sinh viên từ hàng cần sửa
    var name = row.cells[1].innerHTML;
    var age = row.cells[2].innerHTML;
    var address = row.cells[3].innerHTML;
    var phone = row.cells[4].innerHTML;
    var email = row.cells[5].innerHTML;
    var lop = row.cells[6].innerHTML;

    // Hiển thị thông tin sinh viên trong form
    document.getElementById("name").value = name;
    document.getElementById("age").value = age;
    document.getElementById("address").value = address;
    document.getElementById("phone").value = phone;
    document.getElementById("email").value = email;
    document.getElementById("Lớp").value = lop;

    // Xóa hàng cũ khỏi bảng
    table.deleteRow(rowNum);
}

// Hàm xóa sinh viên
function deleteStudent(rowNum) {
    var table = document.getElementById("studentTable");
    table.deleteRow(rowNum);
}
// Mở dialog sửa
function openEditDialog(rowNum) {
    var table = document.getElementById("studentTable");
    var row = table.rows[rowNum];
    var rowIndex = row.rowIndex;
    var editRow = document.getElementById("editRowIndex");
    editRow.value = rowIndex;
    
    document.getElementById("editName").value = row.cells[1].innerHTML;
    document.getElementById("editAge").value = row.cells[2].innerHTML;
    document.getElementById("editAddress").value = row.cells[3].innerHTML;
    document.getElementById("editPhone").value = row.cells[4].innerHTML;
    document.getElementById("editEmail").value = row.cells[5].innerHTML;
    document.getElementById("editClass").value = row.cells[6].innerHTML;
    
    var editDialog = document.getElementById("editDialog");
    editDialog.showModal();
}

// Đóng dialog sửa
function closeEditDialog() {
    var editDialog = document.getElementById("editDialog");
    editDialog.close();
}

// Xử lý sự kiện khi nhấn nút "Lưu" trong dialog sửa
document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var rowIndex = document.getElementById("editRowIndex").value;
    var table = document.getElementById("studentTable");
    var row = table.rows[rowIndex];

    row.cells[1].innerHTML = document.getElementById("editName").value;
    row.cells[2].innerHTML = document.getElementById("editAge").value;
    row.cells[3].innerHTML = document.getElementById("editAddress").value;
    row.cells[4].innerHTML = document.getElementById("editPhone").value;
    row.cells[5].innerHTML = document.getElementById("editEmail").value;
    row.cells[6].innerHTML = document.getElementById("editClass").value;

    closeEditDialog();
});
