import CustomLink from "../custom_link/custom_link.component";

import "./overlay.styles.scss";

const Overlay = ({ toggle }) => {
   return (
      <div className={`overlay ${toggle ? "overlay-open" : "overlay-closed"}`}>
         <CustomLink linkType="header" to="/">
            Home.js
         </CustomLink>
         <CustomLink linkType="header" to="/readme">
            README.md
         </CustomLink>
         <CustomLink linkType="header" to="/projects">
            Projects
         </CustomLink>
         <CustomLink linkType="header" to="/contact">
            Contact
         </CustomLink>
      </div>
   );
};

export default Overlay;
