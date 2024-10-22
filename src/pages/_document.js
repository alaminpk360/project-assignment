import Footer from "@/Components/Common/footer";
import Navbar from "@/Components/Common/navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Product Paparazzi | Professional Product Photography & E-commerce
          Solutions
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Product Paparazzi | Professional Product Photography & E-commerce Solutions"
        />
        <meta
          property="og:description"
          content="Discover top-notch product photography, infographics, and Amazon services with Product Paparazzi. Enhance your e-commerce success with our professional visual storytelling."
        />
        <meta property="og:url" content="https://productpaparazzi.co.uk/" />
        <meta
          property="og:image"
          content="https://productpaparazzi.co.uk/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fwhy_chise_thamnel.7993045c.png?url=%2F_next%2Fstatic%2Fmedia%2Fwhy_chise_thamnel.7993045c.png&w=640&q=75"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Product Paparazzi | Professional Product Photography & E-commerce Solutions"
        />
        <meta
          name="twitter:description"
          content="Discover top-notch product photography, infographics, and Amazon services with Product Paparazzi. Enhance your e-commerce success with our professional visual storytelling."
        />
        {/* img found */}
        <meta
          name="twitter:image"
          content="https://productpaparazzi.co.uk/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fwhy_chise_thamnel.7993045c.png?url=%2F_next%2Fstatic%2Fmedia%2Fwhy_chise_thamnel.7993045c.png&w=640&q=75"
        />
        <meta
          name="description"
          content="Discover top-notch product photography, infographics, and Amazon services with Product Paparazzi. Enhance your e-commerce success with our professional visual storytelling."
        />
        <meta
          name="keywords"
          content="Product Paparazzi, Product Photography, Infographic Service, Amazon Service, Personal Portraits, Graphic design,  Commercial Product, Website design, Linked In Services,   Product, Paparazzi CV Design Services, CV Design"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="favicon.ico" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://productpaparazzi.co.uk/" />
      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
