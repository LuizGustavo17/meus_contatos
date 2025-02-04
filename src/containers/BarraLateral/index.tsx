import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import * as S from "./styles";
import { RootReducer } from '../../store';
import { alterarTermo } from "../../store/reducers/filtro";
import {Botao, Campo} from '../../styles';

type Props = {
    mostrarBarra:boolean;
}

const BarraLateral = ({mostrarBarra}: Props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {termo} = useSelector((state: RootReducer)=> state.filtro)
    return(
        <S.Aside>
        <div>
            { mostrarBarra ?<>
                <Campo type="text" placeholder="Buscar" value={termo} onChange={evento => dispatch(alterarTermo(evento.target.value))}/>
                <S.Filtros>
                </S.Filtros>
                </>
                : (<Botao onClick={()=>navigate('/')}>Voltar a lista de contatos</Botao>)
            }
            
        </div>
    </S.Aside>
    )
    
    }

export default BarraLateral;