import styled from "styled-components";
import { Box } from "@mui/material";

export const ModalContent = styled(Box)`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  inset: 0;
  margin: auto;
  background-color: #fff;
  min-width: 300px;
  min-height: 300px;
  width: max-content;
  height: max-content;
  max-height: 96vh;
  padding: 24px;
`;

export const EditCheckInPosContainer = styled.div`
  min-width: 800px;
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;
  gap: 20px;
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
