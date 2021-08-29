import { combineReducers } from "redux";
import { SEARCH_MOVIE,FETCH_MOVIE } from "./actions"


const initState={
    text:'',
    movies:[],
    loading:false,
    movie:[]
}

export const searhReducer=(state=initState,action={})=>{
    switch (action.type) {
        case SEARCH_MOVIE:
            return {...state,text:action.payload,loading:false}
        case FETCH_MOVIE:
            return{...state,movies:action.payload}
            default:
            return{...state}
    }
}

export default combineReducers({
    movies: searchReducer
})