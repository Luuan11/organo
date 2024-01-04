import Colaborador from "../Colaborador"
import "./Time.css"

const Time = (props) => {
    const corSegundaria =  { backgroundColor: props.corSegundaria }
    const corPrimaria = { borderColor: props.corPrimaria }

    return (
        (props.colaboradores.length > 0) ? <section className="time" style={corSegundaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador 
                corBackground={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem}/>  )}
            </div>
        </section>
        : ''
    )
}

export default Time