import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites);

    return (
        <>
            {
            favorites.map(
                ({ id, name, status, species, gender, origin, image, onClose }) => {
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
        </>
    );
};

export default Favorites;