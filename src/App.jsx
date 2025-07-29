import React from 'react';
import Layout from './components/Layout/Layout';

// Temporary Home Page Content
const HomeContent = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Starry Background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(2px 2px at 20px 30px, #eee, transparent),
                           radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
                           radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                           radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
                           radial-gradient(2px 2px at 160px 30px, #ddd, transparent)`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}
      />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4">
            <span className="text-orange-500">SPACE</span>
          </h1>
          <div className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-2 tracking-wider">
            <span className="text-blue-400">EDUCATION</span> | 
            <span className="text-white"> AWARENESS</span> | 
            <span className="text-blue-400"> OUTREACH</span>
          </div>
          <p className="text-gray-300 text-sm lg:text-base mb-8 max-w-2xl mx-auto">
            Inspiring Space Innovation through STEM Learning
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 lg:px-10 lg:py-4 rounded-sm text-sm lg:text-base font-bold transition-all duration-300 transform hover:scale-105">
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