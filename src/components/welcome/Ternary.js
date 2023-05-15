//criando função ternaria para o hello world

import React from 'react';

function Ternary() {
  const name = 'World';
  const styles = {
    color: 'yellow',
    fontSize: '34px'
  };

  return (
    <div style={styles}>
      Hello, {name}!
    </div>
  );
}

export default Ternary