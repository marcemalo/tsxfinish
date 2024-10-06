import { FcLike } from "react-icons/fc";
import { useGetProductsQuery } from "../../redux/api/products";
import "./hit.css";

const Hit = () => {
  const { data } = useGetProductsQuery(undefined);

  return (
    <div className="hit">
      <div className="container">
        <h2 className="hit__title">Предложения брендов</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">HIT</div>
              <div className="hit__like-icon"><FcLike /></div>
              <img className="hit__img" src={item.image_link} alt={item.name} />
              <div className="hit__content">
                <h3 className="hit__name">{item.name}</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{item.price}$</span>
                </p>
                <p className="hit__rating">
                  <span>★★★★★ {item.rating}</span>
                  <span>5</span>
                </p>
                <button className="hit__buy-btn">Купить</button>
              </div>
            </div>
          )).slice(60, 64)}
        </div>
        <div className="hit__wrapper2">
        {data?.map((item) => (
            <div key={item.id} className="hit__card1">
              <img className="hit__img1" src={item.image_link} alt={item.name} />
              <div className="hit__content">
                <h3 className="hit__name">"{item.description}"</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{item.price}$</span>
                </p>
                <p className="hit__rating">
                  <span>Leyla</span>
                  <span>10</span>
                </p>
              </div>
            </div>
          )).slice(150, 152)}
        </div>
        <h2 className="hit__title mt-5">Парфюмерия</h2>
        <div className="hit__wrapper">
          {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
              <div className="hit__like-icon"><FcLike /></div>
              <img className="hit__img" src={item.image_link} alt={item.name} />
              <div className="hit__content">
                <h3 className="hit__name">{item.name}</h3>
                <p className="hit__price">
                  <span>Price</span>
                  <span className="hit__price-new">{item.price}$</span>
                </p>
                <p className="hit__rating">
                  <span>★★★★★ {item.rating}</span>
                  <span>5</span>
                </p>
                <button className="hit__buy-btn">Купить</button>
              </div>
            </div>
          )).slice(130, 134)}
        </div>
      </div>
    </div>
  );
};

export default Hit;



