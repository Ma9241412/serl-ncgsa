import React from "react";
import StatsSection from './StatsSection';
import SpaceOutreach from './SpaceOutreach';
import SpaceEducation from './SpaceEducation';
import CapacityBuilding from './CapacityBuilding';
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
            <StatsSection />
            <SpaceOutreach />
            <SpaceEducation />
            <CapacityBuilding />
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(SpaceComponent);
