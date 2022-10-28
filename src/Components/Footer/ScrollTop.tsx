import React, { useEffect, useState } from "react";
import srcollToTop from '../../images/Footer/arrowTop.png'
import styles from '../../styles/Footer/footer.module.css'

const ScrollTopButton = () => {

    const [showButton, setShowButton] = useState<boolean>(false)

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
    }


    return (
        <div>
                <img onClick={() => scrollToTop()} 
                className={styles.arrowTop} 
                src={srcollToTop} 
                alt="" 
                       />
        
        </div>
    )
}

export default ScrollTopButton