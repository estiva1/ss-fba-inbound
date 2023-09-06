import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  min-height: 36px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.type === "warning" ? "#FF9900" : "#00a3ff")};
  background: ${(props) => (props.type === "warning" ? "#FFCB000D" : "#00A3FF0D")};
`;

export const InfoText = styled.h3`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  margin: 0;
`;

export const SpoilerText = styled(InfoText)`
  color: #1565d8;
  text-align: right;
  text-decoration-line: underline;
`;
