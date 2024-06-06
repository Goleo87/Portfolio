

import { useEffect } from 'react';

//function to display the intro screen
const Intro = ({ onIntroComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onIntroComplete();
    }, 3000); // duration of the intro
    return () => clearTimeout(timer);
  }, [onIntroComplete]);

  return (
    <div className="flex items-center justify-center h-screen  text-white fade-in-out">
      <div className="bg-opacity-100 backdrop-filter backdrop-blur-sm p-10 rounded-xl text-center">
        <h1 className="text-7xl font-serif">Stefano Borrelli</h1>
      </div>
    </div>
  );
};

export default Intro;




