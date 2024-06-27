import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardContainer from './components/Card/CardContainer';
import DataContainer from './components/Data/DataContainer';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <>
      <div style={styles.container}>
        <Header title="" />
        <br/>
        <div style={styles.content}>
          <CardContainer setSelectedPokemon={setSelectedPokemon} />
          <DataContainer selectedPokemon={selectedPokemon} />
        </div>
        <Footer text=""/>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    display: 'flex',
  },
};

export default App;
