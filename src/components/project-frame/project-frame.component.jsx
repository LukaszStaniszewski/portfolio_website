import { ReactComponent as GitLogo } from "../../assets/tech-skills/git-logo.svg";
import { ReactComponent as GitLogoLight } from "../../assets/tech-skills/git-logo-light.svg";
import { useThemeContext } from "../../context/theme/theme.context";
import CustomButton from "../custom_button/custom_button.component";
import "./project-frame.styles.scss";

const ProjectFrame = ({ data }) => {
   const { currentTheme } = useThemeContext();
   const { title, text, image, technologies, url, github } = data;

   return (
      <div className="project-container">
         <div className="project-content">
            <h3 className="project-content--title">{title}</h3>
            <span className="project-content--about">{text}</span>
            <ul className="project-content--technologies">
               {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
               ))}
            </ul>
            <div className="project-content__button-container">
               <CustomButton newTab={url}>Visit{`\xa0`}site</CustomButton>
               <a href={github} target="_blank" className="github-link" rel="noreferrer">
                  {currentTheme ? (
                     <GitLogoLight className="git-logo" />
                  ) : (
                     <GitLogo className="git-logo" />
                  )}
               </a>
            </div>
         </div>
         <div className="project-image" style={{ backgroundImage: `url(${image})` }} />
      </div>
   );
};

export default ProjectFrame;
