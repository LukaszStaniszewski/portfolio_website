import {Outlet } from "react-router-dom"
import { Fragment } from "react"
import Header from "../../components/header/header.component"
import SideNav from "../../components/side-nav/side-nav.component"
import Footer from "../../components/footer/footer.component"

const Navigation = () => {


    return (
        <Fragment>
            <Header></Header>
            <SideNav></SideNav>
            <Outlet/>
            <Footer></Footer>
        </Fragment>
        
    )
}

export default Navigation