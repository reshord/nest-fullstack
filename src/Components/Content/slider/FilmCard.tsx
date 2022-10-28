import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks'
import { addCurrentFilm } from '../../../rtk/slices/films'
import store, { RootState } from '../../../rtk/store'
import styles from '../../../styles/Content/filmSlider.module.css'
import { IFavoritesFilms } from '../../../Types/types'
import SignUpPlease from '../../Modals/SignUpPlease'

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

    return (
            <>
                {!auth.isAuth ? (
                        <div className={styles.CardFilmBlock} onClick={() => watchFilm({image, title, url, rating, genres, id})}>
                                <img className={styles.CardFilmImage} src={image} alt="" />

                        </div>

                    )
                    : (
                        <SignUpPlease />
                    )
                }

            </>
    )
}
export default FilmCard