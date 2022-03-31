
import {ReactComponent as ScrollMouse} from "../../assets/mouse.svg"

import Project from "../../components/project/project.component"
import "./projects.styles.scss"
import PROJECTS_DATA from "./projects_data"

const Projects = () => {

const executeScroll = () =>  window.scrollTo(0, (window.innerHeight + 30))

    return (
        <section className="projects-container">
            <button className="scroll-button" onClick={executeScroll}>
                <ScrollMouse   />
             </button>
            {
                PROJECTS_DATA.map((project, index) => {
                    if(index === 1) return <Project key={index} data={project}/>
                    
    
                    return <Project key={index} data={project} ></Project>
                })
            }
        
        </section>
    )
}

export default Projects