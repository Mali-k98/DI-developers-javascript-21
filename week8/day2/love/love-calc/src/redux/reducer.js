import {YNAME ,CNAME,RESULT} from '../redux/action'

const initState={
    Yname:'',
    Cname:'',
    Result:{}

}

export const reducer = (state=initState,action={})=>{
    switch (action.type) {
        case YNAME:
            return{...state,Yname:action.payload}
        case CNAME:
            return {...state,Cname:action.payload}
        case RESULT:
            return{...state,Result:action.payload}
        default:
            return {...state}
    }
}