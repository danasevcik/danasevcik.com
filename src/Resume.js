import React, { useEffect } from 'react';

function Resume() {

  useEffect(() => {
    document.title = 'Resume - Dana Sevcik';
  });

  return (
    <div>I am the Resume page</div>
  )

}

export default Resume;
