# Kiến trúc và ownership

## Phạm vi

School Camera Access Platform là prototype môn HTML + CSS, gồm đúng bốn màn hình: Login, Parent Dashboard, Camera Viewer và Admin Access. Khung ban đầu chỉ có shell chung, đường dẫn, CSS nền và TODO; mỗi owner tự hoàn thiện nội dung được giao.

Dùng semantic HTML5 và CSS3 thuần. Không thêm JavaScript, script, dữ liệu JS, backend, database, API/fetch, localStorage, authentication thật, streaming thật hay Hikvision SDK. Không thêm framework, Bootstrap, npm/Vite, build tool hoặc dependency trong giai đoạn này. Không hoàn thiện giao diện của thành viên khác.

`archive/game.html` là file bài cũ được di chuyển nguyên trạng để giữ nội dung/lịch sử. Nếu file cũ có JavaScript, đó là ngoại lệ lưu trữ, không phải code của prototype và không được đưa vào luồng bốn trang mới.

## Vai trò của file

| File/thư mục | Mục đích |
| --- | --- |
| `index.html` | Login |
| `pages/parent-dashboard.html` | Parent Dashboard |
| `pages/camera-viewer.html` | Camera Viewer |
| `pages/admin-access.html` | Admin Access |
| `assets/css/global.css` | Token, reset tối thiểu, class dùng chung và form base |
| `assets/css/layout.css` | Header, navigation, page shell, footer và responsive chung |
| `assets/css/pages/*.css` | CSS riêng của từng màn hình; ban đầu chỉ có comment TODO |
| `assets/css/qa-fixes.css` | Chỉ các bản vá nhỏ được Thành duyệt; ban đầu không có rule |
| `assets/images/` | Ảnh tĩnh khi cần; ban đầu chỉ có `.gitkeep` |
| `docs/` | Kiến trúc, hợp đồng UI và mẫu kiểm thử |
| `presentation/` | Bài trình bày do Thiện phụ trách sau này |
| `archive/game.html` | Bài cũ được bảo toàn |

## Ownership bắt buộc

| Thành viên | Branch mới | File được sửa |
| --- | --- | --- |
| Thành — architect/integrator | `camera/thanh-core` | `assets/css/global.css`, `assets/css/layout.css`, `pages/admin-access.html`, `assets/css/pages/admin-access.css`, `README.md`, `docs/ARCHITECTURE.md`, `docs/UI_CONTRACT.md`; review và merge/integration |
| Tuấn — Parent Dashboard | `camera/tuan-parent-dashboard` | **Chỉ** `pages/parent-dashboard.html`, `assets/css/pages/parent-dashboard.css` |
| QMinh — Login | `camera/qminh-login` | **Chỉ** `index.html`, `assets/css/pages/login.css` |
| Thiện — Camera Viewer + PPT | `camera/thien-viewer-ppt` | Code **chỉ** `pages/camera-viewer.html`, `assets/css/pages/camera-viewer.css`; bài trình bày sau này trong `presentation/` |
| Đạt — QA | `camera/dat-qa` | Mặc định **chỉ** `docs/QA_CHECKLIST.md`; `assets/css/qa-fixes.css` **chỉ khi Thành duyệt** |

AI của từng thành viên cũng phải tuân thủ bảng này. Nếu cần đổi token, layout chung hoặc file người khác, mô tả nhu cầu trong PR để Thành xử lý/duyệt trước.

## Ranh giới trong HTML

Mỗi trang chứa ba marker:

```html
<!-- SHARED SHELL: DO NOT EDIT WITHOUT ARCHITECT APPROVAL -->
<!-- PAGE CONTENT START -->
<!-- PAGE CONTENT END -->
```

Shared shell gồm cấu trúc trang, liên kết stylesheet, header/navigation, vùng bọc nội dung và footer. Owner chỉ xây nội dung trang trong cặp `PAGE CONTENT START` / `PAGE CONTENT END`, cùng CSS riêng được giao. Mọi sửa đổi shell cần Thành duyệt, kể cả trong file HTML mà owner được giao. Không xóa/đổi marker.

Thứ tự CSS trên tất cả trang: `global.css` → `layout.css` → CSS riêng của trang → `qa-fixes.css` **cuối cùng**. Root dùng đường dẫn `assets/...`; các trang trong `pages/` dùng `../assets/...`. Không inline CSS hoặc script. Chi tiết token, class và navigation nằm trong [UI_CONTRACT.md](UI_CONTRACT.md).

## Quy trình Git

Lần bootstrap này được chủ repository cho phép dựng/commit khung trực tiếp trên `main`. Sau đó, tất cả thành viên cập nhật `main`, tạo **branch mới trong bảng** từ `main`, sửa đúng phần, commit/push branch và mở PR về `main`. Không push thẳng `main`; Thành tích hợp sau review.

Không đụng các branch cá nhân đã có (`Datnecon`, `QMinh`, `Thienne`, `Tuanne`, `TiNi`, v.v.); không xóa, sửa, merge, rebase chúng và không force-push. Nếu working tree bẩn, remote không phải repository nhóm hoặc `main` thay đổi bất thường, dừng và báo người phụ trách.

Trước PR: kiểm tra đủ bốn trang khi có sửa shell; kiểm tra trang mình ở desktop/mobile; dùng [QA_CHECKLIST.md](QA_CHECKLIST.md) và ghi bug thực tế. Khung TODO chưa phải giao diện hoàn chỉnh.
