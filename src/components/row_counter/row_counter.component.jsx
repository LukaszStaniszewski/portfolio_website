import React from "react";
import "./row_counter.styles.scss"

const RowCounter = ({quantity, className}) => {
    const array = [...Array(quantity).keys()];
    console.log(array)
    return (
        <div className={`row-counter-default ${className}`}>
           {array.join(" ")}
        </div>
    )
}

export default React.memo(RowCounter);
