import React, { useRef, useState } from "react";
import { useEffect } from "react";
import "./row_counter.styles.scss";

const RowCounter = ({ className, containerHight }) => {
   const ref = useRef(null);
   const [currentFontSize, setCurrentFontSize] = useState();
   const [rows, setRows] = useState();

   useEffect(() => {
      if (!currentFontSize && !containerHight) return;
      const array = [...Array(Math.round(containerHight / currentFontSize))];

      const rows = adjustArray(array);

      setRows(rows);
   }, [currentFontSize]);

   const adjustArray = (array) => {
      return array.map((value, index, array) => (array[index] = index + 1));
   };

   useEffect(() => {
      const size = window
         .getComputedStyle(ref.current, null)
         .getPropertyValue("font-size");
      setCurrentFontSize(parseInt(size));
   }, []);

   return (
      <div ref={ref} className={`row-counter-default ${className}`}>
         {rows?.join(" ")}
      </div>
   );
};

export default React.memo(RowCounter);
