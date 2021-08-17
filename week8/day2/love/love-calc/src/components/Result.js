const Result =(props)=>{
    const {results} = props
    return(
    <>
    <h4>{results.fname} & {results.sname}</h4>
    <h4>percent:{results.percentage}</h4>
    <h4>Result:{results.result}</h4>
    </>
    )
}
export default Result