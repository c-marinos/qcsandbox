import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Head from "../components/Head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default () => (
  <TutorialWrapper>
    <Head />
    <Layout>
      <Header />
      <Menu />
      <section style={{ padding: "0 1rem" }}>
        <h1>About the Team</h1>
        <p style={{ marginBottom: "2rem" }}>
          <a
            style={{ padding: 0, fontSize: "18px" }}
            href="https://github.com/bt3gl"
          >
            Mia von Steinkirch
          </a>{" "}
          – Founder and CEO.
          <br />I felt in love with quantum computing during my PhD in
          Theorethical Physics, since then I have been alternating between the
          quantum world and the software world. Former Apple, Etsy, Yelp
          software engineer.
        </p>
        <p>
          <a
            style={{ padding: 0, fontSize: "18px" }}
            href="https://github.com/thoamswangio"
          >
            Thomas Wang
          </a>{" "}
          – Designer and frontend developer.
          <br />
          Always curious, always learning. Avid open-source contributor and
          software advocate.
        </p>
      </section>
    </Layout>
    <Footer />
  </TutorialWrapper>
);

const TutorialWrapper = styled.div`
  ul {
    padding: 1rem;

    li {
      margin-bottom: 1rem;
    }
  }
`;

export const Layout = styled.div`
  width: 1040px;
  max-width: 100%;
  min-height: 75vh;
  margin: 0 auto;
  position: relative;
`;
