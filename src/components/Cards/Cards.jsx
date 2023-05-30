import React from "react";
import Card from '../Card/Card';
import styles from './Cards.module.css'


// Recibe un listado de personajes a través de las props (characters)
// Es una lista, que le puedo hacer? ITERAR

export default function Cards(props) {
   return (
      <div className={styles.CardsContenedor}>
         {
            props.characters.map((character) => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={() => {}}
               />
            ))
         }
      </div>
   );
}
