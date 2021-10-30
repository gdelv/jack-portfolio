/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const GridContainer = styled.div`
    grid-template-rows: auto;
    display: grid;
    width: 80%;
    grid-template-columns: auto auto auto auto;
    @media (max-width: 950px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 550px) {
        grid-template-columns: auto;
    }
    grid-gap: 10px;
    padding: 10px;
    margin-top: 3em;
`;

const Grid = (props) => {
    const { cardsArr } = props;
    return (
        <GridContainer>
            {cardsArr.map((card) => <Card card={card} key={card.id} />)}
        </GridContainer>
    );
};

export default Grid;