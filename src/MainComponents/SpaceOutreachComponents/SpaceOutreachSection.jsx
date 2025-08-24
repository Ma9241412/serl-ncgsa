import React, { useState, useEffect, Suspense } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Layout, Row, Col, Typography, Card, Select, Skeleton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import '../../Styles/SpaceOutreachSection.css';
const WorldSpaceWeekComponents = React.lazy(() =>
  import("./WorldSpaceWeekComponents")
);
const SpaceFestivalsComponent = React.lazy(() =>
  import("./SpaceFestivalsComponent")
);
const SpaceMediaComponent = React.lazy(() => import("./SpaceMediaComponent"));
const LincolnsCornerComponent = React.lazy(() =>
  import("./LincolnsCornerComponent")
);
const AstronomyOutreachComponent = React.lazy(() =>
  import("./AstronomyOutreachComponent")
);
const SpaceBiblioRendezvousComponent = React.lazy(() =>
  import("./SpaceBiblioRendezvousComponent")
);
const TalksSessionsComponent = React.lazy(() =>
  import("./TalksSessionsComponent")
);
const HostingVisitsComponent = React.lazy(() =>
  import("./HostingVisitsComponents")
);
const ShowcasingComponent = React.lazy(() => import("./ShowcasingComponent"));
const SchoolVisitsComponent = React.lazy(() =>
  import("./SchoolVisitsComponent")
);
const ForumComponent = React.lazy(() => import("./ForumComponent"));
import '../../Styles/SpaceOutreachSection.css';

const { Title } = Typography;
const { Option } = Select;

const { Content } = Layout;

