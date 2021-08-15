const Card = (props)=>{
    const {robotinfo}=props
    const {name,email,id}=robotinfo
    return(
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <div>
            <img src={`http://robohash.org/${id}/size=200x200`} alt='robot'></img>
        </div>
        <div>
            <h2 className='myhsclasscss'>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
    )
}
export default Card