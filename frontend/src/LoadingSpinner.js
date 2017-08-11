import React from 'react';
import PropTypes from 'prop-types';

import './LoadingSpinner.css';

const LoadingSpinner = (props) => {
  let classStatus = props.watsonResponded ? "spinner_container" : "spinner_container active";

  return (
    <div className="spinner_outer_container">
      <div className={classStatus}>
        <div className="spinner_blur"></div>

        <svg width="80px"  height="80px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <path fill="none" d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z" stroke="#56f0c7" strokeWidth="2" strokeDasharray="182.17813903808593 74.41078918457032">
            <animate attributeName="stroke-dashoffset" calcMode="linear" values="0;256.58892822265625" keyTimes="0;1" dur="1" begin="0s" repeatCount="indefinite"></animate>
          </path>
        </svg>
      </div>
    </div>
  )
}

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
}

LoadingSpinner.defaultProps = {
  loading: false,
}

export default LoadingSpinner;
