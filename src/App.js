
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Banner from './components/Banner/Banner.jsx';
import styles from './App.module.css';
import {useState} from "react"; 
import axios from 'axios'; 

function App() {

   const [characters, setCharacters] = useState([]); 


   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then((response) => response.data)
         .then(( data ) => {
            console.log(data);
            console.log(data.name);
            setCharacters((oldChars) => [...oldChars, data]);
         })
         .catch(() => {
            alert('¡No hay personajes con este ID!');
         });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter((character) => character.id !== Number(id)); 
      setCharacters(charactersFiltered);
   }


  return (
    <div className={styles.App}>
      <Banner/> 
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
