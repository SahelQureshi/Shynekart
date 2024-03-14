import React from "react";
import "../ContactSec/contact.css";

export default function ContactSec() {
  return (
    <div className="body1">
      <div className="body2">
        <h1 className="UpperText">Contact Us</h1>
      </div>
      <div className="container body2p">
      <div className="bodyp">

        <div className="body3">
          <div className="formpart">
            <form>
              <select class="form-select" aria-label="Default select example">
                <option selected>How can we help you?</option>
                <option value="1">I need help with my Shynekart online order.</option>
                <option value="2">I found incorrect/outdated information on a page.</option>
                <option value="3">There is a photo/review that is bothering me and I would like to report it.</option>
                <option value="4">The website is not working the way they should.</option>
                <option value="5">I would like to give feedback/suggestions.</option>
                <option value="6">I need some help with my blog.</option>
                <option value="7">Other</option>
              </select>
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Full Name"></input>
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control  mb-3" id="exampleFormControlInput1" placeholder="Email Address"></input>
              <label for="exampleFormControlInput1" class="form-label">Mobile Number(Optional)</label>
              <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Mobile Number"></input>
              <label for="exampleFormControlTextarea1">Type Text</label>
              <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3"></textarea>
              <button type="button" class="btn btn-danger">Submit Feedback</button>
            </form>
          </div>
        </div>
        <div className="body4">
          <div className="body5">
           <h3 style={{fontSize:"30px",fontWeight:"bold"}}>Report a Safety Emergency</h3>
           <p style={{fontSize:"20px"}}>We are committed to the safety of everyone using Shynekart.</p>
           <h3 className="Report">Report Here</h3>
          </div>
          <div className="body6">
          <h3 style={{fontSize:"30px",fontWeight:"bold"}}>Issue with your live order?</h3>
           <p style={{fontSize:"20px"}}>Click on the 'Support' or 'Online ordering help' section in your app to connect to our customer support team.</p>
          </div>
          </div>
        </div>
        </div>
      </div>
  );
}
