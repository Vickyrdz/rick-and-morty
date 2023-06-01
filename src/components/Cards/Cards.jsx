import React from "react";
import Card from '../Card/Card';
import styles from './Cards.module.css'


export default function Cards({characters, onClose}) {
   return (
      <div className={styles.CardsContenedor}>
         {
            characters.map((user) => (
               <Card
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  status={user.status}
                  species={user.species}
                  gender={user.gender}
                  origin={user.origin.name}
                  image={user.image}
                  onClose={onClose}
               />
            ))
         }
      </div>  
   );
}
