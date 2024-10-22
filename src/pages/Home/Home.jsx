import FasterWhay from "@/Components/HomeComponents/fasterWhay";
import Hero from "@/Components/HomeComponents/hero";
import OurPortfolio from "@/Components/HomeComponents/ourPortfolio";
import Service from "@/Components/HomeComponents/service";
import Steps from "@/Components/HomeComponents/steps";
import Whychooseus from "@/Components/HomeComponents/whyChooseUs";
import AboutUs from "@/Components/HomeComponents/aboutus";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Whychooseus />
       <Steps />
      {/* <Service /> */}
      {/* <OurPortfolio /> */}
      {/* <FasterWhay />  */}
    </>
  );
};

export default Home;
