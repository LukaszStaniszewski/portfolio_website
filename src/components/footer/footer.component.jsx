import "./footer.styles.scss";
import { ReactComponent as GitLogo } from "../../assets/tech-skills/git-logo.svg";

const Footer = () => {
   return (
      <div className="footer-container">
         <span>Copyright 2022 Łukasz Staniszewski</span>
         <a href="https://github.com/LukaszStaniszewski" target="_blank" rel="noreferrer">
            <GitLogo />
         </a>
      </div>
   );
};

export default Footer;
