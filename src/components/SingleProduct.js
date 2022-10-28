import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyle";
import { FaStar } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Product from "./Product";
import FormatPrice from "./FormatPrice";

// const API = "https://fakestoreapi.com/products/";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      const resdata = await response.data;
      setloading(false);
      setdata(resdata);
    };
    getProducts();
    // console.log(data);
  }, []);

  if (loading) {
    return <div className="text-center fs-1 py-5">...Loading</div>;
  } else {
    return (
      <Wrapper>
        <div className="container py-3">
          <div className="row first">
            <div className="col-md-4 text-center image">
              {/* <div className=""> */}
              <img className="" src={data.image} alt="" />
              {/* </div> */}
            </div>
            <div className="col-md-8 second">
              <div className="category fs-5 text-uppercase font-monospace">
                Category : {data.category}{" "}
              </div>
              <div className="title py-1 fs-2 fw-bold">{data.title}</div>
              <div className="rating fs-5 fw-normal py-1">
                Rating : {data.rating && data.rating.rate} <FaStar />
              </div>
              <div className="text-capitalize description py-2 fs-4">
                {" "}
                <b> Description :</b> {data.description}
              </div>
              <div className="price d-flex justify-content-start align-middle fs-2 fw-bold py-2">
                <div className="">
                  <FormatPrice price={data.price} />
                </div>
                <div className="cart mx-5 font-monospace">
                  <button className="btn btn-dark fs-5">BUY NOW</button>
                </div>
              </div>
              <div className="product-data-warranty py-3">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>1 Year Warranty </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  padding: 2rem 2rem;

  img {
    height: 300px;
    width: 300px;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description {
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
  }

  .price {
    /* font-weight: bold; */
    /* font-size: 2rem; */
  }

  .product-data-warranty {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;

    .product-warranty-data {
      text-align: center;

      .warranty-icon {
        background-color: rgba(220, 220, 220, 0.5);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        padding: 0.6rem;
      }
      p {
        font-size: 1rem;
        padding-top: 0.4rem;
      }
    }
  }

  @media (max-width: 1024px) {
    img {
      width: 200px;
      height: 200px;
    }

    .second {
      margin-top: 10vh;
    }
  }
`;

export default SingleProduct;
