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
    <Menu />
    <Layout>
      <Header />
      <section style={{ padding: "0 1rem" }}>
        <h1>About the Team</h1>
        <p style={{ marginBottom: "2rem" }}>
          <a
            style={{ padding: 0, fontSize: "22px"  }}
            href="https://github.com/bt3gl"
          >
             👩🏻‍💻 Mia von Steinkirch
          </a>{" "}
          – Founder and CEO.
          <br />Mia fell in love with quantum computing during her Ph.D. in
 Theoretical Physics. Since then, she has been alternating between the quantum world and the software world. In the past, she worked at Apple, Etsy, Yelp, the Los Alamos National Laboratory, and the Brookhaven National Laboratory.
        </p>
        <p>
          <a
            style={{ padding: 0, fontSize: "22px"  }}
            href="https://github.com/thomaswangio"
          >
           👨🏻‍💻 Thomas Wang
          </a>{" "}
          – Designer and frontend developer.
          <br />
          Thomas is an avid open-source contributor and
          software advocate. His favorite motto is "always curious, always learning". 
        </p>
        <p style={{ marginTop: "2rem" }}> 
          <a
            style={{ padding: 1, fontSize: "22px"   }}
            href="https://angel.co/company/curiee/jobs/670471-quantum-computing-enthusiast?inFrame=1"
          >
           🤖 You
          </a>{" "}
          – Quantum Computing Enthusiast.
          <br />
          Be part of the quantum computing revolution and help us build awesomeness!
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
