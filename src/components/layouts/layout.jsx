import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, activeNavItem = 'HOME' }) => {
  return (
    <div className="min-h-screen bg-black">
      <Header activeNavItem={activeNavItem} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;