import commonContent from "./commonContent";
import addCommonParameters from "../helpers/addCommonParameters";

const englishText = {
  downloads: {
    resume:
      "https://github.com/vuongvgc/portfolio-app-vuong/blob/master/src/static/Resume_Do_Minh_Vuong.pdf",
    cv: "https://github.com/vuongvgc/portfolio-app-vuong/blob/master/src/static/Resume_Do_Minh_Vuong.pdf",
  },
  navigation: {
    home: "Home",
    portfolio: "Portfolio",
    resume: "Resume",
  },
  home: {
    description:
      "Hi! My name is Do Minh Vuong and I am a Front-End Web Developer.",
  },
  portfolio: [
    { key: "movieTicket", title: "Movie Ticket" },
    { key: "fordCars", title: "Ford Cars" },
    { key: "udemyElearning", title: "Udemy E-learning" },
    { key: "caroOffline", title: "Caro Offline" },
    { key: "todoList", title: "Todo List" },
    { key: "crabGame", title: "Crab Game" },
    { key: "natours", title: "Natours" },
    { key: "movieHomePage", title: "Movie Homepage" },
    { key: "burgerApp", title: "Burger App" },
    { key: "glassesApp", title: "Glasses Try App" },
    { key: "uberPayment", title: "Uber Payment" },
    { key: "staffManagement", title: "Staff Management" },
    { key: "socialMedia", title: "Coming Soon" },
    { key: "eCommerce", title: "Coming Soon" },
    { key: "eLeaning", title: "Coming Soon" },
    { key: "portfolioPageThisSite", title: "Portfolio Page (This Site)" },
  ],
  portfolioButtons: {
    live: "Live",
    code: "Code",
  },
  resume: {
    education: {
      title: "Education",
      degree: "Bachelor of Arts, Business Administration",
      university: "Brandon University (Brandon, MB)",
      gpa: "Cumulative GPA : 3.71 / 4.30",
      years: "[ 2013 – 2017 ]",
    },
    workExperience: {
      title: "Work",
      jobPosition: "Application Specialist (CaseWare)",
      jobPlace: "MNP (Calgary, AB)",
      years: "[ 2017 - 2019 ]",
    },
    stack: {
      title: "Stack",
      stackList: [
        "JavaScript",
        "HTML5",
        "Web Design",
        "React",
        "CSS3",
        "BEM",
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
      title: "Languages",
      languagesList: [
        "English (Advanced / Fluent)",
        "Russian (Native)",
        "French (Basic)",
      ],
    },
    buttons: {
      resume: "Resume",
      cv: "CV",
    },
  },
};

export default addCommonParameters(commonContent, englishText);
