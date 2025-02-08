import React, { useState } from 'react';

function ColorBox({ initialColor, colorOptions }) {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    setColor(colorOptions[randomIndex]);
  };

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    margin: '20px auto',
  };

  return (
    <div>
      <div style={boxStyle}></div>
      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
}

export default ColorBox;
