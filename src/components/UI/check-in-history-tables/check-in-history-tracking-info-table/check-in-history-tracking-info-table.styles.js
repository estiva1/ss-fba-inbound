import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material";

export const StyledTableContainer = mStyled(TableContainer)(() => ({
  border: "none",
  borderRadius: "4px",
  boxShadow: "none",
  maxHeight: "250px",
}));

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8FAFB",
    color: "#979797",
    borderBottom: "1px solid #000",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "0.875rem",
    letterSpacing: "0.00375rem",
    height: "32px",
    padding: "0px 10px",
  },
  [`&.${tableCellClasses.body}`]: {
    padding: "10px",
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  backgroundColor: "#FFF",
  height: "42px",
}));

export const PrimaryText = styled.h4`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
