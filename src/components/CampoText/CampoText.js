import './CampoText.css'

// import { useState } from 'react'

const CampoText = (props ) => {

    const onType = (event) => {
        props.onTyped(event.target.value)
    }

    const placeholderMod = `${props.placeholder}...`

    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input 
                value={props.valor}
                onChange={onType}
                placeholder={placeholderMod}
                required={props.required}
                type={props.type}
            />
        </div>
    )
}

export default CampoText