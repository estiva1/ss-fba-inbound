import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { TableCell, TableRow, tableCellClasses } from "@mui/material";

export const StyledTableContainer = styled.div`
  border: 1px solid #cfd8dc;
  border-radius: 4px;
  box-shadow: none;
  background-color: #eef1f533;
`;

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "inherit",
    color: "#78909C",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1rem",
    letterSpacing: "0.03125rem",
    //height: "16px",
    padding: "0px 24px 0px 24px",
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    position: "relative",
    fontFamily: "Titillium Web",
    padding: "0px 24px 14px 24px",
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  backgroundColor: "inherit",
  alignItems: "top",
  height: "46px",

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
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
export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 24px 24px 16px 24px;
`;
