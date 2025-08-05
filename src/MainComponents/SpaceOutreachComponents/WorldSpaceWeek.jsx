import React, { useState } from 'react';
import { Row, Col, Space, Typography, Button, Card, Select, Image, List, Avatar } from 'antd';
import { DownOutlined, PlayCircleOutlined, ClockCircleOutlined, BookOutlined, ExperimentOutlined, StarOutlined } from '@ant-design/icons';
import slider1 from '../../assets/images/slider1.png';
import activity1 from '../../assets/images/activity1.png';
import activity2 from '../../assets/images/activity2.png';
import activity3 from '../../assets/images/activity3.png';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const WorldSpaceWeek = () => {
  const [selectedProgram, setSelectedProgram] = useState('world-space-week');
  const [selectedYear, setSelectedYear] = useState('2020');

  const heroImages = [
    { src: activity1, alt: 'World Space Week Activity 1' },
    { src: activity2, alt: 'World Space Week Activity 2' },
    { src: activity3, alt: 'World Space Week Activity 3' }
  ];

  const yearButtons = ['2020', '2021', '2022', '2023'];

  const activities = [
    {
      title: 'Public Lectures And Seminars Featuring Leading Space Scientists And Researchers',
      icon: <ClockCircleOutlined />
    },
    {
      title: 'School Competitions And Activities Designed To Engage Students With Space Science',
      icon: <BookOutlined />
    },
    {
      title: 'Astronomy Observation Sessions With Professional Telescopes And Expert Guidance',
      icon: <StarOutlined />
    },
    {
      title: 'Workshops And Hands-On Activities Exploring Space Technology And Principles',
      icon: <ExperimentOutlined />
    }
  ];

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
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
      <section style={{ 
        position: 'relative', 
        height: '80vh', 
        overflow: 'hidden',
        backgroundImage: `url(${slider1})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      </section>

      {/* Navigate To Program Section */}
      <section style={{ padding: '60px 0', background: '#000000' }}>
        <Row justify="center">
          <Col xs={24} lg={24} xl={23}>
            <Card
              style={{ 
                backgroundColor: '#1a1a1a', 
                borderRadius: '20px', 
                border: 'none',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                width: '100%'
              }}
              bodyStyle={{ 
                padding: '70px 100px', 
                backgroundColor: '#1a1a1a',
                borderRadius: '20px'
              }}
            >
              <Title level={3} style={{ 
                color: 'white', 
                marginBottom: '8px',
                fontSize: '30px',
                fontWeight: '700'
              }}>
                Navigate To Program
              </Title>
              <div style={{
                width: '80px',
                height: '3px',
                backgroundColor: '#ff8c00',
                marginBottom: '32px'
              }}></div>
              
              <Select
                value={selectedProgram}
                onChange={setSelectedProgram}
                style={{ 
                  width: '100%',
                  height: '55px'
                }}
                size="large"
                suffixIcon={<DownOutlined style={{ color: '#ff8c00', fontSize: '16px' }} />}
                dropdownStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #555',
                  borderRadius: '8px'
                }}
              >
                <Option value="world-space-week">World Space Week</Option>
                <Option value="space-education">Space Education</Option>
                <Option value="astronomy-outreach">Astronomy Outreach</Option>
                <Option value="student-programs">Student Programs</Option>
              </Select>
            </Card>
          </Col>
        </Row>
      </section>

      {/* World Space Week Main Section */}
      <section style={{ padding: '20px 0', background: '#000000' }}>
        <Row justify="center">
          <Col xs={24} lg={24} xl={24}>
            <Card
              style={{ 
                backgroundColor: '#1a1a1a', 
                borderRadius: '30px', 
                border: 'none',
                maxWidth: '3800px',
                width: '95%',
                margin: '0 auto'
              }}
              bodyStyle={{ 
                padding: '60px 40px', 
                backgroundColor: '#1a1a1a',
                borderRadius: '30px'
              }}
            >
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {/* Header */}
                <div style={{ textAlign: 'left', paddingBottom: '20px' }}>
                  <Title level={1} style={{ marginBottom: '16px', color: 'white' }}>
                    World Space Week
                  </Title>
                  <div style={{
                    width: '1400px',
                    height: '2px',
                    backgroundColor: 'white',
                    marginBottom: '24px'
                  }}></div>
                  <Paragraph style={{ fontSize: '18px', color: '#cccccc', marginBottom: '24px' }}>
                    Annual Celebration Of Space Science And Technology Contributions To Improving Human Conditions. World Space Week Is An International 
                    Celebration Of Science And Technology, And Their Contribution To The Betterment Of The Human Condition.
                  </Paragraph>
                  
                  {/* Year Navigation */}
                  <Space size="small">
                    {yearButtons.map((year) => (
                      <Button
                        key={year}
                        size="large"
                        type={selectedYear === year ? 'primary' : 'default'}
                        style={{
                          backgroundColor: selectedYear === year ? '#ff8c00' : '#333333',
                          borderColor: selectedYear === year ? '#ff8c00' : '#555555',
                          color: selectedYear === year ? 'white' : '#cccccc',
                          minWidth: '80px',
                          height: '40px'
                        }}
                        onClick={() => setSelectedYear(year)}
                      >
                        {year}
                      </Button>
                    ))}
                  </Space>
                </div>

                {/* World Space Week 2020 Section */}
                <Card
                  style={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '20px' }}
                  bodyStyle={{ padding: '24px', backgroundColor: '#2a2a2a', borderRadius: '20px' }}
                >
                  <Title level={3} style={{ color: 'white', marginBottom: '8px', fontSize: '28px' }}>
                    World Space Week 2020
                  </Title>
                  <Text style={{ color: '#cccccc', display: 'block', marginBottom: '16px', fontSize: '18px' }}>
                    <strong>Theme</strong>: Satellites Improve Life
                  </Text>
                  <Text style={{ color: '#cccccc', display: 'block', marginBottom: '20px', fontSize: '16px' }}>
                    October 4-10, 2020
                  </Text>
                  
                  {/* Video Conference Interface */}
                  <div style={{ 
                    backgroundColor: '#1a1a1a', 
                    borderRadius: '12px', 
                    padding: '16px',
                    marginBottom: '20px'
                  }}>
                    {/* Main Video Area */}
                    <div style={{ 
                      backgroundColor: '#000000', 
                      borderRadius: '8px', 
                      height: '400px', 
                      position: 'relative',
                      marginBottom: '12px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      {/* Participant Grid */}
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        gridTemplateRows: 'repeat(3, 1fr)',
                        gap: '8px', 
                        padding: '16px',
                        height: '100%'
                      }}>
                        {/* Participant boxes */}
                        {[
                          { name: 'Qandeel Fatima', highlight: false },
                          { name: 'Faaz', highlight: false },
                          { name: 'Mazeeba', highlight: false },
                          { name: 'Asadullah Javahullah', highlight: false },
                          { name: 'Aanikar Pausival', highlight: false },
                          { name: 'Muhammad Hasan Bahtez', highlight: false },
                          { name: 'Dr. Najam Abbas', highlight: true },
                          { name: 'Arutv Nain', highlight: false },
                          { name: 'Click to expand', highlight: false, isExpand: true }
                        ].map((participant, index) => (
                          <div key={index} style={{
                            backgroundColor: participant.highlight ? '#2d5016' : '#333333',
                            border: participant.highlight ? '2px solid #4CAF50' : '1px solid #555555',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start',
                            padding: '8px',
                            position: 'relative',
                            minHeight: '80px'
                          }}>
                            <Text style={{ 
                              color: 'white', 
                              fontSize: '12px', 
                              backgroundColor: 'rgba(0,0,0,0.7)',
                              padding: '2px 6px',
                              borderRadius: '4px'
                            }}>
                              {participant.name}
                            </Text>
                            {participant.isExpand && (
                              <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '14px'
                              }}>
                                Click to expand
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      {/* Video Controls */}
                      <div style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <div style={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <div style={{ width: '8px', height: '8px', backgroundColor: 'white' }}></div>
                          <div style={{ width: '8px', height: '8px', backgroundColor: 'white' }}></div>
                        </div>
                        <Text style={{ color: 'white', fontSize: '14px' }}>0:29 / 1:07:42</Text>
                      </div>
                      
                      {/* Zoom Controls */}
                      <div style={{
                        position: 'absolute',
                        bottom: '16px',
                        right: '16px',
                        display: 'flex',
                        gap: '8px'
                      }}>
                        <div style={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          padding: '8px',
                          borderRadius: '4px',
                          color: 'white',
                          fontSize: '16px'
                        }}></div>
                        <div style={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          padding: '8px',
                          borderRadius: '4px',
                          color: 'white',
                          fontSize: '16px'
                        }}></div>
                        <div style={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          padding: '8px',
                          borderRadius: '4px',
                          color: 'white',
                          fontSize: '16px'
                        }}></div>
                        <div style={{
                          backgroundColor: 'rgba(0,0,0,0.8)',
                          padding: '8px',
                          borderRadius: '4px',
                          color: 'white',
                          fontSize: '16px'
                        }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <Text style={{ color: '#cccccc', fontSize: '16px' }}>
                    The 2020 Theme "Satellites Improve Life" Celebrates The Contribution Of Satellites To Human Development And Welfare. Learn How Satellites 
                    Help Us With Communication, Navigation, Weather Forecasting, Resource Management, And Disaster Response.
                  </Text>
                </Card>

                {/* Activities Section */}
                <div>
                  <Title level={2} style={{ color: 'white', marginBottom: '8px', fontSize: '32px' }}>
                    Activities
                  </Title>
                  <div style={{
                    width: '60px',
                    height: '4px',
                    backgroundColor: '#ff8c00',
                    marginBottom: '24px'
                  }}></div>
                  <List
                    dataSource={activities}
                    renderItem={(item) => (
                      <List.Item style={{ border: 'none', padding: '16px 0' }}>
                        <List.Item.Meta
                          avatar={
                            <Avatar 
                              icon={item.icon} 
                              style={{ backgroundColor: 'transparent', color: 'white', fontSize: '20px' }}
                              size="large"
                            />
                          }
                          title={
                            <Text style={{ color: 'white', fontSize: '20px', lineHeight: '1.5', fontWeight: '400' }}>
                              {item.title}
                            </Text>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>

                {/* Photo Gallery */}
                <div>
                  <Row gutter={[16, 16]} justify="center">
                    {heroImages.map((image, index) => (
                      <Col xs={24} sm={12} md={8} key={index}>
                        <div style={{ 
                          height: '350px', 
                          borderRadius: '20px', 
                          overflow: 'hidden',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover',
                              borderRadius: '20px'
                            }}
                            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Space>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Additional Program Content */}
      {selectedProgram === 'space-education' && (
        <section style={{ padding: '40px 0', textAlign: 'center' }}>
          <Title level={2} style={{ color: 'white' }}>Space Education Programs</Title>
          <Paragraph style={{ color: '#cccccc', fontSize: '18px' }}>
            Coming Soon - Comprehensive space education curriculum and resources
          </Paragraph>
        </section>
      )}
      
      {selectedProgram === 'astronomy-outreach' && (
        <section style={{ padding: '40px 0', textAlign: 'center' }}>
          <Title level={2} style={{ color: 'white' }}>Astronomy Outreach</Title>
          <Paragraph style={{ color: '#cccccc', fontSize: '18px' }}>
            Coming Soon - Public astronomy observation sessions and educational events
          </Paragraph>
        </section>
      )}
      
      {selectedProgram === 'student-programs' && (
        <section style={{ padding: '40px 0', textAlign: 'center' }}>
          <Title level={2} style={{ color: 'white' }}>Student Programs</Title>
          <Paragraph style={{ color: '#cccccc', fontSize: '18px' }}>
            Coming Soon - Student competitions, internships, and research opportunities
          </Paragraph>
        </section>
      )}
    </div>
  );
};

export default WorldSpaceWeek;
