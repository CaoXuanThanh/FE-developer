# Kiến trúc và ownership

## Phạm vi

School Camera Access Platform là frontend demo HTML + CSS + JavaScript thuần, gồm đúng bốn màn hình: Login, Parent Dashboard, Camera Viewer và Admin Access. Skeleton chỉ có shell chung, CSS nền, root cho từng trang, một nguồn mock data và module JS với TODO; mỗi owner tự làm feature được giao.

Dùng semantic HTML5, CSS3 và ES Modules đơn giản. Không thêm framework, Bootstrap, npm/Vite, `package.json` hoặc dependency. Không dựng backend, database, API, authentication/authorization thật, streaming hoặc Hikvision SDK. Không tạo service/store, auth/storage, state, models, utils hay layer riêng trong skeleton. Không code feature, form, card, bảng quyền, search/toggle hoặc localStorage thay thành viên.

`archive/game.html` giữ nguyên bài cũ để bảo toàn nội dung/lịch sử, không được đưa vào luồng bốn trang mới hoặc sửa trong lần cập nhật này.

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
| `assets/js/mock-data.js` | Một object `demoData` dùng chung: `parent`, `student`, `cameras` |
| `assets/js/pages/*.js` | Module riêng từng trang; hiện chỉ import/demo log và TODO, chưa có logic feature |
| `assets/images/` | Ảnh tĩnh khi cần; ban đầu chỉ có `.gitkeep` |
| `docs/` | Kiến trúc, hợp đồng UI và mẫu kiểm thử |
| `presentation/` | Bài trình bày do Thiện phụ trách sau này |
| `archive/game.html` | Bài cũ được bảo toàn |

## Ownership bắt buộc

| Thành viên | Branch mới | File được sửa |
| --- | --- | --- |
| Thành — file chung, Admin và ghép project | `camera/thanh-core` | `assets/css/global.css`, `assets/css/layout.css`, `assets/js/mock-data.js`, `pages/admin-access.html`, `assets/css/pages/admin-access.css`, `assets/js/pages/admin-access.js`, docs chung (`docs/`), `README.md`; review/merge |
| Tuấn — Parent Dashboard | `camera/tuan-parent-dashboard` | **Chỉ** `pages/parent-dashboard.html`, `assets/css/pages/parent-dashboard.css`, `assets/js/pages/parent-dashboard.js` |
| QMinh — Login | `camera/qminh-login` | **Chỉ** `index.html`, `assets/css/pages/login.css`, `assets/js/pages/login.js` |
| Thiện — Camera Viewer + PPT | `camera/thien-viewer-ppt` | Code **chỉ** `pages/camera-viewer.html`, `assets/css/pages/camera-viewer.css`, `assets/js/pages/camera-viewer.js`; bài trình bày sau này trong `presentation/` |
| Đạt — QA | `camera/dat-qa` | Mặc định **chỉ** `docs/QA_CHECKLIST.md`; `assets/css/qa-fixes.css` **chỉ khi Thành duyệt** |

AI của từng thành viên cũng phải tuân thủ bảng này. Tuấn, QMinh và Thiện mặc định chỉ sửa ba file feature của mình; Thiện có thêm phần trình bày sau này. Đạt ghi checklist và báo bug, không tự sửa feature của người khác. Thành giữ file chung và tích hợp.

Không sửa `global.css`, `layout.css`, `mock-data.js`, docs chung hoặc file người khác khi chưa hỏi Thành. Nếu thiếu dữ liệu, ghi rõ field cần thêm để Thành cập nhật; không copy dữ liệu sang file riêng và không tự sửa shared file. Không đổi cấu trúc thư mục, marker HTML, thứ tự CSS hoặc quy trình branch.

## Ranh giới trong HTML

Mỗi trang chứa ba marker:

```html
<!-- SHARED SHELL: DO NOT EDIT WITHOUT ARCHITECT APPROVAL -->
<!-- PAGE CONTENT START -->
<!-- PAGE CONTENT END -->
```

Shared shell gồm cấu trúc trang, liên kết stylesheet, header/navigation, vùng bọc nội dung, footer và đường dẫn module. Owner chỉ xây nội dung trang trong cặp `PAGE CONTENT START` / `PAGE CONTENT END`, cùng CSS/JS riêng được giao. Mọi sửa đổi shell cần Thành duyệt, kể cả trong file HTML mà owner được giao. Không xóa/đổi marker.

Thứ tự CSS trên tất cả trang: `global.css` → `layout.css` → CSS riêng của trang → `qa-fixes.css` **cuối cùng**. Root dùng đường dẫn `assets/...`; các trang trong `pages/` dùng `../assets/...`. Không inline CSS/JS. Module của trang dùng `<script type="module" src="..."></script>` ở cuối `body`.

| Trang | Root trong vùng nội dung | Module |
| --- | --- | --- |
| Login | `login-root` | `assets/js/pages/login.js` |
| Parent Dashboard | `parent-dashboard-root` | `../assets/js/pages/parent-dashboard.js` |
| Camera Viewer | `camera-viewer-root` | `../assets/js/pages/camera-viewer.js` |
| Admin Access | `admin-access-root` | `../assets/js/pages/admin-access.js` |

Giữ `h1` với `id="page-title"` và root của từng trang. Nội dung hiện chỉ gồm tiêu đề/TODO; module chưa render, đọc query string hay xử lý đăng nhập. Các page module có thể import `demoData` từ `../mock-data.js`. Chi tiết visual, dữ liệu và navigation nằm trong [UI_CONTRACT.md](UI_CONTRACT.md).

## Quy trình Git

Bước dựng/hoàn thiện skeleton chung này được chủ repository cho phép commit/push trực tiếp trên `main`. Sau đó, tất cả thành viên cập nhật `main`, tạo **branch mới trong bảng** từ `main`, sửa đúng phần, commit/push branch và mở PR về `main`. Không push thẳng `main`; Thành tích hợp sau review.

Không đụng các branch cá nhân đã có (`Datnecon`, `QMinh`, `Thienne`, `Tuanne`, `TiNi`, v.v.); không xóa, sửa, merge, rebase chúng và không force-push. Nếu working tree bẩn, remote không phải repository nhóm hoặc `main` thay đổi bất thường, dừng và báo người phụ trách.

Trước PR: kiểm tra đủ bốn trang khi có sửa shell; kiểm tra CSS/module load, console, link và trang mình ở desktop/mobile; dùng [QA_CHECKLIST.md](QA_CHECKLIST.md) và ghi bug thực tế. Chạy bằng Live Server/HTTP để ES Modules hoạt động. Chỉ đánh PASS khi đã kiểm thử; chức năng sẽ được kiểm thử khi owner hoàn thiện.
