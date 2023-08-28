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
    //height: "16px",
    padding: "16px 24px 6px 24px",
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    position: "relative",
    fontFamily: "Titillium Web",
    padding: "0px 24px 16px 24px",
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  backgroundColor: "#EEF1F533",
  alignItems: "top",
  height: "46px",

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

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

export const Arrow = styled.span`
  position: absolute;
  width: 30px;
  height: 8px;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  transition: left 0.3s ease;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none'%3e%3cpath fill='%23fff' fill-rule='evenodd' d='M0 4c0-.19.063-.371.174-.505a.55.55 0 0 1 .421-.21h26.372l-2.555-1.731a.736.736 0 0 1-.13-.232.842.842 0 0 1 0-.547.736.736 0 0 1 .13-.232.601.601 0 0 1 .193-.155.511.511 0 0 1 .456 0 .602.602 0 0 1 .193.155l3.571 2.951c.056.067.1.145.13.232a.84.84 0 0 1 0 .548.737.737 0 0 1-.13.232l-3.57 2.951a.55.55 0 0 1-.422.21.55.55 0 0 1-.421-.21.793.793 0 0 1-.175-.505c0-.19.063-.372.175-.506l2.555-1.732H.595a.55.55 0 0 1-.42-.21A.792.792 0 0 1 0 4Z' clip-rule='evenodd'/%3e%3c/svg%3e")`};
`;
