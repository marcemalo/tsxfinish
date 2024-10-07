import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/api/products";
import "./details.css";

const Details = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);

  const product = data;

  return (
    <div className="details-page">
      {product ? (
        <div className="details">
          <div className="details-container">
            <div className="details-wrapper">
              <div className="details-header">
                <span className="deal-tag">DEAL</span>
                <h1>{product.name}</h1>
                <div className="product-rating">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>{product.reviews} отзывов</span>
                </div>
                <p className="product-category">{product.category}</p>
              </div>

              <div className="promo-section">
                <span className="promo-label">АКЦИЯ</span>
                <p>{product.description}</p>
                <p>До конца акции осталось 13 дней 06:18:36</p>
              </div>
            </div>

            <div className="details-image">
              <img src={product.image_link} alt={product.name} />
            </div>

            <div className="details-info">
              <p className="product-price">{product.price} сум</p>

              <div className="details-actions">
                <select className="size-selector">
                  <option value="100ml">100ml</option>
                  <option value="50ml">50ml</option>
                </select>
                <button className="buy-button">Купить</button>
              </div>

              <p className="availability">
                {product.in_stock ? "Есть в наличии!" : "Нет в наличии"}
              </p>
              <p className="product-code">Код товара: {product.id}</p>
            </div>
          </div>


          <div className="details-page1">
          <div className="details-characteristics">
            <div className="tabs">
              <span className="active-tab">Характеристики</span>
              <span className="inactive-tab">Описание</span>
            </div>
            <table className="product-table">
              <tbody>
                <tr>
                  <td>Бренд:</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td>Серия:</td>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <td>Группа товара:</td>
                  <td>{product.group}</td>
                </tr>
                <tr>
                  <td>Классификация:</td>
                  <td>{product.classification}</td>
                </tr>
                <tr>
                  <td>Объем:</td>
                  <td>{product.volume}</td>
                </tr>
                <tr>
                  <td>Страна TM:</td>
                  <td>{product.country_tm}</td>
                </tr>
                <tr>
                  <td>Коллекция:</td>
                  <td>{product.collection}</td>
                </tr>
               
              </tbody>
            </table>
          </div>
          </div>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default Details;
