import CampoText from '../CampoText/CampoText'

import './Form.css'

const Form = () => {
    return (
        <section className="forms">
            <form>
                <h2>Preencha os dados abaixo: </h2>
                <CampoText label="Nome" placeholder="Digite seu nome"/>
                <CampoText label="Cargo" placeholder="Digite seu cargo"/>
                <CampoText label="Imagem" placeholder="Digite o link da imagem"/>
            </form>
        </section>
    )
}
export default Form;