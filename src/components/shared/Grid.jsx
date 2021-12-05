/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Secondary } from "./../../colors";

import ZoomCard from "./ZoomCard";
const TripleContainer = styled.div`
  grid-template-rows: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
  // grid-gap: 10px;
  // padding: 10px;
  height: 90vh;
  background: ${Secondary}
`;

const GridContainer = styled.div`
  grid-template-rows: auto;
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 600px) {
    grid-template-columns: auto;
  }
  // grid-gap: 10px;
  // padding: 10px;
  height: 90vh;
  background: ${Secondary}
`;
const SingleGridContainer = styled.div`
  grid-template-rows: auto;
  display: grid;
  grid-template-columns: auto;
  // grid-gap: 10px;
  // padding: 10px;
  height: 90vh;
  background: ${Secondary}
`;

const Grid = (props) => {
  const { cardsArr, singleCard } = props;
  switch (singleCard) {
    case 1:
      return <SingleGridContainer>
        {cardsArr.map((card) => (
          <ZoomCard card={card} key={card.id} />
        ))}
      </SingleGridContainer>;
    case 2:
      return <GridContainer>
          {cardsArr.map((card) => <ZoomCard card={card} key={card.id} />)}
      </GridContainer>
    default:
      return <TripleContainer>
        {cardsArr.map((card) => (
          <ZoomCard card={card} key={card.id} />
        ))}
      </TripleContainer>;
  }
};

export default Grid;
