import './CampoText.css'

const CampoText = (props) => {

    const placeholderMod = `${props.placeholder}...`

    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input 
            placeholder={placeholderMod}
            required={props.required}
            />
        </div>
    )
}

export default CampoText