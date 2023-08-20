import React from "react";
import "./FeatureSection.css";
import vector from "../style/Vector.png";
import box from "../style/box.png";
import dot from "../style/dot.png";
import share from "../style/share.png";
import calender from "../style/calender.png";
const FeaturesSection = () => {
  const imageStyle = {};

  return (
    <div className="feature-container">
      <h5 className="assessment"> My Assessment </h5>

      <div className="row" style={{ display: "flex" }}>
        <div
          className="card card-with-bg text-center"
          style={{ width: "25rem", marginLeft: "20px", marginTop: "20px" }}
        >
          <div className="card-body">
            <button className="button-add">
              <img src={vector} alt="vector" style={imageStyle} />
            </button>
            <h4 className="card-title">New Assessment</h4>
            <p className="card-text" style={{ fontSize: "19px" }}>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{ width: "27rem", marginLeft: "20px", marginTop: "20px" }}
        >
          <div className="card-body">
            <img className="box-left" src={box} alt="vector" />
            <img className="dot-right" src={dot} alt="vector" />
            <h1 className="card-title">Math Assessment</h1>
            <div style={{display:"flex"}}>
              <h6 className="card-text">Job</h6>

              <div style={{}}>
              <img className="calender" src={calender} alt="calender" />
              <p className="tag">20 Apr 2023</p>
              </div>
            </div>
            <div className="divider-horizontal"></div>
          </div>
          <div className="footer">
            <h6 className="duration">
              {" "}
              00 <br />
              <p style={{ fontSize: "17px" }}>Duration</p>{" "}
            </h6>
            <h6 className="questions">
              {" "}
              00 <br />
              <p style={{ fontSize: "17px" }}>Questions</p>{" "}
            </h6>
            <button className="button">
              <img className="share" src={share} alt="share" />
              Share
            </button>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "27rem", marginLeft: "20px", marginTop: "20px" }}
        >
          <div className="card-body">
            <img className="box-left" src={box} alt="vector" />
            <img className="dot-right" src={dot} alt="vector" />
            <h1 className="card-title">Math Assessment</h1>
            <h6 className="card-text">Job</h6>

            <img className="calender" src={calender} alt="calender" />
            <p className="tag">20 Apr 2023</p>
            <div className="divider-horizontal"></div>
          </div>
          <div className="footer">
            <h6 className="duration">
              {" "}
              00 <br />
              <p style={{ fontSize: "17px" }}>Duration</p>{" "}
            </h6>
            <h6 className="questions">
              {" "}
              00 <br />
              <p style={{ fontSize: "17px" }}>Questions</p>{" "}
            </h6>
            <button className="button">
              <img className="share" src={share} alt="share" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
