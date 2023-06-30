
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Banner from './components/Banner/Banner.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form /Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';
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
   const password = "pass123"; 
 
   const dispatch = useDispatch();

   const onSearch = async (id) => {
      const URL_BASE = `http://localhost:3001/rickandmorty`;

      if (characters.find((char) => char.id == id )){
         return alert ("personaje repetido");
      }

      try {
         const { data } = await axios(`${URL_BASE}/character/${id}`)
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter((character) => character.id !== id); 
      setCharacters(charactersFiltered);

      dispatch(removeFav(id)); 
   }; 

   const URL = 'http://localhost:3001/rickandmorty/login/';

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
          setAccess(access);
          access && navigate('/home');
        
      } catch (error) {
         alert('no encontré al usuario');
         console.error('no encontré al usuario');
      }
   }

   const logout = () => {
      setAccess(false);
      navigate('/');
   }


   function onAddRandom () {
      const random = Math.ceil(Math.random() * 826); 
      onSearch(random);
   }

  return (
    <div>
      {pathname !== "/" && <Nav onSearch={onSearch} onAddRandom={onAddRandom} onLogout={logout} />}
      <div className={styles.contenedor}>
         <Routes>
            <Route path='/' exact element={
               <>
                  <Banner />
                  <Form login={login}/>
               </>
            }/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/favorites' element={<Favorites/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
    </div>
  );
}

export default App;
