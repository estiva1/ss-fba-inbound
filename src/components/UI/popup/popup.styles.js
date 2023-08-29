import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export const StyledDialogTitle = styled(DialogTitle)`
  color: #272b41 !important;
  text-align: center !important;
  font-family: Titillium Web !important;
  font-size: 1.125rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 1.5rem !important;
  padding: 0 !important;
  margin: 0 !important;
`;

export const StyledDialog = mStyled(Dialog)(() => ({
  "& .MuiPaper-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "32px",
    width: "420px",
    height: "fit-content",
  },
}));

export const AlertSign = styled.span`
  width: 80px;
  height: 80px;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='none'%3e%3cg fill='%23F31819' clip-path='url(%23a)'%3e%3cpath d='M39.69 10.08a.69.69 0 0 1 .64 0c.11.07.2.17.27.28L74.88 68.7c.18.3.18.62.01.91a.82.82 0 0 1-.27.3.58.58 0 0 1-.33.09H5.73a.58.58 0 0 1-.33-.09.82.82 0 0 1-.27-.3.88.88 0 0 1 .01-.91l34.28-58.34a.73.73 0 0 1 .27-.28Zm5.22-2.25a5.65 5.65 0 0 0-9.8 0L.83 66.16c-2.29 3.9.45 8.84 4.9 8.84h68.56c4.45 0 7.19-4.95 4.9-8.84L44.91 7.83Z'/%3e%3cpath d='M35.01 60a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm.5-30.03a4.52 4.52 0 1 1 9 0l-1.76 17.54a2.76 2.76 0 0 1-5.5 0L35.5 29.97Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h80v80H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;
