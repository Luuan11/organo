import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';
import "./Time.css"

const Time = ({ time, colaboradores, aoDeletar, mudarCor, favoritado }) => {
    
    const backgroundColorRGBA = {backgroundColor: hexToRgba(time.cor, '0.6')}
    // const corPrimaria = { borderColor: time.corPrimaria }

    return (
        colaboradores.length > 0 && <section className="time" style={backgroundColorRGBA}>
            <input value={time.cor} onChange={event => mudarCor(event.target.value, time.id)} type="color" className="input-changeColor" />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                    <Colaborador 
                        key={indice}
                        colaborador={colaborador} 
                        corBackground={time.cor}
                        aoDeletar ={aoDeletar} 
                        favoritado={favoritado}/>
                    );
                })}
            </div>
        </section>
    )
}

export default Time