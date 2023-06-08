import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'
import { connect } from "react-redux"; 
import { addFavorite, removeFavorite } from "../../redux/actions";
import {useEffect} from "react"; 

function Card({id, name, species, origin, gender, image, onClose, status, addFavorite, removeFavorite, myFavorites}) {

   const [isFav, setIsFav] = useState(false); 

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFavorite(id);
      }else {
         setIsFav(false); 
         addFavorite({
            id, 
            name, 
            species, 
            gender, 
            image,
            origin, 
            onClose, 
            status
         })
      }
   };
  
  
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <Link to={`/detail/${id}`}>
         <div className={styles.CardContenedor}>
            <div className={styles.tarjeta}>
               <div className={styles.arriba}>
                  {
                     isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button onClick={handleFavorite}>🤍</button>
                     )
                  }
                  <button className={styles.Close} onClick={() => onClose(id)}>X</button>

                  <h1 className={styles.Titulo}>{name}</h1>
               </div>
               <img className={styles.imagenCard} src={image} height="250px" alt='' />
               <div className={styles.description}>
                  <h2>{status} - {species} - {gender} - Origin {origin}</h2>
               </div>
            </div>
         </div>
      </Link>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (characters) => {
         dispatch(addFavorite(characters))
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }
   };
}; 

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}


   

export default connect(mapStateToProps, mapDispatchToProps)(Card); 