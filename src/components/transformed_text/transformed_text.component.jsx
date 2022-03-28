import { Fragment, useEffect } from "react"

import "./transformed_text.styles.scss"

// const TransformedText = ({text, color, ...otherProps}) => {
//     // useEffect(() => {
//     //     document.querySelector(".lala1").innerHTML = text
//     // }, [])
//    const splitText = text.split(" ");
//     console.log(splitText)
//     return (
//     // <div className="lala1" {...otherProps} ></div>
//     <Fragment>
//     {
//         splitText.map((word, index) => {
//           return  <span key={index} className={color[word] ? `${color[word]}`: 'text-quaternary'}>{word}</span>
//         //   return  <div key={index} style={{color: `var(--color-text-primary)`}}>{word}</div>
//         })
//     }
  
//     </Fragment>
//     )
// }

// export default TransformedText

const TransformedText = ({text, color, ...otherProps}) => {
  // useEffect(() => {
  //     document.querySelector(".lala1").innerHTML = text
  // }, [])
 const splitText = text.split(" ");
  console.log(splitText)
  return (
  // <div className="lala1" {...otherProps} ></div>
  <Fragment>
  {
      splitText.map((word, index) => {
        return  <span key={index} className={color[word] ? `${color[word]}`: 'text-quaternary'}>{word}</span>
      //   return  <div key={index} style={{color: `var(--color-text-primary)`}}>{word}</div>
      })
  }

  </Fragment>
  )
}

export default TransformedText