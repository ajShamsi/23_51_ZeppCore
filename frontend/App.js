import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
