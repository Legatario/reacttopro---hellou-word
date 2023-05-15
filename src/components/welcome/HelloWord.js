//criando o titulo da pagina de modo que cada letra do text aparece individualmente 

import React, { useState, useEffect } from 'react';

function Hello() {
    const [displayText, setDisplayText] = useState('');
    const text = 'Hello, World...';
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText((prevDisplayText) => prevDisplayText + text[index]);
        index++;
  
        if (index === text.length-1) {
          clearInterval(interval);
        }
      }, 500);
  
      setDisplayText(text[0]);
  
      return () => clearInterval(interval);
    }, []);

  return (
      <h1>
      10 Formas diferentes de escrever {displayText}
    </h1>
  );
}

export default Hello