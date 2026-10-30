# Homework Tuần 5 — Prompt log

Ngày: 06/10/2026. Nhánh: `feature/animations`, nền: `TiNi`.

Sáu prompt dưới đây là chỉ dẫn thực tế mà trợ lý chính đã gửi cho các AI
hỗ trợ viết sáu bài trong phiên sửa bài này. Chúng được phát triển từ yêu cầu
của người dùng, không phải trích dẫn các tin nhắn người dùng chưa gửi.
Không sử dụng mã nguồn từ `Datnecon/Buoi4`.

## 1. FAB — tinh chỉnh pulse speed

**Prompt**

> Tạo FAB position: fixed và pulse bằng @keyframes. Đặt chu kỳ pulse 2s
> ease-in-out; dùng transform: scale và opacity cho vòng sáng để không làm
> nút đổi bố cục. Hover phản hồi trong 220ms, có focus-visible và tắt
> chuyển động khi prefers-reduced-motion.

**Thay đổi:** Đặt pulse 2 giây với `ease-in-out`; vòng sáng chuyển động bằng
`transform` và `opacity`. FAB giữ vị trí cố định; tương tác hover dùng 220ms.

**Lý do:** Nhịp pulse chậm giúp nút dễ nhận thấy mà không nháy gấp.
Biến đổi vòng sáng không làm thay đổi kích thước bố cục của nút.

## 2. Card Flip — tinh chỉnh card flip speed

**Prompt**

> Tạo card flip 180deg với perspective, transform-style: preserve-3d
> và backface-visibility: hidden. Tinh chỉnh tốc độ lật về 700ms
> cubic-bezier(0.22, 1, 0.36, 1); dùng rotateY thay thay đổi top/left,
> hỗ trợ hover và thao tác bàn phím/chạm.

**Thay đổi:** Dùng `rotateY(180deg)` với transition 700ms và đường cong
`cubic-bezier(0.22, 1, 0.36, 1)`. Hai mặt thẻ ẩn mặt lưng; khung có
`perspective`, phần xoay có `transform-style: preserve-3d`. Sau rà soát,
đặt `perspective` trên `.flip-card`, cha trực tiếp của phần xoay, để phối
cảnh không bị làm phẳng qua lớp trung gian.

**Lý do:** 700ms đủ để quan sát thao tác lật; đường cong giúp chuyển động
giảm tốc nhẹ ở cuối. Không animate `top`/`left` để dịch chuyển thẻ.

## 3. Typing — animation-duration và steps

**Prompt**

> Tạo typing effect chỉ bằng HTML/CSS, tuyệt đối không JavaScript.
> Dùng animation-duration: 3s, steps theo số ký tự và forwards để giữ
> câu hoàn chỉnh; con trỏ nháy 700ms step-end. Giữ câu đọc được khi
> giảm chuyển động.

**Thay đổi:** Hiệu ứng gõ dùng 3 giây, `steps()` khớp số ký tự, `forwards`
giữ kết quả. Con trỏ dùng 700ms với `step-end`. Bài không có JavaScript.

**Lý do:** `steps()` tạo từng nấc chữ rõ ràng thay vì trượt liên tục.
Ở bài này animate độ rộng để mở dần chữ; đây là hiệu ứng cắt nội dung,
khác với dịch chuyển cả phần tử bằng `transform`.

## 4. Parallax — scroll animation

**Prompt**

> Tạo parallax bằng background-attachment: fixed và các khối nội dung
> đủ cao để quan sát khi cuộn. Không dùng JavaScript để dịch nền;
> giữ chữ rõ trên ảnh nền và dùng background-attachment: scroll khi
> người xem yêu cầu giảm chuyển động.

**Thay đổi:** Nền cố định bằng `background-attachment: fixed`; các khối
nội dung di chuyển theo cuộn trang. Chế độ giảm chuyển động dùng nền `scroll`.

**Lý do:** Tạo tương phản giữa nền và nội dung đúng kỹ thuật đề bài;
không cần cập nhật tọa độ nền trong sự kiện cuộn JavaScript.

## 5. Hamburger — transition và ease-in-out

**Prompt**

> Tạo hamburger ba gạch chuyển thành X bằng transition 300ms ease-in-out.
> Chỉ animate transform và opacity, không animate top/left; JavaScript
> ngắn chỉ toggle trạng thái menu và aria-expanded, hỗ trợ bàn phím.

**Thay đổi:** Hai gạch ngoài dịch/xoay bằng `transform`, gạch giữa mờ đi
bằng `opacity`, thời lượng 300ms với `ease-in-out`. Trạng thái menu
đồng bộ với `aria-expanded`.

**Lý do:** Nhịp tăng/giảm tốc cân bằng khiến thao tác mở và đóng nhất quán.
JavaScript quản lý trạng thái; CSS chịu trách nhiệm chuyển động.

## 6. Skill bars — thời lượng và forwards

**Prompt**

> Tạo ba skill bar HTML 90%, CSS 85%, JS 70%. Dùng @keyframes từ
> width: 0% đến giá trị đích trong 1.6s ease-in-out với
> animation-fill-mode: forwards, giữ giá trị cuối; người dùng
> giảm chuyển động thấy ngay mức hoàn chỉnh.

**Thay đổi:** Các thanh chạy từ 0% đến HTML 90%, CSS 85%, JS 70% trong
1.6 giây, dùng `ease-in-out` và `forwards`; không trở về 0 sau khi chạy xong.

**Lý do:** Đủ thời gian quan sát mức tăng, đồng thời kết quả cuối được giữ
để người xem đọc và so sánh. Chế độ giảm chuyển động hiển thị mức đích ngay.

## Portfolio sẵn có của TiNi

Giữ nguyên thiết kế và thông số trong `hoatdong2.html`: hover 300ms,
spinner 800ms và AOS scroll 800ms, chạy một lần. Kiểm tra trình duyệt
đã tái hiện lỗi nội dung ẩn khi AOS JavaScript không tải hoặc khi tắt
JavaScript. Chỉ bổ sung `try/catch` khi khởi tạo AOS và CSS trong
`noscript` để các phần nội dung vẫn đọc được. `hoatdong1.html` giữ nguyên.
