import { useState, useRef } from "react"
import { sendEmail } from "../../utils/emailjs.utils";
import FormInputs from "../../components/form_inputs/formInputs.component";
import CustomButton from "../../components/custom_button/custom_button.component";

import "./contact.styles.scss"
const defaultInputValues = {
    email: '',
    message: '',
}
const Contact = () => {
const [inputValue, setInputValue] = useState(defaultInputValues)
const {email, message} = inputValue
const formRef = useRef()

console.log("Contact component hit")

const handleChange = (event) => {
    const {value, name} = event.target
    setInputValue({...inputValue, [name]: value})
}

const handleSubmit = async (event) => {
  
    event.preventDefault()
    try {
        await sendEmail(formRef.current)
    }catch(error) {
        console.log(error)
    }
    setInputValue(defaultInputValues)
}
    return (
        <div className="contact-container" onSubmit={handleSubmit}>
            <form ref={formRef} className="contact-form" >
        
                <FormInputs 
                    inputType="input"
                    label="Your email" 
                    type="email"
                    name="email" 
                    value={email}
                    onChange={handleChange}
                    autoComplete="off" 
                    required
                />
                
                <FormInputs
                    inputType="textarea"
                    label="Message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                    required
                />
            
                <CustomButton>Send{`\xa0`}Message</CustomButton>
            </form>
        </div>
    )
}

export default Contact