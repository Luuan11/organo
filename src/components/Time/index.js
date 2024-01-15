import Colaborador from "../Colaborador"
import "./Time.css"

const Time = ({ time, colaboradores, aoDeletar }) => {
    const corSegundaria =  { backgroundColor: time.corSegundaria }
    const corPrimaria = { borderColor: time.corPrimaria }

    return (
        colaboradores.length > 0) && <section className="time" style={corSegundaria}>
            <input type="color" className="input-changeColor" />
            <h3 style={corPrimaria}>{time.nome}</h3>
            <div className='colaboradores'>
            {/* <div className="deletar"> */}
                {colaboradores.map((colaborador, indice) => 
                <Colaborador key={indice} 
                colaborador={colaborador} 
                corDeFundo={time.corSecundaria} 
                aoDeletar ={aoDeletar} 

                />
                )}
            {/* </div> */}
            </div>
        </section>
}

export default Time