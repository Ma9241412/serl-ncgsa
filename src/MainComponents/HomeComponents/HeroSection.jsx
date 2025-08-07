import React from "react";
import { Row, Col, Typography, Button, Grid } from "antd";
import mainbg from "../../assets/images/mainbg.jpg";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const HeroSection = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.lg;

  return (
    <div
      style={{
          backgroundImage: `url(${mainbg})`,
    backgroundSize: "cover", width: "100%",
          backgroundPosition: "center",
        backgroundColor: "#000000", // Changed from blue to black
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
      className="home-cont"
        style={{
      
          borderRadius: "15px", // Curved rectangle
          // width: "100%",
          // maxWidth: "1200px",
          minHeight: "calc(80vh - 0px)", // No padding adjustment needed
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden", // Ensures curved corners work properly
        }}
      >
        <Row
          justify="space-between"
          align="middle" // Vertically center content
          style={{ width: "100%", maxWidth: "1200px" }}
          gutter={[24, 24]}
        >
        {/* LEFT COLUMN */}
        <Col
          xs={24}
          lg={12}
          style={{
            textAlign: isMobile ? "center" : "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom:"25px"
          }}
        >
          <Title
            style={{
              fontSize: "1.9rem",
              color: "#fff",
              marginBottom: "0px", // ✅ Removed extra gap
              fontFamily: "Inter",
            }}
          >
            Space Education Research Lab
          </Title>

          <Title
            style={{
              color: "#F59E0B",
              fontSize: isMobile ? "3rem" : "9.2rem",
              fontWeight: "600",
              margin: "0px", // ✅ Removed default margin
              fontFamily: "Inter",
            }}
          >
            SPACE
          </Title>

          <Paragraph
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              color: "#fff",
              marginTop: "5px", // ✅ Added small margin for spacing
              marginBottom: "10px",
              fontFamily: "Inter",
            }}
          >
            EDUCATION | AWARENESS | OUTREACH
          </Paragraph>

          <Paragraph
            style={{
              fontSize: "1.16rem",
              color: "#3B82F6",
              margin: 0,
              fontFamily: "Inter",
            }}
          >
            Inspiring Space Innovation Through STEM Learning
          </Paragraph>
        </Col>

        {/* RIGHT COLUMN */}
        <Col
          xs={24}
          lg={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <Paragraph
            style={{
              color: "white",
              fontSize: "1.1rem",
              backgroundColor: "#302E30",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "justify",
              fontFamily: "Inter",
              lineHeight: "2",
            }}
          >
            Space Education Research Lab (SERL), is one of the labs of National
            Center Of GIS & Space Applications (NCGSA) that primarily focuses to
            develop innovative and sustainable interactive learning methods and
            strategies for space science and technology awareness, education and
            popularization.
          </Paragraph>

          <Button
            type="default"
            size="large"
            style={{
              backgroundColor: "#F59E0B",
              color: "black",
              fontWeight: "bold",
              marginTop: "15px",
              border: "none",
              alignSelf: isMobile ? "center" : "flex-start",
              fontFamily: "Inter",
            }}
          >
            Read More
          </Button>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default HeroSection;
