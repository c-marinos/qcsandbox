import React from "react";
import Link from "next/link";
import { bubble as Menu } from "react-burger-menu";
import { NewLink, NewLinkText } from "./Header";

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
);
