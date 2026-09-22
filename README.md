<div align="center">

  <!-- PROJECT LOGO / BANNER -->
  <a href="https://github.com/CaoXuanThanh/FE-developer">
    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Personal Portfolio & Web Design Project</h1>

  <p align="center">
    Dự án xây dựng giao diện Portfolio hiện đại với HTML5 Semantic, CSS Grid, Flexbox và CSS Custom Properties (Design Tokens) đạt chuẩn xu hướng 2026.
    <br />
    <a href="https://github.com/CaoXuanThanh/FE-developer"><strong>Khám phá tài liệu »</strong></a>
    <br />
    <br />
    <a href="#-demo--giao-diện">Xem Demo</a>
    ·
    <a href="https://github.com/CaoXuanThanh/FE-developer/issues">Báo lỗi</a>
    ·
    <a href="https://github.com/CaoXuanThanh/FE-developer/issues">Đóng góp tính năng</a>
  </p>

  <!-- BADGES (Shields.io) -->
  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Responsive-Design-success?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Responsive" />
    <img src="https://img.shields.io/badge/CSS_Variables-Design_Tokens-4338ca?style=for-the-badge&logo=w3c&logoColor=white" alt="CSS Variables" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License" />
  </p>
</div>

---

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>📋 Mục Lục (Table of Contents)</summary>
  <ol>
    <li>
      <a href="#-giới-thiệu-dự-án">Giới thiệu dự án</a>
      <ul>
        <li><a href="#-tính-năng-nổi-bật">Tính năng nổi bật</a></li>
        <li><a href="#-công-nghệ-sử-dụng">Công nghệ sử dụng</a></li>
      </ul>
    </li>
    <li><a href="#-cấu-trúc-thư-mục">Cấu trúc thư mục</a></li>
    <li>
      <a href="#-hướng-dẫn-cài-đặt--chạy-thử">Hướng dẫn cài đặt & chạy thử</a>
      <ul>
        <li><a href="#yêu-cầu-hệ-thống">Yêu cầu hệ thống</a></li>
        <li><a href="#các-bước-thực-hiện">Các bước thực hiện</a></li>
      </ul>
    </li>
    <li><a href="#-hệ-thống-design-tokens-css-variables">Hệ thống Design Tokens (CSS Variables)</a></li>
    <li><a href="#-kế-hoạch-phát-triển-roadmap">Kế hoạch phát triển (Roadmap)</a></li>
    <li><a href="#-đóng-góp-contributing">Đóng góp (Contributing)</a></li>
    <li><a href="#-giấy-phép-license">Giấy phép (License)</a></li>
    <li><a href="#-liên-hệ-author">Liên hệ (Author)</a></li>
  </ol>
</details>

---

## 📖 Giới thiệu dự án

Dự án **Portfolio Cá Nhân** được xây dựng trong khuôn khổ học phần **Phát triển Web**, tập trung vào việc áp dụng các phương pháp thiết kế giao diện hiện đại nhất:
* Khung bố cục đa chiều với **CSS Grid** (2 cột trên Desktop, 1 cột trên Mobile).
* Phân bổ thành phần linh hoạt bằng **Flexbox** cho khu vực kỹ năng và điều hướng.
* Quản lý màu sắc và khoảng cách tập trung bằng **CSS Custom Properties (`:root`)** theo xu hướng **Cyber Indigo & Luminous Cyan 2026**.
* Tối ưu hóa trải nghiệm người dùng trên mọi kích cỡ màn hình thông qua **Media Queries**.

### 🌟 Demo & Giao diện

| Chế độ Desktop (> 1024px) | Chế độ Mobile (< 768px) |
| :---: | :---: |
| Bố cục Grid 2 cột + Bento Cards | Tự động chuyển 1 cột, Sidebar lên đầu trang |
| 4 Cột dịch vụ & Floating Skill Pills | Tối ưu Touch Target & Compact Layout |

---

## ✨ Tính năng nổi bật

- [x] **Semantic HTML5:** Cấu trúc chuẩn SEO và Accessibility (`<header>`, `<aside>`, `<main>`, `<footer>`, `<section>`).
- [x] **Hệ thống Design Tokens:** Toàn bộ mã màu, khoảng cách (margin/padding/gap) và bo góc đều được quản lý tại `:root`.
- [x] **Bố cục CSS Grid 2 chiều:** Bố cục tổng thể trang web và phân chia khu vực trực quan qua `grid-template-areas`.
- [x] **Responsive Đa thiết bị:**
  - **Màn hình > 1024px:** Grid 4 cột cho khu vực Dịch vụ.
  - **Màn hình 768px - 1024px:** Tự động co về 2 cột.
  - **Màn hình < 768px:** Tối ưu hóa thành 1 cột duy nhất, đưa thông tin cá nhân lên đầu trang dạng thanh hồ sơ tinh gọn.
- [x] **Hiệu ứng Micro-interactions 2026:** Hiệu ứng đổ bóng phát quang (Glow Effect) và chuyển động mượt mà khi hover.

---

