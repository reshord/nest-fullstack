import styles from '../../../../styles/Sidebar/Categories/PopularNow.module.css'
import { useAppSelector } from '../../../../rtk/hooks'
import store, { RootState } from '../../../../rtk/store'
import SidebarMenu from '../SidebarMenu'
import FilmCard from '../../../Content/slider/FilmCard'
import SidebarSearch from '../../SidebarSearch/SidebarSearch'
import { useEffect } from 'react'

const PopularNow = () => {
    const {films} = useAppSelector<RootState>(store.getState)

    let popularFilms = [...films.allFilms]
    popularFilms = popularFilms.sort((a, b) => b.rating - a.rating)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, []);

    return (
        <main className={styles.popularNow}>
            <SidebarMenu />
            <div className={styles.popularNowContent}>
                <span className={styles.popularFilmHeader}>Popular movies</span>
                <div className={styles.allPopularMovies}>
                    {popularFilms.map(el => (
                        <FilmCard {...el} />
                    ))}
                </div>
            </div>
            <SidebarSearch />
        </main>
    )
}

export default PopularNow