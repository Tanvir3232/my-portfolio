import { useEffect, useState } from 'react';
import bannerImg from '../../assets/images/profile.png';


const Banner = () => {
  const [typedText, setTypedText] = useState('');
  const targetText = `, a React Developer`;
  const typingSpeed = 100; 

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      currentText += targetText[currentIndex];
      setTypedText(currentText);
      currentIndex++;

      if (currentIndex === targetText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);
  const downloadResume = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/file/d/1rVjd7mvCdIc2e64A--KvlfzbDZv_rHNN/view?usp=sharing'; // Replace with the actual URL of your resume
    downloadLink.download = 'Tanvir-Ahmad-Resume.pdf';
    downloadLink.target = '_blank';
    downloadLink.click();
  };

  return (
    <div className="flex md:flex-row flex-col md:h-[70vh] bg-[#00091A] text-white items-center justify-between px-5 md:px-16">
      <div>
      <h1 className="md:text-5xl text-3xl font-bold md:w-2/3 my-5">Hello, I am <span className='text-green-400'>Tanvir Ahmad</span> {typedText}</h1>
        <p className="md:w-2/3">
          Creating Seamless, Fast, and Immersive User Experiences: Transforming Ideas into Captivating Realities
        </p>
        <button className="btn btn-warning text-lg btn-xl my-5 btn-outline" onClick={downloadResume}>
          Download Resume
        </button>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
