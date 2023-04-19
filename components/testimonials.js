import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import BlockTitle from "./block-title";
import mapImage from "../assets/images/map-1-1.png";
import blockTitleCircle from "../assets/images/round-circle-1-6.png";
import testimonialImage1 from "../assets/images/review1.png";
import testimonialImage2 from "../assets/images/review2.png";
import testimonialImage3 from "../assets/images/review3.png";
import testimonialImage4 from "../assets/images/review4.png";
import testimonialImage5 from "../assets/images/review5.png";
import testimonialImage6 from "../assets/images/review6.png";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    title: "Rakesh Kumar, Patna, Bihar - Winnings ₹1 Lakh",
    content:
      "Mujhe bachpan se hi cricket ka shauk hai. Maine Biharijibook.club ke baare mein ek dost se suna. Abhi haal hi mein maine Biharijibook.club par 1 Lakh jeeta! Biharijibook.club ki sabse achhi baat yeh hai ki yeh aasaan, surakshit aur mazedaar hai!",
    image: testimonialImage1
  },
  {
    title: "Sumit Kumar, Gaya, Bihar - Winnings ₹50,000",
    content:
      " Biharijibook.club mere liye sabse best cricket fantasy website hai. Yahaan par har match aur series ke liye contests hote hain jo main follow karti hoon. Mujhe yahaan ke bonuses aur rewards bhi bahut pasand hain. Abhi haal hi mein maine unke mega contest mein ₹50,000 jeete. Mujhe bahut khushi hui. Thank you Biharijibook.club for this awesome opportunity! ",
    image: testimonialImage2
  },
  {
    title: "Anil Singh, Muzaffarpur, Bihar - Winnings ₹25,000",
    content:
      "Main Biharijibook.club ka bada fan hoon. Yahaan par mujhe apni team banane aur dusron se compete karne ke liye bahut saare features aur options milte hain. Main hamesha kuch naya aur exciting khelne ko milta hoon unki website par. Mujhe unka fast withdrawal aur customer support bhi bahut achha lagta hai. Pichle hafte maine unke daily contest mein ₹25,000 jeete. Mujhe bahut acha laga. Thank you Biharijibook.club for rewarding your loyal users! ",
    image: testimonialImage3
  },
  {
    title: "Abdul K., Ara, Bihar - Winnings ₹55,000",
    content:
      "This is a fantasy premiur legue, dream players selected win a jeckpot, and money. Fastest bussniss network in world, earn money.",
    image: testimonialImage4
  },
  {
    title: "RK Jha, Varanasi, Uttar Pradesh - Winnings ₹2 Lakh",
    content:
      "Agar aapko cricket khelna aur jeetna pasand hai toh Biharijibook.club aapke liye hai! Ye site hai sabse best cricket eSports fantasy site aur maine yahaan se 2 lakhs jeete hai. Is site ke saath khelna bohot easy hai aur payouts bhi fast hai. Mere khayal se, ye site bahut hi reliable aur entertaining hai.",
    image: testimonialImage5
  },
  {
    title: "Venkat Krishna, Prayagraj, Uttar Pradesh - Winnings ₹75,000 ",
    content:
      "Biharijibook.club is best site for cricket eSports fantasy. Maine yahan se 2 lakh jeete. Iska interface user-friendly hai aur game khelna bahut easy hai. Maine apne cricket knowledge se accha profit kiya. Isse behtar koi site nahi hai. Sabhi cricket fans ko Biharijibook.club join karna chahiye.",
    image: testimonialImage6
  }
];

const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const testimonialsCarouselOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 5000
    }
  };
  const testimonialsThumOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 1400,
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="testimonials-style-one" id="testimonials">
      <img src={mapImage} alt="Awesome Image" className="map-img" />
      <Container>
        <Row>
          <Col lg={6} className="d-flex">
            <div className="my-auto">
              <div id="testimonials-slider-pager">
                <div className="testimonials-slider-pager-one">
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <span key={index} className="pager-item">
                      <img src={image} alt="Awesome Image" />
                    </span>
                  ))}
                </div>
                <Swiper
                  {...testimonialsThumOption}
                  className="testimonials-slider-pager-two"
                  onSwiper={setThumbsSwiper}
                >
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt="Awesome Image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <BlockTitle
              textAlign="left"
              image={blockTitleCircle}
              title={`What’s our clients are \n saying.`}
            />

            <Swiper
              {...testimonialsCarouselOption}
              thumbs={{ swiper: thumbsSwiper }}
              className="slider testimonials-slider"
            >
              {TESTIMONIALS_DATA.map(({ title, content }, index) => (
                <SwiperSlide
                  key={`testimonials-card-${index}`}
                  className="slide-item"
                >
                  <div className="single-testi-one">
                    <p>{content}</p>
                    <h3>{title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
