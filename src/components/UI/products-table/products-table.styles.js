import styled, { css } from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { IconButton, TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material";

import { ReactComponent as Recent } from "../../../assets/recent.svg";
import { ReactComponent as Printer } from "../../../assets/printer-green.svg";
import { ReactComponent as ArrowRightPink } from "../../../assets/arrow-right-pink.svg";

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
export const SpanTextThin = styled(SpanText)`
  color: #4e5969;
  font-weight: 400;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
`;

export const StyledIconButton = styled(IconButton)`
  width: 48px;
  height: 48px;
`;

const responsiveImage = () => {
  return css`
    width: 100%;
    height: auto;
    aspect-ratio: attr(width) / attr(height);
  `;
};

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
`;

export const RecentIcon = styled(Recent)`
  ${responsiveImage}
`;

export const PrinterIcon = styled(Printer)`
  ${responsiveImage}
`;

export const ArrowRightPinkIcon = styled(ArrowRightPink)`
  ${responsiveImage}
`;
