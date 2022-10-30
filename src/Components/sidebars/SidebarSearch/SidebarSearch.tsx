import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks'
import store, { RootState } from '../../../rtk/store'
import styles from '../../../styles/Sidebar/SidebarSearch.module.css'
import CardFilm from './CardFilm'
import FavoriteCard from '../../Favorites/FavoritesCard'
import { useEffect, useState } from 'react'
import { IAllFilms } from '../../../Types/types'
import { addCurrentFilm } from '../../../rtk/slices/films'
import SimpleBarReact from 'simplebar-react/dist/simplebar-react';
import "simplebar/src/simplebar.css";
import SearchedFilm from './SearchedFilm'
import { getPopularFilms } from '../../../rtk/axios'

const SidebarSearch = () => {

    const {films, auth} = useAppSelector<RootState>(store.getState)

    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPopularFilms())
    }, []);

    const filterFilms = films.allFilms.filter(el => {
        return el.title.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div className={styles.SidebarSearch}>
           <div className={styles.headerSearch}>
                <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder='Search'/>
                {value && 
                 <div className={styles.foundFilm}>
                 <SimpleBarReact style={{ maxHeight: 200}}>
                    
                    {filterFilms.map(el => 
                        <SearchedFilm {...el} />
                    )}
                        </SimpleBarReact>
            </div>
                }
           </div>
           <div className={styles.recommendFilms}>
                <span className={styles.title}>Popular Movies</span>
                <div className={styles.someFilms}>
                    {films.popularFilms.map(el => 
                                                        <CardFilm 
                                                            title={el.title} 
                                                            image={el.image} 
                                                            genres={el.genres} 
                                                            rating={el.rating}
                                                            url={el.url}
                                                            id={el.id}
                                                        />)}
                </div>
                <Link to={'/popular-now'}>
                    <button className={styles.allMovies}>All popular movies</button>
                </Link>
           </div>
           <div className={styles.favoritesFilmsList}>
                {!auth.isAuth 
                ? (
                    <div className={styles.BlockFavorites}>
                        <span className={styles.FavoritesTitle}>Favorites</span>
                        <div className={styles.favoritesFilms}>
                            {films.favoriteFilms.length ? (
                                <div className={styles.favoritesList}>
                                    {films.favoriteFilms.map(el => (
                                        <FavoriteCard 
                                            title={el.title} 
                                            image={el.image} 
                                            rating={el.rating} 
                                            genres={el.genres} 
                                            url={el.url}
                                            id={el.id}
                                            />
                                ))}
                                </div>
                            ) 
                            : (
                                <div className={styles.FavoritesEmpty}>
                                    You don't have any favorites
                                </div>
                            )}
                        </div>
                        <Link to='/favorites'>
                        <button disabled={films.favoriteFilms.length ? false : true } className={styles.allFavorites}>
                                All favorites
                        </button>
                        </Link>

                    </div>

                ) 
                : 
                (
                    <div className={styles.blockAuth}>
                        <span>You're not authorized!</span>
                        <br />
                        <span>
                            <Link to={'/auth'}>Sign Up</Link>
                        </span>
                    </div>
                )}
           </div>
        </div>
    )
}

export default SidebarSearch