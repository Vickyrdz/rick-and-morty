import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Detail() {
    const {id} = useParams(); 

    const [character, setCharacter] = useState({});

    useEffect(() => {
        console.log(id);
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            { character && character.name && <h2>{character.name}</h2>}
            { character && character.status && <h2>{character.status}</h2>}
            { character && character.species && <h2>{character.species}</h2>}
            { character && character.gender && <h2>{character.gender}</h2>}
            { character && character.origin && <h2>{character.origin.name}</h2>}
            { character && character.image && <img src={character.image} alt="" />}
        </div>
    )
    
}