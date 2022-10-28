import styles from '../../styles/Favorites/Favorites.module.css'
import { IAllFilms, IFavoritesFilms } from '../../Types/types'
import ratingImg from '../../images/CardFilm/rating.png'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../rtk/hooks'
import { addCurrentFilm } from '../../rtk/slices/films'

const CardFilm: React.FC<IAllFilms> = ({title, rating, image, genres, url, id}) => {

    const dispatch = useAppDispatch()

    const watchFilm = (data: IFavoritesFilms) => {
        dispatch(addCurrentFilm(data))
    }

    return (
        <div className={styles.CardFilm}>
            <div className={styles.linkToWatch}>
                <Link to={`/watch/${title}`}>
                    <img onClick={() => watchFilm({title, rating, image, genres, url, id})} className={styles.CardFilmImage} src={image} alt="" />
                </Link>
            </div>
            <div className={styles.blockTwo}>
                <div className={styles.FavoritesInfo}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.genres}>{genres}</span>
                </div>
                <div className={styles.ratingBlock}>
                    <img className={styles.ratingImg} src={ratingImg} alt="" />
                    <span className={styles.rating}>{rating}</span>
                </div>
            </div>
        </div>
    )
}

export default CardFilm