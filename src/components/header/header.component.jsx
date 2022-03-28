import { Link} from "react-router-dom"
import { useState } from "react"
import CustomLink from "../custom_link/custom_link.component"

import './header.styles.scss'

const Header = () => {
    const [active, setActive] = useState("/")
    
    const handleClick = (prop) => {
        switch(prop) {
            case '/':
                return setActive("/")
            case "readme":
                return setActive("readme")
            case "projects":
                return setActive("projects")
            case "contact":
                return setActive("contact")
            default:
                return setActive("/")
        }
    }

    return (
   
        <nav className="header">
            <CustomLink classType='header' active={active} onClick={()=> handleClick('/')} to='/'>Home.js</CustomLink>
            <CustomLink classType='header' active={active} onClick={()=> handleClick('readme')} to='readme'>README.MD</CustomLink>
            <CustomLink classType='header' active={active} onClick={()=> handleClick('projects')} to='projects'>Projects</CustomLink>
            <CustomLink classType='header' active={active} onClick={()=> handleClick('contact')} to='contact'>Contact</CustomLink>
            {/* <Link className={`header-link ${active === "/" && "header-link-clicked"}`} onClick={() => handleClick("/")} to='/'>Home.js</Link>
            <Link className={`header-link ${active === 'readme' && "header-link-clicked"}`} onClick={() =>handleClick("readme")} to='readme'>README.MD</Link>
            <Link className={`header-link ${active === 'projects' && "header-link-clicked"}`} onClick={() =>handleClick("projects")} to='/'>Projects</Link>
            <Link className={`header-link ${active === 'contact' && "header-link-clicked"}`} onClick={() =>handleClick("contact")} to='/'>Contact</Link> */}
        </nav>
    )   
}

export default Header