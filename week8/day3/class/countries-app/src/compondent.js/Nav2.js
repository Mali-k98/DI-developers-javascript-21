import { Link} from 'react-router-dom'

const Nav2 = (props)=>{
    return(
        <>
        <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        </div>
        </>
    )
}
export default Nav2