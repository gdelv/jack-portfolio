import React from "react";
import styled from "styled-components";
import Flex from "../components/shared/Flex";
import { FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import jackHS from '../images/jackHeadshot.jpg'
import PageHeader from "../components/shared/PageHeader";
import Subtitle from "../components/shared/Subtitle";


const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 2em;
`;

export default function Contact() {
  return (
    <Flex width="100%">
      <PageHeader title="Jack Simon" subtitle="Director / Writer"/>
      <ImageContainer>
        <img src={jackHS} alt="Test" width="150px" height="200px" />
      </ImageContainer>
      <div style={{maxWidth:'300px', margin: '.5em auto'}}>
        <Subtitle finalTitle='After graduating from New York University with a BFA in Film &
        Television and spending a year working at BBDO Advertising’s production
        house, Jack paired his emerging filmmaking career with an offer to run
        the elite mogul skiing programs at Aspen Valley Ski Club and Mount Hood
        Summer Ski Camp. In addition to directing personal ski films and content
        for the U.S. Ski Team, he makes narrative-based music videos that cater
        to an artist’s visual brand.'>
        </Subtitle>
        </div>
      <p >
      </p>
      {/* <p>Contact - </p> */}
      <p style={{margin: ".5em auto"}}>
      <MdEmail style={{color:'black'}} size={30}/>
      </p>
      <a href="mailto:jackdocsimon@gmail.com?" target="_blank" rel="noreferrer">
        jackdocsimon@gmail.com
      </a>
      <p style={{margin: ".5em auto"}}>
      <FaTwitter style={{color:'black'}} size={30}/>
      </p>
      <a href="https://twitter.com/Jack_doc_Simon?s=20" target="_blank" rel="noreferrer">@jack_doc_simon</a>  
    </Flex>
  );
}
