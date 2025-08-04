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
        }}
      >
        {/* Just the background image - no content */}
      </div>
    </div>
  );
};

export default HeroSection;
