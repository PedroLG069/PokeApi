import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './CardContainer.css'; // Archivo CSS para estilos

const CardContainer = ({ setSelectedPokemon }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        // Si offset es 0, seteamos pokemonData con los nuevos datos,
        // de lo contrario, concatenamos los nuevos datos con los existentes.
        setPokemonData(prevData => offset === 0 ? response.data.results : [...prevData, ...response.data.results]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [offset]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
    const marginOfError = 5; // Margen de error para determinar si el usuario ha llegado al final
  
    if (scrollHeight - scrollTop <= clientHeight + marginOfError && !loading) {
      setOffset(prevOffset => prevOffset + 20);
    }
  };
  

  useEffect(() => {
    containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePokemonClick = async (pokemonUrl) => {
    try {
      const response = await axios.get(pokemonUrl);
      setSelectedPokemon(response.data);
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  };

  return (
    <div className="container" ref={containerRef}>
      <h2 className="title"></h2>
      <div className="cardContainer">
        {pokemonData.map((pokemon, index) => {
          const pokemonId = parseInt(pokemon.url.split('/').slice(-2)[0]);
          return (
            <div key={pokemonId} className="card" onClick={() => handlePokemonClick(pokemon.url)}>
              <div className="cardTopRight">#<span className="number">{pokemonId}</span></div>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name} className="image" />
              <p className="name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            </div>
          );
        })}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default CardContainer;
