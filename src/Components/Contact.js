import React from "react";
import "./Signup.scss";

const Contact=()=>{
    return( 
      <div className="col-md-5 d-flex align-items-stretch mx-auto shadow-5" style={{marginBottom:'100px',marginTop:'120px'}}>
      <div className="info-wrap w-100 p-lg-5 p-4 img">
        <h3>Contact us</h3>
        <p className="mb-4">
          We're open for any suggestion or just to have a chat
        </p>
        <div className="dbox w-100 d-flex align-items-start">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-map-marker"></span>
          </div>
          <div className="text pl-3">
            <p>
              <span>Address:</span> 
              Indore,Madhya Pradesh
            </p>
          </div>
        </div>
        <div className="dbox w-100 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-phone"></span>
          </div>
          <div className="text pl-3">
            <p>
              <span>Phone:</span>
              <a href="tel://123456789">+917489423144,+919669596237</a>
            </p>
          </div>
        </div>
        <div className="dbox w-100 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-paper-plane"></span>
          </div>
          <div className="text pl-3">
            <p>
              <span>Email:</span>
              <a href="trustivaa@gmail.com">
              trustivaa@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="dbox w-100 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-globe"></span>
          </div>
          <div className="text pl-3">
            <p>
              <span>Website:</span>
              <a href="#">Trustiva.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    );

}

export default Contact;