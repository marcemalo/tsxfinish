import { useGetProductsEyeshadowQuery } from "../../redux/api/products";

const Eyeshadow = () => {

    const { data } = useGetProductsEyeshadowQuery(undefined);


  return (
    <div className="category">
      <div className="category__sidebar">
        <h3>Категории</h3>
    <form className="category__form">
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Консилер</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Лак для ногтей</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Подводка для глаз</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Помада для губ</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Пудра для лица</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Тени для век</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Тональный крем</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Аксессуары</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Апельсиновые палочки</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Аппликатор для теней</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">База для гель-лака</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">База под макияж</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Бафы для ногтей</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Консилер</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Лак для ногтей</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Подводка для глаз</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Помада для губ</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Пудра для лица</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Тени для век</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Тональный крем</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Аксессуары</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Апельсиновые палочки</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Аппликатор для теней</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">База для гель-лака</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">База под макияж</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Апельсиновые палочки</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">Аппликатор для теней</p></div>
       <div className="category__checkbox"> <input type="checkbox" /> <p className="category__p">База для гель-лака</p></div>
    </form>
   </div>
   <div className="hit">
      <div className="container">
        <h2 className="hit__title mr-5 mt-5">Category: Eyeshadow</h2>
        <div className="hit__wrapperr">
    {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">DEAL</div>
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
          )).slice(10, 26)}
          </div>
      </div>
    </div>
      </div>
  )
}

export default Eyeshadow