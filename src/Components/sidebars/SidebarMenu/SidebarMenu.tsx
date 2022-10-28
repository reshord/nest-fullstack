import styles from '../../../styles/Sidebar/SidebarMenu.module.css'
import { Link } from 'react-router-dom'


const SidebarMenu = () => {

    const categories = ['Home', 'Discovery', 'Fresh movies', 'Popular now', 'Twitch']
    
    const deleteSpaces = (el: string) => {
        const arr = el.split(' ')

        if(arr.length > 1) {
            for(let i = 0; i < arr.length; i++) {
                return arr[i] = `${arr[i]}-${arr[i + 1]}` 
            }
        }
        return arr.join('')
    }

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
                        <div>
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