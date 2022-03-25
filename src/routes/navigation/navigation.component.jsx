import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"
import Header from "../../components/header/header.component"
import SideNav from "../../components/side-nav/side-nav.component"
// import './navigation.styles.scss'

const Navigation = () => {


    return (
        <Fragment>
            {/* <div className="navigation">
               
                    <Link className="nav-link nav-link-clicked" to='/'>README.MD</Link>
                
             
                    <Link className="nav-link" to='/'>Projects</Link>
                
               
                    <Link className="nav-link" to='/'>Contact</Link>
               
            </div> */}
            <Header></Header>
            <SideNav></SideNav>
            <Outlet/>
        </Fragment>
        
    )
}

export default Navigation