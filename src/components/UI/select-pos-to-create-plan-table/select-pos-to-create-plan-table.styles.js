import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { TableCell, TableContainer, TableRow, Typography, tableCellClasses } from "@mui/material";

  export const StyledTableContainer = mStyled(TableContainer)(() => ({
    borderRadius: "4px",
    boxShadow: "none",
    maxHeight: "500px",

    "&::-webkit-scrollbar": {
      width:" 0.4em",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundCcolor: "transparent",
     " &:hover": {
        backgroundColor: "hsl(0, 0%, 81.2%)",
      }
    },
    "&:hover::-webkit-scrollbar-thumb": {
      backgroundColor: "hsl(0, 0%, 81.2%)",
    }
  }));

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
    padding: "8px 16px",
  },
  [`&.${tableCellClasses.body}`]: {
    position: "relative",
    borderColor: "#EEF1F5",
    fontFamily: "Titillium Web",
    padding: "12px 16px",
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  backgroundColor: "#FFF",
  alignItems: "center",
}));

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

export const PrimaryText = styled(Typography)`
  color: #4e5969 !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Titillium Web !important;
  font-size: 0.875rem !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 1.125rem !important;
`;

export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8 !important;
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

export const SpanTextThin = styled(SpanText)`
  color: #4e5969;
  font-weight: 400;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
`;
