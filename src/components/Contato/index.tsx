import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import {remover, editar} from '../../store/reducers/contato'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'

type Props = ContatoClass
const Contato = ({telefone: telefoneOriginal, email: emailOriginal, titulo, id}: Props) => { 
    const dispatch = useDispatch();
    const [estaEditando, setEstaEditando] = useState(false);
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        if(emailOriginal.length>0){
            setEmail(emailOriginal)
        }
    }, [emailOriginal]);
    useEffect(() => {
        if(telefoneOriginal.length>0){
            setTelefone(telefoneOriginal)
        }
    }, [emailOriginal]);
    function cancelarEdicao(){
        setEstaEditando(false); setEmail(emailOriginal); setTelefone(telefoneOriginal);
    }
    return(
    <S.Card>
        <S.Titulo>{titulo} </S.Titulo>
        <S.Email disabled={!estaEditando} value={email} type="text" onChange={evento => setEmail(evento.target.value)}/>
        <S.Telefone disabled={!estaEditando} value={telefone} type="text" onChange={evento => setTelefone(evento.target.value)}/>
        <S.BarraAcoes>
            {estaEditando ?(
                <>
                <BotaoSalvar onClick={()=> {
                    dispatch(editar({
                        telefone,
                        email,
                        titulo,
                        id
                    }))
                    setEstaEditando(false);
                }}>Salvar</BotaoSalvar>
                <S.BotaoCancelarRemover onClick={()=> {cancelarEdicao}}>Cancelar</S.BotaoCancelarRemover>
                </>
            ) : (<>
            <Botao onClick={()=> setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={()=> dispatch(remover(id))}>Remover</S.BotaoCancelarRemover>
            </>
            )}
        </S.BarraAcoes>
    </S.Card>
)}

export default Contato