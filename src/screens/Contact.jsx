import React from "react";
import styled from "styled-components";
import Flex from "../components/shared/Flex";
// import img from "../images/test.jpg";
import { FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Primary } from "../colors";
import jackHS from '../images/jackHeadshot.jpg'


const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default function Contact() {
  return (
    <Flex width="50%">
      <h1>Jack Simon <br></br>Writer / Director</h1>
      <ImageContainer>
        <img src={jackHS} alt="Test" width="100%" height="400px" />
      </ImageContainer>
      <p>
        After graduating from New York University with a BFA in Film &
        Television and spending a year working at BBDO Advertising’s production
        house, Jack paired his emerging filmmaking career with an offer to run
        the elite mogul skiing programs at Aspen Valley Ski Club and Mount Hood
        Summer Ski Camp. In addition to directing personal ski films and content
        for the U.S. Ski Team, he makes narrative-based music videos that cater
        to an artist’s visual brand.
      </p>
      {/* <p>Contact - </p> */}
      <p style={{margin: ".5em auto"}}>
      <MdEmail style={{color:'black'}} size={30}/>
      </p>
      <a href="mailto:jackdocsimon@gmail.com?" target="_blank" rel="noreferrer">
        jackdocsimon@gmail.com
      </a>


      <p style={{margin: ".5em auto"}}>
      <FaTwitter style={{color:`${Primary}`}} size={30}/>
      </p>
      <a href="https://twitter.com/Jack_doc_Simon?s=20" target="_blank" rel="noreferrer">@jack_doc_simon</a>  
      
    </Flex>
  );
}
