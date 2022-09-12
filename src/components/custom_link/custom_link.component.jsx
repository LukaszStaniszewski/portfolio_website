import { NavLink } from "react-router-dom";
import "./custom_link.styles.scss";
import React from "react";

const LINK_TYPE = {
   header: "header-link-clicked",
};

const CustomLink = ({ linkType, children, ...otherProps }) => {
   return (
      <NavLink
         className={({ isActive }) =>
            isActive ? `default-link ${LINK_TYPE[linkType]}` : "default-link"
         }
         {...otherProps}
      >
         <span>{children}</span>
         {children}
      </NavLink>
   );
};

export default React.memo(CustomLink);
