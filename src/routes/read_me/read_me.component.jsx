import RowCounter from "../../components/row_counter/row_counter.component"
import {ReactComponent as JsLogo} from "../../assets/js-logo.svg"
import {ReactComponent as SassLogo} from "../../assets/sass-logo.svg"
import {ReactComponent as ReactLogo} from "../../assets/react-logo.svg"
import {ReactComponent as TsLogo} from "../../assets/ts-logo.svg"
import {ReactComponent as ReduxLogo} from "../../assets/redux-logo.svg"
import {ReactComponent as GitLogo} from "../../assets/git-logo.svg"
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
                    <JsLogo className="logo"></JsLogo>
                    <TsLogo className="logo"></TsLogo>
                    <ReactLogo className="logo"></ReactLogo>
                    <br />
                    <ReduxLogo className="logo"></ReduxLogo>
                    <SassLogo className="logo"></SassLogo>
                    <GitLogo className="logo"></GitLogo>
               </div>
            </div>
        </div>
    )
}

export default ReadMe