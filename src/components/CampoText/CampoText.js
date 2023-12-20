import './CampoText.css'

const CampoText = (props) => {

    const onType = (event) => {
        valor = event.target.value
    }

    const placeholderMod = `${props.placeholder}...`

    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input 
            onChange={onType}
            placeholder={placeholderMod}
            required={props.required}
            />
        </div>
    )
}

export default CampoText