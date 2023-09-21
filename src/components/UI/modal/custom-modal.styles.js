import styled from "styled-components";
import { Box, Modal } from "@mui/material";

export const StyledModal = styled(Modal)`
  & > .MuiBackdrop-root {
    backdrop-filter: blur(5px);
    background-color: rgb(8, 40, 85, 0.3);
  }
`;

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
  overflow-y: scroll;

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
