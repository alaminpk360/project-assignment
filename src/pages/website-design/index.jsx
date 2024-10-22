import WebsiteDesignHero from "@/Components/websiteDesignComponent/websiteDesignHero";
import React from "react";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import WebDesignBuild from "@/Components/websiteDesignComponent/webDesignBuild";
import Head from "next/head";

const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const index = () => {
  return (
    <>
      <Head>
        <title>Website design | Product Paparazzi</title>
        <meta
          name="description"
          content="Get in touch with Product Paparazzi for professional  Website design solutions. We are here to help you succeed."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://productpaparazzi.co.uk/website-design"
        />
      </Head>
      <div className={OpenSans.className}>
        <WebsiteDesignHero />
        <WebDesignBuild />
      </div>
    </>
  );
};

export default index;
