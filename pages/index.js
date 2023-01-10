import React from "react";
import Head from "next/head";
import Banner from "/components/Banner";
import JoinProcess from "/components/JoinProcess";
import Sales from "/components/Sales";
import Subscribe from "/components/Subscribe";

function Launchpad() {
  return (
    <React.Fragment>
      <Head>
        <title>ESPStarter Launchpad</title>
      </Head>
      <Banner />
      <JoinProcess />
      <Sales />
      <Subscribe />
    </React.Fragment>
  );
}

export default Launchpad;
