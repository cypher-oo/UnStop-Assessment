import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css'; // Make sure to create this CSS file
// import { Link } from 'react-router-dom';

function Header({ title, dueDate, description }) {
  return (
    <div className="assignment">
      <h4 className="assessment">Assessment{title}</h4>
      <h5 className="my-assessment">My Assessments {dueDate}</h5> 
      </div>
  );
};

//    Header.propTypes = {
//         title: PropTypes.string.isRequired,
//         dueDate: PropTypes.string.isRequired,
       
    
// }



export default Header;
