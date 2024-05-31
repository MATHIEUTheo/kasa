import Logo from "../assets/kasaf.png"
import "../styles/footer.scss"

function Footer () {
    return (
        <footer>
            <div className="kasaf">
                <img className="Logo" src={Logo} alt="Nom du site" />
            </div>
            <div className="mention">© 2024 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer