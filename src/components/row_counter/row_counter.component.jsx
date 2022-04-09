import React from "react";
import "./row_counter.styles.scss"



const RowCounter = ({className, number}) => {

    const array = [...Array(50)]
    array.forEach((value, index) =>  array.push(index+1))

 
    return (
        <div  className={`row-counter-default ${className}`}>
           {array.join(" ")}
        </div>
    )
}

export default React.memo(RowCounter);
