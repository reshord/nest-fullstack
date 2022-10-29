import styles from '../../../styles/Sidebar/SidebarMenu.module.css'
import { Link } from 'react-router-dom'
import { deleteSpaces } from '../../../logic/DeleteSpaces'
import { useState } from 'react'


const SidebarMenu = () => {

    const categories = ['Discovery', 'Fresh movies', 'Popular now', 'Twitch']
    const [active, setActive] = useState<string>('')

    const categoriesWithoutSpace = categories.map(el => deleteSpaces(el))
 
    return (
        <div className={styles.SidebarMenu}>
            <div className={styles.headerTitle}>
                <Link to={'/'}>
                    Movies
                </Link>
            </div>
            <div className={styles.menu}>
                <span>MENU</span>
                <ul>
                    {categoriesWithoutSpace.map(el => (
                        <div onClick={() => setActive(el)} className={el === active ? styles.menuActive : styles.default}>
                            <Link to={`/${el.toLowerCase()}`}>{el}</Link>
                        </div>
                    ))}
                </ul>
            </div>

            <div className={styles.popularGenres}>
                <span>Popular genres</span>
                <ul>
                    <div>
                        <Link to={'/'}>Comedy</Link>
                    </div>

                    <div>
                        <Link to={'/'}>Cartoons</Link>
                    </div>

                    <div>
                        <Link to={'/'}>Fantasy</Link>
                    </div>

                    <div>
                        <Link to={'/'}>Biography</Link>
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default SidebarMenu