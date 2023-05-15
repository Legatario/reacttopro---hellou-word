//criando componente pelo metodo de funcção usando o props

import React from 'react';

function ForFunctionProps(props) {
  const { name } = props;
  const styles = {
    color: 'brown',
    fontSize: '32px'
  };

  return (
    <div style={styles}>
      Hello, {name}!
    </div>
  );
}

export default ForFunctionProps