import React from "react";
import styled from "styled-components";
import { ProjectConsumer } from "../context";
// import { detailProject } from '../data';

const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  // border: 1px solid red;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default function Details() {
  return (
    <ProjectConsumer>
      {(value) => {
        let projDetail = value.detailProject;
        let projName = projDetail.name;
        let projLinkId = projDetail.linkId;
        let projYTLink = `https://www.youtube.com/embed/${projLinkId}`;
        let projVimeoLink = `https://player.vimeo.com/video/${projLinkId}?h=3090842b6d&byline=0&portrait=0`;
        let isYouTubeVideo = projDetail.isYT;
        return (
          <DetailContainer>
            {/* PROJECT NAME */}
            <h1>{projName}</h1>
            {isYouTubeVideo ? (
              <div>
                <iframe
                  width="80%"
                  height="315"
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
                  height="315"
                  src={projVimeoLink}
                  frameborder="0"
                  allow="fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <p>
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
                </p>{" "}
              </div>
            )}
          </DetailContainer>
        );
      }}
    </ProjectConsumer>
  );
}
