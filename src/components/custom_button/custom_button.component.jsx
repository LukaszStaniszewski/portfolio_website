import React, { useEffect, useRef } from "react";
import "./custom_button.styles.scss"

const CustomButton = ({children, newTab, className, ...otherProps}) => {
    const buttonRef = useRef()

    const visitSite = () =>{
      if(!newTab) return
      const url = newTab;
      window.open(url, '_blank');
  }

    useEffect(() => {
        buttonRef.current.innerHTML = '<div><span>' + buttonRef.current.textContent.trim().split('').join('</span><span>') + '</span></div>';
    }, []) 

  return (
    <button ref={buttonRef} className={`custom-button-default drive ${className}`}  onClick={visitSite} {...otherProps}>{children}</button>
  ) 
}

export default React.memo(CustomButton);