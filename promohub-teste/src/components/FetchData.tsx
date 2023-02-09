import { useEffect, useState } from "react";
import "./FetchData.css";

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
      <div className="container-fluid">
        <div className="row">
          {/* Renderizando componente */}
          {products.map((item) => (
            /* Card */
            <div id="card" className="card">
              {/* Imagem */}
              <div id="card-img-container">
                <img
                  id="card-img"
                  className="card-img-top"
                  src={baseUrl + item.image}
                  alt={item.title}
                />
              </div>
              {/* Título */}
              <div className="card-header">{item.title}</div>
              {/* Descrição */}
              <div className="card-body">
                <div id="dcp-1">A partir de:</div>
                <div>
                  <div id="dcp-2">R$ {item.price}</div>
                  {item.parcels ? (
                    <div id="dcp-1">Em até {item.parcels}x</div>
                  ) : (
                    <div id="dcp-1">À vista</div>
                  )}
                </div>
                {/* Botão */}
                <button id="button" className="btn btn-success">
                  <a href={item.url}>Pegar Promoção</a>
                  <i className="bi bi-box-arrow-up-right"></i>
                </button>
                {/* Data de Criação */}
                <div id="created-at">
                  <i className="bi bi-clock"></i>
                  {item.fromNow}
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
