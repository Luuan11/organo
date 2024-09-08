import "./ListaSuspensa.css"

interface ListProps{
    onChange: (valor: string) => void
    // a fazer
}

const ListaSuspensa = (props) => {
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