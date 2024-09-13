import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
import "./Time.css";

interface TimeProps {
    time: {
        id: string;
        nome: string;
        cor: string;
    };
    colaboradores: {
        id: string;
        nome: string;
        cargo: string;
        imagem: string;
        favorito: boolean;
    }[];
    aoDeletar: (id: string) => void;
    mudarCor: (cor: string, id: string) => void;
    favoritado: (id: string) => void;
}

const Time = (props: TimeProps) => {
    const { time, colaboradores, aoDeletar, mudarCor, favoritado } = props;
    
    // Configurando a cor de fundo com rgba
    const backgroundColorRGBA = { backgroundColor: hexToRgba(time.cor, '0.6') };

    return (
        colaboradores.length > 0 ? (
            <section className="time" style={backgroundColorRGBA}>
                {/* Input para alterar a cor */}
                <input 
                    value={time.cor} 
                    onChange={event => mudarCor(event.target.value, time.id)} 
                    type="color" 
                    className="input-changeColor" 
                />
                
                {/* Título com borda colorida */}
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
                
                {/* Lista de Colaboradores */}
                <div className='colaboradores'>
                    {colaboradores.map((colaborador, indice) => (
                        <Colaborador 
                            key={colaborador.id} // Usando o ID como key, que é único
                            colaborador={colaborador} 
                            corBackground={time.cor}
                            aoDeletar={aoDeletar} 
                            favoritado={favoritado}
                        />
                    ))}
                </div>
            </section>
        ) : null // Retorna null se não houver colaboradores
    );
}

export default Time;
