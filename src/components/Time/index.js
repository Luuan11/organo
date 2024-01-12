import Colaborador from "../Colaborador"
import "./Time.css"

const Time = ({ time, colaboradores }) => {
    const corSegundaria =  { backgroundColor: time.corSegundaria }
    const corPrimaria = { borderColor: time.corPrimaria }

    return (
        colaboradores.length > 0) && <section className="time" style={corSegundaria}>
            <h3 style={corPrimaria}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} />)}
            </div>
        </section>
}

export default Time