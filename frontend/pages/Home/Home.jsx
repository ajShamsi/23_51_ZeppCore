//src/pages/Home

import React from 'react';
import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Featured />
        {/* Other content */}
      </div>
    </div>
  );
};

export default Home;
