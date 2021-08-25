import { plus_one,minus_one,plus_odd,wait_one } from "./Actions"

const initState ={
    counter: 0
}

export  const count =(state=initState,action={})=>{
    switch(action.type){
        case plus_one:
            return {...state,counter: state.counter +1}
        case minus_one:
            return{...state,counter:state.counter -1}
        case plus_odd:
            ((counter) %2 !== 0 )
            return{...state,counter:state.counter}
        case wait_one:
            return{...state,counter:setTimeout(()=>{
                state.counter +1
            },1000)}
        default:
            return{...state}
    }

}