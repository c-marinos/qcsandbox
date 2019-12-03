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

        <h1>About us</h1>
        <p style={{ marginBottom: "2rem" }}>
          <a
            style={{ padding: 0, fontSize: "22px"  }}
            href="https://github.com/bt3gl"
          >
             👩🏻‍💻 Mia von Steinkirch
          </a>{" "}
          – <b>physicist && software engineer.</b>
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
          – <b>designer && frontend developer.</b>
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
          – <b> quantum computing enthusiast.</b>
          <br />   
          Marie Curie once said: <i>"We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained"</i>.
          <br /> <br />
          The mathematical language for quantum mechanics can be intricate at first (it's Nature's chosen language after all). Still, once you spend enough time on it, you start seeing things differently. You begin contemplating our Reality.
          <br /> <br />
          At Curiee, we believe that a better future can be built upon <b>Science and Equanimity</b>. If this is your belief too, you are part of our tribe, and we would love to learn more about your unique point of view in the World.
          <br /> <br />
          
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
