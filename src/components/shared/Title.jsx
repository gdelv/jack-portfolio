import React from 'react'
import styled from "styled-components";

const TitleContainer = styled.h1`
    font-size: 3em;
    font-family: Jack;
    font-weight: 800;
    margin: 0;
`

export default function Title(props) {
    const { finalTitle } = props;
    return (
            <TitleContainer>{finalTitle}</TitleContainer>
    )
}
