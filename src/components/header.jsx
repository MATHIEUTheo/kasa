import Logo from '../assets/logo.svg'
import "../styles/header.scss"

function Header () {
    return (
        <header>
            <div>
                <img className="Logo" src={Logo} alt="Nom du site" />
            </div>
            <div className="link">
                <a href="/">Accueil</a>
                <a href="/about">A Propos</a>
            </div>
        </header>
    )
}
export default Header