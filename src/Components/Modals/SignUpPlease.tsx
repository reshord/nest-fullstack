import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleWatchMovieModal } from '../../rtk/slices/modals'
import styles from '../../styles/Modals/SignUpModal.module.css'

const SignUpPlease = () => {

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(toggleWatchMovieModal())
    }

    return (
        <div className={styles.authModalBody}>
                <div className={styles.authModalContent}>
                   <div>
                    <span>Для просмотра фильма необходимо авторизоваться!</span>
                   </div>
                    <button className={styles.btnToAuth}>
                        <Link to={'/auth'}>Вход/Регистрация</Link>
                    </button>
                   <span onClick={() => closeModal()} className={styles.close}>Закрыть</span>
                </div>
        </div>
    )
}

export default SignUpPlease