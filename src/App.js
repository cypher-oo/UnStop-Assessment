import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import VerticalNavbar from './components/VerticalNavbar'; 
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
      <HeroSection/>
      
        <VerticalNavbar /> 
        {/* <main className="content">
        <Routes>
          <Route path="/" exact component={Dashboard} />
          <Route path="/assessment" exact component={Assessment} />
          <Route path="/assessment" exact component={Assessment} />
</Routes>
        </main> */}

        {/* <div className="content">
          <Header />
          <Routes>
            <Route path="/" exact component={HeroSection} />
           
          </Routes>
          <FeaturesSection />
        </div> */}
        
      </div>
     
        
    </Router>
  );
}

export default App;
