import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material";

export const StyledTableContainer = mStyled(TableContainer)(() => ({
  border: "1px solid #CFD8DC",
  borderRadius: "4px",
  boxShadow: "none",
}));

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8FAFB",
    color: "#78909C",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1rem",
    letterSpacing: "0.03125rem",
    height: "32px",
    padding: "0px 16px",
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#4E6069",
    fontFamily: "Titillium Web",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.25rem",
    padding: "0px 16px",
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  backgroundColor: "#FFF",
  height: "42px",

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
`;
