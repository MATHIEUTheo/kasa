import React, { useState } from 'react';
import Background from "../assets/backgournd-banner.png"
import "../styles/banner.scss"

function BannerH() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 501);

      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 501);
      }
  
    window.addEventListener('resize', handleResize)

    return (
        <div className="banner">
            <p className="text-banner">{isSmallScreen ? (
          <>
            Chez vous,<br />partout et ailleurs
          </>
        ) : (
          'Chez vous, partout et ailleurs')}</p>
            <img src={Background} alt="image de bannière"></img>
        </div>
    )
}

export default BannerH