import React, { Suspense } from 'react';  
import { Layout, Row, Spin } from 'antd';
import StatsSection from './StatsSection';
import SpaceOutreach from './SpaceOutreach';
const SpaceEducation = React.lazy(() => import('./SpaceEducation'));
const CapacityBuilding = React.lazy(() => import('./CapacityBuilding'));
import '../../Styles/SpaceComponent.css';

const { Content } = Layout;

const SpaceComponent = () => {
  return (
    <Layout className="space-component-bg">
      <Row className="space-component-overlay" />
      <Content className="space-component-content">
        <StatsSection />
        <SpaceOutreach />
        <Suspense fallback={<Spin />}>
          <SpaceEducation />
        </Suspense>
        <Suspense fallback={<Spin />}>
          <CapacityBuilding />
        </Suspense>
      </Content>
    </Layout>
  );
};

export default React.memo(SpaceComponent);
