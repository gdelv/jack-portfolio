import React from "react";
import { Link } from "react-router-dom";
import { ProjectConsumer } from "../../context";
import styled from "styled-components";
import "../styles/ZoomCard.scss";

export default function ZoomCard(props) {
  const { name, description, imgLink, position } = props.card;
  const StyledButton = styled.button`
    background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%);
     margin: 10px;
     padding: 5px;
     text-align: center;
    //  text-transform: uppercase;
     transition: 0.5s;
     background-size: 200% auto;
     color: black;            
     box-shadow: 0 0 20px #eee;
     border-radius: 10px;
     display: block;
     text-decoration: none;

     &:hover {
      background-position: right center; /* change the direction of the change here */
      color: black;
      text-decoration: none;
    }     
   }
  
  `
  return (
    <ProjectConsumer>
      {(value) => (
        <article className="blog-card" style={{zIndex: 100}}>
          <div className="blog-card__background">
            <div className="card__background--wrapper">
              <div
                className="card__background--main"
                style={{ backgroundImage: `url(${imgLink.default})`, backgroundPosition: `${position}`}}
              >
                <div className="card__background--layer"></div>
              </div>
            </div>
          </div>
          <div className="blog-card__head">
            <span className="date__box">
              <span className="date__day">{name}</span>
              <span className="date__month">{description}</span>
              <Link to="/details">
              <StyledButton
                className="button is-dark"
                onClick={() => value.handleDetail(name)}
              >
                See More
              </StyledButton>
            </Link>
            </span>
          </div>
        </article>
      )}
    </ProjectConsumer>
  );
}
