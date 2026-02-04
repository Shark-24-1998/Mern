import { NavLink } from 'react-router'

const Header = () => {
  return (
    <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/product">Product</NavLink>
        </nav>
    </>
  )
}

export default Header