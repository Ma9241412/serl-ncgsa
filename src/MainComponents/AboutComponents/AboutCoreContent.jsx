import React, { Suspense } from "react";
import { Skeleton } from "antd";
import homemainbg from "../../assets/images/homemainbg.jpg";

const VisionSection = React.lazy(() => import("./VisionSection"));
const ContributionSection = React.lazy(() => import("./ContributionSection"));
const MissionSection = React.lazy(() => import("./MissionSection"));
const ModusOperandiSection = React.lazy(() => import("./ModusOperandiSection"));
const SpaceDomainsSection = React.lazy(() => import("./SpaceDomainsSection"));
const AwardsSection = React.lazy(() => import("./AwardsSection"));

const AboutCoreContent = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homemainbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Overlay for better text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <Suspense
          fallback={
            <Skeleton
              active
              paragraph={{ rows: 6 }}
              style={{ margin: "24px" }}
            />
          }
        >
          <VisionSection />
        </Suspense>
        <Suspense
          fallback={
            <Skeleton
              active
              paragraph={{ rows: 6 }}
              style={{ margin: "24px" }}
            />
          }
        >
          <ContributionSection />
        </Suspense>
        <Suspense
          fallback={
            <Skeleton
              active
              paragraph={{ rows: 6 }}
              style={{ margin: "24px" }}
            />
          }
        >
          <MissionSection />
        </Suspense>
        <Suspense
          fallback={
            <Skeleton
              active
              paragraph={{ rows: 6 }}
              style={{ margin: "24px" }}
            />
          }
        >
          <ModusOperandiSection />
        </Suspense>
        <Suspense
          fallback={
            <Skeleton
              active
              paragraph={{ rows: 6 }}
              style={{ margin: "24px" }}
            />
          }
        >
          <SpaceDomainsSection />
        </Suspense>
        <Suspense
          fallback={
            <Skeleton
              active
              paragraph={{ rows: 6 }}
              style={{ margin: "24px" }}
            />
          }
        >
          <AwardsSection />
        </Suspense>
      </div>
    </div>
  );
};

export default AboutCoreContent;
