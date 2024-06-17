import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faDumbbell, faBook, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define an array of objects containing the title and corresponding icon
  const headerItems = [
    { title: "Diet", icon: faUtensils },
    { title: "Workout", icon: faDumbbell },
    { title: "Recipes", icon: faBook },
    { title: "About", icon: faInfoCircle },
    { title: "Login/Signup", icon: faUser }
  ];

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLogo">
          <h1>Zeppcore Fitness</h1>
        </div>
        <div className={`headerMenu ${isOpen ? 'open' : ''}`}>
          <ul>
            {/* Map over headerItems array to render menu items dynamically */}
            {headerItems.map((item, index) => (
              <li className="headerListItem" key={index}>
                <FontAwesomeIcon icon={item.icon} className="headerIcon" />
                <span className="headerTitle">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="headerMenuToggle" onClick={toggleMenu}>
          <div className="toggleIcon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
