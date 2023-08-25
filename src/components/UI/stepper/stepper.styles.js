import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 800px;
  width: 90%;
`;

export const Step = styled.div`
  position: relative;
  margin: 0px 8px 16px 8px;
`;

export const StepLabel = styled.h4`
  position: absolute;
  top: 26px;
  left: 50%;
  min-width: max-content;
  width: max-content;
  transform: translateX(-50%);
  color: #4e5969;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: 0.00375rem;
  margin: 0;
`;

export const StepLabelActive = styled(StepLabel)`
  color: #000;
`;

export const StepConnector = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 22px;
  background: linear-gradient(90deg, #1565d8 0%, #c4c4c4 100%);
`;
