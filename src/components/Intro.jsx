

import { useEffect } from 'react';


const Intro = ({ onIntroComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onIntroComplete();
    }, 3000); // Change the duration as needed
    return () => clearTimeout(timer);
  }, [onIntroComplete]);

  return (
    <div className="flex items-center justify-center h-screen  text-white fade-in-out">
      <div className="bg-opacity-100 backdrop-filter backdrop-blur-sm p-10 rounded-xl text-center">
        <h1 className="text-5xl">Welcome to My Page</h1>
      </div>
    </div>
  );
};

export default Intro;




