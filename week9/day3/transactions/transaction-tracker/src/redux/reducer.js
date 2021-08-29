import { INSERT,UPDATE,DLT,UPDATEI } from "./actions"

export const transReducer=(state,action={})=>{
    var list = JSON.parse(localStorage.getItem('transactions'))
    switch (action.type) {
        case INSERT:
            list.push(action.payload)
            localStorage.setItem('transactions', JSON.stringify(list))
            return{list, currentIndex:-1}
        case UPDATE:
            list[state.currentIndex]=action.payload
            localStorage.setItem('transactions', JSON.stringify(list))
            return{list, currentIndex:-1}
        case DLT:
            list.splice(action.payload,1)
            localStorage.setItem('transactions', JSON.stringify(list))
            return{list, currentIndex:-1}
        case UPDATEI:
        return{list, currentIndex:-1}
        
        default:
            return state
    }
}