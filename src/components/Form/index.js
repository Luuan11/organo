import { useState } from 'react';

import Button from '../Button';
import CampoText from '../CampoText/CampoText'
import ListaSuspensa from '../ListaSuspensa';

import './Form.css'

const Form = ({aoCadastrar, times ,cadastrarTime}) => {

    const [nome, setNome] = useState('') 
    const [cargo, setCargo] = useState('') 
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const salvar = (event) => {
        event.preventDefault()
        // console.log('deu certo!')
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="forms">
            <form onSubmit={salvar}>
                <h2>Preencha os dados abaixo para gerar um novo card: </h2>

                <CampoText 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    required={true}
                    valor={nome}
                    onTyped={valor => setNome(valor)}
                />

                <CampoText 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    required={true}
                    valor={cargo}
                    onTyped={valor=> setCargo(valor)}
                />

                <CampoText 
                    label="Imagem" 
                    placeholder="Digite o link da imagem" 
                    valor={imagem}
                    onTyped={valor=> setImagem(valor)}
                />

                <ListaSuspensa 
                    label="Item" 
                    itens={times} 
                    required={true}
                    valor={time}
                    onTyped={valor=> setTime(valor)}
                />

                <Button>
                    Criar card
                </Button>
            </form>

            <form onSubmit={(event) => {event.preventDefault()
                cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>

                <h2>Preencha os dados para criar um novo time.</h2>

                <CampoText 
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    required={true}
                    valor={nomeTime}
                    onTyped={valor => setNomeTime(valor)}
                />

                <CampoText 
                    label="Cor"
                    type="color"
                    placeholder="Digite a cor do time"
                    required={true}
                    valor={corTime}
                    onTyped={valor=> setCorTime(valor)}
                />

                <Button>
                    Criar time
                </Button>
            </form>
        </section>
    )
}
export default Form;