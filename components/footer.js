import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoImage from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <span className="bubble-1"></span>
        <span className="bubble-2"></span>
        <span className="bubble-3"></span>
        <span className="bubble-4"></span>
        <span className="bubble-5"></span>
        <span className="bubble-6"></span>
        <Container>
          <div className="inner-container">
            <div >
                <div className="footer-widget">
                  <a href="index.html">
                    <img className="imgFooter"  src={logoImage} alt="Awesome Image" />
                  </a>
                  <ul className="address_ul">
                    <li><i className="fa fa-phone"></i> +91 7338253825</li>
                    <li><i className="fa fa-envelope"></i> biharijibookrk@gmail.com</li>
                    <li><i className="fa fa-map-marker"></i> India.</li>
                  </ul>
                </div>

            </div>
          </div>
        </Container>
      </footer>

      <div className="bottom-footer text-center">
        <Container>
          <span>
            &copy; 2023 <a href="https://biharijibook.in/">Biharijibook</a>. All Rights Reserved
          </span>
          <div className="footer-widget">
                  <div className="social-block">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
