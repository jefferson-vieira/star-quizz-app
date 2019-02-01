import React from 'react';

const Progress = ({ valuenow }) => (
  <div className="progress">
    <div
      className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
      role="progressbar"
      aria-valuenow={valuenow}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ width: `${valuenow}%` }}
    />
  </div>
);

export default Progress;
