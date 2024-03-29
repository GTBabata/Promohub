import { useEffect, useState } from "react";
import "./DisplayCard.css";
import { Link } from "react-router-dom";

const DisplayCard = () => {
  /* States */
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<any[]>([]);
  const [maxPage, setMaxPage] = useState<number>(0);

  /* Links */
  const baseUrl = "https://promohub.com.br";
  const jsonUrl = `https://promohub.com.br/api/offers?page=${page}&perPage=20&sortBy=createdAt&filter=status::ne::false`;

  /* CFetching API */
  useEffect(() => {
    fetch(jsonUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, ...data.offers]);
        setPage(parseInt(data.pagination.currentPage));
        setMaxPage(data.pagination.totalPages);
      })
      .catch((err) => console.log(err));
  }, [page]);

  /* Loading more components */
  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !(page + 1 > maxPage)
    ) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {/* Rendering */}
          {products.map((item) => (
            /* Card */
            <div key={item.id} id="card" className="card">
              {/* Image */}
              <div className="card-img-container" id="card-img-container">
                <Link
                  className="reactLink stretched-link"
                  to={`/ofertas/${item.id}`}
                  state={{ products: products, baseUrl: baseUrl }}
                >
                  <img
                    id="card-img"
                    className="card-img-top"
                    src={baseUrl + item.image}
                    alt={item.title}
                  />
                </Link>
              </div>
              {/* Title */}
              <div className="card-header">
                {item.title.length > 100
                  ? `${item.title.slice(0, 100)}...`
                  : item.title}
              </div>
              {/* Description */}

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
                {/* Button */}
                <button id="button" className="btn btn-success">
                  <a href={item.url}>Pegar promoção</a>
                  <i className="bi bi-box-arrow-up-right"></i>
                </button>
                {/* Creation date */}
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

export default DisplayCard;
