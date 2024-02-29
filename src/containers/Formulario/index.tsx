import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {BotaoSalvar, MainContainer} from '../../styles'
import { Form, Titulo } from './styles'
import {Campo} from '../../styles';
import { cadastrar } from '../../store/reducers/contato';
const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [titulo, setTitulo] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

const cadastrarContato = (evento: FormEvent) =>{
    evento.preventDefault()
    dispatch(cadastrar({
        titulo,
        telefone,
        email,
    }))
    navigate('/')
}
    return(
        <MainContainer>
        <Titulo>Novo Contato</Titulo>
    <Form onSubmit={cadastrarContato}>
    <Campo value={titulo} onChange={evento => setTitulo(evento.target.value)} type="text" placeholder="Nome"/>
    <Campo value={email} onChange={evento => setEmail(evento.target.value)} type="text" placeholder="Email"/>
    <Campo value={telefone} onChange={evento => setTelefone(evento.target.value)} type="text" placeholder="Telefone"/>
    <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
    </MainContainer>
    )
    }

export default Formulario