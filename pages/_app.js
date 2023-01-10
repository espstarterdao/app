import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "/components/Header";
import Footer from "/components/Footer";
import { routes } from "/data/routes";
import { Container } from "@mui/system";

export default function MyApp({ Component, pageProps }) {
  return (
    <Box style={{ backgroundColor: "#0a0a15" }}>
      <Box>
        <Container>
          <CssBaseline />
          <Header routes={routes} />
          <Component {...pageProps} />
        </Container>
      </Box>
      <Box style={{ backgroundColor: "#10131d" }}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}
