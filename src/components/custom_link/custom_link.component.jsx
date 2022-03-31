import { Link } from "react-router-dom"
import "./custom_link.styles.scss"
import React from "react"

const LINK_TYPE_CLASS = {
  header: 'header-link-clicked'
}
const DESTINATION = {
    home: '/',
    readme: 'readme' ,
    projects: 'projects',
    contact: 'contact',
}

// const TEST = {
//     header: {
//         home: '/' && 'header-link-clicked',
//         readme: 'readme' && 'header-link-clicked',
//         projects: 'projects' && 'header-link-clicked',
//         contact: 'contact' && 'header-link-clicked',
//     }
// }

// const CustomLink = ({children, classType, active, to, ...otherProps}) => {
//     console.log("active",active)
//     console.log(to, LINK_TYPE_CLASS[classType])
//     return<Link 
//         className={`default-link ${active === to && LINK_TYPE_CLASS[classType]}`}
//         to={to} {...otherProps}
//         >{children}
//     </Link>
// }


const CustomLink = ({children, classType, active,  ...otherProps}) => {

   
    return<Link 
        className={`default-link ${active === otherProps.to && LINK_TYPE_CLASS[classType]}`}
         {...otherProps}
        >{children}
    </Link>
}

// const CustomLink = ({children, classType, active,  ...otherProps}) => {
//     console.log("active",active)
//     console.log(LINK_TYPE_CLASS[classType])
//     return<Link 
//         className={`default-link ${active === otherProps.to && DESTINATION[classType]}`}
//          {...otherProps}
//         >{children}
//     </Link>
// }

export default React.memo(CustomLink);