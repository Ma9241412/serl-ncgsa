import React, { useState } from 'react';
import { Row, Col, Typography, Grid, Button } from 'antd';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const SpaceOutreach = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  const cardData = [
    {
      title: "Emphasizing Project-Based Learning and Innovation",
      description:
        "Workshops and trainings challenge participants to apply scientific principles, design thinking, and teamwork to create functional space-related models and prototypes.",
      img: require("../../assets/images/modus1.png"),
      delay: "0.2s"
    },
    {
      title: "Fostering a Culture of Curiosity, Collaboration, and Exploration",
      description:
        "Across all initiatives, we encourage participants to ask questions, work collaboratively, and connect space science with broader societal issues, environmental concerns, and global sustainability goals.",
      img: require("../../assets/images/modus2.png"),
      delay: "0.6s"
    },
    {
      title: "Implementing Innovative Research Methods",
      description:
        "We develop cutting-edge research methodologies that combine theoretical knowledge with practical applications, enabling breakthrough discoveries in space science education.",
      img: require("../../assets/images/modus1.png"),
      delay: "0.1s",
      extra: true
    },
    {
      title: "Building Global Collaboration Networks",
      description:
        "We establish international partnerships and collaborative frameworks that connect educators, researchers, and students worldwide to advance space education initiatives.",
      img: require("../../assets/images/modus2.png"),
      delay: "0.3s",
      extra: true
    }
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div
        style={{
          backgroundColor: "transparent",
          padding: isMobile ? "10px 20px" : "30px 40px",
          position: "relative"
        }}
      >
        {/* Background stars */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "100px 100px, 150px 150px, 200px 200px",
            pointerEvents: "none"
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Title section */}
          <Row justify="start" style={{ marginBottom: "60px" }}>
            <Col xs={24} lg={23} style={{ paddingLeft: isMobile ? "10px" : "40px" }}>
              <Title
                level={2}
                style={{
                  color: "#FFFFFF",
                  fontSize: isMobile ? "2.2rem" : "2.8rem",
                  fontWeight: "bold",
                  marginBottom: "10px"
                }}
              >
                Modus Operandi
              </Title>
              <div style={{ width: "100%", height: "2px", backgroundColor: "#FF9500", marginBottom: "20px" }} />
              <Paragraph
                style={{
                  color: "#D1D5DB",
                  fontSize: isMobile ? "1.1rem" : "1.2rem",
                  lineHeight: "1.7",
                  textAlign: "justify"
                }}
              >
                At SERL, we operate through a structured and dynamic approach that integrates hands-on engagement,
                interdisciplinary content, and real-world applications to cultivate curiosity and competence in space sciences.
              </Paragraph>
            </Col>
          </Row>

        {/* Cards section */}
<Row
  gutter={[0, 48]}
  style={{
    paddingLeft: isMobile ? "10px" : "40px",
    paddingRight: isMobile ? "10px" : "40px"
  }}
>
  {cardData
    .filter(card => !card.extra || showAll)
    .map((card, index) => (
      <Col xs={24} lg={24} key={index}>
        <div
          style={{
            backgroundColor: "#131212",
            border: "1px solid #FF9500", // ✅ Border now visible
            borderRadius: "16px",
            padding: isMobile ? "20px" : "25px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? "20px" : "35px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            animation: `fadeInUp 0.8s ease-out ${card.delay} forwards`
          }}
        >
          <div style={{ flex: 1 }}>
            <Title
              level={3}
              style={{
                color: "#FFFFFF",
                fontSize: isMobile ? "1.8rem" : "2.2rem",
                fontWeight: "bold",
                marginBottom: "20px",
                lineHeight: "1.2"
              }}
            >
              {card.title}
            </Title>
            <Paragraph
              style={{
                color: "#D1D5DB",
                fontSize: isMobile ? "1.1rem" : "1.3rem",
                lineHeight: "1.6",
                textAlign: "left"
              }}
            >
              {card.description}
            </Paragraph>
          </div>
          <div
            style={{
              flexShrink: 0,
              width: isMobile ? "100%" : "400px",
              height: "250px"
            }}
          >
            <img
              src={card.img}
              alt={card.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
                transition: "transform 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={e =>
                (e.target.style.transform = "scale(1.05)")
              }
              onMouseLeave={e =>
                (e.target.style.transform = "scale(1)")
              }
            />
          </div>
        </div>
      </Col>
    ))}
</Row>


          {/* View All Button */}
          <Row justify="end" style={{ marginTop: "40px", paddingRight: isMobile ? "10px" : "40px" }}>
            <Button
              type="link"
              onClick={handleViewAll}
              style={{
                color: "#FF9500",
                fontSize: "1.1rem",
                fontWeight: "500",
                border: "none",
                padding: "0",
                height: "auto",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                animation: "fadeInUp 0.8s ease-out 1s forwards"
              }}
            >
              {showAll ? "Show Less" : "View All"}
              <span
                style={{
                  fontSize: "1.2rem",
                  transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease"
                }}
              >
                ▼
              </span>
            </Button>
          </Row>
        </div>
      </div>
    </>
  );
};

export default SpaceOutreach;