## 🛠 Công nghệ sử dụng

Dự án được xây dựng hoàn toàn bằng mã nguồn thuần (Vanilla), tối ưu tốc độ tải trang cao nhất:

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) **HTML5:** Ngôn ngữ đánh dấu ngữ nghĩa.
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) **CSS3:** Tạo kiểu giao diện, CSS Grid, Flexbox, Animations.
* ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white) **VS Code:** Trình biên tập mã nguồn.
* ![Live Server](https://img.shields.io/badge/Live_Server-5D3FD3?style=flat-square&logo=visual-studio-code&logoColor=white) **Live Server Extension:** Môi trường chạy thử nghiệm nội bộ.

---

## 📁 Cấu trúc thư mục

```text
voc-web-ai/
├── hd2.html          # Trang Portfolio chính (Cấu trúc HTML Semantic)
├── hd2.css           # Toàn bộ mã CSS (Biến :root, Grid, Flexbox, Media Queries)
├── buoi3.html        # Bài tập thực hành Grid & Flexbox cơ bản
├── buoi3.css         # Styling cho bài tập thực hành buổi 3
├── index.html        # Trang giới thiệu chi tiết ban đầu
└── README.md         # Tài liệu dự án chuẩn GitHub
```

---

## 🚀 Hướng dẫn cài đặt & Chạy thử

### Yêu cầu hệ thống
* Trình duyệt web hiện đại (Google Chrome, Microsoft Edge, Firefox, Safari,...).
* Đã cài đặt [Git](https://git-scm.com/) và [Visual Studio Code](https://code.visualstudio.com/) (Khuyên dùng).

### Các bước thực hiện

1. **Clone kho lưu trữ về máy tính:**
   ```bash
   git clone https://github.com/CaoXuanThanh/FE-developer.git
   ```

2. **Di chuyển vào thư mục dự án:**
   ```bash
   cd voc-web-ai
   ```

3. **Khởi chạy trang web:**
   * **Cách 1:** Mở trực tiếp file `hd2.html` bằng bất kỳ trình duyệt web nào.
   * **Cách 2 (Khuyên dùng):** Mở thư mục bằng VS Code, click chuột phải vào file `hd2.html` và chọn **Open with Live Server** (hoặc truy cập `http://127.0.0.1:5500/hd2.html`).

---

## 🎨 Hệ thống Design Tokens (CSS Variables)

Tất cả các thành phần trực quan được quy chuẩn tại `:root` trong `hd2.css`:

```css
:root {
  /* 2 Màu chủ đạo (Brand & Accent) */
  --color-primary: #4338ca;          /* Indigo hoàng gia */
  --color-secondary: #06b6d4;        /* Luminous Cyan phát sáng */

  /* 3 Mức màu xám (Typography Hierarchy) */
  --text-dark: #0f172a;              /* Slate 900 cho tiêu đề */
  --text-medium: #334155;            /* Slate 700 cho văn bản */
  --text-light: #64748b;             /* Slate 500 cho chú thích & footer */

  /* Nền & Khoảng cách */
  --bg-main: #f8fafc;                /* Canvas Slate 50 */
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 20px;
}
```

---

## 🗺 Kế hoạch phát triển (Roadmap)

- [x] Thiết lập cấu trúc HTML Semantic và bố cục cơ bản.
- [x] Áp dụng CSS Grid Layout và Flexbox đa chiều.
- [x] Xây dựng hệ thống CSS Variables chuẩn `:root`.
- [x] Tối ưu hóa Responsive với Media Queries đa kích thước.
- [ ] Tích hợp tính năng chuyển đổi Dark Mode / Light Mode.
- [ ] Thêm Animation khi cuộn trang (AOS / Scroll-driven Animations).
- [ ] Kết nối Contact Form với dịch vụ gửi email tự động (EmailJS / Formspree).

---

## 🤝 Đóng góp (Contributing)

Mọi đóng góp nhằm hoàn thiện dự án đều được chào đón nồng nhiệt! Để đóng góp:

1. **Fork** dự án này về tài khoản cá nhân.
2. Tạo nhánh tính năng mới (`git checkout -b feature/AmazingFeature`).
3. Commit các thay đổi (`git commit -m 'Add some AmazingFeature'`).
4. Push nhánh lên GitHub (`git push origin feature/AmazingFeature`).
5. Mở một **Pull Request** để được xem xét và tích hợp.

---

## 📄 Giấy phép (License)

Dự án được phân phối dưới giấy phép **MIT License**. Xem chi tiết tại file [LICENSE](LICENSE) (nếu có).

---

## 👤 Liên hệ (Author)

* **Tác giả:** Tất Huy Tuấn
* **Email:** 125000597@lachong.edu.vn
* **GitHub:** [@TatHuyTuan](https://github.com/TatHuyTuan)
* **Dự án:** [https://github.com/CaoXuanThanh/FE-developer](https://github.com/CaoXuanThanh/FE-developer)

<div align="center">
  <small>⭐ Hãy thả một Star nếu bạn thấy dự án này hữu ích!</small>
</div>
