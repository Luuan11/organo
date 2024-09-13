import "./ListaSuspensa.css"

interface ListProps{
    onTyped: (valor: string) => void
    label: string
    required?: boolean
    valor: string
    itens: string[]
}

const ListaSuspensa = (props: ListProps) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
                <select onChange={event => props.onTyped(event.target.value)}
                required={props.required} value={props.valor}>
                    <option value="">Selecione</option>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>
        </div>
    )
}

export default ListaSuspensa;