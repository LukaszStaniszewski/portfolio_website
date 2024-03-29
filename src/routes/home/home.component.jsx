import { useState, useEffect, useRef } from "react";

import TransformedText from "../../components/transformed_text/transformed_text.component";
import RowCounter from "../../components/row_counter/row_counter.component";
import "./home.styles.scss";

const TEXT_COLORS = {
   const: "text-primary",
   Hi: "text-tertiary",
   "=": "text-primary",
   "()": "bracket-primary",
   "=>": "text-primary",
   "{": "bracket-primary",
   "}": "bracket-primary",
   "(": "bracket-secondary",
   ")": "bracket-secondary",
   '"': "color-quotation-marks",
   "console.": "text-secondary",
   log: "text-tertiary",
};

const Home = () => {
   const [state, setState] = useState("|");
   const [containerHight, setContainerHight] = useState(null);
   const ref = useRef(null);
   const welcomeText =
      'const Hi = () => { <br/> console. log ( <br/> " I am Łukasz <br/> Front End Developer " <br/> ) <br/> }';

   useEffect(() => {
      return () => setState();
   }, []);
   useEffect(() => {
      setContainerHight(ref.current.offsetHeight);
   }, [ref]);

   setTimeout(() => {
      if (state) return setState(null);
      if (!state) return setState("|");
   }, 500);

   return (
      <section ref={ref} className="home-container">
         <RowCounter className="home-rows" containerHight={containerHight} />
         <div className="home-welcome-text">
            <TransformedText text={welcomeText} color={TEXT_COLORS}>
               {" "}
            </TransformedText>
            <span className="text-primary text-blink">{state}</span>
         </div>
      </section>
   );
};
export default Home;
