import styled from "styled-components";
import { Box } from "@mui/material";

export const ModalContent = styled(Box)`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  inset: 0;
  margin: auto;
  min-width: 300px;
  min-height: 300px;
  width: max-content;
  height: max-content;
  overflow-y: scroll;
  max-height: 96vh;
  background-color: #fff;
  padding: 24px;


  &::-webkit-scrollbar {
    width: 0.4em;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    &:hover {
      background-color: hsl(0, 0%, 81.2%);
    }
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 81.2%);
  }
`;

export const CheckInContainer = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Heading = styled.h2`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

export const Total = styled.h4`
  color: #4e5969;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
`;
