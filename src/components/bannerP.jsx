import Background from "../assets/backgournd-banner2.png"
import "../styles/banner.scss"

function BannerP() {
    return (
        <div className="banner">
            <img src={Background} alt="Image de bannière"></img>
        </div>
    )
}

export default BannerP