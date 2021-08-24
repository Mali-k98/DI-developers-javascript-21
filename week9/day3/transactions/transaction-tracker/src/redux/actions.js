export const INSERT=data=>{
    return{
        type: 'INSERT',
        payload: data
    }
}

export const UPDATE=data=>{
    return{
        type: 'UPDATE',
        payload: data
    }
}

export const DLT=i=>{
    return{
        type: 'DELETE',
        payload: i
    }
}

export const UPDATEI=index=>{
    return{
        type: 'UPDATE-INDEX',
        payload: index
    }
}