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
    backgroundColor: "#EEF1F533",
    color: "#78909C",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1rem",
    letterSpacing: "0.03125rem",
    padding: "10px 24px 6px 24px",
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    position: "relative",
    fontFamily: "Titillium Web",
    padding: "0px 24px 10px 24px",
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  backgroundColor: "#EEF1F533",
  alignItems: "top",
  height: "46px",

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const HighlightedText = styled.h3`
  color: #1565d8;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  margin: 0;
`;

export const PrimaryText = styled.h3`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const SecondaryText = styled.h4`
  color: #979797;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
  margin: 0;
`;

export const SpanText = styled.h5`
  color: #78909c;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.75rem;
  margin: 0;
`;
