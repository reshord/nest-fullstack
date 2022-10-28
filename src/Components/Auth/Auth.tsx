import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Auth/Auth.module.css'

const Auth = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, []);

    return (
        <div className={styles.auth}>
            <div className={styles.authContent}>
                <span>Sign Up</span>
                <form>
                    <input type="text" placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <input type="password" placeholder='Confirm password'/>
                    <button className={styles.authBtn}>Sign Up</button>
                </form>
            </div>
            <Link to={'/'}>
                <span className={styles.returnTo}>Return to main page</span>
            </Link>
        </div>
    )
}

export default Auth