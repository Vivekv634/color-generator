import { useState } from 'react';
import './App.css';

function App() {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);
  const headingColor = red <= 100 && green <= 100 && blue <= 100 ? 'white' : "black";
  const color = `rgb(${red}, ${green}, ${blue})`;
  return (
    <div className='app' style={{ backgroundColor: color, color: headingColor }}>
      <h2>Color Generator</h2>
      <div className="label">rgb({red}, {green}, {blue})</div>

      <label htmlFor="red">Red:</label>
      <div>
        <input type="number" id="red" value={red} onChange={e => setRed(e.target.value)} />
        <input type="range" min='0' max='255' value={red} onChange={e => setRed(e.target.value)} />
      </div>
      <label htmlFor="green">Green:</label>
      <div>
        <input type="number" id="green" value={green} onChange={e => setGreen(e.target.value)} />
        <input type="range" min='0' max='255' value={green} onChange={e => setGreen(e.target.value)} />
      </div>
      <label htmlFor="blue">Blue:</label>
      <div>
        <input type="number" id="blue" value={blue} onChange={e => setBlue(e.target.value)} />
        <input type="range" min='0' max='255' value={blue} onChange={e => setBlue(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
