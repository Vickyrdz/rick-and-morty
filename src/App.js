
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Banner from './components/Banner/Banner.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form /Form.jsx';
import styles from './App.module.css';
import {useEffect, useState,} from "react"; 
import axios from 'axios'; 
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"; 

function App() {

   const [characters, setCharacters] = useState([]); 
   const {pathname} = useLocation(); 
   const [access, setAccess] = useState(false);
   const navigate = useNavigate(); 

   useEffect(() => {
      !access && navigate("/"); 
   }, [access]); 



   const email = "vickyrodriguez544@gmail.com"; 
   const password = "pass12345"; 


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
   }; 


   const login = (userData) => {
      if(userData.email===email && userData.password===password){
         setAccess(true); 
         navigate("/"); 
      } else {
         alert("Datos incorrectos"); 
      }
   };


  return (
    <div className={styles.App}>
      <Banner/>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
      {/* <Route path="/home" element={<Banner/>}/>  */}
      <Route path='/' element={<Form login={login}/>}/>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
