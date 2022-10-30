import styles from '../../../styles/Content/filmSlider.module.css'
import FilmCard from './FilmCard'
import {motion} from 'framer-motion'
import { useAppSelector } from '../../../rtk/hooks'
import store, { RootState } from '../../../rtk/store'
import { Link } from 'react-router-dom'
import React from 'react'

interface IProps {
    sliderTitle: string
}

const FilmsSlider: React.FC<IProps> = ({sliderTitle}) => {

    const {films} = useAppSelector<RootState>(store.getState)


    return (
        <div className={styles.FilmsSlider}>
            <div className={styles.headerTitle}>{sliderTitle}</div>
            <motion.div  className={styles.filmSliderWrapper}>
                <motion.div drag='x' dragConstraints={{right: 0, left: -330}} className={styles.blockFilms}>
                    {films.allFilms.map(el => (
                            <FilmCard image={el.image} 
                                      title={el.title}
                                      rating={el.rating}
                                      url={el.url}
                                      id={el.id}
                                      genres={el.genres}
                                      />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default FilmsSlider