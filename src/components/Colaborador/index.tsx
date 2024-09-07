import { FaWindowClose} from "react-icons/fa";
import { AiFillHeart , AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css'

interface ColaboradorProps {
    colaborador: {
        id: string;
        nome: string;
        cargo: string;
        imagem: string;
        favorito: boolean;
    };
    corBackground: string;
    aoDeletar: (id: string) => void;
    favoritado: (id: string) => void;
}

const Colaborador = (props: ColaboradorProps) => {

    const { colaborador, corBackground, aoDeletar, favoritado } = props;

    function favoritar(){
        favoritado(colaborador.id);
    }

    const propsFav ={
        size:25,
        onClick: favoritar
    }
    
    return (
        <div className='colaborador'>
    
            <FaWindowClose 
                size={25} 
                className="deletar" 
                onClick={() => aoDeletar(colaborador.id)} 
            />

            <div className='cabecalho' style={ {backgroundColor: corBackground} }>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>

            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favorite">
                    {colaborador.favorito ? 
                         <AiFillHeart {...propsFav} color="#ff0000" /> 
                    :    <AiOutlineHeart {...propsFav}/> }
                </div>
            </div>

        </ div>
    )
}

export default Colaborador