import React from "react";
function Slider({ images }) {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        {images &&
          images.map((image, i) => {
            return (
              <div class="carousel-item active">
                <img
                  src={image}
                  class="d-block w-100"
                  alt={`slider image ${i}`}
                />
              </div>
            );
          })}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
