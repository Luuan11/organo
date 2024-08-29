import './CampoText.css'

interface CampoTextProps{
    onType: (value: string) => void
    placeholder: string
    label: string
    value: string
    mandatory: boolean
}

const CampoText = (props : CampoTextProps) => {

    const placeholderMod = `${props.placeholder}...`
    const onType = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onType(event.target.value)
    }


    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input 
                value={props.value}
                onChange={onType}
                placeholder={placeholderMod}
                required={props.mandatory}
            />
        </div>
    )
}

export default CampoText