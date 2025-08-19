import React, { useState } from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import LtGeneralMohsinQureshi from './HostingVisits/LtGeneralMohsinQureshi';
import ProfAhsanIqbalChaudhary from './HostingVisits/ProfAhsanIqbalChaudhary';
import HigherEducationCommission from './HostingVisits/HigherEducationCommission';
import PakChinaJointResearchCenterInEarthSciences from './HostingVisits/PakChinaJointResearchCenterInEarthSciences';
import NationalAerospaceScienceAndTechnologyParkNASTPD12 from './HostingVisits/NationalAerospaceScienceAndTechnologyParkNASTPD12';
import '../../Styles/SpaceOutreach.css';

const { Title, Paragraph } = Typography;

const hostingVisitsList = [
  { key: 'lt-general-mohsin-qureshi', label: 'Lt. General Mohsin Qureshi', component: <LtGeneralMohsinQureshi /> },
  { key: 'prof-ahsan-iqbal-chaudhary', label: 'Prof. Ahsan Iqbal Chaudhary', component: <ProfAhsanIqbalChaudhary /> },
  { key: 'higher-education-commission', label: 'Higher Education Commission', component: <HigherEducationCommission /> },
  { key: 'pak-china-joint-research-center-in-earth-sciences', label: 'Pak-China Joint Research Center in Earth Sciences', component: <PakChinaJointResearchCenterInEarthSciences /> },
  { key: 'national-aerospace-science-and-technology-park-nastp-d12', label: 'National Aerospace Science and Technology Park (NASTP) +D12', component: <NationalAerospaceScienceAndTechnologyParkNASTPD12 /> }
];

const HostingVisitsComponents = () => {
  const [selectedVisit, setSelectedVisit] = useState(hostingVisitsList[0].key);

  const renderVisitComponent = () => {
    const found = hostingVisitsList.find(v => v.key === selectedVisit);
    return found ? found.component : hostingVisitsList[0].component;
  };

  return (
    <Row className="spo-wrapper" justify="center">
      <Col xs={24} lg={24} xl={24}>
        <Card bordered={false} className="spo-card">
          <Space direction="vertical" size="large" className="spo-space">
            <div className="spo-header">
              <Title level={1} className="spo-title">Hosting Visits</Title>
              <div className="spo-underline" />
              <Paragraph className="spo-paragraph">
                Visits from distinguished guests and organizations to our space outreach programs, fostering collaboration and knowledge exchange in the field of space science and technology.
              </Paragraph>
              <Space size="small" wrap>
                {hostingVisitsList.map((visit) => (
                  <Button
                    key={visit.key}
                    size="large"
                    className={selectedVisit === visit.key ? 'spo-btn spo-btn-active' : 'spo-btn spo-btn-inactive'}
                    onClick={() => setSelectedVisit(visit.key)}
                  >
                    {visit.label}
                  </Button>
                ))}
              </Space>
            </div>
            {renderVisitComponent()}
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default React.memo(HostingVisitsComponents);
