import { Fragment, useState } from "react"
import { Link } from "react-router-dom"

import "./side-nav.styles.scss"
import folders from "../../assets/folders.png"


const SideNav = () => {
const [state, setState] = useState(false)
const [state2, setState2] = useState(false)
    const handleClick = () => {
        if(!state) return setState(true)
        if(state) return setState(false)
    }

    const handleClick2 = () => {
        if(!state2) return setState2(true)
        if(state2) return setState2(false)
    }
    return (
        <aside className={`side-nav ${state && 'side-nav-active'}`}>
            <div className="side-nav__logo-container">
                <img className={`logo-folder ${state && 'logo-clicked'}`} onClick={handleClick} src={folders} alt="" />
            </div>
            <div className={`side-nav__overlay ${state && 'side-nav-active'} `}>
                <div className="side-nav__folder" onClick={handleClick2} > 
                    <div className={`${state2 && "folder-clicked"}`}> <span >&#62;</span> Projects</div>
                    {
                      state2 &&
                        <Fragment>
                            <a href="https://google.com" target="_blank">Book World</a>
                            <a href="https://google.com" target="_blank">Barber shop</a>
                            <a href="https://google.com" target="_blank">Parcel locker</a> 
                        </Fragment> 
                        
                    }
                  
                </div>
            </div>
        </aside>
    )
}

export default SideNav