import React from "react";
import { Link } from "react-router-dom";
import "./VerticalNavbar.css";
import dashboard from "../style/dashboard.png";
import assessment from "../style/assessment.png";
import library from "../style/library.png";
import roundStatus from "../style/round.png";

function VerticalNavbar() {
  const imageStyle = {
    width: "35px", // Set the width of the image
    height: "35px", // Set the height of the image
    marginLeft: "60px", // Add margin to the right for spacing
    // Add more styles as needed
  };
  return (
    <nav className="vertical-navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <img src={dashboard} alt="Dashboard" style={imageStyle} />

          <Link to="/" className="nav-link">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <img src={assessment} alt="assessment" style={imageStyle} />
          <Link to="/herosection" className="nav-link">
            Assessment
          </Link>
        </li>
        <li className="nav-item">
          <img src={library} alt="library" style={imageStyle} />
          <Link to="/my-library" className="nav-link">
            My Library
          </Link>

          <div className="dots-line"></div>
        </li>
        <div
          className="container"
          style={{ alignItems: "center"}}
        >
          <button className="admin-button">Admin</button>
          <div style={{justifyContent: "space-around" }}>
            <li className="nav-item">
              <img src={roundStatus} alt="round" style={imageStyle} />
              <Link to="/round status" className="nav-link">
                Round Status
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default VerticalNavbar;
