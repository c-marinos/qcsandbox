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

      <h1>About Curiee</h1>

Commercial quantum computers could be available at any time from a couple of years to decades. But once they are here, no one knows (not even the scientists) what all the possibilities for this new paradigm are.

<br />   <br />   

Marie Curie once said, <i>"We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained".</i> This is one of our principles at Curiee.

<br />   <br />   
The mathematical language used in quantum computing may at first seem highly intricate and difficult to understand; however, we believe that through its use in programming, it can begin to make sense in a very natural way. You begin seeing things differently. You start to contemplate the fabric of our reality.



    <br /> 

  <h1>About the Team</h1>
  <p style={{ marginBottom: "2rem" }}>
    <a
      style={{ padding: 0, fontSize: "22px"  }}
      href="https://github.com/bt3gl"
    >
       👩🏻‍💻 Mia von Steinkirch
    </a>{" "}
    – <b>Physicist && software engineer.</b>
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
    – <b>Designer && frontend developer.</b>
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
    – <b> Quantum computing enthusiast.</b>
    <br />
    At Curiee, we believe that a better future can be built on the foundations of <b>Science and Equanimity</b>. If you identify with these ideals, we would be very interested to learn more about your unique point of view in the World.  


          
        </p>

        <br />

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
