import styles from '../../styles/WatchMovie/WatchMovie.module.css'
import SidebarMenu from '../sidebars/SidebarMenu/SidebarMenu'
import SidebarSearch from '../sidebars/SidebarSearch/SidebarSearch'
import ReactPlayer from 'react-player'
import { useAppSelector } from '../../rtk/hooks'
import store, { RootState } from '../../rtk/store'
import { title } from 'process'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const WatchMovie = () => {

    const navigate = useNavigate()

    const {films, auth} = useAppSelector<RootState>(store.getState)
    

    useEffect(() => {
        if(!films.currentFilm) navigate('/')
        window.scrollTo({
            top: 0
        })
    }, [films.currentFilm]);

    return (
        <div className={styles.watchMovie}>
            <SidebarMenu />
            <div className={styles.logo}>
                <Link to={'/'}>Movies</Link>
            </div>
            <div className={styles.contentMovie}>
                
                <div className={styles.blockFilm}>
                    {!auth.isAuth ? (
                        <ReactPlayer 
                        url={films.currentFilm?.url}
                        playing={false}
                        width={'99%'}
                        />
                    ) 
                    : (
                        <div>You must be logged to watch film</div>
                    )}
                </div>
                <div className={styles.blockFilmInfo}>
                    <div>
                        <img className={styles.movieImage} src={films.currentFilm?.image} alt="" />
                    </div>
                    <div className={styles.blockInfoDescription}>
                        <span>Title: {films.currentFilm?.title}</span>
                        <span>Genres: {films.currentFilm?.genres}</span>
                        <span>Rating: {films.currentFilm?.rating}</span>
                    </div>
                </div>
            </div>
            <SidebarSearch />
        </div>
    )
}

export default WatchMovie