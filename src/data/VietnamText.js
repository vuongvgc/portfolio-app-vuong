import commonContent from "./commonContent";
import addCommonParameters from "../helpers/addCommonParameters";

let vietnamText = {
  downloads: {
    resume:
      "https://github.com/vuongvgc/portfolio-app-vuong/blob/master/src/static/Resume_Do_Minh_Vuong.pdf",
    cv: "https://github.com/vuongvgc/portfolio-app-vuong/blob/master/src/static/Resume_Do_Minh_Vuong.pdf",
  },
  navigation: {
    home: "Trang Chủ",
    portfolio: "Dự Án",
    resume: "Sơ yếu lý lịch",
  },
  home: {
    description:
      "Xin Chào! Tôi là Đỗ Minh Vương và tôi là Nhà phát triển Web Front-End.",
  },
  portfolio: [
    { key: "movieTicket", title: "Đặc Vé Xem Phim" },
    { key: "fordCars", title: "Ford Ôtô" },
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
      title: "Образование",
      degree: "Бакалавр, Деловое администрирование",
      university: "Brandon University (Канада)",
      gpa: "GPA: 3.71 / 4.30",
      years: "[ 2013 – 2017 ]",
    },
    workExperience: {
      title: "Работа",
      jobPosition: "Application Specialist (CaseWare)",
      jobPlace: "MNP (Калгари, Канада)",
      years: "[ 2017 - 2019 ]",
    },
    stack: {
      title: "Стек",
      stackList: [
        "JavaScript",
        "HTML5",
        "Веб-дизайн",
        "React",
        "CSS3",
        "БЭМ",
        "Redux",
        "D3.js",
        "Python",
        "Sass (SCSS)",
        "jQuery",
        "SQL",
        "Bootstrap",
        "Git",
        "Agile",
      ],
    },
    languages: {
      title: "Языки",
      languagesList: [
        "Английский (Продвинутый / C2)",
        "Русский (Родной Язык)",
        "Французский (Базовый / A2)",
      ],
    },
    buttons: {
      resume: "Резюме",
      cv: "CV",
    },
  },
};

export default addCommonParameters(commonContent, vietnamText);
