import React, { useState, useEffect, Suspense } from "react";
import { Row, Col, Typography, Card, Select, Collapse, Skeleton } from "antd";
import { DownOutlined } from "@ant-design/icons";
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
  import("./HostingVisitsComponent")
);
const ShowcasingComponent = React.lazy(() => import("./ShowcasingComponent"));
const SchoolVisitsComponent = React.lazy(() =>
  import("./SchoolVisitsComponent")
);
const ForumComponent = React.lazy(() => import("./ForumComponent"));
import homemainbg from "../../assets/images/homemainbg.jpg";

const { Title } = Typography;
const { Option } = Select;
const { Panel } = Collapse;

const SpaceOutreachSection = () => {
  // Program data with events/sub-programs
  const programData = {
    "world-space-week": {
      title: "World Space Week",
      years: ["2020", "2021", "2022", "2023", "2024"],
    },
    "space-festivals": {
      title: "Space Festivals",
      events: [
        "lahore-science-mela",
        "steam-mela",
        "space-expo",
        "pakistan-learning-festival",
      ],
    },
    "space-media": {
      title: "Space Media",
      events: ["space-film-festival", "jahan-aur-bhi-hain"],
    },
    "lincolns-corner": {
      title: "Lincoln's Corner",
      events: [
        "human-spaceflight-fjwu",
        "human-spaceflight-nlp",
        "women-in-space-fjwu",
        "wright-brothers-day-fjwu",
      ],
    },
    "astronomy-outreach": {
      title: "Astronomy Outreach",
      events: ["iao", "solar-telescopy-visits"],
    },
    "space-biblio-rendezvous": {
      title: "Space Biblio Rendezvous",
      isStandalone: true,
    },
    "talks-sessions": {
      title: "Talks & Sessions",
      events: [
        "stemx-webinar",
        "the-space-talk-podcast",
        "space-tech-edu-landscape",
        "cyber-threats-aerospace",
        "space-data-emergency",
        "tech-nexus-security",
        "stem-for-space-vu",
        "space-tech-sdgs",
        "women-in-space-contributions",
        "women-in-space-sector",
        "floating-satellite-platform",
        "careers-in-space",
        "telescope-peep-sky",
        "stem-panel-symposium-bna",
        "academia-industry-uow",
        "iac-baku-research",
        "ai-future-panel-nust",
        "space-sci-comm-case-study",
        "space-talk-reza-shirazi",
        "gnss-stemx",
        "space-tech-rendezvous",
      ],
    },
    "hosting-visits": {
      title: "Hosting Visits",
      events: [
        "hec",
        "hosting-visits-list",
        "lt-gen-mohsin-qureshi",
        "nastp",
        "pak-china-research-center",
        "prof-ahsan-iqbal",
      ],
    },
    showcasing: {
      title: "Showcasing",
      events: ["ice2025", "beaconhouse", "vc-forum-2023", "aptex2025"],
    },
    "school-visits": {
      title: "School Visits",
      events: ["space-debris-headstart", "gcu-lahore", "inventix-summit"],
    },
    forum: {
      title: "Forum",
      events: [
        "space-forum-2020",
        "space-forum-2021",
        "careers-in-space-forum",
        "step-forum",
        "forum-360-stem",
        "space-forum-2022",
      ],
    },
  };

  // State management with defaults
  const [selectedProgram, setSelectedProgram] = useState("world-space-week");
  const [selectedYear, setSelectedYear] = useState(
    programData["world-space-week"].years[0]
  ); // For World Space Week
  const [selectedEvent, setSelectedEvent] = useState(""); // For other programs

  // Handle program change and reset year/event
  const handleProgramChange = (value) => {
    setSelectedProgram(value);

    if (value === "world-space-week") {
      // Reset to first year of World Space Week
      const firstYear = programData[value].years[0];
      setSelectedYear(firstYear);
      setSelectedEvent("");
    } else if (programData[value].isStandalone) {
      // Standalone component - no events or years
      setSelectedEvent("");
      setSelectedYear("");
    } else {
      // Reset to first event of selected program
      const firstEvent = programData[value].events[0];
      setSelectedEvent(firstEvent);
      setSelectedYear("");
    }
  };

  // Initialize selectedEvent for non-world-space-week programs
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
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <style>
        {`
          /* Select dropdown styling */
          .ant-select-dropdown {
            background-color: #1a1a1a !important;
            border: 1px solid #555 !important;
            scrollbar-width: thin !important;
            scrollbar-color: #666666 #333333 !important;
          }
          
          /* Select dropdown scrollbar */
          .ant-select-dropdown::-webkit-scrollbar {
            width: 8px !important;
          }
          .ant-select-dropdown::-webkit-scrollbar-track {
            background: #333333 !important;
            border-radius: 4px !important;
          }
          .ant-select-dropdown::-webkit-scrollbar-thumb {
            background: #666666 !important;
            border-radius: 4px !important;
          }
          .ant-select-dropdown::-webkit-scrollbar-thumb:hover {
            background: #888888 !important;
          }
          
          /* Select input field styling */
          .ant-select-selector {
            background-color: #1a1a1a !important;
            border: 1px solid #555 !important;
            color: white !important;
          }
          .ant-select-selector:hover {
            border-color: #ff8c00 !important;
          }
          .ant-select-focused .ant-select-selector {
            border-color: #ff8c00 !important;
            box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.2) !important;
          }
          
          /* Select option styling */
          .ant-select-item-option {
            background-color: #1a1a1a !important;
            color: white !important;
          }
          .ant-select-item-option:hover {
            background-color: #333333 !important;
          }
          .ant-select-item-option-selected {
            background-color: #ff8c00 !important;
            color: white !important;
          }
          
          /* Select selection text */
          .ant-select-selection-item {
            color: white !important;
          }
        `}
      </style>

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "80vh",
          overflow: "hidden",
          backgroundImage: `url(${homemainbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row justify="center" style={{ width: "100%" }}>
          <Col xs={24} lg={24} xl={23}>
            <Card
              bordered={false}
              style={{ background: "transparent" }}
              bodyStyle={{ padding: 0 }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h1
                    style={{
                      color: "#FFFFFF",
                      fontSize: "9.2rem",
                      fontWeight: 600,
                      margin: 0,
                      fontFamily: "Inter",
                      textAlign: "center",
                    }}
                  >
                    SPACE OUTREACH
                  </h1>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Navigate To Program Section */}
      <section style={{ padding: "60px 0", background: "#000000" }}>
        <Row justify="center">
          <Col xs={24} lg={24} xl={23}>
            <Card
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "20px",
                border: "none",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                width: "100%",
              }}
              bodyStyle={{
                padding: "70px 100px",
                backgroundColor: "#1a1a1a",
                borderRadius: "20px",
              }}
            >
              <Title
                level={3}
                style={{
                  color: "white",
                  marginBottom: "8px",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                Navigate To Program
              </Title>
              <div
                style={{
                  width: "80px",
                  height: "3px",
                  backgroundColor: "#ff8c00",
                  marginBottom: "32px",
                }}
              ></div>

              <Select
                value={selectedProgram}
                onChange={handleProgramChange}
                style={{
                  width: "100%",
                  height: "55px",
                }}
                size="large"
                suffixIcon={
                  <DownOutlined
                    style={{ color: "#ff8c00", fontSize: "16px" }}
                  />
                }
                dropdownStyle={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #555",
                  borderRadius: "8px",
                }}
              >
                <Option value="world-space-week">World Space Week</Option>
                <Option value="space-festivals">Space Festivals</Option>
                <Option value="space-media">Space Media</Option>
                <Option value="lincolns-corner">Lincoln's Corner</Option>
                <Option value="astronomy-outreach">Astronomy Outreach</Option>
                <Option value="space-biblio-rendezvous">
                  Space Biblio Rendezvous
                </Option>
                <Option value="talks-sessions">Talks & Sessions</Option>
                <Option value="hosting-visits">Hosting Visits</Option>
                <Option value="showcasing">Showcasing</Option>
                <Option value="school-visits">School Visits</Option>
                <Option value="forum">Forum</Option>
              </Select>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Dynamic Content Based on Selection */}
      <section style={{ background: "#000000" }}>
        <Suspense
          fallback={
            <div style={{ padding: "40px 0", textAlign: "center" }}>
              <Skeleton active paragraph={{ rows: 8 }} />
            </div>
          }
        >
          {renderSelectedProgram()}
        </Suspense>
      </section>
    </div>
  );
};

export default SpaceOutreachSection;
