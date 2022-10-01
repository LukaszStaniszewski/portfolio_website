import { ReactComponent as ScrollMouse } from "../../assets/mouse.svg";
import { ReactComponent as ScrollMouseLight } from "../../assets/mouse-light.svg";
import { Fragment } from "react";

import ProjectCard from "../../components/project-card/project-card.component";
import PROJECTS_DATA from "./projects_data";
import { useThemeContext } from "../../context/theme/theme.context";

import "./projects.styles.scss";

const Projects = () => {
   const { currentTheme } = useThemeContext();
   const executeScroll = () => window.scrollTo(0, window.innerHeight - 50);

   return (
      <section className="projects-container">
         {PROJECTS_DATA.map((project, index) => {
            if (index === 0)
               return (
                  <div className="first-project">
                     <div style={{ marginTop: "10vh" }} />
                     <ProjectCard shakeAnimation={true} key={index} data={project} />
                     <button className="scroll-button" onClick={executeScroll}>
                        {currentTheme ? <ScrollMouseLight /> : <ScrollMouse />}
                     </button>
                     <div style={{ marginBottom: "15vh" }} />
                  </div>
               );

            return (
               <Fragment>
                  <div style={{ marginTop: "12vh" }} />
                  <ProjectCard key={index} data={project}></ProjectCard>
                  <div style={{ marginBottom: "15vh" }} />
               </Fragment>
            );
         })}
      </section>
   );
};

export default Projects;
