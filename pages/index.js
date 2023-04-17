import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header-two";
import BannerTwo from "../components/banner-two";
import FunFact from "../components/funfact";
import Services from "../components/services";
import FeatureTwo from "../components/feature-two";
import Testimonials from "../components/testimonials";
import FAQ from "../components/faq";
import BlogHome from "../components/blog-home";
import Subscribe from "../components/subscribe";
import Footer from "../components/footer";
import WhatsAppIcon from "../components/WhatsAppIcon";

const HomeTwo = () => {
  return (
    <Layout pageTitle="Biharijibook">
      <HeaderTwo />
      <BannerTwo />
      <FunFact />
      <Services />
      <FeatureTwo />
      <Testimonials />
      <FAQ />
      <BlogHome />
      {/* <Subscribe /> */}
      <Footer />
      <WhatsAppIcon />
    </Layout>
  );
};

export default HomeTwo;
