import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Contato from '../../models/Contato'


type ContatoState = {
    itens: Contato[]
}
const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            email:'MReis@gmail.com',
            telefone:'22 99888 8888',
            titulo: 'Marco Reis'
        },
        {
            id: 2,
            email:'JuT9090@gmail.com',
            telefone:'22 99888 8882',
            titulo: 'Junior Tavares'
        },
        {
            id: 3,
            email:'HTAN0@gmail.com',
            telefone:'22 99888 8881',
            titulo: 'Nathalia Reis'
        }
    ]
}
const contatoSlice= createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) =>{
            state.itens = state.itens.filter(contato => contato.id!==action.payload)
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.itens.findIndex(t=> t.id===action.payload.id)
            if (indexDoContato >= 0){
                state.itens[indexDoContato] = action.payload
            }
        },
        cadastrar: (state, action:PayloadAction<Omit<Contato, 'id'>>) =>{
            const contatoJaExiste = state.itens.find(contato =>contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase() )
            if(contatoJaExiste){
                alert("Já existe um contato com esse nome");
            } else {
                const ultimoContato = state.itens[state.itens.length-1]
                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id+1 : 1
                }
                state.itens.push(contatoNovo)
            }
        }
    }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer