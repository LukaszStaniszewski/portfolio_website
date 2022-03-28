import { Fragment, useEffect } from "react"

import "./transformed_text.styles.scss"

const TransformedText = ({text, color, ...otherProps}) => {

 const splitText = text.split(" ");
  console.log(splitText)
  return (
  
  <Fragment>
    {
      splitText.map((word, index) => {
        if(word === "<br/>")  return  <div key={index} className={color[word] ? `${color[word]}`: 'text-quaternary'} {...otherProps}>{word === "<br/>" ? " " : word}</div>
        
        return  <span key={index} className={color[word] ? `${color[word]}`: 'text-quaternary'} {...otherProps}>{word}</span>
      })
    }
  </Fragment>
  )
}

export default TransformedText