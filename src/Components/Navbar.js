import React from "react";
import logo from "./logo1.png";
import { Link } from 'react-router-dom';
const Navbar=()=>{
  return(
    <header class="header">
    <nav class="navbar navbar-light navbar-expand-lg fixed-top shadow-sm p-1" style={{fontSize:'18px'}} id="navbar">
      <div class="container"><a class="navbar-brand" href="/"><img src={logo} alt="" width="150"/></a>
        <button class="navbar-toggler navbar-toggler-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-bars"></i></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link link-scroll active" href="/">Home</a></li>
            <Link to={'/contact'}>
            <li class="nav-item"><a class="nav-link link-scroll" href="/contact">Contact</a></li>
            </Link>
            <Link to={'/signup'}>
            <li class="nav-item"><a class="nav-link link-scroll" href="/signup">Book-Now</a></li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  );
}


export default Navbar;