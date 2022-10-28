import styles from '../../styles/Favorites/Favorites.module.css'
import heart from '../../images/CardFilm/iconHeart.png'
import React from 'react'
import { useAppDispatch } from '../../rtk/hooks'
import {addCurrentFilm, deleteFavorites} from '../../rtk/slices/films'
import { IFavoritesFilms } from '../../Types/types'
import { Link } from 'react-router-dom'


const FilmInFavorites: React.FC<IFavoritesFilms> = ({image, title, url, rating, genres, id}) => {

    const dispatch = useAppDispatch()

    const watchFilm = (data: IFavoritesFilms) => {
        dispatch(addCurrentFilm(data))
    }

    const deleteFavoritesFilm = (id: number) => {
        dispatch(deleteFavorites(id))
    }

    return (
        
            <div className={styles.blockFilms} >
                <Link to={`/watch/${title}`}>
                    <div onClick={() => watchFilm({image, title, url, rating, genres, id})} className={styles.FilmImFavorites} style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
                </div>
                </Link>
                <img onClick={() => deleteFavoritesFilm(id)} className={styles.heart} src={heart} alt="" />

                <span className={styles.titleFilm}>{title}</span>
            </div>
        
    )
}

export default FilmInFavorites