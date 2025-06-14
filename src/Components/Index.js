import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Intro from "./Intro";
import GlobalFootprint from "./GlobalFootprint";
import DoctorTestimonials from "./DoctorTestimonials";
import OurTeam from "./OurTeam";
import OurProducts from "./OurProducts";
import MechanismAction from "./MechanismAction";
import ClinicalEvaluation from "./ClinicalEvaluation";
import LaunchActivities from "./LaunchActivities";
import Packaging from "./Packaging";
import OurPartners from "./OurPartners";
import Exhibitions from "./Exhibitions";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Reviews from "./Reviews";
import GlobalPresence from "./GlobalPresence";

function Index() {
  return (
    <>
      <Helmet>
        <title>Home </title>
      </Helmet>
      <Header />
      <Intro />
      <GlobalPresence/>
      <GlobalFootprint />
      <DoctorTestimonials />
      <OurTeam />
      <OurProducts />
      <MechanismAction />
      <ClinicalEvaluation />
      <LaunchActivities />
      <Reviews />
      <Packaging />
      <OurPartners />
      <Exhibitions />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Index;
