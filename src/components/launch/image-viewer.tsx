import React from "react";
import { Typography } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import styled from "styled-components";

interface ImageViewerProps {
  src?: string | null;
  alt?: string;
}

const ImageContainer = styled.div`
  width: 100%;
  height: 24vw;
  background-color: rgb(223, 230, 238);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const StyledIcon = styled(ImageIcon)`
  && {
    color: rgb(158, 173, 186);
    font-size: 10rem;
  }
`;

const StyledImg = styled.img`
  height: 60vh;
  width: auto;
  padding: 10px;
`;

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt }) => {
  if (!src) {
    return (
      <ImageContainer>
        <StyledIcon />
        <Typography variant="caption" component="p">
          No image available
        </Typography>
      </ImageContainer>
    );
  }

  return (
    <ImageContainer>
      <StyledImg src={src} alt={alt} />
    </ImageContainer>
  );
};

export default ImageViewer;
