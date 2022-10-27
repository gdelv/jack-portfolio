import React, { useEffect, useState }  from "react";
import styled from "styled-components";
import Flex from "../components/shared/Flex";
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import PageHeader from "../components/shared/PageHeader";
import Subtitle from "../components/shared/Subtitle";
import firebase from "../firebase";
import Loading from "../components/shared/Loading";


const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 2em;
`;

export default function Contact() {
  const [contactInfo, setContactInfo] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = firebase.firestore().collection("contact")
  let finalArr = [];

  useEffect(() => {
    if (!contactInfo.bio && !contactInfo.profileImage) {
      ref
        .get()
        .then((snapshot) => {
          snapshot.forEach(doc => {
            finalArr.push(doc.data())
            });
            setContactInfo(finalArr[0]);
            setIsLoaded(true)
        })
    }
  })
  return (
    <>
    {isLoaded ? <Flex width="100%">
      <PageHeader title="Jack Simon" subtitle="Director / Writer"/>
      <ImageContainer>
        <img src={contactInfo.profileImage} alt="Test" width="150px" height="200px" />
      </ImageContainer>
      <div style={{maxWidth:'300px', margin: '.5em auto'}}>
        <Subtitle finalTitle={contactInfo.bio}>
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
      <p style={{margin: ".5em auto"}}>
      <FaInstagram style={{color:'black'}} size={30}/>
      </p>
      <a href="https://www.instagram.com/jackdocsimon" target="_blank" rel="noreferrer">@jackdocsimon</a>
      <p style={{margin: ".5em auto"}}>
      <FaInstagram style={{color:'black'}} size={30}/>
      </p>
      <a href="https://www.instagram.com/frontfacingcamerachronicles/" target="_blank" rel="noreferrer">@frontfacingcamerachronicles</a>  
    </Flex> : <Loading/>}
    </>
  );
}
