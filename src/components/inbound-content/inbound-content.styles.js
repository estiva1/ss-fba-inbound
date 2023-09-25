import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const SwitchLabel = styled.h4`
  display: inline;
  color: #212529;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;
`;

export const SwitchValue = styled(SwitchLabel)`
  font-weight: 700;
`;


