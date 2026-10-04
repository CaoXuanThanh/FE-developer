# School Camera Access Platform — FE final project

Bài cuối kỳ của nhóm 5 sinh viên, dùng **HTML + CSS + JavaScript thuần**. Đây là frontend demo, chưa có backend hay camera thật. Hiện chỉ có khung chung, mock data và TODO để từng thành viên tự làm feature.

Đọc [kiến trúc và ownership](docs/ARCHITECTURE.md), [quy ước UI](docs/UI_CONTRACT.md) và [checklist QA](docs/QA_CHECKLIST.md) trước khi code, kể cả khi dùng AI.

## Chạy tại máy

Dùng **VS Code Live Server** để mở `index.html`, hoặc chạy HTTP server tại thư mục repository nếu có Python:

```sh
python -m http.server 8000
```

Với server ở port 8000, mở một trong bốn URL:

- Login: <http://localhost:8000/index.html>
- Parent Dashboard: <http://localhost:8000/pages/parent-dashboard.html>
- Camera Viewer: <http://localhost:8000/pages/camera-viewer.html?id=cam01>
- Admin Access: <http://localhost:8000/pages/admin-access.html>

Nên dùng HTTP/Live Server; không khuyến khích mở bằng `file://` vì các trang dùng ES Modules.

## Cấu trúc

```text
FE-developer/
├── index.html
├── pages/
│   ├── parent-dashboard.html
│   ├── camera-viewer.html
│   └── admin-access.html
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── layout.css
│   │   ├── qa-fixes.css
│   │   └── pages/
│   │       ├── login.css
│   │       ├── parent-dashboard.css
│   │       ├── camera-viewer.css
│   │       └── admin-access.css
│   ├── js/
│   │   ├── mock-data.js
│   │   └── pages/
│   │       ├── login.js
│   │       ├── parent-dashboard.js
│   │       ├── camera-viewer.js
│   │       └── admin-access.js
│   └── images/.gitkeep
├── docs/
│   ├── ARCHITECTURE.md
│   ├── UI_CONTRACT.md
│   └── QA_CHECKLIST.md
├── presentation/.gitkeep
├── archive/game.html
└── README.md
```

## Làm việc theo branch

Các branch dự kiến:

| Thành viên | Branch |
| --- | --- |
| Thành | `camera/thanh-core` |
| Tuấn | `camera/tuan-parent-dashboard` |
| QMinh | `camera/qminh-login` |
| Thiện | `camera/thien-viewer-ppt` |
| Đạt | `camera/dat-qa` |

1. Kiểm tra working tree sạch, chuyển sang `main` và cập nhật: `git switch main`, `git pull --ff-only origin main`.
2. Tạo branch mới từ `main`: `git switch -c camera/tuan-parent-dashboard` (ví dụ cho Tuấn; các bạn thay bằng branch của mình trong bảng).
3. Chỉ sửa file được giao và giữ nguyên shared shell khi chưa được Thành duyệt.
4. Kiểm tra thay đổi, stage đúng file và commit.
5. Push branch: `git push -u origin camera/tuan-parent-dashboard` (thay bằng branch của mình).
6. Mở Pull Request về `main`; Thành review và tích hợp.

**Không push thẳng `main`, không sửa file người khác, không force-push.** Bước dựng/hoàn thiện skeleton chung là ngoại lệ được chủ repository cho phép trên `main`; công việc feature phải đi qua branch và PR. Không sửa, xóa, merge hoặc rebase branch cá nhân cũ. `archive/game.html` lưu nguyên bài cũ, không thuộc bốn màn hình camera.
