import './Colaborador.css'

const Colaborador = ({colaborador, corBackground}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={ {backgroundColor: corBackground} }>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>

            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </ div>
    )
}

export default Colaborador