import "./DisplayCardDetails.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DisplayCardDetails = () => {
  const { id } = useParams();

  /* States */
  const [products, setProducts] = useState<any[]>([]);

  /* Links */
  const baseUrl = "https://promohub.com.br";
  const jsonUrl = `https://promohub.com.br/api/offers?page=1&perPage=20&sortBy=createdAt&filter=status::ne::false`;

  /* Consumindo API */
  useEffect(() => {
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.offers);
      })
      .catch((err) => console.log(err));
  }, []);

  type Product = {
    id?: number;
    image?: String;
    title?: String;
    price?: String;
    parcels?: number;
    url?: String;
    fromNow?: String;
  };
  let productDetails: Product = {};

  products.map((product) => {
    if (product.id === id) {
      productDetails = product;
    }
  });

  console.log(productDetails);

  return (
    <div>
      <div key={productDetails.id} id="single-card" className="card">
        {/* Imagem */}
        <div id="single-card-img-container" className="card-img-container">
          <img
            id="single-card-img"
            className="card-img-top"
            src={baseUrl + productDetails.image}
            alt={`Produto :${productDetails.id}`}
          />
        </div>
        {/* Título */}
        <div className="card-header">
          {productDetails.title && productDetails.title.length > 100
            ? `${productDetails.title.slice(0, 100)}...`
            : productDetails.title}
        </div>
        {/* Descrição */}
        <div className="card-body">
          <div id="single-dcp-1">A partir de:</div>
          <div>
            <div id="single-dcp-2">R$ {productDetails.price}</div>
            {productDetails.parcels ? (
              <div id="single-dcp-1">Em até {productDetails.parcels}x</div>
            ) : (
              <div id="single-dcp-1">À vista</div>
            )}
          </div>
          {/* Botão */}
          <button id="single-button" className="btn btn-success">
            <a href={`${productDetails.url}`}>Pegar promoção</a>
            <i className="bi bi-box-arrow-up-right"></i>
          </button>
          {/* Data de Criação */}
          <div>
            <div id="single-created-at">
              <i className="bi bi-clock"></i>
              {productDetails.fromNow}
            </div>
            <div className="final-obs">
              O preço e disponibilidade do produto podem variar, pois as ofertas
              são por tempo limitado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCardDetails;
