import React,{useState} from 'react'
import personalimg from "../utils/personalimg.jpg"
import CV from "../utils/SWE.pdf" 

const Body = () => {
  const info = {
    title: "Software Engineer",
    summary: `Multilingual React Front End developer with diverse technical and problem-solving experiences seeking
    challenging opportunities. Proficient in programming using JavaScript, React.js,
    HTML, Css and libraries such as bootstrap, styled-components and more. Eager to develop my skills
    furthermore and gain diverse experiences.`,
    resume: CV,
    image: personalimg
  }

  const text = document.getElementById('animatedText');
  let hue = 0;

  const animateText = () => {
    hue = (hue + 2) % 360;
    text.style.color = `hsl(${hue}, 100%, 50%)`;
    requestAnimationFrame(animateText);
}
const [isHovered, setIsHovered] = useState(false);

const handleMouseOver = () => {
    setIsHovered(true);
};
const handleMouseOut = () => {
  setIsHovered(true);
};

const paragraphStyle = {
  borderRight: '2px solid black',
  display: 'inline-block',
  overflow: 'hidden',
  animation: isHovered ? 'typing 20s steps(10, start), blink-caret 2s infinite' : 
  'typing 20s steps(10, end), blink-caret 2s infinite'
};

  return (
    <div className='body-wrapper'>
      <div className='text-test'>
    <h1 data-text = "About Me">About Me</h1>
    
    <span >About Me</span>
    </div>
    
    <div className='body-container'>
      <img src={info.image} alt='personal' style={{height:'500px', width:'500px'}}/>
    
    
      <h2 onMouseOver={animateText} id="animatedText">{info.title}</h2>
      <p
      style={paragraphStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >{info.summary}</p>
    
    
    </div>
    </div>
  )
}

export default Body;
