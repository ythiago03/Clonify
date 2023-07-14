import React from 'react';
import { SiNike, SiPuma, SiReebok } from 'react-icons/si';
import { CgAdidas } from 'react-icons/cg';

import './sponsors.css';

const Sponsors = () => {
  return (
    <div className="wrapper">
      <CgAdidas size={100} color="lightgray" />
      <SiNike size={100} color="lightgray" />
      <SiPuma size={100} color="lightgray" />
      <SiReebok size={100} color="lightgray" />
    </div>
  );
};

export default Sponsors;
