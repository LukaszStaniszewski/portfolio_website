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
  
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

    const welcomeText = 'const Hi = () => { <br/> console. log ( <br/> " I am Łukasz <br/> Front End Developer " <br/> ) <br/> }'
  
    return (
        <section className="home-container" >
            <div className="home-rows">{
                array.map(number => {
                    return <div key={number} className="home-row">{number}</div>
                })
            }</div>
            <div >
                <div className="home-welcome-text" >
                    <TransformedText text={welcomeText} color={TEXT_COLORS}/> 
                </div>
            </div>
        </section>
    )
}

export default Home
