import React from "react";
import "../Header/header.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo/logoo lll.png"
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";


export default function Header() {
  const { carts } = useSelector((state) => state.allCart);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const navigateCart = () => {
    
    navigate('/cart');
  };
  const navLinks = [
    {
      links: "Home",
      path: "/",
    },
    {
      links: "About Us",
      path: "/about",
    },
    {
      links: "Contact",
      path: "/contact",
    },
    {
      links: "Order",
      path: "/cart",
    },

  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-light">
  <div className="container-fluid">
  <a className="navbar-brand " href="/" >    <img src={Logo} style={{ width: "100px" }} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link heading" to="/">
                Home
              </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link heading" to="/Foods">
                Foods
              </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link heading" to="/about">
                About Us
              </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link heading" to="/contact">
                Contact Us
              </Link>
        </li>
      </ul>
    </div>
      {
          isAuthenticated ? (
            
              <div className="profile " >
                <img className="dropbtn" src={user.picture} />
                <div className="dropdown-content">
                  <ul>
                    <li><i className='bx bx-user' ></i><span>My Account</span></li>
                    <li className="bx bx-cog" onClick={navigateCart} ><span >Orders</span></li> <li><i className='bx bx-cog' ></i><span>Inbox</span></li> <li><i className='bx bx-cog' ></i><span>Help</span></li> <li><i className='bx bx-log-in-circle'></i><span onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</span></li> </ul> </div> </div>
          ) : (
            <div className="designbutton" onClick={() => loginWithRedirect()}>Login</div>
          )
        }
  </div>
</nav>
  );
}