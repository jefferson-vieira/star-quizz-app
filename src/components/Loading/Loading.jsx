import React from 'react';

const Loading = ({ show }) =>
  show && (
    <>
      <div className="loading" />
      <span className="sr-only">(loading)</span>
    </>
  );

export default Loading;
