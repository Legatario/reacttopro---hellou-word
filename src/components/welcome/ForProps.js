// Usando um componente de classe com props:

import React from 'react';

class ForProps extends React.Component {
  render() {
    const { name } = this.props;
    const styles = {
      color: 'pink',
      fontSize: '30px'
    };

    return (
      <div style={styles}>
        Hello, {name}!
      </div>
    );
  }
}

export default ForProps