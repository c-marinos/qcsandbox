import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#FFF",
    accent1: "#FAFAFA",
    accent2: "#EAEAEA",
    accent3: "#999",
    accent4: "#888",
    accent5: "#666",
    accent6: "#444",
    accent7: "#333",
    accent8: "#111",
    foreground: "#000",
    primary: "#0070f3",
    error: "#E00",
    success: "#0070F3",
    warning: "#F5A623",
    alert: "#FF0080",
    purple: "#F81CE5",
    violet: "#7928CA",
    cyan: "#79FFE1"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
