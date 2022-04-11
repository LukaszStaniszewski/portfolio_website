import emailjs from "@emailjs/browser"

export const sendEmail = async (userMessage) => {
 
    await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        userMessage,
        process.env.REACT_APP_USER_ID
        )

}