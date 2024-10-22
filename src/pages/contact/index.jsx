import ContactNav from "@/Components/ContactusComponents/contactNav";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import ContactBody from "@/Components/ContactusComponents/contactBody";
import Head from "next/head";

const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const index = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Product Paparazzi</title>
        <meta
          name="description"
          content="Get in touch with Product Paparazzi for professional product photography and e-commerce solutions. We are here to help you succeed."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://productpaparazzi.co.uk/contact" />
      </Head>
      <div className={OpenSans.className}>
        <ContactNav />
        <ContactBody />
      </div>
    </>
  );
};

export default index;
