import React from "react";
import "./HeroSection.css"; // You can define your text styles in a separate CSS file
import total from "../style/total.png";
import candidate from "../style/candidate.png";
import source from "../style/source.png";
import world from "../style/world.png";
import FeaturesSection from "./FeaturesSection";

function HeroSection() {
  const imageStyle = {};

  return (
    <div className="assessment-container">
      <h5 className="assessment">Assessment Overview</h5>
      <div className="row" style={{height:'170px'}}>
        <div className="card" style={{ width: "17rem", marginLeft: "20px" }}>
          <div className="card-body">
            <h4 className="card-title">Total Assessment</h4>
            <div style={{ display: "flex" }}>
              <img className="total" src={total} alt="vector" />

              <div className="text-tag">
                <h5>35 </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h4 className="card-title">Candidates</h4>
            <div style={{ display: "flex" }}>
              <img
                className="candidate"
                src={candidate}
                alt="vector"
                style={imageStyle}
              />
              <div
                className="text-tag"
                style={{
                  display: "flex",
                  borderRight: "1px dotted",
                  height: "50px",
                  flexDirection: "column",
                  marginRight: "90px",
                }}
              >
                <div>
                <div style={{ display: "flex" }}>
                  <h6 className="numbers">11,143</h6>
                  <p
                    className="green"
                    style={{ fontSize: "17px", marginRight: "100px" }}
                  >
                    +89
                  </p>
                </div>
                  
                <p style={{ fontSize: "17px", marginTop: "-20px" }}>
                  Total candidate
                </p>
               
             
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "25rem" }}>
          <div className="card-body">
            <h4 className="card-title">Candidates Source</h4>
            <div style={{ display: "flex" }}>
              <img
                className="world"
                src={world}
                alt="vector"
                style={imageStyle}
              />
              <div
                className="text-tag"
                style={{
                  display: "flex",
                  borderRight: "1px dotted",
                  height: "50px",
                  flexDirection: "column",
                  marginBottom: "10px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <h6 className="numbers">11,143</h6>
                  <p
                    className="green"
                    style={{ fontSize: "17px", marginRight: "100px" }}
                  >
                    +89
                  </p>
                </div>

                <p style={{ fontSize: "17px", marginTop: "-20px" }}>
                  Total candidate
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ width: "15rem" }}>
          <div className="card-body">
            <h4 className="card-title">Total Purpose</h4>
            <div style={{ display: "flex" }}>
              <img
                className="link"
                src={source}
                alt="vector"
                style={{ padding:'15px'}}
              />

              <div className="text-tag">
                <h5>11 </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
}

export default HeroSection;
