import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

import Head from "../components/Head";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { BigSubscribe, SmallSubscribe } from "../components/Subscribe";

export default () => (
  <>
    <Head />
    <Menu />
    <Layout>
      <Header />
      <Hero>
        <HeroText>
          <h1>Interactive Quantum Computing</h1>
          <h5>
          Learn quantum software languages and become fluent in the quantum computing mathematical paradigm
          </h5>

          <SmallSubscribe />
        </HeroText>
        <HeroIllo src="/assets/heroillustration.png" />
      </Hero>
      <Section1>
        <h4>Recent Releases</h4>
        <FlexContainer>
          <div style={{ cursor: "pointer", maxWidth: "100%" }}>


          <Link href="/tutorials/teleportation" as="/tutorials/teleportation">
              <a>
                <Tilt glareEnable={true} tiltReverse={true}>
                  <FlexCard>
                    <h5>Quantum Teleportation in Cirq</h5>
                    <img src="/assets/teleportation.png"></img>
                  </FlexCard>
                </Tilt>
              </a>
            </Link>
          </div>


          <div
            style={{
              cursor: "pointer",
              maxWidth: "100%",
              margin: "0 2rem"
            }}
          >
            <Link href="/tutorials/hello" as="/tutorials/hello">
              <a>
                <Tilt glareEnable={true} perspective={3000} tiltReverse={true}>
                  <FlexCard>
                    <h5>Hello Quantum World</h5>
                    <img src="/assets/intro.png"></img>
                  </FlexCard>
                </Tilt>
              </a>
            </Link>
          </div>


               </FlexContainer>
      </Section1>
      <FinalSection>
        <BigSubscribe />
      </FinalSection>
    </Layout>
    <Footer hasAbsurd={true} />
  </>
);

export const Layout = styled.div`
  width: 1040px;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
`;

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  padding: 0 1rem;

  h1 {
    font-size: 4.5rem;
    font-weight: 800;
    line-height: 1.01em;
    margin: 0;

    @media all and (max-width: 930px) {
      font-size: 2.5rem;
    }
  }

  h5 {
    color: #666;
    text-align: inherit;
    font-size: 1.25rem;
    line-height: 1.5em;
    text-transform: none;
    max-width: 40ch;
    margin: 2.5rem 0;
  }

  p {
    text-align: left;
  }

  @media all and (max-width: 930px) {
    margin: 2rem 0 0;
    flex-direction: column;

    h1,
    h5 {
      text-align: center;
    }

    h5 {
      margin: 2.5rem auto;
    }
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
`;

const HeroIllo = styled.img`
  max-width: 100%;
  width: 500px;

  @media all and (max-width: 930px) {
    margin-top: 5rem;
  }
`;

const Disclaimer = styled.p`
  margin: 0;
  text-align: center;
  color: #444;
`;

const Section1 = styled.section`
  margin: 8rem 0 0;
  border-top: 0.5px solid #000;
  border-bottom: 0.5px solid #000;
  padding: 1rem 1rem 4rem;

  h4 {
    margin-bottom: 2rem;
  }

  @media all and (max-width: 930px) {
    margin: 4rem 0 0;
  }
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const FlexCard = styled.figure`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 1rem;
  width: 300px;
  max-width: 100%;
  position: relative;
  margin: 0;

  h5 {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 1rem;
    ${"" /* min-height: 54px; */}
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  border-width: 1px;
  border-color: #eaeaea;
  border-radius: 5;
  border-style: solid;
`;
const FinalSection = styled.section`
  margin: 8rem 0;
`;
