import React from 'react';
import { Typography, Card, Select, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
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
import homemainbg from '../../assets/images/homemainbg.jpg';

const { Title } = Typography;
const { Option } = Select;

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
    <div style={{ 
      minHeight: '100vh',
      backgroundImage: `url(${homemainbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <style>
        {`
          .ant-select-dropdown {
            background-color: #1a1a1a !important;
            border: 1px solid #555 !important;
          }
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
          .ant-select-selection-item {
            color: white !important;
          }
        `}
      </style>

      {/* Header Section */}
      <div style={{ padding: '60px 0 20px', background: 'rgba(0, 0, 0, 0.7)' }}>
        <Row justify="center">
          <Col xs={24} lg={24} xl={23}>
            <Card
              style={{ 
                backgroundColor: 'transparent', 
                borderRadius: '20px', 
                border: '2px solid #FF9500',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
              bodyStyle={{ 
                padding: '50px 80px', 
                backgroundColor: 'transparent',
                borderRadius: '20px'
              }}
            >
              <Title level={2} style={{ 
                color: 'white', 
                marginBottom: '8px',
                fontSize: '36px',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                Talks & Sessions
              </Title>
              <div style={{
                width: '120px',
                height: '4px',
                backgroundColor: '#ff8c00',
                margin: '0 auto 32px'
              }}></div>
              
              <Select
                value={selectedEvent}
                onChange={onEventChange}
                style={{ 
                  width: '100%',
                  height: '55px'
                }}
                size="large"
                placeholder="Select Talk/Session"
                suffixIcon={<DownOutlined style={{ color: '#ff8c00', fontSize: '16px' }} />}
                dropdownStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #555',
                  borderRadius: '8px'
                }}
              >
                {availableEvents.map(event => (
                  <Option key={event} value={event}>
                    {eventTitles[event]}
                  </Option>
                ))}
              </Select>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Dynamic Event Content */}
      <div style={{ background: 'rgba(0, 0, 0, 0.5)', minHeight: 'auto' }}>
        {selectedEvent && renderSelectedEvent()}
      </div>
    </div>
  );
};

export default TalksSessionsComponent;
