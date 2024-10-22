import React from "react";

import Btn_Zoom from "../Common/btn_Zoom";
import DesignerDetails from "./designerDetails";
import CommonTextLine from "./commonTextLine";
import PaymentCards from "./paymentCards";
const WebDesignBuild = () => {
  return (
    <main className="container mx-auto">
      <DesignerDetails />
      <PaymentCards />
      <Btn_Zoom P="Book a Zoom call with us today to learn more about our" P2="Website design and take the first step in building your presence."/>
    </main>
  );
};

export default WebDesignBuild;
