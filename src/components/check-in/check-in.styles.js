import { Box } from "@mui/material";
import styled from "styled-components";

export const ModalContent = styled(Box)`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  inset: 0;
  margin: auto;
  width: max-content;
  height: max-content;
  background-color: #fff;
  padding: 24px;
`;

export const CheckInContainer = styled.div`
  width: 1060px;
  display: flex;
  flex-direction: column;
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
