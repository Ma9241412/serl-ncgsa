import React from "react";
import mainbg from "../../assets/images/mainbg.jpg";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1200px", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
          {/* width: '100%', maxWidth: '1200px' is the standard for all events and navigation bar width in Space Outreach section */}
          <div style={{ width: "100%", maxWidth: "600px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{ color: "#FFFFFF", fontSize: "9.2rem", fontWeight: 600, margin: 0, fontFamily: "Inter", textAlign: "center" }}>ABOUT</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
