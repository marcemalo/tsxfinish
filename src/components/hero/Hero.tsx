import "./hero.css"
import Carouselimg from "../../img/8oohegnp7bgd.jpg"
import Carouselimg2 from "../../img/8rlsayrhoxtj.jpg"
import Carouselimg3 from "../../img/yajmxhdhxlvj.jpg"
import Carouselimg4 from "../../img/tf7weaer0u0a.jpg"
import Carouselimg5 from "../../img/3.jpg"
import Carouselimg6 from "../../img/4.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
            <div className="hero__text">
            <Link className="hero__link " to={"/blush"}><h2 className="hero__h2">Powder</h2></Link>
            <Link className="hero__link " to={"/bronzer"}><h2 className="hero__h2">Bronzer</h2></Link>
            <Link className="hero__link " to={"/eyeliner"}><h2 className="hero__h2">Pencil</h2></Link>
            <Link className="hero__link " to={"/eyeshadow"}><h2 className="hero__h2">Palette</h2></Link>
            <Link className="hero__link " to={"/foundation"}><h2 className="hero__h2">Concealer </h2></Link>
            <Link className="hero__link " to={"/lipliner"}><h2 className="hero__h2">Lipstick</h2></Link>
            <Link className="hero__link " to={"/mascara"}><h2 className="hero__h2">Mascara</h2></Link>
                    
                    </div>
                <div className="hero__wrapper">



                    <div className="hero__carousel ">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={Carouselimg} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={Carouselimg4} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={Carouselimg5} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={Carouselimg6} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={Carouselimg2} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={Carouselimg3} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Hero