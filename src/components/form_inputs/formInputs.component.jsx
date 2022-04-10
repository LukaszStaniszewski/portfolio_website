import "./formInputs.styles.scss"

const FormInputs = ({inputType, label, ...otherProps}) => { 

    return (
        <div className="form-input-container">
         
                {inputType === "input" && <input className="form-input" {...otherProps}/>}
                {inputType === "textarea" && <textarea className="form-input" {...otherProps}/>}
                {
                    label && <label className={`${otherProps.value.length
                    ? 'shrink'
                    : ''} 
                    form-input-label`}>{label}</label>
                }

        </div>
    )
}

export default FormInputs;