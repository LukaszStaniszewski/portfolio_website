import { Link } from "react-router-dom"
import {ReactComponent as JsLogo} from "../../assets/tech-skills/js-logo.svg"
import {ReactComponent as SassLogo} from "../../assets/tech-skills/sass-logo.svg"
import {ReactComponent as ReactLogo} from "../../assets/tech-skills/react-logo.svg"
import {ReactComponent as TsLogo} from "../../assets/tech-skills/ts-logo.svg"
import {ReactComponent as ReduxLogo} from "../../assets/tech-skills/redux-logo.svg"
import {ReactComponent as GitLogo} from "../../assets/tech-skills/git-logo.svg";
import {ReactComponent as GitLogoLight} from "../../assets/tech-skills/git-logo-light.svg";
import RowCounter from "../../components/row_counter/row_counter.component"
import TransformedText from "../../components/transformed_text/transformed_text.component";
import { useThemeContext } from "../../context/theme/theme.context"
import { useUrlContext } from "../../context/url/url.context"
import "./read_me.styles.scss"

const TEXT_COLORS = {
    Hi: 'text-tertiary',
    '()': 'bracket-primary',
}

const ReadMe = () => {
    const {currentTheme} = useThemeContext()
    const {setUrl} = useUrlContext()
    return (
        <section className="readme-container">
            <RowCounter className="readme-row"/>
            <div className="readme-content">
                <div>## About me</div>
               <div className="readme-content--introduction">
                    <span className="part1">When I've started to learn programming, realized that process of developing application gives me that feeling of enthusiasm. The need to think about it from moring till evening is more important then the world that surrounds me. This is my attitude towards programming.</span>
                    <span className="part2">I live in Poland in Warsaw and I am looking for my first job as frontend developer. If you have any questions contact me. 
                    <Link to="/contact" onClick={() => setUrl("/contact")} className="contact-button"> 
                        <TransformedText style={{fontFamily: "Menlo"}} text="Hi ()" color={TEXT_COLORS}/>
                    </Link>
                    </span>

               </div>
                <div>## Tech skills</div>
               
                    <div className="readme-content__logos-container">
                        <div>
                            <JsLogo className="logo"></JsLogo>
                            <span>JavaScript</span>
                        </div>
                        <div>
                            <TsLogo className="logo"></TsLogo>
                            <span>TypeScript</span>
                        </div>
                        <div>
                            <ReactLogo className="logo"></ReactLogo>
                            <span>React</span>
                        </div>
                    </div>
                       
                    <div className="readme-content__logos-container" >
                        <div>
                            <ReduxLogo className="logo"></ReduxLogo>
                            <span>Redux</span>
                        </div>
                        <div>
                            <SassLogo className="logo"></SassLogo>
                            <span>Sass</span>
                        </div>
                        <div>
                            {
                                currentTheme 
                                ? <GitLogoLight className="logo"></GitLogoLight>
                                : <GitLogo className="logo"></GitLogo>
                            }
                            <span>GitHub</span>
                        </div>
                    </div>        
            </div>
        </section>
    )
}

export default ReadMe