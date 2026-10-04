# Mẫu kiểm thử skeleton và FE cơ bản

Đạt điền kết quả sau khi kiểm thử thực tế. `—` nghĩa là chưa chạy, không phải PASS. Mỗi hàng ghi `PASS` hoặc `FAIL`; khi FAIL, ghi Bug ID và mô tả bên dưới. Ghi ngày, người kiểm thử và browser/phiên bản vào Notes khi bắt đầu một lượt.

Chạy bằng VS Code Live Server hoặc HTTP server tại root; nếu có Python: `python -m http.server 8000`. Không kiểm thử ES Modules qua `file://`. Viewport là vùng hiển thị nội dung browser. Kiểm tra cả bốn trang ở desktop **1366 × 768** và mobile **390 × 844**; có thể copy bảng cho lượt mới.

Checklist này chỉ kiểm tra skeleton và FE cơ bản. Login/render camera/search và các test chức năng khác sẽ bổ sung khi owner hoàn thiện feature. Không đánh PASS cho runtime/rendering nếu chưa chạy browser/server. Log demo từ module không phải console error.

| Page | Viewport | Test item | PASS/FAIL | Bug ID | Notes |
| --- | --- | --- | --- | --- | --- |
| Login — `index.html` | 1366 × 768 | CSS load: đủ global, layout, login, qa-fixes đúng thứ tự và đúng relative path; không 404 | — | | |
| Login — `index.html` | 1366 × 768 | Module load: login.js load được qua HTTP, không 404 | — | | |
| Login — `index.html` | 1366 × 768 | Console: không syntax/import/runtime error do skeleton; demo log được phép | — | | |
| Login — `index.html` | 1366 × 768 | Navigation: chỉ brand/title; không có menu Dashboard/Viewer/Admin | — | | |
| Login — `index.html` | 1366 × 768 | Overflow: không horizontal scroll ngoài ý muốn, nội dung không bị cắt | — | | |
| Login — `index.html` | 1366 × 768 | Semantic/readability: cấu trúc header/main/section/footer đúng, heading/TODO dễ đọc, tiếng Việt không lỗi font | — | | |
| Login — `index.html` | 1366 × 768 | Click/focus: link/nút hiện có click được, nhãn và focus rõ; nếu chưa có control, ghi N/A trong Notes | — | | |
| Login — `index.html` | 390 × 844 | CSS load: đủ global, layout, login, qa-fixes đúng thứ tự và đúng relative path; không 404 | — | | |
| Login — `index.html` | 390 × 844 | Module load: login.js load được qua HTTP, không 404 | — | | |
| Login — `index.html` | 390 × 844 | Console: không syntax/import/runtime error do skeleton; demo log được phép | — | | |
| Login — `index.html` | 390 × 844 | Navigation: chỉ brand/title; không có menu Dashboard/Viewer/Admin | — | | |
| Login — `index.html` | 390 × 844 | Overflow: không horizontal scroll ngoài ý muốn, nội dung không bị cắt | — | | |
| Login — `index.html` | 390 × 844 | Semantic/readability: cấu trúc header/main/section/footer đúng, heading/TODO dễ đọc, tiếng Việt không lỗi font | — | | |
| Login — `index.html` | 390 × 844 | Click/focus: link/nút hiện có click được, nhãn và focus rõ; nếu chưa có control, ghi N/A trong Notes | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | CSS load: đủ global, layout, parent-dashboard, qa-fixes đúng thứ tự và đúng relative path; không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Module load: parent-dashboard.js và dependency mock-data.js load/import được qua HTTP, không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Console: không syntax/import/runtime error do skeleton; demo log được phép | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Relative navigation: Dashboard → parent-dashboard.html, Đăng xuất → ../index.html; aria-current đúng; không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Overflow: không horizontal scroll ngoài ý muốn, nội dung không bị cắt | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Semantic/readability: cấu trúc header/main/section/footer đúng, heading/TODO dễ đọc, tiếng Việt không lỗi font | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Click/focus: link/nút hiện có click được, nhãn và focus rõ; nếu chưa có control, ghi N/A trong Notes | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | CSS load: đủ global, layout, parent-dashboard, qa-fixes đúng thứ tự và đúng relative path; không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Module load: parent-dashboard.js và dependency mock-data.js load/import được qua HTTP, không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Console: không syntax/import/runtime error do skeleton; demo log được phép | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Relative navigation: Dashboard → parent-dashboard.html, Đăng xuất → ../index.html; aria-current đúng; không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Overflow: không horizontal scroll ngoài ý muốn, nội dung không bị cắt | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Semantic/readability: cấu trúc header/main/section/footer đúng, heading/TODO dễ đọc, tiếng Việt không lỗi font | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Click/focus: link/nút hiện có click được, nhãn và focus rõ; nếu chưa có control, ghi N/A trong Notes | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | CSS load: đủ global, layout, camera-viewer, qa-fixes đúng thứ tự và đúng relative path; không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Module load: camera-viewer.js và dependency mock-data.js load/import được qua HTTP, không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Console: không syntax/import/runtime error do skeleton; demo log được phép | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Relative navigation: Về Dashboard → parent-dashboard.html, Đăng xuất → ../index.html; không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Overflow: không horizontal scroll ngoài ý muốn, nội dung không bị cắt | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Semantic/readability: cấu trúc header/main/section/footer đúng, heading/TODO dễ đọc, tiếng Việt không lỗi font | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Click/focus: link/nút hiện có click được, nhãn và focus rõ; nếu chưa có control, ghi N/A trong Notes | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | CSS load: đủ global, layout, camera-viewer, qa-fixes đúng thứ tự và đúng relative path; không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Module load: camera-viewer.js và dependency mock-data.js load/import được qua HTTP, không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Console: không syntax/import/runtime error do skeleton; demo log được phép | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Relative navigation: Về Dashboard → parent-dashboard.html, Đăng xuất → ../index.html; không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Overflow: không horizontal scroll ngoài ý muốn, nội dung không bị cắt | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Semantic/readability: cấu trúc header/main/section/footer đúng, heading/TODO dễ đọc, tiếng Việt không lỗi font | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Click/focus: link/nút hiện có click được, nhãn và focus rõ; nếu chưa có control, ghi N/A trong Notes | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | CSS load: đủ global, layout, admin-access, qa-fixes đúng thứ tự và đúng relative path; không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Module load: admin-access.js và dependency mock-data.js load/import được qua HTTP, không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Console: không syntax/import/runtime error do skeleton; demo log được phép | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Relative navigation: Admin → admin-access.html, Đăng xuất → ../index.html; aria-current đúng; không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Overflow: không horizontal scroll ngoài ý muốn, nội dung không bị cắt | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Semantic/readability: cấu trúc header/main/section/footer đúng, heading/TODO dễ đọc, tiếng Việt không lỗi font | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Click/focus: link/nút hiện có click được, nhãn và focus rõ; nếu chưa có control, ghi N/A trong Notes | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | CSS load: đủ global, layout, admin-access, qa-fixes đúng thứ tự và đúng relative path; không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Module load: admin-access.js và dependency mock-data.js load/import được qua HTTP, không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Console: không syntax/import/runtime error do skeleton; demo log được phép | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Relative navigation: Admin → admin-access.html, Đăng xuất → ../index.html; aria-current đúng; không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Overflow: không horizontal scroll ngoài ý muốn, nội dung không bị cắt | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Semantic/readability: cấu trúc header/main/section/footer đúng, heading/TODO dễ đọc, tiếng Việt không lỗi font | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Click/focus: link/nút hiện có click được, nhãn và focus rõ; nếu chưa có control, ghi N/A trong Notes | — | | |

## Bug format

```text
[ID] Page | Viewport | Steps | Actual | Expected | Severity (Blocker/Major/Minor)
```

Ví dụ cách ghi (chỉ minh họa, không phải bug đã phát hiện):

```text
[BUG-001] Parent Dashboard | 390x844 | Click Đăng xuất | 404 | Mở index.html | Major
```

- **Blocker:** không mở được trang hoặc không tiếp tục được bước kiểm thử chính.
- **Major:** link/module sai, nội dung bị che/cắt đáng kể hoặc không dùng được link hiện có.
- **Minor:** lỗi hiển thị nhỏ, vẫn đọc và thao tác được.

Bug thực tế: _chưa ghi nhận — điền sau khi test_.

Đạt mặc định chỉ sửa checklist này, không tự sửa feature của người khác. Chỉ thêm bản vá nhỏ vào `assets/css/qa-fixes.css` khi Thành đồng ý; ghi Bug ID và phạm vi bản vá, rồi kiểm thử lại trang liên quan ở cả hai viewport. Không kiểm thử auth thật, quyền lưu qua phiên, localStorage, unauthorized access, database hoặc API trong skeleton.
