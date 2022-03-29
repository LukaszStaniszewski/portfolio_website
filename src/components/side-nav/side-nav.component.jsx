import { useState } from "react"

import "./side-nav.styles.scss"
import folders from "../../assets/folders.png"


const SideNav = () => {
const [state, setState] = useState(false)

    const handleClick = () => {
        if(!state) return setState(true)
        if(state) return setState(false)
    }
    return (
        <aside className={`side-nav ${state && 'side-nav-active'}`}>
            <div className="side-nav__logo-container">
                <img className={`logo-folders ${state && 'logo-clicked'}`} onClick={handleClick} src={folders} alt="" />
            </div>
            <div className={`side-nav__overlay ${state && 'side-nav-active'} `}></div>
        </aside>
    )
}

export default SideNav