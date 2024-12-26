import { useState } from 'react';
import './App.css';

function App() {
  // Array of predefined colors
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFD700', '#8A2BE2', '#FF6347', '#20B2AA'];

  // State to keep track of the current background color
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  // Function to change the background color
  const changeBackgroundColor = () => {
    // Randomly select a color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
      <div className="container">
        <h1>Background Color Changer</h1>
        <button onClick={changeBackgroundColor} className="color-btn">
          Change Background Color
        </button>
      </div>
    </div>
  );
}

export default App;

