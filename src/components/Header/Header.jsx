// En el componente Header.js

import React from 'react';

const Header = ({ title }) => {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#350',
    color: 'white',
    textAlign: 'center', // Alinea el texto horizontalmente en el centro
    padding: '10px',
  },
  title: {
    margin: 0,
  },
};

export default Header;
