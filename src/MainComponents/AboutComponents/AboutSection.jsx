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
        <div style={{ width: "100%", maxWidth: "1200px", display: "flex", alignItems: "center", justifyContent: "flex-start", height: "100%" }}>
          <div style={{ width: "100%", maxWidth: "600px", paddingLeft: "2vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 style={{ color: "#F59E0B", fontSize: "9.2rem", fontWeight: 600, margin: 0, fontFamily: "Inter", textAlign: "left" }}>ABOUT</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
