import { Link } from 'react-router-dom';
import styles from '../styles/Error/error.module.css'

const Error404 = () => {
    return ( 
        <main className={styles.mainPageError}>
            <div className={styles.blockError}>
                <span>Page not found (404)</span>
                <Link to={'/'}>Back to main page</Link>
            </div>
        </main>
     );
}
 
export default Error404;