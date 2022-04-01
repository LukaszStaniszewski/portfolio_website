import {ReactComponent as GitLogo} from "../../assets/git-logo.svg";
import {ReactComponent as GitLogoLight} from "../../assets/git-logo-light.svg";

import { useThemeContext} from "../../context/theme/theme.context";
import CustomButton from "../custom_button/custom_button.component";
import "./project.styles.scss"

const Project = ({data}) => {
    const {currentTheme} = useThemeContext()
    const {title, text, image,technologies} = data
   
    return (
    <div className="project-container">
        <div className="project-content">
            <h3 className="project-content--title">{title}</h3>
            <span className="project-content--about">{text}</span>
            <ul className="project-content--technologies">
                {
                    technologies.map((tech, index) => <li key={index}>{tech}</li>)
                }
            </ul>
            <div className="project-content__button-container">
                <CustomButton>Visit{`\xa0`}site</CustomButton>
                {
                    currentTheme 
                    ? <GitLogoLight/>
                    :  <GitLogo/>
                }
            </div >
        </div>
        <div className="project-image" style={{backgroundImage: `url(${image})`}}>
        </div>
    </div>
    )
}

export default Project;