import React, { useState } from 'react';
import { Row, Col, Typography, Grid, Button, Card } from 'antd';
import '../../Styles/About.css';

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
    { title: "Emphasizing Project-Based Learning and Innovation", description: "Workshops and trainings challenge participants to apply scientific principles, design thinking, and teamwork to create functional space-related models and prototypes.", img: require("../../assets/images/modus1.png"), delay: "0.2s" },
    { title: "Fostering a Culture of Curiosity, Collaboration, and Exploration", description: "Across all initiatives, we encourage participants to ask questions, work collaboratively, and connect space science with broader societal issues, environmental concerns, and global sustainability goals.", img: require("../../assets/images/modus2.png"), delay: "0.6s" },
    { title: "Implementing Innovative Research Methods", description: "We develop cutting-edge research methodologies that combine theoretical knowledge with practical applications, enabling breakthrough discoveries in space science education.", img: require("../../assets/images/modus1.png"), delay: "0.1s", extra: true },
    { title: "Building Global Collaboration Networks", description: "We establish international partnerships and collaborative frameworks that connect educators, researchers, and students worldwide to advance space education initiatives.", img: require("../../assets/images/modus2.png"), delay: "0.3s", extra: true }
  ];

  return (
    <Row className="modus-wrapper" justify="start">
      <Row justify="start" className="modus-row-text">
        <Col xs={24} lg={23} className="modus-text-col">
          <Title level={2} className="modus-title">Modus Operandi</Title>
          <div className="section-underline" />
          <Paragraph className="modus-paragraph">
            At SERL, we operate through a structured and dynamic approach that integrates hands-on engagement, interdisciplinary content, and real-world applications to cultivate curiosity and competence in space sciences.
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[0, 48]} className="modus-cards-row">
        {cardData.filter(card => !card.extra || showAll).map((card, index) => (
          <Col xs={24} lg={24} key={index}>
            <Card bordered={false} className="modus-card" hoverable data-delay={card.delay}>
              <div className="modus-card-content">
                <div className="modus-card-text">
                  <Title level={3} className="modus-card-title">{card.title}</Title>
                  <Paragraph className="modus-card-desc">{card.description}</Paragraph>
                </div>
                <div className="modus-card-image-wrap">
                  <img src={card.img} alt={card.title} className="modus-card-img" />
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row justify="end" className="modus-row-button">
        <Button type="link" onClick={handleViewAll} className="modus-viewall-btn">
          {showAll ? "Show Less" : "View All"}
          <span className={`modus-viewall-caret ${showAll ? 'rotated' : ''}`}>▼</span>
        </Button>
      </Row>
    </Row>
  );
};

export default React.memo(SpaceOutreach);
