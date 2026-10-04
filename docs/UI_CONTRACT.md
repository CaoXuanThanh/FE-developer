# Hợp đồng UI

Áp dụng cho cả bốn màn hình HTML + CSS + JavaScript thuần. Owner dùng cùng hệ visual; không cần mọi trang pixel-perfect giống nhau. Nội dung nằm trong vùng marker, CSS/JS riêng thuộc trang được giao.

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

Navigation hiện tại chỉ theo ngữ cảnh của trang, dùng đường dẫn tương đối:

| Trang | Link trong shell |
| --- | --- |
| Login | Chỉ brand/title; không có menu tới Dashboard, Viewer hoặc Admin |
| Parent Dashboard | `Dashboard` → `parent-dashboard.html` (`aria-current="page"`); `Đăng xuất` → `../index.html` |
| Camera Viewer | `Về Dashboard` → `parent-dashboard.html`; `Đăng xuất` → `../index.html` |
| Admin Access | `Admin` → `admin-access.html` (`aria-current="page"`); `Đăng xuất` → `../index.html` |

`Đăng xuất` hiện chỉ là link placeholder về Login, chưa có session/auth logic. Không thêm menu debug đi thẳng cả bốn màn hình.

Luồng dưới đây là **TODO cho feature sau này**, chưa hoạt động trong skeleton:

- Login → `pages/parent-dashboard.html` hoặc `pages/admin-access.html` khi QMinh làm phần của mình.
- Dashboard → `camera-viewer.html?id=<cameraId>` khi Tuấn tạo link camera, ví dụ `?id=cam01`.
- Module Viewer hiện chưa đọc query string; Thiện sẽ làm trong feature riêng.

Từ root dùng `pages/...`; từ trang trong `pages/` dùng tên file cùng thư mục hoặc `../index.html` về Login. Không dùng đường dẫn theo ổ đĩa máy cá nhân.

## Mock data và module contract

Dữ liệu demo dùng chung nằm ở **`assets/js/mock-data.js`**, export một object `demoData` đơn giản gồm `parent`, `student`, `cameras`. Mỗi page module có thể dùng `import { demoData } from "../mock-data.js";`. Không tạo bản sao dữ liệu business trong HTML/page JS/file riêng; nếu cần thêm field, báo Thành cập nhật shared file.

| Field | Giá trị mẫu |
| --- | --- |
| `demoData.parent.name` | Nguyễn Văn Bình |
| `demoData.student.id` | HS20260123 |
| `demoData.student.name` | Nguyễn Minh An |
| `demoData.student.className` | 3A |
| `demoData.student.status` | Đang học |
| `demoData.cameras[0]` | `id: "cam01"`, `name: "Lớp 3A"`, `status: "Online"`, `allowed: true` |
| `demoData.cameras[1]` | `id: "cam02"`, `name: "Sân chơi"`, `status: "Online"`, `allowed: true` |
| `demoData.cameras[2]` | `id: "cam03"`, `name: "Lớp 3B"`, `status: "Online"`, `allowed: false` |

`allowed` và trạng thái chỉ là dữ liệu mô phỏng. Skeleton không có permission engine, auth, API, localStorage hoặc service/store. Module hiện chỉ import/demo log và TODO, chưa render giao diện hay làm feature.

Mỗi trang load module riêng ở cuối `body` bằng `type="module"`: Login dùng `assets/js/pages/login.js`; các trang trong `pages/` dùng `../assets/js/pages/<ten-trang>.js`. Không inline JS. Chạy qua Live Server/HTTP, không dùng `file://` để kiểm thử module.

Giữ root `login-root`, `parent-dashboard-root`, `camera-viewer-root`, `admin-access-root` theo trang và `h1#page-title`; không đổi marker, CSS load order hoặc cấu trúc thư mục.

## Responsive và truy cập cơ bản

- Desktop mục tiêu: **1366 × 768**; mobile mục tiêu: **390 × 844**.
- Không horizontal scroll ngoài ý muốn; không khóa chiều cao nội dung làm vỡ mobile.
- Chữ dễ đọc, link/nút có nhãn rõ và click được; giữ focus rõ cho điều hướng bàn phím.
- Dùng semantic `header`, `nav`, `main`, `section`, `footer`; giữ `lang="vi"`, UTF-8 và meta viewport.
- Kiểm thử các yêu cầu bằng [QA_CHECKLIST.md](QA_CHECKLIST.md), không đánh PASS chỉ vì có HTML/CSS.
