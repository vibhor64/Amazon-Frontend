import './App.css';
import Github from './Images/github.png';
import Amazon from './Images/amazon.png';
import Flipkart from './Images/flipkart.png';
import { LinearGradient } from 'react-text-gradients'
import { marked } from 'marked';
import React, { useState } from 'react';


// const marked = require('marked');


// console.log(htmlText);

function App() {

  const [markdownText, setMarkdownText] = useState(
    `
  **Summary of Amazon Reviews:**
  
  - Overall positive reviews with an average rating of 3.9 out of 5.
  - Praised for its sturdiness, durability, and dishwasher safety.
  - Some reviewers found it comfortable to use and effective in making rotis.
  - A few complaints about the thinness and lack of comfort in handling the rolling pin.
  - Concerns raised about potential injuries if accidentally dropped on the feet.
  - Mixed opinions on the weight, with some finding it too heavy and others appreciating its stability.
  
  **Pros:**
  
  - Sturdy and durable stainless steel construction.
  - Dishwasher safe for easy cleaning.
  - Some reviewers found it comfortable to use and effective in making rotis.
  - Some reviewers found the weight to be good or appreciated its stability.
  
  **Cons:**
  
  - Some reviewers found it too thin and uncomfortable to handle.
  - Concerns raised about potential injuries if accidentally dropped on the feet.
  - Some reviewers found the weight to be too heavy.
  
  **Score:**
  
  7 out of 10.
  
  While the product has received mixed reviews, it seems to be a durable and functional rolling pin for making rotis. The main concerns are related to comfort and potential injuries, which may vary from person to person. Ultimately, the decision to purchase should be based on individual preferences and needs.
  `
  );

  const htmlText = marked(markdownText);
  const handleButtonA = () => {
    // console.log("clicked");
    // add class 'common'
    document.querySelector('.Amazon').classList.add('common');
    // remove class 'common'
    document.querySelector('.Flipkart').classList.remove('common');
  }

  const handleButtonF = () => {
    // console.log("clicked");
    // add class 'common'
    document.querySelector('.Flipkart').classList.add('common');
    // remove class 'common'
    document.querySelector('.Amazon').classList.remove('common');
  }



  return (
    <div>
      <hr class="gradient-line"></hr>
      <div className='Header'>
        <p className='logs'> Target Locked! 🎯</p>
        <img style={{ right: '8rem' }} className='logosg' src={Github} alt="GitHub Logo" />
        <img style={{  right: '4.5rem' }} className='logosg' src={Amazon} alt="Amazon Logo" />
        <img style={{ right: '1rem' }} className='logosg' src={Flipkart} alt="Flipkart Logo" />
      </div>
      <div className="CenteredTitle">
        <h1 className='Title'>
          <LinearGradient gradient={['to bottom', '#ffffff ,#000000']}>
            {/* <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}> */}
            Product Recommendation Engine
          </LinearGradient>
        </h1>
        <div className='sher'>
          <div className='share' style={{display: 'flex', flexDirection: 'column', position: 'absolute'}}>
            <button onClick={handleButtonA} className='common Amazon'>Amazon</button>
            <button onClick={handleButtonF} className='Flipkart'>Flipkart</button>

          </div>
          <input placeholder='Enter Link' className='inputText'>

          </input>
        </div>
        <button class="button-85" role="button">Go</button>
        <div className='mainText'>
          <div>
            <div dangerouslySetInnerHTML={{ __html: htmlText }} />

          </div>
        </div>
      </div>

        <div className='footer' style={{marginBottom: '8rem'}}>
          </div>
    </div>
  );
}

export default App;
