import React from "react";
import { useState } from "react"
import validation from "./validation";
import styles from './Form.module.css'



export default function Form( {login} ) {


    const [userData, setUserData] = useState({
        email: 'vickyrodriguez544@gmail.com', 
        password: 'pass123', 
    })


    const [errors, setErrors] = useState({
        email: '', 
        password: '',
    })

    const handleInputChange = (event) => {
        const property = event.target.name; 
        const value = event.target.value; 

        setUserData({...userData, [property]: value})
        validation({...userData, [property]: value}, errors, setErrors)
    }; 

    const submitHandler = (event) =>{
        event.preventDefault(); 
        login(userData); 
    }

    return (
        
        <form onSubmit={submitHandler} className={styles.contenedor}>
            <div className={styles.ContenedorInputs}>
                <label htmlFor="email"></label>
                <input type="text" name="email" placeholder="Escribe tu mail..." value={userData.email} onChange={handleInputChange} className={styles.input}></input>
                <p className={styles.p}>{errors.email}</p>
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type="password" name="password" placeholder="Tu contraseña..." value={userData.password} onChange={handleInputChange} className={styles.input}/>
            </div>
            <button type="submit" className={styles.button}>Ingresar</button>
        </form>



    )
    
}

