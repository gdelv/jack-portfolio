import React from "react";
import styled from "styled-components";


const Flex = props => {
    console.log(props);
    const FlexContainer = styled.div`
        width: ${props.width};
        // min-height: 90vh;
        // border: 1px solid red;
        text-align: center;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        flex-direction: column;
    `;
    return (
        <FlexContainer>
            {props.children}
        </FlexContainer>
    )
}
export default Flex