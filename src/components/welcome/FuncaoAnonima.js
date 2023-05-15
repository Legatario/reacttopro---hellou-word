// usaando uma função anonima para criar estilos ao hello word

import React from 'react';

const funcaoAnonima = () => {
  const styles = {
    color: 'green',
    fontSize: '20px',
    margin: '10px'
  };

  return (
    <div style={styles}>
      Hello, World!
    </div>
  );
};

export default funcaoAnonima