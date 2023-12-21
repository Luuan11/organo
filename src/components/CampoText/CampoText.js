import './CampoText.css'

import { useState } from 'react'

const CampoText = (props) => {

    const [valor, setValor] = useState("")

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