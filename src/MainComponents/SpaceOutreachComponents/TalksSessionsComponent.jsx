import React from 'react';
import { Typography, Card, Row, Col, Button, Space } from 'antd';
import STEMxWebinar from './TalksSessions/STEMxWebinar';
import TheSpaceTalkPodcast from './TalksSessions/TheSpaceTalkPodcast';
import SpaceTechEduLandscape from './TalksSessions/SpaceTechEduLandscape';
import CyberThreatsAerospace from './TalksSessions/CyberThreatsAerospace';
import SpaceDataEmergency from './TalksSessions/SpaceDataEmergency';
import TechNexusSecurity from './TalksSessions/TechNexusSecurity';
import STEMforSpaceVU from './TalksSessions/STEMforSpaceVU';
import SpaceTechSDGs from './TalksSessions/SpaceTechSDGs';
import WomenInSpaceContributions from './TalksSessions/WomenInSpaceContributions';
import WomenInSpaceSector from './TalksSessions/WomenInSpaceSector';
import FloatingSatellitePlatform from './TalksSessions/FloatingSatellitePlatform';
import CareersInSpace from './TalksSessions/CareersInSpace';
import TelescopePeepSky from './TalksSessions/TelescopePeepSky';
import STEMPanelSymposiumBNA from './TalksSessions/STEMPanelSymposiumBNA';
import AcademiaIndustryUOW from './TalksSessions/AcademiaIndustryUOW';
import IACBakuResearch from './TalksSessions/IACBakuResearch';
import AIFuturePanelNUST from './TalksSessions/AIFuturePanelNUST';
import SpaceSciCommCaseStudy from './TalksSessions/SpaceSciCommCaseStudy';
import SpaceTalkRezaShirazi from './TalksSessions/SpaceTalkRezaShirazi';
import GNSSSTEMx from './TalksSessions/GNSSSTEMx';
import SpaceTechRendezvous from './TalksSessions/SpaceTechRendezvous';
import '../../Styles/SpaceOutreach.css';

const { Title } = Typography;

const TalksSessionsComponent = ({ selectedEvent, availableEvents, onEventChange }) => {
  const eventTitles = {
    'stemx-webinar': 'STEMx Webinar',
    'the-space-talk-podcast': 'The Space Talk Podcast',
    'space-tech-edu-landscape': 'Space Tech Edu Landscape',
    'cyber-threats-aerospace': 'Cyber Threats Aerospace',
    'space-data-emergency': 'Space Data Emergency',
    'tech-nexus-security': 'Tech Nexus Security',
    'stem-for-space-vu': 'STEM for Space VU',
    'space-tech-sdgs': 'Space Tech SDGs',
    'women-in-space-contributions': 'Women in Space Contributions',
    'women-in-space-sector': 'Women in Space Sector',
    'floating-satellite-platform': 'Floating Satellite Platform',
    'careers-in-space': 'Careers in Space',
    'telescope-peep-sky': 'Telescope Peep Sky',
    'stem-panel-symposium-bna': 'STEM Panel Symposium BNA',
    'academia-industry-uow': 'Academia Industry UOW',
    'iac-baku-research': 'IAC Baku Research',
    'ai-future-panel-nust': 'AI Future Panel NUST',
    'space-sci-comm-case-study': 'Space Sci Comm Case Study',
    'space-talk-reza-shirazi': 'Space Talk Reza Shirazi',
    'gnss-stemx': 'GNSS STEMx',
    'space-tech-rendezvous': 'Space Tech Rendezvous'
  };

  const renderSelectedEvent = () => {
    switch (selectedEvent) {
      case 'stemx-webinar':
        return <STEMxWebinar />;
      case 'the-space-talk-podcast':
        return <TheSpaceTalkPodcast />;
      case 'space-tech-edu-landscape':
        return <SpaceTechEduLandscape />;
      case 'cyber-threats-aerospace':
        return <CyberThreatsAerospace />;
      case 'space-data-emergency':
        return <SpaceDataEmergency />;
      case 'tech-nexus-security':
        return <TechNexusSecurity />;
      case 'stem-for-space-vu':
        return <STEMforSpaceVU />;
      case 'space-tech-sdgs':
        return <SpaceTechSDGs />;
      case 'women-in-space-contributions':
        return <WomenInSpaceContributions />;
      case 'women-in-space-sector':
        return <WomenInSpaceSector />;
      case 'floating-satellite-platform':
        return <FloatingSatellitePlatform />;
      case 'careers-in-space':
        return <CareersInSpace />;
      case 'telescope-peep-sky':
        return <TelescopePeepSky />;
      case 'stem-panel-symposium-bna':
        return <STEMPanelSymposiumBNA />;
      case 'academia-industry-uow':
        return <AcademiaIndustryUOW />;
      case 'iac-baku-research':
        return <IACBakuResearch />;
      case 'ai-future-panel-nust':
        return <AIFuturePanelNUST />;
      case 'space-sci-comm-case-study':
        return <SpaceSciCommCaseStudy />;
      case 'space-talk-reza-shirazi':
        return <SpaceTalkRezaShirazi />;
      case 'gnss-stemx':
        return <GNSSSTEMx />;
      case 'space-tech-rendezvous':
        return <SpaceTechRendezvous />;
      default:
        return <STEMxWebinar />;
    }
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space" style={{ width: '100%' }}>
            <div className="spo-header">
              <Title level={1} className="spo-title">Talks & Sessions</Title>
              <div className="spo-underline" />
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '16px', flexWrap: 'wrap', margin: '24px 0' }}>
                {availableEvents.map(event => (
                  <Button
                    key={event}
                    size="large"
                    className={selectedEvent === event ? 'spo-btn spo-btn-active' : 'spo-btn spo-btn-inactive'}
                    onClick={() => onEventChange(event)}
                  >
                    {eventTitles[event]}
                  </Button>
                ))}
              </div>
            </div>
            <div style={{ width: '100%' }}>
              {selectedEvent && renderSelectedEvent()}
            </div>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(TalksSessionsComponent);
