let validationMessage = {
    validationMessage: '',
    correct: false,
}

export const validation = ({message}) => {
   if(!message) return validationMessage
   
   const words = message.split(" ")
   for (let i = 0; i < words.length; i++) {
       if(words[i] === "" && words[i+1] === "" && words[i+2] === "") {
          return validationMessage = { validationMessage: "to many spaces!",correct: false,}
       } else {
        validationMessage = { validationMessage: "",correct: false,}
       }
    
   }

   if(message.length < 12) return validationMessage = { validationMessage: "message must be at least 12 characters",correct: false,}
   if(message.length > 1000) return validationMessage = { validationMessage: "message must be maximum 1000 characters long",correct: false,}
  
  return validationMessage = {validationMessage: "everything is ok", correct: true}
}
