import React from "react";
import VisionSection from "./VisionSection";
import ContributionSection from "./ContributionSection";
import MissionSection from "./MissionSection";
import ModusOperandiSection from "./ModusOperandiSection";
import SpaceDomainsSection from "./SpaceDomainsSection";
import AwardsSection from "./AwardsSection";
import homemainbg from '../../assets/images/homemainbg.jpg';

const SpaceComponent = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${homemainbg})`,
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
            <VisionSection />
            <ContributionSection />
            <MissionSection />
            <ModusOperandiSection />
            <SpaceDomainsSection />
            <AwardsSection />
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(SpaceComponent);
