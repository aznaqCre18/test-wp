import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/Hero/Hero";
import Benefit from "../components/Benefit/Benefit";
import Trips from "../components/Trips/Trips";
import Posts from "../components/Posts/Posts";
import Footer from "../components/Footer/Footer";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Benefit />
    <Trips />
    <Posts />
    <Footer />
  </Layout>
)

export default IndexPage;