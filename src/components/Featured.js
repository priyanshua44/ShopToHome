import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Product from "./Product";
import Category from "./Category";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const API = "https://fakestoreapi.com/products/";
const Featured = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getProducts = async (url) => {
      const response = await axios.get(url);
      const resdata = await response.data;
      setloading(false);
      setdata(resdata);
      setfilter(resdata);
    };
    getProducts(API);
  }, []);

  // console.log(data);

  // for all categories button
  const allCategory = [
    "ALL",
    ...new Set(
      data.map((curElem) => {
        return curElem.category;
      })
    ),
    ,
  ];
  // console.log(allCategory);

  // const [catItem, setcatItem] = useState(allCategory)
  const catItem = allCategory;

  const filterItem = (categItem) => {
    if (categItem === "ALL") {
      return setfilter(data);
    }

    const updatedItem = data.filter((curElem) => {
      return curElem.category === categItem;
    });
    setfilter(updatedItem);
  };

  if (loading) {
    return (
      <>
      <div className="text-center fs-1 py-5">...Loading</div>
      </>
    );
  } else {
    return (
      <Wrapper className="container">
        <div className="d-flex justify-content-center my-5">
          <div className="heading shadow-lg p-3 mb-5">
            <h1 className="title fw-bold"> Deals Like Never Seen Before </h1>
          </div>
        </div>
        <Category filterItem={filterItem} catItem={catItem} />
        <div className=" row py-5">
          <Product menu={filter} />
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  .grid {
    display: grid;
    padding: 2rem 5rem;
    gap: 6rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-three-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .heading {
    padding: 0.3rem 2rem;
    background-color: #c1fdff;
    width: fit-content;
    border: 1px solid black;
    box-shadow: 0px 4px 7px 0px;
    border-radius: 1rem;
    animation: animating 1.5s linear infinite;
  }

  @keyframes animating {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.3;
    }
  }

  .title {
    font-family: "Montserrat", sans-serif !important;
  }

  h1 {
    font-size: 2rem !important;
    font-weight: 400;
  }
`;

export default Featured;
