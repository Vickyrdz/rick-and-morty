
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Banner from './components/Banner/Banner.jsx';
import characters, { Rick } from './data.js';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Banner/> 
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />

    </div>
  );
}

export default App;
