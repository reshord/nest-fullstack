import React from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../../rtk/hooks"
import { addCurrentFilm } from "../../../rtk/slices/films"
import styles from '../../../styles/Sidebar/SidebarSearch.module.css'
import { IAllFilms } from "../../../Types/types"

interface IProps {
    title: string,
    image: string,
    url: string,
    genres: string,
    rating: number,
    id: number
}

const SearchedFilm: React.FC<IProps> = ({title, image, url, genres, rating, id}) => {
    
    const dispatch = useAppDispatch()   
   
    const watcFilm = (data: IAllFilms) => {
        dispatch(addCurrentFilm(data))
    }

    return (
        <div>
            <div className={styles.filmToWatch}>
                            <Link onClick={() => watcFilm(
                                {title,image,url,genres, rating,id}
                                )} to={`/watch/${title}`}>
                                <div className={styles.film}>
                                    <div>
                                        <img src={image} className={styles.foundFilmImage} alt="" />
                                    </div>
                                    <div className={styles.filmDescription}>
                                        <span className={styles.filmTitle}>{title}</span>
                                        <span className={styles.genres}>{genres}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
        </div>
    )
}

export default SearchedFilm