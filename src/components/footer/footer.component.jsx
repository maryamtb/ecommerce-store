import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss";

export default function Footer(props) {
  return (
    <div id="footer">
      <nav className="centralContainer">
        <div id="top">
          <div id="left">
            <ul>
              <li>
                <a target="_tab" href="https://www.facebook.com/">
                  Facebook
                </a>
              </li>
              <li>
                <a target="_tab" href="https://www.instagram.com/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div id="middle">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/legal">Legal</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
            </ul>
          </div>
          <div id="right">
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="bottom">
        <p>© 2020 FAFA PARIS. Made by <a href="https://maryamtb.herokuapp.com">MTB.</a> ALL RIGHTS RESERVED. </p>
      </div>
    </div>
  );
}
