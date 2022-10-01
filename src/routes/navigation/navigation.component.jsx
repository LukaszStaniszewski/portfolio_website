import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";

const Navigation = () => {
   return (
      <Fragment>
         <Navbar />
         <Outlet />
         <Footer />
      </Fragment>
   );
};

export default Navigation;
