import React from "react";
import "../BannerComponent/banner.css";
import Logo from "../../assets/deliverylogored.png"

export default function BannerComponent() {
  return (
      <div className="container firstbannermein" style={{width:"100%",height:"692px"}}>
        <div className="bannerp-1">
          <div className="banner-tx-1">
          <h1 className="Bannertext-1">From Order To</h1>
          <h1 className="Bannertext-1">Doorstep In</h1>
          <h1 className="Bannertext-1">Minutes</h1>
          <h6 style={{fontSize: "24px"}}>Fastest food delivery takes customers satisfaction to</h6>
            <h6 style={{fontSize: "24px"}}>new heights with lighting-quick deliveries</h6>
          <button className='designbtncdp' style={{width: "238px",height: "63px",marginTop: "20px",marginLeft: "-4",minHeight:"0px"}}>View More Foods</button>
          </div>
        </div>
        <div className="bannerp-2">
          <div className="cirlce"></div>
          <img src={Logo} alt="" />
        </div>
      </div>
      );
}
