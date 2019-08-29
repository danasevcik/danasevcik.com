import React, { useEffect } from 'react';

function MainPage() {

  useEffect(() => {
    document.title = 'Dana Sevcik';
  });

  return (
    <div class='rest-of-page'>I am the main page</div>
  )

}

export default MainPage;
