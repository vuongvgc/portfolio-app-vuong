import commonContent from "./commonContent";
import addCommonParameters from "../helpers/addCommonParameters";

let vietnamText = {
  downloads: {
    resume: "https://i.topcv.vn/dominhvuong?ref=4280928",
    cv: "https://i.topcv.vn/dominhvuong?ref=4280928",
  },
  navigation: {
    home: "Trang Chủ",
    portfolio: "Dự Án",
    resume: "Sơ yếu lý lịch",
  },
  home: {
    description: "Xin Chào! Tôi là Đỗ Minh Vương",
    sub: "Tôi là một nhà phát triển web front-end tự học đầy tham vọng. Tôi có óc tò mò và luôn quan tâm đến việc tìm hiểu các công nghệ mới và nâng cao kiến ​​thức công nghệ hiện tại của mình. Tôi đang tìm một công việc mới và bạn có thể xem thông tin của tôi ở đây.",
  },
  portfolio: [
    { key: "movieTicket", title: "Đặc Vé Xem Phim" },
    { key: "npmSearch", title: "NPM Search" },
    { key: "fordCars", title: "Ford Ôtô" },
    { key: "ceoDog", title: "CEO Dog" },
    { key: "foodShop", title: "Food Shop" },
    { key: "udemyElearning", title: "Udemy E-learning" },
    { key: "uberPayment", title: "Tính Cước Uber" },
    { key: "staffManagement", title: "Quản Lý Nhân Viên" },
    { key: "caroOffline", title: "Cờ Caro" },
    { key: "todoList", title: "Quản Lý Công Việc" },
    { key: "crabGame", title: "Lắc bầu cua" },
    { key: "natours", title: "Du Lịch Natours" },
    { key: "movieHomePage", title: "Movie Homepage" },
    { key: "burgerApp", title: "Cửa Hàng Burger" },
    { key: "glassesApp", title: "Thử Kính" },
    { key: "socialMedia", title: "Sẽ Đến Sớm" },
    { key: "eCommerce", title: "Sẽ Đến Sớm" },
    { key: "eLeaning", title: "Sẽ Đến Sớm" },
    { key: "portfolioPageThisSite", title: "Trang Cá Nhân" },
  ],
  portfolioButtons: {
    live: "Xem",
    code: "Code",
  },
  resume: {
    education: {
      title: "Học Vấn",
      degree: "Lập Trình Front-End Chuyên Nghiệp",
      university: "Cybersoft Academy",
      gpa: "Điểm số: 80 / 100",
      years: "[ 2020 – 2021]",
    },
    selfLearning: {
      title: "Tự Học",
      description: "Lập Trình Front-End Chuyên Nghiệpr",
      place: "W3schools.com, FreeCodeCamp, Udemy",
      years: "[ 2019 - hiện tại ]",
    },
    stack: {
      title: "Công nghệ",
      stackList: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Sass (SCSS)",
        "JavaScript",
        "React",
        "Angular",
        "Material UI",
        "BEM",
        "Responsive Web",
        "Git",
        "VS Code",
      ],
    },
    languages: {
      title: "Ngôn Ngữ",
      languagesList: ["Tiếng Anh (Trung Cấp)", "Tiếng Việt (Bản Địa)"],
    },
    buttons: {
      resume: "Resume",
      cv: "CV",
    },
  },
};

export default addCommonParameters(commonContent, vietnamText);
