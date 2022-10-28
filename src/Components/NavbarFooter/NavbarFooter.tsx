import { Link } from "react-router-dom"
import favorites from '../../images/CardFilm/iconHeart.png'
import '../../styles/App/index.css'
import Home from '../../images/Footer/HomeIcon.png'

const NavbarFooter = () => {

    return (
        <div className="navbarFooter">
            <div className='home'>
                <Link to={'/'}>
                    <img className="homeImg" src={Home} alt="" />
                    <span>Home</span>
                </Link>
            </div>
            <div className="favorites">
                <Link to={'/favorites'}>
                  <img className='favoritesImg' src={favorites} alt="" />
                  <span>Favorites</span>
                </Link>
            </div>
            <div className="menu">
              <Link to={'/menu'}>
                   <div className="menuBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                   </div>
                   <span className="menuTitle">Menu</span>
              </Link>
            </div>
        </div>
    )
}

export default NavbarFooter