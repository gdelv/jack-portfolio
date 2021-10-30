/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import { White } from '../../colors';
import '../styles/Card.css'


const CardTitle = styled.h1`
font-size: 1.2rem;
font-family: 'Jack', serif;
`;



const Card = (props) => {
    const { name, image, description } = props.card;
    console.log(JSON.parse(JSON.stringify(image.default)));
    const imageLink = image.default;
    var sectionStyle = {
        width: "100%",
        height: "400px",
        background: `${White}`,
        backgroundImage: `url(${imageLink})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      };
    // const CardContainer = styled.div`
    //     background: ${White};
    //     background-image: url(${imageLink});
    //     background-color: #cccccc; /* Used if the image is unavailable */
    //     height: 500px; /* You must set a specified height */
    //     background-position: center; /* Center the image */
    //     // background-repeat: no-repeat; /* Do not repeat the image */
    //     background-size: cover; /* Resize the background image to cover the e
    //     &:hover {
    //         // border: 1px solid gray;
    //         box-shadow: 2px 2px 3px #ccc;
    //         transform: scale(1.01);
    //     }
    // `;
    return (
        // <CardContainer>
            <div style={sectionStyle} className="home-card">
            <CardTitle>
                {name}
                {description}
            </CardTitle>
            </div>
        // </CardContainer>
    );
};

export default Card;