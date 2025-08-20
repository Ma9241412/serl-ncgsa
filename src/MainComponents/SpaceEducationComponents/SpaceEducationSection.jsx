import React, { useState, useEffect, Suspense } from "react";
import { Layout, Row, Col, Typography, Card, Select, Skeleton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import '../../Styles/SpaceEducationSection.css'
const SpaceSummerSchool = React.lazy(() =>
  import("./SpaceSummerSchoolComponent")
);
const SpaceDestinationSchool = React.lazy(() =>
  import("./SpaceDestinationSchoolComponent")
);
const BeaconhouseNotionofAcademia = React.lazy(() =>
  import("./BeaconhouseNotionofAcademiaComponent")
);
const AstronomyCampComponent = React.lazy(() =>
  import("./AstronomyCampComponent")
);
const CanSatDesignandDevelopment= React.lazy(() =>
  import("./CanSatDesignandDevelopmentComponent")
);
const GeographicInformationSystem = React.lazy(() =>
  import("./GeographicInformationSystemComponent")
);
const GlobalNavigationSatelliteSystem = React.lazy(() =>
  import("./GlobalNavigationSatelliteSystemComponent")
);
const NASASpaceApplicationsChallengeComponent = React.lazy(() =>
  import("./NASASpaceApplicationsChallengeComponent")
);
const QuadcoptersDesigningRotorcraftComponent = React.lazy(() => import("./QuadcoptersDesigningRotorcraftComponent"));
import '../../Styles/SpaceOutreachSection.css';

const { Title } = Typography;
const { Option } = Select;

const { Content } = Layout;

const SpaceEducationSection = () => {
  const programData = {
    "space-summer-school": { title: "Space Summer School" },
    "space-destination-school": { title: "Space Destination School" },
    "beaconhouse-notion-of-academia": { title: "Beaconhouse Notion of Academia" },
    "astronomy-camp": { title: "Astronomy Camp" },
    "cansat-design-and-development": { title: "CanSat Design and Development" },
    "geographic-information-system": { title: "Geographic Information System" },
    "global-navigation-satellite-system": { title: "Global Navigation Satellite System" },
    "nasa-space-applications-challenge": { title: "NASA Space Applications Challenge" },
    "quadcopters-designing-rotorcraft": { title: "Quadcopters Designing Rotorcraft" }
  };

  const [selectedProgram, setSelectedProgram] = useState("space-summer-school");

  const handleProgramChange = (value) => {
    setSelectedProgram(value);
  };

  const renderSelectedProgram = () => {
    switch (selectedProgram) {
      case "space-summer-school":
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <SpaceSummerSchool />
          </Suspense>
        );
      case "space-destination-school":
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <SpaceDestinationSchool />
          </Suspense>
        );
      case "beaconhouse-notion-of-academia":
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <BeaconhouseNotionofAcademia />
          </Suspense>
        );
      case "astronomy-camp":
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <AstronomyCampComponent />
          </Suspense>
        );
      case "cansat-design-and-development":
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <CanSatDesignandDevelopment />
          </Suspense>
        );
      case "geographic-information-system":
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <GeographicInformationSystem />
          </Suspense>
        );
      case "global-navigation-satellite-system":
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <GlobalNavigationSatelliteSystem />
          </Suspense>
        );
      case "nasa-space-applications-challenge":
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <NASASpaceApplicationsChallengeComponent />
          </Suspense>
        );
      case "quadcopters-designing-rotorcraft":
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <QuadcoptersDesigningRotorcraftComponent />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            <SpaceSummerSchool />
          </Suspense>
        );
    }
  };

  return (
    <Layout className="sos-bg">
      <Content>
        {/* Hero Section */}
        <div className="sos-hero-card">
          <h1 className="sos-hero-title">SPACE EDUCATION</h1>
        </div>

        {/* Navigate To Program Section */}
        <Row justify="center" className="sos-nav-section">
          <Col xs={24} lg={24} xl={23}>
            <Card bordered={false} className="sos-nav-card">
              <Title level={3} className="sos-nav-title">Navigate To Program</Title>
              <div className="sos-nav-underline"></div>
              <Row gutter={[16, 16]} className="sos-nav-btn-row" style={{ marginTop: '24px' }}>
                {['space-summer-school', 'space-destination-school', 'beaconhouse-notion-of-academia', 'astronomy-camp'].map((key) => (
                  <Col key={key}>
                    <button
                      onClick={() => handleProgramChange(key)}
                      className={`sos-nav-btn${selectedProgram === key ? ' sos-nav-btn-active' : ''}`}
                    >
                      {programData[key].title}
                    </button>
                  </Col>
                ))}
              </Row>
              <Row gutter={[16, 16]} className="sos-nav-btn-row" style={{ marginTop: '8px' }}>
                {['cansat-design-and-development', 'geographic-information-system', 'global-navigation-satellite-system', 'nasa-space-applications-challenge', 'quadcopters-designing-rotorcraft'].map((key) => (
                  <Col key={key}>
                    <button
                      onClick={() => handleProgramChange(key)}
                      className={`sos-nav-btn${selectedProgram === key ? ' sos-nav-btn-active' : ''}`}
                    >
                      {programData[key].title}
                    </button>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Dynamic Content Based on Selection */}
        <div className="sos-dynamic">
          <Suspense fallback={<div className="sos-skeleton"><Skeleton active paragraph={{ rows: 8 }} /></div>}>
            {renderSelectedProgram()}
          </Suspense>
        </div>
      </Content>
    </Layout>
  );
};

export default React.memo(SpaceEducationSection);
