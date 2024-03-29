import Head from "next/head";
import React from "react";
const Header = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={
          description ||
          "AI Powered Web Design based on the Northern Beaches of Sydney, Australia."
        }
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
