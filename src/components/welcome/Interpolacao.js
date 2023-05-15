// criando componente mesclando jsx com js

import React from 'react';

function Interpolacao() {
  const name = 'World';
  const styles = {
    color: 'navy',
    fontSize: '34px'
  };

  return (
    <div style={styles}>
      Hello, {name}!
    </div>
  );
}

export default Interpolacao