import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carouselComponent">
      <div id="infoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#infoCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#infoCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#infoCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        {/* Carousel content */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="https://promohub.com.br/blog">
              <img src="./src/img/blog.png" alt="Blog" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="https://join.promohub.com.br/geral">
              <img src="./src/img/geral.png" alt="Geral" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="https://join.promohub.com.br/baby">
              <img src="./src/img/baby.png" alt="Baby" />
            </a>
          </div>
        </div>
        {/* Button configs */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#infoCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#infoCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
