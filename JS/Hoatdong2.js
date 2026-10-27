// Ép thẳng dữ liệu nhập vào thành kiểu Số
let inputScore = prompt("Nhập điểm của m vào đây:");
let score = Number(inputScore);

// Bắt lỗi người dùng nhập bậy bạ (nhập chữ abc, hoặc điểm < 0, > 10)
if (isNaN(score) || score < 0 || score > 10) {
    alert("Dữ liệu không hợp lệ! Vui lòng nhập số từ 0 đến 10.");
} else if (score > 8) {
    alert("Giỏi");
} else if (score > 6.5) {
    alert("Khá");
} else if (score >= 5) {
    alert("Trung bình");
} else {
    alert("Yếu");
}