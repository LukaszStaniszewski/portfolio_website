import bookWorld from "../../assets/project-img/book-world-desktop.png";
import barberShop from "../../assets/project-img/barber-shop-desktop.png";
import portfolioWebsite from "../../assets/project-img/portfolio-desktop.png";
import mainProject from "../../assets/project-img/Main-Project-dekstop.png";
import paczkomat from "../../assets/project-img/paczkomat-desktop.png";
import mainProjectTablet from "../../assets/project-img/main-project-tablet.png";
import barberShopTablet from "../../assets/project-img/barber-shop-tablet.png";
import paczkomatTablet from "../../assets/project-img/paczkomat-tablet.png";
import portfolioWebsiteTablet from "../../assets/project-img/portfolio-website-tablet.png";
import bookWorldTablet from "../../assets/project-img/book-world-tablet.png";

const mockup = [
   {
      title: "Main Project",
      text: "This is full stack app for collecting whatever user wants. It has authentication build with JSON Web Tokens, live comment updates, search bar based on MongoDB search index.",
      technologies: ["TypeScript", "React", "Sagas", "Node.js: Express, MongoDB", "Jest"],
      imageDesktop: mainProject,
      imageTablet: mainProjectTablet,
      url: "https://main-app-collections.herokuapp.com",
      github: "https://github.com/LukaszStaniszewski/main-project",
   },
   {
      title: "Book World",
      text: "This project is an e-commerce website. It has sign in / sign up functionality, ability to browse through various shopping categories, possibility to add items to cart and pay for them with a payment card.",
      technologies: ["JavaScript", "React", "Sagas", "Firebase"],
      imageDesktop: bookWorld,
      imageTablet: bookWorldTablet,
      url: "https://book-world.lukaszstaniszewski.com",
      github: "https://github.com/LukaszStaniszewski/book-world",
   },
   {
      title: "Portfolio Website",
      text: "This website.",
      technologies: ["Sass", "JavaScript", "React"],
      imageDesktop: portfolioWebsite,
      imageTablet: portfolioWebsiteTablet,
      url: "https://www.lukaszstaniszewski.com",
      github: "https://github.com/LukaszStaniszewski/portfolio_website",
   },
   {
      title: "Barber Shop",
      text: "It is static, fully responsive website, advertising a barber shop. I made this application to showcase knowledge and skills in Sass / CSS.",
      technologies: ["Sass", "JavaScript"],
      imageDesktop: barberShop,
      imageTablet: barberShopTablet,
      url: "https://lukaszstaniszewski.github.io/Barber-shop/",
      github: "https://github.com/LukaszStaniszewski/Barber-shop",
   },
   {
      title: "Parcel locker",
      text: "It is a live form validator, with possibility to swap between polish and english language. Application made to showcase knowledge and skills in vanilla JavaScript.",
      technologies: [],
      imageDesktop: paczkomat,
      imageTablet: paczkomatTablet,
      url: "https://lukaszstaniszewski.github.io/paczkomat__parcel-locker/",
      github: "https://github.com/LukaszStaniszewski/paczkomat__parcel-locker",
   },
];

const PROJECTS_DATA = Object.freeze(mockup);

export default PROJECTS_DATA;
