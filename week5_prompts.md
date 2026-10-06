# Week 5 — Prompt log tinh chỉnh chuyển động

- Ngày: 06/10/2026.
- Nhánh nộp bài: `feature/animations`.
- Trang Portfolio: `Buoi4/portfolio.html`.
- Nền ban đầu: bản Portfolio đã có giao diện trên nhánh `Datnecon`.

## Yêu cầu gốc

> GitHub: Cập nhật vào nhánh feature/animations.
> Trang Portfolio phải có ít nhất 3 loại hiệu ứng: Hover (tương tác),
> Keyframes (tự động), và Scroll (cuộn trang).
> File week5_prompts.md ghi lại cách yêu cầu AI tinh chỉnh tốc độ
> và độ mượt của chuyển động.

Các prompt dưới đây là chỉ dẫn triển khai được trợ lý chính gửi cho AI hỗ trợ
trong phiên làm việc, phát triển từ đề bài. Chúng không phải các tin nhắn bổ sung
do người dùng gửi. Thông số và kết quả ghi dưới đây khớp với mã nguồn bài nộp.

## 1. Hover — phản hồi nhanh, dừng nhẹ

**Prompt đã dùng:**

> Hãy tinh chỉnh hover cho liên kết, nút và thẻ dự án: dùng 220ms
> cubic-bezier(0.22, 1, 0.36, 1), chỉ nâng thẻ 4px để phản hồi nhanh
> mà không giật; bổ sung focus-visible cho bàn phím.

**Điều chỉnh:** Từ `transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`
sang thời lượng `220ms` và easing `cubic-bezier(0.22, 1, 0.36, 1)`.
Chỉ khai báo các thuộc tính cần chuyển động. Thẻ dự án nâng từ 3px thành 4px;
liên kết dự án dịch mũi tên 3px bằng `transform`, thay cho thay đổi `gap`.
Các liên kết có `:focus-visible`; thẻ dự án có `:focus-within`.

**Mục đích:** Phản hồi nhanh và giảm tốc nhẹ ở cuối. Tránh thay đổi bố cục
khi rê chuột; bỏ `will-change` thường trực trên toàn bộ thẻ.

## 2. Keyframes — chậm và có điểm dừng

**Prompt đã dùng:**

> Hãy làm chuyển động keyframes ở phần giới thiệu nhẹ và chậm:
> hình trang trí nổi tối đa 8px trong 4 giây, ease-in-out, tự chạy
> một lần để không gây xao nhãng; xuất hiện tiêu đề trong 700ms.

**Điều chỉnh:** Thêm `avatar-float` cho ảnh đại diện chữ LMD: 4 giây,
`ease-in-out`, nâng tối đa 8px rồi trở về vị trí ban đầu, chạy một lần.
Thêm `intro-enter` cho phần tiêu đề: 700ms, opacity 0 → 1 và dịch 12px → 0.
Chấm trạng thái đổi từ pulse vô hạn sang hai chu kỳ 2 giây rồi dừng.
Bỏ màn hình loading che toàn trang và thời gian chờ giả 600ms.

**Mục đích:** Chuyển động tự động dễ nhận thấy mà không lặp mãi;
nội dung có thể đọc ngay khi trang mở.

## 3. Scroll — hiện một lần, chuyển động ngắn

**Prompt đã dùng:**

> Hãy tinh chỉnh scroll reveal bằng IntersectionObserver: nội dung
> hiện dần trong 650ms, dịch lên từ 20px, chạy một lần khi vào
> viewport. Không ẩn nội dung nếu JavaScript hoặc API không có;
> tắt chuyển động và smooth scroll khi prefers-reduced-motion,
> kể cả đổi cài đặt trong lúc mở trang.

**Điều chỉnh:** Thay AOS tải từ CDN (800ms, các phần tử con trễ 100–400ms)
bằng `IntersectionObserver` trong `Buoi4/portfolio.js`.
Năm phần nội dung dùng `data-reveal`, hiện trong 650ms với quãng dịch 20px.
Kích hoạt khi phần đầu mục đi vào vùng cách đáy viewport 24px;
`threshold: 0` để mục cao hơn màn hình vẫn hiện được. Bỏ quan sát sau lần hiện đầu.
Không xếp chồng hiệu ứng ở cả mục lớn và các thẻ con.

**Mục đích:** Rút thời gian chờ, tránh xung đột transform với hover.
Nội dung trong màn hình đầu tiên luôn hiện; nội dung khác chỉ được gắn lớp chờ
sau khi tạo observer thành công. Không có JavaScript/API hoặc có lỗi khởi tạo
thì toàn bộ nội dung vẫn hiển thị. Focus bàn phím cũng làm hiện mục đang chờ.

## 4. Rà soát khả năng tiếp cận

AI hỗ trợ được yêu cầu rà soát logic reduced motion, điều hướng bàn phím,
hiển thị dự phòng và xung đột transform. Kết quả rà soát đề nghị bổ sung
`@media print` để các mục chưa cuộn tới vẫn xuất hiện trong bản in.

Đã thêm chế độ in, đồng thời `prefers-reduced-motion: reduce` tắt animation,
transition, dịch chuyển hover và smooth scroll. Nếu bật giảm chuyển động
khi trang đang mở, JavaScript hiện mọi mục đang chờ và ngắt observer.

## Thông số cuối cùng

| Loại | Vị trí quan sát | Thông số |
| --- | --- | --- |
| Hover | Nút liên hệ, menu, thẻ dự án | 220ms; ease-out tùy chỉnh; thẻ nâng 4px |
| Keyframes | Tiêu đề, avatar LMD, chấm trạng thái | 700ms; 4s/8px; pulse 2 × 2s |
| Scroll | Giới thiệu, dịch vụ, kỹ năng, dự án, liên hệ | 650ms; 20px; một lần |
| Reduced motion | Toàn trang | Không animation/transition; cuộn tức thời |

Các thông số được chọn để chuyển động nhẹ và dễ theo dõi; không khẳng định
FPS hay điểm hiệu năng khi chưa đo trên thiết bị thực tế.
