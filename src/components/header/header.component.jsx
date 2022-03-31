import { useLocation} from "react-router-dom"
import { useState, useEffect} from "react"

import {ReactComponent as MoonDark} from "../../assets/theme-switch/moon-dark.svg"
import {ReactComponent as MoonLight} from "../../assets/theme-switch/moon-light.svg"
import {ReactComponent as SunDark} from "../../assets/theme-switch/sun-dark.svg"
import {ReactComponent as SunLight} from "../../assets/theme-switch/sun-light.svg"

import CustomLink from "../custom_link/custom_link.component"
import { useThemeContext} from "../../context/theme/theme.context"
import './header.styles.scss'

const Header = () => {
    const currentLocation = useLocation();
    const [active, setActive] = useState(currentLocation.pathname)
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme")
        const initialValue = JSON.parse(saved)
        return initialValue || null
    })
    // const {setThemeContext} = useThemeContext
    const {setThemeContext} = useThemeContext()
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
        document.documentElement.setAttribute("data-theme", theme)
        setThemeContext(theme)
    }, [theme])
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
            
            document.documentElement.setAttribute("data-theme", theme)
            return setTheme("light")
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