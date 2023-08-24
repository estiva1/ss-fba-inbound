import styled from "styled-components";
import Box from "@mui/material/Box";

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
