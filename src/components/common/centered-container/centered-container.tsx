import styled from "styled-components";

const CenteredContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => props.theme.containerTop};
`;

export default CenteredContainer;
