import React from "react";
import { Secondary, Primary } from "../../colors";
import { ProjectConsumer } from "../../context";

import "../styles/Footer.css";
export default function Footer() {
  return (
    <ProjectConsumer>
      {(value) => {
      let lightColor = value.lightColor();
      let darkColor = value.darkColor();
  return (
    <div style={{ background: `linear-gradient( 
      0deg, ${darkColor} 12%, ${lightColor} 78% )`, display: 'flex', justifyContent: 'center', alignItems: 'center', height: "25vh" }}>
      <p class="footer-heart">
        Made with{" "}
        <g-emoji
          class="g-emoji"
          alias="heart"
          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
        >
          <img
            class="emoji"
            alt="heart"
            height="20"
            width="20"
            src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
          ></img>
        </g-emoji>{" "}
        by <a href="https://giusseppefinal.netlify.app/" target="_blank" rel="noreferrer">Giusseppe</a>
      </p>
    </div>
  );
}}
</ProjectConsumer>
);
}
