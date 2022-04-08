import React from "react";
import "./row_counter.styles.scss"



const RowCounter = ({className, number}) => {

    const array = [...Array(50).keys()];

 
    return (
        <div  className={`row-counter-default ${className}`}>
           {array.join(" ")}
        </div>
    )
}

export default React.memo(RowCounter);
