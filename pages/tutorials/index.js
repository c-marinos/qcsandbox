import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Head from "../../components/Head";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

export default () => (
  <TutorialWrapper>
    <Head />
    <Menu />
    <Layout>
      <Header />
      <section style={{ padding: "0 1rem" }}>
        <h1>Tutorials</h1>
        <ol>
          <li>
            <Link href="/tutorials/hello">
              <a>Hello Quantum World</a>
            </Link>
          </li>
          <li>
            <Link href="/tutorials/teleportation">
              <a>Quantum Teleportation</a>
            </Link>
          </li>
        </ol>
      </section>
    </Layout>
    <Footer />
  </TutorialWrapper>
);

const TutorialWrapper = styled.div`
  ol {
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
