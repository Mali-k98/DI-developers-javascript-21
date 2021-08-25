export const plus_one = 'plus_one'
export const minus_one = 'minus_one'
export const plus_odd = 'plus_odd'
export const wait_one ='wait_one'

export const plusOne =()=>{
    return{
    type: plus_one
    }
}
export const minusOne =()=>{
    return{
    type: minus_one
    }
}
export const addOdd =()=>{
    return{
    type: plus_odd
    }
}
export const waitOne =()=>{
    return{
    type: wait_one
    }
}