import { useState } from "react"

import TransformedText from "../../components/transformed_text/transformed_text.component"
import "./home.styles.scss"


const TEXT_COLORS = {
    const: 'text-primary',
    Hi: 'text-tertiary',
    '=': 'text-primary',
    '()': 'bracket-primary',
    '=>': 'text-primary',
    '{': 'bracket-primary',
    '}': 'bracket-primary',
    '(': 'bracket-secondary',
    ')': 'bracket-secondary',
    '"': 'color-quotation-marks',
    'console.': 'text-secondary',
    'log': 'text-tertiary'
}

const Home = () => {
    const [state, setState] = useState('|')
    const array = [...Array(30)];
  

    const welcomeText = 'const Hi = () => { <br/> console. log ( <br/> " I am Łukasz <br/> Front End Developer " <br/> ) <br/> }'


    setTimeout(()=> {
         if(state) return setState(null)
        if(!state) return setState("|")
    },500)
    
    return (
        <section className="home-container" >
            <div className="home-rows">{
                array.map((number, index) => {
                    return <div key={index} className="home-row">{index+1}</div>
                })
            }
            </div>
            
            <div className="home-welcome-text" >
                <TransformedText text={welcomeText} color={TEXT_COLORS}> </TransformedText>
                <span className="text-primary text-blink">{state}</span> 
            </div>
        </section>
    )
}
export default Home
