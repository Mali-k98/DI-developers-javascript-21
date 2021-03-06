import { SELECT,ROBOTS } from "./actions";
import { REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED } from "./constant";

let initState ={
    robots:[],
    searchText:'',

}

export const reducer =(state=initState,action={})=>{
    switch (action.type) {
        case SELECT:
            return{...state, searchText:action.payload}
        case ROBOTS:
            return{...state, robots:action.payload}
        default:
            return{...state}
    }
}

const initStateWait={
    isPending:false,
    robots:[],
    error:''
}

export const reducerLoad=(state=initStateWait,action={})=>{
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state,isPending:true}
        case REQUEST_ROBOTS_SUCCESS:
            return {...state,robots:action.payload,isPending:false}
        case REQUEST_ROBOTS_FAILED: 
            return{...state,error:action.payload,isPending:false}
        default:
            return{...state}
    }
}