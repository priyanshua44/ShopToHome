import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../GlobalStyle";

const Category = ({ filterItem, catItem }) => {
  return (
    <div className="row text-center">
      <div className="col col-lg-12 col-md-12 col-sm-12">
        {catItem.map((curElem, index) => {
          return (
            <StyledButton
              className="btn btn-warning mx-2 my-2 text-uppercase"
              key={index}
              onClick={() => filterItem(curElem)}
            >
              {curElem}
            </StyledButton>
          );
        })}
      </div>
    </div>
  );
};

const StyledButton = styled.button`
  border: black 1px solid;
  letter-spacing: 1px;
  background-color: #c1fdff;
  box-shadow: 0px 4px 7px 0px;
`;

export default Category;
