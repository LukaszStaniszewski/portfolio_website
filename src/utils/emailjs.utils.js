import emailjs from "@emailjs/browser"

export const sendEmail = async (userMessage) => {
 
    await emailjs.sendForm("service_68ishlu", "template_j9z74c4", userMessage, "G3YH6BznktH5PunfE")

}