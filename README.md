# School Camera Access Platform — FE Prototype

Bài cuối kỳ HTML + CSS của nhóm 5 sinh viên. Đây là **frontend prototype**, không phải hệ thống camera thật: không backend, database, API, đăng nhập hay streaming thật. Hiện chỉ có khung chung và TODO để từng thành viên tự làm phần được giao.

Đọc [kiến trúc và ownership](docs/ARCHITECTURE.md), [quy ước UI](docs/UI_CONTRACT.md) và [checklist QA](docs/QA_CHECKLIST.md) trước khi code, kể cả khi dùng AI.

## Chạy tại máy

Mở terminal tại thư mục repository:

```sh
python -m http.server 8000
```

Mở một trong bốn URL:

- Login: <http://localhost:8000/index.html>
- Parent Dashboard: <http://localhost:8000/pages/parent-dashboard.html>
- Camera Viewer: <http://localhost:8000/pages/camera-viewer.html?id=cam01>
- Admin Access: <http://localhost:8000/pages/admin-access.html>

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
2. Tạo branch mới từ `main`: `git switch -c camera/<branch-duoc-giao>` (thay bằng tên đầy đủ trong bảng).
3. Chỉ sửa file được giao và giữ nguyên shared shell khi chưa được Thành duyệt.
4. Kiểm tra thay đổi, stage đúng file và commit.
5. Push branch: `git push -u origin <branch-duoc-giao>`.
6. Mở Pull Request về `main`; Thành review và tích hợp.

**Không push thẳng `main`, không sửa file người khác, không force-push.** Lần dựng khung ban đầu này là ngoại lệ được chủ repository cho phép trên `main`; các công việc tiếp theo phải đi qua branch và PR. Không sửa, xóa, merge hoặc rebase các branch cá nhân cũ để làm project này. `archive/game.html` lưu nguyên bài cũ, không thuộc bốn màn hình camera.
