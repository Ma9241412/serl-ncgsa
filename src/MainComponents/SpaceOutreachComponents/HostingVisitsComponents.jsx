import React, { useState } from 'react';
import { Row, Col, Space, Typography, Button, Card } from 'antd';
import LtGenMohsinQureshi from './HostingVisits/LtGenMohsinQureshi';
import ProfAhsanIqbal from './HostingVisits/ProfAhsanIqbal';
import HEC from './HostingVisits/HEC';
import PakChinaResearchCenter from './HostingVisits/PakChinaResearchCenter';
import NASTP from './HostingVisits/NASTP';
import '../../Styles/SpaceOutreach.css';

const { Title, Paragraph } = Typography;

const hostingVisitsList = [
  { key: 'lt-gen-mohsin-qureshi', label: 'Lt. Gen Mohsin Qureshi', component: <LtGenMohsinQureshi /> },
  { key: 'prof-ahsan-iqbal', label: 'Prof. Ahsan Iqbal', component: <ProfAhsanIqbal /> },
  { key: 'hec', label: 'Higher Education Commission', component: <HEC /> },
  { key: 'pak-china-research-center', label: 'Pak-China Research Center', component: <PakChinaResearchCenter /> },
  { key: 'nastp', label: 'National Aerospace Science and Technology Park (NASTP)', component: <NASTP /> }
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
