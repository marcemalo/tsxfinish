import "./brand.css"
import brandimg from "../../img/blush-ff7992c3d7690d18a9b0224177cfbdedbc036497cf87c393ec01c6a2ef070258.svg"
import brandimg2 from "../../img/22.svg"
import brandimg4 from "../../img/44.svg"
import brandimg5 from "../../img/55.svg"
import brandimg6 from "../../img/66.svg"
import brandimg8 from "../../img/88.svg"
import brandimg9 from "../../img/99.svg"
import { Link } from "react-router-dom"

const Brandcategory = () => {
  return (
    <div className="brand">
        <div className="container">
            <h2 className="brand__title">Бренды Категории</h2>
            <div className="brand__wrapper">
                <div className="brand__imgs">
                    <Link to="/blush"><img className="brand__img" src={brandimg} alt="" /></Link>
                </div>
                <div className="brand__imgs">
                <Link to="/bronzer"><img className="brand__img" src={brandimg2} alt="" /></Link>
                </div>
                <div className="brand__imgs">
                <Link to="/eyeliner"><img className="brand__img" src={brandimg4} alt="" /></Link>
                </div>
                <div className="brand__imgs">
                <Link to="/eyeshadow"><img className="brand__img" src={brandimg5} alt="" /></Link>
                </div>
                <div className="brand__imgs">
                <Link to="/foundation"><img className="brand__img" src={brandimg6} alt="" /></Link>
                </div>
                <div className="brand__imgs">
                <Link to="/lipliner"><img className="brand__img" src={brandimg8} alt="" /></Link>
                </div>
                <div className="brand__imgs">
                <Link to="/mascara"><img className="brand__img" src={brandimg9} alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brandcategory