import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moc from "../assets/images/banner12.png";
import MovingText from 'react-moving-text';
import { gtag_report_conversion } from './utils/gtag';

const bannertwo = () => {
  const openWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=917338253825&text=Need%20an%20ID%20just%20say%20Hi!', '_blank');
    const handleDownloadClick = () => {
      gtag_report_conversion('/');
    };
    handleDownloadClick()
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/biharijibookofficial/', '_blank');
  };
  return (
    <section className="banner-style-one home-page-two" id="banner">
      <span className="bubble-1"></span>
      <span className="bubble-2"></span>
      <span className="bubble-3"></span>
      <span className="bubble-4"></span>
      <span className="bubble-5"></span>
      <span className="bubble-6"></span>
      <img src={moc} style={{maxHeight:"70vh", marginTop:"1vh"}} className="banner-mock" alt="Awesome Image" />
      <Container>
        <Row>
          <Col xl={6} lg={8}>
            <div className="content-block">
              <h3 style={{}}>
                Hi, Welcome to Biharijibook
              </h3>
              <h4>
                <MovingText 
                    className="movingtext"
                      type="typewriter"
                      duration="1000ms"
                      delay="0s"
                      direction="normal"
                      timing="ease"
                      iteration="infinite"
                      dataText={[
                        'Cricket',
                        'Football',
                        'Teenpatti',
                        'Tennis'
                      ]} 
                      />
                    </h4>
              <p>
              We are the best service provider, Contact us for New ID. We give full freedom to withdrawal just in 5 minutes!
              <hr style={{opacity:0}}/>
              Contact Now via WhatsApp!
              </p>
              <div className="button-block">
                <button onClick={openWhatsapp}  className="banner-btn">
                <i class="fa fa-whatsapp"></i>
                 <span>WhatsApp</span>
                </button>
                <button onClick={openInstagram}className="banner-btn">
                  <i className="fa fa-instagram"></i>
                 <span>Instagram</span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default bannertwo;
