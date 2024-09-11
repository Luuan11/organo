import { useState } from 'react';

import Button from '../Button';
import CampoText from '../CampoText/CampoText'
import ListaSuspensa from '../ListaSuspensa';

import './Form.css'
import { iColaborador } from '../shared/interfaces/IColaborador';

interface FormProps{
    aoCadastrar: (colaborador: iColaborador) => void
    times: string[]
    cadastrarTime: (time: { nome: string; cor: string }) => void;
}

const Form: React.FC<FormProps> = ({ aoCadastrar, times, cadastrarTime }) => {

    const [nome, setNome] = useState('') 
    const [cargo, setCargo] = useState('') 
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const salvar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
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
            <form onSubmit={event => salvar(event)}>
                <h2>Preencha os dados abaixo para gerar um novo card: </h2>

                <CampoText 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    mandatory={true}
                    value={nome}
                    onType={valor => setNome(valor)}
                />

                <CampoText 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    mandatory={true}
                    value={cargo}
                    onType={valor=> setCargo(valor)}
                />

                <CampoText 
                    label="Imagem" 
                    placeholder="Digite o link da imagem" 
                    value={imagem}
                    onType={valor=> setImagem(valor)}
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
                    mandatory={true}
                    value={nomeTime}
                    onType={valor => setNomeTime(valor)}
                />

                <CampoText 
                    label="Cor"
                    type="color"
                    placeholder="Digite a cor do time"
                    mandatory={true}
                    value={corTime}
                    onType={valor=> setCorTime(valor)}
                />

                <Button>
                    Criar time
                </Button>
            </form>
        </section>
    )
}
export default Form;