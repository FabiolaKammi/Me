import React from 'react';
import translation from '../utils/translation.jpg'
import coding from '../utils/coding.jpg';
import modeling from '../utils/modeling.jpg';
import writting from '../utils/writting.jpg';
import badmiton from '../utils/badmiton.jpg';
const Hobby = () => {

  const image = [coding, writting, modeling, badmiton, translation];
  

  //const titles = gsap.utils.toArray("li");
  //const tl = gsap.timeline();
  //const splitTitle = new splitTextJS(title);

 





  
  return (
    <div className='hobby-container'>
      <h3>Passion is such a powerful force!<br /> 
      It drives us to pursue our dreams, overcome challenges, and find joy in what we do. <br /> 
      Whether it’s a hobby, a career, or a cause you care deeply about, 
      passion can bring a sense of purpose and fulfillment to one's life.
         </h3>


         <div className='intro-div'>Let's explore my areas of interest</div>
      <div className='hobby-wrapper'>
      <div className='center slider'>
      I am passionate about
          <div className='slide'>
          
            <div><div>Coding</div></div>
            <div><div>Writing</div></div>
            <div><div>Modeling</div></div>
            <div><div>Badmiton</div></div>
            <div><div>Translation</div></div>
     
          </div>
          And Myself
      </div>
      </div>
      <div className='img-wrapper'>
        <img src={image[0]} alt='coding-img' width={200} height={200} />
        <img src={image[1]} alt='writing-img' width={200} height={200}  />
        <img src={image[2]} alt='modeling-img' width={200} height={200}  />
        <img src={image[3]} alt='badmiton-img' width={200}  height={200} />
        <img src={image[4]} alt='translation-img' width={200} height={200}   />
      </div>

      <div className='passion-wrapper'>

          <div >
            <span>Coding</span>
            <p>It’s amazing how coding allows me to develop my creativity, 
            Problem-Solving skills, favorise my countinuous learning ability and give me the power to impact.
              coding is a skill that can open up endless possibilities.</p>
          </div>
          <div>
            <span>Writing</span>
            <p>Writing is a wonderful way I use to express my thoughts and creativity.<br /> 
              It is for me a therapeutic and a powerful tool to store stories and ideas
               that I could share knowledge with others in the future.
               </p>
          </div>
          <div>
            <span>Modeling</span>
            <p>Through modeling, I could become a living canvas, 
            It’s a great way to explore fashion, photography, and self-expression,
               capturing the essence of style and grace.</p>
          </div>
          <div>
          <span>Badmiton</span>
          <p>This sport is fantastic for staying active and healthy. <br />
            It’s fast-paced, requires quick reflexes, and is a lot of fun
             whether it's playing competitively or just for leisure.</p>
          </div>
          <div>
          <span>Translation</span>
          <p> Translation is a valuable skill that bridges cultures and languages.<br />
             It allows me to connect people and ideas across different linguistic backgrounds, <br />
            promoting understanding and communication.</p>
          </div>
      </div>
    </div>
  )
}

export default Hobby
