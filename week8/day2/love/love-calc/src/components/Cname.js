const Cname =(props)=>{
    const{handleCname, cname} = props
    return(
        <>
        <input type='text' placeholder='your crushs name' onChange={handleCname} value={cname}/>
        </>
    )
}
export default Cname