import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./cards/blog-card";
import BlockTitle from "./block-title";
import blogImage1 from "../assets/images/blog5.jpg";
import blogImage2 from "../assets/images/blog1.jpg";
import blogImage3 from "../assets/images/blog2.jpg";
import blogImage4 from "../assets/images/blog3.jpg";
import blogImage5 from "../assets/images/blog4.jpg";
import blogImage6 from "../assets/images/blog6.jpg";
import blockTitleCircle from "../assets/images/round-circle-1-8.png";

const BLOG_DATA = [
  {
    image: blogImage1,
    author: "Cricket",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Pre and post launch mobile app marketing pitfalls to avoid",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: blogImage2,
    author: "Football",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Social currency high perfor- mance keywords or",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },
  {
    image: blogImage3,
    author: "Tennis",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Prioritize these line items quarterly sales are at ",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  }, {
    image: blogImage4,
    author: "Teenpatti",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Prioritize these line items quarterly sales are at ",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  },{
    image: blogImage5,
    author: "Casino",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Prioritize these line items quarterly sales are at ",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  }, {
    image: blogImage6,
    author: "Carrom",
    date: "30 April, 2019",
    comments: "2 Comments",
    title: "Prioritize these line items quarterly sales are at ",
    text:
      "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
    link: "/blog-details"
  }
];
const BlogHome = () => {
  return (
    <section className="blog-style-one" id="blog">
      <Container>
        <BlockTitle
          textAlign="center"
          image={blockTitleCircle}
          title={`Our Others Services`}
        />
        <Row>
          {BLOG_DATA.map(
            ({ image, author, date, comments, title, text, link }, index) => (
              <Col key={`blog-card-${index}`} lg={4}>
                <BlogCard
                  image={image}
                  author={author}
                  date={date}
                  comments={comments}
                  title={title}
                  text={text}
                  link={link}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
