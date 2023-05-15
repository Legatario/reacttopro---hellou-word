//criando componete retornando um p em vez de div

import React from 'react';

function InLine() {
  const styles = {
    color: 'teal',
    fontSize: '28px'
  };

  return (
    <p style={styles}>
      Hello,
      {' '}
      World!
    </p>
  );
}

export default InLine