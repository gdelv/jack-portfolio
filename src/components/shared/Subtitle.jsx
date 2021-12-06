import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
  font-size: 1.5em;
  font-family: Jack;
  font-weight: 800;
  margin: 0;
`;

export default function Subtitle(props) {
  const { finalTitle } = props;
  return <TitleContainer>{finalTitle}</TitleContainer>;
}
