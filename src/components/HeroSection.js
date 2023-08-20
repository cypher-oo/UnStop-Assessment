import React from 'react';
import './HeroSection.css'; // You can define your text styles in a separate CSS file
import total from '../style/total.png';
import candidate from '../style/candidate.png';
import source from '../style/source.png';
import world from '../style/world.png';
import FeaturesSection from './FeaturesSection';


function HeroSection() {
  const imageStyle = {
   
  };

  return (
    <div className='assessment-container'>
      <h5 className='assessment'>Assessment Overview</h5>
      <div className="row">

     <div className="card" style={{width: "14rem", marginLeft:'20px'}}>
  <div className="card-body">
  <h4 className="card-title">Total Assessment</h4>
   <img className='total'src={total} alt='vector' />
 
            <div className='text-tag'>
                <h5>35 </h5>
                </div>
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <h4 className="card-title">Candidates</h4>
   
  <img src={candidate} alt='vector'style={imageStyle} />
  <div className='text-tag'>
  
          <h6 className="numbers">11,143<p style={{fontSize:'17px'}}>Total candidate</p></h6>
           <span className="green">+89</span>
     
                
                </div>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <h4 className="card-title">Candidates Source</h4>
   
  <img src={world} alt='vector'style={imageStyle} />
  <div className='text-tag'>
                <h5>11,145  <br/><p style={{fontSize:'17px'}}>Total candidate</p></h5>
                <span className='green'>+89</span>
                </div>
  </div>
</div>

<div className="card" style={{width: "14rem"}}>
  <div className="card-body">
  <h4 className="card-title">Total Purpose</h4>
   
  <img src={source} alt='vector'style={imageStyle} />
    
   
  </div>
</div>
</div>
        <FeaturesSection/>
         </div>
         
      
  );
}

export default HeroSection;
