import * as React from 'react';
import AppNavbar from './AppNavbar';

function AppHeader() {
  return (
    <>
      <header>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AE7QT5anSHY?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </header>
      <AppNavbar />
    </>
  );
}

export default AppHeader;
