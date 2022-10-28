import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "./FormatPrice";
import { BsCart } from "react-icons/bs";

const Product = ({ menu }) => {
  // const { id, title, image, category, price } = menu;

  return (
    <>
      {/* <div className="row text-center"> */}
      {menu.map((curElem) => {
        return (
          <>
            <Wrapper key={curElem.id} className="col col-lg-4 text-center ">
              <div key={curElem.id} className="category font-monospace">{curElem.category}</div>
              <div className="">
                <img src={curElem.image} alt="" />
              </div>
              <div className="title">
                <div className="title2 fw-bold ">
                  <p>{curElem.title.slice(0, 53)}</p>
                </div>
              </div>
              <div className="price align-text-bottom">
                <FormatPrice price={curElem.price} />
              </div>
              <NavLink to={`/products/${curElem.id}`}>
                <Info>
                  <Icon>
                    <BsCart />
                  </Icon>
                </Info>
              </NavLink>
            </Wrapper>
          </>
        );
      })}
      {/* </div> */}
    </>
  );
};

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transition: all 0.5s ease; */
  /* cursor: pointer; */
`;

const Wrapper = styled.section`
  position: relative;
  width: auto;
  padding: 2rem 0rem !important;
  margin: 0.5rem 0.3rem !important;
  border: solid #d4d1c5 1px;

  :hover {
    transform: scale(1.1);
    cursor: pointer;

    &:hover ${Info} {
      opacity: 1;
    }
  }

  .item {
    padding: 2rem 4rem;
    border: solid #d4d1c5 1px;
    /* width: 25vw; */
    /* height: 60vh;   */
    margin-top: auto;
    /* text-decoration: none; */
  }

  .category {
    font-size: 1rem;
    text-transform: uppercase;
  }

  img {
    margin-top: 2rem;
    width: 180px;
    height: 180px;
  }

  .title {
    margin-top: 2vh;
    font-size: 1.2rem;
  }

  .title2 {
    display: flex;
    justify-content: center;
  }

  p {
    width: 250px;
  }

  .price {
    margin-top: 2vh;
    font-size: 1.1rem;
    font-weight: bold;
  }

  .logo {
    z-index: -1;
  }
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export default Product;
