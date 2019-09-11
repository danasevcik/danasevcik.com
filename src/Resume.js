import React, { useEffect } from 'react';

function Resume() {

  useEffect(() => {
    document.title = 'Resume - Dana Sevcik';
  });

  return (
    <div id='resume-page'>I am the Resume page</div>
  )

}

export default Resume;