const SpaceOutreachSection = () => {
  useEffect(() => {
    AOS.init({ duration:3000});
  }, []);
  const programData = {
    "world-space-week": { title: "World Space Week", years: ["2020", "2021", "2022", "2023", "2024"] },
    "space-festivals": { title: "Space Festivals", events: ["lahore-science-mela", "steam-mela", "space-expo", "pakistan-learning-festival"] },
    "space-media": { title: "Space Media", events: ["space-film-festival", "jahan-aur-bhi-hain"] },
    "lincolns-corner": { title: "Lincoln's Corner", events: ["human-spaceflight-fjwu", "human-spaceflight-nlp", "women-in-space-fjwu", "wright-brothers-day-fjwu"] },
    "astronomy-outreach": { title: "Astronomy Outreach", events: [
      "iao",
      "solar-telescopy-aerospace-hercules-workshop",
      "solar-telescopy-ai-and-robotics-summer-camp",
      "solar-telescopy-roots-ivy-international-schools-dha-1"
    ] },
    "space-biblio-rendezvous": { title: "Space Biblio Rendezvous", isStandalone: true },
    "talks-sessions": { title: "Talks & Sessions", events: [
      "stemx-webinar","the-space-talk-podcast","space-tech-edu-landscape","cyber-threats-aerospace","space-data-emergency","tech-nexus-security","stem-for-space-vu","space-tech-sdgs","women-in-space-contributions","women-in-space-sector","floating-satellite-platform","careers-in-space","telescope-peep-sky","stem-panel-symposium-bna","academia-industry-uow","iac-baku-research","ai-future-panel-nust","space-sci-comm-case-study","space-talk-reza-shirazi","gnss-stemx","space-tech-rendezvous"
    ] },
    "hosting-visits": { title: "Hosting Visits", events: [
      "hec","hosting-visits-list","lt-gen-mohsin-qureshi","nastp","pak-china-research-center","prof-ahsan-iqbal"
    ] },
    showcasing: { title: "Showcasing", events: ["ice2025", "beaconhouse", "vc-forum-2023", "aptex2025"] },
    "school-visits": { title: "School Visits", events: ["space-debris-headstart", "gcu-lahore", "inventix-summit"] },
    forum: { title: "Forum", events: ["space-forum-2020","space-forum-2021","careers-in-space-forum","step-forum","forum-360-stem","space-forum-2022"] }
  };

  const [selectedProgram, setSelectedProgram] = useState("world-space-week");
  const [selectedYear, setSelectedYear] = useState(
    programData["world-space-week"].years[0]
  );
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleProgramChange = (value) => {
    setSelectedProgram(value);
    if (value === "world-space-week") {
      const firstYear = programData[value].years[0];
      setSelectedYear(firstYear);
      setSelectedEvent("");
    } else if (programData[value].isStandalone) {
      setSelectedEvent("");
      setSelectedYear("");
    } else {
      const firstEvent = programData[value].events[0];
      setSelectedEvent(firstEvent);
      setSelectedYear("");
    }
  };

  useEffect(() => {
    if (
      selectedProgram !== "world-space-week" &&
      !programData[selectedProgram].isStandalone &&
      !selectedEvent
    ) {
      const firstEvent = programData[selectedProgram].events[0];
      setSelectedEvent(firstEvent);
    }
  }, [selectedProgram, selectedEvent]);

  const renderSelectedProgram = () => {
    switch (selectedProgram) {
      case "world-space-week":
        return (
          <WorldSpaceWeekComponents
            selectedYear={selectedYear}
            availableYears={programData[selectedProgram].years}
            onYearChange={setSelectedYear}
          />
        );
      case "space-festivals":
        return (
          <SpaceFestivalsComponent
            selectedEvent={selectedEvent}
            availableEvents={programData[selectedProgram].events}
            onEventChange={setSelectedEvent}
          />
        );
      case "space-media":
        return (
          <SpaceMediaComponent
            selectedEvent={selectedEvent}
            availableEvents={programData[selectedProgram].events}
            onEventChange={setSelectedEvent}
          />
        );
      case "lincolns-corner":
        return (
          <LincolnsCornerComponent
            selectedEvent={selectedEvent}
            availableEvents={programData[selectedProgram].events}
            onEventChange={setSelectedEvent}
          />
        );
      case "astronomy-outreach":
        return (
          <AstronomyOutreachComponent
            selectedEvent={selectedEvent}
            availableEvents={programData[selectedProgram].events}
            onEventChange={setSelectedEvent}
          />
        );
      case "space-biblio-rendezvous":
        return <SpaceBiblioRendezvousComponent />;
      case "talks-sessions":
        return (
          <TalksSessionsComponent
            selectedEvent={selectedEvent}
            availableEvents={programData[selectedProgram].events}
            onEventChange={setSelectedEvent}
          />
        );
      case "hosting-visits":
        return (
          <HostingVisitsComponent
            selectedEvent={selectedEvent}
            availableEvents={programData[selectedProgram].events}
            onEventChange={setSelectedEvent}
          />
        );
      case "showcasing":
        return (
          <ShowcasingComponent
            selectedEvent={selectedEvent}
            availableEvents={programData[selectedProgram].events}
            onEventChange={setSelectedEvent}
          />
        );
      case "school-visits":
        return (
          <SchoolVisitsComponent
            selectedEvent={selectedEvent}
            availableEvents={programData[selectedProgram].events}
            onEventChange={setSelectedEvent}
          />
        );
      case "forum":
        return (
          <ForumComponent
            selectedEvent={selectedEvent}
            availableEvents={programData[selectedProgram].events}
            onEventChange={setSelectedEvent}
          />
        );
      default:
        return (
          <WorldSpaceWeekComponents
            selectedYear={selectedYear}
            availableYears={programData["world-space-week"].years}
            onYearChange={setSelectedYear}
          />
        );
    }
  };

  return (
    <Layout className="sos-bg">
      <Content>
        {/* Hero Section */}
        <div className="sos-hero-card">
          <h1 className="sos-hero-title" data-aos="fade-left">SPACE OUTREACH</h1>
        </div>

        {/* Navigate To Program Section */}
        <Row justify="center" className="sos-nav-section">
          <Col xs={24} lg={24} xl={23}>
            <Card bordered={false} className="sos-nav-card">
              <Title level={3} className="sos-nav-title">Navigate To Program</Title>
              <div className="sos-nav-underline"></div>
              <Row gutter={[16, 16]} className="sos-nav-btn-row" style={{ marginTop: '24px' }}>
                {['world-space-week', 'space-festivals', 'space-media', 'lincolns-corner', 'astronomy-outreach', 'hosting-visits'].map((key) => (
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
                {['space-biblio-rendezvous', 'talks-sessions', 'showcasing', 'school-visits', 'forum'].map((key) => (
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

export default React.memo(SpaceOutreachSection);
