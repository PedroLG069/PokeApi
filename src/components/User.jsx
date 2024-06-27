import React from 'react';

const User = ({ index, pokemon, handlePokemonClick, styles }) => {
  return (
    <div key={index} style={styles.card} onClick={() => handlePokemonClick(pokemon.url)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
        alt={pokemon.name}
        style={styles.image}
      />
      <p style={styles.name}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
    </div>
  );
};

export default User;
