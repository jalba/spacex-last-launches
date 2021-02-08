import React from "react";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";
import styled from "styled-components";

import ImageViewer from "./image-viewer";
import BoldTypography from "../common/bold-typography";

import { Launch as LaunchData, Links } from "./types";

interface LaunchProps {
  data?: LaunchData;
}

const StyledCard = styled(Card)`
  width: "100%";
`;

const CenteredCardActions = styled(CardActions)`
  && {
    justify-content: center;
    padding: 15px;

    & span {
      text-transform: initial;
    }
  }
`;

const getLink = (links?: Links) => {
  let link = "";

  if (links) {
    const { article_link, video_link, wikipedia } = links;

    if (typeof article_link === "string") {
      link = article_link;
    } else if (typeof video_link === "string") {
      link = video_link;
    } else if (typeof wikipedia === "string") {
      link = wikipedia;
    }
  }

  return link;
};

const Launch: React.FC<LaunchProps> = ({ data }) => {
  const link = getLink(data?.links);

  return (
    <StyledCard>
      <ImageViewer
        src={data?.links?.mission_patch_small}
        alt={data?.mission_name}
      />
      <CardContent>
        <BoldTypography variant="h5" gutterBottom>
          {data?.mission_name}
        </BoldTypography>
        {data?.details || "No details provided"}
      </CardContent>
      <CenteredCardActions>
        <Button
          color="primary"
          variant="contained"
          disabled={!Boolean(link)}
          href={link}
          title={link ? "Follow link" : "No link available"}
        >
          See more
        </Button>
      </CenteredCardActions>
    </StyledCard>
  );
};

export default Launch;
