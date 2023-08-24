import styled from "styled-components";

export const StyledImage = styled.img`
  width: ${(props) => (props.enlarged ? "24px" : "16px")};
  height: ${(props) => (props.enlarged ? "24px" : "16px")};
  cursor: pointer;
  ${(props) =>
    props.rotated &&
    `
    transform: rotate(180deg)
    
  `}
`;
