import React, { Suspense } from "react";
import { Skeleton, Layout } from "antd";
import '../../Styles/About.css';

const VisionSection = React.lazy(() => import("./VisionSection"));
const ContributionSection = React.lazy(() => import("./ContributionSection"));
const MissionSection = React.lazy(() => import("./MissionSection"));
const ModusOperandiSection = React.lazy(() => import("./ModusOperandiSection"));
const SpaceDomainsSection = React.lazy(() => import("./SpaceDomainsSection"));
const AwardsSection = React.lazy(() => import("./AwardsSection"));

const { Content } = Layout;

const AboutCoreContent = () => {
  return (
    <Layout className="about-core-bg">
      <Content className="about-core-content">
        <Suspense fallback={<div className="about-skel"><Skeleton active paragraph={{ rows: 6 }} /></div>}>
          <VisionSection />
        </Suspense>
        <Suspense fallback={<div className="about-skel"><Skeleton active paragraph={{ rows: 6 }} /></div>}>
          <ContributionSection />
        </Suspense>
        <Suspense fallback={<div className="about-skel"><Skeleton active paragraph={{ rows: 6 }} /></div>}>
          <MissionSection />
        </Suspense>
        <Suspense fallback={<div className="about-skel"><Skeleton active paragraph={{ rows: 6 }} /></div>}>
          <ModusOperandiSection />
        </Suspense>
        <Suspense fallback={<div className="about-skel"><Skeleton active paragraph={{ rows: 6 }} /></div>}>
          <SpaceDomainsSection />
        </Suspense>
        <Suspense fallback={<div className="about-skel"><Skeleton active paragraph={{ rows: 6 }} /></div>}>
          <AwardsSection />
        </Suspense>
      </Content>
    </Layout>
  );
};

export default React.memo(AboutCoreContent);
