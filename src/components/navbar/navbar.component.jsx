import { useState, useEffect } from "react";

import { MoonDark, MoonLight, SunDark, SunLight } from "../../assets";
import { useThemeContext } from "../../context/theme/theme.context";
import CustomLink from "../custom_link/custom_link.component";
import Hamburger from "../hamburger/hamurger.component";

import "./navbar.styles.scss";

const Navbar = () => {
   const [toggleHamburger, setToggleHamburger] = useState(false);
   const { setThemeContext } = useThemeContext();

   const [theme, setTheme] = useState(() => {
      const saved = localStorage.getItem("theme");
      const initialValue = JSON.parse(saved);
      return initialValue || null;
   });

   useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme));
      document.documentElement.setAttribute("data-theme", theme);
      setThemeContext(theme);
   }, [theme]);

   const toggleHamurgerHandler = () => setToggleHamburger(!toggleHamburger);

   const switchTheme = () => {
      if (!theme) {
         document.documentElement.setAttribute("data-theme", theme);
         return setTheme("light");
      } else {
         setTheme(null);
         return document.documentElement.removeAttribute("data-theme");
      }
   };

   return (
      <nav className="navbar">
         <div
            className={`${
               toggleHamburger && "overlay-open"
            } navbar__link-container overlay`}
         >
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

         <div className="navbar__toogle-theme-container">
            {theme ? <MoonLight /> : <MoonDark />}
            <button className={`switch-theme ${theme}`} onClick={switchTheme} />
            {theme ? <SunLight /> : <SunDark />}
         </div>

         <Hamburger toggle={toggleHamburger} onClick={toggleHamurgerHandler} />
      </nav>
   );
};

export default Navbar;
