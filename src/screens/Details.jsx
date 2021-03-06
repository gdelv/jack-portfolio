import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
// import { ProjectConsumer } from "../context";
import Flex from "../components/shared/Flex";
import PageHeader from "../components/shared/PageHeader";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import Subtitle from "../components/shared/Subtitle";
import firebase from "../firebase";
import { allProjects } from "../data";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Details() {
  const StyledButton = styled.button`
    background-image: linear-gradient(to right, #ff6e7f 0%, #bfe9ff  51%, #ff6e7f  100%);
     margin: 10px auto;
     padding: 5px;
     text-align: center;
    //  text-transform: uppercase;
     transition: 0.5s;
     background-size: 200% auto;
     color: black;            
     box-shadow: 0 0 20px #eee;
     border-radius: 10px;
     display: block;
     text-decoration: none;

     &:hover {
      background-position: right center; /* change the direction of the change here */
      color: black;
      text-decoration: none;
    }   
    @media (min-width: 600px) {
      padding: 10px;
    }  
   }
  
  `
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [project, setProject] = useState([])
  const [pdfLink, setPdfLink] = useState("")
  
  let { name } = useParams();
  useEffect(() => {
    let finalArr = [];
    const firebaseRef = firebase.firestore().collection("projects")
    if (!project.length) {
       // declare the data fetching function
       if (!pdfLink) {
         let projLookUp = allProjects.find(proj => proj.name === name)
        //  console.log(allProjects)
         setPdfLink(projLookUp.pdfLink.default)
       }
      // console.log("hello world  ->",getDownloadURL(ref(storage, "KC.pdf")))
      firebaseRef
        .where('name','==', name)
        .get()
        .then((snapshot) => {
          snapshot.forEach(doc => {
            finalArr.push(doc.data())
            });
            setProject(finalArr);
        })
    }
  },[project.length, pdfLink, name])


  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  // return (
    // <ProjectConsumer>
    //   {(value) => {
      let detailProject = 
        {
            id: 1,
            name: "",
            description: "Temp description",
            linkId: "a_Gf1wg9BYY",
            isVid: false,
            isWriting: false,
            pdfLink: "N/A"
        }
      
        let projDetail = project.length ? project[0]: detailProject;
        let projName = projDetail.name;
        let projLinkId = projDetail.videoLinkId;
        let projYTLink = `https://www.youtube.com/embed/${projLinkId}`;
        let projVimeoLink = `https://player.vimeo.com/video/${projLinkId}?h=3090842b6d&byline=0&portrait=0`;
        let isYTVideo = projDetail.isYTVideo;
        let isWritingPiece = projDetail.isWritingPiece;
        // let pdfLink = projDetail.pdfLink; //used before to look up to pdfLink pasted (not used anymore)
        // console.log('this is the link',pdfLink)
        return (
          <Flex width="100%">
            <PageHeader title={projName}/>
            {/* PROJECT NAME */}
            {/* <h1>{projName}</h1> */}
            {/* start */}
            {isWritingPiece ? <Flex>
              <Subtitle finalTitle='This is a partially fictional account of a partially non-fiction story about rambunctious kids having a romp at a music festival. Names have been changed to protect the innocent and the guilty'></Subtitle>
              <div style={{margin:'0 auto'}}>
              <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess}>
                <Page width='400' pageNumber={pageNumber} />
              </Document>
              </div>
              <div style={{paddingTop:'1em'}}>
                <Subtitle finalTitle={`Page ${pageNumber || (numPages ? 1 : "--")} of${" "}
                  ${numPages || "--"}`} ></Subtitle>
                  
                {/* </Title> */}
                <div style={{display: 'flex', justifyContent: "center", width: '40%', margin: '0 auto'}}>
                <StyledButton
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                >
                  Previous
                </StyledButton>
                <StyledButton
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                >
                  Next
                </StyledButton>
                </div>
              </div>
              <a href={pdfLink} target="__blank" download rel="noreferrer"><StyledButton
                  type="button"
                >
                  Click To Download
                </StyledButton></a>
            </Flex> : isYTVideo ? (
              <div>
                <iframe
                  width="80%"
                  height="600px"
                  src={projYTLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div>
                <iframe
                  title="Vimeo video player"
                  width="80%"
                  height="600px"
                  src={projVimeoLink}
                  frameBorder="0"
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* <p>
                  <a
                    href={`https://vimeo.com/${projLinkId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {projName}
                  </a>{" "}
                  from{" "}
                  <a
                    href="https://vimeo.com/user101633879"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Jack Simon
                  </a>
                </p>{" "} */}
              </div>
            )}
            
            {/* end */}
            {}
          </Flex>
        );
    //   }}
    // </ProjectConsumer>
  // );
}
