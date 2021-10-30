/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/Hamburger.css';

const Hamburger = ({ buttonClassName, handleModal }) => (
  <div id="wrapper" onClick={() => handleModal()} onKeyPress={() => handleModal()} role="button" tabIndex={0}>
    <div className={buttonClassName}>
      <span className="line top" />
      <span className="line bottom" />
    </div>
  </div>
);

export default Hamburger;
