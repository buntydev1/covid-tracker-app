import React from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
    <Cards />
    <Chart />
    <CountryPicker />
    </div>
  );
}

export default App;
