import commonContent from "./commonContent";
import addCommonParameters from "../helpers/addCommonParameters";

const englishText = {
  downloads: {
    resume: "https://i.topcv.vn/dominhvuong?ref=4101582",
    cv: "https://i.topcv.vn/dominhvuong?ref=4101582",
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
    { key: "uberPayment", title: "Uber Payment" },
    { key: "staffManagement", title: "Staff Management" },
    { key: "caroOffline", title: "Caro Offline" },
    { key: "todoList", title: "Todo List" },
    { key: "crabGame", title: "Crab Game" },
    { key: "natours", title: "Natours" },
    { key: "movieHomePage", title: "Movie Homepage" },
    { key: "burgerApp", title: "Burger App" },
    { key: "glassesApp", title: "Glasses Try App" },
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
      degree: "Front-End Web Developer Professional",
      university: "Cybersoft Academy",
      gpa: "Cumulative GPA : 80 / 100",
      years: "[ 2020 – 2021]",
    },
    selfLearning: {
      title: "Self-learning",
      description: "Front-End Web Developer",
      place: "W3schools.com, FreeCodeCamp, Udemy",
      years: "[ 2019 - Present ]",
    },
    stack: {
      title: "Stack",
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
      title: "Languages",
      languagesList: ["English (Intermediate)", "Vietnamese (Native)"],
    },
    buttons: {
      resume: "Resume",
      cv: "CV",
    },
  },
};

export default addCommonParameters(commonContent, englishText);
