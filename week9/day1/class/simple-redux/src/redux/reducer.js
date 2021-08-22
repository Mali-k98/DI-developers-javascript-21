let initState = {
    text1:'text one',
    text2:'text two'
}

export const reducer= (state =initState,action)=>{
    switch (action.type) {
        case 'prop_one':
            return{...state,text1:action.payload}

        case 'prop_two':
            return{...state,text2:action.payload}    
        default:
            return{...state}
    }        
}