# Mẫu kiểm thử QA

Đạt điền kết quả sau khi kiểm thử thực tế. `—` nghĩa là chưa chạy, không phải PASS. Mỗi hàng ghi `PASS` hoặc `FAIL`; khi FAIL, ghi Bug ID và mô tả ở danh sách bug bên dưới. Ghi ngày, người kiểm thử và browser/phiên bản vào Notes khi bắt đầu một lượt.

Chạy local server tại root (`python -m http.server 8000`). Viewport là kích thước vùng hiển thị nội dung của browser, không phải kích thước cả cửa sổ. Bốn trang phải được kiểm tra ở cả desktop **1366 × 768** và mobile **390 × 844**. Có thể copy bảng cho lượt kiểm thử mới.

| Page | Viewport | Test item | PASS/FAIL | Bug ID | Notes |
| --- | --- | --- | --- | --- | --- |
| Login — `index.html` | 1366 × 768 | CSS load: đủ global, layout, login, qa-fixes theo đúng thứ tự; không 404 | — | | |
| Login — `index.html` | 1366 × 768 | Relative links: đi Dashboard và các link shell đúng trang, không 404 | — | | |
| Login — `index.html` | 1366 × 768 | Overflow: không cuộn ngang ngoài ý muốn, nội dung không bị cắt | — | | |
| Login — `index.html` | 1366 × 768 | Readable text: tiêu đề, TODO/nội dung, navigation và footer dễ đọc | — | | |
| Login — `index.html` | 1366 × 768 | Button/link: click được, nhãn rõ, không bị lớp khác che | — | | |
| Login — `index.html` | 390 × 844 | CSS load: đủ global, layout, login, qa-fixes theo đúng thứ tự; không 404 | — | | |
| Login — `index.html` | 390 × 844 | Relative links: đi Dashboard và các link shell đúng trang, không 404 | — | | |
| Login — `index.html` | 390 × 844 | Overflow: không cuộn ngang ngoài ý muốn, nội dung không bị cắt | — | | |
| Login — `index.html` | 390 × 844 | Readable text: tiêu đề, TODO/nội dung, navigation và footer dễ đọc | — | | |
| Login — `index.html` | 390 × 844 | Button/link: click được, nhãn rõ, không bị lớp khác che | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | CSS load: đủ global, layout, parent-dashboard, qa-fixes theo đúng thứ tự; không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Relative links: Viewer có `?id=cam01`; các link shell đúng trang, không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Overflow: không cuộn ngang ngoài ý muốn, nội dung không bị cắt | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Readable text: tiêu đề, TODO/nội dung, navigation và footer dễ đọc | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 1366 × 768 | Button/link: click được, nhãn rõ, không bị lớp khác che | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | CSS load: đủ global, layout, parent-dashboard, qa-fixes theo đúng thứ tự; không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Relative links: Viewer có `?id=cam01`; các link shell đúng trang, không 404 | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Overflow: không cuộn ngang ngoài ý muốn, nội dung không bị cắt | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Readable text: tiêu đề, TODO/nội dung, navigation và footer dễ đọc | — | | |
| Parent Dashboard — `pages/parent-dashboard.html` | 390 × 844 | Button/link: click được, nhãn rõ, không bị lớp khác che | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | CSS load: đủ global, layout, camera-viewer, qa-fixes theo đúng thứ tự; không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Relative links: về Dashboard và các link shell đúng trang, không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Overflow: không cuộn ngang ngoài ý muốn, nội dung không bị cắt | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Readable text: tiêu đề, TODO/nội dung, navigation và footer dễ đọc | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 1366 × 768 | Button/link: click được, nhãn rõ, không bị lớp khác che | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | CSS load: đủ global, layout, camera-viewer, qa-fixes theo đúng thứ tự; không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Relative links: về Dashboard và các link shell đúng trang, không 404 | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Overflow: không cuộn ngang ngoài ý muốn, nội dung không bị cắt | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Readable text: tiêu đề, TODO/nội dung, navigation và footer dễ đọc | — | | |
| Camera Viewer — `pages/camera-viewer.html?id=cam01` | 390 × 844 | Button/link: click được, nhãn rõ, không bị lớp khác che | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | CSS load: đủ global, layout, admin-access, qa-fixes theo đúng thứ tự; không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Relative links: Back to Login/Home và các link shell đúng trang, không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Overflow: không cuộn ngang ngoài ý muốn, nội dung không bị cắt | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Readable text: tiêu đề, TODO/nội dung, navigation và footer dễ đọc | — | | |
| Admin Access — `pages/admin-access.html` | 1366 × 768 | Button/link: click được, nhãn rõ, không bị lớp khác che | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | CSS load: đủ global, layout, admin-access, qa-fixes theo đúng thứ tự; không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Relative links: Back to Login/Home và các link shell đúng trang, không 404 | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Overflow: không cuộn ngang ngoài ý muốn, nội dung không bị cắt | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Readable text: tiêu đề, TODO/nội dung, navigation và footer dễ đọc | — | | |
| Admin Access — `pages/admin-access.html` | 390 × 844 | Button/link: click được, nhãn rõ, không bị lớp khác che | — | | |

## Bug format

```text
[ID] Page | Viewport | Steps | Actual | Expected | Severity (Blocker/Major/Minor)
```

Ví dụ cách ghi (chỉ minh họa, không phải bug đã phát hiện):

```text
[BUG-001] Login | 390x844 | Mở trang, click Dashboard | 404 | Mở Parent Dashboard | Major
```

- **Blocker:** không mở được trang hoặc không tiếp tục được bước kiểm thử chính.
- **Major:** link sai, nội dung bị che/cắt đáng kể hoặc không sử dụng được hành động chính.
- **Minor:** lỗi hiển thị nhỏ, vẫn đọc và thao tác được.

Bug thực tế: _chưa ghi nhận — điền sau khi test_.

Đạt mặc định chỉ sửa checklist này. Chỉ thêm bản vá nhỏ vào `assets/css/qa-fixes.css` khi Thành đã duyệt; ghi Bug ID và phạm vi bản vá, rồi kiểm thử lại các trang liên quan ở cả hai viewport. Không sửa file HTML/CSS của owner.
