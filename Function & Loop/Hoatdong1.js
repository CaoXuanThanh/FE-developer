// 1. In dãy số từ 1 đến 100
console.log("--- Đếm từ 1 đến 100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2. Tùy chỉnh chỉ in ra các số chẵn (2, 4, 6...)
// Thay vì tăng 1 (i++), mình tăng 2 (i += 2) sau mỗi vòng
console.log("--- Chỉ in số chẵn ---");
for (let i = 2; i <= 100; i += 2) { 
    console.log(i);
}