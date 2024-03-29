import { useState, useRef } from "react";
import { sendEmail } from "../../utils/emailjs.utils";
import FormInputs from "../../components/form_inputs/formInputs.component";
import CustomButton from "../../components/custom_button/custom_button.component";
import { validation } from "../../utils/form_validation";
import Spinner from "../../components/spinner/spinner.component";

import "./contact.styles.scss";
const defaultInputValues = {
   email: "",
   message: "",
};
const defaultValidatedData = {
   validationMessage: "",
   correct: false,
};

const messageToUser = {
   success: "Email has been successfully send",
   error: "Something went wrong",
};

const Contact = () => {
   const [inputValue, setInputValue] = useState(defaultInputValues);
   const { email, message } = inputValue;
   const [isFetching, setFetching] = useState(false);
   const [validatedData, setValidatedData] = useState(defaultValidatedData);
   const { validationMessage, correct } = validatedData;

   const formRef = useRef();

   const handleChange = (event) => {
      const { value, name } = event.target;
      setInputValue({ ...inputValue, [name]: value });
      if (!value) return setValidatedData(defaultValidatedData);
      if (name !== "message") return;
      const validatedData = validation({ message: value });
      setValidatedData(validatedData);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         setFetching(true);
         await sendEmail(formRef.current);
         setFetching(false);
         setValidatedData({ validationMessage: messageToUser.success });
      } catch (error) {
         setFetching(false);
         setValidatedData({ validationMessage: messageToUser.error });
      } finally {
         setInputValue(defaultInputValues);
      }
   };

   return (
      <section
         className={`contact-container ${isFetching && ""}`}
         onSubmit={handleSubmit}
      >
         <span className="contact-container--title">CONTACT ME</span>

         <span className="contact-container--subtitle">
            Message will be sent to my email
            <br />I will respond as soon as possible
         </span>

         <form ref={formRef} className="contact-form">
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
               rows="8"
               required
            />
            {
               <CustomButton className={`${!correct && "disabled"}`} disabled={!correct}>
                  SEND
               </CustomButton>
            }
         </form>
         {isFetching && <Spinner />}
         <div className="contact-container--validation-message">
            {validationMessage.length ? validationMessage : ""}
         </div>
      </section>
   );
};

export default Contact;
