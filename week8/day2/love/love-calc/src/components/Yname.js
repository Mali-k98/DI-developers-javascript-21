const Yname =(props)=>{
    const{handleYname, yname} = props
    return(
        <>
        <input type='text' placeholder='your crushs name' onChange={handleYname} value={yname}/>
        </>
    )
}
export default Yname