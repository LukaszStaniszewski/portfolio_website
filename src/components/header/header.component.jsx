import { useLocation} from "react-router-dom"
import { useState } from "react"
import CustomLink from "../custom_link/custom_link.component"
import {ReactComponent as MoonDark} from "../../assets/theme-switch/moon-dark.svg"
import {ReactComponent as MoonLight} from "../../assets/theme-switch/moon-light.svg"
import {ReactComponent as SunDark} from "../../assets/theme-switch/sun-dark.svg"
import {ReactComponent as SunLight} from "../../assets/theme-switch/sun-light.svg"

import './header.styles.scss'

const Header = () => {
    const currentLocation = useLocation();
    const [active, setActive] = useState(currentLocation.pathname)
    const [theme, setTheme] = useState(null)

    const handleClick = (prop) => {
        switch(prop) {
            case '/':
                return setActive("/")
            case "/readme":
                return setActive("/readme")
            case "/projects":
                return setActive("/projects")
            case "/contact":
                return setActive("/contact")
            default:
                return setActive("/")
        }
    }

    const switchTheme = () => {
        if(!theme) {
            document.documentElement.setAttribute("data-theme", "light")
            return setTheme('light-mode')
        } else {
            setTheme(null)
            return document.documentElement.removeAttribute("data-theme")
        }
    }
    return (
   
        <nav className="header">
           <div className="header__link-container">
                <CustomLink classType='header' active={active} onClick={()=> handleClick('/')} to='/'>Home.js</CustomLink>
                <CustomLink classType='header' active={active} onClick={()=> handleClick('/readme')} to='/readme'>README.MD</CustomLink>
                <CustomLink classType='header' active={active} onClick={()=> handleClick('/projects')} to='/projects'>Projects</CustomLink>
                <CustomLink classType='header' active={active} onClick={()=> handleClick('/contact')} to='/contact'>Contact</CustomLink>
           </div>

            <div className="header__toogle-theme-container">
                {theme ? <MoonLight/> : <MoonDark/>}
                <button className={`switch-theme ${theme}`} onClick={switchTheme}/>
                {theme ? <SunLight/> : <SunDark/>}  
            </div>
        </nav>
    )   
}

export default Header