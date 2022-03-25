import { Link, useNavigate} from "react-router-dom"
import { useState } from "react"

import './header.styles.scss'

const Header = () => {
    const [state, setState] = useState(false)
    const [active, setActive] = useState("/")
    let navigate = useNavigate()
    // console.log(history)
    
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
   
        <div className="header">
            <Link className={`header-link ${active === "/" && "header-link-clicked"}`} onClick={() => handleClick("/")} to='/'>Home.js</Link>
            <Link className={`header-link ${active === 'readme' && "header-link-clicked"}`} onClick={() =>handleClick("readme")} to='readme'>README.MD</Link>
            <Link className={`header-link ${active === 'projects' && "header-link-clicked"}`} onClick={() =>handleClick("projects")} to='/'>Projects</Link>
            <Link className={`header-link ${active === 'contact' && "header-link-clicked"}`} onClick={() =>handleClick("contact")} to='/'>Contact</Link>
        </div>
    )   
}

export default Header