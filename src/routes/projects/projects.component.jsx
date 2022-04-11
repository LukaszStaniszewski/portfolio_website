import {ReactComponent as ScrollMouse} from "../../assets/mouse.svg"
import {ReactComponent as ScrollMouseLight} from "../../assets/mouse-light.svg";

import Project from "../../components/project/project.component"
import PROJECTS_DATA from "./projects_data"
import {useThemeContext} from "../../context/theme/theme.context"

import "./projects.styles.scss"

const Projects = () => {
const {currentTheme} = useThemeContext()
const executeScroll = () =>  window.scrollTo(0, (window.innerHeight))



    return (
        <section className="projects-container">
            <button className="scroll-button" onClick={executeScroll}>
                {currentTheme
                    ?<ScrollMouseLight/>
                    :<ScrollMouse   />}
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