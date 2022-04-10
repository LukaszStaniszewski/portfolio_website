import { Link } from "react-router-dom"
import "./custom_link.styles.scss"
import React from "react"

const LINK_TYPE_CLASS = {
  header: 'header-link-clicked'
}
const CustomLink = ({children, classType, active,  ...otherProps}) => {

   
    return<Link 
        className={`default-link ${active === otherProps.to && LINK_TYPE_CLASS[classType]}`}
         {...otherProps}
        >{children}
    </Link>
}

export default React.memo(CustomLink);