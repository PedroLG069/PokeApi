import React from 'react';

const Footer = ({ text }) => {
  return (
    <div style={styles.div}>
      <p style={styles.text}>{text}</p>
    </div>
  );
}

const styles = {
  div: {
    backgroundColor: '#488',
    color: '#a31e1e',
    padding: '1rem',
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    bottom: 0,
    left: 0,
  },
  text: {
    margin: 0, // Elimina el margen predeterminado del párrafo
  },
};

export default Footer;
