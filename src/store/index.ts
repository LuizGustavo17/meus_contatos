import { configureStore} from '@reduxjs/toolkit'
import contatoReducer from './reducers/contato'
import filtroReducer from './reducers/filtro'
const store = configureStore({
    reducer: {
        contato: contatoReducer,
        filtro: filtroReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store;