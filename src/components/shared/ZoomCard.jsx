import React from "react";
import { Link } from "react-router-dom";
import { ProjectConsumer } from "../../context";
import "../styles/ZoomCard.scss";

export default function ZoomCard(props) {
  const { name, description, imgLink, position } = props.card;
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
              <button
                className="button is-dark"
                onClick={() => value.handleDetail(name)}
              >
                See More
              </button>
            </Link>
            </span>
          </div>
        </article>
      )}
    </ProjectConsumer>
  );
}
