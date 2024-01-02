import "./Time.css"

const Time = (props) => {
    const corSegundaria =  { backgroundColor: props.corSegundaria }
    const corPrimaria = { borderColor: props.corPrimaria }

    return (
        <section className="time" style={corSegundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
        </section>
    )
}

export default Time