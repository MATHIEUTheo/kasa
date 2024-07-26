import Logo from '../assets/logo.svg'
import "../styles/header.scss"
import {Link, useLocation} from 'react-router-dom'

function Header () {
    const location = useLocation()
    return (
        <header>
            <div className="divLogo">
                <img className="Logo" src={Logo} alt="Nom du site" />
            </div>
            <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>A Propos</Link>
      </nav>
        </header>
    )
}
export default Header