import {Outlet } from "react-router-dom"
import { Fragment } from "react"
import Header from "../../components/header/header.component"
import Footer from "../../components/footer/footer.component"

const Navigation = () => {


    return (
        <Fragment>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </Fragment>
        
    )
}

export default Navigation