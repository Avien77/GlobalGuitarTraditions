import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='header'>
    <h1 className='title'> Japanese City Pop</h1> <img src='vinyl.gif' className='vinyl'></img>
    </div>
    <App />
    <h1 className='beegHeader'>The Sound of City Pop</h1>
    <h2 className='paragraph'>City Pop is a genre defined by its fusion of Western influences like funk and soft rock, with an upbeat and nostalgic vibe. 
      Originating from the 1970s-1980s, the genre encapsulated Japan's economic state. 
      One of the leading figures in the genre is "King of City Pop" <a href="https://en.wikipedia.org/wiki/Tatsuro_Yamashita">Tatsuro Yamashita</a>.
      Yamashita created famous City Pop songs such as <a href='https://www.youtube.com/watch?v=WpQCCB0Lpik'>Plastic Love </a> 
      and <a href='https://www.youtube.com/watch?v=eenS6C_obbk'>Ride on Time</a>
      
       </h2>
    <h1 className='beegHeader'>City Pop Musical Elements</h1>
    <h2 className='paragraph'> 1. 80's style synth. Synths were a new technology that many musicians were excited to implement in their songs. It also contributes to the nostalgic vibe that's classic of City Pop.
       </h2>
    <h2 className='paragraph'> 2. Clean and natural instrumentation. In order to emphasize the human side of love and happiness, the instrumentation was kept natural and flexible. Combine this with the crisp and clean percussion and basslines and you get City Pop.  
       </h2>
       <h2 className='paragraph'> 3. Lyrics about love. In accordance with the upbeat tone of City Pop, the lyrics tend to reminesce about relationships. Some of the most popular City Pop songs such as Stay with Me and Plastic Love embody this idea.
       </h2>
       <h2 className='beegHeader2'> 4. <a href='https://www.youtube.com/watch?v=CnhCPjRIOM8'>THE MOST IMPORTANT ELEMENT OF CITY POP</a>. I don't even have words for this element. It is simply too beautiful.
       </h2>
  </React.StrictMode>
  
);


