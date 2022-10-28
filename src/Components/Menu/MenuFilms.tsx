import { useAppDispatch, useAppSelector } from "../../rtk/hooks"
import store, { RootState } from "../../rtk/store"
import FilmCard from "../Content/slider/FilmCard";
import styles from '../../styles/MenuFilms/MenuFilms.module.css'
import { addCurrentFilm } from "../../rtk/slices/films";
import { IFavoritesFilms } from "../../Types/types";
import SidebarMenu from "../sidebars/SidebarMenu/SidebarMenu";
import { Link } from "react-router-dom";

const MenuFilms = () => {
    const {films, auth} = useAppSelector<RootState>(store.getState)



     return (
        <main className={styles.menuAllFilms}>
            <header className={styles.menuTitle}>Menu</header>
            <div className={styles.blockMenu}>
                <ul>
                    <li>Home</li>
                    <li>Discovery</li>
                    <li>Fresh movies</li>
                    <li>Popular now</li>
                    <li>Twitch</li>
                </ul>
            </div>
            <div className={styles.blockAuth}>
                <Link to={'/auth'}>
                    <button className={styles.toAuth}>Authorization</button>
                </Link>
            </div>
        </main> 
    )
}

export default MenuFilms