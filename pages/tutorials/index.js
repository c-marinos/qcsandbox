import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default () => (
  <TutorialWrapper>
    <Layout>
      <Header />
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
    </Layout>
    <Footer />
  </TutorialWrapper>
);

const TutorialWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  a {
    color: #666;
    text-decoration: none;
    user-select: none;
    font-size: 14px;
    cursor: pointer;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding: 0px 10px;
    transition: all 200ms ease 0s;
    font-weight: 600;
  }
  a:hover {
    color: #000;
  }

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
