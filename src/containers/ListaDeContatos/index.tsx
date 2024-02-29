import { useSelector } from "react-redux";
import Contato from "../../components/Contato";
import { MainContainer } from "../../styles";
import { RootReducer } from "../../store";

const ListaDeContatos = () =>{
    const { itens } = useSelector((state: RootReducer)=> state.contato)
    const {termo} = useSelector((state: RootReducer) => state.filtro)
    const filtraContatos = () => {
        return itens.filter(item => item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0)
    }
    return(
        <MainContainer>
            <ul>
                {filtraContatos().map((t) => (<li key={t.titulo}><Contato id={t.id} email={t.email} titulo={t.titulo} telefone={t.telefone}/></li>))}
                
                    
                
            </ul>
        </MainContainer>
    )
} 

export default ListaDeContatos;