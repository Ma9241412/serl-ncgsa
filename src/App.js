import React from 'react';
import Layout from './components/layouts/layout';

// Temporary Home Page Content
const HomeContent = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      position: 'relative'
    }}>
      {/* Starry Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.4,
        backgroundImage: `radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                         radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
                         radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                         radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
                         radial-gradient(2px 2px at 160px 30px, #ddd, transparent)`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 100px'
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '1rem'
      }}>
        <div style={{ 
          textAlign: 'center', 
          color: 'white', 
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{ 
            fontSize: window.innerWidth > 768 ? '7rem' : '4rem',
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#F97316'
          }}>
            SPACE
          </h1>
          <div style={{ 
            fontSize: window.innerWidth > 768 ? '2rem' : '1.2rem',
            marginBottom: '0.5rem',
            letterSpacing: '2px'
          }}>
            <span style={{ color: '#60A5FA' }}>EDUCATION</span>
            <span style={{ color: 'white' }}> | </span>
            <span style={{ color: 'white' }}>AWARENESS</span>
            <span style={{ color: 'white' }}> | </span>
            <span style={{ color: '#60A5FA' }}>OUTREACH</span>
          </div>
          <p style={{ 
            color: '#D1D5DB', 
            fontSize: '1rem', 
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Inspiring Space Innovation through STEM Learning
          </p>
          <button style={{
            backgroundColor: '#F97316',
            color: 'white',
            padding: '16px 40px',
            border: 'none',
            borderRadius: '2px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Layout activeNavItem="HOME">
      <HomeContent />
    </Layout>
  );
};

export default App;