import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks'
import store, { RootState } from '../../../rtk/store'
import styles from '../../../styles/Content/content.module.css'
import { toggleWatchMovieModal } from '../../../rtk/slices/modals'
const Slider = () => {

    const {auth} = useAppSelector<RootState>(store.getState)
    const dispatch = useAppDispatch()

    const openModal = () => {
        dispatch(toggleWatchMovieModal())
    }

    return (
        <div className={styles.slider}>
            {/* <button onClick={() => openModal()} className={styles.watchBtn}>Watch</button> */}
            <div>
                
            </div>
        </div>
    )
}

export default Slider