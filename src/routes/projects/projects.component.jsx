import { ReactComponent as ScrollMouse } from "../../assets/mouse.svg";
import { ReactComponent as ScrollMouseLight } from "../../assets/mouse-light.svg";

import ProjectFrame from "../../components/project-frame/project-frame.component";
import PROJECTS_DATA from "./projects_data";
import { useThemeContext } from "../../context/theme/theme.context";

import "./projects.styles.scss";

const Projects = () => {
   const { currentTheme } = useThemeContext();
   const executeScroll = () => window.scrollTo(0, window.innerHeight - 50);

   return (
      <section className="projects-container">
         <button className="scroll-button" onClick={executeScroll}>
            {currentTheme ? <ScrollMouseLight /> : <ScrollMouse />}
         </button>
         {PROJECTS_DATA.map((project, index) => {
            if (index === 1) return <ProjectFrame key={index} data={project} />;

            return <ProjectFrame key={index} data={project}></ProjectFrame>;
         })}
      </section>
   );
};

export default Projects;
