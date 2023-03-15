import "./DisplayCardDetails.css";

import { useParams, useLocation } from "react-router-dom";

const DisplayCardDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { products, baseUrl } = location.state;

  type Product = {
    id?: number;
    image?: String;
    title?: String;
    price?: String;
    parcels?: number;
    url?: String;
    fromNow?: String;
  };

  let productDetails: Product | undefined;

  products.map((produto: Product) => {
    if (produto.id === id) {
      productDetails = produto;
    }
  });

  return (
    <div>
      {productDetails && (
        <div key={productDetails.id} id="single-card" className="card">
          {/* Image */}
          <div id="single-card-img-container" className="card-img-container">
            <img
              id="single-card-img"
              className="card-img-top"
              src={baseUrl + productDetails.image}
              alt={`Produto :${productDetails.id}`}
            />
          </div>
          {/* Title */}
          <div className="card-header">
            {productDetails.title && productDetails.title.length > 100
              ? `${productDetails.title.slice(0, 100)}...`
              : productDetails.title}
          </div>
          {/* Description */}
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
            {/* Button */}
            <button id="single-button" className="btn btn-success">
              <a href={`${productDetails.url}`}>Pegar promoção</a>
              <i className="bi bi-box-arrow-up-right"></i>
            </button>
            {/* Creation date */}
            <div>
              <div id="single-created-at">
                <i className="bi bi-clock"></i>
                {productDetails.fromNow}
              </div>
              <div className="final-obs">
                O preço e disponibilidade do produto podem variar, pois as
                ofertas são por tempo limitado
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayCardDetails;
