import React from "react";
import styles from './SearchBar.module.css'
import {useState} from "react"; 

export default function SearchBar({ onSearch }) {

    const [id, setId] = useState(""); 

    const handleChange = (event) => {
        setId(event.target.value); 
    }

   return (
      <div className={styles.SearchBar}>
         <input className={styles.input} type='search' onChange={handleChange} value={id}/>
         <button className={styles.button} onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
