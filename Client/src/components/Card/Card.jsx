import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Card.module.css'
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect } from "react";

function Card({ id, name, species, origin, gender, image, onClose, status, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const [closeBtn, setCloseBtn] = useState(true); 

   useEffect(()=>{
      if(!onClose){
         setCloseBtn(false)
      }
   }, [])

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(false);
         addFav({
            id,
            name,
            species,
            gender,
            image,
            origin,
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
      <div className={styles.CardContenedor}>
         <div className={styles.tarjeta}>
            <div className={styles.arriba}>
               {
                  isFav ? (
                     <button className={styles.like} onClick={handleFavorite}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nMVTTWsTURR9sQW/WxXcqdWQzH0z9bOCEPPG2XShoNCN4qIL3fkfpLgR3Il7K7pRJH7VvNegVAha0Ggz904/oGJR0B8gSFct2pE3NsnMJMGkqXjgMvDOfefcd94bxv4nTpJ1VJAxbLtwRbj8YsY1+8K8Q7Bfrwc8GcO6vzVlnyUEwWWB/ItN3I+XIHhtE1z6863nbeSfNa91Guo7xb5NAuFJw83t1yOtV2ciEB5Gp+Y/bYSSTbxgI//Y+GR8XvMC+fugP8LDg6gBmUPRY4O0Z/v3hnuyniEEwcJqbAuCjGyEL1v7BIIK62Q9OFdtsJFPhiaYOJ9jXY0iFZjaLQhG9bdx5E63TfAqfIcBMVhO9trIf1WIU555jHUAe5oPhCM/UUr1MMfjB6uLCItsHSAQFiuaWp9lyewP3cWSPnInBo6ODGGpNrhlBYtiJp2sVLP7aBV6f1ivOnRauaapcFAXz7uZTkx43s1UtLRujRj3znJFflASVwzlnl6LgamHlLhS0TLG8UyN9f0EV1SukKDoa6pQ6mnHIDlR7gWF32rD0pTWjR1zegAkLVebFOadYrGlR+AUi90gUVWHlLRsFrzGvwKXOFIzCZpH66aJQ6cg8W5kn6KrrCmu+RtA4dOoEd5sauQHMd8K93NJj7VOcxPG2OGX3lau6ENko8I7LJfrqotI0b3Yyd8dz5e3sFZwSM3sBIVubMIxKze3TfMwNr9d31mMnzryjHawdmC9mNvFFU5Gs8ZZ/Uz1N7b+Rg/G1oJU4dNGLul+NDqKV25P7u1m1hF8PwGSbtSJ659O4vW/vr52YOZpCBR+X83/h6HowrqJh5FWM0mQdNt47h34Jwad4DfT9UDQvCr7oAAAAABJRU5ErkJggg==" />
                     </button>
                  ) : (
                     <button className={styles.dislike} onClick={handleFavorite}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAACiUlEQVR4nMVUz08TQRQelcTfoCYe/cVN5aDciB45aKIJJ+PBg978H4zpxQQ6CyiJNyF40ZilM4u749KZNVk60yAKnjgonSlE/wATwwmirpmWtrPbVluK8UteNtnvve+99+3sAPA/QVadS6SA77gK3/cUuk3WMmdMfm7dOavfa17n6fyWhKMo2uMqdI8otEYUjpLhKZwjyrlbftbzROGi5rVOwwbh+vQBTyLUpLjdmNF69fYo/CqWKPEPT6FFTyLfk+hzQzGJP2meSPRe58e2luhlrIErnaFEgudI51Qsp4ivEoVkOQfJNypzJc7bpz2JianjFpybtS0kEsZ0gR3Z+xpZ6hfsk55Ck/rZ0PIw7CISvTW/YYkIinYPkfhnhfALM5dBB3Al6jct9wt+N/AU6jNW3AC7AKLwRm0b1Adey5mLRpNNvXInDUJtmcKbNWdmL5RfrmZ6K9Hse7QKXW/qVYceYfPnYSAGy5Ef6KQJDPIDFS2tWyXSWX7DYiLSASn/BQN+bWcNxKCur2hZVFyvkvoagEws10j+ZcJf7G6nwUgQ9EAmvhoaS3XXS3ou1w8p36puxLibavEQpMKwC1JBDDe2RoP5xr8CpOJhdZJyo8mml902NG8xMZ2oewCaIZWK9lqM43iBGG/WKNI2U/7EzLeoyGgd8CdYlB6GlH+IFTI+Zdvxo12yiPHnsYEof5dylw+BVjBMxHGLiY+JCWefhuERzadn80f1N4vzfOlxGB4D7WAsu3ACUi4SXq+UjinjK4lNuR4M7AQTvr/fovxFXFAkwx5bWDgIOkHp9FA+nBQv/XRUPPrb6WsLo1k+ZDHxbdu27xYTt3ZN3MR4IHohFc8smjv3Txp0gt9JGArhCFi7cwAAAABJRU5ErkJggg==" />
                     </button>
                  )
               }
               <Link to={`/detail/${id}`} className={styles.cardLink}>
                  <h1 className={styles.Titulo}>{name}</h1>
               </Link>

               {closeBtn && ( 
               <button className={styles.Close} onClick={() => onClose(id)}>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVR4nO2UywqAIBBFB7KPye+uhfR1fcEJaRYSviakTd2NMl4P80BFfgEL4FqdiJ7olYbJAwcQalCFBfX6GnACVi7twNzhca0si1AzrAbV2GaGZfqEruneBitk+iyzVLcyi4N6v2QyAxg5YddzllXPBROU0U9v+Ocgn9AJmxaCk8SdNUQAAAAASUVORK5CYII=" />
               </button>) }
              
            </div>

            <img className={styles.imagenCard} src={image} height="250px" alt='' />

         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (characters) => {
         dispatch(addFav(characters))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.allCharacters,
   }
}




export default connect(mapStateToProps, mapDispatchToProps)(Card); 