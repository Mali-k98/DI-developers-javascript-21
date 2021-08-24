import { plus_one,minus_one } from "./Actions"

const initState ={
    counter: 0
}

export  const count =(state=initState,action={})=>{
    switch(action.type){
        case 'plus_one':
            return {...state,counter: state.counter +1}
        case 'minus_one':
            return{...state,counter:state.counter -1}
        default:
            return{...state}
    }

}