import SidebarMenu from "../sidebars/SidebarMenu/SidebarMenu"
import SidebarSearch from "../sidebars/SidebarSearch/SidebarSearch"
import styles from '../../styles/Favorites/Favorites.module.css'
import { useAppSelector } from "../../rtk/hooks"
import store, { RootState } from "../../rtk/store"
import FilmInFavorites from "./FilmInFavorites"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
// import FilmInFavorites from "./FilmInFavorites"

const Favorites = () => {

    const {films} = useAppSelector<RootState>(store.getState)
    const navigate = useNavigate()

    useEffect(() => {
        if(!films.favoriteFilms.length) navigate('/')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [films.favoriteFilms.length]);

    return (
        <div className={styles.favorites} style={{color: 'white'}}>
            <SidebarMenu />
            <div className={styles.FavoritesContent}>
                <span className={styles.FavoritesTitle}>Favorites</span>
                <div className={styles.FavoritesFilms}>
                    {films.favoriteFilms.map(el => (
                        <FilmInFavorites image={el.image} 
                                         title={el.title} 
                                         url={el.url}
                                         genres={el.genres}
                                         rating={el.rating}
                                         id={el.id}
                                    />
                    ))}
                </div>
            </div>
            <SidebarSearch />
        </div>
    )
}

export default Favorites