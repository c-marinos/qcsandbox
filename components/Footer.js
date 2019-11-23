import React from "react";
import styled from "styled-components";
import { Twitter, Instagram } from "react-feather";

export default () => (
  <Wrapper>
    <Container>
      <Column>
        <h3>QC Sandbox™</h3>
        <Copy>
          © Copyright 2019 Curiee Inc.
          <br />
          All rights reserved.
          <br />
          Illustration by <a href="https://absurd.design/">Absurd Design</a>.
        </Copy>
      </Column>
      <FinalColumn>
        <h4>Follow Us</h4>
        <div>
          <a
            href="https://twitter.com/qcsandbox"
            style={{ marginRight: "1rem", padding: 0 }}
          >
            <Twitter />
          </a>
          <a
            href="https://www.instagram.com/qcsandbox/"
            style={{ marginRight: "1rem", padding: 0 }}
          >
            <Instagram />
          </a>
        </div>
      </FinalColumn>
    </Container>
  </Wrapper>
);

const Wrapper = styled.footer`
  background: #fafafa;
  min-height: 5rem;
  display: flex;
  justify-content: center;
  padding: 2rem 0 5rem;
`;

const Container = styled.div`
  width: 1040px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 930px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Column = styled.div`
  margin-right: 2rem;

  @media all and (max-width: 930px) {
    margin: 0;
  }
`;

const FinalColumn = styled.div`
  margin-right: 0;
`;

const Copy = styled.div`
  color: #888;
  word-break: break-word;
  line-height: 2;
  font-size: 16px;
  font-weight: 400;

  a {
    padding: 0;
    font-size: 14px;
  }
`;