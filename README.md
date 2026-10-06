# Portfolio — Week 5: Animations

Bài nộp nằm trên nhánh `feature/animations`, phát triển từ bản Portfolio
`Datnecon/Buoi4`. Các bài thực hành khác được giữ cùng lịch sử nhánh gốc.

## Mở sản phẩm

Mở trực tiếp **[Buoi4/portfolio.html](Buoi4/portfolio.html)** bằng trình duyệt,
hoặc dùng VS Code Live Server. Không cần cài thư viện hay kết nối CDN.

Có Python thì chạy tại thư mục repository:

```sh
python -m http.server 8000
```

Sau đó truy cập <http://localhost:8000/Buoi4/portfolio.html>.

## Ba loại hiệu ứng

| Loại | Cách xem |
| --- | --- |
| Hover | Rê chuột trên nút “Liên hệ ngay”, menu và thẻ dự án; thử Tab để xem focus |
| Keyframes | Tải lại trang: tiêu đề xuất hiện, avatar LMD nổi nhẹ, chấm trạng thái pulse rồi dừng |
| Scroll | Cuộn xuống các mục dịch vụ, kỹ năng, dự án và liên hệ để thấy nội dung hiện dần |

Chi tiết prompt, thời lượng, easing và lý do tinh chỉnh nằm trong
**[week5_prompts.md](week5_prompts.md)**.

## Kiểm tra thủ công

- Xem trên desktop và màn hình điện thoại; không có thanh cuộn ngang.
- Cuộn xuống rồi lên: nội dung đã hiện không bị ẩn lại.
- Dùng Tab hoặc liên kết neo để tới nội dung bên dưới.
- Tắt JavaScript hoặc chặn `portfolio.js`: nội dung vẫn hiển thị.
- Bật Reduce motion của hệ điều hành/trình duyệt: các chuyển động dừng,
  các mục vẫn đọc được. Có thể thử đổi cài đặt khi trang đang mở.
- Xem trước khi in: các phần chưa cuộn tới vẫn hiển thị.

## Kết quả kiểm tra ngày 06/10/2026

Đã chạy 10 nhóm kiểm tra bằng Playwright với Chrome headless: keyframes,
scroll một lần, hover, bàn phím, đổi reduced motion khi đang xem, chế độ in,
responsive (320/375/768/1024/1440px), tắt JavaScript, thiếu/lỗi
IntersectionObserver và reduced motion ngay khi tải. Tất cả đều đạt;
không ghi nhận lỗi JavaScript trong các tình huống kiểm tra.
Đã xem ảnh chụp toàn trang ở desktop và mobile. Chưa kiểm thử trên Safari,
Firefox hoặc thiết bị di động thực tế.
