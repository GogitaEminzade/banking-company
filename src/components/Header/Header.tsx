import { NavLink } from 'react-router-dom'
import Logo from './../../assets/Icons/shape-30.svg'
import Button from './../Button/Button'
import "./Header.css"

const Header = () => {
  
  return (
    <header>
        <div className='main-div'> <img className='logo' src={Logo} alt="" /> 
        <h1 className='company-name'> YourBanK </h1>
        </div>
        <ul className='nav-list'>
            <li> <NavLink to={"/"}> Home </NavLink>  </li>
            <li> <NavLink to={"careers"}> Careers </NavLink> </li>
            <li> <NavLink to={"/about"}> About </NavLink> </li>
            <li> <NavLink to={"/security"}> Security </NavLink> </li>
        </ul>
        <Button>Login</Button>
    </header>
  )
}


export default Header