import { useEffect, useState } from "react";

const FetchData = () => {
  const baseUrl = "https://promohub.com.br";

  const jsonUrl =
    "https://promohub.com.br/api/offers?page=1&perPage=20&sortBy=createdAt&filter=status::ne::false";

  const [products, setProducts] = useState<any[]>([]);

  /* Consumindo API */
  useEffect(() => {
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => {
        const products = data.offers;
        setProducts(products);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  return (
    <div>
      <div className="container">
        <div className="row">
          {/* Renderizando componente */}
          {products.map((item) => (
            <div key={item.id} className="col-lg-4">
              {/* Card */}
              <div className="card mb-4 p-4">
                {/* Imagem do card */}
                <div>
                  <img
                    className="card-img-top"
                    src={baseUrl + item.image}
                    alt={item.title}
                  />
                </div>
                {/* Corpo do card */}
                <div className="card-body">
                  <h5 className="card-title text-center">{item.title}</h5>
                  <p className="text-center">
                    A partir de: <span>R${item.price}</span> à vista
                  </p>
                  {/* Botao */}
                  <button className="btn btn-success">
                    <a href={item.url}>Pegar promoção!</a>
                    <i className="bi bi-box-arrow-up-right"></i>
                  </button>
                  {/* Data de criação */}
                  <span>
                    <i className="bi bi-clock"></i>
                    {item.fromNow}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchData;
