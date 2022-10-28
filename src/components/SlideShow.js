import React from "react";
import styled from "styled-components";

const SlideShow = () => {
  return (
    <div className="d-flex justify-content-center">
      <Slider
        id="carouselExampleControls"
        className="carousel slide my-2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner slider">
          <div className="carousel-item active img-color-red">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="d-block"
              alt="first image"
            />
          </div>
          <div className="carousel-item img-color-blue">
            <img
              src="https://images.unsplash.com/photo-1665686308707-419a10042d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="d-block"
              alt="Second image"
            />
          </div>
          <div className="carousel-item img-color-yellow">
            <img
              src="./images/sale.jpg"
              className="d-block"
              alt="third image"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev slider-btn "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next slider-btn"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </Slider>
    </div>
  );
};

const Slider = styled.section`
  .slider {
    width: 90vw;
    height: 85vh;
  }

  .slider-btn {
    color: black !important;
  }

  .slider img {
    width: -webkit-fill-available;
    height: 85vh;
  }

  .img-color-red {
    /* background-color: red; */
    /* height: 60vh; */
  }

  .img-color-blue {
    /* background-color: blue; */
    /* height: 60vh; */
  }

  .img-color-yellow {
    /* background-color: yellow; */
    /* height: 60vh; */
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .slider{
      height: 40vh;
    }

    .slider img{
      height: 40vh;
    }
  }
`;

export default SlideShow;
