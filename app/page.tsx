"use client";

import { useState } from 'react';

const Home = () => {
  const [step, setStep] = useState(0);

  const names = ['#1 Andrew Tate', '#2 Tristan Tate', '#3 Hasbulla','#4 Takamura','#5 Kira','#6 Chad'];
  const pictures = ['andrew.jpg','tristan.jpg', 'hasbulla.jpg','takamura.jpg','kira.jpg','chad.jpg'];

  const currentName = names[step];
  const currentPicture = pictures[step];

  const handleNext = () => {
    setStep((prevStep) => (prevStep < names.length - 1 ? prevStep + 1 : prevStep));
  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  return (
   <body>
      
   
    <div >
      <h1>Top G's</h1>
      <hr />
      <h2>{currentName}</h2>
      

      
      <button className="button" onClick={handleBack}><span>Back </span></button>
      <img
        src={currentPicture}
        alt={currentName}
        style={{ width: '400px', height: '400px' }}
      />
            <button className="button" onClick={handleNext}><span>Next</span></button>
      
      <h4> "This website is for entertainment purpose only"


      </h4>
      
    </div>
    </body>
  );
};

export default Home;
