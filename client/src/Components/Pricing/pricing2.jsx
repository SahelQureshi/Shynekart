import React from 'react'
import "../Pricing/pricing.css"
export default function pricing2() {
    return (
        <div className="pricingplan">
          <div className="container">
            <h2 style={{marginTop: "68px",marginBottom:"76px"}}>Our Membership</h2>
          </div>
  <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card text-center">
            <div className="title">
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
              <h2>Basic</h2>
            </div>
            <div className="price">
              <h4><sup> ₹</sup>Free</h4>
            </div>
            <div className="option">
              <ul>
              <li> <i className="fa fa-times" aria-hidden="true"></i> Get Discounts </li>
              <li> <i className="fa fa-times" aria-hidden="true"></i> Free deliverey for few orders </li>
              <li> <i className="fa fa-times" aria-hidden="true"></i> Get coupons per order </li>
              <li> <i className="fa fa-times" aria-hidden="true"></i> Choice Based Order </li>
              </ul>
            </div>
            <a href="#">Order Now </a>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-center">
            <div className="title">
              <i className="fa fa-plane" aria-hidden="true"></i>
              <h2>Standard</h2>
            </div>
            <div className="price">
              <h4><sup> ₹</sup>98</h4>
            </div>
            <div className="option">
              <ul>
              <li> <i className="fa fa-check" aria-hidden="true"></i> Get Discounts </li>
              <li> <i className="fa fa-check" aria-hidden="true"></i> Free deliverey for few orders </li>
              <li> <i className="fa fa-check" aria-hidden="true"></i> Get coupons per order </li>
              <li> <i className="fa fa-times" aria-hidden="true"></i> Choice Based Order </li>
              </ul>
            </div>
            <a href="#">Order Now </a>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card text-center">
            <div className="title">
              <i className="fa fa-rocket" aria-hidden="true"></i>
              <h2>Premium</h2>
            </div>
            <div className="price">
              <h4><sup> ₹</sup>150</h4>
            </div>
            <div className="option">
              <ul>
              <li> <i className="fa fa-check" aria-hidden="true"></i> More Discounts </li>
              <li> <i className="fa fa-check" aria-hidden="true"></i> Free delivery  </li>
              <li> <i className="fa fa-check" aria-hidden="true"></i> Get coupons per order </li>
              <li> <i className="fa fa-check" aria-hidden="true"></i> Choice Based Order </li>
              </ul>
            </div>
            <a href="#">Order Now </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
