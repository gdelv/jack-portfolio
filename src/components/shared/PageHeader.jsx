import React from 'react'
import styled from "styled-components";
import Title from '../shared/Title'
import { ProjectConsumer } from "../../context";




export default function PageHeader(props) {
    const {title, subtitle} = props;
    return (
      <ProjectConsumer>
        {(value) => {
        let lightColor = value.lightColor();
        let darkColor = value.darkColor();
        const TitleContainer = styled.div`
width: 100%;
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
background: linear-gradient(
  180deg,
  ${lightColor} 12%,
  ${darkColor} 78%
);
`;
    return (
        <TitleContainer>
        {/* <div> */}
          <Title finalTitle={title} />
          <Title finalTitle={subtitle} />
        {/* </div> */}
      </TitleContainer>
    )}
  }
</ProjectConsumer>
    )
}
