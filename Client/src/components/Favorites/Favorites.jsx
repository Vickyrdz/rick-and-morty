import React from "react";
import { connect, useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from './Favorites.module.css'
import { removeFav } from "../../redux/actions";


const Favorites = ({ onClose }) => {

    const favorites = useSelector((state) => state.myFavorites);

    return (
        <div className={styles.favContenedor}>
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
                        onClose={onClose}
                    />
                })
            }
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
       onClose: (id) => {
          dispatch(removeFav(id))
       }
    };
 };

export default connect(null, mapDispatchToProps)(Favorites); 