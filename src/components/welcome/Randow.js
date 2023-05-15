// criando função que gere uma cor aleatoria para o hellou word

import React, { useState, useEffect } from 'react';

function Randow() {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    color: color,
    fontSize: '24px'
  };

  return (
    <div style={styles}>
      Hello, World!
    </div>
  );
}

export default Randow



