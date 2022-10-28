import styles from '../../../styles/Sidebar/CardFilm.module.css'
import heart from '../../../images/CardFilm/iconHeart.png'
import { useAppDispatch } from '../../../rtk/hooks'
import { addToFavorites } from '../../../rtk/slices/films'
import { IAllFilms, IFavoritesFilms } from '../../../Types/types'
import ratingImg from '../../../images/CardFilm/rating.png'

const CardFilm: React.FC<IAllFilms> = ({title, rating, image, genres, url, id}) => {

    const dispatch = useAppDispatch()

    const addToFavorite = (data: IFavoritesFilms) => {
        dispatch(addToFavorites(data))
    }

    return (
        <div className={styles.CardFilm}>
            <div>
                <img className={styles.filmImage} src={image} alt="" />
            </div>
            <div className={styles.blockInfo}>
                <div className={styles.cardHeader}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.genre}>{genres}</div>
                </div>
                <div className={styles.cardFooter}>
                    <div className={styles.blockRating}>
                        <img className={styles.cardRating} src={ratingImg} alt="" />
                        <span className={styles.filmScore}>{rating}</span>
                    </div>
                    <img onClick={() => addToFavorite({title, rating, image, genres, url, id})} className={styles.heart} src={heart} alt="" />
                </div>
            </div>

        </div>
    )
}

export default CardFilm