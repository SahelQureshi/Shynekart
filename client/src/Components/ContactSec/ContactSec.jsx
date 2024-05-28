import React from "react";
import "../ContactSec/contact.css";

export default function ContactSec() {
  return (
    <div className="body1" style={{paddingTop:"77px"}}>
      <div className="body2">
        <h1 className="UpperText">Contact Us</h1>
      </div>
      <div className="container body2p">
      <div className="bodyp">

        <div className="body3">
          <div className="formpart">
            <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="fe8b02bf-a8e0-4764-a26e-441038ff6dbe"/>
              <select className="form-select" aria-label="Default select example">
                <option selected>How can we help you?</option>
                <option value="1">I need help with my Shynekart online order.</option>
                <option value="2">I found incorrect/outdated information on a page.</option>
                <option value="3">There is a photo/review that is bothering me and I would like to report it.</option>
                <option value="4">The website is not working the way they should.</option>
                <option value="5">I would like to give feedback/suggestions.</option>
                <option value="6">I need some help with my blog.</option>
                <option value="7">Other</option>
              </select>
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="name" name="name" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Full Name"></input>
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" name="email" className="form-control  mb-3" id="exampleFormControlInput1" placeholder="Email Address"></input>
              <label for="exampleFormControlInput1" className="form-label">Mobile Number(Optional)</label>
              <input type="tel" name="phone" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Mobile Number"></input>
              <label for="exampleFormControlTextarea1">Type Text</label>
              <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3"></textarea>
              <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
              <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
            </form>
          </div>
        </div>
        <div className="body4">
          <div className="body5">
           <h3 className="Toast4948" style={{fontWeight:"bold"}}>Report a Safety Emergency</h3>
           <p className="Smsk4894" >We are committed to the safety of everyone using Shynekart.</p>
           <h3 className="Report Toast4948">Report Here</h3>
          </div>
          <div className="body6">
          <h3 className="Toast4948" style={{fontWeight:"bold"}}>Issue with your live order?</h3>
           <p className="Smsk4894" >Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team.</p>
          </div>
          </div>
        </div>
        </div>
      </div>
  );
}
