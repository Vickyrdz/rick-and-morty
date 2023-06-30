import { ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER, RESET } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case ORDER:
      let ordenados;
      if (action.payload === "Ascendente") {
        ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordenados = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: [...ordenados],
      };

    case FILTER:
      if (action.payload === 'All') {
        return {
            ...state,
            myFavorites: state.allCharacters
        };
      }
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
