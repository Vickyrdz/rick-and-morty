import React from "react";
import { connect, useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorites.module.css'
import { removeFav } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { orderFavorites, filterFavorites, resetFavorites} from "../../redux/actions";


const Favorites = ({ onClose }) => {

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.myFavorites);

    function handleSort(event){
        dispatch(orderFavorites(event.target.value))
    };

    function handleFilter(event){
        dispatch(filterFavorites(event.target.value))
    }; 

    function handleReset(){
        dispatch(resetFavorites)
    }


    function handleClose(id){
    dispatch(removeFav(id))
   }
    

    return (
        <div className={styles.favContenedor}>
           <div>
           <select placeholder="Gender" onChange={handleFilter}>
                {["Male", "Female", "Unknown", "Genderless"].map((gender) => 
                   <option disabled selected value={gender}>{gender}</option>
                 )}
            </select>
            <select placeholder="Order" onChange={handleSort}>
                {["Ascendente", "Descendente"].map((order) => 
                   <option disabled selected value={order}>{order}</option>
                 )}
            </select>

            <button onClick={handleReset}>Reset Filter</button>
           </div>
            
            {
            favorites.map(
                ({ id, name, status, species, gender, origin, image}) => {
                    return <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        origin={origin.name}
                        image={image}
                        onClose={handleClose}
                    />
                })
            }
        </div>
    );
};


// const mapDispatchToProps = (dispatch) => {
//     return {
//        onClose: (id) => {
//           dispatch(removeFav(id))
//        }
//     };
//  };

// export default connect(null, mapDispatchToProps)(Favorites); 

export default Favorites