import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "./cards/service-card";
import BlockTitle from "./block-title";
import blockTitleCircle from "../assets/images/round-circle-1-1.png";

const SERVICES_DATA = [
  {
    icon: "fa fa-user",
    title: "New ID",
    text:
      "In this guide, we’ll tackle the process of creating a great New ID.",
    link: "https://api.whatsapp.com/send?phone=917338253825&text=Need%20an%20ID%20just%20say%20Hi!"
  },
  {
    icon: "fa fa-money",
    title: "Withdrawal Anytime",
    text:
      "Withdrawal in 5 Minutes otherwise will refund all amount.",
    link: "https://api.whatsapp.com/send?phone=917338253825&text=Need%20an%20ID%20just%20say%20Hi!"
  },
  {
    icon: "fa fa-phone",
    title: "24x7 Services",
    text:
      "Yes, We are available 24x7 to assist you with any of your needs.",
    link: "https://api.whatsapp.com/send?phone=917338253825&text=Need%20an%20ID%20just%20say%20Hi!"
  }
];
const Services = () => {
  return (
    <section 
    className="services-style-one" id="service"
    > 
      <Container>
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`What We Do For You`}
        />
        <Row>
          {SERVICES_DATA.map(({ icon, title, text, link }, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <ServiceCard icon={icon} title={title} text={text} link={link} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
