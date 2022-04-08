import RowCounter from "../../components/row_counter/row_counter.component"
import {ReactComponent as JsLogo} from "../../assets/tech-skills/js-logo.svg"
import {ReactComponent as SassLogo} from "../../assets/tech-skills/sass-logo.svg"
import {ReactComponent as ReactLogo} from "../../assets/tech-skills/react-logo.svg"
import {ReactComponent as TsLogo} from "../../assets/tech-skills/ts-logo.svg"
import {ReactComponent as ReduxLogo} from "../../assets/tech-skills/redux-logo.svg"
import {ReactComponent as GitLogo} from "../../assets/tech-skills/git-logo.svg"

import "./read_me.styles.scss"

const ReadMe = () => {
    
    return (
        <div className="readme-container">
            <RowCounter className="readme-row" quantity={20}/>
            <div className="readme-content">
                <div>## About me</div>
                <p className="readme-content--introduction">Hi! I am what you might call an "aspiring" coder. I've started to code a good year ago, realized it was even more fun than expected, and decided to turn my career around. As of now (Feb 2022), I'm looking for my first job or internship as a front-end developer.</p>
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
                            <GitLogo className="logo"></GitLogo>
                            <span>GitHub</span>
                        </div>
                    </div>

               
            </div>
        </div>
    )
}

export default ReadMe