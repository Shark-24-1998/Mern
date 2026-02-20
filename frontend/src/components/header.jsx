import { NavLink } from 'react-router'
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="logo-mark">N</span>
          <span className="logo-text">NEXUS</span>
        </div>

        <nav className="header-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>

        <div className="header-actions">
          <div className="search-wrap">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <button className="icon-btn" aria-label="Login">
            <FiUser />
          </button>
          <button className="icon-btn cart-btn" aria-label="Cart">
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header