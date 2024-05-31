import Background from "../assets/backgournd-banner.png"
import "../styles/banner.scss"

function BannerH() {
    return (
        <div className="banner">
            <p className="text-banner">Chez vous, partout et ailleurs</p>
            <img src={Background} alt="image de bannière"></img>
        </div>
    )
}

export default BannerH