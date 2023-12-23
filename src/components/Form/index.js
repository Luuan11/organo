import { useState } from 'react';

import Button from '../Button';
import CampoText from '../CampoText/CampoText'
import ListaSuspensa from '../ListaSuspensa';

import './Form.css'

const Form = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('') 
    const [cargo, setCargo] = useState('') 
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const salvar = (event) => {
        event.preventDefault()
        // console.log('deu certo!')

        props.saveFunc({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="forms">
            <form onSubmit={salvar}>
                <h2>Preencha os dados abaixo para gerar um novo card: </h2>

                <CampoText label="Nome" placeholder="Digite seu nome" required={true}
                valor={nome}
                onTyped={valor => setNome(valor)}
                />

                <CampoText label="Cargo" placeholder="Digite seu cargo" required={true}
                valor={cargo}
                onTyped={valor=> setCargo(valor)}
                />

                <CampoText label="Imagem" placeholder="Digite o link da imagem" 
                valor={imagem}
                onTyped={valor=> setImagem(valor)}
                />

                <ListaSuspensa label="Item" itens={times} required={true}
                valor={time}
                onTyped={valor=> setTime(valor)}
                />

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}
export default Form;