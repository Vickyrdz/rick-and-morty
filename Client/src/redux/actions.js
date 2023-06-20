import axios from "axios"; 

export const ADD_FAVORITE = "ADD_FAVORITE"; 
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"; 

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character)
       .then(({ data }) => {
          return dispatch({
             type: ADD_FAVORITE,
             payload: data,
          });
       });
    };
 };
 

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint)
       .then(({ data }) => {
          return dispatch({
             type: REMOVE_FAVORITE,
             payload: data,
       });
       });
    };
 }; 