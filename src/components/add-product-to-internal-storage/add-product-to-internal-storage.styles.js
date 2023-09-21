import styled from "styled-components";

export const Container = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const Heading = styled.h2`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

export const Subheading = styled.h3`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 0;
`;
