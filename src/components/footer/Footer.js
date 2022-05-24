import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__wrap">
        <ul className="footer__social">
          <li>
            <a target="_blank" href="https://www.facebook.com/me.do.746/">
              <i className="uil uil-facebook-f"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/Gemmmyy_">
              <i className="uil uil-twitter"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/_mohamedddgamal/"
            >
              <i className="uil uil-instagram"></i>
            </a>
          </li>
        </ul>
        <p> © Mohamed Gamal. All Rights Reserved 2022 </p>
      </div>
    </div>
  );
}

export default Footer;
