import axios from "axios"; 

export const ADD_FAVORITE = "ADD_FAVORITE"; 
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"; 
export const ORDER = "ORDER"; 
export const FILTER = "FILTER"; 
export const RESET = "RESET"; 

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {

      try {
         const { data } = await axios.post(endpoint, character);

         return dispatch({
            type: ADD_FAVORITE,
            payload: data,
         });
         
      } catch (error) {
         console.log(error.message);
      }
    };
 };
 

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint);

         return dispatch({
            type: REMOVE_FAVORITE,
            payload: data,
      });
      } catch (error) {
         console.log(error.message);

      }
    };
 }; 


 export const orderFavorites = (order) => {
   return {
      type: ORDER,
      payload: order 
   }
 };

 export const filterFavorites = (gender) => {
   return {
      type: FILTER,
      payload: gender,  
   }
 };

 export const resetFavorites = () => {
   return {
      type: RESET,
      payload: [],
   }
 }