import React from 'react'
import styled from "styled-components";
import Title from '../shared/Title'

const TitleContainer = styled.div`
width: 100%;
text-align: center;
display: flex;
justify-content: center;
//   margin: 0 auto;
flex-direction: column;
background: linear-gradient(
  180deg,
  rgba(0, 206, 209, 1) 12%,
  rgba(255, 193, 204, 1) 78%
);
`;

export default function PageHeader(props) {
    const {title, subtitle} = props;
    return (
        <TitleContainer>
        {/* <div> */}
          <Title finalTitle={title} />
          <Title finalTitle={subtitle} />
        {/* </div> */}
      </TitleContainer>
    )
}
