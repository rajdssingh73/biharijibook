import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-2.png";
import mocup from "../assets/images/moc-1-1.png";
import ProgressBar from 'react-bootstrap/ProgressBar';


const FeatureTwo = () => {
  return (
    <section className="feature-style-two" id="features">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="image-block">
              <img className="imgFeatureTwo" src={mocup} alt="Awesome Image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="content-block">
              <BlockTitle
                textAlign="left"
                image={blockTitleCircle}
                title={`Online Deals`}
              />
              <p>
              When choosing a service for selling your products, consider factors such as ease of use, cost, and features offered. It's also important to ensure that the service you choose is secure and reliable, and that it provides adequate support for your business's needs
              </p>
              <ul className="feature-lists">
                 <li>
                Cricket
                   <ProgressBar style={{height:"8px"}} variant="success" now={96} />
                </li>
                <li>
                Football
                   <ProgressBar style={{height:"8px"}} variant="success" now={90} />
                </li>
                <li>
                Casino
                   <ProgressBar style={{height:"8px"}} variant="success" now={59} />
                </li>
                <li>
                Teenpatti
                   <ProgressBar style={{height:"8px"}} variant="success" now={76} />
                </li>
              </ul>
              {/* <a href="#" className="feature-btn">
                Learn More
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureTwo;
