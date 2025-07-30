import React from 'react';
import { Layout as AntLayout, Grid } from 'antd';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const { Content } = AntLayout;
const { useBreakpoint } = Grid;

const Layout = ({ children }) => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const location = useLocation();
  
  // Determine active nav item based on current route
  const getActiveNavItem = () => {
    const path = location.pathname;
    if (path === '/') return 'HOME';
    if (path.startsWith('/about')) return 'ABOUT';
    if (path.startsWith('/research')) return 'RESEARCH';
    if (path.startsWith('/education')) return 'EDUCATION';
    if (path.startsWith('/outreach')) return 'OUTREACH';
    if (path.startsWith('/contact')) return 'CONTACT';
    return 'HOME';
  };
  
  const activeNavItem = getActiveNavItem();

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