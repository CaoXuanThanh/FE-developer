// --- BÀI 1: Hàm tính diện tích ---
function tinhDienTich(dai, rong) {
    return dai * rong; 
}

// Gọi hàm 3 lần với 3 cặp kích thước khác nhau
console.log("Diện tích mảnh 1: " + tinhDienTich(5, 10));
console.log("Diện tích mảnh 2: " + tinhDienTich(7, 3));
console.log("Diện tích mảnh 3: " + tinhDienTich(20, 15));

// --- BÀI 2 (Vibe Coding): Hàm chào hỏi và tính tuổi ---
function chaoHoi(ten, namSinh) {
    // Tính tuổi dựa vào năm hiện tại (2026)
    let tuoi = 2026 - namSinh; 
    return "Chào " + ten + ", bạn hiện tại " + tuoi + " tuổi.";
}

// Cách gọi hàm và in kết quả ra console
let cauChao = chaoHoi("Thành", 2005); // Ném tham số vào máy
console.log(cauChao); // In thành phẩm ra