import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./block-title";
import AccordionCard from "./cards/accordion-card";
import blockTitleCircle from "../assets/images/round-circle-1-7.png";

const ACCORDION_DATA = [
  {
    status: false,
    content:
      "Fantasy sports is a strategy-based online sports game where you can create a virtual team of real players, playing in live matches worldwide. You earn points and win cash prizes based on the performances of these players in actual matches.",
    title: "What is Fantasy Sports?"
  },
  {
    status: false,
    content:
      "Adding money to your Biharijibook account is both simple and safe. We have many different payment options enabled on Biharijibook to ensure that your personal details are safe with us. What's more? After you verify your personal details, you can withdraw the money that you win on Biharijibook directly to your bank account.",
    title: "Is it safe to add money to Biharijibook?"
  },
  {
    status: false,
    content:
      "A successfully processed withdrawal request via IMPS should get credited almost instantly or within 3 working days. NEFT should get credited within 3 working days for more details,you can connect with us on WhatsApp.",
    title: "When do I get my winnings?"
  },
  {
    status: false,
    content:
      `Keeping your Biharijibook account secure is of paramount importance to us. Here are 3 essential tips to keep in mind: \n

     1-  Do not share your OTP with anyone. No one working at Biharijibook will ever ask you for any OTP, so please don’t share it with anyone. \n

     2- Do not share sensitive information (like your mobile number, email ID, PAN number, Bank account number etc.) with other players on the Biharijibook platform or with anyone outside our platform. \n
     
     3- Report any fraudulent activity immediately to us via the Helpdesk. If you have shared any details with another person, please report such activity to us.`,
    title: "How can I keep my Biharijibook account safe?"
  }
];

const FAQ = () => {
  return (
    <section className="faq-style-one">
      <Container>
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`Want to ask something \n from us?`}
        />
        <div className="accrodion-grp faq-accrodion">
          {ACCORDION_DATA.map(({ status, title, content }, index) => (
            <AccordionCard
              key={`accordion-card-${index}`}
              status={status}
              title={title}
              content={content}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
