import { Fira_Sans_Extra_Condensed } from "next/font/google";
import Homes from "./Home/Home";

const OpenSans = Fira_Sans_Extra_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Home() {
  return (
    <main className={OpenSans.className}>
      <Homes />
    </main>
    
  );
}
export default Home;
