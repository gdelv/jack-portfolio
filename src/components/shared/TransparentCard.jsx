import React from "react";
import "../styles/TransparentCard.css";

export default function TransparentCard(props) {
    const { name, imgLink, description } = props.card;
console.log(name);
  return (
    <>
      <div class="container-fluid">
        <div class="col-lg-6 col-lg-offset-0 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12">
          <figure>
            <div class="media media1" style={{backgroundImage:`url(${imgLink.default})`}}></div>
                {/* {name.map((word) => <div style={{color: "black", zIndex:99}}>{word}</div>)} */}
            <figcaption>
              <svg
                viewBox="0 0 200 200"
                version="1.1"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask id="mask" x="0" y="0" width="100%" height="100%">
                    <rect
                      id="alpha"
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                    ></rect>
                    {name.map((word, i) => <text class="title" dx="50%" dy={`${i + 2.5}em`}>{word.toUpperCase()}</text>)}
                    {/* {splitArr.map((word, i) => console.log(word))} */}
                    {/* <text class="title" dx="50%" dy="2.5em">
                      ENJOY
                    </text>
                    <text class="title" dx="50%" dy="3.5em">
                      EVERY
                    </text>
                    <text class="title" dx="50%" dy="4.5em">
                      MOMENT
                    </text> */}
                  </mask>
                </defs>
                <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
              </svg>
              <div class="body">
                <p>
                  {description}
                </p>
              </div>
            </figcaption>
            <a href="#"></a>
          </figure>
        </div>
        {/* <div class="col-lg-6 col-md-6 hidden-sm hidden-xs">
        <figure>
            <div class="media media2"></div>
            <figcaption><svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%">
                            <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect><text class="title" dx="50%" dy="2.5em">ENJOY</text><text class="title" dx="50%" dy="3.5em">EVERY</text><text class="title" dx="50%" dy="4.5em">MOMENT</text>
                        </mask>
                    </defs>
                    <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
                </svg>
                <div class="body">
                    <p>Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone. Plaid skateboard man braid wayfarers.</p>
                </div>
            </figcaption><a href="#"></a>
        </figure>
    </div> */}
      </div>
    </>
  );
}
