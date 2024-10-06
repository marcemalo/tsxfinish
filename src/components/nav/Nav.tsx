import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import './nav.css'


const Nav = () => {
  return (
    <div className="nav">
        <div className="container">


            <div className="nav__wrapper">
                <div>
                    <p  className="nav__p">Бесплатная доставка!</p>
                </div>
                <div className="nav__list">
                    <ul className="nav__ul">
                        <li className='nav__li1'>Акции</li>
                        <li className='nav__li'>Доставка и Оплата</li>
                        <li className='nav__li'>О магазине</li>
                    </ul>
                </div>
                <div className="nav__p2">
                    <p  className="nav__p">★ Beauty Club</p>
                </div>
            </div>

            <div className="nav__wrapper2">
                <div className='nav__search'>
                    <GoSearch className="nav__icon" />
                </div>
                <div className="nav__logo">
                    <h1 className="nav__h1"><Link to='/'>MAKEUP</Link></h1>
                </div>

                <div className="nav__icons">
                    <FcLike className="nav__icon" />
                    <AiOutlineShoppingCart className="nav__icon"/>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Nav