# Hợp đồng UI

Áp dụng cho cả bốn màn hình. Owner dùng token/class chung, tự viết nội dung trang trong vùng marker và chỉ thêm CSS riêng cho trang được giao.

## Visual contract

Font chung: `Arial, Helvetica, sans-serif`.

| Token | Giá trị | Công dụng |
| --- | --- | --- |
| `--color-background` | `#f5f6f8` | Nền trang |
| `--color-text` | `#1f2937` | Chữ chính |
| `--color-muted` | `#4b5563` | Chữ phụ |
| `--color-surface` | `#ffffff` | Bề mặt/card |
| `--color-border` | `#d1d5db` | Viền |
| `--color-primary` | `#1d4ed8` | Link và hành động chính |
| `--space-1` | `.25rem` | Khoảng cách nhỏ |
| `--space-2` | `.5rem` | Khoảng cách |
| `--space-3` | `.75rem` | Khoảng cách |
| `--space-4` | `1rem` | Khoảng cách mặc định |
| `--space-6` | `1.5rem` | Khoảng cách lớn |
| `--space-8` | `2rem` | Khoảng cách giữa vùng |
| `--radius` | `.5rem` | Bo góc |
| `--container-max` | `70rem` | Chiều rộng nội dung tối đa |

| Class/base chung | Mục đích |
| --- | --- |
| `.container` | Căn giữa nội dung, giữ khoảng đệm ngang |
| `.page-shell` | Vùng nội dung chính trong layout chung |
| `.card` | Bề mặt, viền, khoảng đệm và bo góc chung |
| `.btn` | Giao diện nút/link dạng nút |
| `.btn-primary` | Biến thể hành động chính, dùng cùng `.btn` |
| `.badge` | Nhãn trạng thái ngắn |
| `.muted` | Chữ phụ |
| `label`, `input`, `select`, `textarea` | Form base: font, kích thước, viền, padding; owner gắn label đúng control khi tạo form |
| `.site-header`, `.site-nav`, `.site-footer` | Shell dùng chung, thuộc `layout.css` |

Không định nghĩa lại `body`, `:root`/token, `.btn`, `.card`, class chung hoặc page shell trong CSS của owner. Khi cần, dùng class riêng dễ hiểu gắn với trang, ví dụ `.login-form` hoặc `.parent-summary`. Đề nghị Thành sửa quy ước chung nếu thật sự cần thay đổi.

Các trang load CSS theo thứ tự: `global.css`, `layout.css`, CSS riêng, `qa-fixes.css` sau cùng. Không inline style/JS. Giữ shared shell và ba marker quy định trong [ARCHITECTURE.md](ARCHITECTURE.md).

## Navigation contract

Dùng link HTML với đường dẫn tương đối; không xử lý điều hướng bằng JavaScript.

| Từ trang | Đích | `href` |
| --- | --- | --- |
| Login (`index.html`) | Parent Dashboard | `pages/parent-dashboard.html` |
| Parent Dashboard | Camera Viewer | `camera-viewer.html?id=cam01` |
| Camera Viewer | Parent Dashboard | `parent-dashboard.html` |
| Admin Access | Back to Login/Home | `../index.html` |

`?id=cam01` chỉ minh họa một camera; HTML/CSS không đọc query string. Shell có navigation tối thiểu đến đủ bốn trang để kiểm tra liên kết. Từ root dùng `pages/...`; từ trang trong `pages/` dùng tên file cùng thư mục hoặc `../index.html` về Login. Không dùng đường dẫn tuyệt đối theo ổ đĩa máy cá nhân.

## Mock content contract

Owner hard-code các giá trị thống nhất sau khi làm giao diện. Khung ban đầu chỉ có TODO, chưa cần trình bày dữ liệu. Không tạo data file, JavaScript, fake API hoặc localStorage.

| Field | Giá trị mẫu |
| --- | --- |
| Student | Nguyễn Minh An |
| Student ID | HS20260123 |
| Class | 3A |
| Status | Đang học |
| Parent | Nguyễn Văn Bình |
| Camera 1 | Lớp 3A — Online |
| Camera 2 | Sân chơi — Online |
| Camera không được phép (ví dụ) | Lớp 3B |

Các trạng thái và quyền truy cập chỉ là nội dung mô phỏng; không có bảo mật/kiểm tra quyền thật.

## Responsive và truy cập cơ bản

- Desktop mục tiêu: **1366 × 768**; mobile mục tiêu: **390 × 844**.
- Không horizontal scroll ngoài ý muốn; không khóa chiều cao nội dung làm vỡ mobile.
- Chữ dễ đọc, link/nút có nhãn rõ và click được; giữ focus rõ cho điều hướng bàn phím.
- Dùng semantic `header`, `nav`, `main`, `section`, `footer`; giữ `lang="vi"`, UTF-8 và meta viewport.
- Kiểm thử các yêu cầu bằng [QA_CHECKLIST.md](QA_CHECKLIST.md), không đánh PASS chỉ vì có HTML/CSS.
