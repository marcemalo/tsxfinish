import { AiOutlineShoppingCart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import Mainlogo from "../../img/download.svg"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCurrency } from "../../redux/slice/CurrensySlice";

import './nav.css'


const Nav: React.FC = () => {
    const dispatch = useDispatch();
    const currency = useSelector((state: RootState) => state.currency.selected);
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
                    <p  className="nav__p"> <select value={currency} onChange={(e) => dispatch(setCurrency(e.target.value))} className="border border-gray-300 p-2 rounded-md w-[100px] focus:outline-none focus:ring focus:ring-black">
            <option value="USD">USD</option>
            <option value="UZS">UZS</option>
          </select></p>
                </div>
            </div>

            <div className="nav__wrapper2">
                <div className='nav__search'>
                    <GoSearch className="nav__icon" />
                </div>
                <div className="nav__logo">
                    <h1 className="nav__h1"><Link to='/'><img className="main__logo" src={Mainlogo} alt="" /></Link></h1>
                </div>

                <div className="nav__icons">
                    <Link to="/like"><FcLike className="nav__icon"/></Link>
                    <Link to="/cart"><AiOutlineShoppingCart className="nav__icon"/></Link>
                </div>

            </div>


        </div>
    </div>
  )
}

export default Nav