import styled from "styled-components";

export const StyledThumbnail = styled.div`
  display: flex;
  padding: 2px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: max-content;
  max-width: max-content;
  border: 1px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
`;

export const ThumbnailText = styled.h4`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.625rem;
  margin: 0;
`;
