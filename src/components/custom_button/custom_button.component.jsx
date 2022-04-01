import React, { useEffect, useRef } from "react";
import "./custom_button.styles.scss"

const CustomButton = ({children, ...otherProps}) => {
    console.log("custom BUtton hit")
    const buttonRef = useRef()

    useEffect(() => {
        buttonRef.current.innerHTML = '<div><span>' + buttonRef.current.textContent.trim().split('').join('</span><span>') + '</span></div>';
    }, []) 

  return (
    <button ref={buttonRef} className="custom-button-default drive " {...otherProps}>{children}</button>
  ) 
}

export default React.memo(CustomButton);