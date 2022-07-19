import bookWord from "../../assets/project-img/bookWord-mockup.png"
import barberShop from "../../assets/project-img/barber-shop-mockup.png"
import portfolioWebsite from "../../assets/project-img/portfolio-website-mockup.png"
import mainProject from "../../assets/project-img/main-project-mockup.svg"


const mockup = [
   { 
      title: "Main Project",
      text: "This is full stack app for collecting whatever user wants. It has authentication build with JSON Web Tokens, live comment updates, search bar based on MongoDB search index.",
      technologies: ["Tailwindcss", "TypeScript", "React", "React-Redux", "Sagas", "Node.js: Express, MongoDB"], 
      image: mainProject,
      url: "https://main-app-collections.herokuapp.com",
      github: "https://github.com/LukaszStaniszewski/main-project",
   },
    {
        title: "Book World",
        text: "This project is an e-commerce website. It has sign in / sign up functionality, ability to browse through various shopping categories, possibility to add items to cart and pay for them with a payment card.",
        technologies: ['HTML', "Sass", "JavaScript", "React", "React-Redux", "Sagas", "Firebase"], 
        image: bookWord,
        url: "https://book-world.lukaszstaniszewski.com",
        github: "https://github.com/LukaszStaniszewski/book-world"
    },
    {
        title: "Portfolio Website",
        text:"It is this website",
        technologies: ["Sass", "JavaScript", "React"],
        image: portfolioWebsite,
        url: "https://www.lukaszstaniszewski.com",
        github: "https://github.com/LukaszStaniszewski/portfolio_website"
    },
    {
        title: "Barber Shop",
        text: "It is static, fully responsive website, advertising a barber shop. I made this application to showcase knowledge and skills in Sass / CSS",
        technologies: ["HTML", "Sass", "JavaScript"],
        image: barberShop,
        url: "https://lukaszstaniszewski.github.io/Barber-shop/",
        github: "https://github.com/LukaszStaniszewski/Barber-shop"

    },
    {
        title: "Parcel locker",
        text: "It is a live form validator, with possibility to swap between polish and english language. Application made to showcase knowledge and skills in vanilla JavaScript.",
        technologies: ["CSS", "JavaScript"],
        image: "https://i.ibb.co/ZBsWfm3/projects-presentation-Parcel-locer-ver2.png",
        url: "https://lukaszstaniszewski.github.io/paczkomat__parcel-locker/",
        github: "https://github.com/LukaszStaniszewski/paczkomat__parcel-locker"
    }
]

const PROJECTS_DATA = Object.freeze(mockup)

export default PROJECTS_DATA