import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material";

export const ReceivingHistoryItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  padding: 16px;
  width: 100%;
  height: auto;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  background: #eef1f533;
`;

export const ItemImageContainer = styled.div`
  display: flex;
  width: 32px;
`;

export const ItemImage = styled.img`
  min-width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
`;

export const StyledTableContainer = mStyled(TableContainer)(() => ({
  border: 0,
}));

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "inherit",
    color: "#78909C",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "0.875rem",
    letterSpacing: "0.03125rem",
    padding: "0px 16px",
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    position: "relative",
    fontFamily: "Titillium Web",
    padding: "3px 16px 0px", // top, side, bottom
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  backgroundColor: "inherit",
  alignItems: "top",

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
  line-height: 1rem;
  margin: 0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-word;
  overflow: hidden;
`;
