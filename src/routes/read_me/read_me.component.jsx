import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

import {
   JsLogo,
   SassLogo,
   ReactLogo,
   TsLogo,
   ReduxLogo,
   GitLogo,
   GitLogoLight,
   NodeLogo,
   ExpressLogo,
   ExpressLogoLight,
   MongoDbLogo,
   TailwindLogo,
} from "../../assets/index";

import RowCounter from "../../components/row_counter/row_counter.component";
import TransformedText from "../../components/transformed_text/transformed_text.component";
import { useThemeContext } from "../../context/theme/theme.context";
import { useUrlContext } from "../../context/url/url.context";
import "./read_me.styles.scss";

const TEXT_COLORS = {
   Hi: "text-tertiary",
   "()": "bracket-primary",
};

const ReadMe = () => {
   const [divHight, setDivHight] = useState();
   const { currentTheme } = useThemeContext();
   const { setUrl } = useUrlContext();
   const ref = useRef(null);

   useEffect(() => {
      setDivHight(ref.current.offsetHeight);
   }, [ref]);

   return (
      <section ref={ref} className="readme-container">
         <RowCounter containerHight={divHight} className="readme-row" />
         <div className="readme-content">
            <div>## About me</div>
            <div className="readme-content--introduction">
               <span className="part1">
                  When I've started to learn programming, realized that process of
                  developing application gives me that feeling of enthusiasm. The need to
                  think about it from moring till evening is more important then the world
                  that surrounds me. This is my attitude towards programming.
               </span>
               <span className="part2">
                  I live in Poland in Warsaw and I am looking for my first job as frontend
                  developer. If you have any questions contact me.
                  <Link
                     to="/contact"
                     onClick={() => setUrl("/contact")}
                     className="contact-button"
                  >
                     <TransformedText
                        style={{ fontFamily: "Menlo" }}
                        text="Hi ()"
                        color={TEXT_COLORS}
                     />
                  </Link>
               </span>
            </div>
            <div>## Tech skills</div>

            <div className="readme-content__logos-container">
               <div>
                  <JsLogo className="logo"></JsLogo>
                  <span>JavaScript</span>
               </div>
               <div>
                  <TsLogo className="logo"></TsLogo>
                  <span>TypeScript</span>
               </div>
               <div>
                  <ReactLogo className="logo"></ReactLogo>
                  <span>React</span>
               </div>
            </div>
            <div className="readme-content__logos-container">
               <div>
                  <NodeLogo className="logo"></NodeLogo>
                  <span>NodeJS</span>
               </div>
               <div>
                  {currentTheme ? (
                     <ExpressLogoLight className="logo"></ExpressLogoLight>
                  ) : (
                     <ExpressLogo className="logo"></ExpressLogo>
                  )}
                  <span>Express</span>
               </div>
               <div>
                  <MongoDbLogo className="logo"></MongoDbLogo>
                  <span>MongoDB</span>
               </div>
            </div>

            <div className="readme-content__logos-container">
               <div>
                  <ReduxLogo className="logo"></ReduxLogo>
                  <span>Redux</span>
               </div>
               <div>
                  <SassLogo className="logo"></SassLogo>
                  <span>Sass</span>
               </div>
               <div>
                  <TailwindLogo className="logo"></TailwindLogo>
                  <span>TailwindCss</span>
               </div>
               <div>
                  {currentTheme ? (
                     <GitLogoLight className="logo"></GitLogoLight>
                  ) : (
                     <GitLogo className="logo"></GitLogo>
                  )}
                  <span>GitHub</span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ReadMe;
