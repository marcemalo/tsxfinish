import { useGetProductsBronzerQuery} from "../../redux/api/products";



const Bronzer = () => {

    const { data } = useGetProductsBronzerQuery(undefined);


  return (
   <>
   <div className="hit">
      <div className="container">
        <h2 className="hit__title mr-5 mt-5">Category: Bronzer</h2>
        <div className="hit__wrapperr">
             {data?.map((item) => (
            <div key={item.id} className="hit__card">
              <div className="hit__badge">HIT</div>
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
          ))}
          </div>
      </div>
    </div>
   </>
  )
}

export default Bronzer