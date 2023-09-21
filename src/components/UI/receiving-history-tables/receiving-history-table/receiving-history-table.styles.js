import styled, { css } from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { IconButton, TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material";

import { ReactComponent as Trash } from "../../../../assets/trash.svg";
import { ReactComponent as Printer } from "../../../../assets/printer-blue.svg";
import { ReactComponent as TruckWithBarCode } from "../../../../assets/truck-with-bar-code.svg";

export const StyledTableContainer = styled(TableContainer)`
  border-radius: 4px;
  box-shadow: none;
`;

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8FAFB",
    border: "none",
    color: "#78909C",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1rem",
    letterSpacing: "0.03125rem",
    minHeight: "24px",
    padding: "8px",
  },
  [`&.${tableCellClasses.body}`]: {
    position: "relative",
    borderColor: "#EEF1F5",
    fontFamily: "Titillium Web",
    padding: "8px 12px",
  },
}));

export const StyledTableRow = styled(TableRow)`
  background-color: #fff;
  align-items: center;
`;

export const PrimaryText = styled.h3`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8;
  font-weight: 700;
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

export const StyledIconButton = styled(IconButton)`
  width: 40px;
  height: 40px;
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
  width: 16px;
`;

export const PrinterIcon = styled(Printer)`
  ${responsiveImage}
`;

export const TruckWithBarCodeIcon = styled(TruckWithBarCode)`
  ${responsiveImage}
`;

export const TrashIcon = styled(Trash)`
  ${responsiveImage}
`;
