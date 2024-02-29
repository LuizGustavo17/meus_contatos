import { useDispatch } from 'react-redux'
import * as S from './styles'
export type Props = {
    ativo?: boolean
    contador: number
    legenda: string
}

const FiltroCard = ({ativo, contador, legenda}:Props) => {
    const dispatch = useDispatch()
    
    return(<S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador> {legenda}</S.Card>)
}

export default FiltroCard