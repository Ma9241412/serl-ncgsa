import React from "react";
import GetInTouch from "../MainComponents/ContactUs/GetInTouch";
import InfoBox from "../MainComponents/ContactUs/InfoBox";
import CollaboratorsPartners from "../MainComponents/ContactUs/CollaboratorsPartners";
import mainhomebg from "../assets/images/homemainbg.jpg";

const ContactUsPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${mainhomebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <div className="global-layout">
            <div
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
            <GetInTouch />
            <InfoBox />
            <CollaboratorsPartners />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
