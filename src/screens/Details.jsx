import React, { useState } from "react";
import { ProjectConsumer } from "../context";
import Flex from "../components/shared/Flex";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

import embrace from "../writings/embrace.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// import { detailProject } from '../data';

export default function Details() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
  return (
    <ProjectConsumer>
      {(value) => {
        let projDetail = value.detailProject;
        let projName = projDetail.name;
        let projLinkId = projDetail.linkId;
        let projYTLink = `https://www.youtube.com/embed/${projLinkId}`;
        let projVimeoLink = `https://player.vimeo.com/video/${projLinkId}?h=3090842b6d&byline=0&portrait=0`;
        let isVideo = projDetail.isVid;
        let isWritingPiece = projDetail.isWriting;
        return (
          <Flex width="100%">
            {/* PROJECT NAME */}
            <h1>{projName}</h1>
            {/* start */}
            {isWritingPiece ? <Flex>
              <Document file={embrace} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
              <div>
                <p>
                  Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                  {numPages || "--"}
                </p>
                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>
            </Flex> : isVideo ? (
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
                  frameborder="0"
                  allow="fullscreen; picture-in-picture"
                  allowfullscreen
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
      }}
    </ProjectConsumer>
  );
}
