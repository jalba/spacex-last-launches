import React from "react";
import { ListItem, Card, CardActionArea, CardContent } from "@material-ui/core";
import { useNavigate } from "@reach/router";
import styled from "styled-components";
import format from "date-fns/format";

import BoldTypography from "../common/bold-typography";

import { Launch } from "./types";

interface LaunchItemProps {
  launch: Launch;
}

const StyledCard = styled(Card)`
  width: 100%;
`;

const DateFooter = styled.div`
  width: 100%;
  text-align: right;
  font-style: italic;
  font-size: 16px;
  margin-top: 5px;
`;

const LaunchItem: React.FC<LaunchItemProps> = ({ launch }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/launch/${launch.id}`);
  };

  return (
    <ListItem disableGutters>
      <StyledCard>
        <CardActionArea onClick={handleClick}>
          <CardContent>
            <BoldTypography variant="h5" gutterBottom>
              {launch.mission_name}
            </BoldTypography>
            <p>{launch.details || "No details provided"}</p>
            <DateFooter>
              {format(Number(launch?.launch_date_unix) * 1000, "dd/MM/yyy")}
            </DateFooter>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </ListItem>
  );
};

export default LaunchItem;
