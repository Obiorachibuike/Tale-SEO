// import React from 'react'
import "../css/banner.css"
import BannerDetails from "./banner-details"

function Banner() {
  return (
    <div>
      <section className="banner-section">
        <div className="banner-container">
            <div className="banner-cont">
                <div className="banner-content">
                    <div className="banner-left">
                        <img src="../images/banner-left.png" alt="" className="banner1" />
                    </div>
                    <div className="banner-right">
                        <img src="../images/banner-right.png" alt="" className="banner2" />
                    </div>
                    <BannerDetails />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
