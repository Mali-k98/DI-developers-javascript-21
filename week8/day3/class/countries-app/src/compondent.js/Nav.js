const Nav = (props)=>{
    return(
        <>
        <div>
        <button onClick={()=>props.GoToPage('home')}>Home</button>
        <button onClick={()=>props.GoToPage('about')}>Home</button>
        <button onClick={()=>props.GoToPage('contact')}>Home</button>
        </div>
        </>
    )
}
export default Nav