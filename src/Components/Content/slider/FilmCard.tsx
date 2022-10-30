import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks'
import { addCurrentFilm } from '../../../rtk/slices/films'
import store, { RootState } from '../../../rtk/store'
import styles from '../../../styles/Content/filmSlider.module.css'
import { IFavorite, IFavoritesFilms } from '../../../Types/types'
import SignUpPlease from '../../Modals/SignUpPlease'
import heart from '../../../images/CardFilm/iconHeart.png'
import {addToFavorites} from '../../../rtk/slices/films'

interface IProps {
    image: string
    title: string
    rating: number
    url: string
    genres: string
    id: number
}

const FilmCard: React.FC<IProps> = ({image, title, url, rating, genres, id}) => {

    const {auth} = useAppSelector<RootState>(store.getState)

    const dispatch = useAppDispatch() 

    const watchFilm = (data: IFavoritesFilms) => {
        dispatch(addCurrentFilm(data))
    }

    const addFilmToFavorites = (data: IFavoritesFilms) => {
        dispatch(addToFavorites(data))
    }

    return (
            <>
                {!auth.isAuth && (
                        <div className={styles.CardFilmBlock}>
                       <Link className={styles.linkToFilm} to={`/watch/${title}`}>
                             <img onClick={() => watchFilm({image, title, url, rating, genres, id})} className={styles.CardFilmImage} src={image} alt="" />
                        </Link>
                               <img onClick={() => addFilmToFavorites({image, title, url, rating, genres, id})} className={styles.addToFavorites} src={heart} alt="" />
                        </div>)}

            </>
    )
}
export default FilmCard