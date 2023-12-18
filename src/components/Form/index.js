import Button from '../Button';
import CampoText from '../CampoText/CampoText'
import ListaSuspensa from '../ListaSuspensa';

import './Form.css'

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const salvar = (event) => {
        event.preventDefault()
    }

    return (
        <section className="forms">
            <form onSubmit={salvar}>
                <h2>Preencha os dados abaixo para gerar um novo card: </h2>

                <CampoText label="Nome" placeholder="Digite seu nome" required={true}/>
                <CampoText label="Cargo" placeholder="Digite seu cargo" required={true}/>
                <CampoText label="Imagem" placeholder="Digite o link da imagem" />
                <ListaSuspensa label="Item" itens={times} required={true}/>

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}
export default Form;