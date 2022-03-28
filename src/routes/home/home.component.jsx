import { useEffect } from "react"
import TransformedText from "../../components/transformed_text/transformed_text.component"
import "./home.styles.scss"


const TEXT_COLORS = {
    const: 'text-primary',
    Hi: 'text-tertiary',
    '=': 'text-primary',
    '()': 'bracket-primary',
    '=>': 'text-primary',
    '{': 'bracket-primary',

}

const Home = () => {
    useEffect(()=> {
        document.getElementById("arrow").innerHTML = "=>"
        document.getElementById("right-bracket").innerHTML = "{"
        document.getElementById("left-bracket").innerHTML = "}"
    },[])
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    // const part1 = 'const Hi = () => {'
    // const part2 = 'console.log('
    // const part3 = '"I am Łukasz'
    // const part4 = 'Front End Developer"'
    // const part5 = ')'
    // const part6 = '}'
    const part = {
        part1: 'const Hi = () => {',
        part2: 'console.log(',
        part3: '"I am Łukasz',
        part4: 'Front End Developer"',
        part5: ')',
        part6: '}',
    }
   
    // const welcomeText = 'const Hi = () => { <br/>&nbsp console.log(<br/>&nbsp&nbsp "I am Łukasz<br/>&nbsp&nbsp Front End Developer<br/>&nbsp )<br/>})'
    const welcomeText = 'const Hi = () => { console.log ( "I am Łukasz Front End Developer" ) } )'



    return (
        <section className="home-container" >
            <div className="home-rows">{
                array.map(number => {
                    return <div key={number} className="home-row">{number}</div>
                })
            }</div>
            <div >
                <div className="home-welcome-text" >
                    {/* <TransformedText text={welcomeText} color={TEXT_COLORS}/> */}
                   
                        <span className="text-primary">const</span>
                        <span className="text-tertiary">Hi</span>
                        <span className="text-primary">=</span>
                        <span className="bracket-primary">()</span>
                        <span className="text-primary" id="arrow"></span>
                        <span className="bracket-primary" id="right-bracket"></span> 
                        <br />
                   
                        <span className="text-secondary">console.</span>
                        <span className="text-tertiary">log</span>
                        <span className="bracket-secondary">(</span>
                        <br />
                    
                        <span className="color-quotation-marks">"</span>
                        <span className="text-quaternary">I'm Łukasz</span>
                        <br />
                    
                        <span className="text-quaternary">Front End Developer</span>
                        <span className="color-quotation-marks">"</span>
                        <br />
                 
                        <span className="bracket-secondary" >)</span>
                   
                    <div>
                        <span className="bracket-primary" id="left-bracket"></span>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Home
