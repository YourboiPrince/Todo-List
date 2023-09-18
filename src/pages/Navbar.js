import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <>
        <nav>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/services'>Services</NavLink>
        </nav>
        </>
    )
}
export default Navbar