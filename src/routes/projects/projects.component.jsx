import { useEffect } from "react";
import "./projects.styles.scss"
import {ReactComponent as GitLogo} from "../../assets/git-logo.svg"

const Projects = () => {
    // .join('</span><span>') 
    useEffect(() => {
        const button = document.querySelector('.button')
        button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>';
        console.log(button.textContent)
    }, [])

    return (
        <section className="projects-container">
            <div className="project-container">
                <div className="project-content">
                    <h3 className="project-content--title">Book World</h3>
                    <span className="project-content--about">This project is an e-commerce webesite.
                    It has sign in / sign up functionality, abbility to browse thrugh various shoping categories, possibility to add items to cart and pay for them with a payment card.</span>
                    <ul className="project-content--technologies">
                        <li>HTML</li>
                        <li>Sass</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React-Redux</li>
                        <li>Sagas</li>
                        <li>Firebase</li>
                    </ul>
                    <div className="project-content__button-container">
                        <button className="button drive ">Visit{`\xa0`}site</button>
                        <GitLogo/>
                    </div >
                </div>
                <div className="project-image" style={{backgroundImage: "url('https://i.ibb.co/5hjSVgW/Screen-Shot-2022-01-24-at-20-35-10-PM.png)'"}}>
               
                </div>
            </div>
        </section>
    )
}

export default Projects