import React from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'

export default function Card(characters) {
   return (
      <Link to={`/detail/${characters.id}`}>
       <div className={styles.CardContenedor}>
         <div className={styles.tarjeta}>
            <div className={styles.arriba}>
           
               <button className={styles.Close} onClick={() => characters.onClose(characters.id)}>X</button>
               
               <h1 className={styles.Titulo}> {characters.name}</h1>
            </div>
            <img className={styles.imagenCard} src={characters.image} height="250px" alt='' />
            <div className={styles.description}>
               <h2>{characters.status} - {characters.species} - {characters.gender} - Origin {characters.origin}</h2>
            </div>
         </div>
      </div>
     </Link>
   );
}

