import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
const Navbar = () => {
  let [iconbtn, seticonbtn] = useState("list");
  let [toggleView, settoggleView] = useState("mobile-nav-toggle");
  let [toggleView2, settoggleview2] = useState("");
  let resonsivenav = () => {
    if (iconbtn === "list") {
      seticonbtn("x");
    } else {
      seticonbtn("list");
    }
    if (toggleView === "mobile-nav-toggle") {
      settoggleView("navbar-mobile");
    } else {
      settoggleView("mobile-nav-toggle");
    }
    if (toggleView2 === "") {
      settoggleview2("navbar-mobile");
    } else {
      settoggleview2("");
    }
  };
  let onsignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <span>Social</span>
          </Link>

          <nav id="navbar" className={`navbar ${toggleView2}`}>
            <ul style={{ width: "fit-content" }}>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <button className="btn sigoutbtn" onClick={onsignout}>
                  Sign out
                </button>
              </li>
            </ul>
            <i
              className={`bi bi-${iconbtn} mobile-nav-toggle`}
              onClick={resonsivenav}
            ></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
