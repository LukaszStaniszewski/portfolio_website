import "./hamburger.style.scss";

const Hamburger = ({ toggle, ...props }) => {
   return (
      <div className={`hamburger ${toggle && "open"}`} {...props}>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </div>
   );
};

export default Hamburger;
