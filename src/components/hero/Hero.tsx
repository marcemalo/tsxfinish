import "./hero.css"
import Carouselimg from "../../img/8oohegnp7bgd.jpg"
import Carouselimg2 from "../../img/8rlsayrhoxtj.jpg"
import Carouselimg3 from "../../img/yajmxhdhxlvj.jpg"
import Carouselimg4 from "../../img/tf7weaer0u0a.jpg"
import Carouselimg5 from "../../img/3.jpg"
import Carouselimg6 from "../../img/4.jpg"

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
            <div className="hero__text">
                        <h2 className="hero__h2">Парфюмерия</h2>
                        <h2 className="hero__h2">Макияж</h2>
                        <h2 className="hero__h2">Волосы</h2>
                        <h2 className="hero__h2">Лицо</h2>
                        <h2 className="hero__h2">Тело и ванна</h2>
                        <h2 className="hero__h2">Мужчинам</h2>
                        <h2 className="hero__h2">Аксессуары</h2>
                        <h2 className="hero__h2">Health & Care</h2>
                        <h2 className="hero__h2">Подарки</h2>
                        <h2 className="hero__h2">Одежда</h2>
                        <h2 className="hero__h2">Бренды</h2>
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