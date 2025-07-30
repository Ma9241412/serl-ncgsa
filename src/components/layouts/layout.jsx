import React from 'react';
import { Layout as AntLayout, Grid } from 'antd';
import Header from './header';
import Footer from './footer';

const { Content } = AntLayout;
const { useBreakpoint } = Grid;

const Layout = ({ children, activeNavItem = 'HOME' }) => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <AntLayout style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000' 
    }}>
      <Header activeNavItem={activeNavItem} />
      <Content style={{ 
        minHeight: '100vh',
        padding: 0
      }}>
        {children}
      </Content>
      <Footer />
    </AntLayout>
  );
};

export default Layout;