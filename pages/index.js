import React from "react";
import styled from "styled-components";
import { bubble as Menu } from "react-burger-menu";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

import Head from "../components/Head";
import Header, { NewLink, NewLinkText } from "../components/Header";
import Footer from "../components/Footer";
import { BigSubscribe, SmallSubscribe } from "../components/Subscribe";

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "2rem",
    height: "2rem",
    right: "1.5rem",
    top: "2.5rem"
  },
  bmBurgerBars: {
    background: "#000"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%"
  },
  bmMenu: {
    background: "#000",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#000"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export default () => (
  <>
    <Head />
    <Menu right styles={styles}>
      <Link href="/tutorials">
        <NewLink color="#fff">
          Tutorials
          <NewLinkText>New</NewLinkText>
        </NewLink>
      </Link>
      <Link href="/games">
        <NewLink color="#fff">
          Games
          <NewLinkText bg="#F49B0B">Soon</NewLinkText>
        </NewLink>
      </Link>
      <Link href="/sandbox">
        <NewLink color="#fff">
          Sandbox
          <NewLinkText bg="#F49B0B">Soon</NewLinkText>
        </NewLink>
      </Link>
      <Link href="/about">
        <a style={{ color: "white" }}>About</a>
      </Link>
    </Menu>
    <Layout>
      <Header />
      <Hero>
        <HeroText>
          <h1>Interactive Quantum Computing</h1>
          <h5>
            Learn to apply quantum languages and become fluent in the quantum
            computing mathematical model
          </h5>
          <SmallSubscribe />
        </HeroText>
        <HeroIllo src="/assets/heroillustration.png" />
      </Hero>
      <Section1>
        <h4>Recent Releases</h4>
        <FlexContainer>
          <Tilt
            glareEnable={true}
            perspective={3000}
            tiltReverse={true}
            style={{ cursor: "pointer" }}
          >
            <FlexCard>
              <h5>What the heck is quantum computing?</h5>
              <p>
                Introduction to quantum computing, with a hello world example
                👋🌐
              </p>
              <img src="/assets/intro.png"></img>
            </FlexCard>
          </Tilt>
        </FlexContainer>
      </Section1>
      <FinalSection>
        <BigSubscribe />
        <Disclaimer>No spam, only awesomeness.</Disclaimer>
      </FinalSection>
    </Layout>
    <Footer />
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
`;

const Disclaimer = styled.p`
  margin: 0;
  text-align: center;
  color: #444;
`;

const Section1 = styled.section`
  margin: 8rem 0 0 0;
  border-top: 0.5px solid #000;
  border-bottom: 0.5px solid #000;
  padding: 1rem 0 4rem;

  h4 {
    margin-bottom: 2rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
`;

const FlexCard = styled.figure`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 1rem;
  width: 345px;
  max-width: 100%;
  position: relative;
  margin: 0;

  h5 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #888;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  border-width: 0px 0px 0px 0px;
  border-color: rgba(188, 188, 188, 1);
  border-radius: 5;
  border-style: solid;
  box-shadow: 0px 5px 35px 0px rgba(50, 50, 93, 0.17);

  &:hover {
    border-style: solid;
    box-shadow: 0px 5px 35px 0px rgba(50, 50, 93, 0.17);
  }
`;
const FinalSection = styled.section`
  margin: 8rem 0;
`;
