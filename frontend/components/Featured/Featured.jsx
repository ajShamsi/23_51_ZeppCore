import React from 'react';
import './Featured.css';
import image1 from '../../assets/workout1.png';
import image2 from '../../assets/workout2.png';
import image3 from '../../assets/workout3.png';

const Featured = () => {
  return (
    <div className="featured">
      <h2 className="featuredTitle">Featured Workouts</h2>
      <div className="featuredContainer">
        <div className="featuredItem">
          <img src={image1} alt="Workout 1" className="featuredImage" />
          <div className="featuredInfo">
            <h3 className="featuredName">Cardio</h3>
            <p className="featuredDescription">Improve your cardiovascular health with our cardio workouts.</p>
          </div>
        </div>
        <div className="featuredItem">
          <img src={image2} alt="Workout 2" className="featuredImage" />
          <div className="featuredInfo">
            <h3 className="featuredName">Strength Training</h3>
            <p className="featuredDescription">Build strength and muscle mass with our strength training routines.</p>
          </div>
        </div>
        <div className="featuredItem">
          <img src={image3} alt="Workout 3" className="featuredImage" />
          <div className="featuredInfo">
            <h3 className="featuredName">Yoga</h3>
            <p className="featuredDescription">Find balance, flexibility, and inner peace through our yoga sessions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
