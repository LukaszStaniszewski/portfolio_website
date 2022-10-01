import { Fragment, useRef } from "react";
import { useInView } from "framer-motion";

const ShakeAnimation = ({ active, children }) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   if (!active) {
      return <Fragment>{children}</Fragment>;
   }
   return (
      <div
         className="shake-animation"
         ref={ref}
         style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            animation: isInView
               ? `shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both 1`
               : "none",
            transform: isInView ? `translate3d(0, 0, 0)` : "none",
         }}
      >
         {children}
      </div>
   );
};

export default ShakeAnimation;
