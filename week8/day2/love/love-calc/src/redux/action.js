import axios from 'axios'

export const YNAME = 'YNAME'
export const CNAME = 'CNAME'
export const RESULT = 'RESULT'

export const handleYname=(value)=>{
    return{
            type: YNAME,
            payload:value
        }
}
export const handleCname=(value)=>{
    return{
            type: CNAME,
            payload:value
        }
}
export const handleClick=(fname,sname)=>(dispatch)=>{
    var options = {
        method: 'GET',
        url: 'https://love-calculator.p.rapidapi.com/getPercentage',
        params: {fname: fname, sname: sname},
        headers: {
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
        'x-rapidapi-key': 'db172b0929msh659d297ba64258bp1b898cjsnb7f3ac452162'
        }
    };
    axios.request(options).then(function(response){
        console.log(response.data);
        dispatch({
            type:RESULT,
            payload:response.data
        })
        .catch(function(e){
            console.log(e);
        })
    })
}