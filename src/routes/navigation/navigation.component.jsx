import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"

import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <div className="nav-link-container">
                    <Link className="nav-link" to='/'>README.MD</Link>
                </div>
                <div className="nav-link-container">
                    <Link className="nav-link" to='/'>Projects</Link>
                </div>
                <div className="nav-link-container">
                    <Link className="nav-link" to='/'>Contact</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
        
    )
}

export default Navigation