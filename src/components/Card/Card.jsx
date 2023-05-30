import React from "react";
import styles from './Card.module.css'

// Esta tarjeta sabe como dibujar cada una de las propiedades que recibe
// props.[lo que sea] es USAR LO QUE ME PASAN

// props.name --> marta, luciano, juan

export default function Card(props) {
   return (
      <div className={styles.CardContenedor}>
         <button onClick={props.onClose}>X</button>
         <img className={styles.imagenCard} src={props.image} height="250px" alt='' /> 
         <h2>Name: {props.name}</h2>
         <h2>Status: {props.status}</h2>
         <h2>Species: {props.species}</h2>
         <h2>Gender: {props.gender}</h2>
         <h2>Origin: {props.origin}</h2>
      </div>
   );
}

