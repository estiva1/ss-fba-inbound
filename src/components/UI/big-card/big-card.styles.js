import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 291px;
  padding: 16px 24px;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 4px;
  border: ${(props) => `1px solid ${props.border}`};
  background-color: ${(props) => props.backgroundColor};
`;

export const CardDescriptionText = styled.h4`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem;
  margin: 0;
`;

export const CardValue = styled.h2`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
  margin: 0;
`;
