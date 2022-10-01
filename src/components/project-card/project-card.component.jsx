import { ReactComponent as GitLogo } from "../../assets/tech-skills/git-logo.svg";
import { ReactComponent as GitLogoLight } from "../../assets/tech-skills/git-logo-light.svg";
import { useThemeContext } from "../../context/theme/theme.context";
import CustomButton from "../custom_button/custom_button.component";
import ShakeAnimation from "./shake-animation";
import "./project-card.styles.scss";

const ProjectCard = ({ shakeAnimation = false, data }) => {
   const { currentTheme } = useThemeContext();
   const { title, text, imageDesktop, imageTablet, technologies, url, github } = data;

   return (
      <div className="project-container">
         <div className="project-content">
            <h2 className="project-content--title">{title}</h2>
            <p className="project-content--about">{text}</p>
            <ul className="project-content--technologies">
               {technologies.map((tech, index) => {
                  return <li key={index}>{tech}</li>;
               })}
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
         <ShakeAnimation active={shakeAnimation}>
            <picture>
               <source media="(max-width:1200px)" srcSet={imageTablet} />
               <img src={imageDesktop} className="project-image" alt={title} />
            </picture>
         </ShakeAnimation>
      </div>
   );
};

export default ProjectCard;
