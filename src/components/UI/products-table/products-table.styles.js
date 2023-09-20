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
    padding: "16px",
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
  gap: 6px;
  align-items: center;
  justify-content: flex-end;
`;

export const PrimaryText = styled.h3`
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
  word-break: break-word;
  overflow: hidden;
`;

export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8;
  line-height: 1rem;
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
  display: flex;
  flex-direction: row;
  color: #78909c;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.75rem;
  margin: 0;
`;
export const SpanTextHighlighted = styled(SpanText)`
  color: #4e5969;
  font-weight: 400;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
`;
