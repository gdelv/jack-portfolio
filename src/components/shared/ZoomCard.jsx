import React from "react";
import { Link } from "react-router-dom";
import { ProjectConsumer } from "../../context";
import "../styles/ZoomCard.scss";

export default function ZoomCard(props) {
  const { name, description, imgLink, position } = props.card;
  return (
    <ProjectConsumer>
      {(value) => (
        <article class="blog-card" style={{zIndex: 100}}>
          <div class="blog-card__background">
            <div class="card__background--wrapper">
              <div
                class="card__background--main"
                style={{ backgroundImage: `url(${imgLink.default})`, backgroundPosition: `${position}`}}
              >
                <div class="card__background--layer"></div>
              </div>
            </div>
          </div>
          <div class="blog-card__head">
            <span class="date__box">
              <span class="date__day">{name}</span>
              <span class="date__month">{description}</span>
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
