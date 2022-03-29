import React , { Fragment} from "react"

import "./transformed_text.styles.scss"

const TransformedText = ({text, color, ...otherProps}) => {

 const splitText = text.split(' ');
  console.log(splitText)
  return (
  
  <Fragment>
    {
      splitText.map((word, index) => {
        if(word === "<br/>")  return  <br key={index} />
        return  <span key={index} className={color[word] ? `${color[word]}`: 'text-quaternary'} {...otherProps}>{word}</span>
      })
    }
  </Fragment>
  )
}

export default React.memo(TransformedText)