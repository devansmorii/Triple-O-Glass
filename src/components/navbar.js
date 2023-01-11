import React, { useState, useEffect } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./dropdown";
import logo from '../logo/logo.png';


function Navs(){
  
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  return (
    <>
      <nav className="navbar">
      <img src={logo} alt="Logo" className="logo-png"/>
      <Link to="/" className="title-page">TRIPLE O GLASS</Link>
     
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "PRODUCTS") {
              return (
                <li
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <NavLink to={item.path} className={({ isActive }) => isActive ? "active" : ""}>{item.title}</NavLink>
                  {dropdown && <Dropdown />}
                </li>
              );
            }

            return (
              <>
              <li key={item.id} className={item.cName}>
                <NavLink to={item.path} className={({ isActive }) => isActive ? "active" : " "}>{item.title}</NavLink>
              </li>

              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
  
}

export default Navs;
