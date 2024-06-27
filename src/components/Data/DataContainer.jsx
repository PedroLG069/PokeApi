import React from 'react';

const DataContainer = ({ selectedPokemon }) => {
  return (
    <div className="card" style={styles.container}>
      {selectedPokemon && (
        <div style={styles.content}>
          <div style={styles.imageContainer}>
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} style={styles.image} />
          </div>
          <p style={styles.id}>#{selectedPokemon.id}</p>
          <p style={styles.name}>{selectedPokemon.name}</p> {/* Agregado el nombre del Pokémon */}
          <div style={styles.typesContainer}>
            {selectedPokemon.types.map((type, index) => (
              <div key={index} style={styles.type}>{type.type.name}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: 'calc(50% - 1rem)',
    padding: '1rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    textAlign: 'center'
  },
  id: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#000'
  },
  name: {
    fontSize: '1.5rem', // Tamaño del nombre del Pokémon
    fontWeight: 'bold',
    color: '#a31e1e',
    marginBottom: '0.5rem' // Espacio inferior para separar del tipo
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '600px',
    objectFit: 'contain'
  },
  typesContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.5rem'
  },
  type: {
    backgroundColor: '#9b9b9b ',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    margin: '0 0.5rem',
    fontSize: '1.2rem',
    color: '#000',
    fontWeight: 'bold'
  }
};

export default DataContainer;
