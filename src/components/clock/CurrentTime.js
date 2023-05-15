//criando componente que gere a data e hora atual

import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: '10px 0'
  };

  

  return (
    <div>
        <div style={styles}>
            Data - {currentDate}   
        </div>
        <div style={styles}>
            Hora Atual - {currentTime}
        </div>
    </div>
  );

}

export default CurrentTime